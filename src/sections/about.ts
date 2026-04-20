import type { AboutContent } from "../data/content";

export function renderAbout(content: AboutContent): string {
  const paragraphs = content.paragraphs.map((item) => `<p>${item}</p>`).join("");
  const pillars = content.pillars.map((item) => `<li>${item}</li>`).join("");

  return `
    <section class="section section-split" id="about">
      <div class="section-heading">
        <p class="eyebrow">${content.eyebrow}</p>
        <h2>${content.title}</h2>
      </div>
      <div class="about-grid">
        <aside class="about-quote">
          <p>${content.quote}</p>
        </aside>
        <div class="about-body">
          ${paragraphs}
          <ul class="pillars">
            ${pillars}
          </ul>
        </div>
      </div>
    </section>
  `;
}
