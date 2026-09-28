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
3. **Content** — everything editable (experience, projects, skills,
   education, links) lives in `src/data.js`. No need to touch components for
   text changes.
4. **Personal project links** — `MERN Authentication System` and `VibeChat`
   in `src/data.js` currently link to your GitHub profile (no specific repo
   URL was available). Update each project's `url` field to the exact repo
   link once you have one.

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
  data.js            resume content — edit this for text changes
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
