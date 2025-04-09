import React from 'react';
import './ImageWithThinText.css';
import imageUrl from '../Assets/FirstImg.jpeg'; // Asset path.

function ImageWithThinText({ imageAlt }) {
  return (
    <div className="full-width-container">
      <img src={imageUrl} alt={imageAlt} className="image" />
      <div className="overlay-dark"></div>
      <div className="text-overlay">
        <section className="hero">
          <div className="hero-content">
            <h1>
              ShinePoint Health <br />
              <span className="highlight-text">Health and Wellness</span> <br /> Platform
            </h1>
            <p>
              Elevate your health and wellness with personalized and tailored resources and professional support.
            </p>
            <button className="button">GET THE APP</button>
          </div>
        </section>
        <section className="stats">
          <div className="stat-item">
            <span className="stat-number">05+</span><br />
            <span className="stat-label">Years of Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">1000+</span><br />
            <span className="stat-label">Members Joined</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">1000+</span><br />
            <span className="stat-label">Happy Members</span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ImageWithThinText;
