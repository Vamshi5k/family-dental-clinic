import { ArrowRight, MessageCircle, Phone } from 'lucide-react';
import { clinic, siteCopy } from '../content';
import Reveal from './Reveal';

export default function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="container final-inner">
        <Reveal>
          <span className="eyebrow">{siteCopy.finalCta.eyebrow}</span>
          <h2>{siteCopy.finalCta.title}</h2>
        </Reveal>
        <Reveal delay={100}>
          <div className="final-actions">
            <a className="btn btn-coral" href={clinic.whatsapp} target="_blank" rel="noreferrer">
              <MessageCircle size={16} />
              {siteCopy.finalCta.whatsapp}
              <ArrowRight size={15} />
            </a>
            <a className="btn btn-light" href={clinic.tel}>
              <Phone size={15} />
              {siteCopy.finalCta.call}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
