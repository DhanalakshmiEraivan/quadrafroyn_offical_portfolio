# QuadraFroyn V26 — Premium Website Overhaul

This version is built on the supplied V24 React + TypeScript + Vite project. Existing app structure, routing model, shared header, command navigation, quote flow, and existing page modules are retained.

## V26 changes

- Rebuilt the homepage visual diary as a responsive photographic gallery with location filters, previous/next controls, timed movement, pointer drag-to-scroll, and an expanded view.
- Replaced the oversized Craft Q mark with an animated abstract digital visual and expanded the Craft carousel to 12 service cards with distinct technology imagery, service descriptions, icons, and destination links.
- Reworked hero geometry and image transitions; automatic hero slides now advance every five seconds and remain manually controllable.
- Replaced the lorry/freight hero section on Browse Services with a direct transition into the service content.
- Reworked the footer around a black grain texture, four categorized link columns, newsletter form, contact shortcuts, and legal links. Newsletter delivery uses the existing `/api/send-email` endpoint and therefore requires the existing Resend environment variables in deployment.
- Corrected dropdown label/arrow grid alignment and normalized the announcement marquee's duplicated-track animation.
- Added ten purpose-built company/information routes: About, Story, Team, Process, Culture, Quote, Privacy, Terms, Insights, and Accessibility. Each page includes its own copy, imagery, four capability cards, tabbed process content, accordion FAQs, and contact paths.
- Preserved the pre-existing product, service, company, resource, portfolio, and enterprise routes.

## Run locally

```bash
npm install
npm run dev
```

## Production checks

```bash
npm run typecheck
npm run lint
npm run build
```

The email endpoint requires `RESEND_API_KEY` and `VERIFIED_FROM_EMAIL` in the deployment environment. External Unsplash imagery requires an internet connection. The new gallery and Craft interactions include reduced-motion styling.

## Route inventory

The application includes the existing explicit route set plus the ten new routes above, service detail routes, and the existing dynamic detail route. The site is a React Router application; route definitions are in `src/App.tsx`.

See `IMAGE-INVENTORY-V26.md` for the unique homepage image assignments and `src/imageInventory.ts` for the central asset registry.
