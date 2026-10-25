import { MessageCircle } from 'lucide-react';
import { clinic, siteCopy } from '../content';
import Reveal from './Reveal';

export default function Booking() {
  return <section className="section" id="booking"><div className="container">
    <Reveal><div className="booking-intro"><div><span className="eyebrow">{siteCopy.booking.eyebrow}</span><h2 className="section-title">{siteCopy.booking.title}</h2></div><a className="btn btn-coral" href={clinic.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={16}/>{siteCopy.booking.start}</a></div></Reveal>
    <div className="steps">{siteCopy.booking.steps.map(({ title, copy }, i) => <Reveal key={title} delay={i * 65} className="step-card card"><span className="step-index">0{i + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></Reveal>)}</div>
    <Reveal><div className="booking-info"><div className="info-item"><span>{siteCopy.booking.consultation}</span><strong>{clinic.fee}</strong></div><div className="info-item"><span>{siteCopy.booking.hoursLabel}</span><strong>{siteCopy.booking.hoursShort}</strong></div><div className="info-item"><span>{siteCopy.booking.payment}</span><strong>{siteCopy.booking.paymentAccepted}</strong></div></div></Reveal>
  </div></section>;
}
