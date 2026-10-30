# QuadraFroyn V20 — cinematic Studio and Services precision pass

## Changes
- Retained the company-themed 3D Studio project carousel instead of generic bank-card artwork. Cards represent QuadraConverter, QuadraAI, ARVEXA, data engineering, product experience, and software engineering; each has a front and an information back.
- Tuned the carousel for a 1350px perspective, inertial pointer parallax, smooth card transitions, swipe support, keyboard arrows, auto-rotation pause/play, reset, focus outlines, and reduced-motion preferences.
- Fixed a Services hero sizing conflict: the old `height: 360vh !important` could override the JavaScript-computed track height. The track now derives its height from the measured service strip, with responsive video framing and sticky viewport behavior.
- Added a deterministic `?rec=1` recorder mode and `window.__recTime(video, t)` hook for frame-based capture workflows.
- Kept the existing site-wide utilities (reading progress, skip navigation, accessibility controls, text sizing, contrast/reduced-motion options, copy/share, print/save, keyboard navigation and quick links).
- Added responsive and reduced-motion fallbacks.

## Run
Open `project` in VS Code, run `npm install`, then `npm run dev`. For a production compile run `npm run build`; for TypeScript diagnostics run `npm run typecheck`. Remote project imagery and the freight video require an internet connection.
