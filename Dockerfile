# Install dependencies only when needed
FROM node:16-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

ARG BASE_PATH
ARG NEXT_PUBLIC_BASE_PATH
ARG NEXT_PUBLIC_TEST_ENVIRONMENT
ARG NEXT_PUBLIC_API_URL
ARG NEXT_PUBLIC_AZURE_TENANT_ID_USS
ARG NEXT_PUBLIC_AZURE_CLIENT_ID_USS

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN yarn install --frozen-lockfile --network-timeout 1000000

# Rebuild the source code only when needed
FROM node:16-alpine AS builder
WORKDIR /app

ARG BASE_PATH
ARG NEXT_PUBLIC_BASE_PATH
ARG NEXT_PUBLIC_TEST_ENVIRONMENT
ARG NEXT_PUBLIC_API_URL
ARG NEXT_PUBLIC_AZURE_TENANT_ID_USS
ARG NEXT_PUBLIC_AZURE_CLIENT_ID_USS

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
ENV NEXT_TELEMETRY_DISABLED 1

RUN yarn build

# If using npm comment out above and use below instead
# RUN npm run build

# Production image, copy all the files and run next
FROM node:16-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ARG BASE_PATH
ARG NEXT_PUBLIC_BASE_PATH
ARG NEXT_PUBLIC_TEST_ENVIRONMENT
ARG NEXT_PUBLIC_API_URL
ARG NEXT_PUBLIC_AZURE_TENANT_ID_USS
ARG NEXT_PUBLIC_AZURE_CLIENT_ID_USS

# Uncomment the following line in case you want to disable telemetry during runtime.
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
