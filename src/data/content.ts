export type NavItem = {
  label: string;
  href: string;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  emphasis: string;
  description: string;
  primaryCta: NavItem;
  secondaryCta: NavItem;
  highlights: string[];
  spotlight: {
    label: string;
    title: string;
    detail: string;
  }[];
};

export type AboutContent = {
  eyebrow: string;
  title: string;
  quote: string;
  paragraphs: string[];
  pillars: string[];
};

export type Service = {
  title: string;
  summary: string;
  points: string[];
};

export type PortfolioItem = {
  category: string;
  title: string;
  summary: string;
};

export type Article = {
  category: string;
  title: string;
  summary: string;
  meta: string;
  href: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export type ContactLink = {
  label: string;
  href: string;
};

export const siteContent = {
  navigation: {
    brand: "Nikiverse",
    items: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Work", href: "#portfolio" },
      { label: "Writing", href: "#writing" },
      { label: "Testimonials", href: "#testimonials" }
    ] satisfies NavItem[],
    cta: { label: "Start a Conversation", href: "#contact" } satisfies NavItem
  },
  hero: {
    eyebrow: "Brand strategy, performance marketing, stagecraft & learning design",
    title: "I shape stories that people can feel, trust, and remember.",
    emphasis: "For brands, rooms, and classrooms.",
    description:
      "I bring together marketing strategy, performance marketing, event anchoring, and curriculum design to create experiences that feel polished on the surface and thoughtful underneath.",
    primaryCta: { label: "View Services", href: "#services" },
    secondaryCta: { label: "Contact Nikita", href: "#contact" },
    highlights: [
      "Brand strategy with a strong editorial eye",
      "Performance marketing that turns ad spend into measurable, scalable returns",
      "Confident hosting for corporate and public-facing events",
      "Education frameworks designed for real learning outcomes"
    ],
    spotlight: [
      {
        label: "Strategy",
        title: "Clear positioning, sharper messaging",
        detail:
          "Helping brands move from scattered communication to a voice that feels consistent and commercially useful."
      },
      {
        label: "Performance",
        title: "Paid media that earns its budget",
        detail:
          "Running Google, Meta and LinkedIn campaigns with a focus on measurable returns, not just reach."
      },
      {
        label: "Stage",
        title: "Warm, composed event presence",
        detail:
          "Anchoring formats that keep audiences engaged without making the event feel rehearsed or stiff."
      }
    ]
  } satisfies HeroContent,
  about: {
    eyebrow: "About",
    title: "A multi-disciplinary portfolio built around clarity, confidence, and connection.",
    quote:
      "The thread across all my work is simple: make the message land, and make the experience feel human.",
    paragraphs: [
      "This portfolio started as a one-page file packed with good intent but very little structure. The rebuilt version reflects the actual practice more honestly: strategy, performance marketing, facilitation, and storytelling working together instead of competing for attention.",
      "Whether the brief is a brand launch, a paid campaign, a live event, or a learning experience, the job stays the same. Listen closely, shape the narrative carefully, and deliver something that feels both elegant and useful."
    ],
    pillars: [
      "Content strategist",
      "Corporate hosting",
      "Workshop facilitation",
      "Curriculum design",
      "Brand storytelling",
      "Performance marketing",
      "Google/Meta Ads",
      "LinkedIn Ads"
    ]
  } satisfies AboutContent,
  services: {
    eyebrow: "Services",
    title: "What Nikita can help you build",
    intro:
      "Each service line is distinct, but they all rely on the same strengths: strong language, audience awareness, and structure that holds up under pressure.",
    items: [
      {
        title: "Brand Strategy",
        summary:
          "Positioning, messaging, and communication systems for brands that need more than nice visuals.",
        points: [
          "Messaging direction and brand voice",
          "Campaign narratives and content thinking",
          "Communication clean-up for growing teams"
        ]
      },
      {
        title: "Performance Marketing",
        summary:
          "Paid media strategy and execution across Google, Meta, and LinkedIn — built around results, not just reach.",
        points: [
          "Google Ads: Search, Display & YouTube campaigns",
          "Meta & LinkedIn Ads: targeting, creative, and optimisation",
          "Funnel strategy, budget allocation, and ROAS tracking"
        ]
      },
      {
        title: "Corporate Anchoring",
        summary:
          "Event hosting that keeps the room steady, energized, and aligned with the occasion.",
        points: [
          "Corporate events and moderated sessions",
          "Award nights, launches, and panels",
          "Stage scripting and speaker flow support"
        ]
      },
      {
        title: "Learning Design",
        summary:
          "Curriculum and workshop design for communication, English, and professional development.",
        points: [
          "Curriculum architecture and outcomes",
          "Workshop design for institutions and teams",
          "Facilitation with practical learner takeaways"
        ]
      }
    ] satisfies Service[]
  },
  portfolio: {
    eyebrow: "Selected Work",
    title: "Work areas that define the portfolio",
    intro:
      "Some project details remain private, so this section focuses on the kind of work delivered rather than overclaiming with inflated metrics.",
    items: [
      {
        category: "Brand",
        title: "Marketing communication systems",
        summary:
          "Refining positioning and content structure so brands stop sounding fragmented across campaigns, decks, and digital touchpoints."
      },
      {
        category: "Performance Marketing",
        title: "Paid media campaigns across Google, Meta & LinkedIn",
        summary:
          "Managing full-funnel ad strategies that connect the right message to the right audience — with budgets held accountable to real returns."
      },
      {
        category: "Events",
        title: "Corporate hosting and moderated sessions",
        summary:
          "Creating a grounded on-stage presence that supports the agenda, protects the flow, and keeps audiences involved."
      },
      {
        category: "Education",
        title: "English and communication curriculum design",
        summary:
          "Building course structures and classroom material that prioritize confidence, adoption, and measurable learning outcomes."
      },
      {
        category: "Workshops",
        title: "Personality development and professional sessions",
        summary:
          "Designing sessions that feel warm and usable, with frameworks people can still apply after the event is over."
      }
    ] satisfies PortfolioItem[]
  },
  writing: {
    eyebrow: "Writing",
    title: "Essays and reflections that extend the strategic work",
    featured: {
      category: "Mindset and Communication",
      title: "Anxiety as a performance asset",
      summary:
        "A reflection on using pressure as signal instead of treating it only as an obstacle, shaped by first-hand stage experience.",
      meta: "Featured essay",
      href: "https://medium.com/@nikitauttamchandani65/oh-i-feel-anxious-as-i-am-approaching-my-thirties-why-would-i-not-take-the-front-seat-in-your-ccc902522e8c"
    },
    articles: [
      {
        category: "Brand Strategy",
        title: "What storytelling can teach your content strategy",
        summary:
          "Narrative patterns outlast platform trends, which makes them more useful than reactive content planning alone.",
        meta: "Medium article",
        href: "https://medium.com/@nikitauttamchandani65"
      },
      {
        category: "Brand Building",
        title: "Your logo is not your brand",
        summary:
          "A reminder that identity systems are only valuable when the strategy underneath them is coherent.",
        meta: "Medium article",
        href: "https://medium.com/@nikitauttamchandani65"
      },
      {
        category: "Education",
        title: "Outcomes over coverage",
        summary:
          "Why effective learning design depends more on pedagogy and structure than on textbook volume.",
        meta: "Medium article",
        href: "https://medium.com/@nikitauttamchandani65"
      }
    ] satisfies Article[],
    cta: {
      label: "Read on Medium",
      href: "https://medium.com/@nikitauttamchandani65"
    }
  },
  testimonials: {
    eyebrow: "Testimonials",
    title: "What collaborators remember most",
    items: [
      {
        quote:
          "Nikita brought structure and clarity to our communication from day one. She understood the larger strategy without missing the details that made execution work.",
        author: "Senior Marketing Director",
        role: "Real estate firm, Ahmedabad"
      },
      {
        quote:
          "She held the room with calm authority and kept the energy exactly where it needed to be. The event felt more polished because she was in it.",
        author: "Events Director",
        role: "Corporate engagement partner"
      },
      {
        quote:
          "Her workshop delivery is warm, practical, and immediately useful. People leave with ideas they can actually apply the next day.",
        author: "Workshop Participant",
        role: "Professional development programme"
      }
    ] satisfies Testimonial[]
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's make the next brief more intentional.",
    intro:
      "For brand strategy, performance marketing, event hosting, workshops, or curriculum conversations, reach out with a short outline of what you need and the context around it.",
    email: "nikitauttamchaani65@gmail.com",
    links: [
      {
        label: "Instagram",
        href: "https://instagram.com/nikitauttamchandani?igsh=amliY3FvajVlNm55"
      },
      {
        label: "YouTube",
        href: "https://www.youtube.com/@learnifyme7976"
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/nikita-uttamchandani-a299ab158/"
      },
      {
        label: "Medium",
        href: "https://medium.com/@nikitauttamchandani65"
      },
      {
        label: "Threads",
        href: "https://www.threads.com/@nikitauttamchandani"
      },
      {
        label: "StoryMirror",
        href: "https://storymirror.com/profile/r264lywg/nikita-uttamchandani/stories"
      }
    ] satisfies ContactLink[]
  },
  footer: {
    brand: "Nikiverse",
    copy: `© ${new Date().getFullYear()} Nikita Uttamchandani. All rights reserved.`,
    links: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Work", href: "#portfolio" },
      { label: "Writing", href: "#writing" },
      { label: "Contact", href: "#contact" }
    ] satisfies NavItem[]
  }
};
