# QuadraFroyn Solutions — Advanced Experience Update

This refinement adds a global quick-navigation command palette and a scroll progress indicator to the existing portfolio without replacing its React + TypeScript + Vite architecture.

## New interactions

- **Quick Explore command palette:** Use the floating “Quick explore” control or press `Ctrl + K` / `⌘ + K` to open. Search for pages and products, then select a destination. `Escape` closes the palette and clicking the backdrop dismisses it.
- **Live reading progress:** A slim lime gradient at the top tracks scroll position on every page.
- **Cinematic micro-interactions:** The command palette uses restrained entrance and staggered row animations, backdrop blur, and hover transitions.
- **Accessibility:** Keyboard dismissal, dialog semantics, labelled controls, visible focus styles, and reduced-motion support are included.

## Run locally

1. Install Node.js LTS.
2. Open this folder in VS Code.
3. Run `npm ci`.
4. Run `npm run dev` and open the URL printed in the terminal.
5. Before deployment, run `npm run build` and `npm run typecheck`.

This environment did not have the Vite executable installed, so a production build could not be verified here. Install dependencies locally before testing or deploying. Any remote imagery or third-party form endpoint already used by the project remains subject to that provider's availability and configuration.
