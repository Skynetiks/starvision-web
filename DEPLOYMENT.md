# StarVision Web Application - Deployment Guide

This guide provides step-by-step instructions for deploying the StarVision web application.

## Prerequisites

- Node.js 18+ and pnpm installed
- Docker and Docker Compose installed
- PostgreSQL (if not using Docker)
- Git access to the repository

## Quick Deployment Steps

### Step 1: Clone and Setup

```bash
# Clone the repository
git clone <your-repository-url>
cd starvision-web

# Install dependencies
pnpm install
```

### Step 2: Generate Required Files

If the post-install script didn't run automatically, run these commands manually:

```bash
# Generate Payload types
pnpm generate:types

# Generate import map
pnpm generate:importmap
```

### Step 3: Environment Configuration

Create a `.env` file in the root directory with the following variables:

```env
# Database Configuration
POSTGRES_DB=starvision
POSTGRES_USER=starvision_user
POSTGRES_PASSWORD=your-secure-password-here

# Payload CMS Configuration
PAYLOAD_SECRET=your-super-secret-payload-key-change-this-in-production

# Application Configuration
NEXT_PUBLIC_SERVER_URL=http://localhost:3000

# Optional: Production URL
# NEXT_PUBLIC_SERVER_URL=https://yourdomain.com
```

### Step 4: Database Setup

Choose one of the following options based on your needs:

#### Option A: Create Migration (if no migration exists)

```bash
pnpm payload migrate:create
```

#### Option B: Fresh Database (⚠️ WARNING: This resets the database)

```bash
pnpm payload migrate:fresh
```

#### Option C: View Available Commands

```bash
pnpm payload
```

### Step 5: Start Application

#### For Production (Recommended)

```bash
# Start with production configuration
docker-compose -f docker-compose.prod.yml up -d
```

#### For Development

```bash
# Start with development configuration
docker-compose up -d
```

## Docker Compose Files

The project includes several Docker Compose configurations:

- `docker-compose.yml` - Basic development setup
- `docker-compose.prod.yml` - Production application setup
- `docker-compose.postgres.prod.yml` - Production database setup

## Complete Production Deployment

For a complete production deployment with database:

```bash
# 1. Start the database first
docker-compose -f docker-compose.postgres.prod.yml up -d

# 2. Wait for database to be ready (check logs)
docker-compose -f docker-compose.postgres.prod.yml logs -f postgres

# 3. Start the application
docker-compose -f docker-compose.prod.yml up -d
```

## Verification

### Check Application Status

```bash
# View running containers
docker ps

# Check application logs
docker-compose -f docker-compose.prod.yml logs -f app

# Health check
curl http://localhost:3000/api/health
```

### Access Points

- **Application**: http://localhost:3000
- **Admin Panel**: http://localhost:3000/admin
- **API Health**: http://localhost:3000/api/health

## Common Commands

### Application Management

```bash
# Stop all services
docker-compose -f docker-compose.prod.yml down

# Restart services
docker-compose -f docker-compose.prod.yml restart

# View logs
docker-compose -f docker-compose.prod.yml logs -f

# Update application
git pull
docker-compose -f docker-compose.prod.yml down
docker-compose -f docker-compose.prod.yml up -d --build
```

### Database Management

```bash
# Access PostgreSQL directly
docker exec -it starvision-postgres-prod psql -U starvision_user -d starvision

# Backup database
docker exec starvision-postgres-prod pg_dump -U starvision_user starvision > backup.sql

# Restore database
docker exec -i starvision-postgres-prod psql -U starvision_user -d starvision < backup.sql
```

### Payload CMS Commands

```bash
# View all available commands
pnpm payload

# Create a new user
pnpm payload users:create

# Reset admin password
pnpm payload users:update

# Generate types (if schema changes)
pnpm generate:types

# Generate import map
pnpm generate:importmap
```

## Troubleshooting

### Common Issues

1. **Port 3000 already in use**

   ```bash
   # Find and kill process using port 3000
   lsof -ti:3000 | xargs kill -9
   ```

2. **Database connection issues**

   - Verify `.env` file has correct database credentials
   - Check if PostgreSQL container is running: `docker ps`
   - Check database logs: `docker-compose -f docker-compose.postgres.prod.yml logs postgres`

3. **Application not starting**

   - Check application logs: `docker-compose -f docker-compose.prod.yml logs app`
   - Verify all environment variables are set correctly
   - Ensure database is running and accessible

4. **Permission issues with media uploads**
   ```bash
   # Fix media directory permissions
   sudo chown -R $USER:$USER ./media_data
   chmod -R 755 ./media_data
   ```

### Useful Debug Commands

```bash
# Check container status
docker ps -a

# View resource usage
docker stats

# Check network connectivity
docker network ls
docker network inspect starvision-network

# Access container shell
docker exec -it starvision-app-prod /bin/bash
```

## Environment Variables Reference

| Variable                 | Description            | Required | Default                 |
| ------------------------ | ---------------------- | -------- | ----------------------- |
| `POSTGRES_DB`            | Database name          | Yes      | `starvision`            |
| `POSTGRES_USER`          | Database user          | Yes      | `starvision_user`       |
| `POSTGRES_PASSWORD`      | Database password      | Yes      | -                       |
| `PAYLOAD_SECRET`         | Payload CMS secret key | Yes      | -                       |
| `NEXT_PUBLIC_SERVER_URL` | Public server URL      | Yes      | `http://localhost:3000` |
| `NODE_ENV`               | Node environment       | No       | `production`            |

## Security Notes

- Change default passwords in production
- Use strong `PAYLOAD_SECRET` values
- Restrict database access in production
- Enable HTTPS for production deployments
- Regularly update dependencies

## Support

For issues or questions:

1. Check the logs first
2. Verify environment variables
3. Ensure all prerequisites are met
4. Check Docker container status

---

**Note**: This deployment guide provides a streamlined approach. For production environments, consider additional security measures, monitoring, and backup strategies.
