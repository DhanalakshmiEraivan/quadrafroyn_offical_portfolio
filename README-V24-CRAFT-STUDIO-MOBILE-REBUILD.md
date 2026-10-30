# QuadraFroyn Solutions — V24 Craft, Studio & Mobile Rebuild

This release builds on the complete V23 project and keeps the existing React + TypeScript + Vite architecture, routes, page content, and backend integrations.

## Major rebuilds

- **The Craft section** now uses a deliberate two-column composition: a fully visible sculpted lime Q mark, orbit details, consistent service-card sizing, aligned card content, snap-scrolling, and working previous/next controls. On mobile the Q becomes a restrained background graphic so it does not compete with the cards.
- **Inside the Studio** is rebuilt as a horizontal 3D card-cylinder showcase on a black cinematic stage. It includes video-textured concept cards, metallic chip treatment, layered circles, reversible front/back faces, pointer tilt with inertia, automatic rotation, pause/play, previous/next, reset, selection indicators, touch swipe, and keyboard shortcuts. Card details are fictional masked demo details; no real payment data is used.
- **Mobile hero safeguard** adds a route-wide small-screen override for hero visibility, reveal states, transforms, text and actions to prevent content that was visible on desktop from disappearing on mobile.
- The prior cinematic home image slideshow and play/pause controls remain available.
- The Services freight section keeps the supplied handling video as a scroll-scrubbed clip rather than drawing vehicle movement in CSS. Its service strip, speed readout and large background typography remain scroll driven.
- The rebuilt Contact page, utility dock, print/save-PDF, share, email copy, text sizing, contrast, reduced-motion, route links and keyboard shortcuts are retained.

## Run locally

1. Install Node.js LTS.
2. Extract this ZIP.
3. Open the extracted project folder in VS Code.
4. In the terminal run `npm install`.
5. Run `npm run dev` and open the local URL Vite prints.
6. Run `npm run build` to create the production bundle.

## Notes

- Internet access is needed for externally hosted Unsplash images and video clips.
- The Contact form needs the existing `/api/send-email` endpoint configured for online email delivery; the page includes a pre-filled email fallback when delivery is not configured.
- Video autoplay is muted and respects reduced-motion preferences where applicable.
- The current environment could not complete `npm install` within the available time, so a fresh production build could not be verified here. Run the build locally after installing dependencies.
