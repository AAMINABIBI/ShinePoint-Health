import React from 'react';
import './LevelUpHealth.css';

function LevelUpHealth() {
  return (
    <div className="level-up-container">
      <div className="content-wrapper">
        <h1 className="title">
          LEVEL UP YOUR HEALTH <br /> WITH <span>SHINEPOINT</span>
        </h1>
        <div className="offer-cards">
          <div className="offer-card">
            <h2 className="level-title">LEVEL 1</h2>
            <p className="price price-dashed">$25</p>
            <p className="package">6 Week Package</p>
            <ul className="features">
              <li>Unlimited Gym Access</li>
              <li>12 - 18 Training Sessions</li>
              <li>Mobile App Access</li>
            </ul>
            <button className="register-button">Register Now</button>
          </div>

          <div className="offer-card best-offer">
            <div className="best-offer-label">Best Offer</div>
            <h2 className="level-title">LEVEL 2</h2>
            <p className="price price-dashed">$55</p>
            <p className="package">3 Month Package</p>
            <ul className="features">
              <li>2 XLEVEL Assessments</li>
              <li>24 - 36 Training Sessions</li>
              <li>2 Dietitian Consultations</li>
              <li>6 Group Classes</li>
              <li>Mobile App Access</li>
            </ul>
            <button className="register-button">Register Now</button>
          </div>

          <div className="offer-card">
            <h2 className="level-title">LEVEL 3</h2>
            <p className="price price-dashed">$75</p>
            <p className="package">6 Month Package</p>
            <ul className="features">
              <li>4 XLEVEL Assessments</li>
              <li>48 - 72 Training Sessions</li>
              <li>3 Dietitian Consultations</li>
              <li>Unlimited Group Classes</li>
              <li>Mobile App Access</li>
            </ul>
            <button className="register-button">Register Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LevelUpHealth;