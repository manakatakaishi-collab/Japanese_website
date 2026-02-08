# Content map (where to edit)

## Pages → Components
- `/` (Home)
  - `app/page.tsx`
  - `components/Hero.tsx`

- `/about` (About)
  - `app/about/page.tsx`
  - `components/Journey.tsx`

- `/lessons` (Lessons & Fees)
  - `app/lessons/page.tsx`
  - `components/Lessons.tsx`

- `/booking` (Contact / Booking)
  - `app/booking/page.tsx`
  - `components/Booking.tsx`

## Global layout / SEO
- Layout shell + global metadata
  - `app/layout.tsx`
- Per-page metadata
  - `app/**/page.tsx`
- Sitemap / robots
  - `app/sitemap.ts`
  - `app/robots.ts`

## Navigation / footer
- Header navigation
  - `components/Navbar.tsx`
- Footer links and contact info
  - `components/Footer.tsx`

## Styling / theme
- Tailwind import + theme variables + shared CSS classes
  - `app/globals.css`

## Images and other static assets
- Local images
  - `public/images/*`
- When referencing local assets in components, prefer:
  - `withBasePath('/images/<file>')` from `lib/base-path.ts`

