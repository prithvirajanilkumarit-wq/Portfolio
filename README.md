# Prithviraj Anilkumar — Personal Portfolio Website

![Portfolio Preview Banner](https://via.placeholder.com/1200x600/0b0f19/818cf8?text=Prithviraj+Anilkumar+-+SQL+Developer+%26+Data+Analyst+Portfolio)

> A modern, dark-themed, glassmorphic portfolio website built with **React 18**, **Framer Motion**, and **React Icons**, taking UI/UX inspiration from leading modern developer portfolios while adhering **100% strictly to resume factual data**.

---

## 🌟 Portfolio Overview

This repository contains the source code for the personal portfolio of **Prithviraj Anilkumar**, a **SQL Developer, ERP Reporting Developer & Data Analyst** based in Surat, Gujarat, India.

The portfolio highlights ~2 years of experience at **Ramatek Solution** delivering T-SQL stored procedures, Crystal Reports, and RDLC reporting solutions for textile and business management ERP deployments, alongside academic credentials (MCA at LPU, BCA Distinction at BMU).

---

## ✨ Features

- 💎 **Modern Obsidian Glassmorphic Design System**: Dark theme (`#0b0f19`) with backdrop blur, indigo/violet neon glows, and custom typography (`Outfit`, `Inter`, `JetBrains Mono`).
- ⚡ **Interactive Motion Animations**: Powered by `framer-motion` for smooth entry reveals, layout shifts, hover card elevation, and interactive tabs.
- 📌 **Top Scroll Progress Indicator**: Visual progress bar tracking reading depth down the page.
- 🎯 **100% Resume Grounded**: Every qualification, metric, project, and experience bullet strictly matches the official resume.
- 📱 **Fully Responsive Layout**: Seamless UX across desktop, laptop, tablet, and mobile browsers.
- 🔍 **Categorized Skill & Project Filters**: Interactive tab switchers for database tools, reporting platforms, ERP domains, and project confidentiality badges.
- 📄 **Direct Resume PDF Download**: One-click download of `resume.pdf`.
- 📬 **Interactive Mailto Contact Form**: Instant email pre-filling for job opportunities and inquiries.

---

## 🛠️ Technologies Used

- **Core**: React 18 (`react`, `react-dom`)
- **Animation & Micro-interactions**: Framer Motion (`framer-motion`)
- **Icons**: React Icons (`react-icons`)
- **Scroll Handling**: React Scroll (`react-scroll`)
- **Styling**: Modern Vanilla CSS with CSS Variables & Glassmorphism
- **Fonts**: Google Fonts (`Outfit`, `Inter`, `JetBrains Mono`)
- **Deployment**: GitHub Pages (`gh-pages`)

---

## 📁 Project Structure

```text
Portfolio/
├── public/
│   ├── favicon.ico              # Site icon
│   ├── index.html               # Main HTML template with SEO meta tags & fonts
│   ├── manifest.json            # Web app manifest
│   ├── profile.jpg              # Profile photograph
│   └── resume.pdf               # Resume PDF file
├── src/
│   ├── components/
│   │   ├── Navbar.js / .css     # Sticky glass navbar with scroll progress & drawer
│   │   ├── Hero.js / .css       # Animated typewriter, profile card, CTAs
│   │   ├── About.js / .css      # Bio summary, spoken languages, industry exposure
│   │   ├── Experience.js / .css # Ramatek Solution work experience timeline
│   │   ├── Projects.js / .css   # Filterable professional ERP & personal projects
│   │   ├── Skills.js / .css     # Categorized skill tabs & competency badges
│   │   ├── Education.js / .css  # MCA (LPU) & BCA (BMU) degree cards
│   │   ├── ContinuousLearning.js / .css # Focus areas & Power BI / Python learning
│   │   ├── Contact.js / .css    # Interactive contact form & details
│   │   └── Footer.js / .css     # Quick links, social buttons & top scroll button
│   ├── App.js                   # Main application layout
│   ├── App.css                  # Core app transition styles
│   ├── index.js                 # React entry point
│   └── index.css                # Global design system & custom CSS properties
├── package.json
└── README.md
```

---

## 🚀 Installation & Local Development

### Prerequisites

- **Node.js** (v16.x or higher — v18/v20 recommended)
- **npm** (v8.x or higher)

### Setup Instructions

1. **Clone or navigate to the project directory**:
   ```bash
   cd "C:\Users\Prith\OneDrive\Desktop\Portfolio"
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm start
   ```
   Open `http://localhost:3000` in your browser to view the live site with hot reload.

---

## 🏗️ Build & Production Deployment

### Building for Production

To create an optimized, minified production bundle in the `build/` directory:

```bash
npm run build
```

### Deploying to GitHub Pages

1. Ensure the `"homepage"` field in `package.json` matches your GitHub repository URL:
   ```json
   "homepage": "https://prithvirajanilkumarit-wq.github.io/Portfolio"
   ```

2. Run the automated deployment script:
   ```bash
   npm run deploy
   ```

This automatically executes `npm run build` and publishes the output to the `gh-pages` branch.

---

## ⚙️ Customization Guide

- **Updating Resume Content**: To update your profile information, edit the data arrays within `src/components/About.js`, `Experience.js`, `Projects.js`, `Skills.js`, `Education.js`, and `ContinuousLearning.js`.
- **Replacing Resume PDF**: Replace `public/resume.pdf` with your updated PDF file.
- **Updating Profile Photo**: Replace `public/profile.jpg` with your photo.
- **Changing Accent Colors**: Adjust CSS tokens (`--color-accent-primary`, `--gradient-accent`) inside `src/index.css`.

---

## 🖼️ Screenshots

| Hero Section | Experience & Projects |
| :---: | :---: |
| ![Hero Screenshot Placeholder](https://via.placeholder.com/600x350/0b0f19/818cf8?text=Hero+Section) | ![Projects Screenshot Placeholder](https://via.placeholder.com/600x350/0b0f19/818cf8?text=Projects+Section) |

---

## 📬 Contact Information

**Prithviraj Anilkumar**  
SQL Developer | ERP Reporting Developer | Data Analyst  

- **Location**: Surat, Gujarat, India  
- **Email**: [prithviraj.anilkumar.it@gmail.com](mailto:prithviraj.anilkumar.it@gmail.com)  
- **Phone**: [+91-7096512260](tel:+917096512260)  
- **LinkedIn**: [prithviraj-anilkumar-974046329](https://www.linkedin.com/in/prithviraj-anilkumar-974046329/)  
- **GitHub**: [github.com/prithvirajanilkumarit-wq](https://github.com/prithvirajanilkumarit-wq)  

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
