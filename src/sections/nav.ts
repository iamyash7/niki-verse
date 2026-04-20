import type { NavItem } from "../data/content";

type NavigationContent = {
  brand: string;
  items: NavItem[];
  cta: NavItem;
};

export function renderNav(content: NavigationContent): string {
  const links = content.items
    .map((item) => `<a href="${item.href}">${item.label}</a>`)
    .join("");

  return `
    <header class="site-header" data-header>
      <a class="brand" href="#top" aria-label="${content.brand} home">${content.brand}</a>
      <nav class="site-nav" aria-label="Primary">
        ${links}
      </nav>
      <a class="button button-solid header-cta" href="${content.cta.href}">${content.cta.label}</a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-label="Open menu" data-menu-toggle>
        <span></span>
        <span></span>
      </button>
      <div class="mobile-panel" data-mobile-panel>
        ${links}
        <a class="button button-solid mobile-cta" href="${content.cta.href}">${content.cta.label}</a>
      </div>
    </header>
  `;
}
