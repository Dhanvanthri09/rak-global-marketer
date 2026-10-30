// src/components/Footer.jsx
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }; 

  return (
    <footer className="footer-wrapper">
      {/* 1. Community & Social Media Section */}
      <div className="community-section">
        <h2>Be Part of Our Community, Follow Our Journey</h2>
        <div className="social-icons">
          <a href="https://wa.me/919843845097" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp-icon" title="WhatsApp">
            <FaWhatsapp />
          </a>
          <a href="https://facebook.com/rak_global_marketer" target="_blank" rel="noopener noreferrer" className="social-icon facebook-icon" title="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com/rak_global_marketer" target="_blank" rel="noopener noreferrer" className="social-icon instagram-icon" title="Instagram">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com/in/rak_global_marketer" target="_blank" rel="noopener noreferrer" className="social-icon linkedin-icon" title="LinkedIn">
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* 2. Premium Main Footer */}
      <div className="main-footer">
        <div className="footer-content">
          
          {/* Column 1: Brand Profile */}
          <div className="footer-col footer-brand">
            <h3>RAK Global Marketer</h3>
            <p>Exporting the finest Indian agricultural products to the world. We operate at the intersection of traditional farming and modern global trade.</p>
          </div>

          {/* Column 2: Quick Links (Updated to use React Link) */}
          <div className="footer-col footer-explore">
            <h3>Explore</h3>
            <ul>
              <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
              <li><Link to="/about" onClick={scrollToTop}>About Us</Link></li>
              <li><Link to="/products" onClick={scrollToTop}>Our Products</Link></li>
              <li><Link to="/contact" onClick={scrollToTop}>Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div className="footer-col footer-contact">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <FaMapMarkerAlt className="f-icon"/> 
                <span>6/154-35A Manguttapatty Kattuvalavu,<br/>Amaragundi (PO), Omalur (TK),<br/>Salem (DT), Tamil Nadu, India - 636503</span>
              </li>
              <li>
                <FaPhoneAlt className="f-icon"/> 
                <span>+91 98438 45097</span>
              </li>
              <li>
                <FaEnvelope className="f-icon"/> 
                <span>rakglobalmarketer@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom (Legal Links Merged Here) */}
        <div className="footer-bottom">
          <p>&copy; 2026 RAK GLOBAL MARKETER. All rights reserved.</p>
          <div className="footer-links">
            <Link to="/privacy-policy" onClick={scrollToTop}>Privacy Policy</Link>
            <Link to="/terms-conditions" onClick={scrollToTop}>Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;