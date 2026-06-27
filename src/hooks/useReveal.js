import { useEffect } from 'react';

/**
 * Attaches IntersectionObserver to all elements with
 * .reveal, .reveal-left, or .reveal-right classes inside
 * the document and adds the 'visible' class when they enter.
 * Call once at the app root level.
 */
const useReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    const observe = () => {
      const elements = document.querySelectorAll(
        '.reveal, .reveal-left, .reveal-right'
      );
      elements.forEach((el) => observer.observe(el));
    };

    // Initial observation
    observe();

    // Re-observe after short delay to catch dynamically rendered elements
    const timer = setTimeout(observe, 500);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);
};

export default useReveal;
