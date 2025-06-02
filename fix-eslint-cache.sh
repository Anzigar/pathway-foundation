#!/bin/bash

# Remove existing eslint cache file if it exists
if [ -f ./node_modules/.cache/.eslintcache ]; then
    echo "Removing existing ESLint cache file..."
    rm -f ./node_modules/.cache/.eslintcache
fi

# Create the cache directory with proper permissions
echo "Creating ESLint cache directory with proper permissions..."
mkdir -p ./node_modules/.cache
chmod 777 ./node_modules/.cache

echo "ESLint cache configuration fixed!"
