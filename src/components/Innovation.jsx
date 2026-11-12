import React from 'react';
import { Activity, Bot, Building2, Cpu, Database, Sprout } from 'lucide-react';
import useCardReveal from './useCardReveal';

const focusAreas = [
  { icon: Bot, title: 'Applied artificial intelligence' },
  { icon: Cpu, title: 'Connected IoT ecosystems' },
  { icon: Activity, title: 'Intelligent automation' },
  { icon: Building2, title: 'Digital public infrastructure' },
  { icon: Sprout, title: 'Smart agriculture' },
  { icon: Database, title: 'Data-driven decision systems' },
];

const Innovation = () => {
  const revealRef = useCardReveal();

  return (
  <section className="sds-innovation sds-section" ref={revealRef}>
    <div className="sds-container sds-innovation__layout">
      <div className="sds-innovation__copy" data-card-reveal>
        <p className="sds-eyebrow sds-eyebrow--dark">The next horizon</p>
        <h2>Built for what<br /><em>comes next.</em></h2>
        <p>
          New technologies matter when they make systems more useful. We explore emerging tools with a practical lens—connecting innovation to local needs, lasting value and responsible implementation.
        </p>
        <a className="sds-text-link" href="#contact">Explore an idea with us <span aria-hidden="true">↗</span></a>
      </div>
      <div className="sds-innovation__visual" data-card-reveal>
        <div className="sds-innovation__visual-head"><span>AREAS OF EXPLORATION</span><span>01 — 06</span></div>
        <ul>
          {focusAreas.map(({ icon: Icon, title }, index) => (
            <li key={title} data-card-reveal>
              <span className="sds-innovation__number">0{index + 1}</span>
              <Icon size={18} aria-hidden="true" />
              <span>{title}</span>
              <i aria-hidden="true" />
            </li>
          ))}
        </ul>
        <div className="sds-innovation__orb" aria-hidden="true"><div /><span>SYSTEMS<br />THINKING</span></div>
      </div>
    </div>
  </section>
  );
};

export default Innovation;
