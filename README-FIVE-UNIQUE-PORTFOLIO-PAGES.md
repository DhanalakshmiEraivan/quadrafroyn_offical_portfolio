# QUADRAFROYN — Five Unique Premium Portfolio Pages

This update replaces the following page experiences while preserving the existing site shell, navigation, footer, and other project pages:

- `/services/workforce-staff-management` — human-centred editorial workforce experience
- `/services/smart-it-outsourcing` — futuristic connected delivery and capability experience
- `/services/server-management` — architectural infrastructure experience
- `/career-guidance` — inspirational interactive career journey
- `/products` — premium product exhibition for QuadraConverter and Quadra AI Resume Builder

## Run locally

```bash
npm install
npm run dev
```

## Build checks

The new TSX source was transpiled to check syntax and the CSS brace structure was checked. A full TypeScript/Vite production build could not be completed in the packaging environment because dependency installation timed out. Run `npm run typecheck` and `npm run build` after installing dependencies locally.

## Notes

- The five new experiences share a restrained white, charcoal, and green visual language while using distinct layouts and interaction patterns.
- Scroll reveals use IntersectionObserver and CSS transitions; reduced-motion preferences are respected.
- Project/product labels avoid presenting illustrative photography as verified client case studies.
- Images are loaded from Unsplash URLs and include responsive cropping.
