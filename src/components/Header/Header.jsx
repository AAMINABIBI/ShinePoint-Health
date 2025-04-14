import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.jpeg';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="nav-container">
        <img src={logo} alt="Shinepoint Health Logo" className="logo" />
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <button className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <button className="close-button" onClick={toggleMenu}>
            ✕
          </button>
          <div className="mobile-nav-links">
            <Link to="/" onClick={toggleMenu}>Home</Link>
            <Link to="/services" onClick={toggleMenu}>Services</Link>
            <Link to="/about" onClick={toggleMenu}>About</Link>
            <Link to="/contact" onClick={toggleMenu}>Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;