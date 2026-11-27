# Dhwanit Parani — Portfolio

A backend-developer portfolio built with React + Vite. Themed around APIs and
terminals (an animated `curl` response in the hero, projects listed as
endpoints) instead of a generic template look — with scroll-triggered
animations, a cursor-following glow, an animated background, and a live
typewriter/stat-counter hero to make it feel current rather than static.

## What's animated

- Hero: typed JSON `curl` response, a rotating "building ___" typewriter,
  animated stat counters, and a slow-floating terminal card
- Every section reveals on scroll (staggered per item) via `IntersectionObserver`
- Nav: scroll-progress bar + active-section highlighting
- A soft cursor-spotlight and slow-drifting background orbs run behind everything
- A "back to top" button fades in once you've scrolled
- All motion respects `prefers-reduced-motion`

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Before you deploy

1. **Photo** — `src/components/About.jsx` currently renders an SVG "DP"
   placeholder inside `.avatar-frame`. Replace it with:
   ```jsx
   <img src="/your-photo.jpg" alt="Dhwanit Parani" />
   ```
   and drop `your-photo.jpg` into `public/`.
2. **Resume** — add your PDF as `public/resume.pdf` (the nav button and the
   `resumeUrl` in `src/data.js` already point to `/resume.pdf`).
3. **Content** — `src/data.js` provides fallback content; with Supabase
   configured, edit the portfolio rows in Supabase instead.
4. **Supabase content** — the portfolio loads its profile, experience,
   projects, skills, and education from Supabase when configured. Without a
   connection it continues to use `src/data.js`.

## Connect Supabase

1. Create a Supabase project.
2. In the Supabase SQL Editor, run [`supabase/setup.sql`](./supabase/setup.sql).
   It creates the portfolio tables, enables row-level security with public
   read-only policies, and inserts the current portfolio details.
3. Copy `.env.example` to `.env` and set `VITE_SUPABASE_URL` and
   `VITE_SUPABASE_ANON_KEY` from the project's API settings. The public anon
   (or publishable) key is intended for browser use; never use a `service_role`
   key in this app. Vite loads this same `.env` file for local development and
   production builds.
4. Restart the dev server. Edit portfolio rows in Supabase Table Editor; the
   site reads the latest published content on page load.
5. In Vercel, add both variables in Project Settings → Environment Variables
   and enable them for the Production environment (and Preview/Development if
   needed). The ignored local `.env` file is not sent with Git deployments;
   Vercel can import the `.env` file once, or you can enter the values there.

Vite embeds `VITE_` values in the browser bundle, so use only the Supabase
project URL and public anon/publishable key. Never put a `service_role` key in
an environment file used by this frontend.

The public policies only allow `SELECT`. Manage content using the Supabase
dashboard, not through the public portfolio page.

## Deploy to GitHub Pages (same host as your current site)

`vite.config.js` sets `base: "/Portfolio/"` to match
`https://dhwanit007.github.io/Portfolio/`. If you rename the repo, update
that value to `"/<repo-name>/"`.

```bash
npm run build
npm run deploy   # publishes dist/ to the gh-pages branch via gh-pages
```

Then in the repo's GitHub Settings → Pages, set the source branch to
`gh-pages` (first deploy only).

## Structure

```
src/
  data.js            local fallback content
  portfolioContent.js Supabase content queries and mapping
  supabase.js        Supabase client configuration
  App.jsx            page layout / section order
  index.css          design tokens + all styling
  components/
    Nav.jsx
    Hero.jsx         animated terminal/JSON hero
    About.jsx
    Experience.jsx   work history timeline
    Projects.jsx      projects rendered as API endpoints
    Skills.jsx
    Education.jsx
    Contact.jsx
```

`supabase/setup.sql` is safe to re-run for the included rows; it upserts those
rows and does not remove any extra rows you add later.
