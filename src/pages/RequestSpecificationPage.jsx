import React, { useState } from 'react';

const RequestSpecificationPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    setIsSubmitted(true);
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.header}>
        <h1 style={styles.title}>Request Product Specifications</h1>
        <p style={styles.subtitle}>
          Submit your bulk order requirements or request detailed botanical and agricultural specifications for our catalog items.
        </p>
      </div>

      <div style={styles.formCard}>
        <form 
          action="https://formsubmit.co/rakglobalmarketer@gmail.com" 
          method="POST" 
          onSubmit={handleSubmit}
        >
          {/* Security & Config for FormSubmit */}
          <input type="hidden" name="_subject" value="New B2B Specification Request!" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <div style={styles.formRow}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Full Name / Contact Person *</label>
              <input type="text" name="name" required placeholder="John Doe" style={styles.input} />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Company Name *</label>
              <input type="text" name="company" required placeholder="Acme Organics Ltd." style={styles.input} />
            </div>
          </div>

          <div style={styles.formRow}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Business Email *</label>
              <input type="email" name="email" required placeholder="john@company.com" style={styles.input} />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Contact Number</label>
              <input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" style={styles.input} />
            </div>
          </div>

          <div style={styles.formGroupFull}>
            <label style={styles.label}>Product Category of Interest *</label>
            <select name="category" required style={styles.fullWidthInput}>
              <option value="">Select a category...</option>
              <option value="Herbs">Medicinal Herbs (Aloe Vera, Neem, etc.)</option>
              <option value="Grains">Grains (Millet, Wheat, Sorghum)</option>
              <option value="Rice">Rice (Basmati, Ponni, Sona Masoori)</option>
              <option value="Commodities">Dry Commodities (Tamarind, Sesame, Lentils)</option>
              <option value="Multiple">Multiple Categories</option>
            </select>
          </div>

          <div style={styles.formGroupFull}>
            <label style={styles.label}>Detailed Requirements & Specifications *</label>
            <textarea 
              name="specifications" 
              rows="6" 
              required 
              placeholder="Please specify your required product variants, bulk quantities, packaging preferences (e.g., 50kg burlap sacks), and delivery timelines..."
              style={styles.fullWidthTextarea}
            ></textarea>
          </div>

          <button type="submit" style={styles.submitBtn}>
            {isSubmitted ? 'Sending Request...' : 'Submit Specification Request'}
          </button>
        </form>
      </div>
    </div>
  );
};

// Clean Professional B2B Styling Object
const styles = {
  pageContainer: {
    maxWidth: '850px',
    margin: '0 auto',
    padding: '140px 20px 50px 20px', // Increased paddingTop clears the fixed floating header completely
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  title: {
    color: '#2c3e50',
    fontSize: '2.2rem',
    marginBottom: '8px',
    fontWeight: '700',
  },
  subtitle: {
    color: '#666',
    fontSize: '1rem',
    lineHeight: '1.4',
  },
  formCard: {
    background: '#ffffff',
    padding: '35px',
    borderRadius: '12px',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
    border: '1px solid #eaeaea',
  },
  formRow: {
    display: 'flex',
    gap: '20px',
    marginBottom: '18px',
  },
  formGroup: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
  },
  formGroupFull: {
    marginBottom: '18px',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  label: {
    fontWeight: '600',
    marginBottom: '6px',
    color: '#333',
    fontSize: '0.9rem',
  },
  input: {
    padding: '10px 14px',
    border: '1px solid #cbd5e1',
    borderRadius: '6px',
    fontSize: '0.95rem',
    outline: 'none',
    backgroundColor: '#f8fafc',
    width: '100%',
    boxSizing: 'border-box',
  },
  fullWidthInput: {
    padding: '10px 14px',
    border: '1px solid #cbd5e1',
    borderRadius: '6px',
    fontSize: '0.95rem',
    outline: 'none',
    backgroundColor: '#f8fafc',
    width: '100%',
    boxSizing: 'border-box',
  },
  fullWidthTextarea: {
    padding: '10px 14px',
    border: '1px solid #cbd5e1',
    borderRadius: '6px',
    fontSize: '0.95rem',
    outline: 'none',
    resize: 'vertical',
    backgroundColor: '#f8fafc',
    fontFamily: 'inherit',
    width: '100%',
    boxSizing: 'border-box',
    minHeight: '130px',
  },
  submitBtn: {
    width: '100%',
    padding: '13px',
    backgroundColor: '#1b4d3e',
    color: '#ffffff',
    border: 'none',
    borderRadius: '6px',
    fontSize: '1.05rem',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '10px',
    boxShadow: '0 4px 12px rgba(27, 77, 62, 0.2)',
  },
};

export default RequestSpecificationPage;