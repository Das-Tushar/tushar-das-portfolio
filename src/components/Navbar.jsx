import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar-container">
      <nav className="navbar">
        <a href="#" className="nav-logo-text" aria-label="Home">
          Portfolio
        </a>

        <div className="nav-links">
          <a href="#home" className="nav-link active">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
