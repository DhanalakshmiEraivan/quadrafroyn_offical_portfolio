# QuadraFroyn Solutions — Updated portfolio project

This is the original uploaded React + TypeScript + Vite project, updated in place (not replaced with a separate demo).

## Run locally

1. Install Node.js LTS (npm is included).
2. Extract this ZIP.
3. Open the `project` folder in VS Code.
4. Open Terminal → New Terminal and run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL printed by Vite.
6. To check a production build, run `npm run build`.

`node_modules` is intentionally not bundled; npm recreates it from `package.json`.

## Updates included

- Product dropdown now links to QuadraConverter and QuadraAI Resume Builder, plus the existing product pages.
- Added two distinct product overview pages with separate visual themes, workflow steps, feature sections, remote editorial imagery and links to the live product websites.
- Rebuilt the contact page with responsive layout, company contact details, direct email/phone/map links, social links, and a form submission integration.
- Improved homepage hero alignment and the dimensional Q mark in the craft/services section.
- Added extra spacing and responsive layout rules to the agentic-workflow architecture diagram to separate the orchestrator from the three branches.
- Added footer contact details and social links; improved dropdown hover/focus transitions and reduced-motion handling.

## Contact form email delivery

The form posts to FormSubmit's AJAX endpoint for `quadrafroyn@gmail.com`. FormSubmit may require the mailbox owner to confirm/activate the destination the first time. Check that inbox (including Spam) for its activation email and approve it. This is a third-party email relay, so successful delivery depends on its availability and activation; the website does not store submissions in a private backend. A direct email and WhatsApp fallback are shown if submission fails.

## Image and social links

Editorial imagery is loaded from Unsplash over HTTPS. Product links point to `https://quadraconverter.in` and `https://quadraresumebuilder.in`. Instagram and LinkedIn use the supplied company URLs. Twitter/X and Facebook links are included as profile-name guesses and should be replaced with the official company profile URLs if those differ.

## Additional refinement pass (29 October 2026)

- Unified the header and homepage hero horizontal gutters and constrained the hero to a shared max-width grid so the brand and hero content align more consistently.
- Made desktop navigation dropdowns open by click as well as hover/focus, added expanded-state semantics, staggered menu-item entrances, and close-on-navigation behavior.
- Refined the craft-section Q with layered green gradients, inset highlights, dimensional shadows, and more restrained hover/motion polish.
- Added spacing and responsive stacking safeguards to the agentic reference architecture so the orchestrator and branch nodes remain visually distinct at desktop and mobile widths.
- Added a reduced-motion accessibility override for users who prefer less animation.

### Build verification note
The source archive was checked for ZIP integrity. A production build could not be verified in this environment because dependency installation did not finish and the local Vite executable was unavailable. Run `npm ci`, then `npm run build` in a network-enabled development environment before deployment.
