import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X, Heart } from 'lucide-react';
import { clinic, navLinks, siteCopy } from '../content';

const DESKTOP = '(min-width: 768px)'; // matches the 767px breakpoint in index.css

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // While the menu is open: lock page scroll and close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  // Auto-close if the viewport grows to desktop (rotation, resize)
  useEffect(() => {
    const mq = window.matchMedia(DESKTOP);
    const onChange = (e) => e.matches && setOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`site-nav ${scrolled ? 'scrolled' : ''} ${open ? 'menu-open' : ''}`}>
      <div className="container nav-inner">
        <a
          className="wordmark"
          href={siteCopy.navbar.homeHref}
          onClick={closeMenu}
          aria-label={siteCopy.navbar.homeAria}
        >
          <span className="brand-mark">
            <Heart size={17} strokeWidth={1.8} />
          </span>
          {clinic.name}
        </a>

        <nav
          id="primary-nav"
          className={`nav-links ${open ? 'open' : ''}`}
          aria-label={siteCopy.navbar.navigationAria}
        >
          {navLinks.map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <a
            className="btn btn-coral nav-action"
            href={clinic.whatsapp}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            {siteCopy.navbar.book} <ArrowUpRight size={15} />
          </a>
        </nav>

        <button
          className="menu-toggle"
          aria-label={open ? siteCopy.navbar.closeMenu : siteCopy.navbar.openMenu}
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}