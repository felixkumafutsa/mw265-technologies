import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Compass, Layers3, Workflow } from 'lucide-react';
import useCardReveal from './useCardReveal';

const principles = [
  { icon: Compass, title: 'Grounded in the problem', text: 'Start with the people, context and real-world challenge behind every brief.' },
  { icon: Layers3, title: 'Built as systems', text: 'Bring software, data and connected technology together with purpose.' },
  { icon: Workflow, title: 'Made to evolve', text: 'Design for practical use today and room to adapt as needs change.' },
];

const About = () => {
  const revealRef = useCardReveal();

  return (
  <section id="about" className="sds-about sds-section" ref={revealRef}>
    <div className="sds-container">
      <div className="sds-about__layout">
        <div className="sds-about__intro" data-card-reveal>
          <p className="sds-eyebrow sds-eyebrow--dark">About SDS</p>
          <h2>Technology is only powerful when it works <em>in the real world.</em></h2>
        </div>
      </div>
      <ol className="sds-about__principles" aria-label="Our principles">
        {principles.map(({ icon: Icon, title, text }, index) => (
          <li className="sds-principle" key={title} data-card-reveal>
            <span className="sds-principle__node" aria-hidden="true">
              <span>0{index + 1}</span>
            </span>
            <Icon size={20} aria-hidden="true" />
            <h3>{title}</h3>
            <p>{text}</p>
          </li>
        ))}
      </ol>
      <div className="sds-team">
        <p className="sds-eyebrow sds-eyebrow--dark">Our team</p>
        <article className="sds-team-card" data-card-reveal>
          <div className="sds-team-card__monogram" aria-hidden="true">FK</div>
          <div className="sds-team-card__details">
            <h3>Felix Kumafutsa</h3>
            <p>Full Stack Software Developer | IoT Specialist | AI Engineer</p>
          </div>
          <Link className="sds-team-card__link" to="/portfolio/">
            View Felix&apos;s portfolio <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </article>
      </div>
    </div>
  </section>
  );
};

export default About;
