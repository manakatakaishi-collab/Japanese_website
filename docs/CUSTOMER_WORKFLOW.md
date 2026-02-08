# Customer workflow (how to request safe updates)

This website is a multi-page static site built with Next.js and deployed on GitHub Pages.

## How to ask for a change (simple)
Write your request in plain language. Examples:
- “Change the first paragraph on the home page to: …”
- “Replace the hero photo on the About page with this new image.”
- “Create a new page called ‘Testimonials’ with 3 quotes and add it to the menu.”

If you want a consistent format, use `CHANGE_REQUEST_TEMPLATE.md`.

## The two-step approval system (important)
The agent will never change the site immediately.

### Step 1 — Plan proposal
The agent replies with:
- what it understood,
- the plan (steps),
- the files it will change,
- any missing info it needs.

To let it proceed, reply exactly:
`APPROVE PLAN`

### Step 2 — Review + publish
After the agent implements the change, it will:
- summarize the updates,
- tell you how to preview locally,
- run checks (`npm run lint` and `npm run build`),
- then ask if it may publish.

To publish to GitHub Pages, reply exactly:
`APPROVE PUBLISH`

## What you may be asked to provide
Depending on the request:
- The exact text you want to appear
- Images (files) + where to place them + alt text
- A page title + short meta description (1–2 sentences)
- For a new page: sections you want and any links/buttons

## How to preview changes locally
1) Open a terminal in the website folder.
2) Run:
   - `npm install` (first time only)
   - `npm run dev`
3) Open:
   - http://localhost:3000
4) Click through the pages you care about:
   - Home, About, Lessons, Booking

## How publishing works
When changes are pushed to the `main` branch, GitHub Actions builds the static site and deploys it to GitHub Pages.

If something looks wrong after publishing, tell the agent:
- what page is wrong,
- what you expected instead,
- and (if possible) a screenshot.

