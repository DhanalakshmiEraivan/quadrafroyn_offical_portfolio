// Vercel serverless endpoint. Configure RESEND_API_KEY and VERIFIED_FROM_EMAIL in deployment settings.
export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') return res.status(405).json({ success: false, error: 'Method not allowed' });
  const { RESEND_API_KEY, VERIFIED_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !VERIFIED_FROM_EMAIL) return res.status(503).json({ success: false, error: 'Email delivery is not configured yet. Please contact the site team.' });
  let body;
  try { body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {}); }
  catch { return res.status(400).json({ success: false, error: 'Invalid request body.' }); }
  const clean = (v, max = 3000) => String(v ?? '').trim().slice(0, max);
  const name = clean(body.name, 120), email = clean(body.email, 254), message = clean(body.message, 5000);
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !message) return res.status(400).json({ success: false, error: 'Please provide a valid name, email, and motivation.' });
  const isInternship = body.type === 'internship';
  if (isInternship) {
    const phone = clean(body.phone, 24).replace(/[^\d+]/g, '');
    const required = ['education', 'duration', 'workMode', 'skills', 'role'];
    if (!/^\+?\d{7,15}$/.test(phone) || required.some(key => !clean(body[key], 5000))) {
      return res.status(400).json({ success: false, error: 'Please complete all required application fields and enter a valid phone number.' });
    }
    if (body.portfolio && !/^https?:\/\/\S+$/i.test(clean(body.portfolio, 500))) return res.status(400).json({ success: false, error: 'Please enter a valid portfolio or LinkedIn URL.' });
  }
  const type = isInternship ? 'Internship application' : body.type === 'quote' ? 'Quote request' : 'Website contact enquiry';
  const fields = Object.entries(body)
    .filter(([key]) => !['type'].includes(key))
    .map(([key, value]) => `${clean(key, 80)}: ${clean(value, 5000)}`)
    .join('\n\n');
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: VERIFIED_FROM_EMAIL,
        to: ['quadrafroyn@gmail.com'],
        reply_to: email,
        subject: `QuadraFroyn ${type} — ${name}`,
        text: `${type}\n\n${fields}`
      })
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok) return res.status(502).json({ success: false, error: 'Email provider could not accept the message. Please try again.' });
    return res.status(200).json({ success: true, id: result.id });
  } catch {
    return res.status(502).json({ success: false, error: 'Email provider is temporarily unavailable. Please try again.' });
  }
}
