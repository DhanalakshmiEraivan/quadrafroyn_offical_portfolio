# QuadraFroyn Solutions — V5 Complete Redesign

This V5 update extends the existing React + TypeScript + Vite project and retains the existing application routes and pages.

## Highlights
- Removed the interactive workflow lab from the homepage.
- Reworked the craft section so the dimensional lime Q anchors the left side while service cards glide across its open centre.
- Rebuilt the visual diary as an editorial image composition with staggered image panels.
- Replaced footer social text links with accessible icon links.
- Reduced the Products dropdown to All Products, QuadraConverter, and QuadraAI Resume Builder.
- Expanded navigation with Competitions, Webinars, Internships, Career Guidance, and Solutions; the mobile side panel intentionally shows a shorter selection per group.
- Added dedicated pages for Competitions, Career Guidance (10th, 11th, 12th, and college audiences), Webinars, Internships, Services, and Solutions.
- Added service detail routes for the ten requested service areas and solution detail content for BMS, Business Intelligence, Enterprise Content Management, and Workforce/Staff Management.
- Added responsive page-specific layouts, remote editorial photography from Unsplash, reduced-motion support, and responsive breakpoints.
- Improved the contact-form failure fallback with a pre-filled email draft link.

## Run locally

```bash
npm ci
npm run dev
```

Then check:

```bash
npm run build
npm run typecheck
npm run lint
```

## Important contact-form note
The contact form currently submits to FormSubmit's AJAX endpoint for `quadrafroyn@gmail.com`. FormSubmit may require the mailbox to be activated by clicking its confirmation email, and browser/network policies can block an AJAX request. If the endpoint cannot send, the page offers a pre-filled email draft as a fallback. For guaranteed server-side delivery, configure a trusted backend or email provider with server-side credentials; never place SMTP/API secrets in frontend code.

## Content note
Competition and webinar entries marked as upcoming with pending dates are illustrative placeholders, not confirmed openings. Update them when dates and registration details are approved. Internship domains are areas of interest; they do not claim that every role is currently open.
