# QuadraFroyn V30 — Premium Services Showcase & UI Refinement

This update modifies the existing QuadraFroyn React + TypeScript + Vite project. It does not replace the site or its routing structure.

## Changes

- Removed the extra bottom-most `Q / QUADRAFROYN / MAKING IT REACHABLE` footer panel and its duplicate legal links.
- Refined the footer newsletter input/button sizing, baseline alignment, spacing, focus state, and mobile stacking.
- Expanded desktop mega menus to the full viewport width with consistent content gutters, white surfaces, staggered link reveals, a lime accent sweep, and hover/focus styling.
- Enabled desktop hover to open the mega menu while retaining click/touch toggling, Escape-to-close, outside-click close, and route-change close behavior.
- Rebuilt only the homepage Services showcase as a six-item editorial portfolio: Mobile App Development, Web Development, Software Development, Consulting & Support, Cloud Migration, and Automation & SaaS.
- Added layered product-interface compositions, image zoom, staggered entrance animation, interactive arrows, responsive grid layouts, and reduced-motion support.
- Kept the existing homepage hero and the other homepage sections intact. Service cards link to their individual `/services/...` routes. No Digital Marketing service was added.

## Run locally

Requires a current Node.js LTS release.

```bash
npm ci
npm run dev
```

Production verification:

```bash
npm run build
npm run typecheck
```

The build/typecheck could not be run in the packaging environment because dependency installation timed out, so run the commands above locally before deployment.
