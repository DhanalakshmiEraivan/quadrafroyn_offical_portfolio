import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUp, Check, Copy, Contrast, Minus, Plus, Printer, Share2, SlidersHorizontal, Sparkles, Type, X, Zap } from 'lucide-react';

export default function SiteUtilities() {
  const location = useLocation();
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const [fontScale, setFontScale] = useState(1);
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [copied, setCopied] = useState(false);
  const [shareMessage, setShareMessage] = useState('');

  useEffect(() => {
    const update = () => { const max = document.documentElement.scrollHeight - window.innerHeight; setProgress(max > 0 ? Math.min(100, window.scrollY / max * 100) : 0); };
    window.addEventListener('scroll', update, { passive: true }); window.addEventListener('resize', update); update();
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, [location.pathname]);
  useEffect(() => { document.documentElement.style.fontSize = `${16 * fontScale}px`; return () => { document.documentElement.style.fontSize = ''; }; }, [fontScale]);
  useEffect(() => { document.documentElement.classList.toggle('qf-high-contrast', highContrast); return () => document.documentElement.classList.remove('qf-high-contrast'); }, [highContrast]);
  useEffect(() => { document.documentElement.classList.toggle('qf-reduced-motion', reducedMotion); return () => document.documentElement.classList.remove('qf-reduced-motion'); }, [reducedMotion]);
  useEffect(() => { const onKey = (e: KeyboardEvent) => { if (!e.altKey) return; if (e.key === '0') { window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' }); } else if (e.key === '1') window.location.href = '/'; else if (e.key === '2') window.location.href = '/services'; else if (e.key === '3') window.location.href = '/contact'; else if (e.key.toLowerCase() === 'u') setOpen(v => !v); }; window.addEventListener('keydown', onKey); return () => window.removeEventListener('keydown', onKey); }, [reducedMotion]);

  async function copyEmail() { try { await navigator.clipboard.writeText('quadrafroyn@gmail.com'); setCopied(true); window.setTimeout(() => setCopied(false), 1800); } catch { setShareMessage('Email: quadrafroyn@gmail.com'); } }
  async function sharePage() { try { if (navigator.share) { await navigator.share({ title: document.title, text: 'Explore QuadraFroyn Solutions', url: window.location.href }); setShareMessage('Share sheet opened'); } else { await navigator.clipboard.writeText(window.location.href); setShareMessage('Page link copied'); } } catch { setShareMessage('Sharing cancelled'); } window.setTimeout(() => setShareMessage(''), 2200); }

  return <>
    <a className="qf-skip-link" href="#main-content">Skip to main content</a>
    <div className="qf-reading-progress" aria-hidden="true"><span style={{ width: `${progress}%` }} /></div>
    <aside className={`qf-utility-dock ${open ? 'is-open' : ''}`} aria-label="Site quick tools">
      <button className="qf-utility-toggle" type="button" aria-expanded={open} aria-label={open ? 'Close quick tools' : 'Open quick tools'} onClick={() => setOpen(v => !v)}>{open ? <X size={18}/> : <SlidersHorizontal size={18}/>}</button>
      {open && <div className="qf-utility-panel"><div className="qf-utility-heading"><span><Sparkles size={14}/> QUICK TOOLS</span><small>ALT + U</small></div>
        <div className="qf-utility-font"><span><Type size={15}/> Text size</span><div><button type="button" aria-label="Decrease text size" onClick={() => setFontScale(v => Math.max(.9, +(v - .05).toFixed(2)))}><Minus size={14}/></button><b>{Math.round(fontScale * 100)}%</b><button type="button" aria-label="Increase text size" onClick={() => setFontScale(v => Math.min(1.2, +(v + .05).toFixed(2)))}><Plus size={14}/></button><button type="button" aria-label="Reset text size" onClick={() => setFontScale(1)}>Reset</button></div></div>
        <button type="button" className="qf-utility-action" onClick={() => setHighContrast(v => !v)}><Contrast size={15}/>{highContrast ? 'Turn off high contrast' : 'High contrast'}<span>{highContrast ? 'ON' : 'OFF'}</span></button>
        <button type="button" className="qf-utility-action" onClick={() => setReducedMotion(v => !v)}><Zap size={15}/>{reducedMotion ? 'Enable motion' : 'Reduce motion'}<span>{reducedMotion ? 'ON' : 'OFF'}</span></button>
        <button type="button" className="qf-utility-action" onClick={copyEmail}>{copied ? <Check size={15}/> : <Copy size={15}/>} {copied ? 'Email copied' : 'Copy contact email'}</button>
        <button type="button" className="qf-utility-action" onClick={sharePage}><Share2 size={15}/> Share this page</button>
        <button type="button" className="qf-utility-action" onClick={() => window.print()}><Printer size={15}/> Print / save PDF</button>
        <div className="qf-utility-links"><Link to="/">Home</Link><Link to="/services">Services</Link><Link to="/work">Work</Link><Link to="/products">Products</Link><Link to="/contact">Contact</Link></div>
        <small className="qf-utility-shortcuts">ALT+0 Top · ALT+1 Home · ALT+2 Services · ALT+3 Contact</small>{shareMessage && <small className="qf-utility-message" role="status">{shareMessage}</small>}
      </div>}
      <button className="qf-utility-top" type="button" aria-label="Back to top" title="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' })}><ArrowUp size={18}/></button>
    </aside>
  </>;
}
