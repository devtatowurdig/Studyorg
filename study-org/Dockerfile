FROM node:22-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# Build the Angular app for production
RUN npm run build

# Production stage - serve with a minimal Node.js server
FROM node:22-alpine AS runtime

WORKDIR /app

# Install a simple HTTP server
RUN npm install --global http-server

# Generate a runtime env file so the browser can pick up the API URL.
COPY docker-entrypoint.mjs /app/docker-entrypoint.mjs

# Copy built app from build stage
COPY --from=build /app/dist/study-org/browser .

EXPOSE 4200

HEALTHCHECK --interval=10s --timeout=5s --retries=5 \
  CMD wget --spider -q http://localhost:4200/ || exit 1

# Serve the app on port 4200
CMD ["sh", "-c", "node /app/docker-entrypoint.mjs && http-server -p 4200 -c-1"]
