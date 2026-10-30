// src/pages/Services.jsx
import './Services.css';

function Services() {
  const servicesList = [
    { title: "Product Sourcing", desc: "Finding the best quality Turmeric, Tamarind, and Chillies directly from reliable local farms and markets." },
    { title: "Quotation Preparation", desc: "Providing clear, competitive, and accurate pricing tailored to the specific needs of international importers." },
    { title: "Packaging Coordination", desc: "Ensuring products are packed safely and hygienically according to international export standards." },
    { title: "Export Coordination", desc: "Managing the logistics to ensure your agricultural products are dispatched smoothly and efficiently." }
  ];
  
  // Bound the inline styles object to the container and elements
  const styles = {
    container: {
      backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.75)), url('/services-bg.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      padding: '130px 20px 60px 20px', // Proper top clearance from the header
      minHeight: '100vh',
    },
    title: {
      color: '#ffffff',
      textAlign: 'center',
      fontSize: '2.5rem',
      marginBottom: '10px',
      fontWeight: '700',
    },
    subtitle: {
      color: '#cbd5e1',
      textAlign: 'center',
      marginBottom: '40px',
      fontSize: '1.05rem',
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Our Services</h2>
      <p style={styles.subtitle}>We provide end-to-end support to make your importing process simple and secure.</p>
      
      <div className="services-grid">
        {servicesList.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;