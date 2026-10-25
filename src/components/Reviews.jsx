import { useState } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink, Quote, Star } from 'lucide-react';
import { clinic, externalLinks, reviews, siteCopy } from '../content';
import Reveal from './Reveal';

export default function Reviews() {
  const [active, setActive] = useState(0);
  const review = reviews[active];
  const move = (delta) =>
    setActive((current) => (current + delta + reviews.length) % reviews.length);

  return (
    <section className="section reviews" id="reviews">
      <div className="container">
        <Reveal>
          <div className="rv-head">
            <div className="rv-intro">
              <span className="eyebrow">{siteCopy.reviews.eyebrow}</span>
              <h2 className="section-title">{siteCopy.reviews.title}</h2>
              <p className="section-copy">
                {siteCopy.reviews.descriptionPrefix} {clinic.rating}{' '}
                {siteCopy.reviews.descriptionSuffix} {clinic.reviewCount} reviews.
              </p>
              <p className="placeholder-note">{siteCopy.reviews.placeholderNotice}</p>
            </div>

            <div className="rv-score">
              <strong>{clinic.rating}</strong>
              <div>
                <div className="rv-stars" aria-label={siteCopy.reviews.starsAria}>
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Star key={star} size={18} fill="currentColor" />
                  ))}
                </div>
                <p>
                  {siteCopy.reviews.ratingSuffix} · {clinic.reviewCount} reviews
                </p>
                <a
                  className="rv-google"
                  href={externalLinks.googleReviews}
                  target="_blank"
                  rel="noreferrer"
                >
                  {siteCopy.reviews.googleLink}
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="rv-board">
            <figure className="rv-featured" aria-live="polite">
              <Quote className="rv-quote-icon" size={44} aria-hidden="true" />
              <blockquote>{review.quote}</blockquote>
              <figcaption>
                <span className="rv-avatar" aria-hidden="true">
                  {review.label.charAt(0)}
                </span>
                <span className="rv-who">
                  <strong>{review.label}</strong>
                  <small>{review.source}</small>
                </span>
                <span className="rv-nav">
                  <span className="rv-count">
                    {active + 1} / {reviews.length}
                  </span>
                  <button
                    type="button"
                    className="icon-btn"
                    onClick={() => move(-1)}
                    aria-label={siteCopy.reviews.previous}
                  >
                    <ArrowLeft size={16} />
                  </button>
                  <button
                    type="button"
                    className="icon-btn"
                    onClick={() => move(1)}
                    aria-label={siteCopy.reviews.next}
                  >
                    <ArrowRight size={16} />
                  </button>
                </span>
              </figcaption>
            </figure>

            <div className="rv-list" role="group" aria-label={siteCopy.reviews.chooseAria}>
              {reviews.map((item, index) => (
                <button
                  key={item.label}
                  type="button"
                  className={`rv-item ${active === index ? 'is-active' : ''}`}
                  onClick={() => setActive(index)}
                  aria-pressed={active === index}
                  aria-label={`${siteCopy.reviews.showReview} ${item.label}`}
                >
                  <span className="rv-avatar" aria-hidden="true">
                    {item.label.charAt(0)}
                  </span>
                  <span className="rv-item-body">
                    <strong>{item.label}</strong>
                    <span className="rv-snippet">{item.quote}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}