import React from 'react';
import './StartSessions.css'; // Link to your CSS file
import Yougagirl from '../Assets/Youga-girl.png'; // Ensure the image path is correct

function StartSessions() {
  return (
    <div className="start-sessions-container">
      <div className="image-container">
        <img src={Yougagirl} alt="Woman meditating" /> {/* Path to your image */}
      </div>
      <div className="content-container">
        <h2 className="title">LET'S START YOUR <span className="highlight">SESSIONS NOW</span></h2>
        <p className="description">Please select a time and date for a consultation, our team will reach out to you at the selected time.</p>
        <form className="form">
          <div className="input-group">
            <input type="text" placeholder="Enter Your Name..." />
            <input type="tel" placeholder="Numbers Phone..." />
          </div>
          <input type="email" placeholder="Your Email Address..." />
          <button type="submit" className="button">LET'S JOIN NOW</button>
        </form>
      </div>
    </div>
  );
}

export default StartSessions;
