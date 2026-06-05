import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './Hero.css';

/* Typewriter words */
const ROLES = [
  'Data Analyst',
  'ERP Solutions Developer',
  'SQL Optimization Specialist',
  'Dashboard Developer',
  'MCA Student @ LPU',
];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  /* Typewriter effect */
  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIndex((i) => (i + 1) % ROLES.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section id="hero" className="hero">
      {/* Ambient background particles */}
      <div className="hero__bg-grid" aria-hidden="true" />
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />

      <div className="container hero__container">
        {/* Text content */}
        <div className="hero__content">
          <p className="hero__greeting animate-fade-up" style={{ animationDelay: '0.1s' }}>
            👋 Hello, I'm
          </p>

          <h1 className="hero__name animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Prithviraj<br />
            <span className="hero__name-accent">Anilkumar</span>
          </h1>

          <div className="hero__typewriter animate-fade-up" style={{ animationDelay: '0.35s' }}>
            <span className="hero__role">{displayed}</span>
            <span className="hero__cursor" aria-hidden="true">|</span>
          </div>

          <p className="hero__summary animate-fade-up" style={{ animationDelay: '0.5s' }}>
            Results-driven Data Analyst and MCA student with 2+ years of experience delivering
            ERP-based solutions, SQL report optimization, and full-stack software development.
            Based in <span className="hero__highlight">Surat, Gujarat</span>.
          </p>

          {/* Contact chips */}
          <div className="hero__chips animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <a href="mailto:prithviraj.anilkumar.it@gmail.com" className="hero__chip">
              ✉ prithviraj.anilkumar.it@gmail.com
            </a>
            <a href="tel:+917096512260" className="hero__chip">
              📱 +91-7096512260
            </a>
            <a href="https://www.linkedin.com/in/prithviraj-anilkumar-974046329" target="_blank" rel="noopener noreferrer" className="hero__chip">
              💼 LinkedIn
            </a>
            <a href="https://github.com/prithvirajanilkumarit-wq" target="_blank" rel="noopener noreferrer" className="hero__chip">
              🐙 GitHub
            </a>
          </div>

          {/* CTAs */}
          <div className="hero__ctas animate-fade-up" style={{ animationDelay: '0.72s' }}>
            <Link to="projects" smooth duration={500} offset={-70} className="btn-primary">
              View My Work
            </Link>
            <Link to="contact" smooth duration={500} offset={-70} className="btn-outline">
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Profile image */}
        <div className="hero__image-wrap animate-fade-up" style={{ animationDelay: '0.45s' }}>
          <div className="hero__image-ring" aria-hidden="true" />
          <div className="hero__image-border">
            <img
              src="/profile.jpg"
              alt="Prithviraj Anilkumar — Data Analyst"
              className="hero__image"
              loading="eager"
            />
          </div>
          {/* Floating badge */}
          <div className="hero__badge" aria-label="Open to work">
            <span className="hero__badge-dot" aria-hidden="true" />
            Open to Work
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="hero__scroll-cue" aria-label="Scroll down">
        <Link to="about" smooth duration={500} offset={-70}>
          <div className="hero__scroll-mouse">
            <div className="hero__scroll-wheel" />
          </div>
          <p>Scroll</p>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
