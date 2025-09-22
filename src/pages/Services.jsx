import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites built with React for optimal performance and user experience.",
      features: ["React.js Development", "Responsive Design", "SEO Optimization", "Performance Optimization"],
      icon: "💻"
    },
    {
      title: "Mobile App Development",
      description: "Cross-platform mobile applications for iOS and Android using React Native.",
      features: ["React Native", "Cross-platform", "Native Performance", "App Store Deployment"],
      icon: "📱"
    },
    {
      title: "E-commerce Solutions",
      description: "Complete online stores with payment integration and inventory management.",
      features: ["Shopping Cart", "Payment Gateway", "Inventory Management", "Order Tracking"],
      icon: "🛒"
    },
    {
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces that enhance user experience.",
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
      icon: "🎨"
    },
    {
      title: "Web Applications",
      description: "Complex web applications with advanced functionality and integrations.",
      features: ["Custom Features", "API Integration", "Database Design", "Cloud Deployment"],
      icon: "⚙️"
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing support and maintenance to keep your digital assets running smoothly.",
      features: ["24/7 Support", "Regular Updates", "Security Monitoring", "Performance Optimization"],
      icon: "🔧"
    }
  ];

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive digital solutions to transform your business</p>
        </div>
      </section>

      <section className="services-content">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-detail-card">
                <div className="service-header">
                  <span className="service-icon">{service.icon}</span>
                  <h3>{service.title}</h3>
                </div>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Let's discuss your project and bring your ideas to life</p>
          <a href="/contact" className="btn btn-primary">Contact Us Today</a>
        </div>
      </section>
    </div>
  );
};

export default Services;