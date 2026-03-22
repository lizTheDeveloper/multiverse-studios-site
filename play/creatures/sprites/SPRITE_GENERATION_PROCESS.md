# Sprite Generation Process — PixelLab Character Pipeline

This document describes the exact process used to generate species sprite families for Precursors. Follow these steps to produce a complete, consistent sprite set for any species.

## Prerequisites

- PixelLab API key (Bearer token auth)
- Species Bible entry with visual tokens (baseHue, accentHue, bodyPlan, etc.)
- Species art doc with color palette and physical description
- Base URL: `https://api.pixellab.ai`
- Auth header: `Authorization: Bearer <API_KEY>`

## Overview

```
Step 1: Generate ONE base character → board review
Step 2: Generate phenotype variants (12 color variations) → board review
Step 3: Add animations to each phenotype
Step 4: Download ZIPs and organize files
Step 5: Verify and catalog
```

## Step 1: Generate Base Character (Board Approval Required)

Generate a single character via `POST /v2/create-character-with-4-directions`:

```json
{
  "description": "<species> <body_description>, <color>, <distinctive_features>, standing alert, top-down <creature_type>",
  "image_size": {"width": 48, "height": 48},
  "view": "high top-down",
  "template_id": "mannequin"
}
```

**Response** (async):
```json
{
  "background_job_id": "<job-id>",
  "character_id": "<char-id>",
  "status": "processing"
}
```

**Poll job**: `GET /v2/background-jobs/<job-id>` until `status: "completed"`.

**Download and verify**: `GET /v2/characters/<char-id>/zip` → extract `rotations/south.png`.

**STOP HERE.** Post the south rotation for board review. Do not proceed until approved.

### Key parameters

| Parameter | Value | Notes |
|-----------|-------|-------|
| image_size | 48×48 | Native game resolution for characters |
| view | "high top-down" | Matches game camera |
| template_id | "mannequin" | Best for bipedal creatures |

### Prompt formula

```
<size> <color> <body_plan> with <accent_details>, <distinctive_features>, standing alert, top-down <creature_type>
```

Example (Norn P1):
> "Small blue-grey deer with white belly spots, tiny antler nubs, large doe eyes, standing alert, top-down forest creature"

## Step 2: Generate Phenotype Variants

After board approves the base design, generate 12 color variants. Each is a **separate character** with a unique color description.

For each phenotype, call `POST /v2/create-character-with-4-directions` with:
- Same `image_size`, `view`, `template_id` as base
- Description changed ONLY for color/pattern — keep body plan and features identical

### Description pattern

Keep the body plan words identical across all variants. Only change color adjectives:

```
<size> <VARIANT_COLOR> <body_plan> with <VARIANT_ACCENT>, <same_features>, standing alert, top-down <creature_type>
```

### Important

- Run ONE variant at a time initially to verify consistency
- If a variant diverges from the body plan, regenerate it
- Record all character IDs for later animation generation

## Step 3: Add Animations

For each phenotype character, generate these animations:

### Required animations

| Animation | API | Frames | Directions |
|-----------|-----|--------|------------|
| Walking | v2 animate-with-text-v2 | 8 | south, east |
| Breathing idle | v1 animate-with-text | 4 | south |
| Drinking | v1 animate-with-text | 4 | south, east |
| Picking up | v1 animate-with-text | 4 | south, east |

### v1 animate-with-text (sync, ≤4 frames)

```
POST /v1/animate-with-text
{
  "image_size": {"width": 48, "height": 48},
  "description": "<same character description>",
  "action": "breathing idle animation, subtle chest rise and fall",
  "reference_image": {"base64": "<south_rotation_base64>"},
  "n_frames": 4,
  "direction": "south",
  "view": "high top-down"
}
```

Returns `{"images": [{"base64": "..."},...]}` synchronously.

### v2 animate-with-text-v2 (async, 8 frames)

```
POST /v2/animate-with-text-v2
{
  "reference_image": {"base64": "<south_rotation_base64>"},
  "reference_image_size": {"width": 48, "height": 48},
  "action": "walking cycle, moving legs alternating",
  "image_size": {"width": 48, "height": 48}
}
```

Returns `{"background_job_id": "..."}`. Poll via `GET /v2/background-jobs/<job-id>`.

**Warning**: v2 jobs sometimes stall at ~49% progress. If a job doesn't complete within 5 minutes, fall back to v1 with 4 frames.

### Action prompts

| Animation | Action prompt |
|-----------|--------------|
| Walking | "walking cycle, moving legs alternating" |
| Breathing | "breathing idle animation, subtle chest rise and fall" |
| Drinking | "drinking from ground, head lowered" |
| Picking up | "picking up object from ground, reaching down" |

## Step 4: Download and Organize

After all animations are created, download each character's ZIP:

```
GET /v2/characters/<char-id>/zip → phenotype-N.zip
```

Extract to:
```
public/sprites/<species_plural>/phenotype-N/
  rotations/
    south.png, east.png, north.png, west.png
  walking-8-frames/
    south/frame_000.png ... frame_007.png
    east/frame_000.png ... frame_007.png
  breathing-idle/
    south/frame_000.png ... frame_003.png
  drinking/
    south/frame_000.png ... frame_003.png
    east/frame_000.png ... frame_003.png
  picking-up/
    south/frame_000.png ... frame_003.png
    east/frame_000.png ... frame_003.png
```

**West direction**: Flip east programmatically in-game. Do not generate west animations.

## Step 5: Verify and Catalog

1. Visually inspect each phenotype's south rotation — must match body plan
2. Count files per phenotype — target is 50 (4 rotations + 46 animation frames)
3. Create `PHENOTYPE_CATALOG.md` with:
   - Phenotype ID, primary color, accent, character ID
   - File count per phenotype
   - Genetic axes (body hue, lightness, accent contrast, build)

## Common Pitfalls

- **Body plan drift**: Different descriptions can produce quadrupeds vs bipeds. Keep non-color words identical.
- **v2 stalls**: animate-with-text-v2 stalls at ~49%. Use v1 (4 frames) as fallback.
- **Size constraints**: Only 128×128, 64×64, 48×48, 32×32, or 16×16 are valid.
- **No init_image on create-character**: The v2 character endpoint doesn't accept init_image. Consistency comes from keeping descriptions similar.
- **Mass scripting**: Never batch-generate without verifying each step. Run one, check, proceed.

## API Quick Reference

| Endpoint | Method | Sync/Async | Purpose |
|----------|--------|------------|---------|
| /v2/create-character-with-4-directions | POST | Async | Create character with 4 rotations |
| /v2/background-jobs/{id} | GET | — | Poll async job status |
| /v2/characters/{id}/zip | GET | — | Download all rotations + animations |
| /v2/characters/{id} | GET | — | Get character metadata |
| /v1/rotate | POST | Sync | Rotate sprite to new direction |
| /v1/animate-with-text | POST | Sync | Generate ≤4-frame animation |
| /v2/animate-with-text-v2 | POST | Async | Generate 8-frame animation |
