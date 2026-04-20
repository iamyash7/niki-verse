import type { Article } from "../data/content";

type WritingContent = {
  eyebrow: string;
  title: string;
  featured: Article;
  articles: Article[];
  cta: {
    label: string;
    href: string;
  };
};

export function renderWriting(content: WritingContent): string {
  const articles = content.articles
    .map(
      (item) => `
        <a class="article-card" href="${item.href}" target="_blank" rel="noreferrer">
          <p class="card-tag">${item.category}</p>
          <h3>${item.title}</h3>
          <p>${item.summary}</p>
          <span>${item.meta}</span>
        </a>
      `
    )
    .join("");

  return `
    <section class="section alt-surface" id="writing">
      <div class="section-heading">
        <p class="eyebrow">${content.eyebrow}</p>
        <h2>${content.title}</h2>
      </div>
      <div class="writing-feature">
        <div>
          <p class="card-tag">${content.featured.category}</p>
          <h3>${content.featured.title}</h3>
          <p>${content.featured.summary}</p>
        </div>
        <a class="button button-solid" href="${content.featured.href}" target="_blank" rel="noreferrer">
          Open Featured Essay
        </a>
      </div>
      <div class="article-grid">
        ${articles}
      </div>
      <div class="section-actions">
        <a class="button button-ghost" href="${content.cta.href}" target="_blank" rel="noreferrer">${content.cta.label}</a>
      </div>
    </section>
  `;
}
