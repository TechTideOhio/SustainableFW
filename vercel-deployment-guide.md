# Vercel Deployment Guide for Sustainable Forest Website

This guide will walk you through deploying your Next.js forest-themed website to Vercel for permanent hosting.

## Prerequisites

1. A [Vercel account](https://vercel.com/signup) (free tier is available)
2. A GitHub, GitLab, or Bitbucket account (to store your code)

## Step 1: Prepare Your Repository

1. Create a new repository on GitHub/GitLab/Bitbucket
2. Initialize Git in your project folder:
   ```bash
   cd sustainable-forest-website
   git init
   git add .
   git commit -m "Initial commit"
   ```
3. Connect your local repository to the remote:
   ```bash
   git remote add origin <your-repository-url>
   git push -u origin main
   ```

## Step 2: Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended for First-Time Setup)

1. Log in to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New..." → "Project"
3. Import your Git repository
4. Configure your project:
   - Framework Preset: Next.js
   - Root Directory: `./` (default)
   - Build Command: `next build` (default)
   - Output Directory: `.next` (default)
5. Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Log in to Vercel:
   ```bash
   vercel login
   ```
3. Deploy from your project directory:
   ```bash
   cd sustainable-forest-website
   vercel
   ```
4. Follow the interactive prompts

## Step 3: Configure Custom Domain (Optional)

1. In your Vercel project dashboard, go to "Settings" → "Domains"
2. Add your custom domain and follow the verification steps

## Step 4: Set Up Continuous Deployment

With your project connected to a Git repository, Vercel will automatically deploy:
- Every push to the main branch updates production
- Every push to other branches creates preview deployments

## Environment Variables (If Needed)

If your project requires environment variables:
1. Go to your project in the Vercel dashboard
2. Navigate to "Settings" → "Environment Variables"
3. Add any required variables

## Troubleshooting

If you encounter any issues during deployment:

1. Check the build logs in the Vercel dashboard
2. Ensure all dependencies are correctly listed in package.json
3. Verify that the "use client" directive is correctly placed in components using React hooks
4. Make sure your next.config.js is properly configured

## Performance Optimization

After deployment, check your site's performance using Vercel Analytics and make adjustments as needed.

---

Your website is now permanently deployed! Vercel provides:
- Global CDN distribution
- Automatic HTTPS
- Continuous deployment from Git
- Preview deployments for branches and PRs
- Performance analytics

The URL for your permanent deployment will be provided by Vercel after successful deployment, typically in the format: `your-project-name.vercel.app`
