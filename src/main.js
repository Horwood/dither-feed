import * as ort from 'onnxruntime-web';
import wasmUrl from './assets/ort-wasm-simd-threaded.jsep.wasm?url';
import './style.css';

const SIZE = 24;
const PIXEL_COUNT = SIZE * SIZE;
const BATCH_SIZE = 4;
const REVEAL_MS = 1260;
const WAVE_LEAD_MS = 100;
const NOISE = 0.065;
const RECENT_LIMIT = 64;
const SYMMETRIES = ['vertical', 'horizontal'];
const BOTTOM_EPSILON = 3;
const LOAD_INTENT_THRESHOLD = 220;
const INITIAL_BATCHES = window.matchMedia('(max-width: 640px)').matches ? 2 : 3;

const terminalScroll = document.querySelector('#terminal-scroll');
const feed = document.querySelector('#feed');
const sentinel = document.querySelector('#feed-sentinel');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

let session;
let modelInfo;
let latentBank;
let loading = false;
let blocked = false;
let userHasScrolled = false;
let bottomIntent = 0;
let lastTouchY = null;
let recentCodes = [];
const recentCodeSet = new Set();

const shaderVertexSource = `
  attribute vec2 position;
  varying vec2 textureUv;

  void main() {
    textureUv = position * 0.5 + 0.5;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const shaderFragmentSource = `
  precision highp float;

  uniform sampler2D pattern;
  uniform vec2 resolution;
  uniform float progress;
  varying vec2 textureUv;

  float easeInOutCubic(float value) {
    return value < 0.5
      ? 4.0 * value * value * value
      : 1.0 - pow(-2.0 * value + 2.0, 3.0) * 0.5;
  }

  float luminance(vec3 color) {
    return dot(color, vec3(0.2126, 0.7152, 0.0722));
  }

  void main() {
    vec2 uv = textureUv;
    vec2 centered = uv - 0.5;
    centered.x *= resolution.x / resolution.y;
    float distanceFromCenter = length(centered) * 2.0;
    vec2 direction = centered / max(length(centered), 0.001);

    vec2 texel = vec2(1.0 / 24.0);
    float height = luminance(texture2D(pattern, uv).rgb);
    float heightLeft = luminance(texture2D(pattern, uv - vec2(texel.x, 0.0)).rgb);
    float heightRight = luminance(texture2D(pattern, uv + vec2(texel.x, 0.0)).rgb);
    float heightDown = luminance(texture2D(pattern, uv - vec2(0.0, texel.y)).rgb);
    float heightUp = luminance(texture2D(pattern, uv + vec2(0.0, texel.y)).rgb);
    vec2 reliefNormal = vec2(heightLeft - heightRight, heightDown - heightUp);
    vec2 pixelCell = fract(uv * 24.0) - 0.5;
    float pixelEdge = smoothstep(0.34, 0.49, max(abs(pixelCell.x), abs(pixelCell.y)));
    float pixelRelief = height * 0.72 + (1.0 - pixelEdge) * 0.28;
    vec2 pixelCenterUv = (floor(uv * 24.0) + 0.5) / 24.0;
    vec2 pixelCentered = pixelCenterUv - 0.5;
    pixelCentered.x *= resolution.x / resolution.y;
    float pixelDistance = length(pixelCentered) * 2.0;

    float eased = easeInOutCubic(progress);
    float waveRadius = eased * 1.45;
    float steppedDistance = mix(distanceFromCenter, pixelDistance, 0.62);
    float waveDistance = steppedDistance - waveRadius
      - (pixelRelief - 0.5) * 0.052;
    float envelope = exp(-waveDistance * waveDistance * 155.0);
    float wake = exp(-waveDistance * waveDistance * 58.0);
    float innerRipple = sin(waveDistance * 92.0 - progress * 10.0);
    float life = smoothstep(0.0, 0.07, progress)
      * (1.0 - smoothstep(0.72, 1.0, progress));

    vec2 refraction = (
      direction * (
        innerRipple * 0.064
        + sin(waveDistance * 38.0 - progress * 7.0) * 0.024
      )
      + reliefNormal * (0.048 + pixelEdge * 0.026)
    ) * (envelope * 0.82 + wake * 0.18) * life;
    vec2 redShift = refraction * 1.72;
    vec2 blueShift = refraction * 0.38;
    vec4 baseSample = texture2D(pattern, uv);
    float red = texture2D(pattern, uv + redShift).r;
    float green = texture2D(pattern, uv + refraction).g;
    float blue = texture2D(pattern, uv + blueShift).b;
    vec3 color = vec3(red, green, blue);

    float crest = exp(-waveDistance * waveDistance * 620.0);
    float caustic = envelope
      * (0.5 + 0.5 * cos(waveDistance * 138.0 - progress * 16.0));
    vec3 reliefVector = normalize(vec3(reliefNormal * 5.0, 0.72));
    float reliefLight = clamp(
      dot(reliefVector, normalize(vec3(-0.55, 0.65, 0.8))),
      0.0,
      1.0
    );
    float pixelSpecular = envelope
      * (0.25 + reliefLight * 0.75)
      * (0.45 + pixelEdge * 0.55);
    float faceShade = (reliefLight - 0.42)
      * envelope * (1.0 - pixelEdge) * 0.36;
    color = clamp(
      color + vec3(faceShade - pixelEdge * envelope * 0.055) * life,
      0.0,
      1.0
    );
    vec3 spectralLight = vec3(0.65, 0.94, 1.0)
      * crest * (0.36 + pixelRelief * 0.42)
      + vec3(0.28, 0.68, 1.0) * caustic * 0.22
      + vec3(0.82, 0.98, 1.0) * pixelSpecular * 0.34;

    gl_FragColor = vec4(
      color + spectralLight * life * baseSample.a,
      baseSample.a
    );
  }
`;

const bayer8 = [
  [0, 48, 12, 60, 3, 51, 15, 63],
  [32, 16, 44, 28, 35, 19, 47, 31],
  [8, 56, 4, 52, 11, 59, 7, 55],
  [40, 24, 36, 20, 43, 27, 39, 23],
  [2, 50, 14, 62, 1, 49, 13, 61],
  [34, 18, 46, 30, 33, 17, 45, 29],
  [10, 58, 6, 54, 9, 57, 5, 53],
  [42, 26, 38, 22, 41, 25, 37, 21],
];

function waveScore(position) {
  const x = position % SIZE;
  const y = Math.floor(position / SIZE);
  return x + y + bayer8[y % 8][x % 8] / 64;
}

function buildSymmetryOrder(symmetry) {
  return Array.from({ length: PIXEL_COUNT }, (_, position) => {
    const x = position % SIZE;
    const y = Math.floor(position / SIZE);
    const mirror = symmetry === 'vertical'
      ? y * SIZE + (SIZE - 1 - x)
      : (SIZE - 1 - y) * SIZE + x;
    if (position > mirror) return null;
    return {
      position,
      mirror,
      score: Math.min(waveScore(position), waveScore(mirror)),
    };
  })
    .filter(Boolean)
    .sort((a, b) => a.score - b.score || a.position - b.position);
}

const symmetryOrders = {
  vertical: buildSymmetryOrder('vertical'),
  horizontal: buildSymmetryOrder('horizontal'),
};

function createRevealOrder(seed) {
  const order = Array.from({ length: PIXEL_COUNT }, (_, position) => position);
  let state = (seed + 1) >>> 0;
  for (let index = order.length - 1; index > 0; index -= 1) {
    state = (state * 1664525 + 1013904223) >>> 0;
    const swap = state % (index + 1);
    [order[index], order[swap]] = [order[swap], order[index]];
  }
  return order;
}

function assertResponse(response, path) {
  if (!response.ok) throw new Error('Unable to load ' + path + ' (' + response.status + ')');
  return response;
}

function gaussian() {
  let one = 0;
  let two = 0;
  while (one === 0) one = Math.random();
  while (two === 0) two = Math.random();
  return Math.sqrt(-2 * Math.log(one)) * Math.cos(2 * Math.PI * two);
}

function rememberCode(code) {
  recentCodes.push(code);
  recentCodeSet.add(code);
  if (recentCodes.length > RECENT_LIMIT) recentCodeSet.delete(recentCodes.shift());
}

function chooseCode() {
  let code = Math.floor(Math.random() * modelInfo.perClass);
  let attempts = 0;
  while (recentCodeSet.has(code) && attempts < 12) {
    code = Math.floor(Math.random() * modelInfo.perClass);
    attempts += 1;
  }
  rememberCode(code);
  return code;
}

function createCanvas(className) {
  const canvas = document.createElement('canvas');
  canvas.width = SIZE;
  canvas.height = SIZE;
  if (className) canvas.className = className;
  canvas.setAttribute('aria-hidden', 'true');
  return canvas;
}

function drawSkeleton(canvas, seed) {
  const context = canvas.getContext('2d');
  const image = context.createImageData(SIZE, SIZE);
  for (let position = 0; position < PIXEL_COUNT; position += 1) {
    const x = position % SIZE;
    const y = Math.floor(position / SIZE);
    const variation = (x * 17 + y * 31 + seed * 13 + ((x + y) % 5) * 7) % 20;
    const colour = 14 + variation;
    const offset = position * 4;
    image.data[offset] = colour;
    image.data[offset + 1] = colour;
    image.data[offset + 2] = colour;
    image.data[offset + 3] = 255;
  }
  context.putImageData(image, 0, 0);
}

function createReadout(seed, symmetry) {
  const readout = document.createElement('div');
  readout.className = 'tile-readout';
  readout.setAttribute('aria-hidden', 'true');

  const entries = [
    ['ID', String(seed).padStart(4, '0')],
    ['PX', '24×24'],
    ['SYM', symmetry === 'vertical' ? 'V' : 'H'],
    ['PAL', '64'],
    ['BYR', '8×8'],
  ];

  entries.forEach(([label, value]) => {
    const item = document.createElement('span');
    item.className = 'tile-readout-item';
    item.textContent = label + ' ' + value;
    readout.append(item);
  });

  const code = document.createElement('span');
  code.className = 'tile-readout-item tile-readout-code';
  code.textContent = 'LAT ---';
  readout.append(code);

  return { readout, code };
}

function createTile(seed) {
  const element = document.createElement('div');
  element.className = 'pattern-tile';
  element.setAttribute('role', 'img');
  element.setAttribute('tabindex', '0');
  element.setAttribute('aria-label', 'Generating pixel pattern');
  element.dataset.state = 'generating';

  const symmetry = SYMMETRIES[seed % SYMMETRIES.length];
  element.dataset.symmetry = symmetry;

  const skeleton = createCanvas('skeleton-canvas');
  const output = createCanvas('output-canvas');
  const readout = createReadout(seed, symmetry);
  drawSkeleton(skeleton, seed);
  element.append(skeleton, output, readout.readout);

  return {
    element,
    skeleton,
    output,
    context: output.getContext('2d'),
    readout: readout.readout,
    readoutCode: readout.code,
    seed,
    symmetry,
    revealOrder: createRevealOrder(seed),
    image: null,
    revealed: 0,
  };
}

function appendBatch() {
  const tiles = [];
  const fragment = document.createDocumentFragment();
  const seed = feed.children.length;
  for (let index = 0; index < BATCH_SIZE; index += 1) {
    const tile = createTile(seed + index);
    tiles.push(tile);
    fragment.append(tile.element);
  }
  feed.append(fragment);
  return tiles;
}

function isEdge(position) {
  const x = position % SIZE;
  const y = Math.floor(position / SIZE);
  return x === 0 || x === SIZE - 1 || y === 0 || y === SIZE - 1;
}

const backgroundPairs = [
  [[0, 0, 85], [0, 0, 170]],
  [[85, 0, 0], [170, 0, 0]],
  [[0, 85, 0], [0, 170, 0]],
  [[85, 0, 85], [170, 0, 170]],
  [[85, 85, 0], [170, 170, 0]],
  [[0, 85, 85], [0, 170, 170]],
  [[85, 85, 85], [170, 170, 170]],
];

function paletteIndex(colour) {
  return modelInfo.palette.findIndex((candidate) => (
    candidate[0] === colour[0]
    && candidate[1] === colour[1]
    && candidate[2] === colour[2]
  ));
}

function densifyPixels(pixels, symmetry, seed) {
  const result = pixels.slice();
  const keepBlackFrame = seed % 4 === 0;
  const counts = new Map();

  pixels.forEach((colour) => {
    if (colour !== 0) counts.set(colour, (counts.get(colour) || 0) + 1);
  });

  let dominant = 1;
  let dominantCount = 0;
  counts.forEach((count, colour) => {
    if (count > dominantCount) {
      dominant = colour;
      dominantCount = count;
    }
  });

  const dominantColour = modelInfo.palette[dominant] || [85, 85, 85];
  const hue = dominantColour.indexOf(Math.max(...dominantColour));
  const pair = backgroundPairs[(hue + seed) % backgroundPairs.length];
  const base = Math.max(1, paletteIndex(pair[0]));
  const accent = Math.max(1, paletteIndex(pair[1]));

  symmetryOrders[symmetry].forEach(({ position, mirror }) => {
    if (pixels[position] !== 0) return;
    if (keepBlackFrame && isEdge(position)) return;
    const x = position % SIZE;
    const y = Math.floor(position / SIZE);
    const threshold = bayer8[(y + seed) % 8][(x + seed * 3) % 8];
    const colour = threshold < 8 ? accent : base;
    result[position] = colour;
    result[mirror] = result[position];
  });

  return result;
}

function readPixels(logits, imageIndex, symmetry, seed) {
  const pixels = new Uint8Array(PIXEL_COUNT);
  const imageOffset = imageIndex * modelInfo.palette.length * PIXEL_COUNT;
  symmetryOrders[symmetry].forEach(({ position, mirror }) => {
    let colour = 0;
    let score = -Infinity;
    for (let candidate = 0; candidate < modelInfo.palette.length; candidate += 1) {
      const next = logits[imageOffset + candidate * PIXEL_COUNT + position];
      if (next > score) {
        score = next;
        colour = candidate;
      }
    }
    pixels[position] = colour;
    pixels[mirror] = colour;
  });
  return densifyPixels(pixels, symmetry, seed);
}

function writePixel(image, position, colour) {
  const offset = position * 4;
  image.data[offset] = colour[0];
  image.data[offset + 1] = colour[1];
  image.data[offset + 2] = colour[2];
  image.data[offset + 3] = 255;
}

function drawFrame(tile, pixels, image, count) {
  const start = tile.revealed;
  const end = Math.min(count, PIXEL_COUNT);
  for (let index = start; index < end; index += 1) {
    const position = tile.revealOrder[index];
    const colour = modelInfo.palette[pixels[position]];
    writePixel(image, position, colour);
  }
  if (end !== start) {
    tile.context.putImageData(image, 0, 0);
    tile.revealed = end;
  }
}

function compileShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const message = gl.getShaderInfoLog(shader) || 'Unknown shader compile error';
    gl.deleteShader(shader);
    throw new Error(message);
  }
  return shader;
}

function startShaderBurst(element, sourceCanvas) {
  if (reducedMotion.matches) return;

  const canvas = createCanvas('shader-effect');
  const bounds = element.getBoundingClientRect();
  const scale = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.max(96, Math.round(bounds.width * scale));
  canvas.height = Math.max(96, Math.round(bounds.height * scale));
  element.append(canvas);

  const gl = canvas.getContext('webgl', {
    alpha: true,
    antialias: false,
    depth: false,
    premultipliedAlpha: false,
    preserveDrawingBuffer: false,
  });
  if (!gl) {
    canvas.remove();
    return;
  }

  let vertexShader;
  let fragmentShader;
  let program;
  let buffer;
  let texture;
  let disposed = false;

  const dispose = () => {
    if (disposed) return;
    disposed = true;
    if (buffer) gl.deleteBuffer(buffer);
    if (texture) gl.deleteTexture(texture);
    if (program) gl.deleteProgram(program);
    if (vertexShader) gl.deleteShader(vertexShader);
    if (fragmentShader) gl.deleteShader(fragmentShader);
    canvas.remove();
    delete element.dataset.effect;
    const loseContext = gl.getExtension('WEBGL_lose_context');
    if (loseContext) loseContext.loseContext();
  };

  try {
    vertexShader = compileShader(gl, gl.VERTEX_SHADER, shaderVertexSource);
    fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, shaderFragmentSource);
    program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      throw new Error(gl.getProgramInfoLog(program) || 'Unknown shader link error');
    }

    buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW,
    );

    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.useProgram(program);
    const position = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
    gl.uniform2f(
      gl.getUniformLocation(program, 'resolution'),
      canvas.width,
      canvas.height,
    );
    texture = gl.createTexture();
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      sourceCanvas,
    );
    gl.uniform1i(gl.getUniformLocation(program, 'pattern'), 0);
    gl.clearColor(0, 0, 0, 0);
  } catch (error) {
    console.warn('dither-feed: shader unavailable', error);
    dispose();
    return;
  }

  const progressLocation = gl.getUniformLocation(program, 'progress');
  element.dataset.effect = 'active';

  const render = (progress) => {
    if (disposed) return;
    try {
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texSubImage2D(
        gl.TEXTURE_2D,
        0,
        0,
        0,
        gl.RGBA,
        gl.UNSIGNED_BYTE,
        sourceCanvas,
      );
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform1f(progressLocation, progress);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    } catch (error) {
      console.warn('dither-feed: shader frame skipped', error);
      dispose();
    }
  };

  return { render, dispose };
}

function animateBatch(tiles, images) {
  const imageBuffers = tiles.map((tile) => {
    tile.image = tile.context.createImageData(SIZE, SIZE);
    return tile.image;
  });
  let effects = [];
  let effectsStarted = false;

  return new Promise((resolve) => {
    const start = performance.now();

    const finish = () => {
      tiles.forEach((tile, index) => {
        tile.skeleton.remove();
        tile.element.setAttribute('aria-label', 'Generated pixel pattern ' + (index + 1));
        tile.element.dataset.state = 'ready';
        tile.image = null;
      });
      effects.forEach((effect) => effect?.dispose());
      resolve();
    };

    const frame = () => {
      const progress = reducedMotion.matches
        ? 1
        : Math.min(1, (performance.now() - start) / REVEAL_MS);
      tiles.forEach((tile, index) => {
        const count = Math.floor(progress * tile.revealOrder.length);
        drawFrame(tile, images[index], imageBuffers[index], count);
      });

      const elapsed = performance.now() - start;
      if (!effectsStarted && (reducedMotion.matches || elapsed >= REVEAL_MS - WAVE_LEAD_MS)) {
        effects = reducedMotion.matches
          ? []
          : tiles.map((tile) => startShaderBurst(tile.element, tile.output));
        effectsStarted = true;
      }

      if (effectsStarted && effects.length) {
        const waveProgress = Math.min(
          1,
          Math.max(0, (elapsed - (REVEAL_MS - WAVE_LEAD_MS)) / WAVE_LEAD_MS),
        );
        effects.forEach((effect) => effect?.render(waveProgress));
      }

      if (progress >= 1) return finish();
      window.setTimeout(frame, 16);
    };

    frame();
  });
}

async function generatePatternBatch(tiles) {
  const latent = new Float32Array(BATCH_SIZE * modelInfo.latent);
  for (let index = 0; index < BATCH_SIZE; index += 1) {
    const code = chooseCode();
    tiles[index].readoutCode.textContent = 'LAT ' + code.toString(16).toUpperCase().padStart(3, '0');
    const offset = code * modelInfo.latent;
    const targetOffset = index * modelInfo.latent;
    for (let dimension = 0; dimension < modelInfo.latent; dimension += 1) {
      latent[targetOffset + dimension] = latentBank[offset + dimension] + gaussian() * NOISE;
    }
  }

  const latentTensor = new ort.Tensor('float32', latent, [BATCH_SIZE, modelInfo.latent]);
  let result;
  try {
    result = await session.run({ latent: latentTensor });
    return Array.from(
      { length: BATCH_SIZE },
      (_, index) => readPixels(
        result.logits.data,
        index,
        tiles[index].symmetry,
        tiles[index].seed,
      ),
    );
  } finally {
    if (latentTensor.dispose) latentTensor.dispose();
    if (result && result.logits && result.logits.dispose) result.logits.dispose();
  }
}

function showError(error) {
  blocked = true;
  console.error(error);
  feed.replaceChildren();
  const line = document.createElement('div');
  line.className = 'error-line';
  line.textContent = 'dither-feed: model unavailable\n' + (error.message || error);
  feed.append(line);
}

async function loadMore() {
  if (loading || blocked || !session) return;
  loading = true;
  const tiles = appendBatch();
  try {
    const images = await generatePatternBatch(tiles);
    await animateBatch(tiles, images);
  } catch (error) {
    tiles.forEach((tile) => tile.element.remove());
    showError(error);
  } finally {
    loading = false;
  }
}

async function fillInitialViewport() {
  for (let batch = 0; batch < INITIAL_BATCHES && !blocked; batch += 1) {
    await loadMore();
  }
}

function isAtBottom() {
  return terminalScroll.scrollTop + terminalScroll.clientHeight
    >= terminalScroll.scrollHeight - BOTTOM_EPSILON;
}

function requestMore() {
  if (
    !userHasScrolled
    || loading
    || blocked
    || !isAtBottom()
    || bottomIntent < LOAD_INTENT_THRESHOLD
  ) return;
  bottomIntent = 0;
  loadMore();
}

async function loadModel() {
  ort.env.wasm.numThreads = navigator.crossOriginIsolated
    ? Math.min(4, navigator.hardwareConcurrency || 1)
    : 1;
  ort.env.wasm.wasmPaths = { wasm: wasmUrl };
  const modelPath = import.meta.env.BASE_URL + 'model/';
  const [info, bank, loadedSession] = await Promise.all([
    fetch(modelPath + 'model.json')
      .then((response) => assertResponse(response, 'model.json'))
      .then((response) => response.json()),
    fetch(modelPath + 'latent-bank.bin')
      .then((response) => assertResponse(response, 'latent-bank.bin'))
      .then(async (response) => new Float32Array(await response.arrayBuffer())),
    ort.InferenceSession.create(modelPath + 'garden-cvae.onnx', {
      executionProviders: ['wasm'],
      graphOptimizationLevel: 'all',
    }),
  ]);

  if (info.batch !== BATCH_SIZE || info.size !== SIZE) {
    throw new Error('Model shape does not match the four-tile feed');
  }
  if (bank.length < info.perClass * info.latent) {
    throw new Error('Latent bank is incomplete');
  }
  modelInfo = info;
  latentBank = bank;
  session = loadedSession;
}

const observer = new IntersectionObserver(
  (entries) => {
    if (entries.some((entry) => entry.isIntersecting)) requestMore();
  },
  { root: terminalScroll, rootMargin: '0px 0px 40px 0px' },
);

terminalScroll.addEventListener('scroll', () => {
  if (terminalScroll.scrollTop > 0) userHasScrolled = true;
  if (!isAtBottom()) {
    bottomIntent = 0;
  }
}, { passive: true });

terminalScroll.addEventListener('wheel', (event) => {
  if (event.deltaY <= 0) {
    bottomIntent = 0;
    return;
  }
  userHasScrolled = true;
  if (loading || !isAtBottom()) {
    bottomIntent = 0;
    return;
  }
  bottomIntent += Math.min(event.deltaY, 80);
  requestMore();
}, { passive: true });

terminalScroll.addEventListener('touchstart', (event) => {
  lastTouchY = event.touches[0] ? event.touches[0].clientY : null;
  bottomIntent = 0;
}, { passive: true });

terminalScroll.addEventListener('touchmove', (event) => {
  if (lastTouchY === null || !event.touches[0]) return;
  const nextTouchY = event.touches[0].clientY;
  const delta = lastTouchY - nextTouchY;
  lastTouchY = nextTouchY;
  if (delta <= 0 || loading || !isAtBottom()) {
    bottomIntent = 0;
    return;
  }
  userHasScrolled = true;
  bottomIntent += Math.min(delta, 80);
  requestMore();
}, { passive: true });

terminalScroll.addEventListener('touchend', () => {
  lastTouchY = null;
  bottomIntent = 0;
}, { passive: true });

observer.observe(sentinel);

loadModel()
  .then(fillInitialViewport)
  .catch(showError);
