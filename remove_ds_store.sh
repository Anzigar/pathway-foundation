#!/bin/bash

# Find and remove all .DS_Store files in the project
echo "Finding and removing all .DS_Store files..."
find . -name ".DS_Store" -delete
echo "Done removing .DS_Store files."

# Verify .gitignore contains .DS_Store entry
if grep -q ".DS_Store" .gitignore; then
  echo ".DS_Store is properly included in .gitignore"
else
  echo "Warning: .DS_Store entry not found in .gitignore!"
fi
