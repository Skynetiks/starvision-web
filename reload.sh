
#!/bin/bash
set -euo pipefail

source ".env"

if [ ! -f ".env" ]; then
  echo "❌ .env file not found. Please run the deploy script first."
  exit 1
fi

# 🔄 Pull latest changes from the git repository
git pull origin main

# 🔄 Install dependencies
echo "📦 Installing dependencies..."
npm install

# 🐘 Ensure PostgreSQL is running
echo "🚀 Ensuring PostgreSQL is running..."
sudo docker-compose -f docker-compose.postgres.prod.yml up -d

sleep 5

# 🔍 Verify DB container is running
if ! sudo docker-compose -f docker-compose.postgres.prod.yml ps | grep -q "Up"; then
  echo "❌ PostgreSQL container failed to start. Check logs:"
  sudo docker-compose -f docker-compose.postgres.prod.yml logs postgres
  exit 1
fi

echo "✅ PostgreSQL is up and running."

# Migrations
echo "🚀 Running database migrations..."
migrate(){
    local DATABASE_URI="postgresql://$POSTGRES_USER:$POSTGRES_PASSWORD@localhost:5432/$POSTGRES_DB"
    export DATABASE_URI
    npm run generate:types
    npm run generate:importmap
    npx payload migrate:create
    npx payload migrate
}
migrate

# 🐳 Stop existing app container and rebuild
echo "🛑 Stopping existing application container..."
sudo docker-compose -f docker-compose.prod.yml down

# 🐳 Build and run the application
echo "🚀 Building and running the application..."
sudo docker-compose -f docker-compose.prod.yml up -d --build
sleep 10

# 🔍 Verify app container is running
if ! sudo docker-compose -f docker-compose.prod.yml ps | grep -q "Up"; then
  echo "❌ Application container failed to start. Check logs:"
  sudo docker-compose -f docker-compose.prod.yml logs app
  exit 1
fi

echo "✅ Application is up and running."
