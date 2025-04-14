import React from 'react';
import './AboutUS.css';
import imgurl from '../Assets/Lady.jpeg'
function AboutUs() {
  return (
    <section className="about-us-container">
      <div className="about-us-content">
        <div className="about-us-image">
          <img src={imgurl} alt="Lady eating healthy meal" />
        </div>
        <div className="about-us-text">
          <h2 className="about-us-heading">About Us</h2>
          <h1 className="about-us-title">
            Welcome to <span>ShinePoint Health</span>
          </h1>
          <p className="about-us-description">
            ShinePoint Health is designed to empower individuals to take control of their wellness journey. By offering tailored resources, ongoing support, and fostering a culture of sustainable behavior change, the program aims to help each participant achieve lasting positive changes that enhance their lives for years to come.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;