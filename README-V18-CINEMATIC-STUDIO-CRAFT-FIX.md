# V18 — Craft alignment, cinematic studio, services scroll hero

## What changed
- Rebuilt the home page **The Craft** area as a correctly aligned horizontal six-service carousel. The Q motif stays behind the content, while cards use consistent widths, spacing, snap points, and responsive behavior.
- Replaced the old Inside the Studio journal grid with an interactive 3D rotating carousel featuring company-relevant imagery: document intelligence, career technology, digital platforms, connected data, product experience design, and software engineering. No bank-card imagery is used.
- Preserved the existing scroll-scrubbed Services hero and its capability strip, now still integrated on `/services`.
- Added mobile and reduced-motion fallbacks for the new studio and craft styles.

## Run locally
1. Install Node.js LTS and Flutter is not required for this web project.
2. Open the `project` folder in VS Code.
3. Run `npm install`.
4. Run `npm run dev` and open the local URL printed in the terminal.
5. Run `npm run build` to verify the production build.

The Services scroll hero uses the configured remote video assets from the original supplied project, so its video requires an internet connection. The rest of the site remains in the existing React/Vite project structure.
