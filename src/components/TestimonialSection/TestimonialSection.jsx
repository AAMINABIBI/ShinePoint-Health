import React from 'react';
import './TestimonialSection.css'; // Import your CSS file
import Customers from '../Assets/Customers.jpeg'; // Replace with actual paths
import user from '../Assets/user.jpeg'; // Replace with actual path

function TestimonialSection() {
  return (
    <div className="testimonial-section">
      <div className="section-content">
        <div className="left-content">
          <h2 className="left-title">What Our Member <br /> Say About Us?</h2>
          <div className="customer-images">
            <img src={Customers} alt="Customers" className="customer-image" />
          </div>
          <p className="customer-count">10K+ Satisfied Customer</p>
        </div>
        <div className="right-content">
          <h1 className="main-title">WHAT OUR CLIENT <br /> SAY ABOUT US</h1>
          <div className="testimonial-card">
            <p className="testimonial-quote">"Join this fitness member, the best choice that I've. They're very professional and give you suggestion about what food and nutrition that you can eat"</p>
            <div className="author-info">
              <img src={user} alt="Jonathan Edward" className="author-image" />
              <div className="author-details">
                <p className="author-name">Jonathan Edward</p>
                <p className="author-title">Office Worker</p>
              </div>
            </div>
            <div className="rating">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
          </div>
          <div className="navigation">
            <div className="dots">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <button className="next-button">→</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;