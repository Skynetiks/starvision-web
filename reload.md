### Reload script

This document explains what `reload.sh` does, how to run it, and how to handle a common `git pull` issue related to file permission changes.

### What `reload.sh` does

- Pulls latest code from `origin/main`.
- Installs Node dependencies via `npm install`.
- Runs Payload migrations (generates types/import map, creates and runs DB migrations) using `DATABASE_URI` built from `.env`.
- Builds and starts the app using `docker-compose -f docker-compose.prod.yml up -d --build`.
- Verifies the container is running.

### Prerequisites

- `.env` file present with `POSTGRES_USER`, `POSTGRES_PASSWORD`, `POSTGRES_DB` (used to build `DATABASE_URI`).
- Docker and Docker Compose installed and available.
- Node.js and npm installed.

### Usage

Give the script execute permission (first time or after pulling the repo), then run it:

```bash
chmod +x reload.sh
./reload.sh
```

### Troubleshooting: git pull blocked by local changes (permission bit)

If `reload.sh` file permissions changed (e.g., executable bit), `git pull` may fail with a message like:

```
error: Your local changes to the following files would be overwritten by merge:
  reload.sh
Please commit your changes or stash them before you merge.
Aborting
```

If you do not need local changes, hard reset to the remote branch and pull again:

```bash
git fetch origin
git reset --hard origin/main
git pull --rebase
```

After a successful pull, you may need to restore the executable bit on `reload.sh`:

```bash
chmod +x reload.sh
```

Optional: if file permission flips are frequently detected by Git on your system, you can tell Git to ignore permission-only changes (repo-local):

```bash
git config core.fileMode false
```

### Verifying the app

Check containers:

```bash
docker-compose -f docker-compose.prod.yml ps
```

View logs if the app failed to start:

```bash
docker-compose -f docker-compose.prod.yml logs | tail -200
```
