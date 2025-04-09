import React from 'react';
import './OurServicesSection.css'; // Import your CSS file
import coachingImage from '../Assets/Service1.jpeg'; // Import your coaching image
import evaluationImage from '../Assets/Service2.jpeg'; // Import your evaluation image
import developmentImage from '../Assets/Service3.jpeg'; // Import your development image

function OurServicesSection() {
  return (
    <section className="our-services">
      <div className="our-services-content">
        <h2 className="section-title">OUR <span>SERVICES</span> </h2>
        <p className="section-description">
          Delivered by a Highly Trained Health Professional
        </p>

        <div className="services-grid">
          <div className="service-item">
            <img src={coachingImage} alt="Coaching" className="service-image" />
            <h3 className="service-title">COACHING</h3>
            <p className="service-text">
              Dedicated one-on-one Support <br />
              Personalized Program <br />
              Science-based Strategies
            </p>
            <button className="learn-more-button">Learn More &gt;</button>
          </div>

          <div className="service-item">
            <img src={evaluationImage} alt="Evaluation" className="service-image" />
            <h3 className="service-title">EVALUATION</h3>
            <p className="service-text">
              Nutritional Guidance <br />
              Wellness Assessment <br />
              Health Tracking
            </p>
            <button className="learn-more-button">Learn More &gt;</button>
          </div>

          <div className="service-item">
            <img src={developmentImage} alt="Development" className="service-image" />
            <h3 className="service-title">DEVELOPMENT</h3>
            <p className="service-text">
              Build Habits <br />
              Set Goals <br />
              Achieve Lasting Results
            </p>
            <button className="learn-more-button">Learn More &gt;</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurServicesSection;