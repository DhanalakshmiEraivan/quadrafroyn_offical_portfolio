# QUADRAFROYN cinematic intro update

This update replaces the previous intro overlay with a short, skippable, session-once cinematic brand reveal. The existing homepage component tree, content, and styling were not redesigned. The homepage announcement ticker now contains the five requested launch messages and moves at a medium pace (48-second loop across the duplicated sequence).

## Run

```bash
npm install
npm run dev
```

## Notes
- The intro is shown once per browser tab session using `sessionStorage`; internal React Router navigation does not replay it.
- The Skip Intro control immediately exposes the existing site.
- Reduced-motion preferences are respected.
- The intro uses a remote Unsplash technology image; the site remains usable if that image is unavailable because the dark-green visual treatment is CSS-backed.
- The announcement ticker pauses on hover/focus and uses the requested five messages.
