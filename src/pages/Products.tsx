import { Link } from 'react-router-dom';
import { ArrowDownRight, ArrowUpRight, Check, FileCog, FileText, Layers3, Play, ShieldCheck, Sparkles, WandSparkles, Zap } from 'lucide-react';
import { useReveal, useScrollToTop } from '@/hooks';

const products = [
  { name: 'Quadraconverter', slug: 'quadraconverter', type: 'SMART FILE CONVERSION', image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=1500&q=85', icon: FileCog, number: '01', headline: 'Every format. One fluid workflow.', text: 'Transform files and content between formats with a clear, streamlined workspace designed to reduce repetitive steps and keep the conversion process easy to follow.', features: ['A clean, guided conversion flow', 'Format-focused workspace', 'Clear progress and completion states', 'Designed for everyday productivity'] },
  { name: 'Quadra AI Resume Builder', slug: 'quadra-ai-resume-builder', type: 'AI CAREER WORKSPACE', image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1500&q=85', icon: FileText, number: '02', headline: 'Your experience, told with clarity.', text: 'Shape your experience into a focused, polished resume. Organise your strengths, refine the story, and present your work in a way that feels professional and genuinely yours.', features: ['Structured resume-building journey', 'Role-aware content guidance', 'Readable, professional presentation', 'Keep your voice and experience central'] }
];

export default function ProductsPage() {
  useReveal(); useScrollToTop();
  return <div className="cinema-products-page">
    <section className="all-products-hero products-centered-hero">
      <div className="all-products-grid" />
      <div className="products-hero-orb products-orb-one"/><div className="products-hero-orb products-orb-two"/>
      <div className="all-products-copy products-centered-copy reveal is-visible">
        <span className="product-kicker products-studio-kicker"><i/> QUADRAFROYN SOLUTIONS / PRODUCT STUDIO</span>
        <h1>Small moments.<br/><em>Remarkable momentum.</em></h1>
        <p>Meet the focused tools built to make everyday work clearer, faster, and more considered. Two distinct products, designed around useful outcomes.</p>
        <div className="products-hero-actions"><a className="button button-dark" href="#product-lineup">Explore the products <ArrowDownRight size={18}/></a><Link className="button button-light" to="/contact">Discuss a product <ArrowUpRight size={17}/></Link></div>
        <div className="products-hero-meta"><span><i/> TWO PURPOSEFUL TOOLS</span><span>DESIGNED FOR REAL WORKFLOWS</span></div>
      </div>
      <div className="products-hero-visual reveal"><div className="products-visual-frame"><img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=85" alt="Developer workspace with a laptop and code editor"/><div className="products-visual-glass"><Sparkles/><span>Less friction.<br/><b>More possibility.</b></span></div><span className="products-visual-index">QF / 2026</span></div></div>
    </section>
    <section className="section-pad products-intro-band reveal"><span className="product-kicker">THE PRODUCT LINEUP</span><h2>Made for the work<br/><em>in front of you.</em></h2><p>Explore each product to discover its purpose, key capabilities, workflow, and the problems it is designed to help solve.</p></section>
    <section className="products-cinematic-list" id="product-lineup">
      {products.map((p,i)=>{const Icon=p.icon;return <article className={`cinema-product-row ${i%2?'cinema-product-reverse':''}`} key={p.slug}>
        <div className="cinema-product-visual reveal"><img src={p.image} alt={`${p.name} visual`} loading="lazy"/><div className="cinema-product-image-wash"/><div className="cinema-product-number">{p.number}</div><div className="cinema-product-float"><Icon size={22}/><span>{p.type}</span></div><div className="cinema-product-play"><Play size={19} fill="currentColor"/></div></div>
        <div className="cinema-product-copy reveal"><span className="product-kicker"><i/> {p.type}</span><h2>{p.name}</h2><h3>{p.headline}</h3><p>{p.text}</p><div className="cinema-product-features">{p.features.map(f=><span key={f}><Check size={15}/>{f}</span>)}</div><Link className="cinema-explore-link" to={`/${p.slug}`}>Explore {p.name}<ArrowUpRight size={18}/></Link><span className="cinema-product-footnote"><ShieldCheck size={15}/> Product information and workflow overview</span></div>
      </article>})}
    </section>
    <section className="products-closing section-pad reveal"><div className="products-closing-art"><img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=85" alt="Abstract mathematical light sculpture"/><div className="products-closing-art-label"><Layers3/><span>Thoughtfully built.<br/><b>Ready for what's next.</b></span></div></div><div className="products-closing-copy"><span className="product-kicker">A BETTER WAY TO BEGIN</span><h2>Find the tool that<br/><em>moves you forward.</em></h2><p>Need a tailored workflow or have an idea for a new product? Tell us what you want to make easier. We’ll help you explore the next step.</p><Link className="button button-dark" to="/contact">Start a conversation <ArrowUpRight size={18}/></Link></div></section>
  </div>;
}
