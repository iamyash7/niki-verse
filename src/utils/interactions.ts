export function setupInteractions(): void {
  setupHeader();
  setupMobileMenu();
  setupContactForm();
}

function setupHeader(): void {
  const header = document.querySelector<HTMLElement>("[data-header]");

  if (!header) {
    return;
  }

  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function setupMobileMenu(): void {
  const toggle = document.querySelector<HTMLButtonElement>("[data-menu-toggle]");
  const panel = document.querySelector<HTMLElement>("[data-mobile-panel]");

  if (!toggle || !panel) {
    return;
  }

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    panel.classList.toggle("is-open", !expanded);
  });

  panel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      panel.classList.remove("is-open");
    });
  });
}

function setupContactForm(): void {
  const form = document.querySelector<HTMLFormElement>("[data-contact-form]");
  const status = document.querySelector<HTMLElement>("[data-form-status]");

  if (!form || !status) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const interest = String(formData.get("interest") ?? "").trim();
    const brief = String(formData.get("brief") ?? "").trim();

    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Area of interest: ${interest}`,
        "",
        "Project brief:",
        brief
      ].join("\n")
    );

    window.location.href = `mailto:nikitauttamchaani65@gmail.com?subject=${subject}&body=${body}`;
    status.textContent = "Mail draft prepared. Review it in your email app and send when ready.";
    form.reset();
  });
}
