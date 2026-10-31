import { useEffect, useMemo, useRef, useState, type PointerEvent } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Globe2 } from 'lucide-react';
import { visualDiaryPlaces as places } from '@/imageInventory';

const filters = ['All', 'Industry Events', 'Product Innovation', 'Research & Development', 'Technology', 'Design & UX', 'Collaboration', 'Cloud & Platforms', 'Community', 'Knowledge Exchange'];
export default function VisualDiaryGallery() {
  const [filter, setFilter] = useState('All');
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const viewport = useRef<HTMLDivElement>(null);
  const drag = useRef<{x:number;left:number;active:boolean}>({x:0,left:0,active:false});
  const visible = useMemo(() => places.filter(p => filter === 'All' || p.kind === filter), [filter]);
  const onPointerDown = (event:PointerEvent<HTMLDivElement>) => { if (event.pointerType === 'mouse' && event.button !== 0) return; drag.current={x:event.clientX,left:event.currentTarget.scrollLeft,active:true}; event.currentTarget.setPointerCapture(event.pointerId); };
  const onPointerMove = (event:PointerEvent<HTMLDivElement>) => { if (!drag.current.active || !viewport.current) return; viewport.current.scrollLeft=drag.current.left-(event.clientX-drag.current.x); };
  const onPointerUp = () => { drag.current.active=false; };
  const move = (direction:number) => {
  const next = (active + direction + visible.length) % visible.length;
  setActive(next);
  const card = viewport.current?.querySelectorAll<HTMLElement>('.visual-diary-card')[next];
  if (card && viewport.current) {
    viewport.current.scrollTo({
      left: card.offsetLeft - (viewport.current.clientWidth - card.clientWidth) / 2,
      behavior: 'smooth'
    });
  }
};
  useEffect(() => { setActive(0);viewport.current?.scrollTo({left:0,behavior:'smooth'}); }, [filter]);
  useEffect(() => { if(filter!=='All'||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;const timer=window.setInterval(()=>setActive(v=>{if(drag.current.active)return v;const next=(v+1)%visible.length;const card = viewport.current?.querySelectorAll<HTMLElement>('.visual-diary-card')[next];
if (card && viewport.current) {
  viewport.current.scrollTo({
    left: card.offsetLeft - (viewport.current.clientWidth - card.clientWidth) / 2,
    behavior: 'smooth'
  });
}return next;}),4200);return()=>window.clearInterval(timer); },[filter,visible.length]);
  return <section className="visual-diary-section" aria-labelledby="visual-diary-title">
    <div className="visual-diary-backdrop" aria-hidden="true"/>
    <div className="visual-diary-panel">
      <div className="visual-diary-heading"><span className="visual-diary-kicker"><Globe2 size={12}/> THE QUADRAFROYN JOURNAL</span><h2 id="visual-diary-title">A world of <em>possibility.</em></h2><p>Ideas, places and perspectives that shape the way we create.</p></div>
      <div className="visual-diary-filters" role="group" aria-label="Filter visual diary by company activity">{filters.map(item=><button key={item} type="button" className={filter===item?'active':''} aria-pressed={filter===item} onClick={()=>setFilter(item)}>{item}</button>)}<button type="button" className="visual-diary-more" onClick={()=>setExpanded(v=>!v)}>{expanded?'Show less':'View more'} <ArrowUpRight size={13}/></button></div>
      <div className={`visual-diary-viewport ${expanded?'is-expanded':''}`} ref={viewport} onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerCancel={onPointerUp}>
        <div className="visual-diary-track">{visible.map((item,index)=><article key={item.place} className={`visual-diary-card ${index===active?'is-active':''}`} onMouseEnter={()=>setActive(index)}><img src={item.image} alt={`${item.place} — ${item.title}`} loading="lazy" decoding="async" draggable={false}/><div className="visual-diary-card-shade"/><span className="visual-diary-number">0{places.indexOf(item)+1} / 09</span><div className="visual-diary-caption"><small>{item.kind}</small><h3>{item.place}</h3><p>{item.title}</p></div><span className="visual-diary-card-arrow"><ArrowUpRight size={18}/></span></article>)}</div>
      </div>
      <div className="visual-diary-bottom"><span>QUADRAFROYN / TECHNOLOGY · PEOPLE · PROGRESS</span><div className="visual-diary-controls"><button type="button" onClick={()=>move(-1)} aria-label="Previous visual diary image"><ArrowLeft size={17}/></button><span>{String(active+1).padStart(2,'0')} <i>/</i> {String(visible.length).padStart(2,'0')}</span><button type="button" onClick={()=>move(1)} aria-label="Next visual diary image"><ArrowRight size={17}/></button></div></div>
    </div>
  </section>;
}
