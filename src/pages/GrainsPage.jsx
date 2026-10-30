// src/pages/GrainsPage.jsx
import { Link } from 'react-router-dom';
import './CategoryPage.css';

function GrainsPage() {
  const scrollToTop = () => window.scrollTo(0, 0);

  const grains = [
    { id: 'g1', name: 'Pearl Millet (Bajra)', desc: 'Nutrient-rich, machine-cleaned pearl millet.', img: '/pearl-millet.jpg' },
    { id: 'g2', name: 'Finger Millet (Ragi)', desc: 'High-calcium finger millet, available whole or powdered.', img: '/ragi.jpg' },
    { id: 'g3', name: 'Sorghum (Jowar)', desc: 'Premium white and yellow sorghum grains.', img: '/sorghum-jowar.jpg' },
    { id: 'g4', name: 'Wheat', desc: 'High-quality Indian wheat suitable for milling.', img: '/wheat.jpg' },
  ];

  return (
    <div className="category-page-wrapper">
      <section className="category-hero" style={{ backgroundImage: `linear-gradient(rgba(10, 30, 15, 0.7), rgba(10, 30, 15, 0.7)), url('/premium-grains.jpg')` }}>
        <h1>Premium Grains</h1>
        <p>Nutrient-rich Indian millets, wheat, and agricultural grains sourced for bulk commodity export.</p>
      </section>

      <section className="specific-products-section">
        <div className="specific-products-grid">
          {grains.map((grain) => (
            <div key={grain.id} className="specific-card">
              <div className="s-image-container"><img src={grain.img} alt={grain.name} /></div>
              <div className="s-info">
                <h3>{grain.name}</h3>
                <p>{grain.desc}</p>
                <Link to="/request-specification" className="btn-outline-green" onClick={scrollToTop}>Request Specifications</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default GrainsPage;