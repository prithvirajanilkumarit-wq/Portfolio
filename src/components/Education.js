import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaAward } from 'react-icons/fa';
import './Education.css';

const EDUCATION = [
  {
    id: 'mca',
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Lovely Professional University (LPU)',
    period: '2024 – 2026 (Expected)',
    gpa: '7.59 / 10.0 (Current)',
    status: 'Currently Pursuing',
    badgeClass: 'status--in-progress',
    details: 'Pursuing postgraduate studies in Computer Applications. Coursework focuses on database architecture, software engineering, business intelligence, and data analytics.',
    slideDirection: -30
  },
  {
    id: 'bca',
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Bhagwan Mahavir University (BMU)',
    period: '2021 – 2024',
    gpa: '8.58 / 10.0',
    distinction: 'Distinction',
    status: 'Graduated with Distinction',
    badgeClass: 'status--completed',
    details: 'Completed three-year undergraduate degree program with Distinction. Built foundational expertise in database management, programming, web technologies, and system analysis.',
    slideDirection: 30
  }
];

function Education() {
  return (
    <section id="education" className="education">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">{`// Education`}</span>
          <h2 className="section-title">Academic <span>Background</span></h2>
          <p className="section-subtitle">
            Degrees and academic qualifications accurately sourced from my resume.
          </p>
        </motion.div>

        <div className="education__grid">
          {EDUCATION.map((edu) => (
            <motion.article
              key={edu.id}
              className="education__card glass-card"
              initial={{ opacity: 0, x: edu.slideDirection }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ duration: 0.55 }}
            >
              <div className="education__card-top">
                <div className="education__icon-wrap">
                  <FaGraduationCap className="education__icon" />
                </div>
                <span className={`education__status-badge ${edu.badgeClass}`}>
                  {edu.status}
                </span>
              </div>

              <h3 className="education__degree">{edu.degree}</h3>

              <div className="education__institution-wrap">
                <FaUniversity className="education__meta-icon" />
                <span className="education__institution">{edu.institution}</span>
              </div>

              <div className="education__meta-row">
                <span className="education__period">{edu.period}</span>
                <div className="education__gpa-pill">
                  <span>GPA: <strong>{edu.gpa}</strong></span>
                  {edu.distinction && (
                    <span className="education__distinction">
                      <FaAward /> {edu.distinction}
                    </span>
                  )}
                </div>
              </div>

              <p className="education__details">{edu.details}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
