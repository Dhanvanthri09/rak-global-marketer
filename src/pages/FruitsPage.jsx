// src/pages/FruitsPage.jsx
import { Link } from 'react-router-dom';
import './CategoryPage.css';

function FruitsPage() {
  const scrollToTop = () => window.scrollTo(0, 0);

  const fruits = [
    { id: 'f1', name: 'Alphonso Mangoes', desc: 'Premium, hand-picked export quality Alphonso mangoes.', img: '/alphonso-mangoes.jpg' },
    { id: 'f2', name: 'Pomegranates', desc: 'Deep red, juicy Bhagwa pomegranates.', img: '/pomegranates.jpg' },
    { id: 'f3', name: 'Papayas', desc: 'Fresh, naturally ripened tropical papayas.', img: '/papayas.jpg' },
    { id: 'f4', name: 'Cavendish Bananas', desc: 'Green and yellow Cavendish bananas packed to international standards.', img: '/cavendish-bananas.jpg' },
  ];

  return (
    <div className="category-page-wrapper">
      <section className="category-hero" style={{ backgroundImage: `linear-gradient(rgba(10, 30, 15, 0.7), rgba(10, 30, 15, 0.7)), url('/fresh-fruits.jpg')` }}>
        <h1>Fresh Fruits</h1>
        <p>Hand-picked, export-grade fruits sourced directly from the finest orchards in India.</p>
      </section>

      <section className="specific-products-section">
        <div className="specific-products-grid">
          {fruits.map((fruit) => (
            <div key={fruit.id} className="specific-card">
              <div className="s-image-container"><img src={fruit.img} alt={fruit.name} /></div>
              <div className="s-info">
                <h3>{fruit.name}</h3>
                <p>{fruit.desc}</p>
                <Link to="/request-specification" className="btn-outline-green" onClick={scrollToTop}>Request Specifications</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default FruitsPage;