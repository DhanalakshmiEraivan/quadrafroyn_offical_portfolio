# QuadraFroyn Solutions — V4 Professional Navigation Upgrade

This update builds on the V3 project and preserves its existing React, TypeScript, Vite routes, product pages, Quick Explore command palette, AI workflow playground, and visual system.

## What's improved
- Rebuilt mobile navigation as a polished full-height slide-in drawer.
- Added a visible circular **X close button** in the drawer header.
- Added a blurred backdrop; tap the backdrop to close the drawer.
- Escape closes the drawer, and navigation closes it automatically after route selection.
- Locks background scrolling while the drawer is open.
- Adds keyboard focus management and returns focus to the menu trigger when the drawer closes.
- Organizes navigation into Home, Products, Resources, and Services for easier discovery.
- Adds responsive sizing, safe-area support, reduced-motion handling, and elegant lime-accented transitions.

## Run locally
```bash
npm ci
npm run dev
```

## Verify before deployment
```bash
npm run build
npm run typecheck
npm run lint
```

Note: the source and archive can be checked in this environment, but build/typecheck could not be run because Vite is not installed in the available local dependencies. Run the verification commands above after installing dependencies.
