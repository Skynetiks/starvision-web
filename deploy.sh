#!/bin/bash
set -euo pipefail

# This script deploys the application to the specified environment.

# Set the environment variable to the desired environment.

RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=3
NODE_ENV=production
PAYLOAD_SECRET=$(openssl rand -base64 32)

# 🔑 Generate .env file if it doesn't exist
if [ ! -f ".env" ]; then
  echo "🔑 Generating .env file..."
  cat > .env <<EOF
RATE_LIMIT_WINDOW_MS=$RATE_LIMIT_WINDOW_MS
RATE_LIMIT_MAX_REQUESTS=$RATE_LIMIT_MAX_REQUESTS
NODE_ENV=$NODE_ENV
PAYLOAD_SECRET=$PAYLOAD_SECRET
NEXT_PUBLIC_CAL_LINK=change_me
POSTGRES_DB=change_me
POSTGRES_USER=change_me
POSTGRES_PASSWORD="password"
EMAIL_USER=change_me
EMAIL_PASS=change_me
EOF

echo "✅ .env file created."
echo "ℹ️ Please update the .env file with your actual values."
exit 1
else
  echo "ℹ️ .env already exists. Skipping..."
  source ".env"

  if [ "$POSTGRES_DB" == "change_me" ] || [ "$POSTGRES_USER" == "change_me" ]; then
    echo "❗ Please update the .env file with your actual database values."
    exit 1
  fi

fi
# 🛠 Script Variables
SWAP_SIZE="1G"  # 1 GB swap

echo "🔄 Updating system packages..."
sudo apt update && sudo apt upgrade -y

# ➕ Add Swap if not already present
if ! swapon --show | grep -q '/swapfile'; then
  echo "📦 Adding $SWAP_SIZE swap space..."
  sudo fallocate -l "$SWAP_SIZE" /swapfile
  sudo chmod 600 /swapfile
  sudo mkswap /swapfile
  sudo swapon /swapfile
  echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
else
  echo "✅ Swap already exists. Skipping..."
fi

# ================================== Adding Docker Repository ==================================


if ! command -v docker &> /dev/null; then
    echo "Docker is not installed. Install Docker first."
else
  echo "✅ Docker is already installed."
fi

# ====================================== EO =================================================


# 🌐 Install Node.js and npm if missing
if ! command -v npm &> /dev/null; then
  echo "📦 Installing Node.js 20 and npm..."
  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
  sudo apt install -y nodejs
else
  echo "✅ npm is already installed."
fi

# trying to pull the latest changes from the git repository.
if [ -d ".git" ]; then
    echo "Current directory is a git repository. Pulling latest changes..."
    git pull origin main
    exit 0
else
    echo "Current directory is not a git repository. Please cd into the app directory and run the script again."
    exit 1
fi

# 📦 Install dependencies
echo "📦 Installing dependencies..."
npm install


# 🐘 Run PostgreSQL via docker-compose
echo "🚀 Starting PostgreSQL with docker-compose.postgres.prod.yml..."


sudo docker-compose -f docker-compose.postgres.prod.yml up -d --remove-orphans

sleep 5

# 🔍 Verify DB container is running
if ! sudo docker-compose -f docker-compose.postgres.prod.yml ps | grep -q "Up"; then
  echo "❌ PostgreSQL container failed to start. Check logs:"
  sudo docker-compose -f docker-compose.postgres.prod.yml logs db
  exit 1
fi

echo "✅ PostgreSQL is up and running."


# Migrations
echo "🚀 Running database migrations..."
migrate(){
    local DATABASE_URI="postgresql://$POSTGRES_USER:$POSTGRES_PASSWORD@localhost:5432/$POSTGRES_DB"
    npm run generate:types
    npm run generate:importmap
    npx payload migrate:create
    npx payload migrate:fresh
}


migrate

# 🐳 Build and run the application

echo "🚀 Building and running the application..."
docker-compose -f docker-compose.prod.yml up -d --build --remove-orphans
sleep 10


# 🔍 Verify app container is running
if ! sudo docker-compose -f docker-compose.prod.yml ps | grep -q "Up"; then
  echo "❌ Application container failed to start. Check logs:"
  sudo docker-compose -f docker-compose.prod.yml logs app
  exit 1
fi

# Giving Specific permissions for the media
echo "🔧 Setting permissions for media_data directory..."
sudo chown -R 1001:1001 "media_data"

echo "✅ Application is up and running."
