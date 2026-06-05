import React from 'react';
import { Link } from 'react-scroll';
import './Footer.css';

const CURRENT_YEAR = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__container">
        {/* Brand */}
        <div className="footer__brand">
          <Link to="hero" smooth duration={500} className="footer__logo">
            <span className="footer__logo-bracket">&lt;</span>PA<span className="footer__logo-bracket">/&gt;</span>
          </Link>
          <p className="footer__tagline">Data Analyst · MCA Student · ERP Developer</p>
        </div>

        {/* Quick links */}
        <nav className="footer__nav" aria-label="Footer navigation">
          {['about', 'skills', 'experience', 'projects', 'education', 'contact'].map((link) => (
            <Link
              key={link}
              to={link}
              smooth
              duration={500}
              offset={-70}
              className="footer__link"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </Link>
          ))}
        </nav>

        {/* Social / contact links */}
        <div className="footer__social">
          <a href="mailto:prithviraj.anilkumar.it@gmail.com" className="footer__social-link" aria-label="Email">
            ✉
          </a>
          <a href="tel:+917096512260" className="footer__social-link" aria-label="Phone">
            📱
          </a>
          <a href="https://www.linkedin.com/in/prithviraj-anilkumar-974046329" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="LinkedIn">
            💼
          </a>
          <a href="https://github.com/prithvirajanilkumarit-wq" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="GitHub">
            🐙
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <p>
          © {CURRENT_YEAR} Prithviraj Anilkumar · Surat, Gujarat, India · Built with React
        </p>
      </div>
    </footer>
  );
}

export default Footer;
