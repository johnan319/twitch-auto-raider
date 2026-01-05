#!/bin/sh
set -e

echo "Syncing database schema..."
cd /app/packages/database && npx prisma db push --skip-generate

echo "Starting server..."
exec node /app/apps/api/dist/server.js
