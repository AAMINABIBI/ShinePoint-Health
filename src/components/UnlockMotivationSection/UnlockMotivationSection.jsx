import React from 'react';
import './UnlockMotivationSection.css';
import phonemockupleftAdjusted from '../Assets/phone-mockup-left.jpeg'; // Replace with the adjusted image
import phonemockupright from '../Assets/phone-mockup-right.jpeg';

function UnlockMotivationSection() {
  return (
    <section className="unlock-motivation">
      <div className="unlock-motivation-content">
        <h2 className="unlock-title">
          UNLOCK <span>MOTIVATION</span>. <br />
          UNLOCK <span>HEALTH</span>. <br />
          UNLOCK <span>WELLNESS</span>.
        </h2>
        <div className="combined-row">
          <div className="phone-mockups">
            <div className="phone-left">
              <img src={phonemockupleftAdjusted} alt="Phone Mockup Left Adjusted" />
            </div>
            <div className="phone-right">
              <img src={phonemockupright} alt="Phone Mockup Right" />
            </div>
          </div>
          <div className="app-features">
            <ul>
              <li>24/7 Support from our trainers</li>
              <li>Professional Approach</li>
              <li>Scientific Proven Workout Plans</li>
              <li>Personalised Workout Plans</li>
              <li>IOS, Android App and Web Portal</li>
              <li>Exercises Video Add ons</li>
            </ul>
            <button className="try-now-button">TRY NOW</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UnlockMotivationSection;