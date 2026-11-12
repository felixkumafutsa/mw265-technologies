import React from 'react';
import { ArrowRight } from 'lucide-react';
import useCardReveal from './useCardReveal';

const stages = [
  { number: '01', title: 'Discover', text: 'Understand the problem, business objectives and user requirements.' },
  { number: '02', title: 'Design', text: 'Architect the solution, experience and technical foundations.' },
  { number: '03', title: 'Develop', text: 'Engineer, integrate and test a reliable digital system.' },
  { number: '04', title: 'Deploy & evolve', text: 'Launch, monitor, maintain and keep improving the solution.' },
];

const Approach = () => {
  const revealRef = useCardReveal();

  return (
  <section className="sds-approach sds-section" ref={revealRef}>
    <div className="sds-container">
      <div className="sds-section-heading sds-section-heading--split">
        <div>
          <p className="sds-eyebrow">How we work</p>
          <h2>From ideas to<br /><em>intelligent systems.</em></h2>
        </div>
        <p>Clear steps keep the work aligned—from the first conversation through delivery and what comes next.</p>
      </div>
      <ol className="sds-approach__steps">
        {stages.map((stage, index) => (
          <li className="sds-approach__step" key={stage.number} data-card-reveal>
            <div className="sds-approach__marker">
              <span>{stage.number}</span>
              {index < stages.length - 1 && <ArrowRight className="sds-approach__arrow" size={18} aria-hidden="true" />}
            </div>
            <h3>{stage.title}</h3>
            <p>{stage.text}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
  );
};

export default Approach;
