import { ArrowRight, Activity, Sparkles, CircleDot, ScanLine, Baby, BadgeCheck } from 'lucide-react';
import { clinic, siteCopy, treatments } from '../content';
import Reveal from './Reveal';

const icons = { tooth: Activity, sparkles: Sparkles, implant: CircleDot, laser: ScanLine, kids: Baby, check: BadgeCheck };
export default function Treatments() {
  const names = [...treatments.map((t) => t.name), ...treatments.map((t) => t.name)];
  return <section className="section" id="treatments"><div className="container">
    <Reveal><div className="heading-row"><div><span className="eyebrow">{siteCopy.treatments.eyebrow}</span><h2 className="section-title">{siteCopy.treatments.title}</h2></div><p className="section-copy">{siteCopy.treatments.description}</p></div></Reveal>
    <div className="treatments-grid">{treatments.map((treatment, i) => { const Icon = icons[treatment.icon]; return <Reveal key={treatment.name} delay={i * 45} className={`treatment-card card ${treatment.featured ? 'featured' : ''}`}><div><Icon className="treat-icon" size={24} strokeWidth={1.5}/><h3>{treatment.name}</h3><p>{treatment.description}</p></div><a className="text-link" href={clinic.whatsapp} target="_blank" rel="noreferrer">{siteCopy.treatments.ask}<ArrowRight size={14}/></a></Reveal>; })}</div>
    <div className="marquee-wrap" aria-label={siteCopy.treatments.marqueeAria}><div className="marquee" aria-hidden="true">{names.map((name, i) => <span key={`${name}-${i}`}>{name}</span>)}</div></div>
  </div></section>;
}
