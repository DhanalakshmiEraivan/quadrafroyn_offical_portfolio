import { Link } from 'react-router-dom';
import { ArrowUpRight, Compass, Brain, Database, Cpu, Network } from 'lucide-react';
import { images } from '@/data';
import { useReveal, useScrollToTop } from '@/hooks';

const processSteps = [
  { num: '01', label: 'Discover', text: 'Align the ambition, data estate, and AI opportunity. We map your fragmented systems and identify where intelligence compounds fastest.', icon: Compass },
  { num: '02', label: 'Ontologize', text: 'Autonomously build data ontology and knowledge graphs. Your data becomes context — meaning, relationships, and structure unified.', icon: Database },
  { num: '03', label: 'Fine-tune', text: 'Fine-tune domain-specific SLMs with your enterprise context. Frontier-quality output at a fraction of the token cost.', icon: Cpu },
  { num: '04', label: 'Orchestrate', text: 'Deploy multi-agent workflows with deterministic execution, governance, and model control across business operations.', icon: Network },
  { num: '05', label: 'Compound', text: 'Continuous evaluation, learning, and optimization. The intelligence advantage gets stronger every time it runs.', icon: Brain },
];

const researchAreas = [
  'Model Drift Detection', 'Context-Aware Inferencing', 'Agentic Process Discovery',
  'Deterministic Agent Execution', 'Agentic Workflow Orchestration', 'Neuro-Symbolic Agents',
  'Autonomous SLM Fine-Tuning', 'Multi-Agent Evaluations', 'Prompt Optimization',
];

const papers = [
  { venue: 'ICML 2026', title: 'Towards Policy-Compliant Agents', text: 'Teaching AI agents to detect and avoid policy violations in enterprise environments.' },
  { venue: '2025', title: 'Pre-Act: Multi-Step Planning in LLM Agents', text: 'How multi-step reasoning before acting makes enterprise AI agents significantly more reliable.' },
  { venue: 'ICLR 2025', title: 'Navigating the Digital World as Humans Do', text: 'Universal visual grounding that lets AI agents operate enterprise interfaces the way humans do.' },
  { venue: 'TMLR 2025', title: 'Is Your LLM Secretly a World Model?', text: 'Rethinking how language models plan and reason across complex web environments.' },
];

function ProcessPage() {
  useReveal();
  useScrollToTop();
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-grid" />
        <div className="page-hero-content reveal is-visible">
          <span className="eyebrow"><i /> Process</span>
          <h1><span className="hero-wordline">From raw data</span><span className="hero-wordline"><em>to deployed agents.</em></span></h1>
          <p>A visible, sovereign, and continuously compounding process — no black boxes, no dramatic hand-offs.</p>
        </div>
      </section>

      <section className="section-pad process-page-track">
        <div className="section-heading reveal">
          <div><span className="section-label">The rhythm</span><h2>Five steps to<br /><span>compounding intelligence.</span></h2></div>
          <p>Each step is agentic, autonomous, and self-reinforcing. The flywheel gets faster with every rotation.</p>
        </div>
        <div className="process-page-steps">
          {processSteps.map((step, i) => (
            <article className="process-page-step reveal" style={{ transitionDelay: `${i * 120}ms` }} key={step.num}>
              <div className="process-step-marker">
                <step.icon size={26} />
                <span>{step.num}</span>
              </div>
              <h3>{step.label}</h3>
              <p>{step.text}</p>
              {i < processSteps.length - 1 && <span className="process-page-connector" />}
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad research-page-section">
        <div className="section-heading reveal">
          <div><span className="section-label">Research</span><h2>Where deep science<br /><span>meets enterprise AI.</span></h2></div>
          <p>20+ publications in 2026 at ICLR, ICML, ACL, and IEEE ICASSP. Breakthroughs turned into production-ready capabilities.</p>
        </div>
        <div className="research-page-grid">
          <div className="research-page-papers">
            {papers.map((paper) => (
              <article className="research-paper reveal" key={paper.title}>
                <span className="paper-venue">{paper.venue}</span>
                <h3>{paper.title}</h3>
                <p>{paper.text}</p>
              </article>
            ))}
          </div>
          <div className="research-page-areas reveal">
            <span className="research-subhead">Research areas</span>
            <div className="research-area-grid">
              {researchAreas.map((area) => <span className="research-area-pill" key={area}>{area}</span>)}
            </div>
            <img src={images.neural5} alt="Research visualization" className="research-page-image" />
          </div>
        </div>
      </section>

      <section className="contact-cta-strip reveal">
        <h2>Ready to start<br />your flywheel?</h2>
        <Link className="button button-green" to="/contact">Begin the process <ArrowUpRight size={18} /></Link>
      </section>
    </>
  );
}

export default ProcessPage;
