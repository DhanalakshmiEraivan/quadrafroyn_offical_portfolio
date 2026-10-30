import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Maximize2 } from 'lucide-react';
import { images } from '@/data';
import { useReveal, useScrollToTop, useDragScroll } from '@/hooks';

const galleryItems = [
  { title: 'Agentic Operations', label: 'Autonomous execution', image: images.neural, desc: 'Multi-agent workflows executing across business operations with deterministic control.' },
  { title: 'Knowledge Graphs', label: 'Data ontology', image: images.neural2, desc: 'Unified enterprise data context capturing meaning, relationships, and structure.' },
  { title: 'SLM Fine-Tuning', label: 'Domain intelligence', image: images.neural3, desc: 'Domain-specific small language models delivering frontier-quality at fraction of cost.' },
  { title: 'Multi-Agent Orchestration', label: 'Deterministic control', image: images.neural4, desc: 'Coordinated agents with governance, security, and model control.' },
  { title: 'AI Governance', label: 'Sovereign by design', image: images.neural5, desc: 'Full control over data, models, and workflows on any cloud.' },
  { title: 'Inferencing at Scale', label: 'Cost-optimized', image: images.neural6, desc: 'Energy-efficient inference optimized for cost and performance.' },
  { title: 'Neural Architecture', label: 'Deep science', image: images.neural4, desc: 'Research-led architecture turning breakthroughs into production capabilities.' },
  { title: 'Context Graphs', label: 'Workflow intelligence', image: images.neural2, desc: 'Context graphs built autonomously from existing enterprise workflows.' },
];

const masonryImages = [
  images.team1, images.neural3, images.team3, images.neural5, images.team5,
  images.neural6, images.team7, images.neural, images.team9, images.neural2,
];

function GalleryPage() {
  useReveal();
  useScrollToTop();
  const dragRef = useDragScroll<HTMLDivElement>();
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    if (lightbox) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  return (
    <>
      <section className="page-hero page-hero-dark">
        <div className="page-hero-grid" />
        <div className="page-hero-content reveal is-visible">
          <span className="eyebrow"><i /> Gallery</span>
          <h1><span className="hero-wordline">The visual diary</span><span className="hero-wordline"><em>of intelligence.</em></span></h1>
          <p>Drag, scroll, and explore the research, architecture, and teams behind Quadrafroyn&apos;s enterprise AI platform.</p>
        </div>
      </section>

      {/* Drag-scroll diary */}
      <section className="section-pad gallery-page-diary">
        <div className="section-heading reveal">
          <div><span className="section-label">Interactive diary</span><h2>Drag to<br /><span>explore.</span></h2></div>
          <p>Click and drag horizontally, or use your scroll wheel, to move through the visual diary. Hover any card to pause.</p>
        </div>
        <div className="diary-window gallery-diary-window" ref={dragRef}>
          <div className="diary-track">
            {galleryItems.concat(galleryItems).map((item, i) => (
              <article className="diary-card gallery-diary-card" key={i}>
                <div className="diary-image">
                  <img src={item.image} alt={item.title} />
                  <div className="gallery-shine" />
                  <span>QF / 0{(i % galleryItems.length) + 1}</span>
                  <div className="diary-overlay"><p>{item.desc}</p></div>
                </div>
                <div className="diary-caption"><small>{item.label}</small><strong>{item.title}</strong></div>
              </article>
            ))}
          </div>
        </div>
        <div className="diary-instructions reveal">
          <span><ArrowRight size={16} /> Drag horizontally</span>
          <span>Scroll to navigate</span>
          <span>Hover to pause &amp; read</span>
        </div>
      </section>

      {/* Masonry grid with lightbox */}
      <section className="section-pad gallery-masonry-section">
        <div className="section-heading reveal">
          <div><span className="section-label">In the studio</span><h2>Research meets<br /><span>production.</span></h2></div>
          <p>Click any image to expand. A living record of the people, prototypes, and intelligence behind the platform.</p>
        </div>
        <div className="gallery-masonry">
          {masonryImages.map((img, i) => (
            <button
              className={`gallery-masonry-item reveal gallery-masonry-${(i % 4) + 1}`}
              key={i}
              onClick={() => setLightbox(img)}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <img src={img} alt={`Gallery image ${i + 1}`} />
              <div className="gallery-masonry-hover">
                <Maximize2 size={20} />
                <span>Expand</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <img src={lightbox} alt="Expanded gallery image" />
          <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close"><ArrowUpRight size={24} /></button>
        </div>
      )}

      <section className="contact-cta-strip reveal">
        <h2>Want to see<br />the platform in action?</h2>
        <Link className="button button-green" to="/contact">Book a demo <ArrowUpRight size={18} /></Link>
      </section>
    </>
  );
}

export default GalleryPage;
