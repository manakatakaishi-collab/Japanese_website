# Content map (where to edit)

## Pages → Components
- Localized home:
  - `app/[lang]/page.tsx`
  - `components/Hero.tsx`
- Localized about:
  - `app/[lang]/about/page.tsx`
  - `components/Journey.tsx`
- Localized lessons:
  - `app/[lang]/lessons/page.tsx`
  - `components/Lessons.tsx`
- Localized booking:
  - `app/[lang]/booking/page.tsx`
  - `components/Booking.tsx`

## Compatibility routes (non-indexed)
- English compatibility pages:
  - `app/page.tsx`
  - `app/about/page.tsx`
  - `app/lessons/page.tsx`
  - `app/booking/page.tsx`
- Purpose:
  - Keep old links working while search engines use `/en/*` and `/ja/*`.

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
