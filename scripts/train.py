#!/usr/bin/env python3
"""Train and export a crisp, browser-ready conditional pixel-art VAE."""

from __future__ import annotations

import argparse
import io
import json
import random
import urllib.request
from pathlib import Path

import pandas as pd
import torch
from PIL import Image
from torch import nn
from torch.nn import functional as F
from torch.utils.data import DataLoader, Dataset

ROOT = Path(__file__).resolve().parents[1]
DATA_URL = "https://huggingface.co/datasets/unstonio/pixelgpt-24x24-20k/resolve/main/data/train-00000-of-00001.parquet"
DATA_PATH = ROOT / "data" / "train.parquet"
LATENT = 40
COLORS = 64
PATTERN_COUNT = 1200
EXPORT_BATCH = 4
PATTERN_VARIANTS = 2
PATTERN_SAMPLES_PER_STYLE = 4000

# The source set is object-oriented rather than an ornament set.  These broad
# buckets keep the export varied while still letting the latent vector carry
# the source motif: fauna, botanical forms, terrain, geometry, and textile-like
# repeats.  They are intentionally soft categories; every source still gets a
# chance to become a pattern.
STYLE_NAMES = ("fauna", "botanical", "terrain", "geometry", "textile")
STYLE_FAMILIES = {
    "fauna": {"01_animals", "02_fantasy_creatures", "03_people_and_characters"},
    "botanical": {"04_plants_and_fungi"},
    "terrain": {"16_nature_and_landscapes", "18_effects_and_celestial"},
    "geometry": {
        "11_machines_and_technology",
        "12_science_and_medicine",
        "14_places_and_structures",
        "17_materials_and_components",
        "19_symbols_and_documents",
    },
    "textile": {
        "05_food_and_drink",
        "06_containers_and_storage",
        "07_clothing_and_accessories",
        "08_treasure_magic_and_relics",
        "09_tools_and_crafting",
        "10_weapons_and_defenses",
        "15_household_furniture_and_everyday",
    },
}
BAYER8 = torch.tensor([
    [0, 48, 12, 60, 3, 51, 15, 63],
    [32, 16, 44, 28, 35, 19, 47, 31],
    [8, 56, 4, 52, 11, 59, 7, 55],
    [40, 24, 36, 20, 43, 27, 39, 23],
    [2, 50, 14, 62, 1, 49, 13, 61],
    [34, 18, 46, 30, 33, 17, 45, 29],
    [10, 58, 6, 54, 9, 57, 5, 53],
    [42, 26, 38, 22, 41, 25, 37, 21],
], dtype=torch.long)


def device() -> torch.device:
    return torch.device("mps" if torch.backends.mps.is_available() else "cpu")


def download_dataset() -> None:
    DATA_PATH.parent.mkdir(parents=True, exist_ok=True)
    if not DATA_PATH.exists():
        urllib.request.urlretrieve(DATA_URL, DATA_PATH)


def tokens_from_bytes(image_bytes: bytes) -> torch.Tensor:
    image = Image.open(io.BytesIO(image_bytes)).convert("RGB")
    pixels = torch.frombuffer(bytearray(image.tobytes()), dtype=torch.uint8).reshape(24, 24, 3)
    return ((pixels[..., 0] // 64) * 16 + (pixels[..., 1] // 64) * 4 + pixels[..., 2] // 64).long()


def rgb_to_token(rgb: list[int]) -> int:
    return (int(rgb[0]) // 64) * 16 + (int(rgb[1]) // 64) * 4 + int(rgb[2]) // 64


def tokens_to_image(tokens: torch.Tensor) -> torch.Tensor:
    red = (tokens // 16).float() / 3 * 2 - 1
    green = ((tokens // 4) % 4).float() / 3 * 2 - 1
    blue = (tokens % 4).float() / 3 * 2 - 1
    return torch.stack((red, green, blue))


def normalize_background(tokens: torch.Tensor, background: int) -> torch.Tensor:
    """Collapse the dataset's near-black tile background to one clean token."""

    result = tokens.clone()
    result[result == background] = 0
    return result


def mirror_vertical(tokens: torch.Tensor, start: int) -> torch.Tensor:
    half = tokens[:, start:start + 12]
    return torch.cat((half, half.flip(-1)), dim=-1)


def mirror_horizontal(tokens: torch.Tensor, start: int) -> torch.Tensor:
    half = tokens[start:start + 12, :]
    return torch.cat((half, half.flip(-2)), dim=-2)


def rosette(tokens: torch.Tensor, start: int) -> torch.Tensor:
    quarter = tokens[start:start + 12, start:start + 12]
    top = torch.cat((quarter, quarter.flip(-1)), dim=-1)
    return torch.cat((top, top.flip(-2)), dim=-2)


def diamond_repeat(tokens: torch.Tensor, start: int) -> torch.Tensor:
    patch = tokens[start:start + 8, start:start + 8]
    tile = torch.cat((patch, patch.flip(-1)), dim=-1)
    tile = torch.cat((tile, tile.flip(-2)), dim=-2)
    return tile.repeat((2, 2))[:24, :24]


def woven_repeat(tokens: torch.Tensor, start: int) -> torch.Tensor:
    vertical = mirror_vertical(tokens, start)
    horizontal = mirror_horizontal(tokens, start)
    yy, xx = torch.meshgrid(torch.arange(24), torch.arange(24), indexing="ij")
    mask = ((xx // 3 + yy // 3 + start) % 2).bool()
    return torch.where(mask, vertical, horizontal)


def apply_dither(tokens: torch.Tensor, style: int, variant: int) -> torch.Tensor:
    """Add a restrained field of pixels so motifs read as ornaments, not cutouts."""

    result = tokens.clone()
    foreground = result.ne(0)
    yy, xx = torch.meshgrid(torch.arange(24), torch.arange(24), indexing="ij")
    threshold = BAYER8[(yy + style + variant) % 8, (xx * 3 + variant) % 8]
    # Keep the added field sparse.  The browser applies the final palette
    # harmony, so this only teaches the decoder to leave designed breathing
    # marks around the main silhouette.
    halo = (~foreground) & (threshold < (5 + style * 2))
    if halo.any():
        neighbours = (
            torch.roll(foreground, 1, 0)
            | torch.roll(foreground, -1, 0)
            | torch.roll(foreground, 1, 1)
            | torch.roll(foreground, -1, 1)
        )
        accent = torch.where(foreground, result, torch.zeros_like(result))
        accent = torch.roll(accent, 1 + variant % 2, dims=1)
        result[halo & neighbours] = accent[halo & neighbours]
    return result


def pattern_tokens(tokens: torch.Tensor, background: int, style: int, variant: int) -> torch.Tensor:
    """Turn an object sprite into a compact, repeatable motif."""

    source = normalize_background(tokens, background)
    starts = (0, 4, 6, 8)
    start = starts[(variant + style) % len(starts)]
    if style == 0:  # animalistic silhouettes and masks
        result = mirror_vertical(source, start)
    elif style == 1:  # petals, leaves, and rosettes
        result = rosette(source, start)
    elif style == 2:  # horizons, waves, and landscape bands
        result = mirror_horizontal(source, start)
    elif style == 3:  # diamonds, tiles, and engineered geometry
        result = diamond_repeat(source, start)
    else:  # woven, ethnic-like repeats with a little controlled variation
        result = woven_repeat(source, start)
    return apply_dither(result, style, variant)


class PixelDataset(Dataset):
    def __init__(self, frame: pd.DataFrame) -> None:
        self.images = frame["image"].tolist()
        self.families = frame["family"].tolist()
        self.styles = [self.style_for_family(family) for family in self.families]
        self.characters = [
            i for i, family in enumerate(self.families)
            if family in STYLE_FAMILIES["fauna"]
        ]
        style_sources = {
            style: [index for index, source_style in enumerate(self.styles) if source_style == style]
            for style in range(len(STYLE_NAMES))
        }
        self.patterns = []
        for style in range(len(STYLE_NAMES)):
            sources = style_sources[style]
            for position in range(PATTERN_SAMPLES_PER_STYLE):
                self.patterns.append((
                    sources[position % len(sources)],
                    style,
                    position % PATTERN_VARIANTS,
                ))
        self.examples = []
        # Interleave a small amount of the original sprite task with the
        # pattern task.  It keeps the conditional latent space anchored while
        # the exported decoder only uses the pattern branch.
        for index in range(max(len(self.characters), len(self.patterns))):
            if index < len(self.characters):
                self.examples.append(("character", self.characters[index], -1, 0))
            if index < len(self.patterns):
                self.examples.append(("pattern", *self.patterns[index]))

    def __len__(self) -> int:
        return len(self.examples)

    @staticmethod
    def style_for_family(family: str) -> int:
        for style, name in enumerate(STYLE_NAMES):
            if family in STYLE_FAMILIES[name]:
                return style
        return len(STYLE_NAMES) - 1

    def __getitem__(self, index: int) -> tuple[torch.Tensor, torch.Tensor, torch.Tensor, torch.Tensor]:
        kind, source_index, style, variant = self.examples[index]
        row = self.images[source_index]
        tokens = tokens_from_bytes(row["bytes"])
        if kind == "pattern":
            tokens = pattern_tokens(
                tokens,
                rgb_to_token(row.get("tile_bg", [0, 0, 0])),
                style,
                variant,
            )
        return (
            tokens_to_image(tokens),
            torch.tensor(1 if kind == "pattern" else 0, dtype=torch.long),
            tokens,
            torch.tensor(style, dtype=torch.long),
        )


class ConditionalVAE(nn.Module):
    def __init__(self) -> None:
        super().__init__()
        self.label = nn.Embedding(2, 12)
        self.encoder = nn.Sequential(
            nn.Conv2d(3, 48, 4, 2, 1), nn.LeakyReLU(.2),
            nn.Conv2d(48, 96, 4, 2, 1), nn.LeakyReLU(.2),
            nn.Conv2d(96, 144, 4, 2, 1), nn.LeakyReLU(.2),
        )
        self.mu = nn.Linear(144 * 3 * 3 + 12, LATENT)
        self.logvar = nn.Linear(144 * 3 * 3 + 12, LATENT)
        self.decode_fc = nn.Linear(LATENT + 12, 144 * 3 * 3)
        self.decoder = nn.Sequential(
            nn.ConvTranspose2d(144, 96, 4, 2, 1), nn.LeakyReLU(.2),
            nn.ConvTranspose2d(96, 48, 4, 2, 1), nn.LeakyReLU(.2),
            nn.ConvTranspose2d(48, COLORS, 4, 2, 1),
        )

    def encode(self, image: torch.Tensor, label: torch.Tensor) -> tuple[torch.Tensor, torch.Tensor]:
        hidden = torch.cat((self.encoder(image).flatten(1), self.label(label)), dim=1)
        return self.mu(hidden), self.logvar(hidden)

    def decode(self, latent: torch.Tensor, label: torch.Tensor) -> torch.Tensor:
        hidden = self.decode_fc(torch.cat((latent, self.label(label)), dim=1)).reshape(-1, 144, 3, 3)
        return self.decoder(hidden)

    def forward(self, image: torch.Tensor, label: torch.Tensor) -> tuple[torch.Tensor, torch.Tensor, torch.Tensor]:
        mu, logvar = self.encode(image, label)
        latent = mu + torch.randn_like(mu) * torch.exp(.5 * logvar)
        return self.decode(latent, label), mu, logvar


class Decoder(nn.Module):
    def __init__(self, model: ConditionalVAE) -> None:
        super().__init__()
        self.model = model

    def forward(self, latent: torch.Tensor, label: torch.Tensor) -> torch.Tensor:
        return self.model.decode(latent, label)


class PatternDecoder(nn.Module):
    def __init__(self, model: ConditionalVAE, batch_size: int) -> None:
        super().__init__()
        self.model = model
        self.register_buffer("pattern_labels", torch.ones(batch_size, dtype=torch.long))

    def forward(self, latent: torch.Tensor) -> torch.Tensor:
        return self.model.decode(latent, self.pattern_labels)


def export(model: ConditionalVAE, data: PixelDataset, target: torch.device) -> None:
    model.eval().to(target)
    style_vectors: list[list[list[float]]] = [[] for _ in STYLE_NAMES]
    loader = DataLoader(data, batch_size=128, shuffle=False, num_workers=0)
    with torch.no_grad():
        for image, label, _tokens, style in loader:
            pattern_mask = label.eq(1)
            if not pattern_mask.any():
                continue
            mu, _ = model.encode(image.to(target), label.to(target))
            for vector, style_id in zip(mu.cpu()[pattern_mask], style[pattern_mask]):
                style_vectors[int(style_id)].append(vector.tolist())

    per_style = PATTERN_COUNT // len(STYLE_NAMES)
    remainder = PATTERN_COUNT % len(STYLE_NAMES)
    bank = []
    style_ranges = {}
    for style, name in enumerate(STYLE_NAMES):
        target_count = per_style + (1 if style < remainder else 0)
        vectors = style_vectors[style]
        if len(vectors) < target_count:
            raise RuntimeError(
                f"Expected {target_count} vectors for {name}, got {len(vectors)}"
            )
        start = len(bank)
        bank.extend(vectors[:target_count])
        style_ranges[name] = [start, len(bank)]

    if len(bank) != PATTERN_COUNT:
        raise RuntimeError(f"Expected {PATTERN_COUNT} pattern vectors, got {len(bank)}")
    output_dir = ROOT / "public" / "model"
    output_dir.mkdir(parents=True, exist_ok=True)
    model.cpu()
    torch.onnx.export(
        PatternDecoder(model, EXPORT_BATCH).eval(),
        (torch.zeros(EXPORT_BATCH, LATENT),),
        output_dir / "garden-cvae.onnx",
        input_names=["latent"], output_names=["logits"],
        opset_version=18, dynamo=True, external_data=False,
    )
    flat = torch.tensor(bank[:PATTERN_COUNT], dtype=torch.float32).numpy().tobytes()
    (output_dir / "latent-bank.bin").write_bytes(flat)
    palette = [[r * 85, g * 85, b * 85] for r in range(4) for g in range(4) for b in range(4)]
    (output_dir / "model.json").write_text(json.dumps({
        "latent": LATENT,
        "perClass": PATTERN_COUNT,
        "batch": EXPORT_BATCH,
        "size": 24,
        "styles": list(STYLE_NAMES),
        "styleRanges": style_ranges,
        "patternVariants": PATTERN_VARIANTS,
        "palette": palette,
    }, indent=2) + "\n")
    print(f"Exported pattern model ({(output_dir / 'garden-cvae.onnx').stat().st_size / 1_000_000:.2f} MB) and {len(bank[:PATTERN_COUNT])} latent codes")


def main(args: argparse.Namespace) -> None:
    random.seed(args.seed)
    torch.manual_seed(args.seed)
    download_dataset()
    data = PixelDataset(pd.read_parquet(DATA_PATH))
    target = device()
    model = ConditionalVAE().to(target)
    checkpoint = ROOT / "models" / "garden-cvae.pt"
    if args.export_only:
        model.load_state_dict(torch.load(checkpoint, map_location=target, weights_only=True))
        print(f"Loaded {checkpoint.relative_to(ROOT)}")
    else:
        loader = DataLoader(data, batch_size=args.batch_size, shuffle=True, num_workers=0)
        optimizer = torch.optim.AdamW(model.parameters(), lr=args.learning_rate, weight_decay=1e-4)
        print(f"Training on {target.type}: {len(data):,} examples")
        for epoch in range(1, args.epochs + 1):
            losses = []
            for image, label, tokens, _style in loader:
                image, label, tokens = image.to(target), label.to(target), tokens.to(target)
                logits, mu, logvar = model(image, label)
                pixels = F.cross_entropy(logits, tokens)
                kl = -.5 * torch.mean(1 + logvar - mu.square() - logvar.exp())
                loss = pixels + args.kl_weight * kl
                optimizer.zero_grad(set_to_none=True)
                loss.backward()
                optimizer.step()
                losses.append(loss.item())
            print(f"epoch {epoch:03d}/{args.epochs}: loss {sum(losses) / len(losses):.4f}")
        (ROOT / "models").mkdir(exist_ok=True)
        torch.save(model.state_dict(), checkpoint)
    export(model, data, target)


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--epochs", type=int, default=48)
    parser.add_argument("--batch-size", type=int, default=128)
    parser.add_argument("--learning-rate", type=float, default=1e-3)
    parser.add_argument("--kl-weight", type=float, default=0.0005)
    parser.add_argument("--seed", type=int, default=44)
    parser.add_argument("--export-only", action="store_true")
    main(parser.parse_args())
