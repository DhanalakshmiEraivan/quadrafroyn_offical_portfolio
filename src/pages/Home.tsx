import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Play,
  Sparkles, Layers3, Zap, Brain,
  Shield, Database, Cpu, Network, Gauge, Lock,
} from 'lucide-react';
import { homeHeroImages as heroSlides, unlockImages, craftServiceImages } from '@/imageInventory';
import { useReveal, useDragScroll } from '@/hooks';
import VisualDiaryGallery from '@/components/VisualDiaryGallery';

const services = [
  { number: '01', title: 'Mobile App Development', text: 'Intuitive mobile experiences that connect people, simplify operations and bring powerful ideas to life.', image: craftServiceImages[8], path: '/services/mobile-app-development', visual: 'mobile', tag: 'DESIGNED FOR PEOPLE' },
  { number: '02', title: 'Web Development', text: 'Distinctive, high-performance websites that turn digital interactions into meaningful business experiences.', image: craftServiceImages[9], path: '/services/website-development', visual: 'web', tag: 'BUILT TO PERFORM' },
  { number: '03', title: 'Software Development', text: 'Custom-engineered software shaped around your business processes, operational needs and future ambitions.', image: craftServiceImages[5], path: '/services/software-development', visual: 'software', tag: 'ENGINEERED WITH INTENT' },
  { number: '04', title: 'Consulting & Support', text: 'Confident technology decisions, practical solutions to complex challenges and dependable digital foundations.', image: craftServiceImages[10], path: '/services/consulting-and-support', visual: 'consulting', tag: 'CLARITY FIRST' },
  { number: '05', title: 'Cloud Migration', text: 'Secure, scalable cloud environments that move your infrastructure beyond yesterday’s limitations.', image: craftServiceImages[6], path: '/services/cloud-migration', visual: 'cloud', tag: 'READY TO SCALE' },
  { number: '06', title: 'Automation & SaaS', text: 'Connected systems and intelligent workflows that remove repetitive work and help teams move faster.', image: craftServiceImages[11], path: '/services/saas-automation', visual: 'automation', tag: 'MAKE WORK FLOW' },
];

const flywheelSteps = [
  { num: '1', title: 'Prepare data ontology', text: 'Autonomously and agentically prepare data ontology and knowledge graph from your enterprise estate.' },
  { num: '2', title: 'Build context graph', text: 'Autonomously prepare context graph from existing workflows and operational systems.' },
  { num: '3', title: 'Fine-tune domain SLMs', text: 'Autonomously fine-tune domain-specific small language models with enterprise context.' },
  { num: '4', title: 'Deploy agentic workflows', text: 'Deploy agentic workflows across business operations with deterministic execution.' },
  { num: '5', title: 'Compound intelligence', text: 'Compound intelligence continuously through evaluation, learning, and optimization.' },
];

const platformLayers = [
  { icon: Network, title: 'Multi-Agent Orchestration & Deterministic Execution' },
  { icon: Shield, title: 'AI Governance, Security & Model Control' },
  { icon: Cpu, title: 'Domain-specific SLMs with Enterprise Context' },
  { icon: Database, title: 'AI-Ready Data Transformation Across Fragmented Systems' },
  { icon: Gauge, title: 'Efficient AI Inferencing Optimized for Cost and Performance' },
];

const pillars = [
  { icon: Lock, title: 'Sovereign', text: 'Full control over data, models, and workflows.' },
  { icon: Layers3, title: 'Composable', text: 'Integrates seamlessly with existing tech stacks.' },
  { icon: Shield, title: 'Secure', text: 'Enterprise-wide guardrails, governance, and protection.' },
  { icon: Zap, title: 'Energy Efficient', text: 'Optimizes for control and energy efficiency.' },
  { icon: Sparkles, title: 'Research-Led', text: 'Drives continuous innovation and performance.' },
];

const stats = [
  { value: 'DATA', label: 'Context and lineage designed to make fragmented information more usable' },
  { value: 'AI', label: 'Bounded model and agent workflows with validation at key stages' },
  { value: 'OPS', label: 'Governance, observability, and deployment considerations across the lifecycle' },
];

const unlocks = [
  { title: 'Enterprise Data Context', text: 'AI that understands the meaning, relationships, and structure within your fragmented data estate.', path: '/knowledge-graphs' },
  { title: 'AI Adoption Velocity', text: 'Move from first deployment to measurable business value with a platform-first approach.', path: '/enterprise-ai' },
  { title: 'Token Economics', text: 'Domain-specific intelligence that complements expensive frontier model calls at a fraction of the cost.', path: '/inferencing' },
  { title: 'Sovereignty & Control', text: 'Run AI on any cloud and any infrastructure, with any model, without vendor lock-in.', path: '/cloud-and-sovereign' },
  { title: 'Compounding Intelligence', text: 'A unified platform that compounds intelligence across your stack, unlike point solutions that start from zero.', path: '/data-orchestration' },
];



const researchPapers = [
  { venue: 'EXPLORATORY NOTE', title: 'Designing Bounded AI Workflows', text: 'A conceptual look at tool boundaries, validation checkpoints, and human review in multi-step systems.' },
  { venue: 'TECHNICAL EXPLORATION', title: 'From Disconnected Records to Useful Context', text: 'Questions around data quality, lineage, and source traceability for contextual applications.' },
  { venue: 'RESEARCH NOTE', title: 'Knowledge Graphs as a Context Layer', text: 'A problem-framing note on entity resolution, provenance, and graph-based retrieval.' },
];

const researchAreas = [
  'Model Drift Detection', 'Context-Aware Inferencing', 'Agentic Process Discovery',
  'Deterministic Agent Execution', 'Agentic Workflow Orchestration', 'Neuro-Symbolic Agents',
  'Autonomous SLM Fine-Tuning', 'Multi-Agent Evaluations', 'Prompt Optimization',
];

function Home() {
  useReveal();
  const [heroSlide, setHeroSlide] = useState(0);
  const [activeCapability, setActiveCapability] = useState(0);
  const [motionPaused, setMotionPaused] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showShortcuts, setShowShortcuts] = useState(false);
  const [copied, setCopied] = useState(false);
  const goCapability = (i: number) => { const n=Math.max(0,Math.min(unlocks.length-1,i));setActiveCapability(n);unlockRef.current?.querySelectorAll<HTMLElement>('.unlock-card')[n]?.scrollIntoView({behavior:'smooth',inline:'center',block:'nearest'}); };
  useEffect(()=>{const update=()=>{const max=document.documentElement.scrollHeight-window.innerHeight;setScrollProgress(max>0?window.scrollY/max*100:0)};window.addEventListener('scroll',update,{passive:true});update();return()=>window.removeEventListener('scroll',update)},[]);
  useEffect(()=>{const handler=(e:KeyboardEvent)=>{if((e.target as HTMLElement)?.closest('input,textarea,[contenteditable="true"]'))return;if(e.key==='Escape')setShowShortcuts(false);if(e.key==='?' )setShowShortcuts(v=>!v);};window.addEventListener('keydown',handler);return()=>window.removeEventListener('keydown',handler)},[]);
  useEffect(()=>{const el=unlockRef.current;if(!el)return;const update=()=>{const cards=[...el.querySelectorAll<HTMLElement>('.unlock-card')];const center=el.scrollLeft+el.clientWidth/2;let best=0,dist=Infinity;cards.forEach((c,i)=>{const d=Math.abs(c.offsetLeft+c.offsetWidth/2-center);if(d<dist){best=i;dist=d}});setActiveCapability(best)};el.addEventListener('scroll',update,{passive:true});return()=>el.removeEventListener('scroll',update)},[]);
  useEffect(()=>{if(motionPaused)return;const timer=window.setInterval(()=>{if(!document.hidden)setHeroSlide(c=>(c+1)%heroSlides.length)},5000);return()=>clearInterval(timer)},[motionPaused]);
  const unlockRef = useDragScroll<HTMLDivElement>();
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <div className="qf-floating-tools"><button onClick={()=>setShowShortcuts(v=>!v)} aria-label="Keyboard shortcuts">?</button><button onClick={async()=>{try{await navigator.clipboard.writeText(window.location.href);setCopied(true);setTimeout(()=>setCopied(false),1800)}catch{}}} aria-label="Copy page link">{copied?'✓':'↗'}</button></div>
      {showShortcuts&&<div className="qf-shortcuts" role="dialog" aria-label="Keyboard shortcuts"><button onClick={()=>setShowShortcuts(false)} aria-label="Close shortcuts">×</button><h3>Explore with ease.</h3><p><kbd>?</kbd> Open or close this help panel</p><p><kbd>Esc</kbd> Close this panel</p><p>Use the service showcases and page links to explore QuadraFroyn.</p></div>}
      {/* Hero */}
      <section className="hero-showcase" id="home">
        <div className="hero-showcase-grid" />
        <div className="qf-reading-progress" style={{width:`${scrollProgress}%`}} aria-hidden="true" />
        <div className="hero-showcase-accent" />
        <div className="hero-showcase-inner">
          <div className="hero-showcase-copy reveal is-visible">
            <span className="eyebrow"><i /> Quadrafroyn solutions</span>
            <h1><span className="hero-wordline">Sovereign AI</span><span className="hero-wordline"><em>for the enterprise.</em></span></h1>
            <p>A unified data and AI orchestration platform that takes you from raw data to deployed agents — with governance, sovereignty, and compounding intelligence built in.</p>
            <div className="hero-showcase-actions">
              <Link className="button button-dark" to="/services">Explore what we do <ArrowUpRight size={17} /></Link>
              <span>01 — 06</span>
            </div>
          </div>
          <button className="hero-showcase-play" onClick={() => scrollTo('flywheel')}>
            <span className="hero-play-ring"><Play size={17} fill="currentColor" /></span>
            <strong>How we<br />work</strong>
          </button>
          <div className="hero-showcase-art hero-cityscape reveal is-visible" aria-label="City skyline at golden hour">
            {heroSlides.map((image, index) => <img key={image} src={image} alt={['Modern enterprise architecture','Computing hardware and digital engineering','Cloud data infrastructure'][index]} className={`${heroSlide === index ? 'active' : ''} hero-slide-${index + 1}`} />)}
            <div className="hero-city-haze" />
            <div className="hero-art-scan" />
            <div className="qf-hero-photo-credit">THE FUTURE IS BUILT HERE <span>↗</span></div>
          </div>
        </div>
        <div className="qf-hero-slide-controls" aria-label="Cityscape image controls">{heroSlides.map((_,i)=><button key={i} className={heroSlide===i?'active':''} onClick={()=>setHeroSlide(i)} aria-label={`Show cityscape ${i+1}`} aria-pressed={heroSlide===i}>{String(i+1).padStart(2,'0')}</button>)}<button onClick={()=>setMotionPaused(v=>!v)} aria-label={motionPaused?'Resume automatic hero slideshow':'Pause automatic hero slideshow'}>{motionPaused?'PLAY':'PAUSE'}</button></div>
        <div className="hero-showcase-meta">
          <span>Chennai / Riyadh</span>
          <span>Est. 2012</span>
          <span>Scroll to explore <ArrowDownRight size={15} /></span>
        </div>
      </section>

      {/* What we unlock */}
      <section className="section-pad unlock-section">
        <div className="section-heading reveal">
          <div><span className="section-label">What we unlock</span><h2>The frontiers of<br /><span>enterprise AI.</span></h2></div>
          <p>Five capabilities that separate platform-first enterprises from those stuck in tool sprawl.</p>
        </div>
        <div className="unlock-navigation"><span>EXPLORE THE CAPABILITIES / 01—05</span><div><button type="button" aria-label="Previous capability" onClick={() => goCapability(activeCapability-1)}>←</button><button type="button" aria-label="Next capability" onClick={() => goCapability(activeCapability+1)}>→</button></div></div>
        <div className="unlock-grid" ref={unlockRef} aria-label="Horizontally scrollable enterprise AI capabilities">
          {unlocks.map((item, i) => (
            <article className={`unlock-card reveal unlock-card-${i + 1}`} key={item.title}>
              <div className="unlock-card-media"><img src={unlockImages[i]} alt={`${item.title} visual`} loading="lazy" decoding="async" /><span>0{i + 1} / 05</span><ArrowUpRight size={20} /></div>
              <span className="unlock-index">0{i + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <Link className="unlock-card-link" to={item.path} aria-label={`Explore ${item.title}`}>Explore capability <ArrowUpRight size={16} /></Link>
            </article>
          ))}
        </div>
        <div className="qf-capability-pagination" role="group" aria-label="Select capability">{unlocks.map((u,i)=><button key={u.title} className={i===activeCapability?'active':''} aria-label={`View ${u.title}`} aria-pressed={i===activeCapability} onClick={()=>goCapability(i)} />)}</div>
      </section>

      {/* Flywheel */}
      <section className="section-pad flywheel-section" id="flywheel">
        <div className="section-heading reveal">
          <div><span className="section-label">What we do</span><h2>Flywheel of intelligence<br /><span>built for your business.</span></h2></div>
          <p>The intelligence advantage that gets stronger every time it runs in your business.</p>
        </div>
        <div className="flywheel-intro reveal"><span className="flywheel-tag">Agentic. Autonomous. Self-Reinforcing.</span></div>
        <div className="flywheel-track">
          {flywheelSteps.map((step, i) => (
            <article className="flywheel-step reveal" style={{ transitionDelay: `${i * 100}ms` }} key={step.num}>
              <span className="flywheel-num">{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              {i < flywheelSteps.length - 1 && <span className="flywheel-arrow"><ArrowRight size={18} /></span>}
            </article>
          ))}
        </div>
        <div className="flywheel-pills reveal">
          {['Sovereign by design', 'Open architecture', 'Works out of the box', 'One platform'].map((p) => (
            <span key={p} className="flywheel-pill">{p}</span>
          ))}
        </div>
      </section>

      {/* Platform architecture */}
      <section className="section-pad platform-section" id="platform">
        <div className="section-heading reveal">
          <div><span className="section-label">How we do it</span><h2>Data &amp; AI orchestration<br /><span>end-to-end.</span></h2></div>
          <p>End-to-end architecture built to take you from raw data to deployed agents.</p>
        </div>
        <div className="platform-stack">
          {platformLayers.map(({ icon: Icon, title }, i) => (
            <article className="platform-layer reveal" style={{ transitionDelay: `${i * 80}ms` }} key={title}>
              <Icon size={24} />
              <span className="platform-layer-num">0{platformLayers.length - i}</span>
              <h3>{title}</h3>
              <div className="platform-layer-bar"><i /></div>
            </article>
          ))}
        </div>
        <div className="pillar-grid">
          {pillars.map(({ icon: Icon, title, text }) => (
            <article className="pillar-card reveal" key={title}>
              <Icon size={22} />
              <h4>{title}</h4>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Customer momentum */}
      <section className="section-pad momentum-section">
        <div className="section-heading reveal">
          <div><span className="section-label">Engineering principles</span><h2>Designed for demanding<br /><span>enterprise environments.</span></h2></div>
          <p>A capability-led view of the architecture themes explored across this platform. Production availability and outcomes depend on the implementation.</p>
        </div>
        <div className="momentum-stats">
          {stats.map((s) => (
            <article className="momentum-stat reveal" key={s.value}>
              <strong>{s.value}</strong>
              <p>{s.label}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Inside the studio — immersive 3D showcase of real company disciplines */}
      <VisualDiaryGallery />

      {/* Research */}
      <section className="section-pad research-section">
        <div className="section-heading reveal">
          <div><span className="section-label">Research</span><h2>Where deep science<br /><span>meets enterprise AI.</span></h2></div>
          <p>We explore engineering questions around enterprise AI, contextual systems, and software reliability. The archive distinguishes exploratory notes from published research.</p>
        </div>
        <div className="research-grid">
          <div className="research-papers">
            <span className="research-subhead reveal">Research notes & technical explorations · Publication status stated clearly</span>
            {researchPapers.map((paper) => (
              <article className="research-paper reveal" key={paper.title}>
                <span className="paper-venue">{paper.venue}</span>
                <h3>{paper.title}</h3>
                <p>{paper.text}</p>
              </article>
            ))}
          </div>
          <div className="research-areas reveal">
            <span className="research-subhead">Research areas</span>
            <div className="research-area-grid">
              {researchAreas.map((area) => <span className="research-area-pill" key={area}>{area}</span>)}
            </div>
            <Link className="text-link" to="/research-papers">Explore research notes <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>

      {/* Full-stack product engineering */}
      <section className="home-engineering-strip section-pad"><div className="section-heading reveal"><div><span className="section-label">Beyond AI / Digital product studio</span><h2>We build the<br /><span>whole product.</span></h2></div><p>From brand-led websites to full-stack SaaS platforms, web applications, and mobile apps, Quadrafroyn Solutions helps take ideas from concept to launch.</p></div><div className="home-engineering-tags reveal"><span>Full-Stack Development</span><span>Website Development</span><span>Web App Development</span><span>App Development</span><span>UI/UX Design</span><span>AI Integration</span></div><Link className="button button-dark" to="/services">Explore all services <ArrowUpRight size={17}/></Link></section>

      <section className="home-career-program section-pad">
        <div className="section-heading"><div><span className="section-label">Community · Career guidance</span><h2>Learning happens<br/><span>together.</span></h2></div><p>Moments from our career guidance programme — conversations, shared discovery, and practical learning with students.</p></div>
        <div className="home-career-photos"><img src="/images/career-guidance/career-program-2.jpeg" alt="Students attending a Quadrafroyn career guidance session" loading="lazy"/><img src="/images/career-guidance/career-program-4.jpeg" alt="Career guidance demonstration in progress" loading="lazy"/><Link to="/career-guidance">Explore career guidance <ArrowUpRight size={17}/></Link></div>
      </section>

      {/* Contact CTA */}
      <section className="contact section-pad" id="contact">
        <div className="contact-panel reveal">
          <div className="contact-copy">
            <span className="section-label">Your move</span>
            <h2>Have a good<br /><span>problem?</span></h2>
            <p>Tell us what is not working, what could be better, or what you cannot stop thinking about. We will come back with a useful first response.</p>
            <div className="contact-details"><span>hello@quadrafroyn.com</span><span>Chennai · Riyadh · Everywhere</span></div>
          </div>
          <Link className="contact-cta" to="/contact">
            Start the conversation <ArrowUpRight size={22} />
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
