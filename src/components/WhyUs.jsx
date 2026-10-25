import { clinic, reassurance, siteCopy } from '../content';
import Reveal from './Reveal';

export default function WhyUs() {
  return (
    <section className="section why-section" id="why-us">
      <div className="container why-layout">
        <Reveal>
          <span className="eyebrow">{siteCopy.whyUs.eyebrow}</span>
          <h2 className="section-title">{siteCopy.whyUs.title}</h2>
          <p className="section-copy" style={{ color: 'rgba(250,247,242,.68)' }}>
            {siteCopy.whyUs.description}
          </p>
          <div className="why-rating">
            <strong>
              {clinic.rating} <span className="stars">★★★★★</span>
            </strong>
            <p>
              {siteCopy.whyUs.ratingSuffix} {clinic.reviewCount} reviews
            </p>
          </div>
        </Reveal>
        <div className="why-list">
          {reassurance.map(([title, copy], i) => (
            <Reveal key={title} delay={i * 55}>
              <article className="why-row">
                <span className="why-num">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
