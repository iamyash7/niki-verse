/* ============================================================
   reveal.js — Scroll-triggered Reveal Animations
   Uses IntersectionObserver; each element fires once.
   ============================================================ */

   export function initReveal() {
    const elements = document.querySelectorAll('.reveal');
    if (!elements.length) return;
  
    /* Fallback for browsers without IntersectionObserver */
    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('in'));
      return;
    }
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
  
    elements.forEach((el) => observer.observe(el));
  }