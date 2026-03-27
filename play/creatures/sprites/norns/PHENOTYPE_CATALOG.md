# Norn Phenotype Catalog

12 phenotype variants generated via PixelLab character system. Each variant has 4 directional rotations (south, east, north, west). Only south + east are used in-game; west is flipped from east programmatically.

## Genetic Appearance Axes

### Axis 1: Body Hue
The primary body coloration, controlled by the `baseHue` gene.

| Value | Phenotypes | Description |
|-------|-----------|-------------|
| Blue | P1 | Classic blue — species default (baseHue ~210) |
| Slate/Navy | P2, P5 | Dark blue-purple, recessive cool tones |
| Teal | P4 | Blue-green shift |
| Lavender | P6 | Purple-pink shift from blue base |
| Brown/Russet | P7, P9 | Warm earth tones — ancestral coloring |
| White/Albino | P3, P8 | Very light, near-white — low melanin |
| Pink/Rose | P10 | Warm pink — rare recessive |
| Moss/Olive | P11 | Green-shifted — forest adaptation |
| Charcoal | P12 | Dark grey with blue highlights |
| Sky Blue | P3 | Pale icy blue — high lightness |

### Axis 2: Lightness
How light or dark the overall body reads.

| Value | Phenotypes |
|-------|-----------|
| Very Light | P3, P8 |
| Light | P1, P10 |
| Medium | P4, P6, P7, P9, P12 |
| Dark | P2, P5, P11 |

### Axis 3: Accent Contrast
How much the accent color (antlers, ears, belly) contrasts with the body.

| Value | Phenotypes |
|-------|-----------|
| High contrast | P4, P7, P9, P10 (light accents on dark body) |
| Medium contrast | P1, P3, P6 |
| Low contrast | P2, P5, P8, P11, P12 (accents blend with body) |

### Axis 4: Build
Body proportions and silhouette thickness.

| Value | Phenotypes |
|-------|-----------|
| Standard | P1, P2, P4, P5, P6, P7, P9, P10, P11, P12 |
| Stocky | P3 (slightly rounder) |
| Lean | P8 (narrower silhouette) |

## Phenotype Details

| ID | Primary Color | Accent | Lightness | Build | Notes |
|----|--------------|--------|-----------|-------|-------|
| P1 | Blue | Light blue/white | Light | Standard | Species default. Classic Norn. |
| P2 | Dark slate-blue | Indigo | Dark | Standard | Nocturnal variant. Deep cool tones. |
| P3 | Sky blue/white | Cream | Very Light | Stocky | Albino-adjacent. Icy coloring. |
| P4 | Teal-green | Cream | Medium | Standard | Forest-adapted. Unique blue-green body. |
| P5 | Deep navy/purple | Lavender | Dark | Standard | Darkest variant. Purple undertones. |
| P6 | Mauve/purple | Pink-grey | Medium | Standard | Lavender body with magenta accents. |
| P7 | Warm brown | Gold/amber | Medium | Standard | Ancestral coloring. Deer-like. |
| P8 | White/cream | Dark brown | Very Light | Lean | Near-albino. Dark extremities. |
| P9 | Rusty orange | Cream | Medium | Standard | Warm autumn coloring. Fox-like. |
| P10 | Dusty pink | Rose/cream | Light | Standard | Rare pink morph. Warm undertones. |
| P11 | Moss green | Olive/cream | Dark | Standard | Forest camouflage variant. |
| P12 | Charcoal grey | Blue highlights | Medium | Standard | Dark neutral with cool accent. |

## PixelLab Character IDs (Key 1)

These can be used to regenerate animations via `GET /v2/characters/{id}/zip`:

- P1: `1a9c3bc8-c1d5-4b54-a757-794a7d7e6dbc`
- P2: `b837cb0a-19d8-441b-a7c3-532b3f0fc4a8`
- P3: `8fd298d9-b272-4042-a772-e11c6f58569d`
- P4: `1635058c-f810-443e-a11f-3d0be2a9d941`
- P5: `4f99c048-368c-4e9a-a639-8c54efcc038c`
- P6: `d25b2cfc-9ad3-4522-81f3-dccb0174da62`

## Base Character

All phenotypes derived from board-approved base character: `ea574b8b-374a-4b8b-919b-13b11aefeded` (Key 1 account).
