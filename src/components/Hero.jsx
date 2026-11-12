import React from 'react';
import { ArrowDownRight, ArrowUpRight, Boxes, BrainCircuit, Cloud, Code2, Cpu, Database, Network, RadioTower } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const disciplines = [
  { icon: Code2, label: 'Software', className: 'ecosystem-node--software' },
  { icon: BrainCircuit, label: 'AI & data', className: 'ecosystem-node--ai' },
  { icon: RadioTower, label: 'Connected systems', className: 'ecosystem-node--iot' },
  { icon: Cloud, label: 'Cloud', className: 'ecosystem-node--cloud' },
];

const Hero = ({ onGetStarted }) => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="hero" className="sds-hero">
      <div className="sds-hero__grid">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="sds-hero__copy"
        >
          <p className="sds-eyebrow"><span aria-hidden="true" /> Technology &amp; digital innovation</p>
          <h1>Engineering the <span>Digital Future.</span></h1>
          <p className="sds-hero__lead">Intelligent Technology. <strong>Limitless Possibilities.</strong></p>
          <p className="sds-hero__description">
            We design, develop and deploy intelligent software, connected systems and digital infrastructure that help businesses and institutions solve complex challenges and unlock new opportunities.
          </p>
          <div className="sds-hero__actions">
            <a className="sds-button sds-button--green" href="#services">
              Explore our solutions <ArrowDownRight size={17} aria-hidden="true" />
            </a>
            <button className="sds-button sds-button--outline" type="button" onClick={onGetStarted}>
              Discuss a project <ArrowUpRight size={16} aria-hidden="true" />
            </button>
          </div>
          <div className="sds-hero__proof">
            <span className="sds-hero__proof-line" aria-hidden="true" />
            <span>Software&nbsp; / &nbsp;AI&nbsp; / &nbsp;IoT&nbsp; / &nbsp;Infrastructure</span>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.12 }}
          className="sds-ecosystem"
          aria-label="Diagram showing software, artificial intelligence, connected systems and cloud infrastructure working together"
          role="img"
        >
          <div className="ecosystem-topline">
            <span>INTEGRATED DIGITAL ECOSYSTEM</span>
            <span><i aria-hidden="true" /> SYSTEMS ONLINE</span>
          </div>
          <div className="ecosystem-stage">
            <svg className="ecosystem-lines" viewBox="0 0 640 440" fill="none" aria-hidden="true">
              <circle cx="320" cy="220" r="152" stroke="rgba(255,255,255,.1)" strokeDasharray="3 8" />
              <circle cx="320" cy="220" r="108" stroke="rgba(7,139,69,.28)" />
              <path d="M321 220L144 111M321 220L497 111M321 220L144 329M321 220L497 329M144 111L497 111M144 329L497 329" stroke="url(#network)" strokeWidth="1.2" />
              <circle cx="320" cy="220" r="4" fill="#63D391" />
              <circle cx="144" cy="111" r="3" fill="#63D391" />
              <circle cx="497" cy="111" r="3" fill="#73BCE8" />
              <circle cx="144" cy="329" r="3" fill="#73BCE8" />
              <circle cx="497" cy="329" r="3" fill="#63D391" />
              <defs>
                <linearGradient id="network" x1="144" y1="111" x2="497" y2="329" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#078B45" stopOpacity=".72" />
                  <stop offset="1" stopColor="#73BCE8" stopOpacity=".5" />
                </linearGradient>
              </defs>
            </svg>
            <div className="ecosystem-center">
              <div className="ecosystem-center__icon"><Boxes size={25} aria-hidden="true" /></div>
              <span className="ecosystem-center__overline">SPENFEL DIGITAL SYSTEMS</span>
              <strong>One connected<br />technology layer</strong>
              <span className="ecosystem-center__caption">DESIGNED TO WORK TOGETHER</span>
            </div>
            {disciplines.map(({ icon: Icon, label, className }, index) => (
              <motion.div
                key={label}
                className={`ecosystem-node ${className}`}
                animate={reduceMotion ? undefined : { y: [0, index % 2 ? -5 : 5, 0] }}
                transition={{ duration: 5 + index, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="ecosystem-node__icon"><Icon size={18} aria-hidden="true" /></span>
                <span>{label}</span>
              </motion.div>
            ))}
            <div className="ecosystem-data ecosystem-data--one"><Database size={14} aria-hidden="true" /> DATA LAYER <span>01</span></div>
            <div className="ecosystem-data ecosystem-data--two"><Cpu size={14} aria-hidden="true" /> INTELLIGENCE <span>02</span></div>
          </div>
          <div className="ecosystem-footer">
            <span>Connected by thoughtful engineering</span>
            <span className="ecosystem-footer__dots" aria-hidden="true"><i /><i /><i /></span>
          </div>
        </motion.div>
      </div>
      <a className="sds-hero__scroll" href="#about" aria-label="Scroll to learn about SpenFel Digital Systems">
        <span>Scroll to explore</span><span className="sds-hero__scroll-mark" aria-hidden="true" />
      </a>
    </section>
  );
};

export default Hero;
