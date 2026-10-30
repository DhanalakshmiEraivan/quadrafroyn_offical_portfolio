# Quadrafroyn Solutions — Resource Workspaces

This update adds five responsive resource experiences to the existing Vite + React + TypeScript project:

- `/documentation` — searchable guide index, expandable topic tree, article reader, actual reading progress, copyable examples, feedback controls, and interactive architecture explorer.
- `/research-papers` — research-area routes, transparent exploratory-note statuses, working archive search/filter/sort, methodology timeline, and collaboration email flow. It does not claim peer-reviewed publications or measured findings.
- `/developer-sdk` — language-tab code examples, copy actions, local simulated API playground, searchable reference contracts, lifecycle explorer, and exportable production checklist. No real endpoint or released SDK is claimed.
- `/community` — curated resource directories, filterable clearly labelled demonstration project entries, event-format placeholders, guidelines, and contribution email forms. No fake membership, attendance, or live forum activity is claimed.
- `/contact` — support center, selectable support categories, context-aware support/project enquiry form, required-field and email validation, searchable FAQ, and support process. There is no ticketing backend connected in this project; submission prepares an email to the existing `hello@quadrafroyn.com` contact address and does not generate a fake ticket number.

## Run locally

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`).

Production build:

```bash
npm run build
npm run preview
```

## Notes

- Existing pages and the original route structure are retained. The `/contact` route is now the requested Technical Support Center; its business enquiry mode is included on the same page.
- Internet imagery on the Community page uses remote Unsplash images and therefore needs an internet connection.
- API examples and architecture diagrams are explicitly illustrative where no live implementation is connected. The API playground is a deterministic local simulation and sends no network request.
- Contact/contribution forms use the visitor's configured email application. This project does not persist form data or provide a ticket database.
- Research entries are clearly labelled exploratory notes, not peer-reviewed publications. No fabricated citations, conference acceptances, or empirical results are presented.
- No build could be verified in the authoring environment because dependency installation timed out. The TSX sources were syntax-transpiled successfully; run `npm install` and `npm run build` locally to verify with the complete dependency tree.
