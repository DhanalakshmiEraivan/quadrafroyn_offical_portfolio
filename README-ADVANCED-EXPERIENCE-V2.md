# QuadraFroyn Solutions — Advanced Experience V2

This update builds on the existing portfolio project and retains its React + TypeScript + Vite structure and existing routes.

## Experience improvements
- Keyboard-operable Quick Explore palette (`Ctrl+K` on Windows/Linux, `Cmd+K` on macOS).
- Searchable page destinations with arrow-key navigation and Enter to open a destination.
- Scroll reading progress indicator and a contextual Back to Top control.
- Subtle pointer-responsive ambient lighting on pointer devices only.
- More refined command palette active states, shortcut hints, and reveal transitions.
- Reduced-motion support and touch-device fallbacks.

## Run locally
1. Extract this archive.
2. Open the `project` directory in VS Code.
3. Run `npm ci`.
4. Run `npm run dev`.
5. Run `npm run build` and `npm run typecheck` before deployment.

No `node_modules` directory is included in this archive. Build verification should be performed after installing dependencies in your environment. Existing third-party services, such as the contact form email endpoint, still require real-world configuration and submission testing.
