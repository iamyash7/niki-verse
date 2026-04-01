/* ============================================================
   portfolio.js — Portfolio Category Tab Filtering
   ============================================================ */

   export function initPortfolioTabs() {
    const tabs  = document.querySelectorAll('.ptab');
    const cards = document.querySelectorAll('.port-card');
    if (!tabs.length || !cards.length) return;
  
    function applyFilter(filter) {
      /* Reset grid-column before re-filtering */
      cards.forEach((c) => {
        c.style.gridColumn = '';
        const match = filter === 'all' || c.dataset.category === filter;
        c.style.display = match ? '' : 'none';
      });
  
      /* Re-apply wide span to first visible card in 'all' view */
      if (filter === 'all') {
        const first = [...cards].find((c) => c.style.display !== 'none');
        if (first) first.style.gridColumn = 'span 2';
      }
    }
  
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        tabs.forEach((t) => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
        applyFilter(tab.dataset.tab);
      });
    });
  
    /* Initialise with 'all' */
    applyFilter('all');
  }
