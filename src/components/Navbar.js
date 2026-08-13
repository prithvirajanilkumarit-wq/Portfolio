import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaFileDownload, FaTimes, FaBars, FaSun, FaMoon } from 'react-icons/fa';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home', to: 'hero' },
  { label: 'About', to: 'about' },
  { label: 'Experience', to: 'experience' },
  { label: 'Projects', to: 'projects' },
  { label: 'Skills', to: 'skills' },
  { label: 'Contact', to: 'contact' },
];

function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-floating ${scrolled ? 'navbar-floating--scrolled' : ''}`}>
      <div className="navbar-floating__container">
        {/* Brand / Home Logo */}
        <Link
          to="hero"
          smooth
          duration={500}
          className="navbar-floating__logo"
          aria-label="Home"
        >
          <img
            src={`${process.env.PUBLIC_URL}/logo.jpg`}
            alt="Prithviraj Anilkumar Logo"
            className="navbar-floating__logo-img"
          />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="navbar-floating__nav">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={500}
              offset={-90}
              spy
              activeClass="navbar-floating__link--active"
              className="navbar-floating__link"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="navbar-floating__actions">
          {/* Theme Toggle Button */}
          <button
            className="navbar-floating__theme-btn"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            {theme === 'dark' ? (
              <FaSun className="navbar-floating__theme-icon text-amber" />
            ) : (
              <FaMoon className="navbar-floating__theme-icon text-purple" />
            )}
          </button>

          {/* Resume Download Button */}
          <a
            href={`${process.env.PUBLIC_URL}/resume.pdf`}
            download="Prithviraj_Anilkumar_Resume.pdf"
            className="navbar-floating__resume-btn"
            aria-label="Download Resume"
            title="Download Resume"
          >
            <FaFileDownload className="navbar-floating__action-icon" />
            <span className="navbar-floating__resume-text">Resume</span>
          </a>

          {/* Mobile Hamburger */}
          <button
            className="navbar-floating__hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`navbar-floating__mobile ${menuOpen ? 'navbar-floating__mobile--open' : ''}`}>
        <div className="navbar-floating__mobile-content">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={500}
              offset={-90}
              className="navbar-floating__mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="navbar-floating__mobile-row">
            <button
              className="btn-secondary navbar-floating__mobile-theme"
              onClick={() => {
                onToggleTheme();
              }}
            >
              {theme === 'dark' ? <FaSun /> : <FaMoon />} {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
