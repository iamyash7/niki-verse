/* ============================================================
   main.js — Entry Point: Initialises All Modules
   ============================================================ */

   import { initNav }            from './nav.js';
   import { initAccordion }      from './accordion.js';
   import { initPortfolioTabs }  from './portfolio.js';
   import { initReveal }         from './reveal.js';
   import { initForm }           from './form.js';
   import { initBackTop }        from './utils.js';
   
   document.addEventListener('DOMContentLoaded', () => {
     initNav();
     initAccordion();
     initPortfolioTabs();
     initReveal();
     initForm();
     initBackTop();
   });