# 🚀 CSG Advisory - Deployment Guide

This guide explains how to deploy and update the CSG Advisory application using the provided scripts.

## 📋 Prerequisites

Before running any deployment scripts, ensure you have:

- **Ubuntu/Debian server** with sudo access
- **Git** installed and configured
- **Docker** and **Docker Compose** installed
- **Node.js 20** and **npm** installed
- **GitHub repository** access

## 🔧 Initial Deployment (First Time Setup)

Use `deploy.sh` for the first-time deployment of the application.

### What `deploy.sh` Does:

1. **🔑 Environment Setup**

   - Generates a `.env` file with default values
   - Creates a secure `PAYLOAD_SECRET` using OpenSSL
   - Sets up rate limiting and production environment variables

2. **🖥️ System Preparation**

   - Updates system packages
   - Adds 1GB swap space if not present
   - Verifies Docker installation
   - Installs Node.js 20 if missing

3. **📦 Application Setup**

   - Pulls latest code from Git repository
   - Installs npm dependencies
   - Starts PostgreSQL database using Docker
   - Runs database migrations and generates types

4. **🚀 Application Deployment**
   - Builds and starts the application container
   - Sets proper permissions for media files
   - Verifies all services are running

### Running Initial Deployment:

```bash
# Make the script executable
chmod +x deploy.sh

# Run the deployment
./deploy.sh
```

### ⚠️ Important Notes:

- The script will exit after creating the `.env` file - **you must update it with your actual values**
- Update the following variables in `.env`:
  - `POSTGRES_DB`, `POSTGRES_USER`, `POSTGRES_PASSWORD` - Database credentials
  - `EMAIL_USER`, `EMAIL_PASS` - Email configuration
  - `NEXT_PUBLIC_CAL_LINK` - Calendly integration
  - `BASE_URL`, `NEXT_PUBLIC_SERVER_URL` - Your domain URLs
  - `PAYLOAD_SECRET` - Your secret payload key


## 🔄 Updating the Application (Subsequent Deployments)

Use `reload.sh` to update the application with new changes.

### What `reload.sh` Does:

1. **📥 Code Update**

   - Pulls latest changes from Git repository
   - Installs updated npm dependencies

2. **🗄️ Database Updates**

   - Runs database migrations for schema changes
   - Generates updated TypeScript types
   - Creates import maps for Payload CMS

3. **🔄 Application Restart**
   - Stops the current application container
   - Rebuilds and starts the application with new code
   - Verifies the application is running properly

### Running Application Updates:

```bash
# Make the script executable
chmod +x reload.sh

# Run the update
./reload.sh
```

## 📁 File Structure

```
├── deploy.sh          # First-time deployment script
├── reload.sh          # Update application script
├── .env               # Environment variables (created by deploy.sh)
├── docker-compose.prod.yml           # Production application setup
├── docker-compose.postgres.prod.yml  # Production database setup
└── media_data/        # Media files directory
```

## 🔍 Verification Commands

After deployment, verify everything is working:

```bash
# Check running containers
docker ps

# Check application logs
docker-compose -f docker-compose.prod.yml logs -f app

# Check database logs
docker-compose -f docker-compose.postgres.prod.yml logs -f postgres

# Health check
curl http://localhost:3000/api/health

# Check swap usage
free -h
```

## 🛠️ Troubleshooting

### Common Issues:

1. **Port 3000 already in use**

   ```bash
   sudo lsof -i :3000
   sudo kill -9 <PID>
   ```

2. **Database connection issues**

   ```bash
   # Check database container
   docker-compose -f docker-compose.postgres.prod.yml ps

   # Check database logs
   docker-compose -f docker-compose.postgres.prod.yml logs postgres
   ```

3. **Permission issues with media files**

   ```bash
   sudo chown -R 1001:1001 media_data
   ```

4. **Environment variables not loaded**

   ```bash
   # Check if .env file exists
   ls -la .env

   # Source environment variables
   source .env
   ```

### Logs and Debugging:

```bash
# Application logs
docker-compose -f docker-compose.prod.yml logs app

# Database logs
docker-compose -f docker-compose.postgres.prod.yml logs postgres

# Real-time logs
docker-compose -f docker-compose.prod.yml logs -f app
```

## 🔒 Security Considerations

1. **Change default passwords** in the `.env` file
2. **Use strong `PAYLOAD_SECRET`** (automatically generated)
3. **Secure database credentials**
4. **Use HTTPS in production** (configure in reverse proxy)
5. **Regular security updates** for system packages

## 📊 Monitoring

The application includes health checks:

- **Health endpoint**: `http://localhost:3000/api/health`
- **Docker health checks**: Configured in docker-compose.prod.yml
- **Database connectivity**: Verified during startup

## 🚨 Emergency Procedures

### Complete Reset:

```bash
# Stop all containers
docker-compose -f docker-compose.prod.yml down
docker-compose -f docker-compose.postgres.prod.yml down

# Remove volumes (⚠️ WARNING: This deletes all data)
docker volume prune

# Restart from scratch
./deploy.sh
```

### Rollback to Previous Version:

```bash
# Check git history
git log --oneline

# Revert to previous commit
git reset --hard HEAD~1

# Reload application
./reload.sh
```

## 📞 Support

If you encounter issues:

1. Check the logs using the commands above
2. Verify all environment variables are set correctly
3. Ensure Docker and Docker Compose are running
4. Check system resources (CPU, memory, disk space)

---

**Last Updated**: $(date)
**Version**: 1.0
