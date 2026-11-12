import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import RegistrationModal from './components/RegistrationModal';
import Industries from './components/Industries';
import Approach from './components/Approach';
import Innovation from './components/Innovation';

// Portfolio imports
import PortfolioNav from './portfolio/components/Navigation';
import ProfileSheet from './portfolio/sections/ProfileSheet';
import PortfolioFooter from './portfolio/components/Footer';
import Blog from './portfolio/sections/Blog';
import BlogPost from './portfolio/components/BlogPost';

function CorporateSite() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGetStarted = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="sds-site">
      <Navigation onGetStarted={handleGetStarted} />
      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <main>
        <Hero onGetStarted={handleGetStarted} />
        <About />
        <Services />
        <Industries />
        <Portfolio />
        <Approach />
        <Innovation />
        <Contact onGetStarted={handleGetStarted} />
      </main>
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
