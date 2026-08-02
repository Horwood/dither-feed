# Training data

## Source

This project uses the published dataset **[unstonio/pixelgpt-24x24-20k](https://huggingface.co/datasets/unstonio/pixelgpt-24x24-20k)**. The dataset is licensed under **[Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/)**.

Required attribution:

> pixelgpt-24x24-20k by unstonio, licensed under CC BY 4.0.

The dataset is not committed to this repository. `scripts/train.py` downloads the published parquet split into the ignored `data/` directory only when a local copy is not present.

## Processing boundary

The source set contains 24×24 limited-palette sprites. The training script turns those sprites into a pattern branch through deterministic, documented transformations:

1. Near-black background tokens are normalised to one background index.
2. Source families are grouped into five soft directions: fauna, botanical, terrain, geometry, and textile.
3. Each direction receives mirrored, rosette, repeated, woven, or landscape-like transforms.
4. Four pattern variants mix selected mirrored 6×6 sectors and add a restrained Bayer-guided dither field.
5. The conditional VAE is trained with the original sprite task interleaved as an anchor, while the browser export keeps only the pattern decoder branch.
6. The exported latent bank is scored for density, inner occupancy, and edge texture so the runtime can skip unusually empty or flat vectors.

The browser applies a second, presentation-oriented pass: symmetry, sector motifs, palette harmonisation, density guards, recent-vector exclusion, pixel reveal, and the WebGL relief wave. These runtime effects are part of the application and are separate from the source dataset.

## Reproducibility

```bash
uv venv .venv --python python3.12
uv pip install --python .venv/bin/python -r requirements-train.txt
.venv/bin/python scripts/train.py --export-only
```

The script records the dataset URL in `DATA_URL`, uses a fixed default seed (`44`), and writes browser assets to `public/model/`. Training data, checkpoints, and Python caches are excluded by [`.gitignore`](./.gitignore).
