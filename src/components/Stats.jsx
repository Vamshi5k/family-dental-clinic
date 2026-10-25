import { useEffect, useRef, useState } from 'react';
import { siteCopy } from '../content';
import Reveal from './Reveal';

const items = siteCopy.stats.items;
function Count({ value, suffix }) {
  const ref = useRef(null); const [count, setCount] = useState(0);
  useEffect(() => {
    const node = ref.current;
    if (!node || !('IntersectionObserver' in window)) { setCount(value); return undefined; }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const start = performance.now(); const duration = 1050;
        const tick = (now) => { const progress = Math.min((now - start) / duration, 1); setCount(Math.round(value * (1 - (1 - progress) ** 3))); if (progress < 1) requestAnimationFrame(tick); };
        requestAnimationFrame(tick); observer.disconnect();
      }
    }, { threshold: .4 });
    observer.observe(node); return () => observer.disconnect();
  }, [value]);
  return <span ref={ref}>{count}{suffix}</span>;
}
export default function Stats() {
  return <section className="stats-band" aria-label={siteCopy.stats.ariaLabel}><div className="container stats-grid">{items.map((item, index) => <Reveal key={item.label} delay={index * 70}><div className="stat"><div className="stat-value"><Count {...item}/></div><div className="stat-label">{item.label}</div></div></Reveal>)}</div></section>;
}
