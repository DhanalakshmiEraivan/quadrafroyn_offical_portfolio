# Business Intelligence page rebuild

The `/business-intelligence` route now renders a bespoke white editorial-style portfolio experience from:

- `src/pages/BusinessIntelligence.tsx`
- `src/pages/BusinessIntelligence.css`

The existing route and shared site header/footer are preserved. The old generic PremiumPage presentation is bypassed only for the Business Intelligence slug; other premium service pages are unchanged.

## Page structure

1. Intelligence in Motion hero with animated SVG data flows and floating signal indicators.
2. Raw Data → Analysis → Intelligence → Business Growth transformation.
3. Three large custom dashboard concept presentations with challenge, solution and technology notes.
4. Four connected technical capability modules.
5. Technology ecosystem featuring Power BI, Tableau, Python, SQL, Microsoft Fabric, Excel and Google Cloud.
6. Final contact call-to-action.

The dashboard visuals are built as responsive HTML/CSS interface mockups rather than unrelated stock photography. Technology marks are loaded from Simple Icons CDN with text fallbacks. The portfolio studies are explicitly labelled as illustrative concepts; no client deployments, metrics or outcomes are claimed.

## Motion and accessibility

Scroll reveals use IntersectionObserver. Data paths, orbital elements and chart bars use CSS animations. The page honours `prefers-reduced-motion` and includes responsive layouts for mobile and tablet.

## Run locally

Use Node.js 20 or newer:

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

No new npm dependencies or environment variables were added for this page.
