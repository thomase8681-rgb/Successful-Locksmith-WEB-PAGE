# Galvin Locksmiths — Landing Page

Conversion-focused single-page site for Galvin Locksmiths (Greater Manchester).
Built with **Next.js 14 (App Router) + TypeScript + Tailwind CSS** and
`lucide-react` icons.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

```bash
npm run build && npm run start   # production build
```

## Where to drop real assets

Image placeholders live in `/public` as SVGs. Replace them with real photos
(keep the same filename, or change the filename and update the `src` in the
component):

| File              | Used in                     | Suggested content                     |
| ----------------- | --------------------------- | ------------------------------------- |
| `public/hero.svg` | `components/Hero.tsx`       | Locksmith working on a front door     |
| `public/door.svg` | `components/FeatureStrip.tsx`| A repaired / realigned door           |
| `public/nathan.svg`| `components/WhyUs.tsx`      | Nathan and the work van               |

## Things to configure (`lib/constants.ts`)

- **`GOOGLE_MAPS_API_KEY`** — add a real Google Maps Embed API key, or replace
  the iframe `src` in `components/ServiceArea.tsx` with a keyless
  *Share → Embed a map* link from Google Maps. With the placeholder key the map
  shows a "for development purposes" overlay (expected).
- **`INSTAGRAM_URL`** / **`X_URL`** — currently placeholder `#` links.
- Phone, WhatsApp and Facebook links are already wired up.

## Structure

```
.
├── app/
│   ├── globals.css        # Tailwind + shared component classes, smooth scroll
│   ├── layout.tsx         # Inter font, SEO metadata + viewport
│   └── page.tsx           # Single page composing all sections
├── components/
│   ├── Header.tsx         # "use client" — sticky nav + mobile menu (+ WhatsApp glyph)
│   ├── Hero.tsx
│   ├── StatsBar.tsx
│   ├── Services.tsx       # 8 service cards
│   ├── FeatureStrip.tsx
│   ├── WhyUs.tsx
│   ├── Pricing.tsx
│   ├── Reviews.tsx
│   ├── ServiceArea.tsx    # area tags + Google Map iframe
│   ├── Faq.tsx            # "use client" — accessible accordion
│   ├── FinalCta.tsx
│   └── Footer.tsx
├── lib/constants.ts       # phone / WhatsApp / nav / areas / map key
├── public/                # image placeholders
└── tailwind.config.ts, tsconfig.json, next.config.js, postcss.config.js
```

Only `Header` and `Faq` are client components; everything else is a server
component. Nav links smooth-scroll to anchors; the accordion and mobile menu
are keyboard-accessible with appropriate ARIA.

> All markup, copy and styling is original to this project.
