import React from 'react';
import { ArrowUpRight, Bot, CloudCog, Code2, Cpu, GraduationCap, Workflow } from 'lucide-react';
import useCardReveal from './useCardReveal';

const services = [
  {
    icon: Code2,
    slug: 'software-engineering',
    title: 'Software engineering & application development',
    description: 'Purpose-built digital products and platforms designed around people and the way organisations work.',
    capabilities: ['Web applications', 'Mobile applications', 'Enterprise systems', 'APIs & integrations', 'SaaS platforms'],
    detail: 'We shape web and mobile applications, enterprise systems and SaaS products around the needs of their users, integrating APIs and existing tools where they make the solution more useful.',
  },
  {
    icon: Bot,
    slug: 'artificial-intelligence-data',
    title: 'Artificial intelligence & data intelligence',
    description: 'Use data and applied AI to support clearer insight, more useful tools and informed decisions.',
    capabilities: ['Machine learning', 'AI-powered applications', 'Intelligent automation', 'Data analytics', 'Decision support'],
    detail: 'Explore machine learning, analytics and AI-powered applications to surface patterns, support decisions and automate appropriate tasks—grounded in the quality and context of available data.',
  },
  {
    icon: Cpu,
    slug: 'iot-smart-systems',
    title: 'IoT & smart systems',
    description: 'Connect devices, sensors and software to make monitoring and control more useful.',
    capabilities: ['Embedded systems', 'Sensor integration', 'Remote monitoring', 'Smart agriculture', 'Industrial automation'],
    detail: 'Bring embedded hardware, sensor data, device connectivity and software together for monitoring and control across agriculture, industry and other connected environments.',
  },
  {
    icon: CloudCog,
    slug: 'cloud-infrastructure',
    title: 'Cloud & digital infrastructure',
    description: 'Plan and operate the technical foundations that keep digital products available and maintainable.',
    capabilities: ['Cloud architecture', 'Hosting & deployment', 'Database engineering', 'Networking', 'Infrastructure management'],
    detail: 'Plan the foundations behind a digital service: deployment and hosting, database design, network needs and infrastructure operations that fit its scale and requirements.',
  },
  {
    icon: Workflow,
    slug: 'business-automation',
    title: 'Business automation & digital transformation',
    description: 'Improve connected processes with software that helps teams spend less effort on repetitive work.',
    capabilities: ['Business management systems', 'Workflow automation', 'Process integration', 'Enterprise solutions', 'Digital transformation'],
    detail: 'Map existing processes, identify useful opportunities to simplify repeatable work, and connect business systems through workflow automation and digital platforms.',
  },
  {
    icon: GraduationCap,
    slug: 'technical-training-innovation',
    title: 'Technical training, research & innovation',
    description: 'Build practical capability through guided learning, experimentation and technology-led exploration.',
    capabilities: ['Software development', 'Robotics & IoT', 'AI & data science', 'Technical skills', 'Prototyping'],
    detail: 'Support practical technical learning through software development, robotics, IoT, AI and data science, alongside prototyping, experimentation and mentorship.',
  },
];

const Services = () => {
  const revealRef = useCardReveal();

  return (
  <section id="services" className="sds-services sds-section" ref={revealRef}>
    <div className="sds-container">
      <div className="sds-section-heading sds-section-heading--split">
        <div>
          <p className="sds-eyebrow sds-eyebrow--dark">What we do</p>
          <h2>Technology that moves<br /><em>businesses forward.</em></h2>
        </div>
        <p>From intelligent applications to connected infrastructure, we build digital systems that solve real-world problems.</p>
      </div>
      <div className="sds-services__grid">
        {services.map(({ icon: Icon, slug, title, description, capabilities }, index) => (
          <article className="sds-service" key={title} data-card-reveal>
            <div className="sds-service__top">
              <span className="sds-service__number">0{index + 1}</span>
              <Icon size={21} strokeWidth={1.7} aria-hidden="true" />
            </div>
            <h3>{title}</h3>
            <p className="sds-service__description">{description}</p>
            <ul className="sds-service__capabilities">
              {capabilities.map((capability) => <li key={capability}>{capability}</li>)}
            </ul>
            <a className="sds-service__link" href={`#service-detail-${slug}`}>
              Explore service <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>
      <div className="sds-services__details" aria-label="Service details">
        <div className="sds-services__details-heading">
          <p className="sds-eyebrow sds-eyebrow--dark">More detail</p>
          <h3>How we can help</h3>
        </div>
        <div className="sds-services__details-list">
          {services.map(({ slug, title, detail }, index) => (
            <article id={`service-detail-${slug}`} className="sds-service-detail" key={slug} data-card-reveal>
              <span className="sds-service-detail__number">0{index + 1}</span>
              <h4>{title}</h4>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
};

export default Services;
