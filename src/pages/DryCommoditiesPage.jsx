// src/pages/DryCommoditiesPage.jsx
import { Link } from 'react-router-dom';
import './CategoryPage.css';

function DryCommoditiesPage() {
  const scrollToTop = () => window.scrollTo(0, 0);

  const dryGoods = [
    { id: 'd1', name: 'Tamarind', desc: 'Seedless, premium quality dried tamarind blocks.', img: '/Tamarind.jpg' },
    { id: 'd2', name: 'Sesame Seeds', desc: 'Hulled and unhulled natural white and black sesame seeds.', img: '/Sesame.jpg' },
    { id: 'd3', name: 'Red Lentils (Masoor Dal)', desc: 'Split and whole red lentils, thoroughly cleaned.', img: '/Lentils.jpg' },
    { id: 'd4', name: 'Chickpeas (Kabuli Chana)', desc: 'Large, premium grade white chickpeas.', img: '/chickpeas.jpg' },
  ];

  return (
    <div className="category-page-wrapper">
      <section className="category-hero" style={{ backgroundImage: `linear-gradient(rgba(10, 30, 15, 0.7), rgba(10, 30, 15, 0.7)), url('/dry-commodities.jpg')` }}>
        <h1>Dry Commodities</h1>
        <p>Quality lentils, chickpeas, sesame seeds, tamarind, and essential dry goods prepared for bulk shipment.</p>
      </section>

      <section className="specific-products-section">
        <div className="specific-products-grid">
          {dryGoods.map((item) => (
            <div key={item.id} className="specific-card">
              <div className="s-image-container"><img src={item.img} alt={item.name} /></div>
              <div className="s-info">
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <Link to="/request-specification" className="btn-outline-green" onClick={scrollToTop}>Request Specifications</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default DryCommoditiesPage;