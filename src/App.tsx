import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ContactPage from './pages/ContactPage';
import HomePage from './components/HomePage';
import ServicesPage from './pages/ServicePage';
import ServiceDetail from './pages/ServiceDetail';
import GalleryPage from './pages/GalleryPage';
import SharePage from './pages/SharePage';
import AboutPage from './pages/AboutPage';
import './styles/globals.css';


const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/share" element={<SharePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
