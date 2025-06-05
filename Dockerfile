#syntax=docker/dockerfile:1.13-labs
ARG NODE_VERSION=23
FROM node:${NODE_VERSION}-alpine AS node
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

FROM node AS builder
ENV NO_UPDATE_NOTIFIER=true
WORKDIR /build
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --no-audit --no-fund --include=dev

COPY --link \
     --exclude=node_modules \
     --exclude=dist \
     --exclude=docker-compose.yaml \
     --exclude=Dockerfile \
     --exclude=Caddyfile \
     --exclude=README.md \
  . .

RUN --mount=type=cache,target=/root/.npm \
    npm run build

FROM caddy:2-alpine
WORKDIR /app
ENV GRAPHQL_ENDPOINT=http://localhost:4000/graphql

COPY --link --from=builder /build/dist ./dist
COPY --link ./Caddyfile /etc/caddy/Caddyfile

EXPOSE 80
EXPOSE 2019
EXPOSE 2020

HEALTHCHECK --interval=30s --timeout=4s --start-period=1s \
   CMD ["wget", "-qO=-", "http://127.0.0.1:2020/health"]
