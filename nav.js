/* ============================================================
   nav.js — Navigation: Scroll Behaviour, Active Links,
            Mobile Drawer, Keyboard Accessibility
   ============================================================ */

   export function initNav() {
    const nav     = document.getElementById('nav');
    const burger  = document.getElementById('navBurger');
    const drawer  = document.getElementById('navDrawer');
    const navLinks = document.querySelectorAll('.nav__links a');
    const sections = document.querySelectorAll('section[id]');
  
    if (!nav || !burger || !drawer) return;
  
    /* ── Scroll: sticky style ──────────────────────────── */
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  
    /* ── Active section highlight ──────────────────────── */
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            navLinks.forEach((a) =>
              a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id)
            );
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );
    sections.forEach((s) => sectionObserver.observe(s));
  
    /* ── Mobile Drawer ─────────────────────────────────── */
    let drawerOpen = false;
  
    function toggleDrawer(open) {
      drawerOpen = open;
      burger.classList.toggle('open', open);
      drawer.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
      if (open) {
        const firstLink = drawer.querySelector('a');
        firstLink?.focus();
      }
    }
  
    burger.addEventListener('click', () => toggleDrawer(!drawerOpen));
  
    drawer.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => toggleDrawer(false))
    );
  
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawerOpen) toggleDrawer(false);
    });
  
    /* ── Focus Trap inside Drawer ──────────────────────── */
    drawer.addEventListener('keydown', (e) => {
      if (!drawerOpen) return;
      const focusable = [...drawer.querySelectorAll('a, button')];
      const first = focusable[0];
      const last  = focusable[focusable.length - 1];
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });
  }