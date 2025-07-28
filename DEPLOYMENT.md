# GitHub Pages Deployment Guide

Follow these steps to deploy your portfolio to GitHub Pages:

## Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository (e.g., `portfolio` or `harveer-singh-portfolio`)
5. Make sure it's set to "Public"
6. Click "Create repository"

## Step 2: Upload Your Files

### Option A: Using GitHub Web Interface
1. In your new repository, click "uploading an existing file"
2. Drag and drop these files:
   - `index.html`
   - `style.css`
   - `script.js`
   - `data.json`
   - `README.md`
   - `.gitignore`
   - `attached_assets/` folder with your resume
3. Write a commit message like "Initial portfolio upload"
4. Click "Commit changes"

### Option B: Using Git Commands
```bash
git init
git add .
git commit -m "Initial portfolio upload"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch
6. Select "/ (root)" as the folder
7. Click "Save"

## Step 4: Access Your Live Site

1. GitHub will show you the URL (usually `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`)
2. It may take 5-10 minutes for the site to be live
3. You'll get a green checkmark when deployment is successful

## Step 5: Custom Domain (Optional)

If you have a custom domain:
1. In the Pages settings, add your custom domain
2. Enable "Enforce HTTPS"
3. Update your domain's DNS settings to point to GitHub Pages

## Updating Your Portfolio

To make changes:
1. Edit files directly on GitHub, or
2. Update files locally and push changes:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push
   ```

## Important Notes

- Your portfolio works offline because data is embedded in JavaScript
- Resume downloads will work from the `attached_assets` folder
- All modern browsers are supported
- The site is fully responsive for mobile devices

## Troubleshooting

**Site not loading?**
- Wait 10 minutes for GitHub to process
- Check that `index.html` is in the root folder
- Verify repository is public

**Resume download not working?**
- Ensure `attached_assets` folder is uploaded
- Check file path in `index.html` matches your uploaded file

**Need help?**
Contact: harveersingh93@outlook.com