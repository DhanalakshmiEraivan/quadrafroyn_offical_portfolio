# QuadraFroyn Solutions — Latest Refinements

This update builds on the supplied QuadraFroyn Solutions portfolio source. It retains the existing React + TypeScript + Vite architecture and existing product pages.

## Refinements included
- Shared editorial spacing and homepage hero alignment so the brand, headline, and content use a consistent responsive grid.
- Higher-contrast glass navigation, numbered product/resource/service dropdown links, and staggered menu item motion.
- Dropdowns close on route navigation, outside pointer interaction, and Escape key.
- Dimensional craft-section Q with layered lighting, depth, shadow, and restrained floating motion.
- Additional responsive spacing for the agentic workflow orchestrator and its three branches.
- Contact form reply-to metadata so enquiries can be answered directly from the submitted email address.
- Refined form focus states and restrained motion; reduced-motion preferences remain respected.

## Run locally

```bash
npm ci
npm run dev
```

Production build:

```bash
npm run build
```

## Email delivery note
The contact form uses FormSubmit's AJAX endpoint to submit to `quadrafroyn@gmail.com`. The recipient mailbox may need to confirm FormSubmit's activation email. Successful HTTP submission in the browser does not by itself prove inbox delivery; test with a real enquiry before publishing. For reliable production use, a server-side email provider with credentials stored in environment variables is recommended.

## External assets
The portfolio uses remote Unsplash images. An internet connection is needed for those images to load. Product website copy and features should be checked against the live product websites before making specific commercial or security claims.
