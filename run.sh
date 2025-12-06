#!/usr/bin/env bash
set -e

# Navigate to the directory where this script lives
cd "$(dirname "$0")"

# Install dependencies if node_modules is missing
if [ ! -d "node_modules" ]; then
  echo "node_modules not found. Installing dependencies with npm install..."
  npm install
fi

echo "Starting Vite dev server on http://localhost:5173 ..."
npm run dev

