import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Smartphone, Globe, Cpu, Palette } from 'lucide-react';
import { portfolioData } from '../portfolio/data/portfolioData';

const companyProjects = [
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

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="portfolio" className="relative px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-3xl"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-green">
            Selected work
          </p>
          <h2 className="mb-4 text-4xl font-bold text-gradient md:text-5xl">
            Our Portfolio
          </h2>
          <p className="text-lg leading-relaxed text-white/75 md:text-xl">
            A selection of work from SpenFel Digital Systems and Felix Kumafutsa.
          </p>
        </motion.div>

        <section aria-labelledby="company-projects-heading">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h3 id="company-projects-heading" className="text-2xl font-bold text-white md:text-3xl">
              SpenFel projects
            </h3>
            <span className="hidden text-sm text-white/50 sm:block">
              Company portfolio
            </span>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {companyProjects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass-card group overflow-hidden rounded-2xl border border-white/10"
              >
                <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-navy to-navy-light">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(22,163,74,0.2),transparent_45%)]"
                  />
                  <project.icon
                    size={56}
                    strokeWidth={1.4}
                    aria-hidden="true"
                    className="relative z-10 text-green transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 md:p-7">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-green">
                    {project.category}
                  </span>
                  <h4 className="mt-2 text-xl font-bold text-white md:text-2xl">
                    {project.title}
                  </h4>
                  <p className="mt-3 leading-relaxed text-white/70">
                    {project.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section aria-labelledby="felix-projects-heading" className="mt-16 border-t border-white/10 pt-12">
          <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-green">
                Individual portfolio
              </p>
              <h3 id="felix-projects-heading" className="text-2xl font-bold text-white md:text-3xl">
                Projects by {portfolioData.name}
              </h3>
            </div>
            <Link
              to="/portfolio/"
              className="inline-flex min-h-11 items-center gap-2 self-start rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-white/85 transition-colors hover:border-green/60 hover:text-green-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green sm:self-auto"
            >
              Explore full portfolio
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {portfolioData.projects.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {portfolioData.projects.map((project, index) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.36) }}
                  whileHover={{ y: -4 }}
                  className="glass-card group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10"
                >
                  <div className="relative h-48 overflow-hidden bg-navy-light">
                    <img
                      src={project.image}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-transparent to-transparent"
                    />
                    <p className="absolute bottom-3 left-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/90">
                      {portfolioData.name}
                    </p>
                  </div>

                  <div className="flex flex-1 flex-col p-5 md:p-6">
                    <h4 className="text-xl font-bold leading-snug text-white">
                      {project.title}
                    </h4>
                    <p className="mt-3 flex-1 leading-relaxed text-white/70">
                      {project.description}
                    </p>

                    <ul aria-label={`${project.title} technologies`} className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <li
                          key={technology}
                          className="rounded-full border border-white/15 bg-white/[0.05] px-2.5 py-1 text-xs text-white/70"
                        >
                          {technology}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/10 pt-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-green-light transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
                        >
                          Source code <span aria-hidden="true">↗</span>
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-green-light transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
                        >
                          Live demo <span aria-hidden="true">↗</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <p className="rounded-xl border border-white/10 bg-white/[0.04] p-6 text-white/70">
              Felix&apos;s projects will appear here when available.
            </p>
          )}
        </section>
      </div>
    </section>
  );
};

export default Portfolio;
