import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaGlobeAmericas, FaIndustry } from 'react-icons/fa';
import './About.css';

const STATS = [
  { value: '~2 Years', label: 'T-SQL & Reporting', note: 'Ramatek Solution' },
  { value: '4 Projects', label: 'ERP & Reporting', note: 'Professional & Personal' },
  { value: '8.58 GPA', label: 'BCA Distinction', note: 'Bhagwan Mahavir Univ.' },
  { value: '4 Languages', label: 'Spoken Languages', note: 'Eng, Hin, Guj, Mal' },
];

const LANGUAGES = ['English', 'Hindi', 'Gujarati', 'Malayalam'];

const INDUSTRY_EXPOSURE = [
  'Textile ERP Systems',
  'Accounting & Financial Reporting',
  'CRM Workflow Management',
  'Sales & Inventory Operations'
];

function About({ onToast }) {
  const handleLangClick = (lang) => {
    if (onToast) onToast(`Language: Spoken in ${lang}`);
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{`// About Me`}</span>
          <h2 className="section-title">Professional <span>Profile</span></h2>
          <p className="section-subtitle">
            SQL Developer & ERP Reporting Specialist with expertise in stored procedure optimization, business report generation, and data analytics.
          </p>
        </div>

        <div className="about__grid">
          {/* Left Column: Compact Unified Profile Card */}
          <motion.div
            className="about__visual-col"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="about__profile-card glass-card">
              <div className="about__image-frame">
                <img
                  src={`${process.env.PUBLIC_URL}/profile.jpg`}
                  alt="Prithviraj Anilkumar"
                  className="about__image"
                />
              </div>

              <div className="about__bio-badge">
                <FaGraduationCap className="about__bio-icon" />
                <div>
                  <p className="about__bio-badge-title">MCA Scholar @ LPU</p>
                  <p className="about__bio-badge-sub">GPA: 7.59 / 10.0 (Current)</p>
                </div>
              </div>

              {/* Integrated Languages */}
              <div className="about__languages-section">
                <div className="about__card-header">
                  <FaGlobeAmericas className="about__header-icon" />
                  <h4>Languages Spoken</h4>
                </div>
                <div className="about__lang-chips">
                  {LANGUAGES.map((lang) => (
                    <span
                      key={lang}
                      className="tag about__lang-tag"
                      onClick={() => handleLangClick(lang)}
                      title={`Click to copy ${lang}`}
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative & Integrated Metrics */}
          <motion.div
            className="about__content-col"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="about__summary-card glass-card">
              <h3 className="about__summary-heading">
                Background & Career Summary
              </h3>
              <p className="about__paragraph">
                I am a <strong>SQL Developer and ERP Reporting Developer</strong> based in Surat, Gujarat, with approximately two years of hands-on experience in T-SQL development, stored procedure maintenance, and business report delivery using <strong>Crystal Reports</strong> and <strong>RDLC</strong> layouts.
              </p>
              <p className="about__paragraph">
                During my tenure at <strong>Ramatek Solution</strong>, I contributed directly to requirement gathering, CRM and ERP module customisation, production support, and bug resolution across Sales, Inventory, and Accounting modules for clients in textile and business management sectors.
              </p>
              <p className="about__paragraph">
                I hold a <strong>Bachelor of Computer Applications (BCA)</strong> from Bhagwan Mahavir University with Distinction (GPA: 8.58 / 10.0), and am currently pursuing my <strong>Master of Computer Applications (MCA)</strong> at Lovely Professional University (LPU). Simultaneously, I am expanding my data capabilities in <strong>Power BI</strong> (DAX, Data Modelling, RLS), Power Query, and <strong>Python for Data Analytics</strong>.
              </p>

              {/* Industry Exposure */}
              <div className="about__industry-wrap">
                <div className="about__card-header">
                  <FaIndustry className="about__header-icon" />
                  <h4>Industry Exposure</h4>
                </div>
                <div className="about__industry-grid">
                  {INDUSTRY_EXPOSURE.map((item) => (
                    <div key={item} className="about__industry-item">
                      <span className="about__bullet">▹</span> {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Integrated Stat Highlights */}
              <div className="about__stats-row">
                {STATS.map((stat) => (
                  <div key={stat.label} className="about__stat-item">
                    <span className="about__stat-value">{stat.value}</span>
                    <span className="about__stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
