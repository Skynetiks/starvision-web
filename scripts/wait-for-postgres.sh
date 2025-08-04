#!/bin/bash

set -e

host="${POSTGRES_HOST:-postgres}"
port="${POSTGRES_PORT:-5432}"
user="${POSTGRES_USER:-starvision_user}"
db="${POSTGRES_DB:-starvision}"
password="${POSTGRES_PASSWORD:-starvision_password}"

echo "⏳ Waiting for PostgreSQL at $host:$port..."

until PGPASSWORD="$password" psql -h "$host" -p "$port" -U "$user" -d "$db" -c '\q' > /dev/null 2>&1; do
  echo "PostgreSQL is unavailable - sleeping"
  sleep 2
done

echo "✅ PostgreSQL is up and running!"
