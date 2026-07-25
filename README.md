# Manaka Japanese Website

Customer-facing website built with Next.js App Router and exported as static files for GitHub Pages.

## Quick Start

1. Install packages:
   - `npm install`
2. Start local preview:
   - `npm run dev`
3. Open:
   - `http://localhost:3000`

## Main Page URLs

- English:
  - `/en`
  - `/en/about`
  - `/en/lessons`
  - `/en/booking`
- Japanese:
  - `/ja`
  - `/ja/about`
  - `/ja/lessons`
  - `/ja/booking`

Note: unprefixed routes (`/`, `/about`, `/lessons`, `/booking`) exist for compatibility but are marked as non-indexable for search engines.

## Useful Commands

- `npm run dev`
  - Starts local preview website.
- `npm run lint`
  - Checks code quality warnings/errors.
- `npm run build`
  - Builds static output into `out/` for deployment.

## Deployment

- GitHub Actions deploys automatically when changes are pushed to `main`.
- Workflow file:
  - `.github/workflows/deploy-pages.yml`

## Editing Guides

- Content location map:
  - `docs/CONTENT_MAP.md`
- Customer-safe workflow:
  - `docs/CUSTOMER_WORKFLOW.md`
- Change request template:
  - `CHANGE_REQUEST_TEMPLATE.md`
