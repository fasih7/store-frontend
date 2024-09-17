import React from 'react';
import { Button } from 'react-bootstrap';
import '../styles/Hero.css'; // Custom CSS for hero styling

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to MyStore</h1>
        <p className="hero-subtitle">Discover the best products at unbeatable prices</p>
        <div className="hero-buttons">
          <Button variant="primary" className="me-3">Shop Now</Button>
          <Button variant="outline-light">Learn More</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
