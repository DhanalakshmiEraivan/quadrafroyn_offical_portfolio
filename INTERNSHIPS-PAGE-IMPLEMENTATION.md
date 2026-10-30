# QuadraFroyn internships page update

The `/internships` route now uses the redesigned white-background experience requested in the supplied specification. The existing shared site header, footer, navigation, routing, and brand assets remain in place.

## Run the project

1. Install Node.js 20.19+ (or a compatible newer LTS release).
2. In this folder, run `npm install`.
3. Run `npm run dev` and open the local URL printed by Vite.

## Application email delivery

The application form posts to the existing secure Vercel serverless endpoint at `/api/send-email`. It sends successful internship applications to `quadrafroyn@gmail.com` using Resend. No private key is stored in browser code.

To enable real delivery:

1. Create/verify a sending domain in Resend.
2. In the Vercel project settings, set `RESEND_API_KEY` and `VERIFIED_FROM_EMAIL` using the values described in `.env.example`.
3. Deploy the project to Vercel. The `api/send-email.js` serverless function is invoked by the form on that deployment.

The UI only shows **APPLICATION RECEIVED** after the endpoint confirms the email provider accepted the message. If delivery is not configured or the provider rejects the request, the form shows an error and allows retrying. The submit button is disabled while a request is in progress to prevent duplicate clicks.

## Project image note

The three showcase visuals are explicitly labelled **VISUAL REFERENCE**. They are not presented as actual completed QuadraFroyn client projects. Replace them with approved company screenshots when available.
