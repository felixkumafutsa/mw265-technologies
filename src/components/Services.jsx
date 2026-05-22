import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Smartphone,
  Globe,
  Palette,
  Box,
  Cpu,
  Wrench,
  GraduationCap,
} from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
    },
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Modern, responsive websites and web applications',
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Branding, logos, marketing materials and visual identity',
    },
    {
      icon: Box,
      title: '3D Design & Modeling',
      description: '3D modeling, product visualization and animation',
    },
    {
      icon: Cpu,
      title: 'IoT Systems Engineering',
      description: 'Smart home, agriculture and industrial IoT solutions',
    },
    {
      icon: Wrench,
      title: 'Computer Repair & Maintenance',
      description: 'Hardware repair, software installation and system optimization',
    },
    {
      icon: GraduationCap,
      title: 'Digital Skills Lab',
      description: 'Training programs in coding, design and digital literacy',
    },
  ];

  return (
    <section id="services" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Our Services
          </h2>
          <p className="text-xl text-white/80">
            Comprehensive technology solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-card p-8 rounded-3xl cursor-pointer group"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-green/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green/30"
              >
                <service.icon size={32} className="text-green" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                {service.title}
              </h3>
              <p className="text-white/70 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
