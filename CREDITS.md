# Credits and attribution

## Project authorship

I am **Ivan Kalkaev**, the author and maintainer of `dither-feed`. I developed the product concept, terminal visual language, interaction model, frontend architecture, pattern-processing approach, rendering effects, and deployment, and built the shipped frontend around them.

## Training data

The model was trained with material from **[unstonio/pixelgpt-24x24-20k](https://huggingface.co/datasets/unstonio/pixelgpt-24x24-20k)**:

> pixelgpt-24x24-20k by unstonio, licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

The dataset is not redistributed in this repository. See [`DATASET.md`](./DATASET.md) for the exact processing boundary and reproducibility steps.

## Runtime dependencies

- [ONNX Runtime Web](https://github.com/microsoft/onnxruntime) — MIT License.
- [Vite](https://github.com/vitejs/vite) — MIT License.
- WebGL and browser APIs — provided by the target browser platform.

The application source and original project documentation are released under the [MIT License](./LICENSE). Third-party works retain their own licenses and attribution requirements.
