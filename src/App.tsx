import MobileAppDevelopment from '@/pages/MobileAppDevelopment';
import WebsiteDevelopment from '@/pages/WebsiteDevelopment';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState, type FormEvent } from 'react';
import { ArrowUpRight, Check, X, Sparkles } from 'lucide-react';
import { Header, Footer, CommandExperience } from '@/components/Layout';
import { AnnouncementBar } from '@/components/Layout';
import SiteUtilities from '@/components/SiteUtilities';
import Home from '@/pages/Home';
import ContactPage from '@/pages/Contact';
import ServicesPage from '@/pages/Services';
import WorkPage from '@/pages/Work';
import ProductsPage from '@/pages/Products';
import GalleryPage from '@/pages/Gallery';
import ProcessPage from '@/pages/Process';
import DetailPage from '@/pages/DetailPage';
import EnterpriseContentManagementPage from '@/pages/EnterpriseContentManagement';
import { CareersPage, EventsPage, ResearchBlogPage, InvestorRelationsPage, PressKitPage } from '@/pages/CompanyPages';
import { AgenticWorkflowsPage, SLMFineTuningPage, DataOntologyPage, AIGovernancePage, InferencingPage } from '@/pages/ProductPages';
import { EnterpriseAIPage, DataOrchestrationPage, CloudSovereignPage, KnowledgeGraphsPage, AgentEvaluationPage } from '@/pages/EnterprisePages';
import { QuadraConverterPage, QuadraResumeBuilderPage } from '@/pages/FeaturedProducts';
import { DocumentationPage, ResearchPapersPage, DeveloperSDKPage, CommunityPage } from '@/pages/ResourcePages';
import { ServiceDirectoryPage, SolutionsDirectoryPage, CompetitionsPage, CareerGuidancePage, WebinarsPage, InternshipsPage } from '@/pages/ExpansionPages';
import ExtraInfoPage from '@/pages/ExtraPages';
import PremiumPage from '@/pages/PremiumPages';
import AboutExperience from '@/pages/AboutExperience';
import SupportExperience from '@/pages/SupportExperience';
import FivePortfolioPage from '@/pages/FivePortfolioPages';

function GreenIntroLoader() {
  const [visible, setVisible] = useState(() => {
    try { return !sessionStorage.getItem('qf-intro-seen'); } catch { return false; }
  });
  const [leaving, setLeaving] = useState(false);
  useEffect(() => {
    if (!visible) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = reduced ? 120 : 1350;
    const started = performance.now();
    let raf = 0;
    let finishTimer = 0;
    const finish = () => {
      try { sessionStorage.setItem('qf-intro-seen', '1'); } catch { /* storage may be unavailable */ }
      setLeaving(true);
      finishTimer = window.setTimeout(() => setVisible(false), reduced ? 0 : 680);
    };
    const tick = (now: number) => {
      const t = Math.min(1, (now - started) / duration);
      if (t >= 1) finish(); else raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); window.clearTimeout(finishTimer); };
  }, [visible]);
  if (!visible) return null;
  return <div className={`qf-lime-intro ${leaving ? 'qf-intro-leaving' : ''}`} role="status" aria-label="QUADRAFROYN loading">
    <div className="qf-intro-word" aria-label="QUADRAFROYN">QUADRAFROYN</div>
    <div className="qf-intro-dots" aria-hidden="true"><i/><i/><i/></div>
  </div>;
}
function QuoteNudge() {
  const [open, setOpen] = useState(false); const [sending, setSending] = useState(false); const [status, setStatus] = useState('');
  useEffect(() => { if (sessionStorage.getItem('qf-quote-dismissed')) return; const timer = window.setTimeout(() => setOpen(true), 9500); return () => window.clearTimeout(timer); }, []);
  const close = () => { setOpen(false); sessionStorage.setItem('qf-quote-dismissed','1'); };
  async function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSending(true); setStatus(''); const form = event.currentTarget; const fields = Object.fromEntries(new FormData(form).entries()); try { const response = await fetch('/api/send-email',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({type:'quote',...fields})}); const result = await response.json(); if(!response.ok || !result.success) throw new Error(result.error || 'Email service is not configured yet.'); setStatus('Your quote request has been sent. Thank you.'); form.reset(); sessionStorage.setItem('qf-quote-dismissed','1'); } catch { setStatus('Online email delivery is not configured yet. Please email quadrafroyn@gmail.com or use WhatsApp.'); } finally { setSending(false); } }
  return <>{open && <div className="quote-modal-backdrop" onMouseDown={e=>{if(e.target===e.currentTarget)close()}}><section className="quote-modal" role="dialog" aria-modal="true" aria-labelledby="quote-title"><button className="quote-close" onClick={close} aria-label="Close quote form"><X/></button><span className="eyebrow"><i/> LET'S BUILD SOMETHING USEFUL</span><h2 id="quote-title">A good idea starts<br/><em>with a clear brief.</em></h2><p>Share a few details and we'll know how to start the conversation.</p><form onSubmit={submit}><label>Your name<input name="name" required placeholder="Full name"/></label><div className="quote-form-row"><label>Email<input type="email" name="email" required placeholder="you@example.com"/></label><label>Company<input name="company" placeholder="Company (optional)"/></label></div><label>What do you need?<select name="interest" required defaultValue=""><option value="" disabled>Select a service</option><option>Website / software development</option><option>AI and automation</option><option>Mobile application</option><option>Data and business solutions</option><option>Other</option></select></label><label>Brief project details<textarea name="message" rows={3} required placeholder="Goals, timeline, and anything useful…"/></label><button className="button button-green quote-submit" disabled={sending}>{sending?'Sending request…':'Request a quote'} <ArrowUpRight size={17}/></button>{status && <p className="quote-status">{status}</p>}</form><small className="quote-privacy"><Sparkles size={13}/> Your details are used only to respond to this enquiry.</small></section></div>}{!open && <button className="quote-fab" onClick={()=>setOpen(true)}><Sparkles size={16}/> Get the quote <ArrowUpRight size={15}/></button>}</>;
}
function PremiumPageRoute({slug}:{slug:string}) { return <PremiumPage slugOverride={slug} />; }
export default function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const candidates = document.querySelectorAll<HTMLElement>('main section, main section h1, main section h2, main section h3, main section p, main section article, main section img, main section figure, main section .button, main section .text-link, main section .feature-chip, main section .product-kicker, main section li');
    candidates.forEach((el, index) => {
      el.classList.add('cinema-reveal');
      const parent = el.closest('article, .section-heading, .section-pad, section');
      const siblings = parent ? Array.from(parent.querySelectorAll(':scope > article, :scope > div, :scope > h2, :scope > p, :scope > .section-heading')) : [];
      const siblingIndex = Math.max(0, siblings.indexOf(el));
      el.style.setProperty('--cinema-delay', `${Math.min(siblingIndex * 85 + (index % 3) * 25, 360)}ms`);
    });
    if (reduceMotion || !('IntersectionObserver' in window)) {
      candidates.forEach(el => el.classList.add('cinema-in-view'));
      return;
    }
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('cinema-in-view'); observer.unobserve(entry.target); }
    }), { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });
    candidates.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [location.pathname]);
  return (
    <main id="main-content">
      <SiteUtilities />
      <GreenIntroLoader />
      <QuoteNudge />
      <AnnouncementBar />
      <Header />
      <CommandExperience />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about-us" element={<AboutExperience />} />
        <Route path="/our-story" element={<ExtraInfoPage />} />
        <Route path="/our-team" element={<ExtraInfoPage />} />
        <Route path="/our-process" element={<ExtraInfoPage />} />
        <Route path="/our-culture" element={<ExtraInfoPage />} />
        <Route path="/get-a-quote" element={<ExtraInfoPage />} />
        <Route path="/privacy-policy" element={<ExtraInfoPage />} />
        <Route path="/terms-and-conditions" element={<ExtraInfoPage />} />
        <Route path="/insights" element={<ExtraInfoPage />} />
        <Route path="/accessibility" element={<ExtraInfoPage />} />
        <Route path="/solutions" element={<SolutionsDirectoryPage />} />
        <Route path="/competitions" element={<CompetitionsPage />} />
        <Route path="/career-guidance" element={<FivePortfolioPage page="career" />} />
        <Route path="/webinars" element={<WebinarsPage />} />
        <Route path="/internships" element={<InternshipsPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/products" element={<FivePortfolioPage page="products" />} />
        <Route path="/quadraconverter" element={<QuadraConverterPage />} />
        <Route path="/quadraai-resume-builder" element={<QuadraResumeBuilderPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/documentation" element={<DocumentationPage />} />
        <Route path="/research-papers" element={<ResearchPapersPage />} />
        <Route path="/developer-sdk" element={<DeveloperSDKPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/support" element={<SupportExperience />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/research-blog" element={<ResearchBlogPage />} />
        <Route path="/investor-relations" element={<InvestorRelationsPage />} />
        <Route path="/press-kit" element={<PressKitPage />} />
        <Route path="/agentic-workflows" element={<AgenticWorkflowsPage />} />
        <Route path="/slm-fine-tuning" element={<SLMFineTuningPage />} />
        <Route path="/data-ontology" element={<DataOntologyPage />} />
        <Route path="/ai-governance" element={<AIGovernancePage />} />
        <Route path="/inferencing" element={<InferencingPage />} />
        <Route path="/see-all-products" element={<ProductsPage />} />
        <Route path="/enterprise-ai" element={<EnterpriseAIPage />} />
        <Route path="/data-orchestration" element={<DataOrchestrationPage />} />
        <Route path="/cloud-and-sovereign" element={<CloudSovereignPage />} />
        <Route path="/knowledge-graphs" element={<KnowledgeGraphsPage />} />
        <Route path="/agent-evaluation" element={<AgentEvaluationPage />} />
        <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
        <Route path="/services/website-development" element={<WebsiteDevelopment />} />
        <Route path="/services/enterprise-content-management" element={<EnterpriseContentManagementPage />} />
        <Route path="/services/workforce-staff-management" element={<FivePortfolioPage page="workforce" />} />
        <Route path="/services/smart-it-outsourcing" element={<FivePortfolioPage page="outsourcing" />} />
        <Route path="/services/server-management" element={<FivePortfolioPage page="server" />} />
        <Route path="/services/:slug" element={<PremiumPage />} />
        <Route path="/business-management" element={<PremiumPageRoute slug="business-management" />} />
        <Route path="/business-intelligence" element={<PremiumPageRoute slug="business-intelligence" />} />
        <Route path="/workforce-management" element={<PremiumPageRoute slug="workforce-management" />} />
        <Route path="/:slug" element={<DetailPage />} />
      </Routes>
      <Footer />
    </main>
  );
}
