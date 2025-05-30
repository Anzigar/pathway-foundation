#!/bin/bash

# Stop on first error
set -e

echo "=== Starting Firebase Deployment Process ==="

# Step 1: Clean up existing build artifacts
echo "Cleaning up existing build artifacts..."
rm -rf build
rm -rf node_modules
rm -f package-lock.json
rm -f yarn.lock

# Step 2: Install dependencies with the right TypeScript version
echo "Installing TypeScript 4.9.5 (compatible with react-scripts)..."
npm install --save-dev typescript@4.9.5

echo "Installing project dependencies..."
npm install --legacy-peer-deps

# Step 3: Build the production-ready application
echo "Building production application..."
npm run build

# Step 4: Install Firebase tools if not already installed
if ! command -v firebase &> /dev/null; then
  echo "Installing Firebase CLI tools..."
  npm install -g firebase-tools
fi

# Step 5: Firebase login (will be skipped if already logged in)
echo "Authenticating with Firebase..."
firebase login

# Step 6: Deploy to Firebase
echo "Deploying to Firebase project: pathway-foundation-e8854..."
firebase deploy --project=pathway-foundation-e8854

echo "=== Deployment Complete! ==="
echo "Your application has been deployed to Firebase."
echo "Visit: https://pathway-foundation-e8854.web.app"