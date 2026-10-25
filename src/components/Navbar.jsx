import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X, Heart } from 'lucide-react';
import { clinic, navLinks, siteCopy } from '../content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const closeMenu = () => setOpen(false);
  return <header className={`site-nav ${scrolled ? 'scrolled' : ''}`}>
    <div className="container nav-inner">
      <a className="wordmark" href={siteCopy.navbar.homeHref} onClick={closeMenu} aria-label={siteCopy.navbar.homeAria}><span className="brand-mark"><Heart size={17} strokeWidth={1.8}/></span>{clinic.name}</a>
      <nav className={`nav-links ${open ? 'open' : ''}`} aria-label={siteCopy.navbar.navigationAria}>
        {navLinks.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
        <a className="btn btn-coral nav-action" href={clinic.whatsapp} target="_blank" rel="noreferrer">{siteCopy.navbar.book} <ArrowUpRight size={15}/></a>
      </nav>
      <button className="menu-toggle" aria-label={open ? siteCopy.navbar.closeMenu : siteCopy.navbar.openMenu} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    </div>
  </header>;
}
