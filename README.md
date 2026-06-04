# Dunkirk Infotech Website

Modern business website for [dunkrikinfotech.com](https://dunkrikinfotech.com), built with React and Vite.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
```

The static files will be in the `dist/` folder, ready to deploy.

## Deploy (GitHub + Vercel + Hostinger domain)

Hosting is **free on Vercel**. Your domain stays at **Hostinger**; only DNS is changed.

### Prerequisites

- [Node.js LTS](https://nodejs.org) installed
- [Git](https://git-scm.com/download/win) installed
- GitHub account
- Vercel account (sign up with GitHub at [vercel.com](https://vercel.com))
- Hostinger access for **dunkrikinfotech.com** DNS

### Step 1 — Push code to GitHub

In PowerShell:

```powershell
cd C:\Users\mohit\dunkrikinfotech-website
git init
git add .
git commit -m "Initial commit: Dunkirk Infotech website"
```

On GitHub: **New repository** → name it `dunkrikinfotech-website` → **do not** add README (repo should be empty).

Then (replace `YOUR_USERNAME`):

```powershell
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/dunkrikinfotech-website.git
git push -u origin main
```

### Step 2 — Import project in Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. **Import** your `dunkrikinfotech-website` GitHub repo
3. Vercel should auto-detect Vite. Confirm:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy** and wait for the build to finish

Every `git push` to `main` will redeploy the site automatically.

### Step 3 — Add custom domain in Vercel

1. Vercel project → **Settings** → **Domains**
2. Add `dunkrikinfotech.com` and `www.dunkrikinfotech.com`
3. Copy the DNS records Vercel shows (example — use **your** Vercel values):

| Type | Name | Value |
|------|------|--------|
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

### Step 4 — DNS in Hostinger

1. Hostinger **hPanel** → **Domains** → **dunkrikinfotech.com** → **DNS Zone**
2. Remove or edit old **A** records for `@` that conflict with Vercel
3. Add the **A** and **CNAME** records from Vercel
4. Save. SSL (HTTPS) is enabled by Vercel after DNS propagates (often 15 min–24 hr)

### Step 5 — Verify

- Open `https://dunkrikinfotech.com`
- In Vercel → **Deployments**, confirm the latest deploy is **Ready**

### Updating the live site later

```powershell
cd C:\Users\mohit\dunkrikinfotech-website
git add .
git commit -m "Describe your changes"
git push
```

Vercel rebuilds and publishes automatically.

## Customize

- Update contact details in `src/components/Contact.jsx` (email, phone)
- Edit services, stats, and copy in the component files under `src/components/`
- Adjust colors in `src/index.css` (`:root` CSS variables)

## Project Structure

```
dunkrikinfotech-website/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   ├── WhyUs.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```
