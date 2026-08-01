import * as ort from 'onnxruntime-web';
import wasmUrl from './assets/ort-wasm-simd-threaded.jsep.wasm?url';
import './style.css';

const SIZE = 24;
const PIXEL_COUNT = SIZE * SIZE;
const BATCH_SIZE = 4;
const REVEAL_MS = 900;
const NOISE = 0.065;
const RECENT_LIMIT = 64;
const INITIAL_FILL = 1.5;

const terminalScroll = document.querySelector('#terminal-scroll');
const feed = document.querySelector('#feed');
const sentinel = document.querySelector('#feed-sentinel');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

let session;
let modelInfo;
let latentBank;
let loading = false;
let blocked = false;
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

const revealOrder = Array.from({ length: PIXEL_COUNT }, (_, position) => position)
  .sort((a, b) => {
    const ax = a % SIZE;
    const ay = Math.floor(a / SIZE);
    const bx = b % SIZE;
    const by = Math.floor(b / SIZE);
    const aScore = ax + ay + bayer8[ay % 8][ax % 8] / 64;
    const bScore = bx + by + bayer8[by % 8][bx % 8] / 64;
    return aScore - bScore || a - b;
  });

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

function createCanvas() {
  const canvas = document.createElement('canvas');
  canvas.width = SIZE;
  canvas.height = SIZE;
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

function createTile(seed) {
  const element = document.createElement('div');
  element.className = 'pattern-tile';
  element.setAttribute('role', 'img');
  element.setAttribute('aria-label', 'Generating pixel pattern');

  const skeleton = createCanvas();
  const output = createCanvas();
  drawSkeleton(skeleton, seed);
  element.append(skeleton, output);

  return {
    element,
    skeleton,
    output,
    context: output.getContext('2d'),
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

function readPixels(logits, imageIndex) {
  const pixels = new Uint8Array(PIXEL_COUNT);
  const imageOffset = imageIndex * modelInfo.palette.length * PIXEL_COUNT;
  for (let position = 0; position < PIXEL_COUNT; position += 1) {
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
  }
  return pixels;
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
    const position = revealOrder[index];
    writePixel(image, position, modelInfo.palette[pixels[position]]);
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
    const frame = (now) => {
      const progress = reducedMotion.matches
        ? 1
        : Math.min(1, (now - start) / REVEAL_MS);
      const count = Math.floor(progress * PIXEL_COUNT);
      tiles.forEach((tile, index) => drawFrame(tile, images[index], imageBuffers[index], count));

      if (progress < 1) {
        requestAnimationFrame(frame);
        return;
      }

      tiles.forEach((tile, index) => {
        tile.skeleton.remove();
        tile.element.setAttribute('aria-label', 'Generated pixel pattern ' + (index + 1));
      });
      resolve();
    };
    requestAnimationFrame(frame);
  });
}

async function generatePatternBatch() {
  const latent = new Float32Array(BATCH_SIZE * modelInfo.latent);
  for (let index = 0; index < BATCH_SIZE; index += 1) {
    const code = chooseCode();
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
    return Array.from({ length: BATCH_SIZE }, (_, index) => readPixels(result.logits.data, index));
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

function isNearEnd() {
  return terminalScroll.scrollTop + terminalScroll.clientHeight
    >= terminalScroll.scrollHeight - terminalScroll.clientHeight * INITIAL_FILL;
}

async function loadMore() {
  if (loading || blocked || !session) return;
  loading = true;
  const tiles = appendBatch();
  try {
    const images = await generatePatternBatch();
    await animateBatch(tiles, images);
  } catch (error) {
    tiles.forEach((tile) => tile.element.remove());
    showError(error);
  } finally {
    loading = false;
    if (!blocked && isNearEnd()) requestAnimationFrame(() => loadMore());
  }
}

async function fillInitialViewport() {
  do {
    await loadMore();
  } while (!blocked && terminalScroll.scrollHeight <= terminalScroll.clientHeight * 2);
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
    if (entries.some((entry) => entry.isIntersecting)) loadMore();
  },
  { root: terminalScroll, rootMargin: '120% 0px' },
);

observer.observe(sentinel);

loadModel()
  .then(fillInitialViewport)
  .catch(showError);
