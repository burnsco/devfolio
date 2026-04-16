# Portfolio Improvements

Targeted enhancements to the existing brutalist dark-theme portfolio. Order is roughly easiest → most involved. Aesthetic must remain consistent: red accent (`#ef4444`), Space Grotesk + IBM Plex Mono, bold uppercase, sharp edges.

## Quick wins

- [x] **1. Sitemap + robots wiring**
  - Add `@astrojs/sitemap` integration to `astro.config.mjs`
  - Set `site` URL to `https://coreyburns.ca`
  - Verify `robots.txt` references the sitemap
  - Acceptance: `dist/sitemap-index.xml` exists after build

- [x] **2. Custom 404 page**
  - `src/pages/404.astro` matching site aesthetic
  - Big outlined "404", short message, link back to home
  - No nav/footer chrome — keep it bold and minimal

- [x] **3. "Available now" status pill in hero**
  - Replace plain red eyebrow text with a pill: pulsing green dot + "Available for opportunities"
  - Subtle, top of hero, doesn't crowd the headline
  - Respect `prefers-reduced-motion` (no pulse if reduced)

- [x] **5. Reading progress bar**
  - Fixed thin red bar at top of viewport (above nav)
  - Width tracks scroll position
  - Hidden during hero (or starts at 0), fills through rest of page

## Medium-effort

- [x] **6. Section numbering**
  - Prefix section eyebrows with `01 —`, `02 —`, etc.
  - Apply to: Projects (01), Skills (02), About (03), Contact (04)
  - Reinforces brutalist editorial feel

- [x] **7. Featured / spotlight project**
  - First 1–2 projects render as a larger spotlight card spanning more grid columns
  - Add `featured?: boolean` to `Project` type, mark `agents` and/or `plum`
  - When "All" filter active, spotlight gets prominence; when filtering, behaves like normal card

- [x] **8. Tech marquee**
  - Infinite horizontal scroll ticker between Hero and Projects sections
  - Pulls from `skills.ts`, shows icon + name pairs
  - CSS-only animation (no JS), pauses on hover, respects reduced-motion
  - Subtle: low opacity, monochrome icons

- [x] **9. Command palette (Cmd+K)**
  - Modal triggered by Cmd/Ctrl+K
  - Searchable list: nav sections + all project titles
  - Enter scrolls to section / opens project URL
  - Keyboard nav (arrows, enter, esc)
  - Small "⌘K" hint in nav bar

## Out of scope (this pass)

- Project preview thumbnails (#10) — needs 25 screenshots
- Light theme toggle (#11) — design identity is dark
- Email copy-to-clipboard (#4) — deferred per user choice
