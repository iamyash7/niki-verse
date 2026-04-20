import "./styles/main.css";
import { siteContent } from "./data/content";
import { renderAbout } from "./sections/about";
import { renderContact } from "./sections/contact";
import { renderFooter } from "./sections/footer";
import { renderHero } from "./sections/hero";
import { renderNav } from "./sections/nav";
import { renderPortfolio } from "./sections/portfolio";
import { renderServices } from "./sections/services";
import { renderTestimonials } from "./sections/testimonials";
import { renderWriting } from "./sections/writing";
import { setupInteractions } from "./utils/interactions";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("App root not found");
}

app.innerHTML = `
  ${renderNav(siteContent.navigation)}
  <main>
    ${renderHero(siteContent.hero)}
    ${renderAbout(siteContent.about)}
    ${renderServices(siteContent.services)}
    ${renderPortfolio(siteContent.portfolio)}
    ${renderWriting(siteContent.writing)}
    ${renderTestimonials(siteContent.testimonials)}
    ${renderContact(siteContent.contact)}
  </main>
  ${renderFooter(siteContent.footer)}
`;

setupInteractions();
