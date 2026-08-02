import * as ort from 'onnxruntime-web';
import wasmUrl from './assets/ort-wasm-simd-threaded.jsep.wasm?url';
import './style.css';

const SIZE = 24;
const PIXEL_COUNT = SIZE * SIZE;
const BATCH_SIZE = 4;
const REVEAL_MS = 1260;
const SHADER_MS = 1350;
const NOISE = 0.065;
const RECENT_LIMIT = 64;
const DEFAULT_STYLES = ['fauna', 'botanical', 'terrain', 'geometry', 'textile'];
const STYLE_PROFILES = {
  fauna: {
    code: 'FAU',
    symmetry: 'vertical',
    minDensity: 0.34,
    palette: [[0, 0, 0], [85, 0, 0], [170, 0, 85], [255, 85, 0], [255, 170, 85], [255, 255, 170], [255, 255, 255]],
  },
  botanical: {
    code: 'BOT',
    symmetry: 'vertical',
    minDensity: 0.38,
    palette: [[0, 0, 0], [0, 85, 0], [0, 170, 85], [85, 170, 0], [170, 255, 85], [255, 255, 170], [255, 255, 255]],
  },
  terrain: {
    code: 'TER',
    symmetry: 'horizontal',
    minDensity: 0.36,
    palette: [[0, 0, 0], [0, 0, 85], [0, 85, 170], [0, 170, 255], [85, 170, 255], [170, 255, 255], [255, 255, 255]],
  },
  geometry: {
    code: 'GEO',
    symmetry: 'vertical',
    minDensity: 0.42,
    palette: [[0, 0, 0], [85, 85, 85], [170, 170, 170], [255, 255, 255], [255, 85, 0], [255, 170, 0], [255, 255, 85]],
  },
  textile: {
    code: 'TXT',
    symmetry: 'horizontal',
    minDensity: 0.44,
    palette: [[0, 0, 0], [85, 0, 85], [170, 0, 170], [255, 0, 170], [255, 85, 170], [255, 170, 255], [255, 255, 255]],
  },
};
const BOTTOM_EPSILON = 3;
const LOAD_INTENT_THRESHOLD = 220;
const INITIAL_BATCHES = window.matchMedia('(max-width: 640px)').matches ? 2 : 3;

const terminalScroll = document.querySelector('#terminal-scroll');
const feed = document.querySelector('#feed');
const sentinel = document.querySelector('#feed-sentinel');
const bootScreen = document.querySelector('#boot-screen');
const bootStatus = document.querySelector('#boot-status');
const bootProgressBar = document.querySelector('#boot-progress-bar');
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
let bootPhaseTimer;
let bootProgressTimer;
let bootProgressValue = 7;

const bootPhases = [
  'mounting local model',
  'reading latent bank',
  'initializing wasm inference',
  'warming pixel buffer',
];

function setBootStatus(message, progress = bootProgressValue) {
  if (bootStatus) bootStatus.textContent = message;
  if (bootProgressBar) {
    bootProgressValue = Math.max(0, Math.min(100, progress));
    bootProgressBar.style.transform = `scaleX(${bootProgressValue / 100})`;
  }
}

function startBootSequence() {
  if (!bootScreen) return;
  let phase = 0;
  setBootStatus(bootPhases[phase], bootProgressValue);
  bootPhaseTimer = window.setInterval(() => {
    phase = (phase + 1) % bootPhases.length;
    setBootStatus(bootPhases[phase], bootProgressValue);
  }, 520);
  bootProgressTimer = window.setInterval(() => {
    bootProgressValue = Math.min(91, bootProgressValue + (bootProgressValue < 52 ? 3.2 : 0.8));
    setBootStatus(bootStatus?.textContent || bootPhases[phase], bootProgressValue);
  }, 140);
}

function finishBoot(error = false) {
  if (!bootScreen) return;
  window.clearInterval(bootPhaseTimer);
  window.clearInterval(bootProgressTimer);
  setBootStatus(error ? 'model unavailable' : 'feed ready', 100);
  document.body.classList.remove('is-booting');
  bootScreen.dataset.state = 'leaving';
  window.setTimeout(() => bootScreen.remove(), reducedMotion.matches ? 0 : 420);
}

startBootSequence();

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
    // A broad envelope makes the wave twice as wide; the crest profile below
    // keeps its center concentrated and gives the edges a softer falloff.
    float envelope = exp(-waveDistance * waveDistance * 39.0);
    float wake = exp(-waveDistance * waveDistance * 14.0);
    float innerRipple = sin(waveDistance * 92.0 - progress * 10.0);
    float life = smoothstep(0.0, 0.07, progress)
      * (1.0 - smoothstep(0.72, 1.0, progress));
    float crest = exp(-waveDistance * waveDistance * 180.0);
    float waveEnergy = envelope * (0.14 + crest * 1.06);

    vec2 refraction = (
      direction * (
        innerRipple * 0.18
        + sin(waveDistance * 38.0 - progress * 7.0) * 0.075
      )
      + reliefNormal * (0.12 + pixelEdge * 0.1)
      + vec2(reliefNormal.y, -reliefNormal.x)
        * sin(waveDistance * 66.0 - progress * 12.0) * 0.045
    ) * (waveEnergy * 1.08 + wake * 0.12) * life;
    vec2 redShift = refraction * 2.35;
    vec2 blueShift = refraction * 0.22;
    vec4 baseSample = texture2D(pattern, uv);
    float red = texture2D(pattern, uv + redShift).r;
    float green = texture2D(pattern, uv + refraction).g;
    float blue = texture2D(pattern, uv + blueShift).b;
    vec3 color = vec3(red, green, blue);

    float caustic = envelope
      * (0.12 + crest * 1.08)
      * (0.5 + 0.5 * cos(waveDistance * 138.0 - progress * 16.0));
    vec3 reliefVector = normalize(vec3(reliefNormal * 5.0, 0.72));
    float reliefLight = clamp(
      dot(reliefVector, normalize(vec3(-0.55, 0.65, 0.8))),
      0.0,
      1.0
    );
    float pixelSpecular = waveEnergy
      * (0.12 + reliefLight * 1.08)
      * (0.35 + pixelEdge * 0.65);
    float faceShade = (reliefLight - 0.42)
      * waveEnergy * (1.0 - pixelEdge) * 0.58;
    color = clamp(
      color + vec3(faceShade - pixelEdge * envelope * 0.055) * life,
      0.0,
      1.0
    );
    vec3 spectralLight = vec3(0.65, 0.94, 1.0)
      * crest * (0.42 + pixelRelief * 0.72)
      + vec3(0.28, 0.68, 1.0) * caustic * 0.34
      + vec3(0.82, 0.98, 1.0) * pixelSpecular * 0.55;

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

function availableStyles() {
  return modelInfo?.styles?.length ? modelInfo.styles : DEFAULT_STYLES;
}

function styleProfile(style) {
  return STYLE_PROFILES[style] || STYLE_PROFILES.geometry;
}

function styleForSeed(seed) {
  const styles = availableStyles();
  const row = Math.floor(seed / BATCH_SIZE);
  const column = seed % BATCH_SIZE;
  return styles[(column + row * 2) % styles.length];
}

function chooseCode(style) {
  const range = modelInfo.styleRanges?.[style];
  const start = range ? range[0] : 0;
  const end = range ? range[1] : modelInfo.perClass;
  let code = start + Math.floor(Math.random() * Math.max(1, end - start));
  let attempts = 0;
  while (recentCodeSet.has(code) && attempts < 12) {
    code = start + Math.floor(Math.random() * Math.max(1, end - start));
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

function createReadout(seed, symmetry, style) {
  const readout = document.createElement('div');
  readout.className = 'tile-readout';
  readout.setAttribute('aria-hidden', 'true');

  const entries = [
    ['ID', String(seed).padStart(4, '0')],
    ['PX', '24×24'],
    ['SYM', symmetry === 'vertical' ? 'V' : 'H'],
    ['MOT', styleProfile(style).code],
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

  const style = styleForSeed(seed);
  const symmetry = styleProfile(style).symmetry;
  element.dataset.symmetry = symmetry;
  element.dataset.style = style;

  const skeleton = createCanvas('skeleton-canvas');
  const output = createCanvas('output-canvas');
  const readout = createReadout(seed, symmetry, style);
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
    style,
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

function paletteIndex(colour) {
  return modelInfo.palette.findIndex((candidate) => (
    candidate[0] === colour[0]
    && candidate[1] === colour[1]
    && candidate[2] === colour[2]
  ));
}

function harmonyIndices(style) {
  return styleProfile(style).palette
    .map((colour) => paletteIndex(colour))
    .filter((index) => index >= 0);
}

function pixelLuminance(index) {
  const colour = modelInfo.palette[index] || [0, 0, 0];
  return (colour[0] * 0.2126 + colour[1] * 0.7152 + colour[2] * 0.0722) / 255;
}

function harmonyColour(index, style, position, seed) {
  if (index === 0) return 0;
  const harmony = harmonyIndices(style);
  if (harmony.length < 2) return index;
  const brightness = pixelLuminance(index);
  const bayer = bayer8[(Math.floor(position / SIZE) + seed) % 8][(position + seed * 3) % 8];
  const level = Math.max(
    1,
    Math.min(harmony.length - 1, Math.round(brightness * (harmony.length - 1)) + (bayer < 12 ? 1 : 0)),
  );
  return harmony[level];
}

function fillPriority(style, x, y, seed, near, bounds) {
  const threshold = bayer8[(y + seed) % 8][(x + seed * 3) % 8];
  const centerX = Math.abs(x - 11.5);
  const centerY = Math.abs(y - 11.5);
  const radial = Math.sqrt(centerX * centerX + centerY * centerY);
  const inside = x >= bounds.minX && x <= bounds.maxX && y >= bounds.minY && y <= bounds.maxY;

  if (style === 'fauna') {
    return (inside ? 22 : 0) + (near ? 34 : 0) + (radial < 8 ? 10 : 0) + (threshold < 10 ? 8 : 0);
  }
  if (style === 'botanical') {
    const petal = Math.abs(centerX - centerY) < 2.5 || radial < 4;
    return (petal ? 30 : 0) + (near ? 28 : 0) + (threshold < 16 ? 10 : 0);
  }
  if (style === 'terrain') {
    const band = Math.abs((y % 6) - 2) < 2;
    return (band ? 24 : 0) + (near ? 28 : 0) + (y > 11 ? 10 : 0) + (threshold < 14 ? 8 : 0);
  }
  if (style === 'geometry') {
    const ring = Math.abs((centerX + centerY) % 6 - 2) < 1.8;
    const diagonal = (x + y + seed) % 5 < 2;
    return (ring ? 26 : 0) + (diagonal ? 14 : 0) + (near ? 30 : 0) + (threshold < 18 ? 8 : 0);
  }
  const checker = (Math.floor(x / 3) + Math.floor(y / 3) + seed) % 2 === 0;
  return (checker ? 24 : 0) + (near ? 32 : 0) + (threshold < 20 ? 8 : 0);
}

function densifyPixels(pixels, symmetry, seed, style) {
  const result = pixels.slice();
  const profile = styleProfile(style);
  const harmony = harmonyIndices(style);
  const keepBlackFrame = seed % 5 === 0;
  const bounds = { minX: SIZE, minY: SIZE, maxX: -1, maxY: -1 };

  pixels.forEach((colour, position) => {
    if (colour === 0) return;
    const x = position % SIZE;
    const y = Math.floor(position / SIZE);
    bounds.minX = Math.min(bounds.minX, x);
    bounds.maxX = Math.max(bounds.maxX, x);
    bounds.minY = Math.min(bounds.minY, y);
    bounds.maxY = Math.max(bounds.maxY, y);
    result[position] = harmonyColour(colour, style, position, seed);
  });

  if (bounds.maxX < 0) {
    bounds.minX = 4;
    bounds.maxX = 19;
    bounds.minY = 4;
    bounds.maxY = 19;
  }

  const pairs = symmetryOrders[symmetry];
  const candidates = [];
  pairs.forEach(({ position, mirror }) => {
    if (pixels[position] !== 0 || pixels[mirror] !== 0) return;
    const x = position % SIZE;
    const y = Math.floor(position / SIZE);
    if (keepBlackFrame && (isEdge(position) || isEdge(mirror))) return;
    const near = [
      position - 1, position + 1, position - SIZE, position + SIZE,
    ].some((neighbour) => neighbour >= 0 && neighbour < PIXEL_COUNT && pixels[neighbour] !== 0);
    const priority = fillPriority(style, x, y, seed, near, bounds);
    candidates.push({ position, mirror, priority, x, y });
    if (priority >= 38 || (near && priority >= 28)) {
      const accent = harmony[1 + ((x + y + seed) % Math.max(1, harmony.length - 1))] || harmony[1] || 1;
      result[position] = accent;
      result[mirror] = accent;
    }
  });

  const minimum = Math.floor(PIXEL_COUNT * profile.minDensity);
  let density = result.reduce((count, colour) => count + (colour !== 0 ? 1 : 0), 0);
  candidates
    .sort((left, right) => right.priority - left.priority || left.position - right.position)
    .some(({ position, mirror, x, y }, index) => {
      if (density >= minimum) return true;
      if (result[position] !== 0 || result[mirror] !== 0) return false;
      const accent = harmony[1 + ((index + seed + x + y) % Math.max(1, harmony.length - 1))] || harmony[1] || 1;
      result[position] = accent;
      result[mirror] = accent;
      density += position === mirror ? 1 : 2;
      return false;
    });

  return result;
}

function readPixels(logits, imageIndex, symmetry, seed, style) {
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
  return densifyPixels(pixels, symmetry, seed, style);
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
  let animationId = 0;

  const dispose = () => {
    if (disposed) return;
    disposed = true;
    window.cancelAnimationFrame(animationId);
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

  const startedAt = performance.now();
  const animate = (now) => {
    if (disposed) return;
    render(Math.min(1, (now - startedAt) / SHADER_MS));
    if (disposed) return;
    if (now - startedAt < SHADER_MS) {
      animationId = window.requestAnimationFrame(animate);
    } else {
      dispose();
    }
  };

  animationId = window.requestAnimationFrame(animate);

  return { dispose };
}

function animateBatch(tiles, images) {
  const imageBuffers = tiles.map((tile) => {
    tile.image = tile.context.createImageData(SIZE, SIZE);
    return tile.image;
  });
  return new Promise((resolve) => {
    const start = performance.now();

    const finish = () => {
      tiles.forEach((tile, index) => {
        tile.skeleton.remove();
        tile.element.setAttribute('aria-label', 'Generated pixel pattern ' + (index + 1));
        tile.element.dataset.state = 'ready';
        tile.image = null;
        startShaderBurst(tile.element, tile.output);
      });
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

      if (progress >= 1) return finish();
      window.setTimeout(frame, 16);
    };

    frame();
  });
}

async function generatePatternBatch(tiles) {
  const latent = new Float32Array(BATCH_SIZE * modelInfo.latent);
  for (let index = 0; index < BATCH_SIZE; index += 1) {
    const code = chooseCode(tiles[index].style);
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
        tiles[index].style,
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
  finishBoot(true);
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
  .then(async () => {
    await loadMore();
    if (blocked) return;
    finishBoot();
    for (let batch = 1; batch < INITIAL_BATCHES && !blocked; batch += 1) {
      await loadMore();
    }
  })
  .catch(showError);
