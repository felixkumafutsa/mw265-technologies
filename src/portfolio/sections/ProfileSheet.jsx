import { ArrowLeft, ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import './ProfileSheet.css';

const skillCategoryNames = {
  dataScience: 'Data science',
  design3D: '3D design & modeling',
  iot: 'Internet of Things',
};

const profileStats = [
  { label: 'Years experience', value: '5+' },
  { label: 'Projects completed', value: '50+' },
  { label: 'Technologies', value: '20+' },
  { label: 'Happy clients', value: '30+' },
];

const ProfileSheet = () => (
  <main className="profile-canvas">
    <motion.article
      className="profile-sheet"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <header className="profile-sheet__masthead">
        <Link className="profile-back" to="/">
          <ArrowLeft size={17} aria-hidden="true" />
          <span>Back to SpenFel</span>
        </Link>
        <p className="profile-record">SF / TEAM PROFILE <span>NO. 001</span></p>
      </header>

      <section id="home" className="profile-intro">
        <div className="profile-intro__identity">
          <p className="profile-kicker">Software · connected systems · applied AI</p>
          <h1>{portfolioData.name}</h1>
          <p className="profile-intro__title">{portfolioData.title}</p>
          <p className="profile-intro__tagline">{portfolioData.tagline}</p>
        </div>

        <aside className="profile-contact-card" aria-label="Contact details">
          <p className="profile-contact-card__label">Direct contact</p>
          <a href={`mailto:${portfolioData.contact.email}`}>
            <Mail size={15} aria-hidden="true" />
            <span>{portfolioData.contact.email}</span>
          </a>
          <a href={`tel:${portfolioData.contact.phone.replace(/\s+/g, '')}`}>
            <Phone size={15} aria-hidden="true" />
            <span>{portfolioData.contact.phone}</span>
          </a>
          <p>
            <MapPin size={15} aria-hidden="true" />
            <span>{portfolioData.contact.address}</span>
          </p>
          <div className="profile-socials">
            <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={17} aria-hidden="true" />
            </a>
            <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={17} aria-hidden="true" />
            </a>
            <a href={portfolioData.contact.twitter} target="_blank" rel="noopener noreferrer" aria-label="X">
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </aside>
      </section>

      <section id="about" className="profile-section profile-summary">
        <div className="profile-section__heading">
          <span>01</span>
          <h2>Profile</h2>
        </div>
        <div className="profile-summary__copy">
          <p>{portfolioData.about.summary}</p>
          <p>{portfolioData.about.description}</p>
        </div>
      </section>

      <section id="skills" className="profile-section">
        <div className="profile-section__heading">
          <span>02</span>
          <h2>Technical toolkit</h2>
        </div>
        <div className="profile-skill-groups">
          {Object.entries(portfolioData.skills).map(([category, skills]) => (
            <section className="profile-skill-group" key={category}>
              <h3>{skillCategoryNames[category] || category}</h3>
              <ul>
                {skills.map((skill) => <li key={skill.name}>{skill.name}</li>)}
              </ul>
            </section>
          ))}
        </div>
      </section>

      <section id="experience" className="profile-section">
        <div className="profile-section__heading">
          <span>03</span>
          <h2>Experience</h2>
        </div>
        <div className="profile-experience">
          {portfolioData.experience.map((item) => (
            <article className="profile-experience__item" key={item.id}>
              <div className="profile-experience__meta">
                <span>{item.period}</span>
                <span>{item.company}</span>
              </div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="profile-stats" aria-label="Career highlights">
        {profileStats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

    </motion.article>
  </main>
);

export default ProfileSheet;
