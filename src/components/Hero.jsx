import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-navy-dark">
      <motion.img
        src="/portfolio/images/projects/SpenFel Digital Systems Hero Banner.png"
        alt=""
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
        className="absolute inset-0 h-full w-full object-contain"
      />
    </section>
  );
};

export default Hero;