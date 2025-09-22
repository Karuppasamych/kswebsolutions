import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1>About KS Business Solutions</h1>
          <p>Empowering businesses through innovative digital solutions</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                KS Business Solutions was founded with a simple mission: to help businesses thrive in the digital age. 
                We specialize in creating custom websites and mobile applications using cutting-edge technologies like React.
              </p>
              <p>
                Our team of experienced developers and designers work closely with clients to understand their unique 
                needs and deliver solutions that not only meet but exceed expectations.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat-card">
                <h3>50+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-card">
                <h3>3+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-card">
                <h3>100%</h3>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Quality First</h3>
              <p>We never compromise on quality and always deliver exceptional results.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Client Partnership</h3>
              <p>We build long-term relationships with our clients based on trust and transparency.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🚀</div>
              <h3>Innovation</h3>
              <p>We stay ahead of technology trends to provide cutting-edge solutions.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⏰</div>
              <h3>Timely Delivery</h3>
              <p>We respect deadlines and deliver projects on time, every time.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2>Our Expertise</h2>
          <div className="expertise-grid">
            <div className="expertise-item">
              <h4>Frontend Development</h4>
              <p>React.js, JavaScript, HTML5, CSS3</p>
            </div>
            <div className="expertise-item">
              <h4>Backend Development</h4>
              <p>Node.js, Express, APIs, Databases</p>
            </div>
            <div className="expertise-item">
              <h4>Mobile Development</h4>
              <p>React Native, Cross-platform Apps</p>
            </div>
            <div className="expertise-item">
              <h4>Design & UX</h4>
              <p>UI/UX Design, Responsive Design</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;