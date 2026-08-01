import * as ort from 'onnxruntime-web';
import wasmUrl from './assets/ort-wasm-simd-threaded.jsep.wasm?url';
import './style.css';

const SIZE = 24;
const PIXEL_COUNT = SIZE * SIZE;
const BATCH_SIZE = 4;
const REVEAL_MS = 1260;
const NOISE = 0.065;
const RECENT_LIMIT = 64;
const SYMMETRIES = ['vertical', 'horizontal'];
const LOAD_MARGIN = 64;
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
let loadArmed = true;
let lastScrollTop = 0;
let recentCodes = [];
const recentCodeSet = new Set();

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

const revealOrder = Array.from({ length: PIXEL_COUNT }, (_, position) => position)
  .sort((a, b) => waveScore(a) - waveScore(b) || a - b);

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

function drawBayerFrame(tile, phase) {
  const image = tile.effectContext.createImageData(SIZE, SIZE);
  const level = (phase + 1) * 8;
  for (let position = 0; position < PIXEL_COUNT; position += 1) {
    const x = position % SIZE;
    const y = Math.floor(position / SIZE);
    const threshold = bayer8[(y + phase) % 8][(x + phase * 3) % 8];
    if (threshold >= level) continue;
    const offset = position * 4;
    const alpha = 24 + Math.round((level - threshold) * 0.7);
    image.data[offset] = 158;
    image.data[offset + 1] = 230;
    image.data[offset + 2] = 173;
    image.data[offset + 3] = alpha;
  }
  tile.effectContext.putImageData(image, 0, 0);
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
  const effect = createCanvas('bayer-effect');
  const readout = createReadout(seed, symmetry);
  drawSkeleton(skeleton, seed);
  element.append(skeleton, output, effect, readout.readout);

  return {
    element,
    skeleton,
    output,
    effect,
    context: output.getContext('2d'),
    effectContext: effect.getContext('2d'),
    readout: readout.readout,
    readoutCode: readout.code,
    seed,
    symmetry,
    revealOrder,
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

function animateBatch(tiles, images) {
  const imageBuffers = tiles.map((tile) => {
    tile.image = tile.context.createImageData(SIZE, SIZE);
    return tile.image;
  });

  return new Promise((resolve) => {
    const start = performance.now();
    let lastBayerPhase = -1;

    const finish = () => {
      tiles.forEach((tile, index) => {
        tile.skeleton.remove();
        tile.effect.remove();
        tile.element.setAttribute('aria-label', 'Generated pixel pattern ' + (index + 1));
        tile.element.dataset.state = 'ready';
        tile.image = null;
      });
      resolve();
    };

    const frame = () => {
      const progress = reducedMotion.matches
        ? 1
        : Math.min(1, (performance.now() - start) / REVEAL_MS);
      const bayerPhase = Math.floor((performance.now() - start) / 105) % 8;
      if (!reducedMotion.matches && bayerPhase !== lastBayerPhase) {
        tiles.forEach((tile) => drawBayerFrame(tile, bayerPhase));
        lastBayerPhase = bayerPhase;
      }
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

function isNearBottom() {
  return terminalScroll.scrollTop + terminalScroll.clientHeight
    >= terminalScroll.scrollHeight - LOAD_MARGIN;
}

function requestMore() {
  if (!userHasScrolled || !loadArmed || loading || blocked || !isNearBottom()) return;
  loadArmed = false;
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
  const nextScrollTop = terminalScroll.scrollTop;
  const moved = Math.abs(nextScrollTop - lastScrollTop) > 0.5;
  if (nextScrollTop > 0) userHasScrolled = true;
  if (moved) loadArmed = true;
  lastScrollTop = nextScrollTop;
  if (moved) requestMore();
}, { passive: true });

terminalScroll.addEventListener('wheel', (event) => {
  if (event.deltaY <= 0) return;
  userHasScrolled = true;
  loadArmed = true;
  requestMore();
}, { passive: true });

observer.observe(sentinel);

loadModel()
  .then(fillInitialViewport)
  .catch(showError);
