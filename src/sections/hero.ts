import portrait from "../assets/nikita.webp";
import type { HeroContent } from "../data/content";

export function renderHero(content: HeroContent): string {
  const highlights = content.highlights
    .map((item) => `<li>${item}</li>`)
    .join("");

  const cards = content.spotlight
    .map(
      (item) => `
        <article class="spotlight-card">
          <p class="spotlight-label">${item.label}</p>
          <h3>${item.title}</h3>
          <p>${item.detail}</p>
        </article>
      `
    )
    .join("");

  return `
    <section class="hero section" id="top">
      <div class="hero-copy">
        <p class="eyebrow">${content.eyebrow}</p>
        <h1>${content.title}</h1>
        <p class="hero-emphasis">${content.emphasis}</p>
        <p class="hero-description">${content.description}</p>
        <div class="hero-actions">
          <a class="button button-solid" href="${content.primaryCta.href}">${content.primaryCta.label}</a>
          <a class="button button-ghost" href="${content.secondaryCta.href}">${content.secondaryCta.label}</a>
        </div>
        <ul class="hero-highlights">
          ${highlights}
        </ul>
      </div>
      <div class="hero-visual" aria-label="Portfolio focus areas">
        <div class="hero-bg-circle hero-bg-circle-1"></div>
        <div class="hero-bg-circle hero-bg-circle-2"></div>
        <div class="hero-frame">
          <div class="hero-portrait-wrap">
            <img class="hero-portrait" src="${portrait}" alt="Portrait of Nikita Uttamchandani" />
            <div class="hero-stamp">
              <span>Ahmedabad, India</span>
            </div>
          </div>
          <div class="hero-panel">
            ${cards}
          </div>
        </div>
      </div>
    </section>
  `;
}
