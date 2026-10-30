# QuadraFroyn V27 — Premium visual refinement

This update builds on the supplied V26 project and keeps its existing React, TypeScript, Vite and route structure.

## Requested refinements
- Replaced the playful homepage hero imagery with a curated set of metropolitan high-rise, glass-tower and city-architecture photographs. Existing slide controls and transitions remain in place.
- Removed the external animated GIF from the Craft section. The visual is now an original CSS-rendered intelligence sculpture with orbital data rings, floating labels and a responsive reduced-motion fallback.
- Reworked Craft service-card media and layout so each image fills a consistent frame, icons share a common alignment line, and titles, descriptions and action buttons follow a predictable vertical rhythm.
- Reframed Visual Diary as a QuadraFroyn company journal. Location-led travel filters and copy are replaced with technology events, product innovation, research, engineering, UX, collaboration, cloud platforms and community topics. The existing gallery interaction is retained.
- Rebuilt desktop navigation dropdowns as full-width, two-column mega menus with editorial descriptions, relevant photographic panels, complete link lists, staggered entrances and responsive behavior. Mobile navigation remains separate and unchanged.

## Useful experience features retained / surfaced
1. Keyboard-accessible dropdowns and Escape-to-close behavior.
2. Mobile navigation drawer with focus handling and scroll locking.
3. Quick Explore command palette (Ctrl/Cmd + K).
4. Keyboard shortcut help panel on the homepage.
5. Reading / page-scroll progress indicators.
6. Back-to-top controls.
7. Share-page-link clipboard action.
8. Hero slide selection and pause/resume controls.
9. Horizontal capability and service carousels with previous/next controls.
10. Visual Diary topic filters.
11. Drag-to-scroll Visual Diary gallery.
12. Expand/collapse gallery presentation.
13. Responsive desktop, tablet and mobile layouts.
14. Reduced-motion accommodations for key animations.
15. Lazy-loaded secondary imagery and image decoding hints.

## Run locally
```bash
npm install
npm run dev
```

Production build:
```bash
npm run build
npm run preview
```

The project uses remote Unsplash image URLs for the new photography, so an internet connection is required for those images to load. Replace these URLs with locally licensed assets if the deployment must be fully self-hosted.
