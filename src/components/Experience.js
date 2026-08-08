import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaMapMarkerAlt, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';
import './Experience.css';

const EXPERIENCES = [
  {
    id: 'ramatek-solution',
    role: 'SQL Developer and Business Reporting Specialist',
    company: 'Ramatek Solution',
    subtitle: 'ERP and CRM software for textile and business management clients',
    location: 'Surat, Gujarat, India',
    period: 'April 2024 – March 2026',
    duration: '2 Years',
    bullets: [
      'Wrote and maintained T-SQL stored procedures, CTEs, views, subqueries, CASE expressions, and User-Defined Functions supporting MIS reports and operational dashboards across Finance, Sales, Inventory, and Accounting modules.',
      'Optimised existing SQL queries and stored procedures to improve readability and reporting efficiency in production environments.',
      'Developed Crystal Reports and RDLC layouts for invoicing, ledger management, and financial KPI reporting across client ERP modules.',
      'Gathered requirements directly from business clients, translating workflow needs into SQL-based reporting solutions.',
      'Customised CRM workflows and ERP modules, supporting client deployments from sign-off through go-live and post-deployment handover.',
      'Debugged stored procedures, report templates, and ERP configurations as part of ongoing production support and bug resolution.',
      'Worked within a small development team across multiple ERP implementations, contributing to SQL development and delivery coordination alongside senior developers.'
    ],
    techStack: [
      'Microsoft SQL Server',
      'T-SQL',
      'Stored Procedures',
      'CTEs & Views',
      'Crystal Reports',
      'RDLC Reports',
      'ERP Customisation',
      'CRM Workflows',
      'MIS Reporting',
      'Excel Dashboards'
    ]
  }
];

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">{`// Work Experience`}</span>
          <h2 className="section-title">Professional <span>Experience</span></h2>
          <p className="section-subtitle">
            Detailed breakdown of my professional role, responsibilities, and technical contributions as documented in my resume.
          </p>
        </motion.div>

        <div className="experience__timeline">
          {EXPERIENCES.map((exp, idx) => (
            <motion.article
              key={exp.id}
              className="experience__card glass-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              {/* Card Header */}
              <div className="experience__header">
                <div className="experience__company-info">
                  <div className="experience__icon-wrap">
                    <FaBuilding className="experience__company-icon" />
                  </div>
                  <div>
                    <h3 className="experience__role">{exp.role}</h3>
                    <p className="experience__company">{exp.company}</p>
                    <p className="experience__subtitle">{exp.subtitle}</p>
                  </div>
                </div>

                <div className="experience__meta">
                  <span className="experience__badge">{exp.duration}</span>
                  <span className="experience__meta-item">
                    <FaCalendarAlt /> {exp.period}
                  </span>
                  <span className="experience__meta-item">
                    <FaMapMarkerAlt /> {exp.location}
                  </span>
                </div>
              </div>

              {/* Responsibilities list */}
              <div className="experience__body">
                <h4 className="experience__body-title">Key Responsibilities & Deliverables:</h4>
                <ul className="experience__bullets">
                  {exp.bullets.map((bullet, i) => (
                    <motion.li
                      key={i}
                      className="experience__bullet-item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 0.1 + i * 0.05 }}
                    >
                      <FaCheckCircle className="experience__check-icon" />
                      <span>{bullet}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Technologies Used */}
              <div className="experience__footer">
                <p className="experience__tech-title">Technologies & Domains:</p>
                <div className="experience__tags">
                  {exp.techStack.map((tech) => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
