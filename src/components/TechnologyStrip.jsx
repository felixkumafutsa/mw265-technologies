import React from 'react';
import { Braces, Cpu, Database, Radio, Server } from 'lucide-react';

const technologies = [
  { icon: Braces, label: 'React' },
  { icon: Server, label: 'Node.js' },
  { icon: Braces, label: 'Python' },
  { icon: Database, label: 'PostgreSQL' },
  { icon: Cpu, label: 'ESP32' },
  { icon: Radio, label: 'MQTT' },
];

const TechnologyStrip = () => (
  <section id="capabilities" className="sds-stack" aria-label="Technology capabilities">
    <div className="sds-container sds-stack__inner">
      <p className="sds-stack__label">Selected technologies<br />across our work</p>
      <ul className="sds-stack__list">
        {technologies.map(({ icon: Icon, label }) => (
          <li key={label}><Icon size={16} aria-hidden="true" /><span>{label}</span></li>
        ))}
      </ul>
      <span className="sds-stack__note">Tools chosen for the problem—not the trend.</span>
    </div>
  </section>
);

export default TechnologyStrip;
