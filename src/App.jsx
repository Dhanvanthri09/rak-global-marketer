// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Login from './pages/Login'; 
import SpicesPage from './pages/SpicesPage';
import NutsPage from './pages/NutsPage';
import FruitsPage from './pages/FruitsPage';
import VegetablesPage from './pages/VegetablesPage';
import HerbsPage from './pages/HerbsPage';
import GrainsPage from './pages/GrainsPage';
import RicePage from './pages/RicePage';
import DryCommoditiesPage from './pages/DryCommoditiesPage';
import RequestSpecificationPage from './pages/RequestSpecificationPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/spices" element={<SpicesPage />} />
            <Route path="/nuts" element={<NutsPage />} />
            <Route path="/fruits" element={<FruitsPage />} />
            <Route path="/vegetables" element={<VegetablesPage />} />
            <Route path="/herbs" element={<HerbsPage />} />
            <Route path="/grains" element={<GrainsPage />} />
            <Route path="/rice" element={<RicePage />} />
            <Route path="/dry" element={<DryCommoditiesPage />} />
            <Route path="/request-specification" element={<RequestSpecificationPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;