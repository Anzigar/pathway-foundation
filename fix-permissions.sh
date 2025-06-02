#!/bin/bash
# Script to fix permission issues with node_modules and ESLint cache

echo "🔧 Fixing permissions for node_modules..."

# Fix ownership of the node_modules directory
sudo chown -R $(whoami) node_modules/

# Create the .cache directory if it doesn't exist
mkdir -p node_modules/.cache

# Fix permissions for the .cache directory specifically
sudo chmod -R 755 node_modules/.cache

# Fix permissions for the .eslintcache file if it exists
if [ -f "node_modules/.cache/.eslintcache" ]; then
    sudo chmod 644 node_modules/.cache/.eslintcache
fi

# Fix ESLint cache permissions
echo "Fixing ESLint cache permissions..."
rm -rf ./node_modules/.cache/.eslintcache
mkdir -p ./node_modules/.cache
touch ./node_modules/.cache/.eslintcache
chmod 666 ./node_modules/.cache/.eslintcache

# Also create a local npm cache with proper permissions
echo "Setting up local npm cache..."
mkdir -p ./.npm-cache
chmod -R 777 ./.npm-cache

echo "✅ Permissions fixed successfully!"
echo "You can now run 'npm start' or 'npm run build' again."