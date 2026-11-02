import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { portfolioData } from '../portfolio/data/portfolioData';

const teamMembers = [
  {
    name: portfolioData.name,
    role: portfolioData.title,
    href: '/portfolio/',
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 md:p-16 rounded-3xl"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-8 text-gradient"
          >
            About SpenFel Digital Systems
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 leading-relaxed"
          >
            SpenFel Digital Systems is an innovation-driven startup delivering practical technology solutions in software, IoT, digital design and ICT training.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { label: 'Software', value: 'Development' },
              { label: 'IoT', value: 'Systems' },
              { label: 'Digital', value: 'Design' },
              { label: 'ICT', value: 'Training' },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="glass p-6 rounded-2xl text-center"
              >
                <div className="text-green font-bold text-lg">{item.label}</div>
                <div className="text-white/80">{item.value}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-14 border-t border-white/15 pt-10"
          >
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green">
                  The team
                </p>
                <h3 className="mt-2 text-2xl font-bold text-white md:text-3xl">
                  People behind the work
                </h3>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-white/65">
                Meet the team member and explore his personal portfolio.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {teamMembers.map((member) => (
                <motion.article
                  key={member.name}
                  whileHover={{ y: -4 }}
                  className="group flex flex-col justify-between gap-6 rounded-2xl border border-white/15 bg-white/[0.04] p-6 transition-colors hover:border-green/50 hover:bg-white/[0.07] sm:flex-row sm:items-center"
                >
                  <div className="flex items-center gap-4">
                    <div
                      aria-hidden="true"
                      className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-green/30 bg-green/10 text-xl font-bold tracking-wide text-green-light"
                    >
                      FK
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">{member.name}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-white/65">
                        {member.role}
                      </p>
                    </div>
                  </div>
                  <Link
                    to={member.href}
                    aria-label={`View ${member.name}'s portfolio`}
                    className="inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-lg border border-green/50 px-4 py-2 text-sm font-semibold text-green-light transition-colors hover:bg-green hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green sm:self-auto"
                  >
                    View portfolio
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
