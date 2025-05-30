# Pathway Foundation - Deployment Guide

This document provides instructions for deploying the Pathway Foundation website to Firebase.

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

## Post-Deployment Verification

After deployment is complete, verify your changes by:

1. Visiting your Firebase hosting URL
2. Testing the website functionality on different devices and browsers
3. Checking that all updated content is displayed correctly

## Rollback

If needed, you can rollback to a previous deployment:

```
firebase hosting:clone SITE_ID:PREVIOUS_DEPLOY_ID SITE_ID:live
```

You can find previous deploy IDs in the Firebase Console under Hosting > Deployment History.