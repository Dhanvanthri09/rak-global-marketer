import React from 'react';

const TermsConditions = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Terms & Conditions</h1>
      <p style={styles.lastUpdated}>Last Updated: October 2026</p>
      
      <div style={styles.content}>
        <h2>1. General Terms of Trade</h2>
        <p>By engaging with RAK Global Marketer, buyers agree to our standard international export procedures, including compliance with shipping, customs, and agricultural quality standards.</p>
        
        <h2>2. Quotations and Pricing</h2>
        <p>All product quotes are subject to market fluctuations in the agricultural sector. Final pricing will be locked in upon the signing of a formal purchase agreement.</p>

        {/* Add more legal text here later */}
      </div>
    </div>
  );
};

// You can use the exact same styles object as the Privacy Policy above
const styles = {
  container: { maxWidth: '800px', margin: '0 auto', padding: '120px 20px 60px 20px', fontFamily: 'Segoe UI, sans-serif' },
  title: { color: '#1b4d3e', fontSize: '2.5rem', marginBottom: '5px' },
  lastUpdated: { color: '#666', fontStyle: 'italic', marginBottom: '30px' },
  content: { color: '#333', lineHeight: '1.6' }
};

export default TermsConditions;