import React from 'react';
import './About.css';

/* Stats to display */
const STATS = [
  { value: '2+',  label: 'Years Experience' },
  { value: '5+',  label: 'ERP Projects Led' },
  { value: '7.5', label: 'GPA (MCA)' },
  { value: '4',   label: 'Languages Spoken' },
];

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <span className="section-label">// who I am</span>
        <h2 className="section-title">About <span>Me</span></h2>
        <div className="section-divider" />

        <div className="about__grid">
          {/* Photo */}
          <div className="about__image-col">
            <div className="about__image-frame">
              <img
                src="/profile.jpg"
                alt="Prithviraj Anilkumar"
                className="about__image"
                loading="lazy"
              />
            </div>
            {/* Language badges */}
            <div className="about__languages">
              <p className="about__lang-label">Languages Spoken</p>
              <div className="about__lang-chips">
                {['English', 'Hindi', 'Gujarati', 'Malayalam'].map((lang) => (
                  <span key={lang} className="tag">{lang}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="about__content-col">
            <p className="about__text">
              I'm <strong>Prithviraj Anilkumar</strong>, a Data Analyst and MCA student at Lovely
              Professional University (LPU), currently maintaining a GPA of 7.50. I hold a Bachelor
              of Computer Applications from Bhagwan Mahavir University (GPA: 8.5).
            </p>
            <p className="about__text">
              Over the past two years at <strong>Ramatek Solution</strong>, I have worked as a Data
              Analyst focused on CRM and database systems — leading ERP implementation projects in
              the textile and business management sectors, optimizing SQL stored procedures, and
              building custom dashboards using tools like SAP Crystal Reports and Power BI.
            </p>
            <p className="about__text">
              I enjoy translating business requirements into technical solutions and communicating
              across the full client lifecycle — from requirement gathering to final delivery. I'm
              currently seeking a <strong>data-driven or full-stack development role</strong> where
              I can continue to grow and contribute meaningfully.
            </p>

            {/* Stats */}
            <div className="about__stats">
              {STATS.map((stat) => (
                <div key={stat.label} className="about__stat">
                  <span className="about__stat-value">{stat.value}</span>
                  <span className="about__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Location & availability */}
            <div className="about__meta">
              <span className="about__meta-item">📍 Surat, Gujarat 395017</span>
              <span className="about__meta-item about__meta-available">🟢 Open to Opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
