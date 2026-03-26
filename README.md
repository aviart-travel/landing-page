# AVIART Travel — React Web App

A pixel-faithful recreation of [aviart.travel](https://www.aviart.travel/) built with:

- **React 18** + **Vite 5**
- **Tailwind CSS 3**
- **React Router 6** (client-side routing)
- **Lucide React** (icons)
- **Vercel** deployment config included

---

## 🚀 Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Run locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

---

## 📁 Project Structure

```
aviart-travel/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Fixed top nav with utility bar + mobile menu
│   │   └── Footer.jsx        # Footer with links, payment methods, socials
│   ├── hooks/
│   │   └── useReveal.js      # Intersection Observer scroll animations
│   ├── lib/
│   │   └── utils.js          # cn() Tailwind merge utility
│   ├── pages/
│   │   ├── HomePage.jsx      # Full homepage with all sections
│   │   └── OtherPages.jsx    # All other routes (About, Contact, Destinations, etc.)
│   ├── App.jsx               # Router + layout shell
│   ├── index.css             # Global styles, Tailwind directives, custom utilities
│   └── main.jsx              # Entry point
├── index.html                # HTML shell with Google Fonts
├── tailwind.config.js        # Custom colors, fonts, animations
├── vite.config.js            # Vite + path aliases
├── postcss.config.js
├── vercel.json               # Vercel deployment config (SPA rewrites + caching)
└── package.json
```

---

## 🎨 Design System

### Colors (defined in `tailwind.config.js`)

| Token | Value | Usage |
|-------|-------|-------|
| `aviart-gold` | `#C9A96E` | Primary accent, buttons, highlights |
| `aviart-gold-light` | `#E4C99A` | Hover states, gradients |
| `aviart-dark` | `#0A0A0A` | Backgrounds, headers |
| `aviart-charcoal` | `#1A1A1A` | Secondary dark |
| `aviart-cream` | `#F5F0E8` | Section backgrounds |
| `aviart-warm` | `#FAF7F2` | Page background |

### Fonts

- **Display**: `Cormorant Garamond` — headings, hero text, testimonials
- **Body**: `DM Sans` — paragraphs, labels, UI elements

### Custom CSS Utilities

| Class | Description |
|-------|-------------|
| `.btn-gold` | Outlined gold button |
| `.btn-gold-filled` | Filled gold button |
| `.btn-white` | Outlined white button (for dark backgrounds) |
| `.reveal` | Scroll-triggered fade-up animation |
| `.img-zoom` | Image scale-on-hover container |
| `.card-hover` | Card lift-on-hover effect |
| `.video-overlay` | Dark gradient overlay for video hero |
| `.gold-text` | Gradient gold text effect |

---

## 🌐 Pages / Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `HomePage` | Full homepage with hero, services, DR slider, testimonials |
| `/about` | `AboutPage` | About AVIART, stats |
| `/contact` | `ContactPage` | Contact form + info |
| `/destinos` | `DestinationsPage` | Destination grid |
| `/descubre-rd` | `RepublicaDominicanaDPage` | Dominican Republic guide |
| `/corporativo` | `CorporatePage` | Corporate travel services |
| `/viajes-a-la-medida` | `CustomTravelPage` | Custom travel packages |
| `/conectividad-aerea` | `AirConnectivityPage` | Air connectivity |
| `/experiencia-hotelera` | `HotelPage` | Hotels & tourism |
| `/privacy-policy` | `PrivacyPage` | Privacy policy |
| `/terms-conditions` | `TermsPage` | Terms & conditions |

---

## ☁️ Deploy to Vercel

### Option A — Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login
vercel login

# Deploy (from project root)
vercel

# Deploy to production
vercel --prod
```

### Option B — GitHub Integration (Recommended)

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repository
4. Vercel auto-detects Vite — no config needed
5. Click **Deploy**

The `vercel.json` already handles:
- ✅ SPA client-side routing rewrites (all paths → `index.html`)
- ✅ Long-term caching for hashed assets in `/assets/`
- ✅ Vite framework detection

### Environment Variables

No environment variables are required for the base app.

If you add a contact form backend, create a `.env` file:

```env
VITE_API_URL=https://your-api.com
VITE_EMAILJS_SERVICE_ID=your_service_id
```

> ⚠️ All `VITE_` prefixed variables are exposed to the browser. Never put secrets here.

---

## 🔧 Customization Guide

### Update contact info
Edit `src/components/Navbar.jsx` and `src/components/Footer.jsx` — look for the WhatsApp number and email.

### Add new destinations
In `src/pages/OtherPages.jsx`, find the `destinations` array in `DestinationsPage` and add entries.

### Update partner logos
In `src/components/Footer.jsx` and `src/pages/HomePage.jsx`, find the `partners` arrays.

### Connect a contact form
Replace the `<form>` in `ContactPage` with an API call (e.g., EmailJS, Formspree, or your own backend).

### Add Google Analytics
Install `react-ga4` and initialize in `src/main.jsx`:

```js
import ReactGA from 'react-ga4'
ReactGA.initialize('G-XXXXXXXXXX')
```

---

## 📦 Adding shadcn/ui Components

Since this project uses the shadcn/ui-compatible setup (Radix UI + CVA + Tailwind), you can add components manually:

```bash
# Example: add shadcn dialog
npx shadcn-ui@latest add dialog
```

Or copy components from [ui.shadcn.com](https://ui.shadcn.com) into `src/components/ui/`.

---

## 📄 License

This project is a frontend recreation for development/portfolio purposes.
All content, images, and brand identity belong to AVIART BUSINESS TRAVEL.
