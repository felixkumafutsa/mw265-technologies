import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="glass-dark py-12 px-4 mt-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-4">
            <Logo size="lg" />
            <div>
              <h3 className="text-2xl font-bold text-white">MW265 Technologies</h3>
              <p className="text-white/60">Building Malawi Through Technology</p>
            </div>
          </div>

          <div className="flex gap-6">
            {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social) => (
              <motion.a
                key={social}
                href="#"
                whileHover={{ scale: 1.2, color: '#16A34A' }}
                className="text-white/60 hover:text-green transition-colors"
              >
                {social}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-8 pt-8 text-center"
        >
          <p className="text-white/60">
            © {new Date().getFullYear()} MW265 Technologies. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
