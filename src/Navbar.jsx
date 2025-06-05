import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMenuOpen && !e.target.closest('.nav-links') && 
          !e.target.closest('.burger-menu')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Close menu when screen resizes above 1024px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img 
            src={logo}
            alt="Ringa Film Productions Logo" 
          /> 
        </Link>
      </div>

      <button 
        className="burger-menu" 
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
      >
        <span className="burger-line"></span>
        <span className="burger-line"></span>
        <span className="burger-line"></span>
      </button>

      <div className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
        <Link to="/" onClick={toggleMenu}>HOME</Link>
        <Link to="/services" onClick={toggleMenu}>SERVICES</Link>
        <Link to="/about" onClick={toggleMenu}>ABOUT</Link>
        <Link to="/contact" onClick={toggleMenu}>CONTACT</Link>
      </div>
    </nav>
  );
};

export default Navbar;
