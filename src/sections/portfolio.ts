import type { PortfolioItem } from "../data/content";

type PortfolioContent = {
  eyebrow: string;
  title: string;
  intro: string;
  items: PortfolioItem[];
};

export function renderPortfolio(content: PortfolioContent): string {
  const cards = content.items
    .map(
      (item) => `
        <article class="portfolio-card">
          <p class="card-tag">${item.category}</p>
          <h3>${item.title}</h3>
          <p>${item.summary}</p>
        </article>
      `
    )
    .join("");

  return `
    <section class="section" id="portfolio">
      <div class="section-heading">
        <p class="eyebrow">${content.eyebrow}</p>
        <h2>${content.title}</h2>
        <p class="section-intro">${content.intro}</p>
      </div>
      <div class="portfolio-grid">
        ${cards}
      </div>
    </section>
  `;
}
