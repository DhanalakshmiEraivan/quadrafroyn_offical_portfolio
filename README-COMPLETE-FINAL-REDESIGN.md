# QUADRAFROYN — Complete final redesign update

## What changed

- Replaced the intro with a clean lime-green QUADRAFROYN wordmark, three animated dots, and a short upward screen-exit transition. The wordmark keeps its proportions and the intro is shown once per browser session.
- Rebuilt `/about-us` with an original editorial story, mission, vision, interactive values selector, differentiators, expertise areas, and contact CTA. Company history is described without invented dates or statistics.
- Rebuilt `/career-guidance` around four separate pathways: Class 10, Class 11, Class 12, and college students. Each stage has its own image, detailed topics, expandable explanations, and a practical outcome.
- Integrated the four original JPEG photographs from the supplied WhatsApp archive into the four student-stage sections. The files are stored in `public/images/career-guidance/`.
- Improved the Enterprise Content Management visual on `/solutions` with a responsive Unsplash-hosted technology/dashboard photograph and a local SVG fallback at `public/images/solutions/enterprise-content-management.svg`.
- Added live search/filtering to the Solutions directory.
- Removed duplicate keys in the shared detail-page content map discovered during static validation.
- Retained and surfaced existing working utility features: keyboard quick navigation (`Ctrl/Cmd + K`), quote enquiry modal, quick accessibility controls (text sizing, contrast, reduced motion), share/copy tools, and searchable support FAQs.
- Confirmed there is one global floating Back to Top control in `SiteUtilities`; the remaining BI footer link is an in-page text link, not a duplicate floating control.

## Run locally

```bash
npm install
npm run dev
```

Production build and validation:

```bash
npm run build
npm run typecheck
npm run lint
```

## Verification note

The four supplied photographs were verified byte-for-byte against the WhatsApp archive; the local SVG fallback is present; local image references resolve; only one global floating Back to Top control remains; and the shared detail-page duplicate keys discovered during static validation were corrected. ZIP integrity is checked after packaging. A production build and browser/device QA could not be completed in this environment because the npm dependency registry was unreachable and the required dependencies were not cached locally. Run the commands above after installing dependencies to complete those checks.
