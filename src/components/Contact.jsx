import React from 'react';
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';

const Contact = ({ onGetStarted }) => (
  <>
    <section id="contact" className="sds-contact">
      <div className="sds-contact__glow" aria-hidden="true" />
      <div className="sds-container sds-contact__inner">
        <div className="sds-contact__copy">
          <p className="sds-eyebrow">Start a conversation</p>
          <h2>Have a challenge<br />worth <em>solving?</em></h2>
          <p>Let&apos;s turn your ideas into practical digital solutions.</p>
          <div className="sds-contact__buttons">
            <button type="button" className="sds-button sds-button--green" onClick={onGetStarted}>
              Start a project <ArrowUpRight size={17} aria-hidden="true" />
            </button>
            <a href="mailto:support@spenfeldigtal.com" className="sds-button sds-button--light-outline">
              Contact our team <Mail size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="sds-contact__details">
          <a href="tel:+265997473256" className="sds-contact__item">
            <span className="sds-contact__icon"><Phone size={18} aria-hidden="true" /></span>
            <span><small>Call our team</small><strong>+265997473256</strong></span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <a href="https://wa.me/265997473256" target="_blank" rel="noopener noreferrer" className="sds-contact__item">
            <span className="sds-contact__icon"><MessageCircle size={18} aria-hidden="true" /></span>
            <span><small>WhatsApp</small><strong>+265997473256</strong></span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <a href="mailto:support@spenfeldigtal.com" className="sds-contact__item">
            <span className="sds-contact__icon"><Mail size={18} aria-hidden="true" /></span>
            <span><small>Email</small><strong>support@spenfeldigtal.com</strong></span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <div className="sds-contact__item sds-contact__item--location">
            <span className="sds-contact__icon"><MapPin size={18} aria-hidden="true" /></span>
            <span><small>Based in</small><strong>Lilongwe, Malawi</strong></span>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Contact;
