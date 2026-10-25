import { ArrowRight, Phone, MessageCircle, Star, HeartHandshake, Clock3 } from 'lucide-react';
import { clinic, siteCopy } from '../content';
import Reveal from './Reveal';

function ToothArt() {
  return (
    <svg
      className="tooth-art"
      viewBox="0 0 280 330"
      role="img"
      aria-label={siteCopy.hero.toothAria}
    >
      <path
        d="M69 28C43 35 28 59 31 91c3 32 17 51 24 80 7 28 9 92 31 106 19 13 25-49 43-50 19-1 25 65 45 51 21-15 22-83 29-110 9-33 27-60 22-94-5-34-29-51-56-48-21 2-30 12-46 12-18 0-33-16-54-10Z"
        fill="none"
        stroke="#e4f2ed"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M80 79c17-12 34-11 50-2m24-4c13-6 27-4 38 4"
        fill="none"
        stroke="#8ed7c7"
        strokeWidth="3"
        strokeLinecap="round"
        opacity=".8"
      />
      <path
        d="M96 118c12 12 25 17 43 17s31-5 44-17"
        fill="none"
        stroke="#8ed7c7"
        strokeWidth="2"
        strokeLinecap="round"
        opacity=".6"
      />
      <circle cx="58" cy="45" r="4" fill="#c9a15b" />
      <circle cx="227" cy="150" r="3" fill="#c9a15b" />
      <circle cx="62" cy="228" r="3" fill="#c9a15b" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <Reveal>
          <span className="eyebrow">{siteCopy.hero.eyebrow}</span>
          <h1>
            {siteCopy.hero.titleBefore}
            <em>{siteCopy.hero.titleEmphasis}</em>
            {siteCopy.hero.titleAfter}
          </h1>
          <p className="hero-copy">{siteCopy.hero.description}</p>
          <div className="hero-actions">
            <a className="btn btn-coral" href={clinic.whatsapp} target="_blank" rel="noreferrer">
              <MessageCircle size={17} />
              {siteCopy.hero.book}
              <ArrowRight size={15} />
            </a>
            <a className="btn btn-outline" href={clinic.tel}>
              <Phone size={16} />
              {siteCopy.hero.call} {clinic.phone}
            </a>
          </div>
          <div className="rating-line">
            <span className="stars" aria-label={siteCopy.hero.starLabel}>
              ★★★★★
            </span>
            <span>
              <strong>{clinic.rating}</strong> {siteCopy.hero.ratingSuffix} - {clinic.reviewCount}{' '}
              {siteCopy.hero.reviewsSuffix}
            </span>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="hero-art" aria-label={siteCopy.hero.artLabel}>
            <div className="art-wash" />
            <div className="art-ring" />
            <ToothArt />
            <div className="float-pill float-rating">
              <span className="float-icon">
                <Star size={15} fill="currentColor" />
              </span>
              <span>
                {clinic.rating} <small>{siteCopy.hero.ratingCard}</small>
              </span>
            </div>
            <div className="float-pill float-kids">
              <span className="float-icon">
                <HeartHandshake size={16} />
              </span>
              {siteCopy.hero.kidsCard}
            </div>
            <div className="float-pill float-open">
              <span className="float-icon">
                <Clock3 size={16} />
              </span>
              {siteCopy.hero.hoursCard}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
