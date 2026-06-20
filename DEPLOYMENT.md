# Deployment Guide

The marketing site at `multiversestudios.xyz` (also `multiversegames.ai`) automatically deploys on every push to `main` via GitHub Actions. Both domains are mirrored via Traefik; the `.ai` domain was added because some ISPs block `.xyz` via SNI inspection.

## How it works

1. On push to `main`, GitHub Actions triggers the `deploy.yml` workflow
2. The workflow rsync's the repo to the Hetzner server at `/opt/marketing-site/html/`
3. Docker container is rebuilt and restarted
4. Health check verifies the site is responding
5. Matrix notification confirms success or alerts on failure
6. `.last-deployed-sha` file is updated with commit SHA and timestamp

## Required GitHub Secrets

The following secrets must be configured in the GitHub repository settings:

| Secret Name | Description | How to get it |
|------------|-------------|---------------|
| `HETZNER_SSH_KEY` | Private SSH key for root@hetzner | Generate with `ssh-keygen -t ed25519 -C "github-actions"` and add public key to `/root/.ssh/authorized_keys` on server |
| `HETZNER_HOST` | Server hostname or IP | Ask DevOps team (should be the main Hetzner server IP) |
| `MATRIX_WEBHOOK_URL` | Matrix webhook for notifications | Create a webhook in Matrix for the #deployments channel |

### Setting up SSH key

On your local machine:
```bash
ssh-keygen -t ed25519 -C "github-actions-marketing-site" -f github-actions-key
```

Copy the public key to the server:
```bash
ssh-copy-id -i github-actions-key.pub root@<HETZNER_HOST>
```

Add the **private key** (`github-actions-key`, not the `.pub` file) to GitHub Secrets as `HETZNER_SSH_KEY`.

### Setting up Matrix webhook

1. In the #deployments Matrix channel, create a new webhook
2. Copy the webhook URL
3. Add it to GitHub Secrets as `MATRIX_WEBHOOK_URL`

## Manual deployment

If you need to deploy manually:

```bash
# Rsync files
rsync -avz --delete \
  --exclude='.git' \
  --exclude='node_modules' \
  --exclude='.wrangler' \
  ./ root@<HETZNER_HOST>:/opt/marketing-site/html/

# Rebuild container
ssh root@<HETZNER_HOST> 'cd /opt/marketing-site && docker compose build && docker compose up -d'
```

## Troubleshooting

### Deploy succeeds but site shows old content

Check if the Docker container actually restarted:
```bash
ssh root@<HETZNER_HOST> 'docker ps | grep marketing-site'
```

### Health check fails

The workflow checks for HTTP 200 at `https://multiversestudios.xyz/` (also accessible at `https://multiversegames.ai/`). If the site is temporarily down during restart, increase the `sleep` duration in the workflow.

### SSH connection fails

Verify the SSH key is correctly configured:
```bash
ssh -i ~/.ssh/github-actions-key root@<HETZNER_HOST>
```
