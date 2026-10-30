// src/pages/HerbsPage.jsx
import { Link } from 'react-router-dom';
import './CategoryPage.css';

function HerbsPage() {
  const scrollToTop = () => window.scrollTo(0, 0);

  const herbs = [
    { id: 'h1', name: 'Aloe Vera', desc: 'Fresh Aloe Vera leaves and extracts for wellness and cosmetics.', img: '/aloe-vera.jpg' },
    { id: 'h2', name: 'Thulasi (Holy Basil)', desc: 'Dried and fresh Thulasi leaves with high aromatic properties.', img: '/thulasi.jpg' },
    { id: 'h3', name: 'Karisalankanni', desc: 'Traditional medicinal herb known for hair and liver health.', img: '/karisalankanni.jpg' },
    { id: 'h4', name: 'Neem', desc: 'Premium Neem leaves, seeds, and powder for agricultural and medicinal use.', img: '/neem.jpg' },
  ];

  return (
    <div className="category-page-wrapper">
      <section className="category-hero" style={{ backgroundImage: `linear-gradient(rgba(10, 30, 15, 0.7), rgba(10, 30, 15, 0.7)), url('/herbs-and-medicinal-plants.jpg')` }}>
        <h1>Herbs & Medicinal Plants</h1>
        <p>Traditional Indian wellness plants carefully cultivated and processed for pharmaceutical and cosmetic buyers.</p>
      </section>

      <section className="specific-products-section">
        <div className="specific-products-grid">
          {herbs.map((herb) => (
            <div key={herb.id} className="specific-card">
              <div className="s-image-container"><img src={herb.img} alt={herb.name} /></div>
              <div className="s-info">
                <h3>{herb.name}</h3>
                <p>{herb.desc}</p>
                <Link to="/request-specification" className="btn-outline-green" onClick={scrollToTop}>Request Specifications</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HerbsPage;