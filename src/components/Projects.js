import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLock, FaExternalLinkAlt, FaGithub, FaLayerGroup } from 'react-icons/fa';
import './Projects.css';

const PROJECTS = [
  {
    id: 'enterprise-erp-reporting',
    title: 'Enterprise ERP Reporting Suite',
    category: 'Professional — Ramatek Solution',
    filterType: 'professional',
    isProprietary: true,
    stack: ['SQL Server', 'Crystal Reports', 'RDLC', 'T-SQL', 'CTEs', 'Views'],
    bullets: [
      'Built on-demand MIS and operational reports covering Sales, Inventory, Purchases, and Accounting modules using Crystal Reports and RDLC, including invoicing, ledger, and financial KPI layouts.',
      'Structured report datasets using CTEs, views, CASE expressions, and temporary tables within stored procedures to ensure consistent output across multi-client deployments.',
      'Added inventory KPI panels and operational metric summaries to the company’s internal dashboard tool based on stakeholder requirements.'
    ]
  },
  {
    id: 'erp-implementation-support',
    title: 'ERP Implementation & Deployment Support',
    category: 'Professional — Ramatek Solution',
    filterType: 'professional',
    isProprietary: true,
    stack: ['SQL Server', 'Angular (Basic)', 'Git', 'OPENJSON', 'UNION'],
    bullets: [
      'Assisted with multiple ERP client deployments, supporting SQL reporting setup, module customisation, and post-deployment troubleshooting alongside senior developers.',
      'Modified SQL queries against existing normalised schemas; applied OPENJSON and UNION as required by ERP data structures across Sales, Inventory, and Accounting modules.',
      'Assisted with minor Angular (Basic) front-end tasks for ERP screens and contributed to client-facing deployment documentation.'
    ]
  },
  {
    id: 'sql-reporting-business',
    title: 'SQL Reporting & Business Reporting',
    category: 'Professional — Ramatek Solution',
    filterType: 'professional',
    isProprietary: true,
    stack: ['SQL Server', 'Crystal Reports', 'RDLC', 'Microsoft Excel', 'MIS'],
    bullets: [
      'Maintained SQL stored procedures and business report templates for evolving client requirements, including period-end MIS and management summaries.',
      'Performed data extraction and validation in SQL Server to verify report accuracy; identified and resolved data inconsistencies before delivery.',
      'Organised extracted data into structured Excel dashboards, allowing non-technical stakeholders to review KPIs independently.'
    ]
  },
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio Website',
    category: 'Personal Project',
    filterType: 'personal',
    isProprietary: false,
    liveUrl: 'https://prithvirajanilkumarit-wq.github.io/Portfolio/',
    githubUrl: 'https://github.com/prithvirajanilkumarit-wq/Portfolio',
    stack: ['HTML', 'CSS', 'JavaScript', 'React', 'GitHub Pages'],
    bullets: [
      'Built and deployed a personal portfolio website demonstrating front-end skills, live at prithvirajanilkumarit-wq/Portfolio.'
    ]
  }
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.filterType === activeFilter;
  });

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">{`// Projects`}</span>
          <h2 className="section-title">Key <span>Projects</span></h2>
          <p className="section-subtitle">
            Projects and reporting solutions developed during employment at Ramatek Solution and personal software initiatives.
          </p>
        </motion.div>

        {/* Filter Navigation */}
        <motion.div
          className="projects__filters"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <button
            className={`projects__filter-btn ${activeFilter === 'all' ? 'projects__filter-btn--active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Projects ({PROJECTS.length})
          </button>
          <button
            className={`projects__filter-btn ${activeFilter === 'professional' ? 'projects__filter-btn--active' : ''}`}
            onClick={() => setActiveFilter('professional')}
          >
            Professional ERP (3)
          </button>
          <button
            className={`projects__filter-btn ${activeFilter === 'personal' ? 'projects__filter-btn--active' : ''}`}
            onClick={() => setActiveFilter('personal')}
          >
            Personal Projects (1)
          </button>
        </motion.div>

        {/* Notice for Proprietary Projects */}
        <motion.div
          className="projects__notice"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <FaLock className="projects__notice-icon" />
          <span>Note: Professional project source code developed at Ramatek Solution is proprietary and client-confidential.</span>
        </motion.div>

        {/* Projects Grid */}
        <motion.div className="projects__grid" layout>
          <AnimatePresence>
            {filteredProjects.map((proj, idx) => (
              <motion.article
                key={proj.id}
                className="projects__card glass-card"
                layout
                initial={{ opacity: 0, y: 35, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -6, scale: 1.015 }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
              >
                {/* Card Top */}
                <div className="projects__card-top">
                  <span className="projects__category-badge">
                    <FaLayerGroup /> {proj.category}
                  </span>
                  {proj.isProprietary ? (
                    <span className="projects__confidential-badge">
                      <FaLock /> Confidential
                    </span>
                  ) : (
                    <div className="projects__links">
                      {proj.githubUrl && (
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="projects__icon-link"
                          aria-label="GitHub Repository"
                        >
                          <FaGithub />
                        </a>
                      )}
                      {proj.liveUrl && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="projects__icon-link"
                          aria-label="Live Demo"
                        >
                          <FaExternalLinkAlt />
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {/* Title */}
                <h3 className="projects__title">{proj.title}</h3>

                {/* Bullets */}
                <ul className="projects__bullets">
                  {proj.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>

                {/* Tech Stack Footer */}
                <div className="projects__footer">
                  <div className="projects__tags">
                    {proj.stack.map((tech) => (
                      <span key={tech} className="tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
