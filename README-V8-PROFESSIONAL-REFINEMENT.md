# QuadraFroyn Solutions — V8 Professional Refinement

## Run locally

```bash
npm ci
npm run dev
```

## Email delivery setup (required for live delivery)

The contact, quote, and internship forms submit to `/api/send-email`. The included `api/send-email.js` is a Vercel serverless function using Resend. Email cannot be delivered merely by frontend code: the deployment owner must configure credentials.

1. Create/verify a sending domain in Resend.
2. Deploy this project to Vercel.
3. In Vercel → Project → Settings → Environment Variables, add:
   - `RESEND_API_KEY` — private Resend API key (never use a `VITE_` prefix).
   - `VERIFIED_FROM_EMAIL` — a sender address on the domain verified with Resend, e.g. `QuadraFroyn Website <website@your-verified-domain.com>`.
4. Redeploy, then test contact, quote, and internship forms with an email address you can access.

All successful submissions are addressed to `quadrafroyn@gmail.com`; the submitted email is configured as Reply-To. If the provider is not configured or rejects the request, the UI shows an error and does not claim that the email was sent.

`npm run dev` runs Vite's frontend only; the `/api/send-email` endpoint is supplied by Vercel in deployment. For local end-to-end email tests, use Vercel CLI (`vercel dev`) after setting local environment variables in `.env.local` (do not commit that file).

## Included

- New architectural craft section with a solid lime Q and controlled shadows.
- Rebuilt editorial visual journal grid.
- Spacious footer with social icons and responsive navigation columns.
- Green animated intro loader shown once per browser session.
- Automatically prompted quote form with close button and persistent floating quote launcher.
- Internship application modal with domain, duration, mode, education, contact, portfolio, availability, skills and motivation fields.
- Server-side email endpoint for contact, quote and internship enquiries.
- Logo background converted to transparent pixels.

## Validation

Run `npm run build`, `npm run typecheck`, and `npm run lint` after dependencies are installed. Email delivery must be tested on a deployment with valid provider credentials.
