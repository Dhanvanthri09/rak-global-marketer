// src/pages/VegetablesPage.jsx
import { Link } from 'react-router-dom';
import './CategoryPage.css';

function VegetablesPage() {
  const scrollToTop = () => window.scrollTo(0, 0);

  const vegetables = [
    { id: 'v1', name: 'Red Onions', desc: 'Crisp, export-quality red onions stored and packed for longevity.', img: '/red-onions.jpg' },
    { id: 'v2', name: 'Fresh Tomatoes', desc: 'Firm and ripe tomatoes ideal for culinary and commercial use.', img: '/fresh-tomatoes.jpg' },
    { id: 'v3', name: 'Green Chillies', desc: 'Spicy, fresh green chillies (G4 variety).', img: '/green-chillies.jpg' },
    { id: 'v4', name: 'Okra (Lady Finger)', desc: 'Tender, farm-fresh green okra.', img: '/okra-lady-finger.jpg' },
  ];

  return (
    <div className="category-page-wrapper">
      <section className="category-hero" style={{ backgroundImage: `linear-gradient(rgba(10, 30, 15, 0.7), rgba(10, 30, 15, 0.7)), url('/fresh-vegetables.jpg')` }}>
        <h1>Fresh Vegetables</h1>
        <p>Farm-fresh, seasonal Indian vegetables, strictly quality-checked for global export.</p>
      </section>

      <section className="specific-products-section">
        <div className="specific-products-grid">
          {vegetables.map((veg) => (
            <div key={veg.id} className="specific-card">
              <div className="s-image-container"><img src={veg.img} alt={veg.name} /></div>
              <div className="s-info">
                <h3>{veg.name}</h3>
                <p>{veg.desc}</p>
                <Link to="/request-specification" className="btn-outline-green" onClick={scrollToTop}>Request Specifications</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default VegetablesPage;