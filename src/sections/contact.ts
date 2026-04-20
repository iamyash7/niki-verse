type ContactContent = {
  eyebrow: string;
  title: string;
  intro: string;
  email: string;
  links: {
    label: string;
    href: string;
  }[];
};

export function renderContact(content: ContactContent): string {
  const iconMap: Record<string, string> = {
    Instagram: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>`,
    YouTube: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>`,
    LinkedIn: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`,
    Medium: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>`,
    Threads: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.473 12.01v-.017c.027-3.579.877-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.594 12c.022 3.086.713 5.496 2.05 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.583-1.303-.881-2.354-.887h-.045c-.797 0-1.701.208-2.305.847l-1.498-1.36c.853-.94 2.272-1.434 3.793-1.434h.06c3.657.026 5.82 2.376 5.834 6.386.003.065.006.13.006.196 0 .06-.003.12-.006.18.024.765-.013 3.328-1.957 5.209C18.437 23.249 15.66 24 12.187 24zM10.25 14.753c.066 1.213 1.277 1.987 3.042 1.891.989-.054 1.813-.449 2.321-1.101.511-.655.768-1.61.766-2.845a11.87 11.87 0 0 0-2.691-.065c-2.147.126-3.469.969-3.438 2.12z"/></svg>`,
    StoryMirror: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
  };
  
  const links = content.links
    .map(
      (link) =>
        `<a class="social-link" href="${link.href}" target="_blank" rel="noreferrer">
          ${iconMap[link.label] ?? ""}
          ${link.label}
        </a>`
    )
    .join("");

  return `
    <section class="section alt-surface" id="contact">
      <div class="contact-layout">
        <div class="contact-info">
          <div class="section-heading narrow">
            <p class="eyebrow">${content.eyebrow}</p>
            <h2>${content.title}</h2>
          </div>
          <p class="section-intro">${content.intro}</p>
          <a class="email-link" href="mailto:${content.email}">${content.email}</a>
          <div class="social-grid">
            ${links}
          </div>
        </div>
        <form class="contact-card" data-contact-form>
          <label>
            Full name
            <input name="name" type="text" placeholder="Your name" required />
          </label>
          <label>
            Email address
            <input name="email" type="email" placeholder="your@email.com" required />
          </label>
          <label>
            Area of interest
            <select name="interest" required>
              <option value="">Select one&hellip;</option>
              <option value="Brand Strategy">Brand Strategy</option>
              <option value="Performance Marketing">Performance Marketing</option>
              <option value="Corporate Anchoring">Corporate Anchoring</option>
              <option value="Learning Design">Learning Design</option>
              <option value="Multiple Services">Multiple Services</option>
              <option value="General Enquiry">General Enquiry</option>
            </select>
          </label>
          <label>
            Project brief
            <textarea name="brief" rows="5" placeholder="Tell me about your project…" required></textarea>
          </label>
          <button class="button button-solid button-wide" type="submit">Send Enquiry</button>
        </form>
      </div>
    </section>
  `;
}
