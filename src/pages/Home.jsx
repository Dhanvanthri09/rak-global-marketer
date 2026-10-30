// src/pages/Home.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaLeaf, FaShippingFast, FaHandshake } from 'react-icons/fa';
import './Home.css';

const bgImages = [
  {
    path: '/slider1.jpg',
  },
  {
    path: '/slider2.jpg',
  },
  {
    path: '/slider3.jpg',
  },
  {
    path: '/slider4.jpg',
  },
  {
    path: '/slider5.jpg',
  }
];

function Home() {
  const [currentBg, setCurrentBg] = useState(0);

  // Smooth rotation every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 4700);
    return () => clearInterval(interval);
  }, []);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
};

  return (
    <div className="home-wrapper">
      {/* 1. HERO CAROUSEL SECTION */}
      <section className="hero-carousel-section">
        {bgImages.map((item, index) => (
          <div 
            key={index} 
            className={`carousel-slide ${index === currentBg ? 'active' : ''}`}
            style={{ backgroundImage: `url(${item.path})` }}
          ></div>
        ))}
        
        <div className="hero-overlay">
          <div className="hero-content">
            {/* Smooth-fading content area */}
            <h1 className="hero-title">{bgImages[currentBg].title}</h1>
            <p className="hero-subtitle">{bgImages[currentBg].desc}</p>
            
            <div className="hero-buttons">
  <Link to="/products" className="btn-outline" onClick={scrollToTop}>
    Explore Our Range
  </Link>
</div>
            
            {/* Repositioned Navigation Dots */}
            <div className="carousel-dots">
              {bgImages.map((_, index) => (
                <span 
                  key={index} 
                  className={`dot ${index === currentBg ? 'active' : ''}`}
                  onClick={() => setCurrentBg(index)}
                  title={`View Slide ${index + 1}`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. SOURCING STANDARD SECTION */}
      <section className="sourcing-standard">
        <div className="standard-container">
          <h2>The RAK Sourcing Standard</h2>
          <div className="features-grid">
            <div className="feature-card">
              <FaLeaf className="feature-icon" />
              <h3>Direct from Farms</h3>
              <p>Authentic, clean-label agricultural produce.</p>
            </div>
            <div className="feature-card">
              <FaHandshake className="feature-icon" />
              <h3>B2B Reliability</h3>
              <p>Seamless and consistent sourcing for global distributors.</p>
            </div>
            <div className="feature-card">
              <FaShippingFast className="feature-icon" />
              <h3>Export Ready</h3>
              <p>Strictly processed to meet international standards.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;