// src/pages/About.jsx
import { FaLeaf, FaGlobe, FaShieldAlt, FaHandshake } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './About.css';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
};

function About() {
  return (
    <div className="about-wrapper">
      {/* 1. Page Header */}
      <section className="about-hero">
        <div className="hero-text">
          <h1>Our Roots, Your Reach</h1>
          <p>Connecting the rich agricultural heritage of India with global markets through uncompromising quality and trust.</p>
        </div>
      </section>

      {/* 2. The Story / Who We Are (Split Layout) */}
      <section className="about-story">
        <div className="story-container">
          <div className="story-content">
            <h2>Who We Are</h2>
            <p>Located in the agricultural hub of Salem, Tamil Nadu, <strong>RAK GLOBAL MARKETER</strong> is a dedicated exporter of premium Indian agricultural products.</p>
            <p>We operate at the intersection of traditional farming and modern global trade. Our goal is not just to trade commodities, but to build lasting partnerships based on transparency, traceability, and mutual growth. From native growing regions to international ports, we ensure every product reflects the true taste of its origin.</p>
          </div>
          <div className="story-image">
            <img src="/story-image.jpg" alt="RAK Global Marketer Nature Logo" />
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="about-mission-vision">
        <div className="mv-container">
          <div className="mv-card dark-card">
            <h3>Our Mission</h3>
            <p>To connect local farmers and suppliers with international buyers by providing high-quality agricultural products with complete transparency and reliability. We process with care and share the rich stories behind every ingredient.</p>
          </div>
          <div className="mv-card light-card">
            <h3>Our Vision</h3>
            <p>To become a globally recognized and trusted partner in the agricultural export industry, setting a benchmark for quality, rooted in tradition, and known for our unwavering commitment to customer satisfaction.</p>
          </div>
        </div>
      </section>

      {/* 4. Core Values */}
      <section className="about-values">
        <div className="values-container">
          <h2>What We Stand For</h2>
          <p className="values-subtitle">At RAK Global Marketer, these principles drive every decision we make.</p>
          
          <div className="values-grid">
            <div className="value-item">
              <FaShieldAlt className="v-icon" />
              <h4>Uncompromising Quality</h4>
              <p>Rigorous checks ensure only the best reaches your port. No compromise. Ever.</p>
            </div>
            <div className="value-item">
              <FaLeaf className="v-icon" />
              <h4>Authentic Origin</h4>
              <p>100% traceable products sourced directly from trusted Indian farms.</p>
            </div>
            <div className="value-item">
              <FaHandshake className="v-icon" />
              <h4>Ethical Trade</h4>
              <p>Honest pricing, fair practices, and fully transparent communication.</p>
            </div>
            <div className="value-item">
              <FaGlobe className="v-icon" />
              <h4>Global Standards</h4>
              <p>Expertly processed and packaged to meet strict international import criteria.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bottom Call to Action */}
      <section className="about-cta">
        <h2>Ready to Partner with Purpose?</h2>
        <p>Join our network of global buyers sourcing premium Indian agriculture.</p>
        <Link to="/contact" onClick={scrollToTop} className="btn-solid-green">Contact Our Team</Link>
      </section>
    </div>
  );
}

export default About;