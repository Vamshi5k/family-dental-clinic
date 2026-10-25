import { MessageCircle, Phone } from 'lucide-react';
import { clinic, siteCopy } from '../content';

export default function FloatingCTA() {
  return (
    <>
      <a
        className="floating-cta"
        href={clinic.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label={siteCopy.floating.bookAria}
      >
        <MessageCircle size={25} />
      </a>
      <div className="mobile-bar" aria-label={siteCopy.floating.quickActions}>
        <a className="btn btn-outline" href={clinic.tel}>
          <Phone size={15} />
          {siteCopy.floating.call}
        </a>
        <a className="btn btn-coral" href={clinic.whatsapp} target="_blank" rel="noreferrer">
          <MessageCircle size={15} />
          {siteCopy.floating.whatsapp}
        </a>
      </div>
    </>
  );
}
