#!/usr/bin/env bash
# box-deploy.sh — on-box deploy for the marketing site, run directly on
# multiverse-games-hel1 (root@157.180.120.104, ssh alias "games").
#
# This exists because the normal deploy path is GitHub Actions
# (.github/workflows/deploy.yml), and there was previously NO way to ship or
# roll back from the box itself if Actions was unavailable, or a human needed
# to act fast. This script does the same steps as CI, in the same order, with
# the same fail-closed verification — run FROM THE BOX, deploying FROM GIT
# (never from someone's laptop working tree).
#
# Usage (on the box, as root):
#   /opt/marketing-site-deploy/repo/scripts/box-deploy.sh [ref]
#
#   ref  - branch, tag, or commit SHA to deploy. Defaults to "main".
#          To roll back to an older commit, pass its SHA:
#            box-deploy.sh a8d4a73d0d3...
#
# The git checkout and html/ backups live in /opt/marketing-site-deploy,
# a SIBLING of /opt/marketing-site — deliberately NOT inside it. There is
# no .dockerignore on the box today, so /opt/marketing-site is the literal
# `docker compose build` context (`build: .` in docker-compose.yml); anything
# placed inside it gets tarred up and sent to the Docker daemon on every
# build. The checkout's .git alone is ~800MB and the backups only grow, so
# both live outside /opt/marketing-site to keep builds fast and avoid
# surprising the existing build. Only html/ (which the Dockerfile already
# COPYs) is written inside /opt/marketing-site.
#
# One-time box setup: none beyond what's already on the box (docker,
# docker compose, git, rsync, curl — all verified present on 2026-09-20).
# The repo is PUBLIC, so this clones over https with no credentials.
# There is no node on the box (verified: `node` not found) — the two build
# steps (gen-versions.mjs, hash-assets.mjs) run inside a throwaway
# `node:20-alpine` container with the checkout bind-mounted, matching CI's
# `actions/setup-node` node-version 20. Nothing is installed on the host.
#
# Safe to run twice: each run starts from a hard-reset, git-clean checkout,
# takes a fresh timestamped backup of the current live html/ before touching
# it, and re-verifies against the public URL regardless of whether anything
# actually changed.
set -euo pipefail

# ---- config -----------------------------------------------------------
REPO_URL="${REPO_URL:-https://github.com/lizTheDeveloper/multiverse-studios-site.git}"
REF="${1:-main}"

WORKDIR="/opt/marketing-site"           # docker compose build context — keep it lean
STATE_DIR="/opt/marketing-site-deploy"  # everything box-deploy.sh owns lives here instead
CHECKOUT_DIR="$STATE_DIR/repo"
BACKUP_DIR="$STATE_DIR/backups"
KEEP_BACKUPS="${KEEP_BACKUPS:-5}"
PUBLIC_URL="${PUBLIC_URL:-https://multiversestudios.xyz}"
ROLLBACK_IMAGE="marketing-site-rollback:last-good"
LOCK_FILE="$STATE_DIR/.box-deploy.lock"
BUILD_IMAGE="node:20-alpine"

log()  { echo "[box-deploy] $*"; }
loud() { echo; echo "############################################################"; echo "# $*"; echo "############################################################"; echo; }

# ---- lock (don't let two deploys run at once) --------------------------
exec 200>"$LOCK_FILE"
if ! flock -n 200; then
  echo "[box-deploy] another deploy is already running (lock: $LOCK_FILE)" >&2
  exit 1
fi

# ---- 1. deploy FROM GIT, never from a working tree ----------------------
mkdir -p "$WORKDIR" "$STATE_DIR" "$BACKUP_DIR"

if [ -d "$CHECKOUT_DIR/.git" ]; then
  log "updating existing checkout at $CHECKOUT_DIR"
  git -C "$CHECKOUT_DIR" remote set-url origin "$REPO_URL"
  git -C "$CHECKOUT_DIR" fetch origin --tags --prune
else
  log "cloning $REPO_URL into $CHECKOUT_DIR"
  rm -rf "$CHECKOUT_DIR"
  git clone "$REPO_URL" "$CHECKOUT_DIR"
  git -C "$CHECKOUT_DIR" fetch origin --tags --prune
fi

# Resolve ref -> exact commit SHA. Try it as a branch on origin first,
# then fall back to treating it as a tag or a raw commit SHA.
if SHA=$(git -C "$CHECKOUT_DIR" rev-parse --verify -q "origin/$REF"); then
  :
elif SHA=$(git -C "$CHECKOUT_DIR" rev-parse --verify -q "$REF^{commit}"); then
  :
else
  echo "[box-deploy] could not resolve ref '$REF' to a commit" >&2
  exit 1
fi

log "deploying commit $SHA (ref: $REF)"

# Hard reset to a pristine tree, wiping any leftovers from a previous run
# (versions.json, hashed html, node_modules, .wrangler — all untracked or
# gitignored, all removed by -fdx) before regenerating them.
git -C "$CHECKOUT_DIR" checkout --force --detach "$SHA"
git -C "$CHECKOUT_DIR" reset --hard "$SHA"
git -C "$CHECKOUT_DIR" clean -fdx

# ---- 2. run the SAME build steps as CI, no node on the box --------------
# CI uses actions/setup-node@v4 with node-version 20; we match that exactly
# with node:20-alpine, run once per script, container discarded after each.
log "gen-versions.mjs (in throwaway $BUILD_IMAGE container)"
docker run --rm -v "$CHECKOUT_DIR:/site" -w /site "$BUILD_IMAGE" \
  node scripts/gen-versions.mjs .

log "hash-assets.mjs (fail-closed; in throwaway $BUILD_IMAGE container)"
docker run --rm -v "$CHECKOUT_DIR:/site" -w /site "$BUILD_IMAGE" \
  node scripts/hash-assets.mjs .

# ---- 3. back up current live html/ before touching it -------------------
TIMESTAMP="$(date -u +%Y%m%dT%H%M%SZ)"
SHA_SHORT="${SHA:0:8}"
BACKUP_PATH="$BACKUP_DIR/html-${TIMESTAMP}-${SHA_SHORT}"

if [ -d "$WORKDIR/html" ]; then
  log "backing up current html/ -> $BACKUP_PATH"
  cp -a "$WORKDIR/html" "$BACKUP_PATH"
else
  log "no existing html/ to back up (first deploy on this box?)"
  BACKUP_PATH=""
fi

# Prune old backups, keep the most recent KEEP_BACKUPS (sorted by mtime,
# newest first; find+sort instead of `ls -t` so odd filenames stay safe).
mapfile -t OLD_BACKUPS < <(
  find "$BACKUP_DIR" -maxdepth 1 -name 'html-*' -printf '%T@ %p\n' 2>/dev/null \
    | sort -rn | cut -d' ' -f2- | tail -n +"$((KEEP_BACKUPS + 1))"
)
if [ "${#OLD_BACKUPS[@]}" -gt 0 ]; then
  log "pruning ${#OLD_BACKUPS[@]} old backup(s), keeping last $KEEP_BACKUPS"
  rm -rf "${OLD_BACKUPS[@]}"
fi

# Tag whatever image is currently serving, so we can restore the exact
# previous image (not just a rebuild) if this deploy fails verification.
PREV_IMAGE_ID="$(docker inspect -f '{{.Image}}' marketing-site 2>/dev/null || true)"
if [ -n "$PREV_IMAGE_ID" ]; then
  docker tag "$PREV_IMAGE_ID" "$ROLLBACK_IMAGE"
  log "tagged current running image as $ROLLBACK_IMAGE for rollback"
fi

# ---- 4. publish the built tree into html/ --------------------------------
# Same exclude list as the CI rsync step.
rsync -a --delete \
  --exclude='.git' \
  --exclude='node_modules' \
  --exclude='.wrangler' \
  --exclude='scripts' \
  "$CHECKOUT_DIR/" "$WORKDIR/html/"

# Must be written BEFORE the docker build: the Dockerfile does
# `COPY html/ ...`, so anything written to html/ after the build never
# reaches the served image. (Same ordering constraint as deploy.yml.)
echo "$SHA" > "$WORKDIR/html/deployed-sha.txt"

# ---- 5. rebuild and bring up the container -------------------------------
log "docker compose build && up -d"
( cd "$WORKDIR" && docker compose build && docker compose up -d )

# ---- 6. verify against the PUBLIC url — same fail-closed check as CI ----
rollback() {
  loud "DEPLOY VERIFICATION FAILED — rolling back to previous html/ and previous image"

  if [ -n "$BACKUP_PATH" ] && [ -d "$BACKUP_PATH" ]; then
    log "restoring html/ from $BACKUP_PATH"
    rm -rf "$WORKDIR/html"
    cp -a "$BACKUP_PATH" "$WORKDIR/html"
  else
    log "WARNING: no pre-deploy html/ backup available, cannot restore html/"
  fi

  if docker image inspect "$ROLLBACK_IMAGE" >/dev/null 2>&1; then
    log "restoring previous image ($ROLLBACK_IMAGE) via compose override"
    OVERRIDE_FILE="$(mktemp "$WORKDIR/.rollback-override-XXXXXX.yml")"
    cat > "$OVERRIDE_FILE" <<EOF
services:
  marketing-site:
    image: $ROLLBACK_IMAGE
    build: !reset null
EOF
    ( cd "$WORKDIR" && docker compose -f docker-compose.yml -f "$OVERRIDE_FILE" up -d --force-recreate )
    rm -f "$OVERRIDE_FILE"
  else
    log "WARNING: no previous image tag ($ROLLBACK_IMAGE) available — rebuilding from restored html/ instead"
    ( cd "$WORKDIR" && docker compose build && docker compose up -d --force-recreate )
  fi

  ROLLBACK_SHA="$(curl -s --max-time 20 "$PUBLIC_URL/deployed-sha.txt" | tr -d '[:space:]')"
  loud "Rollback complete. Live site now serves: ${ROLLBACK_SHA:-<unknown>}. THIS DEPLOY (${SHA}) DID NOT GO LIVE."
}

log "waiting for container to come up before verifying..."
sleep 5

RESPONSE="$(curl -s -o /dev/null -w '%{http_code}' --max-time 20 "$PUBLIC_URL/" || echo "000")"
if [ "$RESPONSE" != "200" ]; then
  echo "[box-deploy] health check failed: $PUBLIC_URL/ returned HTTP $RESPONSE" >&2
  rollback
  exit 1
fi

LIVE_SHA="$(curl -s --max-time 20 "$PUBLIC_URL/deployed-sha.txt" | tr -d '[:space:]')"
if [ "$LIVE_SHA" != "$SHA" ]; then
  echo "[box-deploy] DEPLOY VERIFICATION FAILED." >&2
  echo "  expected commit: $SHA" >&2
  echo "  live site serves: '${LIVE_SHA}'" >&2
  echo "  ($PUBLIC_URL is not necessarily this box — check DNS if this keeps happening)" >&2
  rollback
  exit 1
fi

log "Verified: $PUBLIC_URL is serving $SHA"
log "done."
