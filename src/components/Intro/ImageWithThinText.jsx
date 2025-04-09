import React from 'react';
import './ImageWithThinText.css';

function ImageWithThinText({ imageUrl, imageAlt }) {
  return (
    <div className="image-container">
      <img src={imageUrl} alt={imageAlt} className="full-width-image" />
      <div className="text-overlay">
        <section className="hero">
          <div className="hero-content">
            <div className="hero-heading">
              <h1>
                ShinePoint Health <br />
                <span> Health and Wellness</span>
                <br /> Platform
              </h1>
            </div>
            <p className="hero-subtitle">
              Elevate your health and wellness with personalized and tailored
              resources and professional support.
            </p>
            <button className="app-button">GET THE APP</button>
          </div>
        </section>

        <section className="stats">
          <div className="stat-item">
            <span className="stat-number">05+</span>
            <span className="stat-label">Years of Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">1000+</span>
            <span className="stat-label">Members Join</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">1000+</span>
            <span className="stat-label">Happy Members</span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ImageWithThinText;