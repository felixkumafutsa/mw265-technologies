import React from 'react';
import { ArrowUpRight, Building2, GraduationCap, HeartPulse, Landmark, Sprout, Store } from 'lucide-react';
import useCardReveal from './useCardReveal';

const industries = [
  { icon: HeartPulse, name: 'Healthcare', note: 'Digital workflows for administration, appointments, patient information and reporting.' },
  { icon: Sprout, name: 'Agriculture', note: 'Connected tools for monitoring, information access and more informed farm operations.' },
  { icon: GraduationCap, name: 'Education', note: 'Systems and learning tools that support school operations and practical digital skills.' },
  { icon: Landmark, name: 'Financial services', note: 'Secure, useful platforms that help teams organise services, records and processes.' },
  { icon: Building2, name: 'Government & public institutions', note: 'Digital services and data systems shaped around public-sector needs and workflows.' },
  { icon: Store, name: 'SMEs & enterprises', note: 'Applications and automation to connect operations, customers and business information.' },
];

const Industries = () => {
  const revealRef = useCardReveal();

  return (
  <section id="industries" className="sds-industries sds-section" ref={revealRef}>
    <div className="sds-container">
      <div className="sds-industries__heading">
        <div>
          <p className="sds-eyebrow">Where we work</p>
          <h2>Technology built around<br /><em>real-world challenges.</em></h2>
        </div>
        <p>Every sector has its own context. We bring technology to the specific needs, constraints and opportunities in front of it.</p>
      </div>
      <div className="sds-industries__list">
        {industries.map(({ icon: Icon, name, note }, index) => (
          <article className="sds-industry" key={name} data-card-reveal>
            <span className="sds-industry__index">0{index + 1}</span>
            <Icon className="sds-industry__icon" size={22} strokeWidth={1.6} aria-hidden="true" />
            <h3>{name}</h3>
            <p>{note}</p>
            <a href="#contact" aria-label={`Discuss technology for ${name}`}><ArrowUpRight size={17} aria-hidden="true" /></a>
          </article>
        ))}
      </div>
      <p className="sds-industries__disclaimer">Areas of focus—not a list of clients or completed deployments.</p>
    </div>
  </section>
  );
};

export default Industries;
