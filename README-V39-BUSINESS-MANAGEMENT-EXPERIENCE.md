# QuadraFroyn V39 — Business Management System Service Page

This update replaces the `/business-management` service page with a bespoke white editorial BMS experience while preserving the rest of the website and its shared layout/routing.

## Page route

`/business-management`

## What's included

- Cinematic hero with a custom CSS/SVG dashboard composition and floating UI notes.
- Four interactive business modules: operations, sales & customers, finance & reporting, and inventory & workflows.
- Three responsive dashboard/workflow concept showcases.
- Clear concept labels and disclaimers; no fabricated client projects, testimonials, metrics, or results are presented as real.
- Four delivery principles and a contact-focused final CTA.
- Scroll-triggered reveal behavior, hover interactions, responsive layouts, and `prefers-reduced-motion` support.
- Existing site header, footer, routes, and shared components are retained.

The dashboard numbers and project interfaces are illustrative demonstration content, not live data or verified client results.

## Run locally

1. Extract the ZIP.
2. Open a terminal in the `quadrafroyn_work` folder.
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Open the local URL printed by Vite and navigate to `/business-management`.
6. For a production build, run `npm run build`.

## Verification note

The source update and ZIP archive integrity were checked. A production build could not be completed in the current environment because Vite is missing from the pre-existing, incomplete `node_modules` installation. Run `npm install` locally before building.
