# QUADRAFROYN — Lime Intro & Career Guidance Update

## Included changes
- Replaced the previous loading overlay with a minimal full-screen lime-green QUADRAFROYN wordmark intro.
- Removed decorative rings, circles, image layers, extra copy, and skip controls from the intro.
- Added a large responsive wordmark, subtle entrance/exit motion, three loading dots, and a percentage indicator.
- The intro exits upward to uncover the existing homepage from bottom to top.
- Intro runs once per browser session and does not replay during internal route navigation.
- Respects `prefers-reduced-motion`.
- Removed duplicate Back to Top controls from the homepage and footer. The single global Back to Top control in SiteUtilities remains.
- Added all four supplied WhatsApp programme photographs to `public/images/career-guidance/`.
- Career Guidance grade-specific sections (Class 10, Class 11, Class 12, and college students) now each use a supplied programme photo and retain tailored guidance information.
- The homepage and other page content were not redesigned.

## Run locally
Requires Node.js (LTS).

```bash
npm install
npm run dev
```

For a production build:

```bash
npm run build
```

The application source is included. Dependency installation was interrupted in the build environment, so a fresh production build could not be confirmed here.
