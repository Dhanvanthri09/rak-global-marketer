import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleSubmit = (e) => {
    setIsSubmitted(true);
  };

  const contactItems = [
    {
      id: 'address',
      icon: <FaMapMarkerAlt style={styles.icon} />,
      title: 'Business Address',
      text: '6/154-35A Manguttapatty Kattuvalavu,\nAmaragundi (PO), Omalur (TK),\nSalem (DT), Tamil Nadu, India – 636503',
      link: 'https://www.google.com/maps/search/?api=1&query=6/154-35A+Manguttapatty+Kattuvalavu+Amaragundi+Omalur+Salem+Tamil+Nadu+636503',
      isExternal: true
    },
    {
      id: 'phone',
      icon: <FaPhoneAlt style={styles.icon} />,
      title: 'Phone',
      text: '+91 98438 45097',
      link: 'tel:+919843845097',
      isExternal: false
    },
    {
      id: 'email',
      icon: <FaEnvelope style={styles.icon} />,
      title: 'Email',
      text: 'rakglobalmarketer@gmail.com',
      link: 'mailto:rakglobalmarketer@gmail.com',
      isExternal: false
    },
    {
      id: 'whatsapp',
      icon: <FaWhatsapp style={styles.iconWhatsapp} />,
      title: 'WhatsApp',
      text: 'Chat with us directly',
      link: 'https://wa.me/919843845097?text=Hello,%20I%20would%20like%20to%20inquire%20about%20your%20agricultural%20products.',
      isExternal: true
    }
  ];

  return (
    <div style={styles.pageContainer}>
      <div style={styles.header}>
        <h1 style={styles.title}>Contact Us</h1>
        <p style={styles.subtitle}>
          Ready to import premium agricultural products? Get in touch with us today for quotations and inquiries.
        </p>
      </div>

      <div style={styles.contentGrid}>
        {/* Left Column: Interactive Business Info Cards */}
        <div style={styles.infoCard}>
          {contactItems.map((item, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <a 
                key={item.id}
                href={item.link} 
                target={item.isExternal ? "_blank" : "_self"} 
                rel={item.isExternal ? "noopener noreferrer" : ""} 
                style={{
                  ...styles.infoItemLink,
                  backgroundColor: isHovered ? '#1e293b' : '#f8fafc', // Shifts to dark slate on hover
                  transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
                  boxShadow: isHovered ? '0 6px 20px rgba(0, 0, 0, 0.12)' : 'none',
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div style={styles.infoItem}>
                  <div style={isHovered ? styles.iconHovered : styles.iconContainer}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 style={{
                      ...styles.infoTitle,
                      color: isHovered ? '#ffffff' : '#2c3e50'
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      ...styles.infoText,
                      color: isHovered ? '#cbd5e1' : '#555'
                    }}>
                      {item.text}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Right Column: Enquiry Form */}
        <div style={styles.formCard}>
          <h2 style={styles.formHeading}>Send an Enquiry</h2>
          <form 
            action="https://formsubmit.co/rakglobalmarketer@gmail.com" 
            method="POST" 
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="_subject" value="New B2B Contact Inquiry!" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div style={styles.formGroup}>
              <label style={styles.label}>Your Name / Company Name *</label>
              <input type="text" name="name" required placeholder="John Doe / Acme Corp" style={styles.input} />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Business Email *</label>
              <input type="email" name="email" required placeholder="john@company.com" style={styles.input} />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Message / Requirements *</label>
              <textarea 
                name="message" 
                rows="5" 
                required 
                placeholder="Type your inquiry or product requirement here..." 
                style={styles.textarea}
              ></textarea>
            </div>

            <button type="submit" style={styles.submitBtn}>
              {isSubmitted ? 'Sending Message...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// Styles featuring smooth transition states for dark hover effects
const styles = {
  pageContainer: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '130px 20px 60px 20px',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  title: {
    color: '#2c3e50',
    fontSize: '2.5rem',
    marginBottom: '10px',
    fontWeight: '700',
  },
  subtitle: {
    color: '#666',
    fontSize: '1.1rem',
  },
  contentGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '40px',
    alignItems: 'start',
  },
  infoCard: {
    background: '#ffffff',
    padding: '25px',
    borderRadius: '12px',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.06)',
    border: '1px solid #eaeaea',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  infoItemLink: {
    textDecoration: 'none',
    borderRadius: '8px',
    transition: 'all 0.25s ease-in-out',
    display: 'block',
    padding: '15px',
    border: '1px solid #e2e8f0',
  },
  infoItem: {
    display: 'flex',
    gap: '20px',
    alignItems: 'flex-start',
  },
  iconContainer: {
    marginTop: '3px',
  },
  iconHovered: {
    marginTop: '3px',
    color: '#34d399', // Bright accent green when hovering on dark background
  },
  icon: {
    fontSize: '1.3rem',
    color: '#1b4d3e',
  },
  iconWhatsapp: {
    fontSize: '1.4rem',
    color: '#25D366',
  },
  infoTitle: {
    fontSize: '1rem',
    fontWeight: '600',
    marginBottom: '4px',
    transition: 'color 0.2s ease',
  },
  infoText: {
    fontSize: '0.95rem',
    lineHeight: '1.5',
    whiteSpace: 'pre-line', // Preserves address line breaks properly
    transition: 'color 0.2s ease',
  },
  formCard: {
    background: '#ffffff',
    padding: '35px',
    borderRadius: '12px',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.06)',
    border: '1px solid #eaeaea',
  },
  formHeading: {
    fontSize: '1.4rem',
    color: '#2c3e50',
    marginBottom: '20px',
    fontWeight: '600',
  },
  formGroup: {
    marginBottom: '18px',
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontWeight: '600',
    marginBottom: '6px',
    color: '#333',
    fontSize: '0.9rem',
  },
  input: {
    padding: '12px 15px',
    border: '1px solid #cbd5e1',
    borderRadius: '6px',
    fontSize: '0.95rem',
    outline: 'none',
    backgroundColor: '#f8fafc',
    width: '100%',
    boxSizing: 'border-box',
  },
  textarea: {
    padding: '12px 15px',
    border: '1px solid #cbd5e1',
    borderRadius: '6px',
    fontSize: '0.95rem',
    outline: 'none',
    resize: 'vertical',
    backgroundColor: '#f8fafc',
    fontFamily: 'inherit',
    width: '100%',
    boxSizing: 'border-box',
  },
  submitBtn: {
    width: '100%',
    padding: '14px',
    backgroundColor: '#1b4d3e',
    color: '#ffffff',
    border: 'none',
    borderRadius: '6px',
    fontSize: '1.05rem',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '5px',
    boxShadow: '0 4px 12px rgba(27, 77, 62, 0.2)',
  },
};

export default Contact;