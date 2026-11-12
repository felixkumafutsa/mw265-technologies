import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

const REVEAL_SELECTOR = '[data-card-reveal]';
const FAIL_OPEN_DELAY = 800;
const MAX_STAGGER_INDEX = 5;
const STAGGER_INTERVAL = 65;

export default function useCardReveal() {
  const containerRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    if (
      !container
      || prefersReducedMotion !== false
      || typeof window === 'undefined'
      || typeof window.IntersectionObserver !== 'function'
    ) return undefined;

    const cards = Array.from(container.querySelectorAll(REVEAL_SELECTOR));
    if (!cards.length) return undefined;

    cards.forEach((card, index) => {
      card.style.setProperty('--sds-reveal-delay', `${Math.min(index, MAX_STAGGER_INDEX) * STAGGER_INTERVAL}ms`);
    });

    let observer;
    try {
      observer = new window.IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.setAttribute('data-sds-revealed', 'true');
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.01 });
    } catch {
      cards.forEach((card) => card.style.removeProperty('--sds-reveal-delay'));
      return undefined;
    }

    container.classList.add('sds-reveal-ready');
    const revealAll = () => {
      cards.forEach((card) => card.setAttribute('data-sds-revealed', 'true'));
      observer.disconnect();
    };
    const failOpenTimer = window.setTimeout(revealAll, FAIL_OPEN_DELAY);

    try {
      cards.forEach((card) => observer.observe(card));
    } catch {
      window.clearTimeout(failOpenTimer);
      observer.disconnect();
      container.classList.remove('sds-reveal-ready');
      cards.forEach((card) => card.style.removeProperty('--sds-reveal-delay'));
      return undefined;
    }

    return () => {
      window.clearTimeout(failOpenTimer);
      observer.disconnect();
      container.classList.remove('sds-reveal-ready');
      cards.forEach((card) => {
        card.removeAttribute('data-sds-revealed');
        card.style.removeProperty('--sds-reveal-delay');
      });
    };
  }, [prefersReducedMotion]);

  return containerRef;
}
