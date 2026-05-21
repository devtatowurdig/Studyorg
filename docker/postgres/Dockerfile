# syntax=docker/dockerfile:1

# PostgreSQL service image with its healthcheck script baked in.
# The postgres:17-alpine image is Alpine-based and runs the database process
# under the postgres user after initialization.
FROM postgres:17-alpine

COPY healthcheck.sh /usr/local/bin/postgres-healthcheck

RUN chmod +x /usr/local/bin/postgres-healthcheck

HEALTHCHECK --interval=10s --timeout=5s --start-period=10s --retries=10 CMD pg_isready -U study_org -d study_org -h localhost
