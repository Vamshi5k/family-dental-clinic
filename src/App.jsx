import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Treatments from './components/Treatments';
import WhyUs from './components/WhyUs';
import Doctor from './components/Doctor';
import Reviews from './components/Reviews';
import Booking from './components/Booking';
import Visit from './components/Visit';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import { clinic, seo, siteCopy } from './content';

function setSearchMetadata() {
  document.title = seo.title;
  const description = seo.description;
  const setMeta = (selector, attribute, value) => {
    let element = document.head.querySelector(selector);
    if (!element) { element = document.createElement('meta'); document.head.appendChild(element); }
    element.setAttribute(attribute, value);
  };
  setMeta('meta[name="description"]', 'content', description);
  setMeta('meta[property="og:title"]', 'content', seo.title);
  setMeta('meta[property="og:description"]', 'content', seo.socialDescription);
  setMeta('meta[property="og:type"]', 'content', 'website');
  setMeta('meta[name="twitter:card"]', 'content', 'summary');
  setMeta('meta[name="twitter:title"]', 'content', seo.title);
  setMeta('meta[name="twitter:description"]', 'content', seo.socialDescription);
}

function Schema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: clinic.name,
    telephone: clinic.telephone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: clinic.schemaStreetAddress,
      addressLocality: clinic.addressLocality,
      postalCode: clinic.postalCode,
      addressRegion: clinic.addressRegion,
      addressCountry: clinic.addressCountry,
    },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: clinic.rating, reviewCount: String(clinic.reviewCount) },
    openingHours: clinic.openingHours,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}/>;
}

export default function App() {
  setSearchMetadata();
  return <>
    <a className="skip-link" href="#main">{siteCopy.skipLink}</a>
    <Navbar/>
    <main id="main">
      <Hero/>
      <Stats/>
      <Treatments/>
      <WhyUs/>
      <Doctor/>
      <Reviews/>
      <Booking/>
      <Visit/>
      <FinalCTA/>
    </main>
    <Footer/>
    <FloatingCTA/>
    <Schema/>
  </>;
}
