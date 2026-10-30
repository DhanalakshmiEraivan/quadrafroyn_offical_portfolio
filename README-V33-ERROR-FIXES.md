# V33 runtime error fixes

- Fixed `images is not defined` in `src/pages/PremiumPages.tsx` by defining the image IDs used in service-page image galleries.
- Enabled React Router v7 startTransition future flag in `src/main.tsx`.
- Added an explicit development/preview JSON 503 response for `/api/send-email` instead of Vite returning a 404 or HTML. **This does not send emails**. Configure a secure production email endpoint separately before enabling newsletter/contact form delivery.

Run `npm install`, `npm run typecheck`, `npm run build`, `npm run dev`.

The email API is intentionally not represented as operational: without a provider and credentials, claiming successful delivery would lose user messages.
