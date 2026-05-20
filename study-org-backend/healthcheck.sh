#!/bin/sh
# Simple healthcheck for the backend: request the root path and expect HTTP 200
PORT=${API_PORT:-3000}

# Allow passing a host (for testability)
HOST=${HEALTHCHECK_HOST:-127.0.0.1}

# Try up to a few times to allow for fast restarts
TRIES=3
SLEEP=1

count=0
while [ $count -lt $TRIES ]; do
  if curl -fsS "http://${HOST}:${PORT}/" >/dev/null 2>&1; then
    exit 0
  fi
  count=$((count + 1))
  sleep $SLEEP
done

exit 1
