import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import type { KeyboardEvent as ReactKeyboardEvent, FormEvent } from 'react';
import { ArrowUpRight, Menu, X, ChevronDown, Search, Command, Sparkles, ArrowUp, CornerDownLeft, Instagram, Linkedin, Facebook, MessageCircle, Mail, Phone } from 'lucide-react';
import { announcements } from '@/data';

const slugify = (label: string) => label.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const navGroups = [
  { label: 'Company', links: [{label:'About Us',path:'/about-us'},{label:'Our Story',path:'/our-story'},{label:'Careers',path:'/careers'}] },
  { label: 'Products', links: [{label:'All Products',path:'/products'},{label:'QuadraConverter',path:'/quadraconverter'},{label:'QuadraAI Resume Builder',path:'/quadraai-resume-builder'}] },
  { label: 'Services', links: [{label:'Browse Services',path:'/services'},{label:'Career Guidance',path:'/career-guidance'},{label:'Solutions',path:'/solutions'},{label:'Smart IT Outsourcing',path:'/services/smart-it-outsourcing'},{label:'Mobile App Development',path:'/services/mobile-app-development'},{label:'Web Development',path:'/services/website-development'},{label:'Software Development',path:'/services/software-development'},{label:'Consulting & Support',path:'/services/consulting-and-support'},{label:'Cloud Migration',path:'/services/cloud-migration'},{label:'Open Source Customization',path:'/services/open-source-customization'},{label:'Server Management',path:'/services/server-management'}] },
  { label: 'Solutions', links: [{label:'All Solutions',path:'/solutions'},{label:'BMS (Business Management System)',path:'/business-management'},{label:'Business Intelligence',path:'/business-intelligence'},{label:'Enterprise Content Management',path:'/services/enterprise-content-management'},{label:'Workforce / Staff Management',path:'/services/workforce-staff-management'}] },
  { label: 'Resources', links: [{label:'Documentation',path:'/documentation'},{label:'Research Papers',path:'/research-papers'},{label:'Developer SDK',path:'/developer-sdk'},{label:'Community',path:'/community'},{label:'Support / Create Ticket',path:'/support'}] },
];
const primaryLinks = [{label:'Competitions',path:'/competitions'},{label:'Webinars',path:'/webinars'},{label:'Internships',path:'/internships'}];
const navLinks = [{ label: 'Home', path: '/' }, ...navGroups.flatMap(group => group.links)];



const quickActions = [
  { label: 'Home', detail: 'Return to the beginning', path: '/' },
  { label: 'QuadraConverter', detail: 'Document productivity workspace', path: '/quadraconverter' },
  { label: 'QuadraAI Resume Builder', detail: 'Build a stronger career story', path: '/quadraai-resume-builder' },
  { label: 'Explore all products', detail: 'Browse the product ecosystem', path: '/products' },
  { label: 'Agentic workflows', detail: 'Orchestration and specialist agents', path: '/agentic-workflows' },
  { label: 'Our services', detail: 'Explore how we work with teams', path: '/services' },
  { label: 'Selected work', detail: 'Projects and outcomes', path: '/work' },
  { label: 'Contact the team', detail: 'Start a conversation', path: '/contact' },
];

export function CommandExperience() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); setOpen(v => !v); }
      if (event.key === 'Escape') setOpen(false);
    };
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
    };
    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return;
      document.documentElement.style.setProperty('--pointer-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--pointer-y', `${event.clientY}px`);
    };
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('keydown', onKey);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => { window.removeEventListener('keydown', onKey); window.removeEventListener('scroll', onScroll); window.removeEventListener('pointermove', onPointerMove); };
  }, []);
  useEffect(() => { if (open) window.setTimeout(() => inputRef.current?.focus(), 40); else { setQuery(''); setActiveIndex(0); } }, [open]);
  const results = quickActions.filter(item => `${item.label} ${item.detail}`.toLowerCase().includes(query.toLowerCase()));
  useEffect(() => { setActiveIndex(0); }, [query]);
  const handleSearchKeyDown = (event: ReactKeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowDown') { event.preventDefault(); setActiveIndex(index => Math.min(index + 1, Math.max(0, results.length - 1))); }
    if (event.key === 'ArrowUp') { event.preventDefault(); setActiveIndex(index => Math.max(0, index - 1)); }
    if (event.key === 'Enter' && results[activeIndex]) { event.preventDefault(); navigate(results[activeIndex].path); setOpen(false); }
  };
  return <>
    <div className="reading-progress" aria-hidden="true"><span style={{ width: `${scrollProgress}%` }} /></div>
    <button className="command-launcher" onClick={() => setOpen(true)} aria-label="Open quick navigation"><Search size={17}/><span>Quick explore</span><kbd>⌘ K</kbd></button>
    {open && <div className="command-backdrop" onMouseDown={e => { if (e.target === e.currentTarget) setOpen(false); }}>
      <section className="command-dialog" role="dialog" aria-modal="true" aria-label="Quick explore navigation">
        <div className="command-search"><Search size={20}/><input ref={inputRef} value={query} onChange={e => setQuery(e.target.value)} onKeyDown={handleSearchKeyDown} placeholder="Where would you like to go?" aria-label="Search pages" aria-controls="quick-explore-results" aria-autocomplete="list"/><kbd>ESC</kbd></div>
        <div className="command-results" id="quick-explore-results"><p className="command-caption"><Sparkles size={13}/> SUGGESTED DESTINATIONS</p>
          {results.map((item, index) => <Link to={item.path} key={item.path} className={`command-result ${activeIndex === index ? 'is-active' : ''}`} onMouseEnter={() => setActiveIndex(index)} onClick={() => setOpen(false)}><span className="command-result-icon"><Command size={15}/></span><span><strong>{item.label}</strong><small>{item.detail}</small></span><span className="command-result-index">{String(index + 1).padStart(2, '0')} <ArrowUpRight size={14}/></span></Link>)}
          {!results.length && <p className="command-empty">No exact match. Try “products”, “AI”, or “contact”.</p>}
        </div>
        <footer className="command-footer"><span>QUADRAFROYN <i>·</i> QUICK NAVIGATION</span><span className="command-shortcuts"><kbd>↑</kbd> <kbd>↓</kbd> navigate <kbd><CornerDownLeft size={10}/></kbd> open</span></footer>
      </section>
    </div>}
    <div className="ambient-pointer-glow" aria-hidden="true"/>
  </>;
}

export function AnnouncementBar() {
  const items = [...announcements, ...announcements];
  return (
    <div className="announcement-bar">
      <div className="announcement-track">
        {items.map((text, i) => (
          <span key={i} className="announcement-item">
            <i className="announcement-dot" /> {text}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);
  const menuPanelRef = useRef<HTMLElement>(null);
  const menuTriggerRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    setOpenGroup(null);
    setMenuOpen(false);
  }, [location.pathname, location.search, location.hash]);
  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const focusTimer = window.setTimeout(() => menuPanelRef.current?.querySelector<HTMLButtonElement>('.mobile-menu-close')?.focus(), 60);
    const trapFocus = (event: KeyboardEvent) => {
      if (event.key !== 'Tab' || !menuPanelRef.current) return;
      const focusable = Array.from(menuPanelRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', trapFocus);
    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', trapFocus);
      menuTriggerRef.current?.focus({ preventScroll: true });
    };
  }, [menuOpen]);
  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) setOpenGroup(null);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpenGroup(null); setMenuOpen(false); }
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => { document.removeEventListener('pointerdown', onPointerDown); document.removeEventListener('keydown', onKeyDown); };
  }, []);

  return (
    <header ref={headerRef} className={`site-header ${menuOpen ? 'menu-is-open' : ''}`}>
      <Link className="brand" to="/" onClick={() => setMenuOpen(false)} aria-label="Quadrafroyn home">
        <img className="brand-logo" src="/quadrafroyn-logo.png" alt="Quadrafroyn Solutions logo" />
        <span className="brand-copy"><strong>QUADRAFROYN</strong><small>SOLUTIONS</small></span>
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <Link to="/" className={location.pathname === '/' ? 'nav-active' : ''}>Home</Link>
        {primaryLinks.map(link => <Link key={link.path} to={link.path} className={location.pathname===link.path?'nav-active':''}>{link.label}</Link>)}
        {navGroups.map((group) => <div className={`nav-dropdown nav-dropdown-${group.label.toLowerCase()} ${openGroup === group.label ? 'is-open' : ''}`} key={group.label} onMouseEnter={() => { if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) setOpenGroup(group.label); }} onMouseLeave={() => { if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) setOpenGroup(null); }}>
          <button type="button" aria-haspopup="true" aria-expanded={openGroup === group.label} onClick={() => setOpenGroup(current => current === group.label ? null : group.label)}>{group.label}<ChevronDown size={16}/></button>
          <div className="nav-dropdown-panel">
            <div className="mega-menu-intro">
              <span className="mega-menu-kicker">EXPLORE QUADRAFROYN</span>
              <h3>{group.label}<br/><em>made meaningful.</em></h3>
              <p>{group.label === 'Products' ? 'Purpose-built digital products that make everyday work clearer, faster and more capable.' : group.label === 'Services' ? 'From first idea to production-ready platforms, bring the right expertise to every challenge.' : group.label === 'Solutions' ? 'Connected systems and intelligent tools designed around the way your organisation works.' : 'Practical knowledge, research and support to help teams keep moving forward.'}</p>
              <Link className="mega-menu-cta" to={group.label === 'Products' ? '/products' : group.label === 'Services' ? '/services' : group.label === 'Solutions' ? '/solutions' : '/documentation'} onClick={() => setOpenGroup(null)}>Explore all {group.label.toLowerCase()} <ArrowUpRight size={16}/></Link>
              <div className="mega-menu-feature-image" style={{backgroundImage:`linear-gradient(180deg,transparent,#07100cbb),url(${group.label === 'Products' ? 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85' : group.label === 'Services' ? 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=85' : group.label === 'Solutions' ? 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85' : 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=85'})`}}><span>{group.label === 'Products' ? 'DIGITAL PRODUCTS' : group.label === 'Services' ? 'ENGINEERING & DESIGN' : group.label === 'Solutions' ? 'CONNECTED ENTERPRISE' : 'KNOWLEDGE & SUPPORT'}</span></div>
            </div>
            <div className="mega-menu-links"><div className="mega-menu-links-head"><span>DISCOVER</span><small>{String(group.links.length).padStart(2,'0')} DESTINATIONS</small></div><div className="mega-menu-link-grid">{group.links.map((link, index) => <Link key={`${link.path}-${link.label}`} to={link.path} style={{'--menu-index': index} as React.CSSProperties} onClick={() => setOpenGroup(null)}><span className="nav-menu-index">{String(index + 1).padStart(2, '0')}</span><span className="nav-menu-label">{link.label}</span><ArrowUpRight size={15}/></Link>)}</div><div className="mega-menu-bottom"><span>THINK · BUILD · SOLVE · PROVE</span><span>CHENNAI / RIYADH</span></div></div>
          </div>
        </div>)}
      </nav>
      <button ref={menuTriggerRef} className="menu-trigger" aria-controls="mobile-navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen((o) => !o)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
        {menuOpen ? <X size={21} /> : <Menu size={21} />}
      </button>
      {menuOpen && <button className="mobile-menu-scrim" aria-label="Close navigation panel" onClick={() => setMenuOpen(false)} />}
      <aside ref={menuPanelRef} className={`mobile-menu ${menuOpen ? 'open' : ''}`} id="mobile-navigation" aria-label="Mobile navigation" aria-hidden={!menuOpen}>
        <div className="mobile-menu-head">
          <div><span className="menu-kicker">Explore Quadrafroyn</span><strong>Find your next move.</strong></div>
          <button type="button" className="mobile-menu-close" aria-label="Close navigation menu" onClick={() => setMenuOpen(false)}><X size={22} strokeWidth={2.2} /></button>
        </div>
        <div className="mobile-menu-scroll">
          <Link to="/" onClick={() => setMenuOpen(false)} className="mobile-menu-home"><span>01</span>Home<ArrowUpRight size={18} /></Link>
          <section className="mobile-nav-group mobile-primary-links"><p className="mobile-nav-group-title"><span>02</span>Explore</p>{primaryLinks.map((link,i)=><Link key={link.path} to={link.path} onClick={()=>setMenuOpen(false)}><span>{String(i+1).padStart(2,'0')}</span>{link.label}<ArrowUpRight size={16}/></Link>)}</section>
          {navGroups.map((group, groupIndex) => <section className="mobile-nav-group" key={group.label}>
            <p className="mobile-nav-group-title"><span>0{groupIndex + 2}</span>{group.label}</p>
            {group.links.slice(0, group.label === 'Services' ? 3 : group.label === 'Resources' ? 3 : 5).map((link, i) => <Link key={`${link.path}-${link.label}`} to={link.path} onClick={() => setMenuOpen(false)}><span>{String(i + 1).padStart(2, '0')}</span>{link.label}<ArrowUpRight size={16} /></Link>)}
          </section>)}
        </div>
        <div className="mobile-menu-foot"><span>AI-native software. Thoughtfully built.</span><Link to="/contact" onClick={() => setMenuOpen(false)}>Talk to our team <ArrowUpRight size={15}/></Link></div>
      </aside>
    </header>
  );
}

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState('');
  const [newsletterBusy, setNewsletterBusy] = useState(false);
  async function subscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setNewsletterBusy(true); setNewsletterStatus('');
    try {
      const response = await fetch('/api/send-email', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({type:'newsletter', name:'Newsletter subscriber', email:newsletterEmail, message:'Please add this address to the QuadraFroyn newsletter list.'}) });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.error || 'Subscription is temporarily unavailable.');
      setNewsletterStatus('Thank you — your request has been received.'); setNewsletterEmail('');
    } catch { setNewsletterStatus('Email subscription is not configured yet. Please contact quadrafroyn@gmail.com.'); }
    finally { setNewsletterBusy(false); }
  }
  const groups = [
    {title:'Services',links:[['Mobile app development','/services/mobile-app-development'],['Web development','/services/web-development'],['Software development','/services/software-development'],['Consulting & support','/services/consulting-and-support'],['Cloud migration','/services/cloud-migration'],['Open source customization','/services/open-source-customization']]},
    {title:'Business solutions',links:[['Business management','/business-management'],['Business intelligence','/business-intelligence'],['Workforce management','/workforce-management'],['Data orchestration','/data-orchestration']]},
    {title:'Explore',links:[['Our services','/services'],['Our work','/work'],['Our process','/process'],['Products','/products'],['About us','/about-us']]},
    {title:'Connect',links:[['Contact us','/contact'],['Get a quote','/get-a-quote'],['Documentation','/documentation'],['Support','/support'],['Careers','/careers']]},
  ];
  return <footer className="site-footer">
    <div className="footer-link-grid footer-v26-grid">
      <div className="footer-brand-column">
        <Link className="brand footer-brand" to="/"><img className="brand-logo" src="/quadrafroyn-logo.png" alt="Quadrafroyn Solutions logo"/><span className="brand-copy"><strong>QUADRAFROYN</strong><small>SOLUTIONS</small></span></Link>
        <p>We communicate with customers as one cross-functional team — bringing thoughtful design, reliable engineering, and shared goals to every digital project.</p>
        <Link className="footer-know-more" to="/about-us">Know more <ArrowUpRight size={16}/></Link>
        <div className="footer-newsletter"><h3>Subscribe newsletter</h3><p>Fresh perspectives on technology, product thinking, and useful digital tools.</p><form className="footer-subscribe-form" onSubmit={subscribe}><label className="sr-only" htmlFor="footer-newsletter-email">Email address</label><input id="footer-newsletter-email" type="email" value={newsletterEmail} onChange={e=>setNewsletterEmail(e.target.value)} placeholder="Email address" autoComplete="email" required/><button type="submit" disabled={newsletterBusy}>{newsletterBusy?'Sending…':'Subscribe'}</button></form>{newsletterStatus&&<small role="status">{newsletterStatus}</small>}</div>
      </div>
      {groups.map(group=><div className="footer-link-column" key={group.title}><h3>{group.title}</h3>{group.links.map(([label,path])=><Link key={label} to={path}>{label}<ArrowUpRight size={13}/></Link>)}</div>)}
    </div>
    <div className="footer-social-row" aria-label="Social media and contact links"><span className="footer-social-label">FOLLOW THE WORK</span><div className="footer-socials"><a href="https://www.instagram.com/quadrafroyn_/" target="_blank" rel="noreferrer" aria-label="Instagram" title="Instagram"><Instagram aria-hidden="true"/></a><a href="https://www.linkedin.com/company/quadrafroynsolutions" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn"><Linkedin aria-hidden="true"/></a><a href="https://x.com/quadrafroyn_" target="_blank" rel="noreferrer" aria-label="X / Twitter" title="X / Twitter"><X aria-hidden="true"/></a><a href="https://www.facebook.com/quadrafroynsolutions" target="_blank" rel="noreferrer" aria-label="Facebook" title="Facebook"><Facebook aria-hidden="true"/></a><a href="https://wa.me/917200517609" target="_blank" rel="noreferrer" aria-label="WhatsApp" title="WhatsApp"><MessageCircle aria-hidden="true"/></a></div><div className="footer-contact-shortcuts"><a href="mailto:quadrafroyn@gmail.com"><Mail size={15}/> quadrafroyn@gmail.com</a><a href="tel:+917200517609"><Phone size={15}/> +91 7200517609</a></div></div>
    <div className="footer-bottom"><span>© 2026 Quadrafroyn Solutions</span><span>Thoughtful · Composable · Secure</span><span><Link to="/privacy-policy">Privacy</Link> · <Link to="/terms-and-conditions">Terms</Link> · <Link to="/accessibility">Accessibility</Link></span></div>
  </footer>;
}
