import { useEffect } from 'react';
import { ArrowDown, ArrowUpRight, Activity, Database, GitBranch, Layers3, LineChart, Network, ScanLine } from 'lucide-react';
import { Link } from 'react-router-dom';
import './BusinessIntelligence.css';

const projects = [
  { id: '01', name: 'Revenue intelligence', type: 'COMMERCIAL PERFORMANCE', challenge: 'Revenue signals spread across sales channels make it difficult to see what is changing and why.', solution: 'A unified performance view connecting revenue trends, product mix, targets and period comparisons.', tech: ['Power BI', 'SQL', 'Python'], theme: 'revenue' },
  { id: '02', name: 'Operations pulse', type: 'OPERATIONAL ANALYTICS', challenge: 'Operational teams need a clearer picture of throughput, bottlenecks and service levels.', solution: 'A structured KPI workspace that brings activity, capacity and exceptions into one decision flow.', tech: ['Microsoft Fabric', 'Excel', 'Power BI'], theme: 'operations' },
  { id: '03', name: 'Customer signals', type: 'CUSTOMER & GROWTH ANALYTICS', challenge: 'Customer behaviour is difficult to understand when engagement and conversion data sit apart.', solution: 'A journey-focused analytics concept for exploring acquisition, retention and conversion patterns.', tech: ['Tableau', 'Python', 'SQL'], theme: 'customer' },
];

const capabilities = [
  { n: '01', title: 'Data Integration & Engineering', detail: 'Connect, clean and shape dependable data foundations.', icon: GitBranch },
  { n: '02', title: 'Advanced Analytics', detail: 'Find patterns, explain performance and test hypotheses.', icon: LineChart },
  { n: '03', title: 'Interactive Dashboards & Reporting', detail: 'Make important signals clear, accessible and actionable.', icon: Layers3 },
  { n: '04', title: 'Predictive Intelligence', detail: 'Use forecasting and predictive models to explore what comes next.', icon: Activity },
];

const technologies = [
  { name: 'Power BI', slug: 'powerbi', color: 'F2C811' },
  { name: 'Tableau', slug: 'tableau', color: 'E97627' },
  { name: 'Python', slug: 'python', color: '3776AB' },
  { name: 'SQL', slug: 'microsoftsqlserver', color: 'CC2927' },
  { name: 'Microsoft Fabric', slug: 'microsoftfabric', color: '5C2D91' },
  { name: 'Excel', slug: 'microsoftexcel', color: '217346' },
  { name: 'Google Cloud', slug: 'googlecloud', color: '4285F4' },
];

function DashboardVisual({ theme }: { theme: string }) {
  const bars = theme === 'revenue' ? [34, 49, 43, 61, 55, 72, 66, 88, 78, 96, 84, 100] : theme === 'operations' ? [72, 58, 81, 66, 90, 73, 84, 61, 93, 78, 87, 98] : [22, 35, 31, 48, 44, 58, 52, 70, 63, 82, 76, 94];
  return <div className={`bi-dashboard bi-dashboard-${theme}`} aria-label={`${theme} business intelligence dashboard concept`}>
    <div className="bi-dash-top"><div className="bi-dash-brand"><span className="bi-brand-dot"/> QF / INTELLIGENCE</div><div className="bi-dash-period">OVERVIEW <i/> LAST 12 MONTHS</div><div className="bi-dash-menu"><i/><i/><i/></div></div>
    <div className="bi-dash-layout"><aside className="bi-dash-side"><b/><i/><i/><i/><i/><i/></aside><div className="bi-dash-main"><div className="bi-dash-title"><div><small>BUSINESS PERFORMANCE / {theme.toUpperCase()}</small><strong>{theme === 'revenue' ? 'Revenue overview' : theme === 'operations' ? 'Operations overview' : 'Customer overview'}</strong></div><span>↗ EXPORT</span></div>
      <div className="bi-kpis">{(theme === 'revenue' ? [['NET REVENUE','$2.84M','+18.6%'],['GROSS MARGIN','64.8%','+4.2%'],['TARGET ATTAINMENT','92.4%','+8.1%']] : theme === 'operations' ? [['THROUGHPUT','18.2K','+12.4%'],['ON-TIME RATE','96.8%','+3.6%'],['OPEN ITEMS','124','−9.2%']] : [['ACTIVE USERS','84.2K','+16.8%'],['CONVERSION','6.42%','+1.8%'],['RETENTION','78.6%','+5.3%']]).map(([label,value,delta]) => <div className="bi-kpi" key={label}><small>{label}</small><b>{value}</b><em>{delta}</em></div>)}</div>
      <div className="bi-chart-row"><div className="bi-chart-panel"><div className="bi-panel-head"><b>{theme === 'revenue' ? 'Revenue trajectory' : theme === 'operations' ? 'Daily throughput' : 'Engagement trend'}</b><span>12M <i>⌄</i></span></div><div className="bi-chart-area"><div className="bi-chart-guides"><i/><i/><i/><i/></div><div className="bi-bars">{bars.map((v,i)=><span key={i} style={{height:`${v}%`}}/>)}</div></div><div className="bi-months"><span>JAN</span><span>MAR</span><span>MAY</span><span>JUL</span><span>SEP</span><span>NOV</span></div></div>
      <div className="bi-insight-panel"><div className="bi-panel-head"><b>Key signals</b><span>•••</span></div><div className="bi-ring"><div><b>{theme === 'revenue' ? '84' : theme === 'operations' ? '96' : '78'}%</b><small>INDEX</small></div></div><div className="bi-insight-legend"><span><i/> Above plan</span><span><i/> Opportunity</span></div></div></div>
      <div className="bi-dash-footer"><span><i/> DATA REFRESHED / 08:42 AM</span><span>MODEL STATUS / HEALTHY</span></div>
    </div></div>
  </div>;
}

export default function BusinessIntelligence() {
  useEffect(() => {
    const root = document.querySelector('.bi-experience');
    if (!root) return;
    const nodes = Array.from(root.querySelectorAll<HTMLElement>('[data-bi-reveal]'));
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      nodes.forEach(node => node.classList.add('bi-visible'));
      return;
    }
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('bi-visible');
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.14, rootMargin: '0px 0px -45px 0px' });
    nodes.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return <main className="bi-experience">
    <section className="bi-hero" id="bi-top">
      <div className="bi-hero-grid" aria-hidden="true"/><div className="bi-hero-copy" data-bi-reveal>
        <span className="bi-eyebrow"><i/> QUADRAFROYN SOLUTIONS <b>/</b> BUSINESS INTELLIGENCE</span>
        <h1>TURN DATA INTO<br/><em>DECISIVE</em><br/>INTELLIGENCE<span className="bi-period">.</span></h1>
        <p>Transform complex business data into meaningful insights, smarter decisions, and measurable growth.</p>
        <div className="bi-hero-actions"><a href="#bi-work" className="bi-primary">Explore Our Work <ArrowUpRight size={17}/></a><a href="#bi-method" className="bi-quiet-link">Discover our approach <ArrowDown size={15}/></a></div>
        <div className="bi-hero-meta"><span>DATA / SIGNAL / DIRECTION</span><span>01 — 06</span></div>
      </div>
      <div className="bi-hero-visual" data-bi-reveal aria-label="Abstract animated data intelligence visualization">
        <div className="bi-orbit bi-orbit-one"/><div className="bi-orbit bi-orbit-two"/><div className="bi-orbit bi-orbit-three"/>
        <svg className="bi-flow-svg" viewBox="0 0 650 560" role="img" aria-label="Connected data points flowing into an intelligence core"><defs><linearGradient id="biFlow" x1="0" x2="1"><stop offset="0" stopColor="#b8c4b8"/><stop offset="1" stopColor="#a7df38"/></linearGradient></defs><path d="M45 105 C180 105 160 245 300 245 S440 100 600 135"/><path d="M30 370 C165 370 190 285 300 285 S445 435 610 400"/><path d="M115 30 C145 160 240 165 300 265 S430 345 530 520"/><path d="M80 500 C200 430 210 350 300 265 S410 155 565 40"/><path d="M40 245 H610"/></svg>
        {[[10,18],[78,18],[88,43],[17,67],[48,45],[75,84],[28,88],[56,8],[94,68],[6,45]].map(([x,y],i)=><i className={`bi-data-node bi-node-${i+1}`} key={i} style={{left:`${x}%`,top:`${y}%`}}/>)}
        <div className="bi-core"><div className="bi-core-inner"><Network size={31}/><b>INSIGHT</b><small>ENGINE</small></div></div>
        <div className="bi-float-tag bi-tag-a"><span>LIVE SIGNAL</span><b>+18.6%</b><i/></div><div className="bi-float-tag bi-tag-b"><span>DATA POINTS</span><b>2.4M <small>PROCESSED</small></b></div><div className="bi-float-tag bi-tag-c"><span>MODEL CONFIDENCE</span><b>98.2%</b></div>
        <div className="bi-visual-caption">FIG 01 <span>FROM RAW SIGNAL TO CLEAR DIRECTION</span></div>
      </div>
      <div className="bi-hero-bottom"><span>INTELLIGENCE IS A BUSINESS ADVANTAGE.</span><span>SCROLL TO EXPLORE ↓</span></div>
    </section>

    <section className="bi-transformation" data-bi-reveal>
      <div className="bi-section-intro"><span className="bi-eyebrow">01 / THE TRANSFORMATION</span><h2>From scattered signals<br/>to <em>forward momentum.</em></h2><p>We turn disconnected information into a clear path from understanding to action.</p></div>
      <div className="bi-transform-track"><div className="bi-transform-line"><i/></div>{[{n:'01',title:'RAW DATA',sub:'Many sources. One starting point.',symbol:'{ }'},{n:'02',title:'ANALYSIS',sub:'Structure. Explore. Understand.',symbol:'⌁'},{n:'03',title:'INTELLIGENCE',sub:'Signals become clear direction.',symbol:'◉'},{n:'04',title:'BUSINESS GROWTH',sub:'Decisions create momentum.',symbol:'↗'}].map((item,i)=><div className={`bi-transform-step bi-transform-${i+1}`} key={item.n}><span className="bi-step-index">{item.n}</span><div className="bi-step-symbol">{item.symbol}</div><h3>{item.title}</h3><p>{item.sub}</p></div>)}</div>
    </section>

    <section className="bi-work" id="bi-work">
      <div className="bi-work-heading" data-bi-reveal><div><span className="bi-eyebrow">02 / SELECTED INTELLIGENCE STUDIES</span><h2>Make the complex<br/><em>impossible to miss.</em></h2></div><p>Purposeful analytics experiences that make performance easier to understand and the next move easier to see.</p></div>
      {projects.map((project,i)=><article className={`bi-project bi-project-${project.theme}`} key={project.id} data-bi-reveal>
        <div className="bi-project-visual"><DashboardVisual theme={project.theme}/><span className="bi-project-visual-note">INTERFACE STUDY / {project.id}</span></div>
        <div className="bi-project-copy"><span className="bi-eyebrow">{project.id} / {project.type}</span><h3>{project.name}</h3><p className="bi-project-lead">A business intelligence concept for clearer, more confident decisions.</p><div className="bi-project-detail"><div><small>THE CHALLENGE</small><p>{project.challenge}</p></div><div><small>OUR SOLUTION</small><p>{project.solution}</p></div></div><div className="bi-project-tech"><small>TECHNOLOGY /</small>{project.tech.map(t=><span key={t}>{t}</span>)}</div></div>
      </article>)}
      <p className="bi-project-disclaimer">These dashboard presentations are original illustrative portfolio concepts, not representations of named client deployments or independently verified business results.</p>
    </section>

    <section className="bi-method" id="bi-method">
      <div className="bi-method-heading" data-bi-reveal><span className="bi-eyebrow">03 / OUR TECHNICAL APPROACH</span><h2>BEHIND EVERY INSIGHT<br/>IS A <em>SMARTER SYSTEM.</em></h2><p>Four connected disciplines. One dependable intelligence foundation.</p></div>
      <div className="bi-capability-system" data-bi-reveal><div className="bi-capability-connectors" aria-hidden="true"><i/><i/><i/><i/><b/></div><div className="bi-capability-center"><ScanLine size={25}/><span>INTELLIGENCE<br/>FOUNDATION</span></div>{capabilities.map(({n,title,detail,icon:Icon},i)=><article className={`bi-capability bi-capability-${i+1}`} key={n}><span>{n}</span><Icon size={21}/><h3>{title}</h3><p>{detail}</p><b>↗</b></article>)}</div>
    </section>

    <section className="bi-ecosystem" data-bi-reveal>
      <div className="bi-ecosystem-copy"><span className="bi-eyebrow">04 / TECHNOLOGY ECOSYSTEM</span><h2>The right tools.<br/><em>Connected thinking.</em></h2><p>We choose technologies around your data landscape, reporting needs and long-term operating model.</p></div>
      <div className="bi-tech-field">{technologies.map((tech,i)=><div className={`bi-tech-item bi-tech-${i+1}`} key={tech.name}><div className="bi-tech-mark"><img src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color}`} alt="" loading="lazy" onError={e=>{e.currentTarget.style.display='none'; e.currentTarget.nextElementSibling?.setAttribute('data-fallback','true');}}/><span>{tech.name.slice(0,2).toUpperCase()}</span></div><b>{tech.name}</b><small>DATA / ANALYTICS</small></div>)}<div className="bi-tech-center"><Database size={28}/><span>DATA<br/>ECOSYSTEM</span></div></div>
    </section>

    <section className="bi-final">
      <div className="bi-final-grid" aria-hidden="true"/><div className="bi-final-orbit" aria-hidden="true"><i/><i/><i/><span>Q</span></div>
      <div className="bi-final-content" data-bi-reveal><span className="bi-eyebrow">LET'S MAKE THE NEXT MOVE COUNT</span><h2>YOUR DATA HAS<br/><em>MORE TO SAY.</em></h2><p>Let's transform your business data into intelligence that moves your business forward.</p><Link to="/contact" className="bi-primary">Let's Build Something Intelligent <ArrowUpRight size={18}/></Link></div>
      <div className="bi-final-foot"><span>QUADRAFROYN SOLUTIONS</span><span>SEE CLEARLY / MOVE CONFIDENTLY</span><a href="#bi-top">BACK TO TOP ↑</a></div>
    </section>
  </main>;
}
