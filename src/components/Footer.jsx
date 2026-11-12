import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

const Footer = () => (
  <footer className="sds-footer">
    <div className="sds-container">
      <div className="sds-footer__main">
        <div className="sds-footer__brand">
          <a className="sds-brand" href="#hero" aria-label="SpenFel Digital Systems home">
            <Logo size="sm" />
            <span className="sds-brand__name">SpenFel <b>Digital Systems</b></span>
          </a>
          <p>Intelligent technology. Digital systems. Built for real-world challenges.</p>
        </div>
        <div className="sds-footer__column">
          <h2>Explore</h2>
          <a href="#services">Services</a>
          <a href="#industries">Industries</a>
          <a href="#projects">Projects</a>
          <a href="#about">About SDS</a>
        </div>
        <div className="sds-footer__column">
          <h2>Get in touch</h2>
          <a href="mailto:support@spenfeldigtal.com">support@spenfeldigtal.com</a>
          <a href="tel:+265997473256">+265997473256</a>
          <a href="https://wa.me/265997473256" target="_blank" rel="noopener noreferrer">WhatsApp <ArrowUpRight size={13} aria-hidden="true" /></a>
          <span>Lilongwe, Malawi</span>
        </div>
      </div>
      <div className="sds-footer__bottom">
        <span>© {new Date().getFullYear()} SpenFel Digital Systems</span>
        <a href="#hero">Back to top ↑</a>
      </div>
    </div>
  </footer>
);

export default Footer;
