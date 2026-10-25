import { useState } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink, Star } from 'lucide-react';
import { clinic, externalLinks, reviews, siteCopy } from '../content';
import Reveal from './Reveal';

export default function Reviews() {
  const [active, setActive] = useState(0);
  const review = reviews[active];
  const move = (delta) => setActive((current) => (current + delta + reviews.length) % reviews.length);
  return <section className="section reviews" id="reviews"><div className="container review-layout">
    <Reveal><div><span className="eyebrow">{siteCopy.reviews.eyebrow}</span><h2 className="section-title">{siteCopy.reviews.title}</h2><p className="section-copy">{siteCopy.reviews.descriptionPrefix} {clinic.rating} {siteCopy.reviews.descriptionSuffix} {clinic.reviewCount} reviews.</p><p className="placeholder-note">{siteCopy.reviews.placeholderNotice}</p></div><div className="review-score"><strong>{clinic.rating}</strong><div className="stars" aria-label={siteCopy.reviews.starsAria}>★★★★★</div><p>{siteCopy.reviews.ratingSuffix} · {clinic.reviewCount} reviews</p></div></Reveal>
    <Reveal delay={100}><div><div className="review-card" aria-live="polite"><div><span className="stars"><Star size={15} fill="currentColor"/><Star size={15} fill="currentColor"/><Star size={15} fill="currentColor"/><Star size={15} fill="currentColor"/><Star size={15} fill="currentColor"/></span><blockquote>{review.quote}</blockquote></div><small>{review.label} · {review.source}</small></div>
      <div className="review-controls"><div className="dots" aria-label={siteCopy.reviews.chooseAria}>{reviews.map((item, index) => <button key={item.label} className={`dot ${active === index ? 'active' : ''}`} onClick={() => setActive(index)} aria-label={`${siteCopy.reviews.showReview} ${item.label}`} aria-current={active === index ? 'true' : undefined}/>)}</div><div className="arrow-controls"><button className="icon-btn" onClick={() => move(-1)} aria-label={siteCopy.reviews.previous}><ArrowLeft size={16}/></button><button className="icon-btn" onClick={() => move(1)} aria-label={siteCopy.reviews.next}><ArrowRight size={16}/></button></div></div>
      <a className="text-link" style={{ marginTop: 19 }} href={externalLinks.googleReviews} target="_blank" rel="noreferrer">{siteCopy.reviews.googleLink}<ExternalLink size={13}/></a>
    </div></Reveal>
  </div></section>;
}
