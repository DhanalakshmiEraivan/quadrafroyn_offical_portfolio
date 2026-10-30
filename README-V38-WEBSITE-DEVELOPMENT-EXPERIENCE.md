# QuadraFroyn V38 — Website Development Services Experience

This update replaces the `/services/website-development` page implementation while preserving the site's existing React + TypeScript + Vite structure, route, shared header/footer, and other pages.

## What's included

- Oversized editorial hero with animated headline, responsive browser mockup, Unsplash workspace imagery, and restrained pointer-responsive parallax.
- Minimal philosophy strip and animated horizontal principles ticker; no fabricated client logos or statistics.
- Editorial introduction and seven alternating service narratives: business websites, custom websites, e-commerce, web applications, landing pages, redesign/optimization, and CMS/headless.
- Interactive four-stage discover/design/develop/launch process with scroll-responsive progress.
- Technology capability overview (React, Next.js, TypeScript, HTML/CSS/JavaScript, Shopify, WordPress, headless CMS, Node.js and APIs).
- Concept portfolio previews clearly labelled as illustrative—not completed client work.
- Keyboard-accessible before/after comparison slider, marked as an illustrative design study.
- Trust principles, quality checklist, honest testimonial/process statement, accessible FAQ accordion, and working contact/email CTAs.
- Responsive styles, focus-visible treatment, image alt text/lazy loading where appropriate, and reduced-motion support.
- Page-specific document title and meta description.

## Run locally

Requirements: a current Node.js LTS release and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. The page route is `/services/website-development`.

For a production build:

```bash
npm run build
```

## Notes

- The hero and supporting photography are loaded from Unsplash, so an internet connection is required for those remote images.
- The website/browser UI mockups are original illustrative components built in the project. They are not presented as verified client case studies.
- This environment did not finish `npm ci` within the available execution window, so a successful production build and live-browser visual test could not be confirmed here. Please run the build command after installing dependencies locally.
