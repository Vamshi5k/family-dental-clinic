import { Heart, ArrowUpRight } from 'lucide-react';
import { clinic, navLinks, siteCopy } from '../content';

export default function Footer() {
  return <footer className="footer"><div className="container">
    <div className="footer-top">
      <div><a className="wordmark" href={siteCopy.navbar.homeHref}><span className="brand-mark"><Heart size={17}/></span>{clinic.name}</a><p>{siteCopy.footer.summary}</p><a className="footer-links" href={clinic.tel}>{clinic.phone}</a></div>
      <div><h4>{siteCopy.footer.explore}</h4><nav className="footer-links" aria-label={siteCopy.footer.navigationAria}>{navLinks.map(([label, href]) => <a key={href} href={href}>{label}</a>)}<a href={siteCopy.footer.bookingHref}>{siteCopy.footer.bookingLink}</a></nav></div>
      <div><h4>{siteCopy.footer.visit}</h4><p>{clinic.address}<br/>({clinic.landmark})</p><a className="footer-links" href={clinic.whatsapp} target="_blank" rel="noreferrer">{siteCopy.footer.book}<ArrowUpRight size={13}/></a></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} {clinic.name}</span><span>{clinic.location}</span></div>
  </div></footer>;
}
