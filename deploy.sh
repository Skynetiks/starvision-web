#!/bin/bash

# StarVision Web Application Deployment Script for EC2
# This script sets up and deploys the application on EC2

set -e  # Exit on any error

echo "🚀 Starting StarVision deployment..."

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

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    print_error "Docker is not installed. Please install Docker first."
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    print_error "Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    print_warning ".env file not found. Creating from template..."
    cat > .env << EOF
# Database Configuration
POSTGRES_DB=starvision
POSTGRES_USER=starvision_user
POSTGRES_PASSWORD=your-secure-password-here

# Payload CMS Configuration
PAYLOAD_SECRET=your-super-secret-payload-key-change-this-in-production

# Application Configuration
NEXT_PUBLIC_SERVER_URL=http://your-ec2-public-ip:3000

# Optional: Add your domain if you have one
# NEXT_PUBLIC_SERVER_URL=https://yourdomain.com
EOF
    print_warning "Please edit .env file with your actual values before continuing."
    exit 1
fi

# Load environment variables
print_status "Loading environment variables..."
source .env

# Validate required environment variables
if [ -z "$POSTGRES_PASSWORD" ] || [ "$POSTGRES_PASSWORD" = "your-secure-password-here" ]; then
    print_error "Please set a secure POSTGRES_PASSWORD in .env file"
    exit 1
fi

if [ -z "$PAYLOAD_SECRET" ] || [ "$PAYLOAD_SECRET" = "your-super-secret-payload-key-change-this-in-production" ]; then
    print_error "Please set a secure PAYLOAD_SECRET in .env file"
    exit 1
fi

# Stop and remove existing containers
print_status "Stopping existing containers..."
docker-compose -f docker-compose.prod.yml down --remove-orphans || true

# Build the Docker image
print_status "Building Docker image..."
docker build -t starvision-app:latest .

# Start the services
print_status "Starting services..."
docker-compose -f docker-compose.prod.yml up -d

# Wait for services to be healthy
print_status "Waiting for services to be healthy..."
sleep 30

# Check if services are running
print_status "Checking service status..."
if docker-compose -f docker-compose.prod.yml ps | grep -q "Up"; then
    print_status "✅ Services are running successfully!"

    # Get the public IP (if available)
    PUBLIC_IP=$(curl -s http://169.254.169.254/latest/meta-data/public-ipv4 2>/dev/null || echo "localhost")

    print_status "🌐 Application is accessible at:"
    echo "   Local: http://localhost:3000"
    echo "   Public: http://$PUBLIC_IP:3000"
    echo ""
    print_status "📊 Health check: http://$PUBLIC_IP:3000/api/health"
    echo ""
    print_status "🔧 To view logs: docker-compose -f docker-compose.prod.yml logs -f"
    print_status "🛑 To stop services: docker-compose -f docker-compose.prod.yml down"

else
    print_error "❌ Services failed to start properly"
    print_status "Checking logs..."
    docker-compose -f docker-compose.prod.yml logs
    exit 1
fi

print_status "🎉 Deployment completed successfully!"
