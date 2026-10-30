import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Check, Send, Mail, MapPin, Phone, Instagram, Linkedin, MessageCircle, Clock3 } from 'lucide-react';
import { useReveal, useScrollToTop } from '@/hooks';

const address = '2/1483A, Indiragandhi street, Rajiv Nagar, Jayaram Nagar, Aruppukkottai, Kanjanaikkanpatti, Tamil Nadu 626101';
const contactDetails = [
  { icon: Mail, label: 'Email', value: 'info@quadrafroynsolutions.in', href: 'mailto:info@quadrafroynsolutions.in' },
  { icon: Phone, label: 'Call us', value: '+91 7200517609 · 8870772494', href: 'tel:+917200517609' },
  { icon: MapPin, label: 'Our address', value: address, href: 'https://maps.google.com/?q=2%2F1483A%2C+Indiragandhi+street%2C+Aruppukkottai%2C+Tamil+Nadu+626101' },
];
function ContactPage() {
  useReveal(); useScrollToTop();
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [fallbackUrl, setFallbackUrl] = useState('mailto:quadrafroyn@gmail.com');
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); setSending(true); setError(''); setSubmitted(false);
    const form = e.currentTarget;
    const data = new FormData(form);
    const mailSubject = `QuadraFroyn website enquiry — ${String(data.get('name') || 'New enquiry')}`;
    const mailBody = `Name: ${String(data.get('name') || '')}\nEmail: ${String(data.get('email') || '')}\nCompany: ${String(data.get('company') || '')}\nInterest: ${String(data.get('interest') || '')}\n\nMessage:\n${String(data.get('message') || '')}`;
    setFallbackUrl(`mailto:quadrafroyn@gmail.com?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`);
    try {
      const response = await fetch('/api/send-email', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ type: 'contact', name: data.get('name'), email: data.get('email'), company: data.get('company'), interest: data.get('interest'), message: data.get('message') }) });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.error || 'Email delivery is not configured.');
      setSubmitted(true); form.reset();
    } catch {
      setError('We could not deliver this message online. Email quadrafroyn@gmail.com directly or use WhatsApp.');
    } finally { setSending(false); }
  }
  return <div className="contact-redesign">
    <section className="contact-hero"><div className="contact-hero-image"/><div className="contact-hero-grid"/><div className="contact-hero-copy reveal is-visible"><span className="contact-eyebrow"><i/> LET'S START A CONVERSATION</span><h1>Let’s turn<br/>your idea into <em>impact.</em></h1><p>Tell us what you want to build, improve, or make possible. We’ll listen first, then help you find a clear and practical next step.</p><a href="#contact-form" className="contact-hero-link">Tell us what you need <ArrowUpRight size={17}/></a></div><div className="contact-hero-index">QUADRAFROYN SOLUTIONS <span>01 — CONTACT</span></div></section>
    <section className="contact-main" id="contact-form"><div className="contact-main-intro reveal"><span className="contact-section-tag">01 / Make contact</span><h2>Let's make<br/><em>something matter.</em></h2><p>A new product, a workflow that needs improving, or a partnership idea — share the essentials and our team will help you map the next step.</p><div className="contact-direct-links"><a href="https://wa.me/917200517609" target="_blank" rel="noreferrer"><MessageCircle size={18}/><span><small>QUICK MESSAGE</small><strong>Chat on WhatsApp</strong></span><ArrowUpRight size={16}/></a><a href="mailto:info@quadrafroynsolutions.in"><Mail size={18}/><span><small>EMAIL US</small><strong>info@quadrafroynsolutions.in</strong></span><ArrowUpRight size={16}/></a></div></div>
      <form className="contact-form-new reveal" onSubmit={submit}><div className="contact-form-top"><span>YOUR PROJECT BRIEF</span><span>FIELDS MARKED * ARE REQUIRED</span></div><div className="contact-form-row"><label>Your name *<input name="name" autoComplete="name" required placeholder="How should we call you?"/></label><label>Email address *<input name="email" type="email" autoComplete="email" required placeholder="you@company.com"/></label></div><div className="contact-form-row"><label>Company / organisation<input name="company" autoComplete="organization" placeholder="Where are you building from?"/></label><label>What can we help with? *<select name="interest" required defaultValue=""><option value="" disabled>Choose a conversation</option><option>QuadraConverter</option><option>QuadraAI Resume Builder</option><option>AI & automation</option><option>Web / product development</option><option>Data & digital transformation</option><option>Partnership or other</option></select></label></div><label className="contact-message-label">A little about your idea *<textarea name="message" required rows={5} placeholder="The challenge, the goal, the big idea — start anywhere."/></label><label className="contact-consent"><input type="checkbox" name="permission" value="I agree to be contacted about this enquiry" required/><span>It's okay to contact me about this enquiry.</span></label><button className="contact-submit" type="submit" disabled={sending}>{sending ? 'Sending your message…' : submitted ? 'Message sent' : 'Send your message'} {submitted ? <Check size={18}/> : <Send size={17}/>}</button>{submitted && <p className="contact-feedback success"><Check size={16}/> Thanks — your message has been sent. We'll be in touch soon.</p>}{error && <p className="contact-feedback error">{error} <a href={fallbackUrl}>Open a pre-filled email draft</a></p>}<p className="contact-form-note"><Clock3 size={14}/> We aim to respond as soon as possible. Your details are used to respond to this enquiry.</p></form></section>
    <section className="contact-details-band"><div className="contact-details-heading"><span className="contact-section-tag">02 / Find us</span><h2>Real people.<br/><em>Right here.</em></h2></div><div className="contact-detail-cards">{contactDetails.map(d=><a className="contact-detail-card" href={d.href} key={d.label} target={d.label==='Our address'?'_blank':undefined} rel={d.label==='Our address'?'noreferrer':undefined}><d.icon size={21}/><span>{d.label}</span><strong>{d.value}</strong><ArrowUpRight size={16}/></a>)}</div></section>
    <section className="contact-social-band"><div><span className="contact-section-tag">03 / Stay connected</span><h2>Follow what<br/><em>we're making.</em></h2></div><div className="contact-social-links"><a href="https://www.instagram.com/quadrafroyn_/" target="_blank" rel="noreferrer"><Instagram/>Instagram <ArrowUpRight size={15}/></a><a href="https://www.linkedin.com/company/quadrafroynsolutions" target="_blank" rel="noreferrer"><Linkedin/>LinkedIn <ArrowUpRight size={15}/></a><a href="https://x.com/quadrafroyn_" target="_blank" rel="noreferrer"><span className="x-social">𝕏</span>Twitter / X <ArrowUpRight size={15}/></a><a href="https://www.facebook.com/quadrafroynsolutions" target="_blank" rel="noreferrer"><span className="facebook-social">f</span>Facebook <ArrowUpRight size={15}/></a><a href="https://wa.me/917200517609" target="_blank" rel="noreferrer"><MessageCircle/>WhatsApp <ArrowUpRight size={15}/></a></div></section>
  </div>;
}
export default ContactPage;
