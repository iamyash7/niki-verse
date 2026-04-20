import type { Service } from "../data/content";

type ServicesContent = {
  eyebrow: string;
  title: string;
  intro: string;
  items: Service[];
};

export function renderServices(content: ServicesContent): string {
  const cards = content.items
    .map(
      (item, i) => `
        <article class="service-card">
          <h3>${item.title}</h3>
          <p>${item.summary}</p>
          <ul>
            ${item.points.map((point) => `<li>${point}</li>`).join("")}
          </ul>
          <span class="service-num">0${i + 1}</span>
        </article>
      `
    )
    .join("");

  return `
    <section class="section alt-surface" id="services">
      <div class="section-heading narrow">
        <p class="eyebrow">${content.eyebrow}</p>
        <h2>${content.title}</h2>
        <p class="section-intro">${content.intro}</p>
      </div>
      <div class="services-grid">
        ${cards}
      </div>
    </section>
  `;
}
