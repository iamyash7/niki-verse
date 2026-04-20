import type { Testimonial } from "../data/content";

type TestimonialsContent = {
  eyebrow: string;
  title: string;
  items: Testimonial[];
};

export function renderTestimonials(content: TestimonialsContent): string {
  const cards = content.items
    .map(
      (item) => `
        <article class="testimonial-card">
          <p class="testimonial-quote">“${item.quote}”</p>
          <h3>${item.author}</h3>
          <p class="testimonial-role">${item.role}</p>
        </article>
      `
    )
    .join("");

  return `
    <section class="section" id="testimonials">
      <div class="section-heading narrow">
        <p class="eyebrow">${content.eyebrow}</p>
        <h2>${content.title}</h2>
      </div>
      <div class="testimonials-grid">
        ${cards}
      </div>
    </section>
  `;
}
