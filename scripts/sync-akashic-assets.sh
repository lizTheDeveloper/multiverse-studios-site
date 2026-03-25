#!/usr/bin/env bash
# Sync assets from the canonical Akashic Records content service into the website serve paths.
# Usage: ./scripts/sync-akashic-assets.sh [akashic_root]
#
# The Akashic Records (../../akashic-records/) is the single source of truth for:
#   - Species sprites (creatures game)
#   - PixelLab sprites (MVEE game)
#   - Map object sprites (MVEE game)
#   - Species audio/songs (creatures game)
#
# This script syncs FROM akashic-records TO the website serve paths.
# Run it whenever akashic-records content changes.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
WEBSITE_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
AKASHIC_ROOT="${1:-$(cd "$WEBSITE_ROOT/../../akashic-records" && pwd)}"

if [ ! -d "$AKASHIC_ROOT" ]; then
  echo "ERROR: Akashic Records not found at $AKASHIC_ROOT"
  echo "Usage: $0 [path/to/akashic-records]"
  exit 1
fi

echo "Syncing assets from: $AKASHIC_ROOT"
echo "              to:    $WEBSITE_ROOT"
echo ""

# 1. Species sprites → play/creatures/sprites/
echo "=== Syncing species sprites ==="
rsync -av --delete \
  "$AKASHIC_ROOT/sprites/species/" \
  "$WEBSITE_ROOT/play/creatures/sprites/"
echo ""

# 2. PixelLab sprites → play/mvee/assets/sprites/pixellab/
echo "=== Syncing PixelLab sprites ==="
rsync -av --delete \
  "$AKASHIC_ROOT/sprites/pixellab/pixellab/" \
  "$WEBSITE_ROOT/play/mvee/assets/sprites/pixellab/"
echo ""

# 3. Map object sprites → play/mvee/assets/sprites/map_objects/
echo "=== Syncing map object sprites ==="
rsync -av --delete \
  "$AKASHIC_ROOT/sprites/map-objects/" \
  "$WEBSITE_ROOT/play/mvee/assets/sprites/map_objects/"
echo ""

# 4. Species audio → play/creatures/audio/
# Only sync .mp3 files (skip .md docs, .aif originals, alternate takes with (N) suffix)
echo "=== Syncing species audio ==="

# Norn songs — primary takes only (no "(N)" suffix or alternate versions)
rsync -av \
  --exclude='* (*)*' \
  --exclude='*alternate*' \
  --exclude='*.md' \
  --exclude='*.aif' \
  --exclude='baby_sounds/' \
  --include='*.mp3' \
  --exclude='*' \
  "$AKASHIC_ROOT/audio/species-songs/Norn/" \
  "$WEBSITE_ROOT/play/creatures/audio/norn/"

# Baby sounds
if [ -d "$AKASHIC_ROOT/audio/species-songs/Norn/baby_sounds/" ]; then
  rsync -av \
    --include='*.mp3' \
    --exclude='*.aif' \
    --exclude='*.md' \
    "$AKASHIC_ROOT/audio/species-songs/Norn/baby_sounds/" \
    "$WEBSITE_ROOT/play/creatures/audio/baby/"
fi

# Ettin songs
if [ -d "$AKASHIC_ROOT/audio/species-songs/Ettin/" ]; then
  rsync -av \
    --exclude='* (*)*' \
    --exclude='*.md' \
    --include='*.mp3' \
    --exclude='*' \
    "$AKASHIC_ROOT/audio/species-songs/Ettin/" \
    "$WEBSITE_ROOT/play/creatures/audio/ettin/"
fi

# 5. Radio music → akashic-records/audio/ (playlist + tracks for multiverse-radio.js)
echo "=== Syncing radio music ==="
mkdir -p "$WEBSITE_ROOT/akashic-records/audio/music"
rsync -av \
  "$AKASHIC_ROOT/audio/playlist.json" \
  "$WEBSITE_ROOT/akashic-records/audio/"
rsync -av \
  --include='*.mp3' \
  --exclude='*.aif' \
  --exclude='*.md' \
  "$AKASHIC_ROOT/audio/music/" \
  "$WEBSITE_ROOT/akashic-records/audio/music/"

echo ""
echo "Sync complete."
