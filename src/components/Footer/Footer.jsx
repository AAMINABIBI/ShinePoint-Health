import React from 'react';
import './Footer.css'; // Create this CSS file
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section about">
          <p>XLEVEL was founded by fitness, health and technology experts committed to making fitness and health more fit for your place and pace.</p>
          <p className="copyright-top">Copyright Xlevel Fitness + Health</p>
        </div>
        <div className="footer-section performance">
          <h3>Performance</h3>
          <ul>
            <li><a href="#">Evaluation</a></li>
            <li><a href="#">Location</a></li>
            <li><a href="#">Strength</a></li>
            <li><a href="#">Intensity</a></li>
            <li><a href="#">Recovery</a></li>
          </ul>
        </div>
        <div className="footer-section service">
          <h3>Service</h3>
          <ul>
            <li><a href="#">Plan</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Consultation</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section newsletter">
          <h3>Your Email</h3>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter Your Email" />
            <button type="submit">Subscribe</button>
          </div>
          <div className="social-icons">
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copyright-bottom">Copyright LevelX</p>
        <p>Los Angeles, CA</p>
        <p><a href="mailto:Info@XLevelFitness.com">Info@XLevelFitness.com</a></p>
        <p>+1 (323) 833-4336</p>
      </div>
    </footer>
  );
}

export default Footer;