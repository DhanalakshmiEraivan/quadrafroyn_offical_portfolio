# QuadraFroyn Solutions — V19 Cinematic Experience

This revision updates the existing project, rather than creating a demo. Existing routes, content modules, contact/quote UI, and the React/Vite application structure are preserved.

## Main changes

### Craft section
- Rebuilt the Craft services area as a properly constrained grid with a horizontal snap carousel.
- Standardized card widths, minimum heights, padding, spacing, borders, and text rhythm.
- Kept the oversized green Q motif decorative and behind the cards so it no longer shifts the card layout.
- Added responsive mobile/tablet layouts, horizontal scrollbar hiding, keyboard focus states, and hover lift.

### Inside the Studio
- Replaced payment-card imagery and fake financial details with six QuadraFroyn-related disciplines: QuadraConverter, QuadraAI, ARVEXA, connected data, product experience, and software engineering.
- Added a 3D horizontal carousel with depth layering, perspective, parallax tilt, a gentle auto-rotation, touch swipe, click-to-select, previous/next, pause/resume, reset, and progress indicators.
- Cards flip to reveal useful project descriptions; the active project and keyboard focus are clearly indicated.
- Reduced-motion users get transition-safe behavior, and the layout adapts for phones/tablets.

### Services scroll hero
- The freight handling clip is scrubbed from scroll position rather than played as a normal video.
- Scroll track length is calculated from the viewport and strip width; the clip phase uses 2.4 viewport heights and the services strip enters after it.
- Added smoothed scroll-speed readout, reverse scrubbing, mobile framing, service-card text sweep, and a lime accent that matches the site's identity.
- The truck/stacker motion remains in the supplied video footage, not synthetic CSS shapes.

### Site-wide additions (available on every route)
1. Reading progress indicator.
2. Skip-to-main-content accessibility link.
3. Floating Quick Tools panel.
4. Increase text size.
5. Decrease text size.
6. Reset text size.
7. High-contrast viewing toggle.
8. Reduced-motion toggle.
9. Copy the company contact email.
10. Native share or copy-page-link fallback.
11. Print / Save as PDF action.
12. One-click back-to-top control.
13. Quick navigation links to Home, Services, Work, Products, and Contact.
14. Keyboard shortcuts: Alt+0 top, Alt+1 Home, Alt+2 Services, Alt+3 Contact, Alt+U Quick Tools.
15. Carousel keyboard navigation (left/right), pause/play shortcut, focus outlines, and touch swipe.

## Run locally

1. Install Node.js LTS.
2. Extract the ZIP and open the `project` folder in VS Code.
3. Open a terminal in that folder.
4. Run `npm install`.
5. Run `npm run dev`.
6. Open the local URL shown by Vite.
7. To create a production build, run `npm run build`.

The scroll-driven freight video uses remote MP4 assets and therefore needs an internet connection. If the host blocks video delivery, the supplied poster remains as the initial fallback.

## Verification note

The source was updated and packaged. A production build/typecheck could not be confirmed in this environment because the preloaded `node_modules` directory is incomplete and `npm install` timed out. Run the commands above in a normal Node.js environment to install dependencies and verify the build.
