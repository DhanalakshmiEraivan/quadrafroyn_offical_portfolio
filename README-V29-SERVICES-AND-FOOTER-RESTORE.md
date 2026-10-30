# Quadrafroyn V29 — Services Experience & Footer Restore

## Changes in this revision

- Restored a dedicated bottom-most footer close with the Quadrafroyn brand heading, privacy policy, terms of service, accessibility, and copyright details.
- Reworked the desktop navigation mega-menu into a white, wide editorial panel with staggered link reveals, a fitted “Explore all …” CTA, improved image treatment, and responsive layout.
- Made the dropdown state click-driven and explicitly hidden whenever its group is not open; route changes, link selection, outside clicks, and Escape close it.
- Rebuilt `/services` as a scroll-led services experience: hero, approach strip, problem cards, mission section, six capability panels, process cards, comparison, accordion FAQs, and final CTA.
- Kept the Quadrafroyn green/ink visual identity and used original project content and images rather than copying the reference site's text or assets.
- Removed the remaining Digital Marketing entry from the legacy static HTML asset.

## Run locally

1. Install Node.js 20+ (Node.js 22 is recommended).
2. From this folder run `npm install`.
3. Start the dev server with `npm run dev`.
4. For a production check run `npm run build`.

The build could not be executed in the packaging environment because npm registry access timed out and the dependencies were not cached locally. Install dependencies in a network-enabled environment before running the build.
