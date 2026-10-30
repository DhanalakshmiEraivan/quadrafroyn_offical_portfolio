import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, ArrowUpRight, Archive, Check, ChevronDown, FileText, Fingerprint, FolderOpen, GitBranch, Layers3, LockKeyhole, Network, ShieldCheck, Workflow } from 'lucide-react';
import './EnterpriseContentManagement.css';

const images = {
  hero: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=85',
  workspace: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1500&q=85',
  archive: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1500&q=85',
  team: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1500&q=85',
};

const capabilities = [
  { title: 'Enterprise Document Management', number: '01', icon: FileText, description: 'Give critical business documents a clear home, a dependable structure, and a lifecycle people can understand.', details: ['Centralised repositories and metadata', 'Versioning, search, and retention', 'Role-aware access and audit history'] },
  { title: 'Content Workflow Automation', number: '02', icon: Workflow, description: 'Move content through review, approval, and delivery with less manual coordination and more visible control.', details: ['Configurable approval paths', 'Task routing and notifications', 'Exceptions and escalation rules'] },
  { title: 'Digital Asset Management', number: '03', icon: Layers3, description: 'Make brand, media, and operational assets easier to organise, discover, reuse, and maintain.', details: ['Structured asset libraries', 'Metadata and discovery', 'Renditions and controlled sharing'] },
  { title: 'Content Security & Governance', number: '04', icon: ShieldCheck, description: 'Protect information with policies and permissions that reflect the way your organisation works.', details: ['Access policies and permissions', 'Retention and disposition controls', 'Traceable governance practices'] },
];

function useCinematicReveal() {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = root.current;
    if (!node) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const items = node.querySelectorAll<HTMLElement>('[data-reveal]');
    if (reduced || !('IntersectionObserver' in window)) {
      items.forEach((item) => item.classList.add('ecm-in'));
      return;
    }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('ecm-in'); observer.unobserve(entry.target); }
    }), { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
  return root;
}

function EcosystemVisual() {
  return <div className="ecm-ecosystem" aria-label="Illustrative enterprise content ecosystem diagram">
    <div className="ecm-eco-orbit ecm-orbit-one"/><div className="ecm-eco-orbit ecm-orbit-two"/>
    <svg className="ecm-eco-lines" viewBox="0 0 600 500" aria-hidden="true"><path d="M300 250 L115 105 M300 250 L490 105 M300 250 L105 390 M300 250 L490 390 M300 250 L300 45 M300 250 L300 455"/><circle cx="115" cy="105" r="4"/><circle cx="490" cy="105" r="4"/><circle cx="105" cy="390" r="4"/><circle cx="490" cy="390" r="4"/><circle cx="300" cy="45" r="4"/><circle cx="300" cy="455" r="4"/></svg>
    <div className="ecm-eco-core"><div className="ecm-core-mark"><Network size={27}/></div><span>CONTENT HUB</span><strong>One source<br/>of clarity.</strong><small>QF / ECMS</small></div>
    <div className="ecm-eco-node node-doc"><FileText/><span>DOCUMENTS</span><b>04.8k</b></div>
    <div className="ecm-eco-node node-flow"><GitBranch/><span>WORKFLOWS</span><b>ACTIVE</b></div>
    <div className="ecm-eco-node node-secure"><LockKeyhole/><span>GOVERNANCE</span><b>POLICY ON</b></div>
    <div className="ecm-eco-node node-assets"><Archive/><span>ASSETS</span><b>LIBRARY</b></div>
    <div className="ecm-eco-caption"><i/> CONNECTED CONTENT ENVIRONMENT</div>
  </div>;
}

function ChallengeVisual() {
  return <div className="ecm-fragment-visual" aria-label="Illustration of disconnected content becoming organised">
    <div className="ecm-frag-label">BEFORE / FRAGMENTED</div>
    <div className="ecm-frag-sheet sheet-a"><FileText/><span>Q3_strategy_v4</span><small>DOC · 2.4 MB</small></div>
    <div className="ecm-frag-sheet sheet-b"><FolderOpen/><span>Shared folder</span><small>UNSORTED · 128 ITEMS</small></div>
    <div className="ecm-frag-sheet sheet-c"><Archive/><span>Legacy archive</span><small>ACCESS UNKNOWN</small></div>
    <div className="ecm-frag-sheet sheet-d"><Workflow/><span>Approval chain</span><small>WAITING · 6 DAYS</small></div>
    <div className="ecm-frag-cross">×</div>
    <div className="ecm-frag-result"><div className="ecm-result-icon"><Network/></div><span>AFTER / CONNECTED</span><strong>A governed<br/>content system.</strong><small>FIND · TRUST · ACT</small></div>
  </div>;
}

export default function EnterpriseContentManagementPage() {
  const root = useCinematicReveal();
  const [activeCapability, setActiveCapability] = useState(0);
  return <div className="ecm-page" ref={root}>
    <section className="ecm-hero">
      <div className="ecm-hero-copy" data-reveal>
        <span className="ecm-eyebrow"><i/> ENTERPRISE CONTENT MANAGEMENT <b>01 / 07</b></span>
        <h1>Make every piece<br/>of content <em>work<br/>as one.</em></h1>
        <p>Bring documents, digital assets, approvals, and information into a connected environment—designed for clarity, control, and confident work at enterprise scale.</p>
        <div className="ecm-hero-actions"><a className="ecm-btn ecm-btn-dark" href="#approach">Explore Our Approach <ArrowDown size={16}/></a><Link className="ecm-btn ecm-btn-line" to="/contact">Discuss Your Project <ArrowUpRight size={16}/></Link></div>
        <div className="ecm-hero-foot"><span><i/> STRUCTURE / AUTOMATION / GOVERNANCE</span><span>QUADRAFROYN · SYSTEMS THAT CONNECT</span></div>
      </div>
      <div className="ecm-hero-art" data-reveal>
        <img src={images.hero} alt="Contemporary enterprise workspace with a calm, organised digital working environment" fetchPriority="high"/>
        <div className="ecm-hero-art-shade"/><div className="ecm-hero-art-grid"/>
        <div className="ecm-floating-card ecm-float-top"><span>CONTENT OPERATIONS</span><b>Connected by design</b><i><Check size={13}/> SYSTEM READY</i></div>
        <div className="ecm-floating-card ecm-float-bottom"><div className="ecm-float-symbol"><Network/></div><div><span>INFORMATION FLOW</span><b>One governed ecosystem</b></div><ArrowUpRight size={17}/></div>
        <div className="ecm-image-index">FIG. 01 <span>THE CONNECTED ENTERPRISE</span></div>
      </div>
    </section>

    <section className="ecm-intro" data-reveal><span className="ecm-eyebrow">THE CASE FOR CLARITY <b>02 / 07</b></span><div><h2>When content is everywhere,<br/><em>clarity is nowhere.</em></h2><p>Critical information often lives across folders, platforms, inboxes, and disconnected processes. The result is friction where there should be flow.</p></div></section>

    <section className="ecm-challenge" data-reveal><div className="ecm-challenge-copy"><span className="ecm-eyebrow">THE CHALLENGE <b>03 / 07</b></span><h2>Scattered by default.<br/><em>Hard to trust.</em></h2><p>Fragmented repositories, inconsistent versions, slow approvals, and unclear permissions make everyday information harder to find—and harder to govern.</p><div className="ecm-challenge-list"><span><b>01</b> Fragmented content</span><span><b>02</b> Disconnected systems</span><span><b>03</b> Manual workflows</span><span><b>04</b> Unclear control</span></div></div><ChallengeVisual/></section>

    <section className="ecm-approach" id="approach"><div className="ecm-approach-head" data-reveal><span className="ecm-eyebrow">OUR APPROACH <b>04 / 07</b></span><h2>One ecosystem.<br/><em>Every asset in context.</em></h2><p>We connect the content lifecycle—from creation and classification to review, access, retention, and discovery.</p></div><EcosystemVisual/><div className="ecm-approach-foot"><span>01 / CENTRAL CONTENT HUB</span><span>02 / CONNECTED SYSTEMS</span><span>03 / CONTROLLED WORKFLOWS</span><span>04 / SECURE ACCESS</span></div></section>

    <section className="ecm-showcase"><div className="ecm-showcase-head" data-reveal><span className="ecm-eyebrow">ILLUSTRATIVE APPLICATIONS <b>05 / 07</b></span><h2>Designed around<br/><em>the work itself.</em></h2><p>Three example environments show how a considered content foundation can support different kinds of enterprise work. These are illustrative concepts, not claimed client engagements.</p></div>
      <article className="ecm-case ecm-case-one" data-reveal><div className="ecm-case-image"><img src={images.workspace} alt="Modern collaborative workspace representing a connected document environment" loading="lazy"/><div className="ecm-case-ui ecm-ui-library"><span>CONTENT LIBRARY / OVERVIEW</span><b>Company knowledge</b><div className="ecm-ui-row"><FileText/> Policies & standards <small>128</small></div><div className="ecm-ui-row"><FolderOpen/> Operations <small>084</small></div><div className="ecm-ui-row"><Archive/> Brand resources <small>042</small></div><div className="ecm-ui-status"><i/> INDEXED AND GOVERNED</div></div><span className="ecm-case-image-label">CONCEPT 01 / KNOWLEDGE LIBRARY</span></div><div className="ecm-case-copy"><span>01 — INFORMATION ARCHITECTURE</span><h3>A home for<br/>business knowledge.</h3><p>A structured content environment makes approved information easier to locate, understand, and reuse across teams.</p><b>VALUE / DISCOVERABILITY + CONSISTENCY</b></div></article>
      <article className="ecm-case ecm-case-two" data-reveal><div className="ecm-case-copy"><span>02 — PROCESS DESIGN</span><h3>Approvals that<br/>keep moving.</h3><p>Connected review paths bring visibility to ownership, status, and next steps—without losing the audit trail.</p><b>VALUE / ACCOUNTABILITY + FLOW</b></div><div className="ecm-case-image"><img src={images.archive} alt="Professional working with organised digital information" loading="lazy"/><div className="ecm-case-ui ecm-ui-approval"><span>WORKFLOW / APPROVAL</span><b>Content review</b><div className="ecm-approval-step done"><Check/> Draft received <small>COMPLETE</small></div><div className="ecm-approval-step active"><Fingerprint/> Owner review <small>IN PROGRESS</small></div><div className="ecm-approval-step"><ShieldCheck/> Final release <small>UP NEXT</small></div></div><span className="ecm-case-image-label">CONCEPT 02 / CONTROLLED WORKFLOW</span></div></article>
      <article className="ecm-case ecm-case-three" data-reveal><div className="ecm-case-image"><img src={images.team} alt="Thoughtful modern team workspace representing governed digital assets" loading="lazy"/><div className="ecm-case-ui ecm-ui-assets"><span>ASSET SPACE / BRAND</span><b>Shared creative assets</b><div className="ecm-asset-thumbs"><i/><i/><i/><i/></div><div className="ecm-ui-status"><i/> PERMISSIONS APPLIED</div></div><span className="ecm-case-image-label">CONCEPT 03 / DIGITAL ASSET SPACE</span></div><div className="ecm-case-copy"><span>03 — DIGITAL ASSET GOVERNANCE</span><h3>Assets, organised<br/>for reuse.</h3><p>Centralised libraries and clear permissions help teams find approved assets and use them with confidence.</p><b>VALUE / REUSE + CONTROL</b></div></article>
    </section>

    <section className="ecm-capabilities"><div className="ecm-cap-head" data-reveal><span className="ecm-eyebrow">FOCUSED CAPABILITIES <b>06 / 07</b></span><h2>The essential parts<br/>of <em>content control.</em></h2><p>Four connected capabilities. One practical content strategy.</p></div><div className="ecm-cap-layout" data-reveal><div className="ecm-cap-list">{capabilities.map((item,i)=>{const Icon=item.icon;return <button key={item.number} className={activeCapability===i?'active':''} onClick={()=>setActiveCapability(i)} aria-expanded={activeCapability===i}><span>{item.number}</span><strong>{item.title}</strong><Icon size={19}/><ChevronDown className="ecm-cap-chevron" size={16}/></button>})}</div><article className="ecm-cap-detail"><span>CAPABILITY / {capabilities[activeCapability].number}</span><div className="ecm-cap-detail-icon">{(() => {const Icon=capabilities[activeCapability].icon;return <Icon size={25}/>})()}</div><h3>{capabilities[activeCapability].title}</h3><p>{capabilities[activeCapability].description}</p><ul>{capabilities[activeCapability].details.map(detail=><li key={detail}><Check size={15}/>{detail}</li>)}</ul><div className="ecm-cap-detail-foot">QUADRAFROYN / CONTENT SYSTEMS</div></article></div></section>

    <section className="ecm-final-cta" data-reveal><div className="ecm-cta-orbit"/><div className="ecm-cta-content"><span className="ecm-eyebrow">MAKE INFORMATION WORK BETTER <b>07 / 07</b></span><h2>Bring every piece of your<br/><em>enterprise content together.</em></h2><p>Let's create a content environment where information is organised, workflows are clear, and control is built in.</p><Link to="/contact" className="ecm-btn ecm-btn-dark">Let's Build Together <ArrowUpRight size={17}/></Link></div><div className="ecm-cta-mark"><Network size={42}/><span>QF / ECMS</span></div></section>
  </div>;
}
