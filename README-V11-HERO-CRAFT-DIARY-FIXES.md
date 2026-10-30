# QuadraFroyn V11 — Hero, Craft and Visual Diary Refinement

This update refines the homepage while preserving the existing React + TypeScript + Vite structure and existing navigation.

## What changed
- Rebalanced the homepage hero into a larger, edge-reaching cityscape with a soft white blend, a lime angled lower accent, and tighter spacing beneath the fixed navigation.
- Reduced the oversized Q ring and aligned the craft/service cards into a consistent horizontal rail with responsive sizing and cleaner shadows.
- Added contextual destinations to the craft cards and the five What We Unlock cards using routes already present in the application.
- Refined the five capability cards with clearer image treatment and visible Explore links.
- Kept the visual diary as a horizontal image-led gallery and added a live active-frame counter, scroll progress indicators, and clickable frame navigation.
- Added mobile/tablet-specific layout overrides and reduced-motion support.

## Run locally
1. Install Node.js 20+.
2. From this folder run `npm install`.
3. Start development with `npm run dev`.
4. Check types with `npm run typecheck` and create a production build with `npm run build`.

The homepage imagery uses remote Unsplash image URLs, so internet access is needed for those images to load.
