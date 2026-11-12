import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';

const services = [
  'Software engineering & application development',
  'Artificial intelligence & data intelligence',
  'IoT & smart systems',
  'Cloud & digital infrastructure',
  'Business automation & digital transformation',
  'Technical training, research & innovation',
  'Other',
];

const RegistrationModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [handoffStarted, setHandoffStarted] = useState(false);
  const firstFieldRef = useRef(null);
  const previousFocusRef = useRef(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isOpen) return undefined;
    previousFocusRef.current = document.activeElement;
    const focusTimer = window.setTimeout(() => firstFieldRef.current?.focus(), 0);
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key !== 'Tab') return;

      const dialog = document.getElementById('project-enquiry-dialog');
      const focusable = dialog?.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled])');
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener('keydown', handleKeyDown);
      previousFocusRef.current?.focus?.();
    };
  }, [isOpen, onClose]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = `Project enquiry: ${formData.service}`;
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone || 'Not provided'}`,
      `Service: ${formData.service}`,
      '',
      'Project details:',
      formData.message || 'Not provided',
    ].join('\n');

    setHandoffStarted(true);
    window.location.href = `mailto:support@spenfeldigtal.com?${new URLSearchParams({ subject, body }).toString()}`;
  };

  const handleClose = () => {
    setHandoffStarted(false);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button
            type="button"
            className="sds-modal__backdrop"
            aria-label="Close project enquiry"
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
          />
          <div className="sds-modal__position">
            <motion.div
              id="project-enquiry-dialog"
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-enquiry-title"
              className="sds-modal"
              initial={reduceMotion ? false : { opacity: 0, y: 14, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: 8, scale: 0.99 }}
            >
              <button type="button" className="sds-modal__close" aria-label="Close dialog" onClick={handleClose}>
                <X size={20} aria-hidden="true" />
              </button>
              <p className="sds-eyebrow sds-eyebrow--dark">Project enquiry</p>
              <h2 id="project-enquiry-title">Tell us what you&apos;re working on.</h2>
              <p className="sds-modal__intro">Share a few details to prepare an email to our team. Nothing is sent until you review and send it in your email app.</p>

              {handoffStarted && (
                <p className="sds-modal__handoff" role="status">
                  Your email app should open with this message. Review the details and press Send there. If it didn&apos;t open, email us at <a href="mailto:support@spenfeldigtal.com">support@spenfeldigtal.com</a>.
                </p>
              )}

              <form className="sds-form" onSubmit={handleSubmit}>
                <div className="sds-form__row">
                  <label>
                    <span>Name <i aria-hidden="true">*</i></span>
                    <input ref={firstFieldRef} name="name" autoComplete="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                  </label>
                  <label>
                    <span>Email <i aria-hidden="true">*</i></span>
                    <input type="email" name="email" autoComplete="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                  </label>
                </div>
                <div className="sds-form__row">
                  <label>
                    <span>Phone <small>(optional)</small></span>
                    <input type="tel" name="phone" autoComplete="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                  </label>
                  <label>
                    <span>Area of interest <i aria-hidden="true">*</i></span>
                    <select required value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })}>
                      <option value="">Select a service</option>
                      {services.map((service) => <option key={service} value={service}>{service}</option>)}
                    </select>
                  </label>
                </div>
                <label>
                  <span>Project details <small>(optional)</small></span>
                  <textarea rows="4" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                </label>
                <button className="sds-button sds-button--green sds-form__submit" type="submit">
                  Open email app <ArrowUpRight size={17} aria-hidden="true" />
                </button>
                <p className="sds-form__note">This hands your draft to your email app. It does not submit automatically.</p>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default RegistrationModal;
