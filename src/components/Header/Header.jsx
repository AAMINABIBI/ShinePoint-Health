// src/components/Header.js
import React from 'react';
import logo from '../Assets/logo.jpeg';
import './Header.css'; // Import the CSS file

function Header() {
  return (
    <header>
      <nav>
        <img src={logo} alt="Shinepoint Health Logo" className="logo" />
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/">Services</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
        <button className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </nav>
    </header>
  );
}

export default Header;