# V21 — Responsive & Cinematic Upgrade

## Included
- Mobile-first visibility safeguards for the homepage and shared page heroes, plus tablet and phone layout corrections.
- Rebuilt contact-page messaging and refined responsive form/details/social layout while preserving existing form handling.
- Services-page scroll-scrubbed freight showcase retained and tuned for mobile framing and horizontal-strip presentation. The vehicle animation remains in the provided video clip, not CSS-drawn vehicles.
- Site-wide motion polish, touch-friendly behavior, keyboard focus treatment, reduced-motion support, and overflow protection.
- Existing routes, content, product pages, tools, navigation, and project structure preserved.

## Run
1. Install Node.js LTS.
2. Extract this folder.
3. Run `npm install`.
4. Run `npm run dev` and open the URL printed by Vite.
5. Verify production compilation with `npm run build`.

## Important
The contact form calls `/api/send-email`; configure that endpoint on your hosting provider for actual delivery. If it is not configured, the page offers a mailto fallback. External Unsplash and freight video assets require internet access.
