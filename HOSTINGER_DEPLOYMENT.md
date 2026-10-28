# Hostinger GitHub Deployment Guide — సద్గురు నాటు వైద్యం (Sadguru Natu Vaidyam)

This codebase is configured to work with **Hostinger** directly from **GitHub** (both **Hostinger Node.js Web App Hosting** and **Hostinger Static / Cloud / VPS Hosting**).

---

## Option 1: Hostinger Node.js Web App via GitHub (Recommended)

1. Push this repository to your **GitHub** account.
2. Log in to **Hostinger hPanel** → **Websites** → **Add Website** → **Node.js Web App** (or open your existing site → **Advanced** → **Node.js**).
3. Connect your **GitHub Repository** and select your branch (`main`).
4. Use these exact build settings in Hostinger:
   - **Node.js Version**: `20.x` (or `18.x+`)
   - **Framework Preset**: `Next.js`
   - **Build Command**: `npm run build`
   - **Start Command**: `npm start` (or **Entry File**: `server.js`)
5. Click **Deploy**.

### Why this works smoothly on Hostinger:
- All build-time CSS & TypeScript packages (`tailwindcss`, `@tailwindcss/postcss`, `typescript`) are placed in `dependencies` inside `package.json`, preventing Hostinger's production install (`NODE_ENV=production`) from skipping them.
- `server.js` is included in the project root for Hostinger LiteSpeed / Phusion Passenger Node.js startup.
- `public/ads.txt` (`ca-pub-6709151112965859`) and `public/.htaccess` are automatically served at your root domain.
- Admin Panel edits (Logo upload, YouTube videos, Services, Sacred Yantras, Herbs, Private Ads, and Google AdSense settings) persist to both server storage (`.data/sadguru-store.json`) and browser `localStorage`.
