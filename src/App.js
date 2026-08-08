import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import ContinuousLearning from './components/ContinuousLearning';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 2500);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  /* Sync Theme with HTML data-theme attribute & localStorage */
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    triggerToast(`Switched to ${nextTheme === 'light' ? 'Light (#F8FAFC)' : 'Dark'} mode`);
  };

  /* Mouse spotlight tracking for bento & glass cards */
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll('.glass-card, .bento-card');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={`app ${isLoaded ? 'app--loaded' : ''}`}>
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <main>
        <Hero onToast={triggerToast} />
        <About onToast={triggerToast} />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <ContinuousLearning />
        <Contact onToast={triggerToast} />
      </main>
      <Footer />

      {/* Dynamic Toast Notification */}
      {toastMessage && (
        <div className="toast-notification animate-fade-up">
          <span className="toast-dot"></span>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

export default App;
