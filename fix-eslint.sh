#!/bin/bash
# Simple script to fix ESLint cache permission issues

echo "Fixing ESLint cache permissions..."

# Make sure we're in the project directory
cd "$(dirname "$0")"

# Remove the problematic cache directory completely
rm -rf node_modules/.cache

# Create the directory again with permissive permissions
mkdir -p node_modules/.cache
chmod 777 node_modules/.cache

echo "ESLint cache directory recreated with proper permissions."
echo "Try running your build command again."