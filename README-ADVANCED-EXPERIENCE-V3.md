# QuadraFroyn Solutions — Advanced Experience V3

This update builds on the existing React + TypeScript + Vite project and retains its routes and current visual identity.

## New experience feature
- Interactive Systems Lab on the home page with four selectable workflow stages: Ingest, Contextualize, Orchestrate, and Govern.
- Run Demo animates the stage sequence and checkpoint indicators; Reset returns it to the initial state.
- The sandbox is a local UI concept demonstration only. It does not claim to invoke a live model, send data, or execute production workflows.
- Responsive layout, keyboard-accessible controls, and reduced-motion support.
- Existing Quick Explore command palette, scroll progress, back-to-top control, ambient pointer lighting, and reveal animations remain included.

## Run and verify
1. Extract the archive and open the `project` folder in VS Code.
2. Run `npm ci`.
3. Run `npm run dev`.
4. Before deployment, run `npm run build` and `npm run typecheck`.

No `node_modules` directory is included. External integrations and contact form delivery must be tested with their real configuration before production use.
