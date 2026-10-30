# Quadrafroyn Solutions — fixes in this revision

## Changes
- Fixed the `Play is not defined` runtime crash by importing the Lucide `Play` icon in `src/pages/DetailPage.tsx`.
- Enabled React Router's `v7_relativeSplatPath` future flag on `BrowserRouter` to opt into the upcoming splat-relative route behavior.
- Added the supplied Quadrafroyn logo as the favicon and a theme color to `index.html`, addressing the missing `/favicon.ico` request.
- Updated the Products hero image to a developer/product-studio visual and strengthened contrast/visibility for the “QUADRAFROYN SOLUTIONS / PRODUCT STUDIO” kicker and headline.
- Expanded the Services page with Full-Stack Development, Website Development, Web App Development, App Development, UI/UX & Product Design, and Maintenance & Modernisation.
- Added a matching digital product engineering section to the Home page.
- Expanded the Work page to showcase Quadrafroyn's two named product concepts plus website/web-app and app/full-stack capability examples. Existing enterprise examples are explicitly qualified as illustrative project types rather than independently verified client case studies.
- Added responsive styling and subtle hover motion for the new sections/cards.

## Run locally
1. Install Node.js (LTS).
2. Run `npm install` in this folder.
3. Run `npm run dev` and open the local URL Vite prints.
4. Run `npm run build` to produce the production bundle.

The browser's lazy-image intervention message is informational and is not itself an application error. The React Router message is a migration warning; the future flag opts into the new splat-relative behavior early.
