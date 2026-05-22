import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Get In Touch
          </h2>
          <p className="text-xl text-white/80">
            Ready to start your project? Contact us today
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-8 md:p-16 rounded-3xl max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass p-6 rounded-2xl"
            >
              <Phone size={32} className="text-green mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">Call Us</h3>
              <p className="text-white/80 text-lg">+265 997 473 256</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass p-6 rounded-2xl"
            >
              <MessageCircle size={32} className="text-green mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">WhatsApp</h3>
              <p className="text-white/80 text-lg">+265 889 887 486</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass p-6 rounded-2xl"
            >
              <Mail size={32} className="text-green mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">Email</h3>
              <p className="text-white/80 text-lg">info@mw265.com</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass p-6 rounded-2xl"
            >
              <MapPin size={32} className="text-green mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">Location</h3>
              <p className="text-white/80 text-lg">Lilongwe, Malawi</p>
            </motion.div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="tel:+265997473256"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-green hover:bg-green-light text-white font-bold rounded-full neon-glow transition-all flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Call Now
            </motion.a>
            <motion.a
              href="https://wa.me/265889887486"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-green hover:bg-green-light text-white font-bold rounded-full neon-glow transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              WhatsApp Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
