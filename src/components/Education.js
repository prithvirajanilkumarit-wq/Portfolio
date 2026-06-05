import React from 'react';
import './Education.css';

const EDUCATION = [
  {
    id: 'mca',
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Lovely Professional University (LPU)',
    period: '2024 – 2026',
    gpa: '7.50 (Current)',
    status: 'In Progress',
    icon: '🎓',
    details: 'Pursuing a two-year postgraduate program in Computer Applications. Coursework covers advanced programming, database systems, software engineering, and data analytics.',
  },
  {
    id: 'bca',
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Bhagwan Mahavir University (BMU)',
    period: '2021 – 2024',
    gpa: '8.5',
    status: 'Completed',
    icon: '🏫',
    details: 'Three-year undergraduate program in Computer Applications. Gained foundational knowledge in programming, databases, web development, and data structures.',
  },
  {
    id: 'school',
    degree: 'Higher Secondary & High School',
    institution: 'Samithi English Medium School',
    period: '— ',
    gpa: null,
    status: 'Completed',
    icon: '🏫',
    details: 'Completed higher secondary schooling with a focus on Science and Mathematics.',
  },
];

function Education() {
  return (
    <section id="education" className="education">
      <div className="container">
        <span className="section-label">// my academic background</span>
        <h2 className="section-title">Education</h2>
        <div className="section-divider" />

        <div className="education__list">
          {EDUCATION.map((edu, idx) => (
            <article key={edu.id} className="edu-card card">
              <div className="edu-card__left">
                <span className="edu-card__icon" aria-hidden="true">{edu.icon}</span>
                {idx < EDUCATION.length - 1 && (
                  <div className="edu-card__line" aria-hidden="true" />
                )}
              </div>

              <div className="edu-card__body">
                <div className="edu-card__header">
                  <div>
                    <h3 className="edu-card__degree">{edu.degree}</h3>
                    <p className="edu-card__institution">{edu.institution}</p>
                  </div>
                  <div className="edu-card__meta">
                    <span className="edu-card__period">{edu.period}</span>
                    <span className={`edu-card__status edu-card__status--${edu.status === 'In Progress' ? 'active' : 'done'}`}>
                      {edu.status}
                    </span>
                  </div>
                </div>

                {edu.gpa && (
                  <div className="edu-card__gpa">
                    <span className="edu-card__gpa-label">GPA:</span>
                    <span className="edu-card__gpa-value">{edu.gpa}</span>
                  </div>
                )}

                <p className="edu-card__details">{edu.details}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
