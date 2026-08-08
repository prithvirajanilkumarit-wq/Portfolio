import React from 'react';
import { motion } from 'framer-motion';
import { FaChartPie, FaBrain, FaChartLine, FaCheckSquare } from 'react-icons/fa';
import './ContinuousLearning.css';

const CURRENTLY_STUDYING = [
  { title: 'Power BI (DAX, Data Modelling, RLS)', icon: FaChartPie, status: 'In Progress' },
  { title: 'Power Query & ETL Concepts', icon: FaChartLine, status: 'In Progress' },
  { title: 'Statistics for Data Analysis', icon: FaBrain, status: 'In Progress' },
  { title: 'Python for Data Analytics', icon: FaCodeIcon, status: 'In Progress' }
];

function FaCodeIcon(props) {
  return <span style={{ fontWeight: 'bold' }} {...props}>🐍</span>;
}

const FOCUS_AREAS = [
  'Business Intelligence Reporting',
  'MIS Dashboard Development',
  'Data Visualisation',
  'Analytical Reporting'
];

function ContinuousLearning() {
  return (
    <section id="continuous-learning" className="continuous-learning">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">{`// Skill Enhancement`}</span>
          <h2 className="section-title">Continuous <span>Learning</span></h2>
          <p className="section-subtitle">
            Advanced analytics, business intelligence tools, and focus areas I am actively studying as documented in my resume.
          </p>
        </motion.div>

        <div className="learning__grid">
          {/* Currently Studying */}
          <motion.div
            className="learning__card glass-card"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            whileHover={{ y: -5, scale: 1.015 }}
            transition={{ duration: 0.55 }}
          >
            <h3 className="learning__card-title">
              <span className="learning__title-icon">📚</span> Currently Studying
            </h3>
            <div className="learning__items">
              {CURRENTLY_STUDYING.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    className="learning__item"
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.1 + i * 0.08 }}
                  >
                    <div className="learning__item-icon">
                      <Icon />
                    </div>
                    <div className="learning__item-text">
                      <p className="learning__item-title">{item.title}</p>
                      <span className="learning__item-badge">{item.status}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Focus Areas */}
          <motion.div
            className="learning__card glass-card"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            whileHover={{ y: -5, scale: 1.015 }}
            transition={{ duration: 0.55 }}
          >
            <h3 className="learning__card-title">
              <span className="learning__title-icon">🎯</span> Core Focus Areas
            </h3>
            <div className="learning__focus-list">
              {FOCUS_AREAS.map((area, i) => (
                <motion.div
                  key={area}
                  className="learning__focus-item"
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.1 + i * 0.08 }}
                >
                  <FaCheckSquare className="learning__focus-icon" />
                  <span>{area}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContinuousLearning;
