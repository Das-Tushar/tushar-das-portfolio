import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const sections = ['about', 'skills', 'projects', 'certificates', 'contact'];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observers = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <header className="navbar-container">
      <nav className="navbar">
        <motion.a
          href="#home"
          className="nav-logo-text"
          aria-label="Home"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          Portfolio
        </motion.a>

        <div className="nav-links">
          {sections.map((id) => (
            <motion.a
              key={id}
              href={`#${id}`}
              className={`nav-link${activeSection === id ? ' active' : ''}`}
              whileHover={{ scale: 1.05, color: '#2dd4bf' }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </motion.a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
