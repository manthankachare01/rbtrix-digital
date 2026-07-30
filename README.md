# RBTRIX Digital — Product Catalog

A premium, tablet-first digital sales catalog built with React, Vite, and Tailwind CSS.
No backend — every page renders from local JSON files, so the whole site can be updated
by editing data, not code.

---

## 1. Project Setup

### Requirements
- Node.js 18 or newer
- npm 9 or newer

### Install dependencies
```bash
npm install
```

### Run the development server
```bash
npm run dev
```
This starts a local server (usually `http://localhost:5173`) with hot reload.

### Build for production
```bash
npm run build
```
This creates an optimized, code-split build in the `dist/` folder.

### Preview the production build locally
```bash
npm run preview
```

---

## 2. Folder Structure

```
src/
  assets/
    images/       → placeholder + general images
    icons/        → any extra icon assets
    logo/         → your logo files (full lockup + icon mark)
  components/
    common/       → small reusable widgets (theme toggle, WhatsApp button, scroll-to-top)
    cards/        → card components (ProductCard, CategoryCard, DeliveredCard, TestimonialCard)
    gallery/      → Lightbox (fullscreen image viewer)
    layout/       → Navbar, Footer
    ui/           → SectionHeading, Accordion
    sections/     → homepage sections (Hero, HowItWorks, ComparisonTable, etc.)
  pages/          → one component per route (Home, Products, ProductDetail, ...)
  layouts/        → (reserved for future shared page layouts)
  hooks/          → custom hooks (e.g. useScrollLock)
  data/           → all JSON content files — this is what you'll edit most often
  animations/     → ScrollReveal and StaggerGrid motion helpers
  utils/          → whatsapp.js (WhatsApp link builder), images.js (placeholder → image map)
  routes/         → AppRoutes.jsx (route definitions + page transitions)
  styles/         → index.css (Tailwind layers + global styles)
public/
  icons/          → generated favicon / PWA icons
  manifest.webmanifest → PWA manifest
  sw.js           → offline service worker
```

**Reusable components, one JSON source of truth per content type** — this is the pattern
to follow if you extend the site later.

---

## 3. Updating Images

All images currently point to a single placeholder file:

```
src/assets/images/placeholder.png
```

Every product, category, gallery, delivered-product, and testimonial image in the JSON
files uses the keyword `"placeholder"`. That keyword is resolved to a real file through:

```
src/utils/images.js
```

### To replace the placeholder everywhere at once
Simply replace `src/assets/images/placeholder.png` with your own image (keep the same
filename), and every page updates automatically.

### To use different images per product/category
1. Add your image file into `src/assets/images/`, e.g. `nfc-stand-1.jpg`.
2. Open `src/utils/images.js` and import + register it:
   ```js
   import nfcStand1 from '../assets/images/nfc-stand-1.jpg';

   const imageMap = {
     placeholder,
     'nfc-stand-1': nfcStand1,
   };
   ```
3. In the relevant JSON file (e.g. `src/data/products.json`), change the image field to
   the new key:
   ```json
   "image": "nfc-stand-1"
   ```

This keeps all image references centralized — you never need to touch component code.

### Logo & Favicon
Your logo lives at `src/assets/logo/logo-full.png` (used in the Navbar and Footer) and
`src/assets/logo/logo-icon.png` (the icon mark only). Favicons and PWA icons are already
generated from your logo and live in `public/icons/` and `public/favicon.ico`. To update
them later, replace these files with new exports at the same sizes:
- `favicon-16.png`, `favicon-32.png` — 16×16 / 32×32
- `apple-touch-icon.png` — 180×180
- `icon-192.png`, `icon-512.png` — 192×192 / 512×512

---

## 4. Updating Data (No Code Changes Needed)

All content lives in `src/data/*.json`. Edit these files directly in any text editor —
the site rebuilds automatically in dev mode.

| File | Powers |
|---|---|
| `products.json` | Products page + individual product detail pages |
| `categories.json` | Categories page + individual category detail pages |
| `gallery.json` | General image/video gallery entries |
| `delivered.json` | Delivered Products page |
| `testimonials.json` | Testimonial cards on the homepage |
| `faq.json` | FAQ accordion on the homepage |

### Editing an existing product
Open `src/data/products.json`, find the product by its `"id"`, and edit any field —
`name`, `shortDescription`, `description`, `features`, `bestFor`, `material`, `sizes`,
`finish`, `printingType`, `nfcType`, `dimensions`, `applications`, `faqs`, etc.

### Editing WhatsApp number
Open `src/utils/whatsapp.js` and update `WHATSAPP_NUMBER` (country code + number, no `+`
or spaces).

---

## 5. Adding a New Product

1. Open `src/data/products.json`.
2. Copy an existing product object and paste it as a new entry in the array.
3. Give it a unique `"id"` (used in the URL, e.g. `/products/your-new-id`) — use lowercase
   with hyphens, no spaces.
4. Fill in all fields: `name`, `shortDescription`, `description`, `image`, `gallery`,
   `features`, `bestFor`, `material`, `sizes`, `finish`, `customization`, `printingType`,
   `nfcType`, `dimensions`, `applications`, `faqs`.
5. Save. The new product automatically appears on the Products page, in search/filter
   results, and gets its own detail page at `/products/your-new-id` — no code changes
   required.

---

## 6. Adding a New Category

1. Open `src/data/categories.json`.
2. Copy an existing category object and paste it as a new entry.
3. Give it a unique `"id"` (e.g. `pet-grooming`), matching the URL `/categories/pet-grooming`.
4. Fill in `name`, `description`, `image`, `banner`, `productDesigns`, `stickerDesigns`,
   `cardDesigns`, `mockups`, `gallery`, `videos`.
5. Save. It automatically appears on the Categories page, in search, and gets its own
   detail page with image galleries and lightbox viewing — no code changes required.

---

## 7. Performance & PWA

- **Code splitting**: every page is lazily loaded (`React.lazy` + `Suspense`), so users
  only download the code for the page they're viewing.
- **Image lazy loading**: gallery, product, and category images use `loading="lazy"`.
- **Installable app**: the site is installable on tablets and phones via the browser's
  "Add to Home Screen" / "Install App" prompt, using `public/manifest.webmanifest`.
- **Offline support**: `public/sw.js` is a service worker that caches visited pages so
  the catalog keeps working with a weak or no connection during in-person visits.
- **Dark mode**: toggled via the navbar and persisted in `localStorage`, respecting the
  visitor's system preference on first visit.

---

## 8. Deployment (Vercel)

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and click **New Project**.
3. Import your repository.
4. Vercel auto-detects a Vite project. Confirm these settings:
   - **Build command**: `npm run build`
   - **Output directory**: `dist`
5. Click **Deploy**. Your site will be live at a `*.vercel.app` URL within a minute.
6. To use your own domain, go to your project's **Settings → Domains** in Vercel and add it.

Every future update: push to your GitHub branch, and Vercel redeploys automatically.

---

## 9. Tech Stack

- **React 19 + Vite** — app framework and build tool
- **Tailwind CSS** — utility-first styling, with a neutral premium token system
  (see `tailwind.config.js`)
- **Framer Motion** — scroll reveals, stagger animations, page transitions
- **React Icons** — all icons (Feather + Font Awesome sets)
- **Swiper.js** — touch-friendly image gallery on category pages
- **React Router** — client-side routing with animated page transitions

---

## 10. Notes

- All product, category, delivered, and testimonial images currently use one shared
  placeholder — this is intentional for early development. See section 3 above to swap
  in real photography whenever it's ready.
- The Live Mockup Preview on the homepage is a frontend-only text overlay (no image
  generation) — it's meant to give a quick visual sense of branding placement during a
  live pitch, not a final design proof.
