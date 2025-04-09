import React from 'react';
import './WhyChooseUs.css'; // Import your CSS

function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="why-choose-us-content">
        <h2 className="section-title">WHY <span>CHOOSE US</span> </h2>
        <p className="section-description">
          Make small manageable changes, reinforce positive behavior change,
          and celebrate milestones on your way to a healthier happier life.
        </p>

        <div className="features-grid">
          <div className="feature-item">
            <span className="feature-number">01</span>
            <h3 className="feature-title">PROFESSIONAL GUIDANCE</h3>
            <p className="feature-text">
              Receive professional support from a board certified health and
              wellness coach.
            </p>
          </div>

          <div className="feature-item">
            <span className="feature-number">02</span>
            <h3 className="feature-title">LASTING LIFESTYLE CHANGES</h3>
            <p className="feature-text">
              Discover lasting lifestyle changes that enhance your overall
              well-being.
            </p>
          </div>

          <div className="feature-item">
            <span className="feature-number">03</span>
            <h3 className="feature-title">CUSTOMIZED RESOURCES</h3>
            <p className="feature-text">
              Receive customized and personalized resources designed to
              foster healthy habits.
            </p>
          </div>

          <div className="feature-item">
            <span className="feature-number">04</span>
            <h3 className="feature-title">MONITORING FEATURES</h3>
            <p className="feature-text">
              Premium tracking tools that offer valuable insights to promote
              behavioral change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;