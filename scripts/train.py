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
CHARACTER_FAMILIES = {"01_animals", "02_fantasy_creatures", "03_people_and_characters", "11_machines_and_technology"}
LATENT = 40
COLORS = 64
PATTERN_COUNT = 600
EXPORT_BATCH = 4


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


def tokens_to_image(tokens: torch.Tensor) -> torch.Tensor:
    red = (tokens // 16).float() / 3 * 2 - 1
    green = ((tokens // 4) % 4).float() / 3 * 2 - 1
    blue = (tokens % 4).float() / 3 * 2 - 1
    return torch.stack((red, green, blue))


def repeat_tile(tokens: torch.Tensor) -> torch.Tensor:
    tile = tokens[::2, ::2]
    top = torch.cat((tile, tile.flip(-1)), dim=-1)
    return torch.cat((top, top.flip(-2)), dim=-2)


class PixelDataset(Dataset):
    def __init__(self, frame: pd.DataFrame) -> None:
        self.images = frame["image"].tolist()
        self.characters = [i for i, family in enumerate(frame["family"]) if family in CHARACTER_FAMILIES]

    def __len__(self) -> int:
        return len(self.characters) * 2

    def __getitem__(self, index: int) -> tuple[torch.Tensor, torch.Tensor, torch.Tensor]:
        is_pattern = index % 2 == 1
        source_index = index // 2 % (len(self.images) if is_pattern else len(self.characters))
        if not is_pattern:
            source_index = self.characters[source_index]
        tokens = tokens_from_bytes(self.images[source_index]["bytes"])
        if is_pattern:
            tokens = repeat_tile(tokens)
        return tokens_to_image(tokens), torch.tensor(1 if is_pattern else 0, dtype=torch.long), tokens


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
    bank = []
    loader = DataLoader(data, batch_size=128, shuffle=True, num_workers=0)
    with torch.no_grad():
        for image, label, _tokens in loader:
            pattern_mask = label.eq(1)
            if not pattern_mask.any():
                continue
            mu, _ = model.encode(image.to(target), label.to(target))
            for vector in mu.cpu()[pattern_mask]:
                if len(bank) < PATTERN_COUNT:
                    bank.append(vector.tolist())
            if len(bank) >= PATTERN_COUNT:
                break
    if len(bank) < PATTERN_COUNT:
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
        "palette": palette,
    }))
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
            for image, label, tokens in loader:
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
