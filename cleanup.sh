#!/bin/bash

# Clean up Next.js files
echo "Cleaning up Next.js files..."

# Remove app directory if it exists
if [ -d "src/app" ]; then
  echo "Removing src/app directory..."
  rm -rf src/app
fi

# Remove existing node_modules and lock files
echo "Removing node_modules and lock files..."
rm -rf node_modules
rm -f package-lock.json
rm -f yarn.lock

# Install TypeScript version compatible with react-scripts
echo "Installing TypeScript version compatible with react-scripts..."
npm install --save-dev typescript@4.9.5

# Install dependencies with legacy peer deps option
echo "Installing dependencies..."
npm install --legacy-peer-deps

# Start the development server
echo "Starting development server..."
npm start