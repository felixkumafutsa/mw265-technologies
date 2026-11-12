import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink, Pause, Play } from 'lucide-react';
import { portfolioData } from '../portfolio/data/portfolioData';
import useCardReveal from './useCardReveal';

const productOrder = [
  'technical-skills-and-innovation-lab',
  'hospital-management-saas',
  'intelligent-school-management-saas',
  'saferide-malawi',
  'learning-and-teaching-companion',
];

const productTypes = {
  'technical-skills-and-innovation-lab': 'Technical learning initiative',
  'hospital-management-saas': 'Digital healthcare solution',
  'intelligent-school-management-saas': 'Education platform',
  'saferide-malawi': 'Mobility and safety product',
  'learning-and-teaching-companion': 'Learning tool',
};

const productCoverImages = {
  'intelligent-school-management-saas': '/portfolio/images/projects/spenfel-school-management.png',
  'saferide-malawi': '/portfolio/images/projects/spenfel-saferide.png',
  'learning-and-teaching-companion': '/portfolio/images/projects/spenfel-learning-companion.png',
};

const products = productOrder
  .map((id) => portfolioData.projects.find((project) => project.id === id))
  .filter(Boolean);
const previousProjects = portfolioData.projects.slice(5);
const projects = [
  ...products.map((project) => ({
    ...project,
    image: productCoverImages[project.id] || project.image,
    category: 'SpenFel product',
    type: productTypes[project.id],
  })),
  ...previousProjects.map((project) => ({ ...project, category: 'Earlier individual project', type: 'Felix Kumafutsa · portfolio work' })),
];

function ProjectImage({ project, index }) {
  const [imageStatus, setImageStatus] = useState(project.image ? 'loading' : 'missing');
  const imageDescriptions = {
    'intelligent-school-management-saas': 'School administration dashboard with student, attendance, and class summaries',
    'saferide-malawi': 'SafeRide Malawi ride interface with pickup, destination, and vehicle details',
    'learning-and-teaching-companion': 'Learning dashboard with lesson details, progress, and a class schedule',
  };

  if (project.image) {
    return (
      <div className={`sds-project-card__image${imageStatus === 'loading' ? ' is-loading' : ''}`}>
        {imageStatus !== 'error' && (
          <img
            src={project.image}
            alt={imageDescriptions[project.id] || `${project.title} product cover`}
            loading="lazy"
            onLoad={() => setImageStatus('loaded')}
            onError={() => setImageStatus('error')}
          />
        )}
        {imageStatus === 'loading' && <span className="sds-project-card__loading" aria-hidden="true" />}
        {imageStatus === 'error' && (
          <div className="sds-project-card__image-fallback" role="img" aria-label={`${project.title} cover image unavailable`}>
            <span>SPENFEL DIGITAL SYSTEMS</span>
            <strong>Cover unavailable</strong>
          </div>
        )}
      </div>
    );
  }

  const conceptLabels = {
    'intelligent-school-management-saas': 'Connected school operations',
    'saferide-malawi': 'Safer journeys, made simpler',
    'learning-and-teaching-companion': 'A shared space to learn',
  };
  const conceptLabel = conceptLabels[project.id] || 'A digital product concept';

  return (
    <div
      className={`sds-project-card__image sds-project-card__image--placeholder sds-project-art sds-project-art--${project.id}`}
      role="img"
      aria-label={`${project.title} product concept`}
    >
      <div className="sds-project-art__header">
        <span>SPENFEL DIGITAL SYSTEMS</span>
        <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
      </div>
      <div className="sds-project-art__motif" aria-hidden="true">
        <i /><i /><i />
      </div>
      <strong>{conceptLabel}</strong>
      <span className="sds-project-art__footer">PRODUCT CONCEPT</span>
    </div>
  );
}

function ProjectCard({ project, index, active, setSlideRef }) {
  const hasDemo = Boolean(project.demo);
  const isSpenFelProduct = project.category === 'SpenFel product';

  return (
    <article
      className={`sds-project-card${active ? ' is-active' : ''}`}
      ref={setSlideRef}
      role="group"
      aria-roledescription="slide"
      aria-label={`${index + 1} of ${projects.length}: ${project.title}`}
      aria-current={active ? 'true' : undefined}
      data-card-reveal
    >
      <ProjectImage project={project} index={index} />
      <div className="sds-project-card__content">
        {isSpenFelProduct && (
          <p className="sds-project-card__type">
            <span>{project.category}</span> <i aria-hidden="true">/</i> {project.type}
          </p>
        )}
        <h3>{project.id === 'technical-skills-and-innovation-lab' ? 'Technical Skills & Innovations Lab' : project.title}</h3>
        <p className="sds-project-card__description">{project.description}</p>
        <div className="sds-project-card__footer">
          {hasDemo ? (
            <a className="sds-project-card__link" href={project.demo} target="_blank" rel="noopener noreferrer">
              {isSpenFelProduct ? 'Explore product' : 'View project'}
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          ) : (
            <a className="sds-project-card__link" href="#contact">
              Discuss this initiative <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          )}
          <span className="sds-project-card__ordinal" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
        </div>
      </div>
    </article>
  );
}

const Portfolio = () => {
  const revealRef = useCardReveal();
  const carouselRef = useRef(null);
  const slideRefs = useRef([]);
  const interactionTimerRef = useRef(null);
  const scrollFrameRef = useRef(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPaused, setAutoPaused] = useState(false);
  const [focusWithin, setFocusWithin] = useState(false);
  const [interactionPaused, setInteractionPaused] = useState(false);
  const [documentVisible, setDocumentVisible] = useState(() => typeof document === 'undefined' || !document.hidden);

  const scrollToSlide = (index) => {
    const carousel = carouselRef.current;
    const slide = slideRefs.current[index];
    if (!carousel || !slide) return;

    const carouselBounds = carousel.getBoundingClientRect();
    const slideBounds = slide.getBoundingClientRect();
    const slidePosition = carousel.scrollLeft + slideBounds.left - carouselBounds.left;
    const left = slidePosition + (slideBounds.width - carousel.clientWidth) / 2;
    carousel.scrollTo({
      left,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
    setActiveIndex(index);
  };

  const pauseAfterInteraction = () => {
    setInteractionPaused(true);
    window.clearTimeout(interactionTimerRef.current);
    interactionTimerRef.current = window.setTimeout(() => setInteractionPaused(false), 6500);
  };

  const updateActiveSlide = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const center = carousel.getBoundingClientRect().left + carousel.clientWidth / 2;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;
    slideRefs.current.forEach((slide, index) => {
      if (!slide) return;
      const bounds = slide.getBoundingClientRect();
      const distance = Math.abs(bounds.left + bounds.width / 2 - center);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });
    setActiveIndex((current) => current === closestIndex ? current : closestIndex);
  };

  useEffect(() => {
    const updateVisibility = () => setDocumentVisible(!document.hidden);
    document.addEventListener('visibilitychange', updateVisibility);
    return () => document.removeEventListener('visibilitychange', updateVisibility);
  }, []);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = (event) => setPrefersReducedMotion(event.matches);
    setPrefersReducedMotion(preference.matches);
    if (preference.addEventListener) {
      preference.addEventListener('change', updatePreference);
      return () => preference.removeEventListener('change', updatePreference);
    }
    preference.addListener(updatePreference);
    return () => preference.removeListener(updatePreference);
  }, []);

  useEffect(() => () => {
    window.clearTimeout(interactionTimerRef.current);
    if (scrollFrameRef.current) window.cancelAnimationFrame(scrollFrameRef.current);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || autoPaused || focusWithin || interactionPaused || !documentVisible) return undefined;
    const interval = window.setInterval(() => {
      scrollToSlide((activeIndex + 1) % projects.length);
    }, 6200);
    return () => window.clearInterval(interval);
  }, [activeIndex, autoPaused, documentVisible, focusWithin, interactionPaused, prefersReducedMotion]);

  const handleScroll = () => {
    if (scrollFrameRef.current) window.cancelAnimationFrame(scrollFrameRef.current);
    scrollFrameRef.current = window.requestAnimationFrame(updateActiveSlide);
  };

  const handleBlur = (event) => {
    if (!carouselRef.current?.contains(event.relatedTarget)) setFocusWithin(false);
  };

  const handleFocus = (event) => {
    if (carouselRef.current?.contains(event.target)) setFocusWithin(true);
  };

  return (
    <section id="projects" className="sds-projects sds-section" ref={revealRef}>
      <div className="sds-container">
        <div className="sds-section-heading sds-section-heading--split">
          <div>
            <p className="sds-eyebrow sds-eyebrow--dark">Selected work</p>
            <h2>Innovation<br /><em>in action.</em></h2>
          </div>
          <p>Five SpenFel initiatives and earlier individual work, brought together in one considered view. Each card is clearly attributed to its origin.</p>
        </div>

        <div
          className="sds-project-carousel"
          role="region"
          aria-roledescription="carousel"
          aria-label={`Selected projects, ${projects.length} slides`}
          onWheel={pauseAfterInteraction}
          onPointerDown={pauseAfterInteraction}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={(event) => {
            if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') pauseAfterInteraction();
          }}
        >
          <div className="sds-project-carousel__heading">
            <div>
              <span className="sds-project-carousel__label">Projects &amp; initiatives</span>
              <p>Company products first, followed by Felix Kumafutsa&apos;s earlier portfolio work.</p>
            </div>
            <div className="sds-project-carousel__controls" role="group" aria-label="Project carousel controls">
              <span className="sds-project-carousel__count" aria-live="off">
                {String(activeIndex + 1).padStart(2, '0')} <i>/</i> {String(projects.length).padStart(2, '0')}
              </span>
              <button
                type="button"
                className="sds-project-carousel__button sds-project-carousel__toggle"
                aria-controls="sds-project-rail"
                onClick={() => {
                  if (autoPaused) {
                    window.clearTimeout(interactionTimerRef.current);
                    setInteractionPaused(false);
                  }
                  setAutoPaused((paused) => !paused);
                }}
                disabled={prefersReducedMotion}
                aria-label={prefersReducedMotion ? 'Automatic scrolling disabled by reduced motion preference' : autoPaused ? 'Resume automatic scrolling' : 'Pause automatic scrolling'}
                aria-pressed={autoPaused}
              >
                {autoPaused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
              </button>
              <button
                type="button"
                className="sds-project-carousel__button"
                aria-controls="sds-project-rail"
                onClick={() => { pauseAfterInteraction(); scrollToSlide((activeIndex - 1 + projects.length) % projects.length); }}
                aria-label="Show previous project"
              >
                <ArrowLeft size={17} aria-hidden="true" />
              </button>
              <button
                type="button"
                className="sds-project-carousel__button sds-project-carousel__button--next"
                aria-controls="sds-project-rail"
                onClick={() => { pauseAfterInteraction(); scrollToSlide((activeIndex + 1) % projects.length); }}
                aria-label="Show next project"
              >
                <ArrowRight size={17} aria-hidden="true" />
              </button>
            </div>
          </div>

          <div
            ref={carouselRef}
            id="sds-project-rail"
            className="sds-project-rail"
            tabIndex="0"
            onScroll={handleScroll}
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                active={activeIndex === index}
                setSlideRef={(element) => { slideRefs.current[index] = element; }}
              />
            ))}
          </div>

          <div className="sds-project-carousel__progress" aria-hidden="true">
            <span style={{ transform: `scaleX(${(activeIndex + 1) / projects.length})` }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
