#!/bin/bash

# Install framer-motion properly
echo "Installing framer-motion..."
npm install framer-motion@10.16.4 --save

# Check if installation was successful
if [ $? -eq 0 ]; then
  echo "framer-motion was successfully installed!"
  echo "You can now update the Partners.js file to use framer-motion animations."
else
  echo "There was an issue installing framer-motion."
  echo "Please try running 'npm install framer-motion@10.16.4 --save' manually."
fi