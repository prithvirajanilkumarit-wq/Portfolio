import React from 'react';
import './Achievements.css';

/* Achievements sourced directly from resume "Key Achievements & Projects" */
const ACHIEVEMENTS = [
  {
    id: 'team-lead',
    icon: '🏆',
    title: 'ERP Team Lead',
    description:
      'Acted as Team Lead for multiple ERP implementation projects across the textile and business management sectors — coordinating developers, managing timelines, and liaising directly with clients.',
  },
  {
    id: 'modules-delivered',
    icon: '📦',
    title: '5+ Software Modules Delivered On Schedule',
    description:
      'Successfully delivered 5+ customized software modules on schedule, directly improving operational efficiency for business clients and earning positive client feedback.',
  },
  {
    id: 'sql-performance',
    icon: '⚡',
    title: 'SQL Performance Improvements',
    description:
      'Optimized SQL stored procedures and reporting queries, measurably reducing execution time and enhancing overall database performance in production ERP systems.',
  },
  {
    id: 'client-comm',
    icon: '🤝',
    title: 'End-to-End Client Communication',
    description:
      'Handled complete client communication independently — from initial requirement gathering sessions through to final product delivery — ensuring alignment and satisfaction at each stage.',
  },
];

function Achievements() {
  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <span className="section-label">// highlights</span>
        <h2 className="section-title">Key <span>Achievements</span></h2>
        <div className="section-divider" />

        <div className="achievements__grid">
          {ACHIEVEMENTS.map((item) => (
            <article key={item.id} className="ach-card card">
              <div className="ach-card__icon-wrap" aria-hidden="true">
                <span className="ach-card__icon">{item.icon}</span>
              </div>
              <h3 className="ach-card__title">{item.title}</h3>
              <p className="ach-card__desc">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
