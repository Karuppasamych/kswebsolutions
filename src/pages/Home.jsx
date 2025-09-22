import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Transform Your Business with <span className="gradient-text">Digital Solutions</span></h1>
            <p>We create stunning websites and powerful mobile applications using cutting-edge React technology to help your business thrive in the digital world.</p>
            <div className="hero-buttons">
              <Link to="/services" className="btn btn-primary">Our Services</Link>
              <Link to="/contact" className="btn btn-outline">Get Started</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Why Choose KS Business Solutions?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Modern Technology</h3>
              <p>Built with React and latest web technologies for optimal performance and user experience.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Responsive Design</h3>
              <p>Your website will look perfect on all devices - desktop, tablet, and mobile.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Fast & Reliable</h3>
              <p>Optimized for speed and performance to keep your users engaged.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Custom Design</h3>
              <p>Unique designs tailored to your brand and business requirements.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-preview">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Web Development</h3>
              <p>Custom websites built with React, ensuring fast loading times and excellent user experience.</p>
            </div>
            <div className="service-card">
              <h3>Mobile Apps</h3>
              <p>Cross-platform mobile applications that work seamlessly on iOS and Android devices.</p>
            </div>
            <div className="service-card">
              <h3>E-commerce Solutions</h3>
              <p>Complete online stores with payment integration and inventory management.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;