# Quadrafroyn Solutions — Company Pages Update

This update adds five complete company sections to the existing Vite + React + TypeScript project:

- `/careers` — priority commission-based Marketing Intern hiring, role search and filters, role detail modals, application email links.
- `/events` — featured company event, event cards, event-type filters, past-event toggle, event detail modals and registration enquiry links.
- `/research-blog` — technical AI/agentic AI articles, category filters, search, save-for-later interactions and article reading modals.
- `/investor-relations` — company overview, strategy, governance and materials tabs, stakeholder enquiry and copy-contact action.
- `/press-kit` — brand asset request cards, company boilerplate with copy action, interview/commentary/asset enquiry links.

The five pages share an editorial visual system, responsive layouts, motion effects, reduced-motion support, and remote Unsplash photography. Existing project routes and pages are retained.

## Run locally

Requirements: Node.js 20.19+ or 22.12+ recommended, and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`). To verify a production build:

```bash
npm run build
npm run preview
```

## Notes

- Application, event, investor and press actions use email links. Replace the example `@quadrafroyn.com` inboxes in `src/pages/CompanyPages.tsx` with your confirmed company email addresses before publishing.
- Event dates and article content are editable sample content for the website; update them to match confirmed company announcements before launch.
- Photography is loaded from Unsplash and therefore requires an internet connection.
