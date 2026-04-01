/* ============================================================
   form.js — Contact Form: Client-side Validation & Submission
   ============================================================ */

   export function initForm() {
    const form        = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    const submitBtn   = document.getElementById('formSubmit');
    const submitText  = document.getElementById('submitText');
  
    if (!form) return;
  
    /* ── Field-level Validation ────────────────────────── */
    function validateField(fieldEl) {
      const input = fieldEl.querySelector('input, select, textarea');
      if (!input) return true;
  
      let valid = true;
  
      /* Required check */
      if (input.required && !input.value.trim()) valid = false;
  
      /* Email format */
      if (
        input.type === 'email' &&
        input.value &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)
      ) valid = false;
  
      /* Minimum length */
      if (
        input.minLength > 0 &&
        input.value.length > 0 &&
        input.value.length < input.minLength
      ) valid = false;
  
      /* Show/hide error only after user has touched the field */
      const showError =
        !valid && (input.value.trim() !== '' || input.type === 'select-one');
      fieldEl.classList.toggle('err', showError);
  
      return valid;
    }
  
    /* ── Live validation on blur + re-type ─────────────── */
    form.querySelectorAll('input, select, textarea').forEach((input) => {
      input.addEventListener('blur', () =>
        validateField(input.closest('.field'))
      );
      input.addEventListener('input', () => {
        const field = input.closest('.field');
        if (field.classList.contains('err')) validateField(field);
      });
    });
  
    /* ── Form Submit ───────────────────────────────────── */
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      /* Validate all fields */
      const fieldIds = ['fldName', 'fldEmail', 'fldService', 'fldMsg'];
      let allValid = true;
  
      fieldIds.forEach((id) => {
        const f = document.getElementById(id);
        if (f && !validateField(f)) allValid = false;
      });
  
      if (!allValid) {
        /* Focus the first errored field */
        form
          .querySelector('.err input, .err select, .err textarea')
          ?.focus();
        return;
      }
  
      /* ── Submission (replace with real endpoint if needed) ── */
      submitBtn.disabled = true;
      if (submitText) submitText.textContent = 'Sending…';
  
      /*
       * TO CONNECT A REAL BACKEND:
       * Replace the setTimeout below with a fetch() call, e.g.:
       *
       * await fetch('https://your-endpoint.com/contact', {
       *   method: 'POST',
       *   headers: { 'Content-Type': 'application/json' },
       *   body: JSON.stringify(Object.fromEntries(new FormData(form)))
       * });
       *
       * See docs/setup.md for details.
       */
      await new Promise((r) => setTimeout(r, 1000));
  
      form.style.display = 'none';
      formSuccess.classList.add('show');
      formSuccess.setAttribute('tabindex', '-1');
      formSuccess.focus();
    });
  }
