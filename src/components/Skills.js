import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaDatabase,
  FaChartBar,
  FaCogs,
  FaCode,
  FaTools,
  FaBookReader
} from 'react-icons/fa';
import './Skills.css';

const SKILL_CATEGORIES = [
  {
    id: 'sql-db',
    label: 'SQL & Database',
    icon: FaDatabase,
    description: 'Core strength in Microsoft SQL Server, query optimization, and stored procedure architecture.',
    skills: [
      'Microsoft SQL Server',
      'T-SQL Development',
      'Stored Procedures',
      'CTEs & Views',
      'Subqueries',
      'CASE Expressions',
      'Temporary Tables',
      'UNION Operations',
      'User-Defined Functions',
      'Complex JOINs',
      'OPENJSON',
      'Query Optimisation',
      'SQL Debugging',
      'Database Troubleshooting'
    ]
  },
  {
    id: 'reporting',
    label: 'Reporting & Dashboards',
    icon: FaChartBar,
    description: 'Delivering operational MIS reports, ledger statements, and executive KPI summaries.',
    skills: [
      'Crystal Reports',
      'RDLC Reports',
      'KPI Reporting',
      'MIS Reporting',
      'Business Reporting',
      'Microsoft Excel',
      'Internal ERP Dashboard Creation'
    ]
  },
  {
    id: 'erp-domain',
    label: 'ERP & Business Domain',
    icon: FaCogs,
    description: 'Customising ERP/CRM modules for textile and business management enterprises.',
    skills: [
      'ERP Customisation',
      'CRM Workflows',
      'Sales Module',
      'Inventory Module',
      'Accounting Module',
      'Requirement Gathering',
      'Client Communication'
    ]
  },
  {
    id: 'programming',
    label: 'Programming & Web',
    icon: FaCode,
    description: 'Front-end web fundamentals and Python scripting for data handling.',
    skills: [
      'JavaScript (Basic)',
      'HTML5',
      'CSS3',
      'Python (Basic Scripting)',
      'Pandas (Basic)',
      'NumPy (Basic)'
    ]
  },
  {
    id: 'tools',
    label: 'Tools & Platforms',
    icon: FaTools,
    description: 'Development environments, API contract testing, and version control.',
    skills: [
      'Git',
      'GitHub',
      'VS Code',
      'Swagger API',
      'Microsoft Excel'
    ]
  },
  {
    id: 'learning',
    label: 'Currently Learning',
    icon: FaBookReader,
    description: 'Actively acquiring advanced business intelligence and analytics capabilities.',
    skills: [
      'Power BI (DAX)',
      'Data Modelling',
      'Row-Level Security (RLS)',
      'Power Query',
      'Statistics for Data Analysis',
      'Python for Data Analytics'
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04
    }
  }
};

const badgeVariants = {
  hidden: { opacity: 0, y: 12, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3 } }
};

function Skills() {
  const [activeCat, setActiveCat] = useState('sql-db');

  const activeData = SKILL_CATEGORIES.find((c) => c.id === activeCat);

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{`// Technical Stack`}</span>
          <h2 className="section-title">Core <span>Competencies</span></h2>
          <p className="section-subtitle">
            Technical skills, database capabilities, and domain knowledge strictly sourced from my resume.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="skills__tabs">
          {SKILL_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCat === cat.id;
            return (
              <button
                key={cat.id}
                className={`skills__tab-btn ${isActive ? 'skills__tab-btn--active' : ''}`}
                onClick={() => setActiveCat(cat.id)}
              >
                <Icon className="skills__tab-icon" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Category Panel */}
        <motion.div
          key={activeCat}
          className="skills__panel glass-card"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <div className="skills__panel-header">
            <h3>{activeData.label}</h3>
            <p>{activeData.description}</p>
          </div>

          <motion.div
            className="skills__grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {activeData.skills.map((skill) => (
              <motion.div
                key={skill}
                className="skills__badge-card"
                variants={badgeVariants}
                whileHover={{ scale: 1.03, y: -3 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                <span className="skills__badge-dot" />
                <span className="skills__badge-text">{skill}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
