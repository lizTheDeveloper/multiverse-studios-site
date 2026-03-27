#!/usr/bin/env bash
#
# generate_species.sh — PixelLab species sprite generation pipeline
#
# Usage:
#   ./generate_species.sh <species_name> <config_file>
#
# Config file is a JSON file with:
#   {
#     "api_key": "...",
#     "species_name": "ettin",
#     "species_plural": "ettins",
#     "image_size": 48,
#     "view": "high top-down",
#     "template_id": "mannequin",
#     "output_dir": "public/sprites/ettins",
#     "base_description": "Large two-headed desert creature with ...",
#     "phenotypes": [
#       {"id": "P1", "description": "Large sandstone-brown two-headed creature ..."},
#       ...
#     ]
#   }
#
# The script runs interactively — it pauses for verification between steps.
# NEVER run this unattended. Visual verification at each step is mandatory.

set -euo pipefail

API_BASE="https://api.pixellab.ai"

# --- Helpers ---

log() { echo "[$(date +%H:%M:%S)] $*"; }
err() { echo "[ERROR] $*" >&2; }

api_post() {
    local endpoint="$1"
    local data="$2"
    local api_key="$3"
    curl -s -H "Authorization: Bearer $api_key" \
         -H "Content-Type: application/json" \
         -X POST "${API_BASE}${endpoint}" \
         -d "$data"
}

api_get() {
    local endpoint="$1"
    local api_key="$2"
    curl -s -H "Authorization: Bearer $api_key" "${API_BASE}${endpoint}"
}

api_download() {
    local endpoint="$1"
    local api_key="$2"
    local output="$3"
    curl -s -H "Authorization: Bearer $api_key" "${API_BASE}${endpoint}" -o "$output"
}

poll_job() {
    local job_id="$1"
    local api_key="$2"
    local max_wait="${3:-300}"  # 5 minutes default
    local elapsed=0

    while [ $elapsed -lt $max_wait ]; do
        local result
        result=$(api_get "/v2/background-jobs/$job_id" "$api_key")
        local status
        status=$(echo "$result" | python3 -c "import json,sys; print(json.load(sys.stdin).get('status','unknown'))")
        local progress
        progress=$(echo "$result" | python3 -c "import json,sys; r=json.load(sys.stdin).get('last_response',{}); print(r.get('progress',0))" 2>/dev/null || echo "0")

        if [ "$status" = "completed" ]; then
            echo "$result"
            return 0
        elif [ "$status" = "failed" ]; then
            err "Job $job_id failed"
            echo "$result"
            return 1
        fi

        printf "\r  Polling... status=%s progress=%.0f%% elapsed=%ds" "$status" "$(echo "$progress * 100" | bc 2>/dev/null || echo 0)" "$elapsed"
        sleep 5
        elapsed=$((elapsed + 5))
    done

    err "Job $job_id timed out after ${max_wait}s"
    return 1
}

image_to_base64() {
    local file="$1"
    base64 -i "$file" | tr -d '\n'
}

# --- Step functions ---

create_base_character() {
    local config="$1"
    local api_key description image_size view template_id output_dir

    api_key=$(python3 -c "import json; print(json.load(open('$config'))['api_key'])")
    description=$(python3 -c "import json; print(json.load(open('$config'))['base_description'])")
    image_size=$(python3 -c "import json; print(json.load(open('$config'))['image_size'])")
    view=$(python3 -c "import json; print(json.load(open('$config'))['view'])")
    template_id=$(python3 -c "import json; print(json.load(open('$config'))['template_id'])")
    output_dir=$(python3 -c "import json; print(json.load(open('$config'))['output_dir'])")

    log "Creating base character..."
    log "  Description: $description"
    log "  Size: ${image_size}x${image_size}"

    local payload
    payload=$(python3 -c "
import json
print(json.dumps({
    'description': '$description',
    'image_size': {'width': $image_size, 'height': $image_size},
    'view': '$view',
    'template_id': '$template_id'
}))
")

    local result
    result=$(api_post "/v2/create-character-with-4-directions" "$payload" "$api_key")
    local job_id character_id
    job_id=$(echo "$result" | python3 -c "import json,sys; print(json.load(sys.stdin)['background_job_id'])")
    character_id=$(echo "$result" | python3 -c "import json,sys; print(json.load(sys.stdin)['character_id'])")

    log "  Job: $job_id"
    log "  Character: $character_id"

    log "Waiting for character generation..."
    poll_job "$job_id" "$api_key"
    echo ""

    # Download ZIP
    mkdir -p "$output_dir/base"
    api_download "/v2/characters/$character_id/zip" "$api_key" "$output_dir/base/character.zip"

    # Extract
    cd "$output_dir/base"
    unzip -o character.zip -d .
    cd - > /dev/null

    log "Base character saved to $output_dir/base/"
    log "Character ID: $character_id"
    echo "$character_id" > "$output_dir/base/character_id.txt"

    echo ""
    log "=== STOP: Open $output_dir/base/rotations/south.png and verify ==="
    log "=== Does it match the species bible? Correct body plan? ==="
    read -p "Continue? (y/n): " confirm
    if [ "$confirm" != "y" ]; then
        log "Aborted by user."
        exit 0
    fi
}

create_phenotype() {
    local config="$1"
    local phenotype_index="$2"

    local api_key image_size view template_id output_dir description phenotype_id

    api_key=$(python3 -c "import json; print(json.load(open('$config'))['api_key'])")
    image_size=$(python3 -c "import json; print(json.load(open('$config'))['image_size'])")
    view=$(python3 -c "import json; print(json.load(open('$config'))['view'])")
    template_id=$(python3 -c "import json; print(json.load(open('$config'))['template_id'])")
    output_dir=$(python3 -c "import json; print(json.load(open('$config'))['output_dir'])")
    description=$(python3 -c "import json; print(json.load(open('$config'))['phenotypes'][$phenotype_index]['description'])")
    phenotype_id=$(python3 -c "import json; print(json.load(open('$config'))['phenotypes'][$phenotype_index]['id'])")

    log "Creating phenotype $phenotype_id..."
    log "  Description: $description"

    local payload
    payload=$(python3 -c "
import json
print(json.dumps({
    'description': $(python3 -c "import json; print(json.dumps(json.load(open('$config'))['phenotypes'][$phenotype_index]['description']))"),
    'image_size': {'width': $image_size, 'height': $image_size},
    'view': '$view',
    'template_id': '$template_id'
}))
")

    local result
    result=$(api_post "/v2/create-character-with-4-directions" "$payload" "$api_key")
    local job_id character_id
    job_id=$(echo "$result" | python3 -c "import json,sys; print(json.load(sys.stdin)['background_job_id'])")
    character_id=$(echo "$result" | python3 -c "import json,sys; print(json.load(sys.stdin)['character_id'])")

    log "  Job: $job_id | Character: $character_id"
    poll_job "$job_id" "$api_key"
    echo ""

    local pdir="$output_dir/phenotype-${phenotype_id#P}"
    mkdir -p "$pdir"
    api_download "/v2/characters/$character_id/zip" "$api_key" "$pdir/character.zip"

    cd "$pdir"
    unzip -o character.zip -d .
    rm -f character.zip
    cd - > /dev/null

    echo "$character_id" > "$pdir/character_id.txt"
    log "Phenotype $phenotype_id saved to $pdir/"
    log "=== VERIFY: Open $pdir/rotations/south.png — correct body plan? ==="
    read -p "Continue? (y/n): " confirm
    if [ "$confirm" != "y" ]; then
        log "Aborted at phenotype $phenotype_id."
        exit 0
    fi
}

add_animations() {
    local config="$1"
    local phenotype_index="$2"

    local api_key image_size output_dir phenotype_id description

    api_key=$(python3 -c "import json; print(json.load(open('$config'))['api_key'])")
    image_size=$(python3 -c "import json; print(json.load(open('$config'))['image_size'])")
    output_dir=$(python3 -c "import json; print(json.load(open('$config'))['output_dir'])")
    phenotype_id=$(python3 -c "import json; print(json.load(open('$config'))['phenotypes'][$phenotype_index]['id'])")
    description=$(python3 -c "import json; print(json.load(open('$config'))['phenotypes'][$phenotype_index]['description'])")

    local pdir="$output_dir/phenotype-${phenotype_id#P}"
    local char_id
    char_id=$(cat "$pdir/character_id.txt")

    log "Adding animations to phenotype $phenotype_id (char: $char_id)..."

    # Get south rotation as base64 for reference_image
    local south_b64
    south_b64=$(image_to_base64 "$pdir/rotations/south.png")
    local east_b64
    east_b64=$(image_to_base64 "$pdir/rotations/east.png")

    # --- Walking 8-frame (v2, async) — south and east ---
    for dir_name in south east; do
        local ref_b64
        if [ "$dir_name" = "south" ]; then ref_b64="$south_b64"; else ref_b64="$east_b64"; fi

        log "  Walking 8fr ($dir_name)..."
        local walk_payload
        walk_payload=$(python3 -c "
import json
print(json.dumps({
    'reference_image': {'base64': '$ref_b64'},
    'reference_image_size': {'width': $image_size, 'height': $image_size},
    'action': 'walking cycle, moving legs alternating',
    'image_size': {'width': $image_size, 'height': $image_size}
}))
")
        local walk_result
        walk_result=$(api_post "/v2/animate-with-text-v2" "$walk_payload" "$api_key")
        local walk_job
        walk_job=$(echo "$walk_result" | python3 -c "import json,sys; print(json.load(sys.stdin).get('background_job_id',''))")

        if [ -z "$walk_job" ]; then
            err "  Failed to start walk animation ($dir_name): $walk_result"
            log "  Falling back to v1 (4 frames)..."
            local v1_payload
            v1_payload=$(python3 -c "
import json
print(json.dumps({
    'image_size': {'width': $image_size, 'height': $image_size},
    'description': '$description',
    'action': 'walking cycle, moving legs alternating',
    'reference_image': {'base64': '$ref_b64'},
    'n_frames': 4,
    'direction': '$dir_name',
    'view': 'high top-down'
}))
")
            local v1_result
            v1_result=$(api_post "/v1/animate-with-text" "$v1_payload" "$api_key")
            mkdir -p "$pdir/walking-4-frames/$dir_name"
            echo "$v1_result" | python3 -c "
import json, sys, base64
data = json.load(sys.stdin)
for i, img in enumerate(data.get('images', [])):
    with open(f'$pdir/walking-4-frames/$dir_name/frame_{i:03d}.png', 'wb') as f:
        f.write(base64.b64decode(img['base64']))
print(f'Saved {len(data.get(\"images\",[]))} frames')
"
        else
            log "  Walk job: $walk_job"
            local walk_done
            walk_done=$(poll_job "$walk_job" "$api_key" 300)
            echo ""
            if [ $? -eq 0 ]; then
                # Re-download character ZIP to get the new animation
                log "  Re-downloading character ZIP..."
                api_download "/v2/characters/$char_id/zip" "$api_key" "/tmp/${char_id}_update.zip"
                mkdir -p "$pdir/walking-8-frames/$dir_name"
                python3 -c "
import zipfile, os
with zipfile.ZipFile('/tmp/${char_id}_update.zip') as z:
    for name in z.namelist():
        if 'walking-8-frames/$dir_name' in name and name.endswith('.png'):
            data = z.read(name)
            fname = os.path.basename(name)
            with open(f'$pdir/walking-8-frames/$dir_name/{fname}', 'wb') as f:
                f.write(data)
            print(f'Extracted {fname}')
"
            else
                err "  Walk v2 job failed/timed out for $dir_name. Skipping."
            fi
        fi
    done

    # --- Breathing idle (v1, 4 frames) — south only ---
    log "  Breathing idle (south)..."
    local breathe_payload
    breathe_payload=$(python3 -c "
import json
print(json.dumps({
    'image_size': {'width': $image_size, 'height': $image_size},
    'description': '$description',
    'action': 'breathing idle animation, subtle chest rise and fall',
    'reference_image': {'base64': '$south_b64'},
    'n_frames': 4,
    'direction': 'south',
    'view': 'high top-down'
}))
")
    local breathe_result
    breathe_result=$(api_post "/v1/animate-with-text" "$breathe_payload" "$api_key")
    mkdir -p "$pdir/breathing-idle/south"
    echo "$breathe_result" | python3 -c "
import json, sys, base64
data = json.load(sys.stdin)
for i, img in enumerate(data.get('images', [])):
    with open(f'$pdir/breathing-idle/south/frame_{i:03d}.png', 'wb') as f:
        f.write(base64.b64decode(img['base64']))
print(f'Saved {len(data.get(\"images\",[]))} breathing frames')
"

    # --- Drinking (v1, 4 frames) — south and east ---
    for dir_name in south east; do
        local ref_b64_d
        if [ "$dir_name" = "south" ]; then ref_b64_d="$south_b64"; else ref_b64_d="$east_b64"; fi

        log "  Drinking ($dir_name)..."
        local drink_payload
        drink_payload=$(python3 -c "
import json
print(json.dumps({
    'image_size': {'width': $image_size, 'height': $image_size},
    'description': '$description',
    'action': 'drinking from ground, head lowered to drink water',
    'reference_image': {'base64': '$ref_b64_d'},
    'n_frames': 4,
    'direction': '$dir_name',
    'view': 'high top-down'
}))
")
        local drink_result
        drink_result=$(api_post "/v1/animate-with-text" "$drink_payload" "$api_key")
        mkdir -p "$pdir/drinking/$dir_name"
        echo "$drink_result" | python3 -c "
import json, sys, base64
data = json.load(sys.stdin)
for i, img in enumerate(data.get('images', [])):
    with open(f'$pdir/drinking/$dir_name/frame_{i:03d}.png', 'wb') as f:
        f.write(base64.b64decode(img['base64']))
print(f'Saved {len(data.get(\"images\",[]))} drinking frames')
"
    done

    # --- Picking up (v1, 4 frames) — south and east ---
    for dir_name in south east; do
        local ref_b64_p
        if [ "$dir_name" = "south" ]; then ref_b64_p="$south_b64"; else ref_b64_p="$east_b64"; fi

        log "  Picking up ($dir_name)..."
        local pickup_payload
        pickup_payload=$(python3 -c "
import json
print(json.dumps({
    'image_size': {'width': $image_size, 'height': $image_size},
    'description': '$description',
    'action': 'picking up object from ground, reaching down',
    'reference_image': {'base64': '$ref_b64_p'},
    'n_frames': 4,
    'direction': '$dir_name',
    'view': 'high top-down'
}))
")
        local pickup_result
        pickup_result=$(api_post "/v1/animate-with-text" "$pickup_payload" "$api_key")
        mkdir -p "$pdir/picking-up/$dir_name"
        echo "$pickup_result" | python3 -c "
import json, sys, base64
data = json.load(sys.stdin)
for i, img in enumerate(data.get('images', [])):
    with open(f'$pdir/picking-up/$dir_name/frame_{i:03d}.png', 'wb') as f:
        f.write(base64.b64decode(img['base64']))
print(f'Saved {len(data.get(\"images\",[]))} picking-up frames')
"
    done

    # Count files
    local count
    count=$(find "$pdir" -name "*.png" | wc -l | tr -d ' ')
    log "Phenotype $phenotype_id complete: $count PNG files"
}

# --- Main ---

usage() {
    echo "Usage: $0 <command> <config_file> [args]"
    echo ""
    echo "Commands:"
    echo "  base <config>              Generate base character (Step 1)"
    echo "  phenotype <config> <index> Generate one phenotype variant (Step 2)"
    echo "  animate <config> <index>   Add animations to a phenotype (Step 3)"
    echo "  all <config>               Run full pipeline interactively"
    echo ""
    echo "Config file: JSON with species definition (see SPRITE_GENERATION_PROCESS.md)"
}

if [ $# -lt 2 ]; then
    usage
    exit 1
fi

COMMAND="$1"
CONFIG="$2"

if [ ! -f "$CONFIG" ]; then
    err "Config file not found: $CONFIG"
    exit 1
fi

case "$COMMAND" in
    base)
        create_base_character "$CONFIG"
        ;;
    phenotype)
        if [ $# -lt 3 ]; then err "Usage: $0 phenotype <config> <index>"; exit 1; fi
        create_phenotype "$CONFIG" "$3"
        ;;
    animate)
        if [ $# -lt 3 ]; then err "Usage: $0 animate <config> <index>"; exit 1; fi
        add_animations "$CONFIG" "$3"
        ;;
    all)
        create_base_character "$CONFIG"
        n_phenotypes=$(python3 -c "import json; print(len(json.load(open('$CONFIG'))['phenotypes']))")
        for i in $(seq 0 $((n_phenotypes - 1))); do
            create_phenotype "$CONFIG" "$i"
        done
        for i in $(seq 0 $((n_phenotypes - 1))); do
            add_animations "$CONFIG" "$i"
        done
        log "=== All done! Verify all phenotypes visually. ==="
        ;;
    *)
        err "Unknown command: $COMMAND"
        usage
        exit 1
        ;;
esac
