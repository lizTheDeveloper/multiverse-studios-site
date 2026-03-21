#!/usr/bin/env python3
"""Generate PixelLab sprites for all Multiverse Studios agents.

NOTE: Generation takes ~60s per sprite. Script queues requests with
3-minute delays to stay well within rate limits.

Usage: python3 generate_agent_sprites.py
Credits: ~1 credit per sprite. ~31 agents total.
"""

import json
import base64
import os
import time
import urllib.request
import urllib.error
import sys

API_KEY = os.environ.get("PIXELLAB_API_KEY", "")
if not API_KEY:
    print("Error: PIXELLAB_API_KEY environment variable is required", file=sys.stderr)
    sys.exit(1)
BASE_URL = "https://api.pixellab.ai/v1"
OUT_DIR  = os.path.join(os.path.dirname(os.path.abspath(__file__)), "sprites")
DELAY_BETWEEN = 180  # 3 minutes between requests
SPRITE_SIZE   = 64   # 64x64 sprites

os.makedirs(OUT_DIR, exist_ok=True)

# ── Agent sprite descriptions ─────────────────────────────────────────────────
# Each entry: url_key -> (description, seed)
# Descriptions are crafted to produce unique, recognizable pixel art characters
# that match each agent's role and personality.

AGENTS = [
    # ── C-Suite ────────────────────────────────────────────────────────────────
    ("puck-ceo", (
        "pixel art character, fae king CEO, charismatic leader in a flowing purple royal coat "
        "with gold trim, wearing a small mischievous silver crown, pale skin, green glowing eyes, "
        "slight smirk, one hand raised in a commanding gesture, fantasy RPG style, "
        "front-facing south view, standing pose, transparent background",
        42
    )),
    ("peggy-cmo", (
        "pixel art character, stylish CMO woman in a hot pink power suit with black lapels, "
        "short dark wavy hair, red lipstick, holding a golden megaphone, confident stance, "
        "retro 80s executive vibe, front-facing south view, standing pose, transparent background",
        77
    )),

    # ── DevOps ─────────────────────────────────────────────────────────────────
    ("gilfoyle-devops", (
        "pixel art character, gothic IT devops engineer, pale skin, dark scruffy hair, "
        "all-black hoodie with a tiny skull pin on the chest, hollow cynical eyes, "
        "arms crossed, server rack glow behind, IT Crowd inspired, "
        "front-facing south view, standing pose, transparent background",
        666
    )),

    # ── Game Direction ─────────────────────────────────────────────────────────
    ("ripley-game-director", (
        "pixel art character, game director woman named Ripley, no-nonsense military-inspired "
        "olive green jacket with a 'DIRECTOR' badge, brown hair in a bun, headset on, "
        "holding a clipboard with a roadmap, authoritative stance, "
        "front-facing south view, standing pose, transparent background",
        314
    )),

    # ── Design ────────────────────────────────────────────────────────────────
    ("scheherazade-folklorist", (
        "pixel art character, mystical storyteller woman named Scheherazade, "
        "flowing teal and gold layered robes, ornate headdress with a crescent moon, "
        "holding an ancient glowing scroll, wise warm expression, magical sparkles, "
        "front-facing south view, standing pose, transparent background",
        1001
    )),
    ("hard-sci-fi-consultant", (
        "pixel art character, distinguished hard sci-fi academic consultant, "
        "tweed jacket with elbow patches, round wire-frame glasses, greying hair, "
        "holds a notebook with physics equations, intense focused expression, "
        "front-facing south view, standing pose, transparent background",
        2001
    )),
    ("ui-designer", (
        "pixel art character, UI designer, paint-splattered apron over colorful clothes, "
        "stylus pen behind ear, holding a design tablet, cheerful creative expression, "
        "pastel color accents, front-facing south view, standing pose, transparent background",
        801
    )),
    ("level-designer", (
        "pixel art character, level designer wearing headphones around neck, "
        "purple graphic tee with a grid pattern, holding an isometric blueprint, "
        "focused expression, front-facing south view, standing pose, transparent background",
        802
    )),
    ("pixel-artist", (
        "pixel art character, small floating sentient artist paint palette creature named Palette, "
        "kidney-bean shaped birchwood body with eight vivid paint swatches around the edge "
        "in full spectrum rainbow, oversized jeweler monocle as a single eye, "
        "two small brush arms holding a chunky round brush and a fine detail brush, "
        "floating above the ground, trailing tiny paint motes, magical whimsical vibe, "
        "front-facing south view, standing pose, transparent background",
        803
    )),

    # ── Engineering ───────────────────────────────────────────────────────────
    ("huxley-geneticist", (
        "pixel art character, geneticist researcher named Huxley, white lab coat, "
        "round glasses, messy brown hair, holding a glowing DNA double-helix model, "
        "excited wonder expression, teal accents, "
        "front-facing south view, standing pose, transparent background",
        99
    )),
    ("kali-persistence", (
        "pixel art character, backend persistence engineer woman named Kali, "
        "dark skin, powerful stance, purple and gold outfit with a lightning bolt badge, "
        "data stream motifs on sleeves, determined fierce expression, "
        "front-facing south view, standing pose, transparent background",
        108
    )),
    ("moss-game-systems", (
        "pixel art character, nerdy game systems engineer named Moss, "
        "curly black hair, large round glasses, colorful argyle sweater vest over button-up shirt, "
        "holding a glowing game controller, enthusiastic expression, IT Crowd inspired, "
        "front-facing south view, standing pose, transparent background",
        999
    )),
    ("roy-staff-swe", (
        "pixel art character, jaded senior software engineer named Roy, "
        "brown leather jacket over a band t-shirt, dark stubble, "
        "coffee mug in hand, world-weary but competent expression, IT Crowd inspired, "
        "front-facing south view, standing pose, transparent background",
        888
    )),
    ("cynthia-mvee-world-engineer", (
        "pixel art character, world-builder engineer woman named Cynthia, "
        "blue-tinted hair, flowing engineer coat with circuit board patterns, "
        "holding a glowing ethereal blueprint scroll, stars in eyes, visionary expression, "
        "front-facing south view, standing pose, transparent background",
        555
    )),
    ("sylvia-performance-critic", (
        "pixel art character, performance engineer woman named Sylvia, "
        "sharp professional blazer, stopwatch in one hand, clipboard with metrics graphs, "
        "stern precise expression, sleek glasses, "
        "front-facing south view, standing pose, transparent background",
        404
    )),
    ("community-systems-engineer", (
        "pixel art character, community systems engineer, friendly technical look, "
        "blue zip-up hoodie with a server icon patch, wireless headset mic, "
        "warm helpful smile, front-facing south view, standing pose, transparent background",
        303
    )),
    ("ast-founding-engineer", (
        "pixel art character, veteran founding engineer, battle-hardened senior dev, "
        "rumpled plaid flannel shirt, coffee-stained laptop sticker hoodie, "
        "impressive beard, tired but proud expression, "
        "front-facing south view, standing pose, transparent background",
        111
    )),
    ("mvee-tech-lead", (
        "pixel art character, MVEE tech lead engineer, smart casual blue blazer, "
        "leadership badge, pointing upward with an encouraging gesture, "
        "authoritative but approachable expression, "
        "front-facing south view, standing pose, transparent background",
        222
    )),
    ("renderer-developer", (
        "pixel art character, graphics renderer developer, VR headset pushed up on forehead, "
        "hoodie with a GPU chip graphic, shader code reflected in glasses, "
        "focused expression, front-facing south view, standing pose, transparent background",
        333
    )),
    ("llm-specialist", (
        "pixel art character, LLM specialist engineer, futuristic white lab coat, "
        "neural network pattern on shirt, glowing data streams flowing from hands, "
        "analytical focused expression, front-facing south view, standing pose, transparent background",
        444
    )),
    ("ml-engineer", (
        "pixel art character, ML engineer data scientist, casual blazer over "
        "a scatter-plot graph print shirt, tablet showing charts, "
        "thoughtful expression, front-facing south view, standing pose, transparent background",
        456
    )),
    ("security-engineer", (
        "pixel art character, security engineer, dark military-inspired outfit, "
        "shield badge on chest, fingerprint scanner on belt, "
        "vigilant intense expression, dark green accent colors, "
        "front-facing south view, standing pose, transparent background",
        7
    )),

    # ── PM Wing ───────────────────────────────────────────────────────────────
    ("mvee-pm", (
        "pixel art character, MVEE game product manager, smart business casual, "
        "teal shirt with a PM badge, holding a roadmap scroll, "
        "forward-looking optimistic expression, "
        "front-facing south view, standing pose, transparent background",
        701
    )),
    ("precursors-pm", (
        "pixel art character, Precursors game product manager, "
        "professional blazer holding a creature design spec sheet, "
        "teal and purple color scheme, organized efficient expression, "
        "front-facing south view, standing pose, transparent background",
        702
    )),
    ("research-pm", (
        "pixel art character, research PM, academic-meets-business style, "
        "navy blazer over a turtleneck, stack of research papers, "
        "thoughtful scholarly expression, "
        "front-facing south view, standing pose, transparent background",
        703
    )),

    # ── QA Lab ────────────────────────────────────────────────────────────────
    ("priya-qa-engineer", (
        "pixel art character, QA engineer woman named Priya, "
        "orange and black outfit with a QA badge, magnifying glass in one hand, "
        "checklist clipboard in the other, meticulous sharp expression, "
        "front-facing south view, standing pose, transparent background",
        901
    )),
    ("playtester", (
        "pixel art character, game playtester, casual gamer look, "
        "orange hoodie, gaming headset on head, game controller in one hand, "
        "bug report paper in the other, determined tester expression, "
        "front-facing south view, standing pose, transparent background",
        902
    )),
    ("ast-code-critic", (
        "pixel art character, code review critic, stern academic look, "
        "tweed blazer, reading glasses, red pen raised, thick book of code standards, "
        "judgmental but fair expression, "
        "front-facing south view, standing pose, transparent background",
        903
    )),
    ("marketing-qa", (
        "pixel art character, marketing QA analyst, sharp business casual, "
        "checklist and brand guidelines folder, critical but constructive expression, "
        "front-facing south view, standing pose, transparent background",
        904
    )),

    # ── Marketing & Community ─────────────────────────────────────────────────
    ("morgan-community-manager", (
        "pixel art character, community manager named Morgan, warm and approachable, "
        "bright casual outfit with a headset mic, coffee cup in hand, genuine smile, "
        "front-facing south view, standing pose, transparent background",
        1001
    )),
    ("content-marketer", (
        "pixel art character, content marketer, creative storyteller look, "
        "colorful casual outfit, notebook for ideas, microphone in hand, "
        "energetic enthusiastic expression, "
        "front-facing south view, standing pose, transparent background",
        1002
    )),

    # ── Finance ───────────────────────────────────────────────────────────────
    ("brad-the-suit", (
        "pixel art character, CFO penguin in a sharp black business suit, "
        "black and white tuxedo penguin with a tiny red tie, briefcase in one flipper, "
        "spreadsheet in the other, skeptical but professional expression, "
        "front-facing south view, standing pose, transparent background",
        777
    )),

    # ── Research & Analytics ──────────────────────────────────────────────────
    ("octavia-octalysis-analyst", (
        "pixel art character, octopus scholar analyst named Octavia, "
        "teal octopus wearing tiny graduation cap and round glasses, "
        "eight tentacles each holding a different glowing motivation icon, "
        "academic analytical expression, octalysis gamification framework vibes, "
        "front-facing south view, standing pose, transparent background",
        8008
    )),

    # ── Folkfork PM ───────────────────────────────────────────────────────────
    ("fern-folkfork-pm", (
        "pixel art character, forest spirit PM named Fern, "
        "small green plant fairy with fern fronds as flowing hair, "
        "earthy green and brown outfit with a clipboard holding a folkfork roadmap, "
        "nature meets product management vibes, gentle focused expression, "
        "front-facing south view, standing pose, transparent background",
        2024
    )),
]


def check_balance():
    """Check remaining PixelLab credits/balance."""
    req = urllib.request.Request(
        f"{BASE_URL}/balance",
        headers={"Authorization": f"Bearer {API_KEY}"},
    )
    with urllib.request.urlopen(req, timeout=15) as resp:
        return json.loads(resp.read())


def generate_sprite(url_key, description, seed, size=SPRITE_SIZE, max_wait=120):
    """Generate a single sprite via PixelLab PixFlux API.

    Returns True on success, False on failure.
    The API takes ~60s to respond — use max_wait=120 to be safe.
    """
    out_path = os.path.join(OUT_DIR, f"{url_key}.png")
    if os.path.exists(out_path):
        print(f"  ✓ {url_key}.png already exists — skipping")
        return True

    body = {
        "description": description,
        "image_size":  {"width": size, "height": size},
        "no_background": True,
        "outline":  "single color black outline",
        "shading":  "basic shading",
        "detail":   "highly detailed",
        "view":     "side",
        "direction":"south",
        "seed":     seed,
    }
    data = json.dumps(body).encode("utf-8")
    req  = urllib.request.Request(
        f"{BASE_URL}/generate-image-pixflux",
        data=data,
        headers={
            "Authorization":  f"Bearer {API_KEY}",
            "Content-Type":   "application/json",
        },
    )
    try:
        print(f"    Requesting... (may take ~60s)", flush=True)
        with urllib.request.urlopen(req, timeout=max_wait) as resp:
            result = json.loads(resp.read())
    except urllib.error.HTTPError as e:
        body_text = e.read().decode()
        print(f"  ERROR HTTP {e.code}: {body_text[:200]}")
        return False
    except Exception as e:
        print(f"  ERROR: {type(e).__name__}: {e}")
        return False

    if "image" not in result:
        print(f"  ERROR no image in response: {str(result)[:200]}")
        return False

    img_data = base64.b64decode(result["image"]["base64"])
    with open(out_path, "wb") as f:
        f.write(img_data)

    cost = result.get("usage", {})
    print(f"  ✓ Saved {url_key}.png ({len(img_data):,} bytes | usage: {cost})")
    return True


def main():
    print("=" * 60)
    print(f"PixelLab Agent Sprite Generator")
    print(f"  Output:    {OUT_DIR}")
    print(f"  Size:      {SPRITE_SIZE}x{SPRITE_SIZE}")
    print(f"  Agents:    {len(AGENTS)}")
    print(f"  Delay:     {DELAY_BETWEEN}s between requests")
    print("=" * 60)

    # Check balance
    try:
        bal = check_balance()
        print(f"  Balance: {bal}")
    except Exception as e:
        print(f"  Could not check balance: {e}")

    # Skip already-generated sprites
    todo = [(k, d) for k, d in AGENTS if not os.path.exists(os.path.join(OUT_DIR, f"{k}.png"))]
    done = len(AGENTS) - len(todo)
    print(f"  Already done: {done} | Remaining: {len(todo)}\n")

    if not todo:
        print("All sprites already generated!")
        return

    success = 0
    failed  = 0

    for i, (url_key, (description, seed)) in enumerate(todo):
        print(f"[{i+1}/{len(todo)}] → {url_key}")
        ok = generate_sprite(url_key, description, seed)
        if ok:
            success += 1
        else:
            failed += 1

        # Wait between requests (except after the last one)
        if i < len(todo) - 1:
            print(f"    Waiting {DELAY_BETWEEN}s before next request...", flush=True)
            for remaining in range(DELAY_BETWEEN, 0, -30):
                time.sleep(30)
                print(f"    ...{remaining-30}s remaining", flush=True)

    print(f"\n{'='*60}")
    print(f"Done: {success} sprites generated, {failed} failed")
    print(f"Sprites saved to: {OUT_DIR}/")


if __name__ == "__main__":
    main()
