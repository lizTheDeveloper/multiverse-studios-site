#!/bin/bash
cd /Users/annhoward/src/multiverse_games/games/website/office
if [ -z "$PIXELLAB_API_KEY" ]; then
  echo "Error: PIXELLAB_API_KEY environment variable is required" >&2
  exit 1
fi

echo "=== Starting working poses ==="
python3 generate_agent_animations.py --pose working 2>&1 | tee /tmp/sprite-anim-working.log

echo "=== Starting meeting poses ==="
python3 generate_agent_animations.py --pose meeting 2>&1 | tee /tmp/sprite-anim-meeting.log

echo "=== Starting athome poses ==="
python3 generate_agent_animations.py --pose athome 2>&1 | tee /tmp/sprite-anim-athome.log

echo "=== Regenerating Palette idle sprite with new description ==="
python3 generate_agent_sprites.py 2>&1 | tee /tmp/sprite-palette-regen.log

echo "=== ALL ANIMATION GENERATION COMPLETE ==="
