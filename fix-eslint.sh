#!/bin/bash

echo "Fixing ESLint cache permission issues..."

# 1. Remove the eslint cache directory
rm -rf ./node_modules/.cache/.eslintcache

# 2. Create a new cache directory with proper permissions
mkdir -p ./node_modules/.cache
chmod -R 777 ./node_modules/.cache

# 3. Touch the eslint cache file with wide permissions
touch ./node_modules/.cache/.eslintcache
chmod 666 ./node_modules/.cache/.eslintcache

echo "ESLint cache permissions fixed. Run this script again if issues persist."
echo "To use this script: bash fix-eslint.sh"