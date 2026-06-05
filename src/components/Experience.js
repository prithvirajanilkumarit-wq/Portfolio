import React, { useState } from 'react';
import './Experience.css';

const EXPERIENCE = [
  {
    id: 'ramatek',
    company: 'Ramatek Solution',
    role: 'Data Analyst — CRM & Database Systems',
    period: 'Apr 2024 – Mar 2026',
    location: 'Surat, Gujarat',
    type: 'Full-time',
    highlights: [
      'Led a team of developers across 5+ ERP implementation projects in the textile and business management sectors, ensuring on-time delivery and high-quality output.',
      'Designed and optimized SQL stored procedures for reporting, significantly reducing query execution time and improving overall system performance.',
      'Built and customized ERP software dashboards tailored to textile and business management client requirements.',
      'Created professional report layouts using SAP Crystal Reports and RDLC for client-facing deliverables.',
      'Developed software solutions using Angular and SQL; performed REST API testing via Swagger.',
      'Conducted client-facing requirement gathering sessions and managed CRM workflows to ensure client satisfaction.',
      'Focused on code optimization and module enhancement across multiple production deployments.',
    ],
    tags: ['SQL', 'ERP', 'CRM', 'SAP Crystal Reports', 'RDLC', 'Angular', 'Power BI', 'Swagger'],
  },
];

function Experience() {
  const [expanded, setExpanded] = useState({});

  const toggle = (id) => setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <section id="experience" className="experience">
      <div className="container">
        <span className="section-label">// where I've worked</span>
        <h2 className="section-title">Work <span>Experience</span></h2>
        <div className="section-divider" />

        <div className="experience__timeline">
          {EXPERIENCE.map((exp) => {
            const isExpanded = expanded[exp.id];
            const visibleHighlights = isExpanded ? exp.highlights : exp.highlights.slice(0, 3);

            return (
              <article key={exp.id} className="exp-card card">
                {/* Header */}
                <div className="exp-card__header">
                  <div className="exp-card__company-wrap">
                    <div className="exp-card__dot" aria-hidden="true" />
                    <div>
                      <h3 className="exp-card__company">{exp.company}</h3>
                      <p className="exp-card__role">{exp.role}</p>
                    </div>
                  </div>
                  <div className="exp-card__meta">
                    <span className="exp-card__period">{exp.period}</span>
                    <span className="exp-card__type">{exp.type}</span>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="exp-card__highlights">
                  {visibleHighlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>

                {/* Show more */}
                {exp.highlights.length > 3 && (
                  <button
                    className="exp-card__toggle"
                    onClick={() => toggle(exp.id)}
                    aria-expanded={isExpanded}
                  >
                    {isExpanded ? '↑ Show less' : `↓ Show ${exp.highlights.length - 3} more`}
                  </button>
                )}

                {/* Tags */}
                <div className="exp-card__tags">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
