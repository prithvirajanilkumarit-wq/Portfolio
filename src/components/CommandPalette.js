import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { FaSearch, FaTimes, FaDatabase, FaLayerGroup, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa';
import './CommandPalette.css';

const SEARCH_ITEMS = [
  { type: 'Section', name: 'Home / Hero', target: 'hero' },
  { type: 'Section', name: 'About Me', target: 'about' },
  { type: 'Section', name: 'Work Experience', target: 'experience' },
  { type: 'Section', name: 'Key Projects', target: 'projects' },
  { type: 'Section', name: 'Technical Skills', target: 'skills' },
  { type: 'Section', name: 'Education', target: 'education' },
  { type: 'Section', name: 'Continuous Learning', target: 'continuous-learning' },
  { type: 'Section', name: 'Contact Me', target: 'contact' },
  { type: 'Skill', name: 'Microsoft SQL Server & T-SQL', target: 'skills' },
  { type: 'Skill', name: 'Stored Procedures & CTEs', target: 'skills' },
  { type: 'Skill', name: 'Crystal Reports & RDLC Layouts', target: 'skills' },
  { type: 'Skill', name: 'Power BI (DAX, Data Modelling, RLS)', target: 'continuous-learning' },
  { type: 'Skill', name: 'Python for Data Analytics (Pandas, NumPy)', target: 'skills' },
  { type: 'Project', name: 'Enterprise ERP Reporting Suite', target: 'projects' },
  { type: 'Project', name: 'ERP Implementation & Deployment Support', target: 'projects' },
  { type: 'Project', name: 'SQL Reporting & Business Reporting', target: 'projects' },
  { type: 'Project', name: 'Personal Portfolio Website', target: 'projects' },
  { type: 'Contact', name: 'Email: prithviraj.anilkumar.it@gmail.com', target: 'contact' },
  { type: 'Contact', name: 'Phone: +91-7096512260', target: 'contact' },
];

function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filtered = SEARCH_ITEMS.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase()) ||
    item.type.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="command-palette__overlay" onClick={onClose}>
      <div className="command-palette__dialog" onClick={(e) => e.stopPropagation()}>
        {/* Search input header */}
        <div className="command-palette__input-wrap">
          <FaSearch className="command-palette__search-icon" />
          <input
            ref={inputRef}
            type="text"
            className="command-palette__input"
            placeholder="Type a command or search sections, skills, projects..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="command-palette__close-btn" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        {/* Results list */}
        <div className="command-palette__results">
          {filtered.length === 0 ? (
            <div className="command-palette__empty">
              No results found for "{query}"
            </div>
          ) : (
            filtered.map((item, i) => (
              <Link
                key={i}
                to={item.target}
                smooth
                duration={500}
                offset={-90}
                className="command-palette__item"
                onClick={onClose}
              >
                <div className="command-palette__item-left">
                  <span className="command-palette__item-icon">
                    {item.type === 'Section' && <FaExternalLinkAlt />}
                    {item.type === 'Skill' && <FaDatabase />}
                    {item.type === 'Project' && <FaLayerGroup />}
                    {item.type === 'Contact' && <FaEnvelope />}
                  </span>
                  <span className="command-palette__item-name">{item.name}</span>
                </div>
                <span className="command-palette__item-badge">{item.type}</span>
              </Link>
            ))
          )}
        </div>

        <div className="command-palette__footer">
          <span>Press <kbd>ESC</kbd> to close</span>
          <span>Prithviraj Anilkumar Portfolio</span>
        </div>
      </div>
    </div>
  );
}

export default CommandPalette;
