import type { NavItem } from "../data/content";

type FooterContent = {
  brand: string;
  copy: string;
  links: NavItem[];
};

export function renderFooter(content: FooterContent): string {
  const links = content.links
    .map((item) => `<a href="${item.href}">${item.label}</a>`)
    .join("");

  return `
    <footer class="site-footer">
      <a class="brand" href="#top">${content.brand}</a>
      <p>${content.copy}</p>
      <nav class="footer-links" aria-label="Footer">
        ${links}
      </nav>
    </footer>
  `;
}
