# U.S. Next — Landing Page

Premium, conversion-focused, mobile-first landing page for **U.S. Next** — a local
handyman, remodeling, repair, and home improvement business. Built for Google Ads
traffic with **phone calls as the only conversion goal**.

- **Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS v4
- **Phone CTA (everywhere):** `tel:+15129860287` → (512) 986-0287
- **Fully static** — every route is prerendered for fast loading.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Project structure

```
app/
  layout.tsx            # SEO metadata, fonts, viewport/theme color
  page.tsx              # Landing page + LocalBusiness & FAQ JSON-LD
  globals.css           # Design tokens (navy/charcoal/amber) + legal-prose styles
  privacy-policy/       # Compliance page
  terms-of-service/     # Compliance page
  sitemap.ts robots.ts  # SEO
  not-found.tsx         # 404 with call CTA
  icon.svg              # Favicon
components/             # Header, Hero, Services, WhyUs, Gallery, Reviews,
                        # ServiceArea, Faq, FinalCta, Footer, StickyCallButton, ...
lib/
  site.ts               # Business name, phone, links (single source of truth)
  faqs.ts               # FAQ content (shared by UI + structured data)
public/images/          # project-1..4.jpg  ← replace placeholders with real photos
```

## Updating content

- **Phone number / links:** edit `lib/site.ts`.
- **FAQ:** edit `lib/faqs.ts` (updates both the accordion and the SEO structured data).
- **Services / Why Us / Reviews:** edit the array at the top of each component.
- **Gallery photos:** drop real images at `public/images/project-1.jpg` … `project-4.jpg`
  (4:5 ratio works best). The grid will use them automatically — no code changes needed.

## Analytics & Google Ads

The Privacy Policy already discloses cookies, analytics, Google Ads conversion
tracking, and remarketing. Add your tracking script(s) in `app/layout.tsx`
(e.g. `next/script` with `strategy="afterInteractive"`).

---

Website by [Vuelvete Digital](https://vuelvetedigital.com).
