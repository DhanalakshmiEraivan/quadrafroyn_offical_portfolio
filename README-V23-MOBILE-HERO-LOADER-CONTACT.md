# QuadraFroyn Solutions — V23 Complete Project Update

## Included in this release
- Route-wide mobile hero visibility safeguards for the homepage and inner pages.
- Contact page redesigned with a calm editorial split hero, responsive photography, clearer form hierarchy, and cleaner information cards.
- Intro loader with a real eased 0–100% progress indicator, animated wordmark, Q emblem, orbit details, and an optional user-triggered audio chime (sound is off by default).
- Preserves the V22 Craft/Q alignment fixes, cinematic home image carousel, interactive 3D card carousel, quick tools, keyboard shortcuts, and scroll-driven freight services scene.
- Responsive layout safeguards and reduced-motion support.

## Run locally
1. Install Node.js LTS.
2. Extract the ZIP.
3. Open a terminal in `QuadraFroyn_V20_Complete_Project`.
4. Run `npm install`.
5. Run `npm run dev`.
6. Run `npm run build` to create a production build.

## Notes
- Hero images and freight/card videos use externally hosted media; they require an internet connection.
- The loading chime is optional and only plays after a visitor presses “Enable sound”; no sound autoplays.
- Contact form online delivery requires the existing `/api/send-email` endpoint to be configured on the deployment. If not configured, the page presents an email fallback.
- This archive contains source files and configuration, not `node_modules`.
