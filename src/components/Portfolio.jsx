import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Smartphone, Globe, Cpu, Palette } from 'lucide-react';

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      icon: Smartphone,
      title: 'Mobile App Dashboard',
      category: 'Mobile Development',
      description: 'Intuitive dashboard for business analytics',
    },
    {
      icon: Globe,
      title: 'Corporate Website',
      category: 'Web Development',
      description: 'Modern corporate presence for leading firms',
    },
    {
      icon: Cpu,
      title: 'IoT Smart Farm',
      category: 'IoT Systems',
      description: 'Smart agriculture monitoring system',
    },
    {
      icon: Palette,
      title: 'Brand Identity',
      category: 'Graphic Design',
      description: 'Complete branding for startups',
    },
  ];

  return (
    <section id="portfolio" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Our Portfolio
          </h2>
          <p className="text-xl text-white/80">
            Showcasing our best work and successful projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="glass-card overflow-hidden rounded-3xl group"
            >
              <div className="h-48 bg-gradient-to-br from-navy to-navy-light flex items-center justify-center relative overflow-hidden">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute inset-0 bg-green/10"
                />
                <project.icon size={64} className="text-green relative z-10" />
              </div>
              <div className="p-8">
                <span className="text-green text-sm font-semibold uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold mt-2 mb-3 text-white">
                  {project.title}
                </h3>
                <p className="text-white/70">{project.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 text-green font-semibold flex items-center gap-2 group-hover:gap-4 transition-all"
                >
                  View Project
                  <span>→</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 glass-card hover:bg-white/20 text-white font-bold rounded-full transition-all"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
