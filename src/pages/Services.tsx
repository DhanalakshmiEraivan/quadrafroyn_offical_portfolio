import { Link } from 'react-router-dom';
import { ArrowDownRight, ArrowUpRight, Layers3, Smartphone, BrainCircuit, Cloud, Code2, Sparkles } from 'lucide-react';
import { images } from '@/data';
import { useReveal, useScrollToTop } from '@/hooks';
import './ServicesEditorial.css';

const offerings = [
  {
    id: '01', eyebrow: 'DIGITAL PRODUCTS / EXPERIENCE', title: 'Digital experiences\nthat feel effortless.',
    copy: 'From a first impression to a complete product ecosystem, we design and engineer useful digital experiences around the people who use them.',
    image: images.interface, alt: 'Digital interface design on a modern workstation',
    tags: ['Website development', 'Web applications', 'Mobile applications', 'UI / UX design'],
    links: [{ label: 'Web development', to: '/services/web-development' }, { label: 'Mobile app development', to: '/services/mobile-app-development' }],
    icon: Smartphone, layout: 'wide'
  },
  {
    id: '02', eyebrow: 'INTELLIGENCE / CONNECTED SYSTEMS', title: 'Make your data\nwork harder.',
    copy: 'Connect information, automate meaningful workflows, and turn complex operations into clearer decisions with carefully engineered systems.',
    image: images.dataWave, alt: 'Abstract visual representing connected data and intelligence',
    tags: ['Business intelligence', 'AI integration', 'Workflow automation', 'Business platforms'],
    links: [{ label: 'Business intelligence', to: '/services/business-intelligence' }, { label: 'Software development', to: '/services/software-development' }],
    icon: BrainCircuit, layout: 'offset'
  },
  {
    id: '03', eyebrow: 'ENGINEERING / FOUNDATIONS', title: 'Technology built\nto move forward.',
    copy: 'Build on dependable foundations. We help modernise existing software, strengthen infrastructure, and create systems ready to evolve.',
    image: images.code, alt: 'Developer working with software code',
    tags: ['Custom software', 'Cloud migration', 'Integration', 'Support & modernisation'],
    links: [{ label: 'Cloud migration', to: '/services/cloud-migration' }, { label: 'Consulting & support', to: '/services/consulting-and-support' }],
    icon: Cloud, layout: 'reverse'
  }
];

const principles = [
  { n: '01', title: 'Quality is a practice.', text: 'Careful decisions, considered details, and a high standard of execution at every stage.' },
  { n: '02', title: 'Creative thinking, grounded in technology.', text: 'We connect fresh ideas with practical engineering and a clear understanding of the problem.' },
  { n: '03', title: 'Built to last beyond launch.', text: 'Maintainability, accessibility, security, and future change are part of the conversation from the start.' }
];

const work = [
  { n: '01', title: 'Quadraconverter', type: 'PRODUCT / PRODUCTIVITY', text: 'A focused file-conversion product concept with a guided workflow and streamlined interface.', visual: 'convert', mark: 'CONVERT / TRANSFORM / DELIVER', to: '/quadraconverter' },
  { n: '02', title: 'Quadra AI Resume Builder', type: 'PRODUCT / CAREER WORKSPACE', text: 'A career-focused writing experience for organising experience and presenting achievements clearly.', visual: 'resume', mark: 'EXPERIENCE / CLARITY / CAREER', to: '/quadra-ai-resume-builder' },
  { n: '03', title: 'Websites & web applications', type: 'DIGITAL / BUSINESS BUILDS', text: 'Responsive websites, SaaS dashboards, portals, and full-stack applications shaped around business goals.', visual: 'web', mark: 'DESIGN / DEVELOP / LAUNCH', to: '/work' }
];

export default function ServicesPage() {
  useReveal();
  useScrollToTop();
  return (
    <main className="services-editorial">
      <section className="se-hero">
        <div className="se-grid" aria-hidden="true" />
        <div className="se-hero-copy reveal">
          <span className="se-kicker"><i /> QUADRAFROYN / WHAT WE DO</span>
          <p className="se-overline">A CREATIVE TECHNOLOGY STUDIO</p>
          <h1>Good ideas.<br /><em>Remarkable</em><br />execution<span className="se-period">.</span></h1>
          <div className="se-hero-bottom">
            <p>We bring design, engineering, and intelligent technology together to create digital experiences and systems with purpose.</p>
            <a className="se-circle-link" href="#se-offerings" aria-label="Explore our services"><ArrowDownRight size={25} /></a>
          </div>
        </div>
        <div className="se-hero-visual reveal">
          <div className="se-hero-photo"><img src={images.studio} alt="A collaborative creative technology workspace" fetchPriority="high" /></div>
          <div className="se-hero-index"><span>01 — 03</span><strong>IDEAS INTO<br />REALITY</strong></div>
          <div className="se-floating-stamp"><Sparkles size={15} /><span>DESIGNED WITH<br /><b>INTENTION</b></span></div>
          <div className="se-vertical-note">STRATEGY · DESIGN · ENGINEERING</div>
        </div>
        <div className="se-hero-meta"><span>INDEPENDENT THINKING</span><span>THOUGHTFUL TECHNOLOGY</span><span>MEANINGFUL OUTCOMES</span></div>
      </section>

      <section className="se-intro reveal">
        <span className="se-kicker"><i /> OUR CAPABILITIES</span>
        <h2>We make the complex<br />feel <em>clear.</em></h2>
        <p>Every project is different. Our role is to understand what matters, bring the right people and disciplines together, and make the next version possible.</p>
      </section>

      <section className="se-offerings" id="se-offerings">
        {offerings.map((item) => {
          const Icon = item.icon;
          return <article className={`se-offering se-${item.layout}`} key={item.id}>
            <div className="se-offering-image reveal"><img src={item.image} alt={item.alt} loading="lazy" /><span className="se-image-id">QF / {item.id}</span><span className="se-image-corner"><Icon size={22} /></span></div>
            <div className="se-offering-copy reveal">
              <span className="se-kicker"><i /> {item.eyebrow}</span>
              <span className="se-offering-number">{item.id}</span>
              <h3>{item.title.split('\n').map((line, i) => <span key={line}>{line}{i < 1 && <br />}</span>)}</h3>
              <p>{item.copy}</p>
              <div className="se-tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              <div className="se-offering-links">{item.links.map(link => <Link key={link.to} to={link.to}>{link.label}<ArrowUpRight size={15} /></Link>)}</div>
            </div>
          </article>;
        })}
      </section>

      <section className="se-work">
        <div className="se-work-heading reveal"><div><span className="se-kicker"><i /> SELECTED WORK / PRODUCT STUDIO</span><h2>Ideas, made<br /><em>tangible.</em></h2></div><div className="se-work-aside"><p>A glimpse of Quadrafroyn product work and the kinds of digital experiences we create. Explore the work to see more.</p><Link to="/work">Explore the work <ArrowUpRight size={17} /></Link></div></div>
        <div className="se-work-grid">
          {work.map((project, i) => <Link className={`se-work-item se-work-${project.visual} reveal`} to={project.to} key={project.n}>
            <div className="se-work-art"><div className="se-work-art-orbit" /><div className="se-work-art-core">{project.visual === 'convert' ? <Code2 size={46} /> : project.visual === 'resume' ? <Layers3 size={46} /> : <Smartphone size={46} />}</div><span>{project.mark}</span><b>{project.n}</b></div>
            <div className="se-work-caption"><div><span>{project.type}</span><h3>{project.title}</h3><p>{project.text}</p></div><span className="se-work-arrow"><ArrowUpRight size={20} /></span></div>
            <span className="se-work-disclaimer">{i === 2 ? 'SERVICE CAPABILITY' : 'QUADRAFROYN PRODUCT WORK'}</span>
          </Link>)}
        </div>
        <p className="se-work-note">Project descriptions reflect Quadrafroyn product work and service capabilities. No unrelated stock imagery is presented as a completed client project.</p>
      </section>

      <section className="se-belief">
        <div className="se-belief-visual reveal"><img src={images.team2} alt="People collaborating on a digital project" loading="lazy" /><span>THE DETAILS<br />MAKE THE DIFFERENCE.</span></div>
        <div className="se-belief-copy"><span className="se-kicker"><i /> WHY QUADRAFROYN</span><h2>Thoughtful at<br />every <em>level.</em></h2><p className="se-belief-lead">Good technology should feel considered: clear in its purpose, confident in its execution, and ready for what comes next.</p>
          <div className="se-principles">{principles.map(item => <article className="se-principle reveal" key={item.n}><span>{item.n}</span><div><h3>{item.title}</h3><p>{item.text}</p></div><ArrowUpRight size={17} /></article>)}</div>
        </div>
      </section>

      <section className="se-cta reveal">
        <div className="se-cta-orbit" aria-hidden="true" /><span className="se-kicker"><i /> HAVE SOMETHING IN MIND?</span>
        <h2>Let's make<br /><em>it matter.</em></h2>
        <p>Bring us the idea, the challenge, or the ambition. We'll help you shape a thoughtful way forward.</p>
        <Link to="/contact" className="se-cta-button">Start a conversation <ArrowUpRight size={18} /></Link>
        <span className="se-cta-foot">QUADRAFROYN SOLUTIONS · DESIGN / BUILD / EVOLVE</span>
      </section>
    </main>
  );
}
