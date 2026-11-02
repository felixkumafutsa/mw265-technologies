import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroBanner from '../../SpenFel Digital Systems Hero Banner.png';

const Hero = ({ onGetStarted }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-end justify-center px-4 pt-24 pb-8 overflow-hidden lg:items-center lg:pb-20">
      <motion.img
        src={heroBanner}
        alt=""
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
        className="absolute inset-0 h-full w-full object-cover object-[74%_40%] lg:object-[center_45%]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#071426]/85 via-[#071426]/65 to-[#071426]/35" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#071426]/35 via-transparent to-[#071426]/55" />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto rounded-xl bg-[#071426]/75 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.3)] ring-1 ring-white/10 backdrop-blur-[2px] text-center lg:mx-0 lg:rounded-3xl lg:bg-[#071426]/60 lg:p-8 lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl xl:text-5xl font-black mb-4 leading-tight lg:mb-6"
          >
            <span className="text-gradient">Smart Solutions.</span>
            <br />
            <span className="text-white">Powerful Technology.</span>
            <br />
            <span className="text-gradient">Real Impact.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg text-white/90 max-w-xl mx-auto lg:mx-0 mb-6 lg:mb-8"
          >
            SpenFel Digital Systems builds digital solutions for businesses, schools, startups and institutions in Malawi and beyond.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onGetStarted}
              className="px-7 py-3.5 bg-green hover:bg-green-light text-white font-bold rounded-full neon-glow transition-all flex items-center gap-2 lg:px-8 lg:py-4"
            >
              Get Started
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 transform lg:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-3 bg-green rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;