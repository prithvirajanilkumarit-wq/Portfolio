import React from 'react';
import './Projects.css';

/* Projects derived from resume's key achievements & responsibilities */
const PROJECTS = [
  {
    id: 'erp-textile',
    title: 'ERP System — Textile Industry',
    category: 'ERP Implementation',
    emoji: '🏭',
    description:
      'Led the design and implementation of a customized ERP solution for a textile industry client at Ramatek Solution. Coordinated a cross-functional development team across the full project lifecycle — from requirement gathering to production deployment.',
    highlights: [
      'Led a team through multiple implementation sprints ensuring on-time delivery',
      'Customized ERP modules to fit textile sector-specific business workflows',
      'Integrated CRM workflows for client-facing communication management',
    ],
    tags: ['ERP', 'CRM', 'SQL', 'Team Leadership', 'Requirements Gathering'],
    type: 'Professional',
  },
  {
    id: 'sql-optimization',
    title: 'SQL Performance Optimization',
    category: 'Database Engineering',
    emoji: '⚡',
    description:
      'Designed and optimized SQL stored procedures for business reporting modules within ERP systems. The work measurably reduced query execution time and enhanced overall database performance for production environments.',
    highlights: [
      'Rewrote complex SQL queries and stored procedures for efficiency',
      'Identified bottlenecks in reporting pipelines and resolved them',
      'Improved overall database response for high-frequency report generation',
    ],
    tags: ['SQL', 'Stored Procedures', 'Query Optimization', 'Database Performance'],
    type: 'Professional',
  },
  {
    id: 'reporting-dashboards',
    title: 'Custom Reporting Dashboards',
    category: 'Business Intelligence',
    emoji: '📊',
    description:
      'Built and delivered customized reporting dashboards and report layouts for business management clients using SAP Crystal Reports, RDLC, and Power BI. Focused on clarity, usability, and alignment with client KPIs.',
    highlights: [
      'Designed professional, client-facing report layouts in SAP Crystal Reports',
      'Built RDLC reports integrated within .NET-based ERP applications',
      'Developed Power BI dashboards for business performance monitoring',
    ],
    tags: ['Power BI', 'SAP Crystal Reports', 'RDLC', 'Dashboard Design', 'BI'],
    type: 'Professional',
  },
  {
    id: 'api-integration',
    title: 'REST API Integration & Testing',
    category: 'Full-Stack Development',
    emoji: '🔌',
    description:
      'Developed and integrated REST API solutions within ERP software modules using Angular for the frontend and Swagger for API documentation and testing. Ensured smooth communication between frontend and backend services.',
    highlights: [
      'Implemented Angular components to consume REST API endpoints',
      'Used Swagger to document, test, and validate API contracts',
      'Maintained code quality standards during module enhancements',
    ],
    tags: ['Angular', 'REST API', 'Swagger', 'JavaScript', 'ASP.NET'],
    type: 'Professional',
  },
  {
    id: 'software-modules',
    title: 'Customized Software Module Delivery',
    category: 'Software Development',
    emoji: '🧩',
    description:
      'Delivered 5+ customized software modules on schedule for business clients. Responsibilities included code optimization, module testing, and managing CRM workflows to keep clients aligned throughout development.',
    highlights: [
      '5+ modules delivered on schedule with high client satisfaction',
      'Conducted client-facing requirement gathering and feedback sessions',
      'Performed code optimization to improve module performance',
    ],
    tags: ['Module Development', 'Code Optimization', 'Client Communication', 'CRM'],
    type: 'Professional',
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <span className="section-label">// what I've built</span>
        <h2 className="section-title">Key <span>Projects</span></h2>
        <div className="section-divider" />

        <div className="projects__grid">
          {PROJECTS.map((proj) => (
            <article key={proj.id} className="proj-card card">
              {/* Top row */}
              <div className="proj-card__top">
                <span className="proj-card__emoji" aria-hidden="true">{proj.emoji}</span>
                <span className="proj-card__type">{proj.type}</span>
              </div>

              {/* Category */}
              <p className="proj-card__category">{proj.category}</p>

              {/* Title */}
              <h3 className="proj-card__title">{proj.title}</h3>

              {/* Description */}
              <p className="proj-card__desc">{proj.description}</p>

              {/* Highlights */}
              <ul className="proj-card__highlights">
                {proj.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>

              {/* Tags */}
              <div className="proj-card__tags">
                {proj.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
