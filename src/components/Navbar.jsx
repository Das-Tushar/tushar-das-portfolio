import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <span className="logo-text">TD</span>
      </div>
      <div className="nav-links">
        <a href="#about">About me</a>
        <a href="#skills">Skills</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact" className="contact-btn">CONTACT ME</a>
      </div>
    </nav>
  );
};

export default Navbar;
