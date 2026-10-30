# QuadraFroyn V37 — Consulting & Support + Open Source Customization

This update replaces the previous generic service-page layouts for:

- `/services/consulting-and-support`
- `/services/open-source-customization`

Both routes now render purpose-built, responsive page experiences while leaving the rest of the website routes and shared layout in place.

## Page design

### Consulting & Support
- Editorial white-background hero with remote collaboration photography and layered technical annotations.
- Four visual capability cards: technology consulting, architecture and strategy, development support, troubleshooting and optimization.
- Interactive four-step process selector with a progress line.
- Technical architecture and diagnostics concepts clearly marked as illustrative, not client deployments.
- Concise contact-focused close.

### Open Source Customization
- Distinct developer-oriented hero and layered code panel.
- Four customization capability cards.
- Interactive before/after demonstration with a keyboard-accessible range slider.
- Portfolio concepts explicitly labeled as illustrative until verified company projects are supplied.
- Open-source license information link and concise contact close.

Both pages include responsive layouts, semantic headings, alt text for photography, reduced-motion handling, and working links to `/contact`. No fabricated client logos, testimonials, project outcomes, certifications, or metrics were added.

## Run locally

1. Extract the ZIP.
2. Install Node.js LTS if not already installed.
3. Open a terminal in the project folder.
4. Run `npm install`.
5. Run `npm run dev`.
6. Open the local address shown by Vite.

The new hero photography is served from Unsplash and therefore requires an internet connection. Technical dashboard visuals are CSS/HTML concepts rather than claimed product screenshots.

## Verification note

A production build could not be completed in the editing environment because Vite was not installed in the current `node_modules`; an `npm install` attempt timed out. Please run `npm install` and `npm run build` locally after extracting to verify dependencies and build output in your environment.
