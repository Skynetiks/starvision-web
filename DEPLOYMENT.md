# StarVision Web Application - EC2 Deployment Guide

This guide will help you deploy the StarVision web application on AWS EC2 using Docker and PostgreSQL.

## Prerequisites

- AWS EC2 instance (recommended: t3.medium or larger)
- Ubuntu 20.04 LTS or later
- SSH access to your EC2 instance
- Domain name (optional, for production)

## Step 1: EC2 Instance Setup

### 1.1 Launch EC2 Instance

1. Go to AWS Console → EC2 → Launch Instance
2. Choose Ubuntu Server 20.04 LTS
3. Select instance type: t3.medium (minimum)
4. Configure Security Group:
   - SSH (Port 22) - Your IP
   - HTTP (Port 80) - 0.0.0.0/0
   - HTTPS (Port 443) - 0.0.0.0/0 (if using SSL)
   - Custom TCP (Port 3000) - 0.0.0.0/0 (for direct app access)

### 1.2 Connect to EC2 Instance

```bash
ssh -i your-key.pem ubuntu@your-ec2-public-ip
```

## Step 2: Install Docker and Docker Compose

### 2.1 Update System

```bash
sudo apt update && sudo apt upgrade -y
```

### 2.2 Install Docker

```bash
# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Add user to docker group
sudo usermod -aG docker $USER

# Start Docker service
sudo systemctl start docker
sudo systemctl enable docker

# Logout and login again, or run:
newgrp docker
```

### 2.3 Install Docker Compose

```bash
# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Verify installation
docker-compose --version
```

## Step 3: Deploy Application

### 3.1 Clone Repository

```bash
# Clone your repository
git clone <your-repository-url>
cd starvision-web

# Or upload files via SCP
scp -i your-key.pem -r ./starvision-web ubuntu@your-ec2-public-ip:~/
```

### 3.2 Configure Environment Variables

```bash
# Create .env file
cp .env.example .env  # if you have an example file
# Or create manually:
nano .env
```

Add the following content to `.env`:

```env
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
```

### 3.3 Run Deployment Script

```bash
# Make script executable
chmod +x deploy.sh

# Run deployment
./deploy.sh
```

## Step 4: Verify Deployment

### 4.1 Check Application Status

```bash
# Check if containers are running
docker-compose -f docker-compose.prod.yml ps

# Check logs
docker-compose -f docker-compose.prod.yml logs -f

# Health check
curl http://localhost:3000/api/health
```

### 4.2 Access Application

- Local: http://localhost:3000
- Public: http://your-ec2-public-ip:3000
- Admin Panel: http://your-ec2-public-ip:3000/admin

## Step 5: Production Considerations

### 5.1 Set Up Reverse Proxy (Nginx)

For production, it's recommended to use Nginx as a reverse proxy:

```bash
# Install Nginx
sudo apt install nginx -y

# Create Nginx configuration
sudo nano /etc/nginx/sites-available/starvision
```

Add the following configuration:

```nginx
server {
    listen 80;
    server_name your-domain.com;  # Replace with your domain

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the site:

```bash
sudo ln -s /etc/nginx/sites-available/starvision /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 5.2 Set Up SSL Certificate (Let's Encrypt)

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Get SSL certificate
sudo certbot --nginx -d your-domain.com

# Auto-renewal
sudo crontab -e
# Add: 0 12 * * * /usr/bin/certbot renew --quiet
```

### 5.3 Database Backup

Set up automated database backups:

```bash
# Create backup script
nano backup-db.sh
```

```bash
#!/bin/bash
BACKUP_DIR="/home/ubuntu/backups"
DATE=$(date +%Y%m%d_%H%M%S)
CONTAINER_NAME="starvision-postgres-prod"

mkdir -p $BACKUP_DIR

docker exec $CONTAINER_NAME pg_dump -U starvision_user starvision > $BACKUP_DIR/backup_$DATE.sql

# Keep only last 7 days of backups
find $BACKUP_DIR -name "backup_*.sql" -mtime +7 -delete
```

Make it executable and add to crontab:

```bash
chmod +x backup-db.sh
crontab -e
# Add: 0 2 * * * /home/ubuntu/backup-db.sh
```

## Step 6: Monitoring and Maintenance

### 6.1 View Logs

```bash
# Application logs
docker-compose -f docker-compose.prod.yml logs -f app

# Database logs
docker-compose -f docker-compose.prod.yml logs -f postgres

# Nginx logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

### 6.2 Update Application

```bash
# Pull latest changes
git pull origin main

# Rebuild and restart
docker-compose -f docker-compose.prod.yml down
docker build -t starvision-app:latest .
docker-compose -f docker-compose.prod.yml up -d
```

### 6.3 Scale Application

To scale the application horizontally:

```bash
# Scale app service
docker-compose -f docker-compose.prod.yml up -d --scale app=3
```

## Troubleshooting

### Common Issues

1. **Port 3000 not accessible**

   - Check security group settings
   - Verify container is running: `docker ps`

2. **Database connection issues**

   - Check DATABASE_URI in .env
   - Verify PostgreSQL container is healthy: `docker-compose -f docker-compose.prod.yml ps`

3. **Application not starting**

   - Check logs: `docker-compose -f docker-compose.prod.yml logs app`
   - Verify environment variables are set correctly

4. **Memory issues**
   - Monitor memory usage: `docker stats`
   - Consider upgrading EC2 instance type

### Useful Commands

```bash
# Restart services
docker-compose -f docker-compose.prod.yml restart

# Stop all services
docker-compose -f docker-compose.prod.yml down

# Remove all containers and volumes
docker-compose -f docker-compose.prod.yml down -v

# View resource usage
docker stats

# Access PostgreSQL directly
docker exec -it starvision-postgres-prod psql -U starvision_user -d starvision
```

## Security Best Practices

1. **Change default passwords** in `.env` file
2. **Use strong PAYLOAD_SECRET**
3. **Restrict security group access** to specific IPs
4. **Enable AWS CloudWatch** for monitoring
5. **Set up automated backups**
6. **Use HTTPS** in production
7. **Regular security updates**

## Support

For issues or questions:

1. Check the logs first
2. Verify environment variables
3. Ensure all prerequisites are met
4. Check AWS EC2 instance status

---

**Note**: This deployment guide assumes a basic setup. For production environments, consider additional security measures, monitoring, and backup strategies.
