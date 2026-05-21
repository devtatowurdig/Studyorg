#!/bin/sh
set -eu

# pg_isready is included in the official postgres image.
# POSTGRES_USER and POSTGRES_DB are injected by Docker Compose.
pg_isready -U "$POSTGRES_USER" -d "$POSTGRES_DB" -h localhost
