#!/bin/bash

set -e

echo "🚀 Starting build process inside Docker..."

# Wait for PostgreSQL to be ready
echo "⏳ Waiting for PostgreSQL..."
/usr/local/bin/wait-for-postgres.sh

# Set environment variables
export DATABASE_URI="postgresql://${POSTGRES_USER:-starvision_user}:${POSTGRES_PASSWORD:-starvision_password}@${POSTGRES_HOST:-postgres}:${POSTGRES_PORT:-5432}/${POSTGRES_DB:-starvision}"
export NODE_ENV=production

echo "🔧 Environment variables:"
echo "  DATABASE_URI: $DATABASE_URI"
echo "  NODE_ENV: $NODE_ENV"

# Generate Payload types and import map
echo "📝 Generating Payload types and import map..."
pnpm run generate:types
pnpm run generate:importmap

# Build the application
echo "🔨 Running Next.js build..."
pnpm run build

echo "✅ Build completed successfully!"
