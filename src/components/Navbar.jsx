// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  
  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  return (
    <header className="header-wrapper">
      {/* Top Quote Banner */}
      <div className="top-banner">
        <p>🌿 Harvested with care. Delivered to the world.🌿</p>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          {/* Added onClick to Logo */}
          <Link to="/" className="navbar-logo" onClick={scrollToTop}>
            RAK GLOBAL MARKETER
          </Link>
          <ul className="nav-menu">
            {/* Added onClick to all navigation links */}
            <li><Link to="/" className="nav-link" onClick={scrollToTop}>Home</Link></li>
            <li><Link to="/about" className="nav-link" onClick={scrollToTop}>About Us</Link></li>
            <li><Link to="/products" className="nav-link" onClick={scrollToTop}>Products</Link></li>
            <li><Link to="/services" className="nav-link" onClick={scrollToTop}>Services</Link></li>
            {/* NEW: Request Specification Link */}
            <li><Link to="/request-specification" className="nav-link" onClick={scrollToTop}>Request Specification</Link></li>
            <li><Link to="/contact" className="nav-link" onClick={scrollToTop}>Contact</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;