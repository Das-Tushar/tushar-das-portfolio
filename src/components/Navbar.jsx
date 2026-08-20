import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar-container">
      <nav className="navbar">
        <a href="#" className="nav-logo" aria-label="Home">
          <svg
            className="logo-icon"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Stylized geometric monogram matching sample */}
            <path
              d="M10 8H40V14H28V42H22V14H10V8Z"
              fill="currentColor"
            />
            <path
              d="M26 22H38V28H32V36H38V42H26V22Z"
              fill="currentColor"
            />
          </svg>
        </a>

        <div className="nav-links">
          <a href="#about" className="nav-link">About me</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#portfolio" className="nav-link">Portfolio</a>
          <a href="#contact" className="contact-btn">CONTACT ME</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
