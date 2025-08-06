
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

# Migrations
echo "🚀 Running database migrations..."
migrate(){
    local DATABASE_URI="postgresql://$POSTGRES_USER:$POSTGRES_PASSWORD@localhost:5432/$POSTGRES_DB"
    npm run generate:types
    npm run generate:importmap
    npx payload migrate:create
    npx payload migrate
}
migrate

#docker-compose down
echo "🛑 Stopping application..."
docker-compose -f docker-compose.prod.yml down

#docker-compose up -d --build --remove-orphans
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

echo "✅ Application is up and running."
