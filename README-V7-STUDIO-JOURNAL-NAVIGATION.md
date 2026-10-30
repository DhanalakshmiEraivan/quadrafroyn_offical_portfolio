# QuadraFroyn V7 — Studio Journal & Navigation Refinement

This update refines the existing V6 project without replacing its React + TypeScript + Vite architecture.

## Included
- Rebuilt the homepage visual diary as an editorial studio journal with cinematic image overlays, frame labels, descriptive captions, responsive layouts, and restrained reveal/hover motion.
- Replaced footer social text links with accessible icon-only links for Instagram, LinkedIn, X, Facebook, and WhatsApp; email and phone shortcuts remain visible beside them.
- Expanded desktop navigation dropdowns into wide, viewport-spanning mega menus aligned beneath the main navigation, with staggered entrance animation and responsive columns.
- Kept the Products dropdown restricted to All Products, QuadraConverter, and QuadraAI Resume Builder.
- Removed the unused interactive workflow playground component; the homepage does not render the interactive lab.
- Removed the Q's inner conic glow and kept the Q treatment flat and restrained.
- Preserved the existing Competitions, Career Guidance, Webinars, Internships, service directory, solution directory, product, and contact routes.

## Run locally
```bash
npm ci
npm run dev
```

## Validate before deployment
```bash
npm run build
npm run typecheck
npm run lint
```

External image URLs require an internet connection. Contact form email delivery depends on the configured FormSubmit service and its email activation/CORS behavior; production-grade guaranteed delivery requires a server-side email provider integration with credentials stored securely outside the frontend.
