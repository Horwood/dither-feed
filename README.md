<div align="center">

# dither-feed

**A terminal-like infinite stream of locally generated 24×24 pixel patterns.**

Every group contains four original variations. Scroll to request the next group, watch each tile reveal itself pixel by pixel, and let the relief wave pass through the finished pattern.

<p>
  <a href="https://horwood.github.io/dither-feed/">Live demo</a>
  ·
  <a href="https://huggingface.co/datasets/unstonio/pixelgpt-24x24-20k">Training dataset</a>
  ·
  <a href="./DATASET.md">Data notes</a>
  ·
  <a href="./CREDITS.md">Credits</a>
  ·
  <a href="./LICENSE">MIT license</a>
</p>

</div>

## The experience

`dither-feed` is deliberately small, quiet, and tactile. It behaves like a terminal session rather than a gallery: the viewport stays fixed, the feed is the only scrollable surface, and the next group is requested only after a deliberate push to the bottom.

- Four square tiles per row on desktop, two on small screens.
- Crisp 24×24 rendering with nearest-neighbour scaling and no smoothing.
- Four images are inferred together in one browser-side ONNX call.
- A dark pixel skeleton appears first, then the generated image reveals through a seeded pixel order.
- A WebGL relief wave starts as the last pixels arrive, using the pattern itself as a height field for refraction, caustics, and pixel highlights.
- The terminal line exposes live session telemetry: `READY`, `SYNTH`, generated count, and current generation rate.
- Hovering a tile reveals its compact technical readout: latent code, symmetry, motif family, palette size, sector layout, and Bayer matrix.
- `prefers-reduced-motion` is respected: the result appears immediately and the expensive visual effects are skipped.

The page does not need a server-side generation endpoint. After the model assets have loaded, inference and rendering happen in the browser.

## How a pattern is made

```text
24×24 sprite dataset
        │
        ▼
soft style families + mirrored pattern transforms
        │
        ▼
conditional VAE training / pattern-only export
        │
        ▼
quality-filtered latent bank (1,200 codes)
        │
        ▼
four latent vectors + small noise + recent-code exclusion
        │
        ▼
ONNX Runtime Web inference in the browser
        │
        ▼
symmetry · sector motifs · density guard · palette harmony
        │
        ▼
pixel reveal → WebGL relief wave → finished tile
```

The export keeps a compact pattern branch with an input shape of `[4, 40]` and logits shaped `[4, 64, 24, 24]`. The latent bank is split into five soft families — fauna, botanical, terrain, geometry, and textile — and the runtime adds controlled sector mixing so repeated source silhouettes become denser ornamental structures rather than empty cut-outs.

## Repository map

| Path | Responsibility |
| --- | --- |
| [`index.html`](./index.html) | Terminal shell and animated startup screen |
| [`src/main.js`](./src/main.js) | Model loading, latent selection, pattern post-processing, reveal scheduler, infinite-scroll loader, and WebGL wave |
| [`src/style.css`](./src/style.css) | Terminal surface, pixel grid, readouts, responsive layout, and motion preferences |
| [`scripts/train.py`](./scripts/train.py) | Dataset download, pattern transforms, training, quality scoring, and ONNX export |
| [`public/model/`](./public/model/) | Browser-ready ONNX decoder, latent bank, palette, and export metadata |
| [`docs/`](./docs/) | Static GitHub Pages build served at `/dither-feed/` |
| [`DATASET.md`](./DATASET.md) | Dataset source, attribution, processing notes, and license boundary |
| [`CREDITS.md`](./CREDITS.md) | Authorship and third-party acknowledgements |

## Run locally

The browser-ready model artifacts are already committed, so the feed can be opened without installing Python or downloading the training set.

```bash
npm install
npm run dev
```

Open the local address printed by Vite. For a production build:

```bash
npm run build
npm run preview
```

## Re-export the model

Training data and the source checkpoint are intentionally ignored by Git. The export script downloads the dataset into `data/` when it is missing and reads the local checkpoint from `models/`.

```bash
uv venv .venv --python python3.12
uv pip install --python .venv/bin/python -r requirements-train.txt
.venv/bin/python scripts/train.py --export-only
```

The export writes `garden-cvae.onnx`, `latent-bank.bin`, and `model.json` to `public/model/`. To retrain instead of exporting an existing checkpoint, omit `--export-only` and choose the desired training flags from `scripts/train.py`.

## GitHub Pages

The committed `docs/` directory is the published build. The Vite base path is switched for the project site with `PAGES=1`:

```bash
PAGES=1 npm run build
cp -R dist/. docs/
git add docs
git commit -m "Build GitHub Pages site"
git push origin main
```

Live site: **[horwood.github.io/dither-feed](https://horwood.github.io/dither-feed/)**

## Data, model, and licenses

The application source is released under the [MIT License](./LICENSE). The training set is a separate work and is not included in this repository:

> **pixelgpt-24x24-20k** by **unstonio**, licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Dataset page: <https://huggingface.co/datasets/unstonio/pixelgpt-24x24-20k>.

The training script downloads the published parquet split on demand, converts the 24×24 sprites into five pattern families, applies mirrored and sector-based transformations, and exports a smaller pattern-only runtime model. The code, generated runtime artifacts, and source dataset therefore have separate license boundaries; downstream users should preserve the dataset attribution when using outputs or retraining from that data.

The browser runtime also uses [ONNX Runtime Web](https://github.com/microsoft/onnxruntime) under MIT and [Vite](https://github.com/vitejs/vite) under MIT. See [`CREDITS.md`](./CREDITS.md) for the project attribution record.

## Authorship

`dither-feed` is authored and maintained by **Ivan Kalkaev**. Ivan led the concept, visual language, interaction model, frontend architecture, rendering pipeline, and deployment decisions, and authored the majority of the shipped frontend implementation.

**Codex** was used as an AI pair-programming tool for selected implementation passes, debugging, verification, and documentation. It is not a rights holder or a co-author of the project.

## License

The application code and original project documentation are available under the [MIT License](./LICENSE). Dataset and dependency licenses remain governed by their respective owners and notices above.
