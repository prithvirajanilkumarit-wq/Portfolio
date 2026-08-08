import React from 'react';
import { Link } from 'react-scroll';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const CURRENT_YEAR = new Date().getFullYear();

const FOOTER_LINKS = [
  { label: 'Home', to: 'hero' },
  { label: 'About', to: 'about' },
  { label: 'Experience', to: 'experience' },
  { label: 'Projects', to: 'projects' },
  { label: 'Skills', to: 'skills' },
  { label: 'Learning', to: 'continuous-learning' },
  { label: 'Contact', to: 'contact' },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__divider" aria-hidden="true" />

      <div className="container footer__container">
        {/* Brand & Tagline */}
        <div className="footer__brand-section">
          <Link to="hero" smooth duration={500} className="footer__logo" aria-label="Go to Top">
            <img
              src={`${process.env.PUBLIC_URL}/logo.jpg`}
              alt="Prithviraj Anilkumar Logo"
              className="footer__logo-img"
            />
          </Link>
          <p className="footer__description">
            SQL Developer & ERP Reporting Specialist based in Surat, Gujarat. Dedicated to building reliable, high-performance database and analytics solutions.
          </p>
        </div>

        {/* Quick Nav Links */}
        <nav className="footer__nav" aria-label="Footer Navigation">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={500}
              offset={-90}
              className="footer__nav-link"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Social Icons Row */}
        <div className="footer__socials">
          <a
            href="mailto:prithviraj.anilkumar.it@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-btn animate-wiggle"
            aria-label="Send Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="tel:+917096512260"
            className="footer__social-btn animate-wiggle"
            aria-label="Call Phone"
          >
            <FaPhoneAlt />
          </a>
          <a
            href="https://www.linkedin.com/in/prithviraj-anilkumar-974046329/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-btn animate-wiggle"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/prithvirajanilkumarit-wq"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-btn animate-wiggle"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>

        {/* Bottom Metadata & Top Scroll Button */}
        <div className="footer__bottom">
          <div className="footer__status-badge">
            <span className="footer__status-dot" />
            <span>Operational · Production Ready</span>
          </div>

          <p className="footer__copyright">
            © {CURRENT_YEAR} <strong>Prithviraj Anilkumar</strong>. Built with React & Framer Motion.
          </p>

          <Link
            to="hero"
            smooth
            duration={500}
            className="footer__top-btn"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <FaArrowUp className="footer__top-icon" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
