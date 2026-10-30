import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Privacy Policy</h1>
      <p style={styles.lastUpdated}>Last Updated: October 2026</p>
      
      <div style={styles.content}>
        <h2>1. Information We Collect</h2>
        <p>At RAK Global Marketer, we collect information you provide directly to us when you request a quote, submit a specification form, or contact us for B2B agricultural trading purposes.</p>
        
        <h2>2. How We Use Your Information</h2>
        <p>Your business information is strictly used to facilitate trade, provide accurate quotations, and manage international export logistics. We do not sell your data to third parties.</p>

        {/* Add more legal text here later */}
      </div>
    </div>
  );
};

const styles = {
  container: { maxWidth: '800px', margin: '0 auto', padding: '120px 20px 60px 20px', fontFamily: 'Segoe UI, sans-serif' },
  title: { color: '#1b4d3e', fontSize: '2.5rem', marginBottom: '5px' },
  lastUpdated: { color: '#666', fontStyle: 'italic', marginBottom: '30px' },
  content: { color: '#333', lineHeight: '1.6' }
};

export default PrivacyPolicy;