import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Code2, Smartphone, Globe2, Layers3 } from 'lucide-react';
import { images } from '@/data';
import { useReveal, useScrollToTop } from '@/hooks';

const projects = [
  { title: 'AgenticOps for Global Bank', category: 'Financial Services', image: images.neural, text: 'Multi-agent orchestration for compliance checking across 12 regulatory frameworks.', metric: '40% reduction in compliance review time' },
  { title: 'Clinical Knowledge Graph', category: 'Healthcare', image: images.neural2, text: 'Unified patient data ontology connecting 8 EHR systems into a single context graph.', metric: '3x faster clinical decision support' },
  { title: 'Sovereign AI for Government', category: 'Public Sector', image: images.neural3, text: 'On-premise AI platform with full data sovereignty and model control.', metric: 'Zero data egress, 99.9% uptime' },
  { title: 'Supply Chain Agent', category: 'Manufacturing', image: images.neural4, text: 'Autonomous process discovery and optimization across a 200-site supply chain.', metric: '22% reduction in logistics cost' },
  { title: 'Context-Aware Retail AI', category: 'Retail', image: images.neural5, text: 'Domain SLM fine-tuned for personalized commerce at scale.', metric: '15% lift in conversion' },
  { title: 'Insurance Claims Agent', category: 'Insurance', image: images.neural6, text: 'Agentic claims processing with policy-compliant deterministic execution.', metric: '60% faster claims resolution' },
];

const testimonials = [
  { quote: 'Quadrafroyn\'s agentic suite stands out not only for enterprise-grade applicability but for how effectively it enables a transition to agentic-based workflows.', author: 'Luis Alonso', role: 'Head of Customer Data Strategy & Engineering, HP' },
  { quote: 'This composable architecture runs on zero-copy. We don\'t have to create heavy data pipelines. It\'s user-friendly, no-code, warehouse agnostic, and no vendor lock-in.', author: 'Sohail Wadera', role: 'Senior Engineering Manager, Autodesk' },
  { quote: 'Being able to integrate with our internal services and doing so at scale is absolutely key. The composable nature of Quadrafroyn is one of the main reasons we went with them.', author: 'Sravan Gupta', role: 'Senior Manager of GTM Systems, Atlassian' },
];

function WorkPage() {
  useReveal();
  useScrollToTop();
  return (
    <>
      <section className="page-hero page-hero-dark">
        <div className="page-hero-grid" />
        <div className="page-hero-content reveal is-visible">
          <span className="eyebrow"><i /> Selected work</span>
          <h1><span className="hero-wordline">Built to move</span><span className="hero-wordline"><em>the demanding.</em></span></h1>
          <p>Explore product work, websites, web apps, full-stack systems, mobile experiences, and AI-enabled enterprise concepts built around practical outcomes.</p>
        </div>
      </section>

      <section className="section-pad shipped-products-section">
        <div className="section-heading reveal"><div><span className="section-label">Product studio / selected builds</span><h2>Real products.<br /><span>Thoughtfully made.</span></h2></div><p>A look at Quadrafroyn's own product work and the types of digital experiences we build — from focused tools to complete web platforms.</p></div>
        <div className="shipped-products-grid">
          <article className="shipped-product-card reveal"><div className="shipped-product-art shipped-art-convert"><Code2 size={38}/><span>CONVERT / TRANSFORM / DELIVER</span></div><div className="shipped-product-content"><span>01 / PRODUCTIVITY TOOL</span><h3>Quadraconverter</h3><p>A focused file-conversion product concept with a guided workflow, clear progress states, and a streamlined interface.</p><Link to="/quadraconverter" className="text-link">Explore product <ArrowUpRight size={16}/></Link></div></article>
          <article className="shipped-product-card reveal"><div className="shipped-product-art shipped-art-resume"><Layers3 size={38}/><span>EXPERIENCE / CLARITY / CAREER</span></div><div className="shipped-product-content"><span>02 / AI CAREER WORKSPACE</span><h3>Quadra AI Resume Builder</h3><p>A career-focused writing experience designed to help people organise experience and present achievements clearly.</p><Link to="/quadra-ai-resume-builder" className="text-link">Explore product <ArrowUpRight size={16}/></Link></div></article>
          <article className="shipped-product-card reveal"><div className="shipped-product-art shipped-art-web"><Globe2 size={38}/><span>DESIGN / DEVELOP / LAUNCH</span></div><div className="shipped-product-content"><span>03 / CLIENT & BUSINESS BUILDS</span><h3>Websites & Web Apps</h3><p>Responsive company websites, SaaS dashboards, portals, and full-stack applications shaped around business goals.</p><Link to="/contact" className="text-link">Plan a build <ArrowUpRight size={16}/></Link></div></article>
          <article className="shipped-product-card reveal"><div className="shipped-product-art shipped-art-app"><Smartphone size={38}/><span>PRODUCT / MOBILE / SCALE</span></div><div className="shipped-product-content"><span>04 / APPLICATION DEVELOPMENT</span><h3>Apps & Full-Stack Systems</h3><p>Connected interfaces, APIs, data models, authentication, integrations, and production-minded engineering.</p><Link to="/services" className="text-link">View services <ArrowUpRight size={16}/></Link></div></article>
        </div>
        <p className="work-portfolio-note">Note: Product cards describe Quadrafroyn product work and service capabilities. Enterprise examples below illustrate project types and should not be read as independently verified client case studies.</p>
      </section>

      <section className="section-pad work-page-list">
        {projects.map((p, i) => (
          <article key={p.title} className={`work-page-item reveal ${i % 2 === 1 ? 'reversed' : ''}`}>
            <div className="work-page-visual">
              <img src={p.image} alt={p.title} />
              <div className="work-page-shine" />
              <span className="work-page-index">0{i + 1}</span>
            </div>
            <div className="work-page-copy">
              <span className="work-page-cat">{p.category}</span>
              <h2>{p.title}</h2>
              <p>{p.text}</p>
              <div className="work-page-metric"><span>Outcome</span><strong>{p.metric}</strong></div>
              <Link className="text-link" to="/contact">Discuss a similar project <ArrowRight size={17} /></Link>
            </div>
          </article>
        ))}
      </section>

      <section className="section-pad testimonials-section">
        <div className="section-heading reveal">
          <div><span className="section-label">Customer voices</span><h2>What partners<br /><span>are saying.</span></h2></div>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <article className="testimonial-card reveal" key={t.author}>
              <p>"{t.quote}"</p>
              <div className="testimonial-author"><strong>{t.author}</strong><span>{t.role}</span></div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-cta-strip reveal">
        <h2>Your case study<br />starts here.</h2>
        <Link className="button button-green" to="/contact">Bring us a challenge <ArrowUpRight size={18} /></Link>
      </section>
    </>
  );
}

export default WorkPage;
