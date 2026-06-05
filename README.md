# Prithviraj Anilkumar — Personal Portfolio

A modern, dark-themed personal portfolio website built with **React 18**.

---

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running Locally](#running-locally)
- [Building for Production](#building-for-production)
- [GitHub Pages Deployment](#github-pages-deployment)
- [Troubleshooting](#troubleshooting)

---

## ✅ Prerequisites

Before you start, make sure the following are installed on your computer:

### 1. Node.js (version 16.x or higher — 18.x recommended)

**Check if you have Node.js:**
```bash
node --version
```

If you don't have Node.js, download it from: https://nodejs.org/en/download

Choose the **LTS (Long Term Support)** version. It includes `npm` automatically.

### 2. npm (comes with Node.js)

**Check if you have npm:**
```bash
npm --version
```

---

## 📁 Project Structure

```
Portfolio/
├── public/
│   ├── index.html          ← Main HTML template
│   ├── manifest.json       ← PWA manifest
│   └── profile.jpg         ← Your profile photo (already included)
├── src/
│   ├── components/
│   │   ├── Navbar.js / Navbar.css
│   │   ├── Hero.js / Hero.css
│   │   ├── About.js / About.css
│   │   ├── Skills.js / Skills.css
│   │   ├── Experience.js / Experience.css
│   │   ├── Projects.js / Projects.css
│   │   ├── Education.js / Education.css
│   │   ├── Achievements.js / Achievements.css
│   │   ├── Contact.js / Contact.css
│   │   └── Footer.js / Footer.css
│   ├── App.js              ← Root component
│   ├── App.css
│   ├── index.js            ← React entry point
│   └── index.css           ← Global design system
├── .gitignore
├── package.json
└── README.md
```

---

## 🚀 Installation

**Step 1:** Open a terminal / PowerShell window

**Step 2:** Navigate to the project folder:
```bash
cd "C:\Users\Prith\OneDrive\Desktop\Portfolio"
```

**Step 3:** Install all dependencies:
```bash
npm install
```

This will create a `node_modules` folder and install React and all required packages.
It may take 2–5 minutes depending on your internet speed.

---

## 💻 Running Locally (Development Server)

After installation, start the development server:

```bash
npm start
```

This will:
- Start a local server at **http://localhost:3000**
- Automatically open your browser
- Reload the page when you make code changes

**To stop the server:** Press `Ctrl + C` in the terminal.

---

## 🏗️ Building for Production

To create an optimized production build:

```bash
npm run build
```

This creates a `build/` folder with:
- Minified JavaScript and CSS
- Optimized assets
- Ready-to-deploy files

---

## 🌐 GitHub Pages Deployment

### Step 1: Initialize Git repository

```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
```

### Step 2: Create a GitHub repository

1. Go to https://github.com/new
2. Name it `portfolio` or `prithviraj-portfolio`
3. Keep it public
4. Do NOT add README, .gitignore, or license (already included)

### Step 3: Connect to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repo name.

### Step 4: Update homepage in package.json

Open `package.json` and update the `"homepage"` field:
```json
"homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"
```

### Step 5: Install gh-pages (if not already installed)

```bash
npm install --save-dev gh-pages
```

### Step 6: Deploy

```bash
npm run deploy
```

This will:
1. Build the project
2. Push the `build/` folder to the `gh-pages` branch
3. Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

> **Note:** It may take 2–5 minutes after deployment for the site to go live.

### Step 7: Enable GitHub Pages (first time only)

1. Go to your GitHub repo → **Settings** → **Pages**
2. Under **Source**, select branch: `gh-pages`, folder: `/ (root)`
3. Click **Save**

---

## 🔧 Troubleshooting

### ❌ `node` or `npm` not recognized

**Solution:** Node.js is not installed or not in your PATH.
1. Download Node.js from https://nodejs.org
2. Restart your terminal after installation
3. Try `node --version` again

---

### ❌ `npm install` fails

**Solution:** Try clearing the npm cache:
```bash
npm cache clean --force
npm install
```

Or delete `node_modules` and try again:
```bash
rmdir /s /q node_modules
npm install
```

---

### ❌ Port 3000 already in use

**Solution:** React will ask if you want to use another port. Press `Y` and Enter.
Or close whatever is using port 3000 and restart.

---

### ❌ Profile photo not showing

Make sure `profile.jpg` is in the `public/` folder (not `src/`).
The file should already be there. If not, copy your photo and rename it to `profile.jpg`.

---

### ❌ GitHub Pages shows blank page

**Solution:** Make sure `"homepage"` in `package.json` is set correctly:
```json
"homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"
```
Then run `npm run deploy` again.

---

### ❌ Changes not reflecting after `npm run deploy`

Hard refresh the browser: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac).
Also wait 2–5 minutes for GitHub Pages to update.

---

## 📬 Contact

**Prithviraj Anilkumar**
- Email: prithviraj.anilkumar.it@gmail.com
- Phone: +91-7096512260
- LinkedIn: https://www.linkedin.com/in/prithviraj-anilkumar-974046329
- GitHub: https://github.com/prithvirajanilkumarit-wq
- Location: Surat, Gujarat 395017, India
