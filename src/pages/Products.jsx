// src/pages/Products.jsx
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './Products.css';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
};

const productCategories = [
  { 
    id: 1, 
    title: 'Premium Spices', 
    desc: 'Authentic Indian spices including Cardamom, Turmeric, Pepper, Cloves, and Cinnamon.', 
    img: '/premium-spices.jpg',
    path: '/spices'
  },
  { 
    id: 2, 
    title: 'Nuts & Kernels', 
    desc: 'High-grade whole Cashews, Almonds, and other premium export-quality nuts.', 
    img: '/nuts-and-kernels.jpg',
    path: '/nuts'
  },
  { 
    id: 3, 
    title: 'Fresh Fruits', 
    desc: 'Hand-picked, export-grade Mangoes, Pomegranates, Papayas, and Bananas.', 
    img: '/fresh-fruits.jpg',
    path: '/fruits'
  },
  { 
    id: 4, 
    title: 'Fresh Vegetables', 
    desc: 'Farm-fresh Onions, Tomatoes, Green Chillies, and seasonal Indian vegetables.', 
    img: '/fresh-vegetables.jpg',
    path: '/vegetables'
  },
  { 
    id: 5, 
    title: 'Herbs & Medicinal Plants', 
    desc: 'Traditional wellness plants including Aloe Vera, Thulasi, Karisalankanni, and Neem.', 
    img: '/herbs-and-medicinal-plants.jpg',
    path: '/herbs'
  },
  { 
    id: 6, 
    title: 'Premium Grains', 
    desc: 'Nutrient-rich Indian millets, wheat, and agricultural grains sourced for bulk export.', 
    img: '/premium-grains.jpg',
    path: '/grains'
  },
  { 
    id: 7, 
    title: 'Rice Varieties', 
    desc: 'Aged Basmati, Sona Masoori, Ponni, and other highly demanded regional rice varieties.', 
    img: '/rice-varieties.jpg',
    path: '/rice'
  },
  { 
    id: 8, 
    title: 'Dry Commodities', 
    desc: 'Quality lentils, chickpeas, sesame seeds, tamarind, and other dry goods.', 
    img: '/dry-commodities.jpg',
    path: '/dry'
  },
];

function Products() {
  return (
    <div className="products-wrapper">
      {/* 1. Page Header */}
      <section className="products-hero">
        <div className="hero-text">
          <h1>Our Premium Produce</h1>
          <p>Sourced directly from the fertile lands of India. Processed, packed, and exported with uncompromising quality standards.</p>
        </div>
      </section>

      {/* 2. Products Grid */}
      <section className="products-gallery">
        <div className="gallery-container">
          <div className="product-grid">
            {productCategories.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-container">
                  <img src={product.img} alt={product.title} className="product-image" />
                </div>
                <div className="product-info">
                  <h3>{product.title}</h3>
                  <p>{product.desc}</p>
                  
                  {/* Updated Link: Now points to a category list instead of contact page */}
                  <Link 
                    to={product.path} 
                    className="inquire-link"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    View Products <FaArrowRight className="arrow-icon" />
                  </Link>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. B2B Call to Action */}
      <section className="products-cta">
        <h2>Looking for a specific requirement?</h2>
        <p>We accommodate custom packaging, private labeling, and specific grade requests for global buyers.</p>
        <Link 
  to="/request-specification" 
  onClick={scrollToTop} 
  style={{
    display: 'inline-block',
    backgroundColor: '#ffffff',
    color: '#1b4d3e', // Matches your dark green theme
    padding: '14px 35px',
    borderRadius: '50px', // Creates the rounded pill shape
    textDecoration: 'none', // Removes the default hyperlink underline
    fontWeight: '700',
    fontSize: '1rem',
    letterSpacing: '1px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s ease',
    marginTop: '25px'
  }}
  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
>
  REQUEST A QUOTE
</Link>
      </section>
    </div>
  );
}

export default Products;