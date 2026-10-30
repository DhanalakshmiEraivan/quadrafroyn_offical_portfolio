# Enterprise Content Management page update

The `/enterprise-content-management` route now renders a dedicated editorial-style Enterprise Content Management experience.

## Included
- White, editorial visual system with restrained green accents.
- Cinematic hero, challenge visualization, and connected content ecosystem illustration.
- Three clearly labelled illustrative application concepts (not represented as client case studies).
- Four interactive capability panels.
- Contact-linked calls to action.
- Responsive layouts and reduced-motion support.
- Scroll reveal interactions using the browser IntersectionObserver API; no additional animation dependency is required.

## Run locally

```bash
npm install
npm run dev
```

The page is implemented in `src/pages/EnterpriseContentManagement.tsx` and `src/pages/EnterpriseContentManagement.css`, and is selected by the existing `DetailPage` route for the `enterprise-content-management` slug. Existing site layout, header, footer, and unrelated routes are unchanged.

Images are loaded from Unsplash image endpoints and require an internet connection.
