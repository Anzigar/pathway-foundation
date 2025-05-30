#!/bin/bash

# Stop on first error
set -e

# Print commands before executing
set -x

echo "=== Starting React project cleanup and setup ==="

# Clean up Next.js files
echo "Cleaning up Next.js files..."
if [ -d "src/app" ]; then
  echo "Removing src/app directory..."
  rm -rf src/app
fi

# Remove existing node_modules and lock files
echo "Removing node_modules and lock files..."
rm -rf node_modules
rm -f package-lock.json
rm -f yarn.lock

# Clear npm cache to avoid issues
echo "Clearing npm cache..."
npm cache clean --force

# Install TypeScript version compatible with react-scripts first
echo "Installing TypeScript version compatible with react-scripts..."
npm install --save-dev typescript@4.9.5

# Check TypeScript installation
TYPESCRIPT_VERSION=$(npx tsc --version)
echo "TypeScript version: $TYPESCRIPT_VERSION"

# Install dependencies with legacy peer deps option
echo "Installing dependencies..."
npm install --legacy-peer-deps

# Check React Scripts installation
REACT_SCRIPTS_VERSION=$(npm list react-scripts | grep react-scripts)
echo "React Scripts: $REACT_SCRIPTS_VERSION"

echo "=== Setup complete! ==="
echo "You can now run: npm start"

# Uncomment to automatically start the development server
# npm start