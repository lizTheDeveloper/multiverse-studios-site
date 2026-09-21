# Deploy

Two ways to ship `multiversestudios.xyz`. Both build the same way and both
verify the same way: after deploy, the live site's `/deployed-sha.txt` must
equal the commit that was deployed. A `200` on `/` is not sufficient — that
weaker check shipped to a decommissioned box for weeks without anyone
noticing (2026-08-02) before this was fixed.

## 1. GitHub Actions (`.github/workflows/deploy.yml`) — normal route

Push to `main` and it deploys automatically:

1. `node scripts/gen-versions.mjs .` — bakes same-origin `versions.json`.
2. `node scripts/hash-assets.mjs .` — content-hashes first-party `.js`/`.css`
   refs for cache-busting. Fail-closed: throws and aborts the deploy on an
   unexpected error.
3. `rsync --delete` (excluding `.git`, `node_modules`, `.wrangler`, `scripts`)
   to `/opt/marketing-site/html/` on the box.
4. Stamps `deployed-sha.txt` into `html/` — **before** the Docker build,
   because the Dockerfile does `COPY html/` and anything written after the
   build never reaches the served image.
5. `docker compose build && docker compose up -d`.
6. Health check: curls the *public* `https://multiversestudios.xyz/` for
   `200`, then curls `/deployed-sha.txt` and fails the whole run unless it
   equals `github.sha` exactly.

This is still the normal way to deploy. Use it whenever Actions is available.

## 2. On-box deploy — `scripts/box-deploy.sh`

For when Actions is unavailable, or a human needs to ship or roll back
directly from `multiverse-games-hel1` (root@157.180.120.104, ssh alias
`games`). Run it **on the box**, as root:

```bash
/opt/marketing-site-deploy/repo/scripts/box-deploy.sh          # deploys main
/opt/marketing-site-deploy/repo/scripts/box-deploy.sh main      # same, explicit
/opt/marketing-site-deploy/repo/scripts/box-deploy.sh <sha>      # deploy/roll back to a specific commit
```

It does the same steps as CI, in the same order, with the same fail-closed
verification:

1. Deploys **from git**, never from a laptop working tree. Clones
   `https://github.com/lizTheDeveloper/multiverse-studios-site.git` (public,
   no credentials needed) into `/opt/marketing-site-deploy/repo` on first
   run, then `fetch` + hard-reset on subsequent runs. Resolves the given ref
   to an exact commit SHA and prints it.
   The checkout and the `html/` backups (see step 3) live in
   `/opt/marketing-site-deploy`, a **sibling** of `/opt/marketing-site`, on
   purpose: `/opt/marketing-site` has no `.dockerignore`, and it's the literal
   `docker compose build` context (`build: .`), so anything placed inside it
   gets tarred up and sent to the Docker daemon on every build. The
   checkout's `.git` alone is ~800MB; putting it or the growing backups
   inside the build context would make every build slower over time. Only
   `html/` — which the Dockerfile already `COPY`s — is written inside
   `/opt/marketing-site`.
2. Runs `gen-versions.mjs` and `hash-assets.mjs` exactly as CI does — but
   **there is no node on this box** (verified: `node` is not found), so each
   step runs inside a throwaway `node:20-alpine` container with the checkout
   bind-mounted (`docker run --rm -v $CHECKOUT:/site -w /site node:20-alpine
   node scripts/...`), matching CI's `actions/setup-node` node-version 20.
   The container is discarded after each step; nothing is installed on the
   host.
3. Backs up the current `/opt/marketing-site/html/` to
   `/opt/marketing-site-deploy/backups/html-<UTC timestamp>-<short sha>/`
   before touching it. Keeps the 5 most recent backups (`KEEP_BACKUPS` env
   var to change), prunes older ones.
4. Rsyncs the built tree into `html/` (same exclude list as CI), then stamps
   `deployed-sha.txt` — before the Docker build, same reason as CI.
5. Tags whatever image is currently running as
   `marketing-site-rollback:last-good`, then `docker compose build && docker
   compose up -d`.
6. Verifies against the **public** URL: `200` on `/`, then
   `/deployed-sha.txt` must equal the commit just deployed.
7. **If verification fails**, it rolls back loudly and automatically:
   restores the pre-deploy `html/` backup, and brings the container back up
   from the tagged `marketing-site-rollback:last-good` image via a compose
   override (not a rebuild — the actual previous image, byte for byte). If no
   rollback image tag exists (e.g. very first deploy), it rebuilds from the
   restored `html/` instead and says so. Prints a loud banner either way and
   exits non-zero. **This deploy does not count as shipped if you see that
   banner** — the previous version is what's live.
8. Safe to run twice: every run starts from a hard-reset, git-clean
   checkout, and re-verifies regardless of whether anything changed.

`box-deploy.sh` supersedes the old `/opt/marketing-site/deploy.sh` (rebuild
current `html/` in place, no git, no verification) and
`/opt/marketing-site/sync-and-deploy.sh` (rsync from whatever laptop you run
it on, no verification) — those two are unversioned, live only on the box,
and should be considered legacy. Prefer `box-deploy.sh` for anything on-box
going forward; the old scripts are left in place but shouldn't be reached for.

### One-time box setup

None beyond what's already there. `docker`, `docker compose`, `git`, `rsync`,
`curl`, `flock`, GNU `find`/coreutils, and bash 5.2 are all present on
multiverse-games-hel1 as of 2026-09-20. The repo is public, so no deploy key
or SSH-to-GitHub setup is needed for `box-deploy.sh` to clone it. The only
thing to do the first time is run the script once — it creates
`/opt/marketing-site-deploy/repo` and `/opt/marketing-site-deploy/backups`
itself.

### Manual rollback (if you need to do it by hand)

```bash
ls -1dt /opt/marketing-site-deploy/backups/html-* | head   # find the backup you want
rm -rf /opt/marketing-site/html
cp -a /opt/marketing-site-deploy/backups/html-<timestamp>-<sha> /opt/marketing-site/html
cd /opt/marketing-site && docker compose build && docker compose up -d
curl -s https://multiversestudios.xyz/deployed-sha.txt   # confirm
```

Or simpler: run `box-deploy.sh <old-sha>` — it's just a normal deploy of an
older commit, with the same backup-before-overwrite and verification.

## Container configuration capture — `scripts/box-config/`

`/opt/marketing-site/{Dockerfile,docker-compose.yml,nginx.conf}` on the box
were never in this repo. If that box were lost, they'd be gone with it.
`scripts/box-config/` holds a verbatim capture of all three, fetched
directly off the box on 2026-09-20 (not reconstructed from memory).

**The box is still authoritative, not this capture.** Editing the files in
`scripts/box-config/` does nothing to production — nothing currently reads
them at deploy time. They exist so the service is reproducible if the box is
lost, and so a human has something to diff against when checking for drift.
If you change the real config on the box, copy the change back into
`scripts/box-config/` by hand (`scp` or `ssh cat`) so the capture doesn't go
stale. Wiring `box-deploy.sh` to actually push these files to the box (so the
repo becomes authoritative) is a reasonable next step but is **not** done
here — this pass is capture-only, to avoid touching a working production
service.

`scripts/box-config/` is excluded from the site rsync the same way
`scripts/` is (both CI and `box-deploy.sh` exclude `scripts/`), so none of
this ends up served publicly.

## What this doesn't cover

- **DNS / Traefik.** `deploy.yml`'s comments call out that a wrong
  `HETZNER_HOST` secret can silently rsync to the wrong box — that's exactly
  what the SHA verification catches, but nothing here manages DNS or the
  Traefik routing in front of the container.
- **`multiversegames.ai`** (the mirrored `.ai` domain). Neither deploy path
  verifies it separately; only `multiversestudios.xyz` is checked.
- **Wiring `scripts/box-config/` back to the box.** See above — capture
  only, not applied.
- **Secrets rotation, backup retention beyond `html/`** (e.g. the Docker
  image layers, the git checkout itself) — only the served `html/` tree is
  backed up and rolled back automatically.
