// English version of resume data
import type { SkillHighlightCard, SkillHighlightGroup } from "./resumePT";
export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  intro?: string;
  description: string[];
  logo?: string;
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  location: string;
  logo?: string;
}

export interface SkillCategory {
  title: string;
  skills: string;
}

export interface Publication {
  title: string;
  date?: string;
  link?: string;
  description?: string;
  journal?: string;
  authors?: string;
}

export interface Certification {
  title: string;
  institution?: string;
  date?: string;
  credentialId?: string;
  link?: string;
  logo?: string;
}

const experienceLogo = (file: string) => `${import.meta.env.BASE_URL}logos/${file}`;

export const experiencesEN: Experience[] = [
  {
    role: "Sr. Global Head CoE — Center of Excellence (Product & Design)",
    company: "AB InBev",
    period: "Nov 2023 – present",
    location: "São Paulo, Brazil",
    logo: experienceLogo('ab-inbev.png'),
    intro:
      "I led the creation and global expansion of the Product & Design Center of Excellence for Zé Delivery and TaDa, establishing a scalable operating model that connects strategy, execution, and experience quality.",
    description: [
      "I structured the CoE from scratch, based on the pillars Consumer Centricity, Quality Experience, and Maturity & Ops",
      "I raised Product maturity from 2.7 to 4.11 through a proprietary Maturity Framework",
      "I designed and implemented Ways of Working with AI, making upstream measurable with executive visibility",
      "I created the Experience Quality Review framework, resolving 94% of issues before production",
      "I led the creation of AI hubs (Content and Visual), ensuring interface consistency aligned with the brand",
      "I developed an AI-powered research platform, centralizing insights for teams",
      "I acted as a strategic partner to leadership, influencing decisions at a global level"
    ]
  },
  {
    role: "Sr. Design Ops & System Manager",
    company: "Unico IDtech",
    period: "Feb 2022 – Nov 2023",
    location: "São Paulo, Brazil",
    logo: experienceLogo('unico.png'),
    intro:
      "I structured and scaled the Design Operations function at one of Brazil’s leading identity-tech companies, driving consistency, efficiency, and maturity.",
    description: [
      "I structured the Design Ops team and its cross-tribe scope",
      "I implemented disciplines such as Accessibility, Content Design, Service Design, Research Ops, and Design System",
      "I introduced the Experience Quality Review process to raise pre-production quality",
      "I led the evolution and adoption of the Design System",
      "I developed design performance dashboards to support decision-making"
    ]
  },
  {
    role: "Design Ops & System Lead",
    company: "RD (Raia Drogasil)",
    period: "Jan 2021 – Feb 2022",
    location: "São Paulo, Brazil",
    logo: experienceLogo('rd.png'),
    intro:
      "I led the creation of the Design Operations area and the structuring of governance at one of the country’s largest retail companies.",
    description: [
      "I structured and led the Design Ops team",
      "I also acted as Product Manager for the Design System squad",
      "I standardized rituals, processes, and documentation as a reference for the tribes",
      "I reduced inconsistencies between Product and Design through cross-functional initiatives"
    ]
  },
  {
    role: "CoE | Design Ops Lead & PM | Lead Design System",
    company: "Natura",
    period: "Dec 2013 – Dec 2020",
    location: "São Paulo, Brazil (6 years)",
    logo: experienceLogo('natura.png'),
    intro:
      "I worked on the evolution and scaling of Design Operations and Design Systems for Natura, Avon, and The Body Shop.",
    description: [
      "I led Design Ops and Design System governance across multiple brands",
      "I acted as Product Owner for the Design System squad",
      "I structured governance models and continuous evolution",
      "I conducted heuristic analyses and supported digital strategies"
    ]
  },
  {
    role: "Design Lead",
    company: "Agência Pipeline",
    period: "Jan 2013 – Dec 2013",
    location: "São Paulo, Brazil",
    logo: experienceLogo('pipeline.png'),
    description: [
      "Led digital projects, team management, and creative direction."
    ]
  },
  {
    role: "Design Lead & Web Designer",
    company: "Iguana Sports",
    period: "Nov 2011 – Jan 2013",
    location: "São Paulo, Brazil",
    logo: experienceLogo('iguana.png'),
    description: [
      "Information architecture, interface design, and digital project planning for the company’s sports portal ecosystem."
    ]
  },
  {
    role: "Digital Projects Manager & Web Analyst",
    company: "Vivo (Telefônica Brasil)",
    period: "Dec 1998 – Jan 2011",
    location: "São Paulo, Brazil",
    logo: experienceLogo('vivo.png'),
    description: [
      "12 years managing digital channel projects, implementing corporate tools (CMS, SEO, metrics), and information architecture for corporate portals."
    ]
  }
];

export const educationEN: Education[] = [
  {
    degree: "Postgraduate — Interactive Media",
    school: "UniverCidade",
    period: "2005 – 2007",
    location: "Brazil"
  },
  {
    degree: "Bachelor’s — Technology in Creation and Management of Internet Environments",
    school: "Universidade Estácio de Sá",
    period: "2003",
    location: "Brazil"
  }
];

export const skillCategoriesEN: SkillCategory[] = [
  {
    title: "Technical skills",
    skills:
      "Design Ops · Product Ops · Design Systems · UX Research · Research Ops · Content Design · Accessibility (WCAG) · LGPD · OKRs · Maturity Framework · Ways of Working · Experience Quality Review · Stakeholder Management · Operational frameworks · Rituals & governance · Data-driven design · Generative AI for Design & Product · Custom GPT · Cross-functional leadership · Figma · Notion · Jira · Data Studio · Miro"
  },
  {
    title: "Languages",
    skills: "Portuguese (native) · English (professional working proficiency)"
  }
];

export const publicationsEN: Publication[] = [];

export const certificationsEN: Certification[] = [
  { title: "High-Performance Design System Bootcamp" },
  { title: "Data Studio: Experience Metrics" },
  { title: "UX Design Program" },
  { title: "Nonviolent Communication (NVC)" }
];

export const summaryEN = `<p>I lead the construction of complex ecosystems that connect business strategy to execution, driving measurable impact on product maturity, experience quality, and team performance at global companies such as AB InBev, Unico, RD, and Natura.</p><p>I turn complex problems into scalable systems by structuring operations, applying AI, and driving organizational evolution.</p><p>I combine inspirational leadership with direct execution, using AI to optimize flows and amplify results.</p>`;

export const achievementsEN = `<ul class="list-disc pl-4 space-y-1 marker:text-red-300">
<li>Built Product and Design operations / CoE (Centers of Excellence) teams from scratch at four major companies (AB InBev, Unico IDtech, RD, and Natura)</li>
<li>Led initiatives that raised Product maturity from 2.70 to 4.11 in Product &amp; Design (strategic metric and area bonus)</li>
<li>Led teams that built Design Systems used in production, with adoption growth of up to <strong class="font-bold text-gray-900">249%</strong> in interfaces</li>
<li>Designed an Experience Quality Review process at two companies, ensuring <strong class="font-bold text-gray-900">94%</strong> of experience issues were identified before production, protecting brand consistency and voice</li>
<li>Strategic orchestration with leadership, helping visual assets become part of company DNA (Raia &amp; Drogasil / Zé Delivery)</li>
</ul>`;

export const footerNoteEN = "Final version approved March 2026.";

export const headerEN = {
  name: "Juliana Veiga",
  title:
    "Leader in Product & Design | AI-Driven | Scaling Organizations | Operations | Manager | Specialist",
  email: "julianavmveiga@gmail.com",
  linkedin: "https://www.linkedin.com/in/juveiga/",
  github: "",
  portfolio: "",
  location: "São Paulo, Brazil"
};

export const sectionsEN = {
  experience: "PROFESSIONAL EXPERIENCE",
  summary: "EXECUTIVE SUMMARY",
  achievements: "KEY ACHIEVEMENTS",
  skills: "SKILLS",
  education: "EDUCATION",
  publications: "PUBLICATIONS",
  certifications: "KEY CERTIFICATIONS"
};

export const skillHighlightsEN: SkillHighlightGroup[] = [
  {
    cards: [
      {
        source: "SECTION IA",
        title: "AI certifications",
        logo: "logos/certifications/section-ia.png",
      },
      {
        source: "Creative Builders",
        title: "Figma MCP to Cursor AI",
        logo: "logos/certifications/creative-builders.png",
      },
      {
        source: "Conquer",
        title: "Emotional intelligence",
        logo: "logos/certifications/conquer.png",
      },
    ],
  },
  {
    cards: [
      {
        source: "Conquer",
        title: "High performance",
        logo: "logos/certifications/conquer.png",
      },
      {
        source: "EBAC",
        title: "Leadership skills",
        logo: "logos/certifications/ebac.png",
      },
      {
        source: "Echos Desirable Futures",
        title: "Business design",
        logo: "logos/certifications/echos.png",
      },
    ],
  },
];
