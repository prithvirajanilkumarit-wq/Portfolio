import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaArrowRight,
  FaMapMarkerAlt,
  FaDatabase,
  FaChartPie,
  FaCogs,
  FaPhoneAlt,
  FaCopy
} from 'react-icons/fa';
import './Hero.css';

function Hero({ onToast }) {
  const handleCopy = (text, label) => {
    navigator.clipboard?.writeText(text);
    if (onToast) onToast(`Copied ${label} to clipboard!`);
  };

  return (
    <section id="hero" className="hero">
      {/* Background radial ambient blur */}
      <div className="hero__background-glow" aria-hidden="true" />

      <div className="container hero__container">
        {/* Top Centered Section */}
        <motion.div
          className="hero__top-section"
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Avatar with Multi-gradient Aura Glow */}
          <div className="hero__avatar-container group animate-float-slow">
            <div className="hero__aura-blur" />
            <div className="hero__avatar-frame">
              <img
                src={`${process.env.PUBLIC_URL}/profile.jpg`}
                alt="Prithviraj Anilkumar"
                className="hero__avatar-img"
              />
            </div>
          </div>

          {/* Status Badge Pill */}
          <div className="hero__status-pill">
            <div className="hero__status-dots">
              <div className="hero__status-ping" />
              <div className="hero__status-dot" />
            </div>
            <span className="hero__status-text">Available for Opportunities</span>
          </div>

          {/* Main Title */}
          <h1 className="hero__title">
            Hi. I'm <span className="hero__title-name">Prithviraj Anilkumar</span>
          </h1>

          {/* Subheadline */}
          <p className="hero__subtitle">
            A <strong>SQL Developer & ERP Reporting Specialist</strong> who likes <em>building data solutions</em>.
          </p>

          {/* Action Row */}
          <div className="hero__action-row">
            <div className="hero__social-icons">
              <a
                href="mailto:prithviraj.anilkumar.it@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hero__social-icon-btn animate-wiggle"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://www.linkedin.com/in/prithviraj-anilkumar-974046329/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero__social-icon-btn animate-wiggle"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/prithvirajanilkumarit-wq"
                target="_blank"
                rel="noopener noreferrer"
                className="hero__social-icon-btn animate-wiggle"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>

            <span className="hero__row-separator" aria-hidden="true" />

            <Link to="projects" smooth duration={500} offset={-90} className="hero__work-btn">
              <span>View my work</span>
              <FaArrowRight className="hero__work-arrow" />
            </Link>
          </div>
        </motion.div>

        {/* Bento Grid Dashboard (Shivy Patel Style) */}
        <motion.div
          className="hero__bento-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Card 1: Location */}
          <motion.div
            className="bento-card bento-card--location glass-card"
            whileHover={{ y: -5, scale: 1.015 }}
            transition={{ type: 'spring', stiffness: 350, damping: 22 }}
          >
            <div className="bento-card__header">
              <FaMapMarkerAlt className="bento-card__icon text-purple" />
              <h3>Based In</h3>
            </div>
            <p className="bento-card__value">Surat, Gujarat, India</p>
            <p className="bento-card__sub">Open to remote & relocation opportunities</p>
          </motion.div>

          {/* Card 2: Current Focus / Soundwave */}
          <motion.div
            className="bento-card bento-card--focus glass-card"
            whileHover={{ y: -5, scale: 1.015 }}
            transition={{ type: 'spring', stiffness: 350, damping: 22 }}
          >
            <div className="bento-card__header">
              <div className="bento-card__soundwave" aria-hidden="true">
                <span className="animate-sound-wave" style={{ animationDelay: '0s' }} />
                <span className="animate-sound-wave" style={{ animationDelay: '0.15s' }} />
                <span className="animate-sound-wave" style={{ animationDelay: '0.3s' }} />
                <span className="animate-sound-wave" style={{ animationDelay: '0.45s' }} />
              </div>
              <h3>Currently Enhancing</h3>
            </div>
            <p className="bento-card__value">Power BI (DAX, RLS) & Python Analytics</p>
            <p className="bento-card__sub">LPU MCA Scholar (2024–2026)</p>
          </motion.div>

          {/* Card 3: Database Competency */}
          <motion.div
            className="bento-card bento-card--db glass-card"
            whileHover={{ y: -5, scale: 1.015 }}
            transition={{ type: 'spring', stiffness: 350, damping: 22 }}
          >
            <div className="bento-card__header">
              <FaDatabase className="bento-card__icon text-amber" />
              <h3>Core Specialization</h3>
            </div>
            <p className="bento-card__value">T-SQL Stored Procedures & CTEs</p>
            <p className="bento-card__sub">~2 Years @ Ramatek Solution</p>
          </motion.div>

          {/* Card 4: Reporting Competency */}
          <motion.div
            className="bento-card bento-card--reporting glass-card"
            whileHover={{ y: -5, scale: 1.015 }}
            transition={{ type: 'spring', stiffness: 350, damping: 22 }}
          >
            <div className="bento-card__header">
              <FaChartPie className="bento-card__icon text-sky" />
              <h3>Reporting Suites</h3>
            </div>
            <p className="bento-card__value">Crystal Reports & RDLC Layouts</p>
            <p className="bento-card__sub">Sales, Accounting & Inventory MIS</p>
          </motion.div>

          {/* Card 5: Connect */}
          <motion.div
            className="bento-card bento-card--connect glass-card"
            whileHover={{ y: -5, scale: 1.015 }}
            transition={{ type: 'spring', stiffness: 350, damping: 22 }}
          >
            <div className="bento-card__header">
              <FaCogs className="bento-card__icon text-emerald" />
              <h3>Quick Connect</h3>
            </div>
            <div className="bento-card__links">
              <button
                className="bento-card__link bento-card__link-btn"
                onClick={() => handleCopy('prithviraj.anilkumar.it@gmail.com', 'email')}
              >
                <FaEnvelope /> prithviraj.anilkumar.it@gmail.com <FaCopy className="bento-card__copy-icon" />
              </button>
              <button
                className="bento-card__link bento-card__link-btn"
                onClick={() => handleCopy('+91-7096512260', 'phone')}
              >
                <FaPhoneAlt /> +91-7096512260 <FaCopy className="bento-card__copy-icon" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
