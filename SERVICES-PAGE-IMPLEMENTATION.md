# QUADRAFROYN Services Page Update

The `/services` route now uses a complete editorial-style services experience implemented in `src/pages/Services.tsx` and `src/pages/ServicesEditorial.css`.

## Included
- Pure-white canvas, black editorial typography, restrained green accents, and subtle technical grid.
- Responsive cinematic hero with image treatment, floating detail, and service navigation.
- Three distinct service narratives: digital products, intelligent connected systems, and engineering foundations.
- Staggered editorial project showcase based on the existing Quadrafroyn product/work descriptions. Product concepts are not represented as unrelated stock client projects.
- Trust/principles section and a contact-focused closing call to action.
- Existing shared header, footer, routes, and other pages remain in place.
- Scroll reveal uses the existing lightweight IntersectionObserver hook; hover and floating effects respect reduced-motion preferences.

## Run
```bash
npm install
npm run dev
```

Images use the existing project image catalogue in `src/data.ts` and load from Pexels URLs already used by the project.
