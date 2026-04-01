/* ============================================================
   accordion.js — Services Accordion (Engine Toggle)
   Keyboard: Enter / Space to toggle; only one open at a time
   ============================================================ */

   export function initAccordion() {
    const headers = document.querySelectorAll('.engine__header');
    if (!headers.length) return;
  
    function openEngine(header) {
      const engine = header.closest('.engine');
      const isOpen = engine.classList.contains('open');
  
      /* Close all */
      document.querySelectorAll('.engine').forEach((e) => e.classList.remove('open'));
      document.querySelectorAll('.engine__header').forEach((h) =>
        h.setAttribute('aria-expanded', 'false')
      );
  
      /* Open if it was closed */
      if (!isOpen) {
        engine.classList.add('open');
        header.setAttribute('aria-expanded', 'true');
      }
    }
  
    headers.forEach((header) => {
      header.addEventListener('click', () => openEngine(header));
  
      header.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openEngine(header);
        }
      });
    });
  }