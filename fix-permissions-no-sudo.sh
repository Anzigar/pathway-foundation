#!/bin/bash
# Script to fix permission issues without using sudo

echo "🔧 Fixing ESLint cache issues without sudo..."

# Remove the .cache directory completely
rm -rf node_modules/.cache

# Recreate the .cache directory with proper permissions
mkdir -p node_modules/.cache
chmod 755 node_modules/.cache

# Clear the ESLint cache from the project
npm run lint -- --cache false

echo "✅ Cache cleared successfully!"
echo "You can now run 'npm start' or 'npm run build' again."