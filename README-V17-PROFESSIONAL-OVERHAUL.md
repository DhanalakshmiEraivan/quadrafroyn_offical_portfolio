# Quadrafroyn Solutions — V17 Professional Overhaul

## What changed

- Rebuilt the Home page **The Craft** layout as a balanced responsive grid so the Q visual, horizontally scrollable capability cards, and controls align consistently instead of overlapping.
- Reframed **Inside the Studio** around QuadraConverter, Quadra AI Resume Builder, ARVEXA 2026, connected data systems, product design, and engineering workbench visuals.
- Added a scroll-driven sticky services scene to the Services page. Its freight handling video is scrubbed by scroll position (not autoplayed); service copy and capability cards slide in horizontally in a high-contrast black/white/cobalt composition.
- Added responsive layouts for tablet and mobile, reduced-motion CSS handling, scroll-speed readout, and contact links on each capability card.
- Retained existing navigation, product pages, galleries, and the site's current React/Vite architecture.

## Run locally

1. Install Node.js LTS (Node 20+ recommended).
2. Extract this ZIP.
3. Open a terminal in the `project` directory.
4. Run `npm install`.
5. Run `npm run dev` and open the URL printed by Vite.
6. Before deployment, run `npm run build` and resolve any environment-specific warnings.

## Notes

- The freight clip is hosted remotely and requires network access. A poster image is configured as the initial fallback.
- No external animation library was added; the scene uses `requestAnimationFrame` and video seeking.
- The services scene uses the requested fictional/no-third-party-brand framing, while the rest of the website remains branded for Quadrafroyn Solutions.
