# Credits and attribution

## Project authorship

**Ivan Kalkaev** is the author and maintainer of `dither-feed`.

Ivan led the product concept, terminal visual language, interaction model, frontend architecture, pattern-processing approach, rendering effects, and deployment. The majority of the shipped frontend implementation was authored by Ivan.

**Codex** was used as an AI pair-programming tool for selected coding passes, debugging, verification, and documentation. Codex is not a rights holder, co-author, or maintainer of this repository.

## Training data

The model was trained with material from **[unstonio/pixelgpt-24x24-20k](https://huggingface.co/datasets/unstonio/pixelgpt-24x24-20k)**:

> pixelgpt-24x24-20k by unstonio, licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

The dataset is not redistributed in this repository. See [`DATASET.md`](./DATASET.md) for the exact processing boundary and reproducibility steps.

## Runtime dependencies

- [ONNX Runtime Web](https://github.com/microsoft/onnxruntime) — MIT License.
- [Vite](https://github.com/vitejs/vite) — MIT License.
- WebGL and browser APIs — provided by the target browser platform.

The application source and original project documentation are released under the [MIT License](./LICENSE). Third-party works retain their own licenses and attribution requirements.
