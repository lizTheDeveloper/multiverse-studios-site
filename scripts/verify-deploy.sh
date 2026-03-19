#!/usr/bin/env bash
# Verify that multiversestudios.xyz is serving expected pages after a deploy.
# Usage: ./scripts/verify-deploy.sh [base_url]

set -euo pipefail

BASE_URL="${1:-https://multiversestudios.xyz}"
PAGES=("/" "/mvee.html" "/about.html" "/press.html" "/community.html" "/precursors.html")
FAILED=0

echo "Verifying deployment at $BASE_URL ..."
echo

for PAGE in "${PAGES[@]}"; do
  URL="${BASE_URL}${PAGE}"
  STATUS=$(curl -s -o /dev/null -w '%{http_code}' --max-time 30 "$URL")
  if [ "$STATUS" -eq 200 ]; then
    printf "  OK   %s (%s)\n" "$URL" "$STATUS"
  else
    printf "  FAIL %s (%s)\n" "$URL" "$STATUS"
    FAILED=1
  fi
done

echo
if [ "$FAILED" -eq 1 ]; then
  echo "DEPLOYMENT VERIFICATION FAILED"
  exit 1
else
  echo "All pages verified."
fi
