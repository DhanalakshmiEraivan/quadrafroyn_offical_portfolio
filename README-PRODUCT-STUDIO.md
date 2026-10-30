# Quadrafroyn Solutions — Product Studio pages

This project adds six dedicated, responsive product pages to the existing Quadrafroyn Solutions website:

- `/agentic-workflows` — interactive six-stage agentic workflow explorer, reference architecture, tool use, verification, and human approval.
- `/slm-fine-tuning` — interactive before/after/evaluation concept demo, model adaptation lifecycle, and prompting-vs-RAG-vs-fine-tuning decision guide.
- `/data-ontology` — clickable sample entity graph, entity definitions, semantic-layer delivery pathway, and technical building blocks.
- `/ai-governance` — interactive risk profile and safeguards selector, AI lifecycle controls, and governance operating model.
- `/inferencing` — reference runtime architecture, latency/cost trade-off explorer, and production-readiness checklist.
- `/see-all-products` — searchable and filterable capability catalogue with expandable details and links to each product page.

The product pages use React, TypeScript, React Router, Lucide icons, responsive CSS, and remote Unsplash image URLs. Some demos are illustrative UI concepts; they do not connect to a live model or backend. The portfolio describes capability areas and solution patterns rather than asserting that each is a commercially released packaged product.

## Run locally

Requirements: Node.js 20.19+ or 22.12+ recommended for Vite 7.

```bash
npm install
npm run dev
```

Open the local URL Vite prints in the terminal. To create a production build:

```bash
npm run build
```

## Notes

- Internet access is required for the hosted Unsplash imagery and Google Fonts.
- Contact links use `hello@quadrafroyn.com` as the general enquiry address; verify that this mailbox is active before publishing.
- Product content is educational and architectural, not a promise of specific performance or compliance outcomes.
