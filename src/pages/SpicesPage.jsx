// src/pages/SpicesPage.jsx
import { Link } from 'react-router-dom';
import './CategoryPage.css';

function SpicesPage() {
  const scrollToTop = () => window.scrollTo(0, 0);

  const spices = [
    { id: 's1', name: 'Black Pepper', desc: 'High-grade whole black peppercorns (500 GL / 550 GL).', img: '/black-pepper.jpg' },
    { id: 's2', name: 'Green Cardamom', desc: 'Aromatic whole green cardamom pods (7mm / 8mm).', img: '/green-cardamom.jpg' },
    { id: 's3', name: 'Cloves', desc: 'Premium quality, hand-picked dried cloves.', img: '/cloves.jpg' },
    { id: 's4', name: 'Turmeric Fingers', desc: 'Rich, vibrant, naturally dried Salem turmeric.', img: '/turmeric-fingers.jpg' },
  ];

  return (
    <div className="category-page-wrapper">
      <section className="category-hero" style={{ backgroundImage: `linear-gradient(rgba(10, 30, 15, 0.7), rgba(10, 30, 15, 0.7)), url('/premium-spices.jpg')` }}>
        <h1>Premium Spices</h1>
        <p>Explore our authentic, export-grade Indian spices. Harvested for high essential oil content and bold flavor.</p>
      </section>

      <section className="specific-products-section">
        <div className="specific-products-grid">
          {spices.map((spice) => (
            <div key={spice.id} className="specific-card">
              <div className="s-image-container"><img src={spice.img} alt={spice.name} /></div>
              <div className="s-info">
                <h3>{spice.name}</h3>
                <p>{spice.desc}</p>
                <Link to="/request-specification" className="btn-outline-green" onClick={scrollToTop}>Request Specifications</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default SpicesPage;