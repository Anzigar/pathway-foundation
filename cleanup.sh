#!/bin/bash

# Clean up Next.js files
echo "Cleaning up Next.js files..."

# Remove app directory if it exists
if [ -d "src/app" ]; then
  echo "Removing src/app directory..."
  rm -rf src/app
fi

# Install dependencies
echo "Installing dependencies..."
npm install

# Start the development server
echo "Starting development server..."
npm start