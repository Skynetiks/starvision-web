#!/bin/bash

set -e

echo "🚀 Starting build process with database..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    print_error "Docker is not running. Please start Docker first."
    exit 1
fi

# Check if Docker Compose is available
if ! command -v docker-compose &> /dev/null; then
    print_error "Docker Compose is not installed or not in PATH."
    exit 1
fi

# Load environment variables
if [ -f .env ]; then
    print_status "Loading environment variables from .env"
    export $(cat .env | grep -v '^#' | xargs)
else
    print_warning ".env file not found. Using default values."
fi

# Set default values if not provided
export POSTGRES_DB=${POSTGRES_DB:-starvision}
export POSTGRES_USER=${POSTGRES_USER:-starvision_user}
export POSTGRES_PASSWORD=${POSTGRES_PASSWORD:-starvision_password}
export DATABASE_URI=${DATABASE_URI:-postgresql://starvision_user:starvision_password@postgres:5432/starvision}

print_status "Database configuration:"
echo "  Database: $POSTGRES_DB"
echo "  User: $POSTGRES_USER"
echo "  Host: postgres:5432"

# Stop any existing containers
print_status "Stopping existing containers..."
docker-compose down --remove-orphans 2>/dev/null || true

# Start PostgreSQL
print_status "Starting PostgreSQL..."
docker-compose up -d postgres

# Wait for PostgreSQL to be ready
print_status "Waiting for PostgreSQL to be ready..."
timeout=60
counter=0

while [ $counter -lt $timeout ]; do
    if docker-compose exec -T postgres pg_isready -U "$POSTGRES_USER" -d "$POSTGRES_DB" > /dev/null 2>&1; then
        print_status "✅ PostgreSQL is ready!"
        break
    fi

    echo -n "⏳ Waiting... ($counter/$timeout seconds) "
    sleep 2
    counter=$((counter + 2))

    # Show progress dots
    for i in {1..3}; do
        echo -n "."
        sleep 0.5
    done
    echo ""
done

if [ $counter -eq $timeout ]; then
    print_error "❌ PostgreSQL failed to start within $timeout seconds"
    print_status "Checking PostgreSQL logs..."
    docker-compose logs postgres
    exit 1
fi

# Verify database connection
print_status "Verifying database connection..."
if docker-compose exec -T postgres psql -U "$POSTGRES_USER" -d "$POSTGRES_DB" -c "SELECT 1;" > /dev/null 2>&1; then
    print_status "✅ Database connection verified!"
else
    print_error "❌ Database connection failed"
    exit 1
fi

# Set environment variables for the build
export DATABASE_URI="postgresql://$POSTGRES_USER:$POSTGRES_PASSWORD@postgres:5432/$POSTGRES_DB"
export NODE_ENV=production

print_status "Environment variables set for build:"
echo "  DATABASE_URI: $DATABASE_URI"
echo "  NODE_ENV: $NODE_ENV"

# Run the build
print_status "🔨 Running Next.js build..."
if pnpm build; then
    print_status "✅ Build completed successfully!"
else
    print_error "❌ Build failed"
    exit 1
fi

print_status "🎉 Build process completed successfully!"
print_status "You can now start the application with: docker-compose up -d"
