import React, { useState } from 'react';
import './Skills.css';

/* Skills grouped by category — sourced directly from resume */
const SKILL_CATEGORIES = [
  {
    id: 'languages',
    label: 'Languages & Databases',
    icon: '🗄️',
    skills: [
      { name: 'SQL',        level: 85, note: 'Primary tool — stored procedures, query optimization' },
      { name: 'Python',     level: 60, note: 'Data analysis with NumPy & Pandas' },
      { name: 'JavaScript', level: 55, note: 'Frontend scripting and Angular apps' },
      { name: 'HTML / CSS', level: 65, note: 'Markup and basic styling' },
    ],
  },
  {
    id: 'frameworks',
    label: 'Frameworks & Platforms',
    icon: '⚙️',
    skills: [
      { name: 'Angular',     level: 50, note: 'Frontend development in ERP context' },
      { name: 'Jupyter Lab', level: 55, note: 'Python data analysis notebooks' },
      { name: 'Swagger',     level: 45, note: 'REST API testing and documentation' },
      { name: 'ASP.NET',     level: 40, note: 'Exposure through ERP solutions' },
    ],
  },
  {
    id: 'reporting',
    label: 'Reporting & Analytics',
    icon: '📊',
    skills: [
      { name: 'Power BI',              level: 65, note: 'Business intelligence dashboards' },
      { name: 'SAP Crystal Reports',   level: 70, note: 'Professional client-facing reports' },
      { name: 'RDLC',                  level: 65, note: 'Report Designer for .NET apps' },
      { name: 'Microsoft Excel',       level: 75, note: 'Advanced formulas & data analysis' },
    ],
  },
  {
    id: 'specializations',
    label: 'Specializations',
    icon: '🎯',
    skills: [
      { name: 'ERP Customization',      level: 80, note: 'Textile & business management sectors' },
      { name: 'CRM Systems',            level: 70, note: 'Client workflow management' },
      { name: 'Dashboard Development',  level: 70, note: 'Custom visual dashboards for clients' },
      { name: 'SQL Stored Procedures',  level: 80, note: 'Performance-focused query optimization' },
      { name: 'Code Optimization',      level: 65, note: 'Module enhancement across deployments' },
    ],
  },
];

/* Level label helper */
function levelLabel(level) {
  if (level >= 80) return 'Proficient';
  if (level >= 60) return 'Working Knowledge';
  if (level >= 40) return 'Familiar';
  return 'Beginner';
}

function Skills() {
  const [activeTab, setActiveTab] = useState('languages');

  const activeCategory = SKILL_CATEGORIES.find((c) => c.id === activeTab);

  return (
    <section id="skills" className="skills">
      <div className="container">
        <span className="section-label">// what I work with</span>
        <h2 className="section-title">Technical <span>Skills</span></h2>
        <div className="section-divider" />

        {/* Tab navigation */}
        <div className="skills__tabs" role="tablist">
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeTab === cat.id}
              id={`tab-${cat.id}`}
              className={`skills__tab ${activeTab === cat.id ? 'skills__tab--active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skill bars */}
        <div
          className="skills__panel"
          role="tabpanel"
          aria-labelledby={`tab-${activeTab}`}
          key={activeTab}
        >
          {activeCategory.skills.map((skill) => (
            <div key={skill.name} className="skill-item">
              <div className="skill-item__header">
                <span className="skill-item__name">{skill.name}</span>
                <div className="skill-item__right">
                  <span className="skill-item__label">{levelLabel(skill.level)}</span>
                  <span className="skill-item__pct">{skill.level}%</span>
                </div>
              </div>
              <div className="skill-item__bar-bg" role="progressbar" aria-valuenow={skill.level} aria-valuemin="0" aria-valuemax="100" aria-label={`${skill.name} proficiency: ${skill.level}%`}>
                <div
                  className="skill-item__bar-fill"
                  style={{ '--width': `${skill.level}%` }}
                />
              </div>
              <p className="skill-item__note">{skill.note}</p>
            </div>
          ))}
        </div>

        {/* All skill tags overview */}
        <div className="skills__tag-cloud">
          <p className="skills__tag-cloud-label">All Technologies</p>
          <div className="skills__tags">
            {SKILL_CATEGORIES.flatMap((cat) => cat.skills).map((skill) => (
              <span key={skill.name} className="tag">{skill.name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
