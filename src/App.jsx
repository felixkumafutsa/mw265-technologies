import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import ParticleBackground from './components/ParticleBackground';
import RegistrationModal from './components/RegistrationModal';

// Portfolio imports
import PortfolioNav from './portfolio/components/Navigation';
import ProfileSheet from './portfolio/sections/ProfileSheet';
import PortfolioFooter from './portfolio/components/Footer';
import Blog from './portfolio/sections/Blog';
import BlogPost from './portfolio/components/BlogPost';

function CorporateSite() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGetStarted = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-navy-dark overflow-x-hidden">
      <ParticleBackground />
      <Navigation onGetStarted={handleGetStarted} />
      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      <motion.div
        style={{
          transform: `translate(${mousePosition.x * -0.5}px, ${mousePosition.y * -0.5}px)`,
        }}
        transition={{ type: 'spring', stiffness: 100, damping: 30 }}
      >
        <Hero onGetStarted={handleGetStarted} />
      </motion.div>
      
      <About />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

function PortfolioSite() {
  const location = useLocation();

  useEffect(() => {
    if (/^\/portfolio\/?$/.test(location.pathname) && location.hash) {
      const element = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  if (/^\/portfolio\/?$/.test(location.pathname)) {
    return <ProfileSheet />;
  }

  return (
    <div className="min-h-screen bg-dark flex flex-col">
      <PortfolioNav />
      <main className="flex-grow">
        <Routes>
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </main>
      <PortfolioFooter />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CorporateSite />} />
        <Route path="/portfolio/*" element={<PortfolioSite />} />
      </Routes>
    </Router>
  );
}

export default App;
