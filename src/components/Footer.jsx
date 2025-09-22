import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>KS Business Solutions</h3>
            <p className="footer-tagline">Crafting Digital Excellence</p>
            <p>Creating digital experiences that drive business growth through innovative web and mobile solutions.</p>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>React Development</li>
              <li>UI/UX Design</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <p>📧 info@ksbusinesssolutions.com</p>
            <p>📞 +91 7305135893</p>
            <p>📍 Krishna Street, Puliangudi, Tenkasi</p>
            <p> &nbsp; &nbsp; TamilNadu, India - 627855</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 KS Business Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;