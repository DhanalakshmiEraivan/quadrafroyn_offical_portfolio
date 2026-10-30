# QuadraFroyn V16 — Homepage & Visual Gallery Polish

This update preserves the existing React/Vite project and its routes, interactions, navigation, hero slideshow, capability carousel, craft controls, and visual diary navigation.

## Changes
- Removed the extra top padding above the homepage hero image and aligned the hero visual with the section start below the existing header.
- Rebalanced the hero's desktop and mobile heights while preserving the current headline, CTA, slideshow, and controls.
- Fixed the craft section stacking order so service cards sit above the oversized Q letter and remain interactive.
- Updated the “What we unlock” imagery to higher-resolution enterprise technology, analytics, infrastructure, and studio imagery from Unsplash; added descriptive alt text and async decoding.
- Refined “Inside the studio” as a cinematic horizontal visual journal with editorial image proportions, subtle staggered composition, restrained green light sweeps, image zoom, caption movement, keyboard focus support, and reduced-motion handling.

## Run locally
1. Install Node.js (current LTS recommended).
2. Open a terminal in the `project` directory.
3. Run `npm ci`.
4. Copy `.env.example` to `.env.local` if your local setup requires environment values, and fill in the values privately.
5. Run `npm run dev`.
6. Verify a production bundle with `npm run build`.

Images in these sections are remotely loaded from Unsplash, so internet access is required to display them.
