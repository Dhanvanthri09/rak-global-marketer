// src/pages/RicePage.jsx
import { Link } from 'react-router-dom';
import './CategoryPage.css';

function RicePage() {
  const scrollToTop = () => window.scrollTo(0, 0);

  const riceTypes = [
    { id: 'r1', name: 'Basmati Rice', desc: 'Long-grain, aromatic, aged Basmati rice (1121, 1509 varieties).', img: '/Basmati.jpg' },
    { id: 'r2', name: 'Sona Masoori', desc: 'Lightweight and aromatic medium-grain rice.', img: '/Sona.jpg' },
    { id: 'r3', name: 'Ponni Rice', desc: 'Popular boiled and raw Ponni rice for daily consumption.', img: '/Ponni.jpg' },
    { id: 'r4', name: 'Idli Rice', desc: 'Premium short-grain parboiled rice.', img: '/Idli.jpg' },
  ];

  return (
    <div className="category-page-wrapper">
      <section className="category-hero" style={{ backgroundImage: `linear-gradient(rgba(10, 30, 15, 0.7), rgba(10, 30, 15, 0.7)), url('/rice-varieties.jpg')` }}>
        <h1>Rice Varieties</h1>
        <p>Aged Basmati, Sona Masoori, Ponni, and other highly demanded regional rice varieties globally exported.</p>
      </section>

      <section className="specific-products-section">
        <div className="specific-products-grid">
          {riceTypes.map((rice) => (
            <div key={rice.id} className="specific-card">
              <div className="s-image-container"><img src={rice.img} alt={rice.name} /></div>
              <div className="s-info">
                <h3>{rice.name}</h3>
                <p>{rice.desc}</p>
                <Link to="/request-specification" className="btn-outline-green" onClick={scrollToTop}>Request Specifications</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default RicePage;