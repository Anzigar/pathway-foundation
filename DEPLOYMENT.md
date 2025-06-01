# Pathway Foundation - Deployment Guide

This document provides instructions for deploying the Pathway Foundation website to Firebase and AWS Amplify.

## Prerequisites

- Node.js and npm installed
- Firebase CLI installed (`npm install -g firebase-tools`)
- Firebase account with a project set up
- Login to Firebase (`firebase login`)

## Deployment Methods

### Method 1: Using the deploy script

1. Make the deployment script executable:
   ```
   chmod +x deploy.sh
   ```

2. Run the deployment script:
   ```
   ./deploy.sh
   ```

### Method 2: Using npm scripts

1. Build and deploy in one command:
   ```
   npm run deploy
   ```

2. Or, to deploy only the hosting portion:
   ```
   npm run deploy:hosting
   ```

### Method 3: Manual deployment

1. Build the production version:
   ```
   npm run build
   ```

2. Deploy to Firebase:
   ```
   firebase deploy
   ```

## AWS Amplify Deployment

This section covers deploying the website using AWS Amplify.

### Prerequisites

- AWS account with appropriate permissions
- AWS Amplify CLI installed (`npm install -g @aws-amplify/cli`)
- Login to AWS Amplify (`amplify configure`)

### Deployment Steps

1. Initialize Amplify in your project (if not already done):
   ```
   amplify init
   ```

2. Add hosting:
   ```
   amplify add hosting
   ```

3. Deploy to Amplify:
   ```
   amplify publish
   ```

### Connecting to GitHub Repository

1. Go to AWS Amplify Console
2. Click "Connect app"
3. Select GitHub as repository source
4. Authenticate and select your repository
5. Configure build settings
6. Deploy

### Troubleshooting Amplify Builds

#### Package Installation Issues

If encountering npm cache misses or package installation errors:

1. Ensure `package-lock.json` is committed to your repository
2. Add the following to your build settings in Amplify Console:

   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci --no-audit
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: build
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
         - .npm/**/*
   ```

#### SSM Secrets Setup

To fix SSM secrets setup failures:

1. In AWS Console, go to Systems Manager > Parameter Store
2. Create parameters using path format: `/amplify/{appId}/{branchName}/{parameterName}`
3. Set permissions for Amplify service role to access these parameters

#### Backend Environment Association

If you don't need a backend environment:

1. In Amplify Console, go to App settings > Build settings
2. Edit your build specification to include:

   ```yaml
   backend:
     phases:
      build:
        commands:
          - echo "No backend required"
   ```

3. Alternatively, disable the backend build completely in App settings

For more details, refer to the [AWS Amplify Documentation](https://docs.aws.amazon.com/amplify/).

## Troubleshooting

If you encounter issues during deployment:

1. Check that you're logged in to Firebase:
   ```
   firebase login
   ```

2. Verify your project is selected:
   ```
   firebase use --add
   ```

3. Check Firebase configurations in `firebase.json` and `.firebaserc`

4. For CI/CD deployments, make sure your CI/CD pipeline has the necessary Firebase tokens:
   ```
   firebase login:ci
   ```