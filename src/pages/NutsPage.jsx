// src/pages/NutsPage.jsx
import { Link } from 'react-router-dom';
import './CategoryPage.css'; // Reusing the same CSS file!

function NutsPage() {
  const scrollToTop = () => window.scrollTo(0, 0);

  const nuts = [
    { id: 'n1', name: 'Cashew Nuts', desc: 'W240, W320, and W450 export-grade whole cashews.', img: '/cashew-nuts.jpg' },
    { id: 'n2', name: 'Almonds', desc: 'Premium quality whole almonds.', img: '/almonds.jpg' },
    { id: 'n3', name: 'Walnuts', desc: 'High-quality shelled and unshelled walnuts.', img: '/walnuts.jpg' },
  ];

  return (
    <div className="category-page-wrapper">
      <section className="category-hero" style={{ backgroundImage: `linear-gradient(rgba(10, 30, 15, 0.7), rgba(10, 30, 15, 0.7)), url('/nuts-and-kernels.jpg')` }}>
        <h1>Nuts & Kernels</h1>
        <p>High-grade whole nuts exported globally for bulk buyers and premium retail packaging.</p>
      </section>

      <section className="specific-products-section">
        <div className="specific-products-grid">
          {nuts.map((nut) => (
            <div key={nut.id} className="specific-card">
              <div className="s-image-container"><img src={nut.img} alt={nut.name} /></div>
              <div className="s-info">
                <h3>{nut.name}</h3>
                <p>{nut.desc}</p>
                <Link to="/request-specification" className="btn-outline-green" onClick={scrollToTop}>Request Specifications</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default NutsPage;