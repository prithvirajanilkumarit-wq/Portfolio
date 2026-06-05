import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

/* Navigation links matching section IDs */
const NAV_LINKS = [
  { label: 'About',       to: 'about' },
  { label: 'Skills',      to: 'skills' },
  { label: 'Experience',  to: 'experience' },
  { label: 'Projects',    to: 'projects' },
  { label: 'Education',   to: 'education' },
  { label: 'Achievements',to: 'achievements' },
  { label: 'Contact',     to: 'contact' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="navbar__container">
        {/* Logo */}
        <Link
          to="hero"
          smooth
          duration={500}
          className="navbar__logo"
          aria-label="Go to top"
        >
          <span className="navbar__logo-bracket">&lt;</span>
          PA
          <span className="navbar__logo-bracket">/&gt;</span>
        </Link>

        {/* Desktop nav links */}
        <ul className="navbar__links" role="menubar">
          {NAV_LINKS.map((link) => (
            <li key={link.to} role="none">
              <Link
                to={link.to}
                smooth
                duration={500}
                offset={-70}
                spy
                activeClass="navbar__link--active"
                className="navbar__link"
                role="menuitem"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Downloads resume.pdf from the public/ folder */}
        <a
          href="/resume.pdf"
          download="Prithviraj_Anilkumar_Resume.pdf"
          className="navbar__cta btn-primary"
          aria-label="Download resume PDF"
        >
          Resume
        </a>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`} role="dialog" aria-modal="true">
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth
                duration={500}
                offset={-70}
                className="navbar__mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
