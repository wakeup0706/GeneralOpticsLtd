# General Optics Ltd –Website

This repository contains a static multi‑page website for General Optics Ltd. Pages are linked and share a consistent header, footer, color palette, and contact CTA.

## Pages
- `index.html` – Top page
- `about.html` – 会社案内
- `products.html` – 製品案内
- `facility.html` – 主要設備
- `news.html` – お知らせ
- `contact.html` – お問い合わせ
- `recruit.html` – 採用情報（募集要項・エントリー）
- `interview.html` – スタッフの声（詳細）
- `privacy.html` – プライバシーポリシー

## Styles
- Shared chrome (header, footer, palette, contact CTA): `css/news.css`
- Page specific: `css/home.css`, `css/about.css`, `css/products.css`, `css/facility.css`, `css/contact.css`, `css/interview.css`, `css/privacy.css`, `css/recruit.css`

## Color palette
- Text/Button
  - Black: `#444C55`
  - White: `#FFFFFF`
  - Blue: `#154994`
- Main Colors
  - Main: `#154994`
  - Main Gradient: `#154994 → #8BE6F7`
  - Accent: `#218CD9`
  - Accent Gradient: `#218CD9 → #8BE6F7`
- Background
  - Page: `#F2F3F4`
  - Card/White: `#FFFFFF`

These are defined as CSS variables in `css/news.css` (root) and referenced by other page styles.

## How to run locally
Just open `index.html` in your browser. If you prefer a local server:

```powershell
# PowerShell (Windows)
$env:PORT=5173; python -m http.server $env:PORT
# then open http://localhost:5173
```

## Notes
- Navigation and footer are wired across all pages; the Recruit button points to `recruit.html`.
- The floating “TOP” button links to `#top` (each page sets `id="top"` on `<body>` or uses a fixed button).
