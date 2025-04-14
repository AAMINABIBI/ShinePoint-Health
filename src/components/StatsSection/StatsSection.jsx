import React from 'react';
import './StatsSection.css';
import imgUrl from '../Assets/CookingLady.jpeg'
function StatsSection() {
  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stats-banner">
          <div className="stat-item">
            <h3 className="stat-number">2X</h3>
            <p className="stat-label">Health Engagement</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">790+</h3>
            <p className="stat-label">Success Program</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">2558+</h3>
            <p className="stat-label">Happy Clients</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">830+</h3>
            <p className="stat-label">Clients Empowered</p>
          </div>
        </div>
        <div className="stats-image">
          <img src={imgUrl} alt="Person preparing healthy meal" />
        </div>
      </div>
    </section>
  );
}

export default StatsSection;