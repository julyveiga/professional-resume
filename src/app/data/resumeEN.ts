// English version of resume data
import type { SkillHighlightCard, SkillHighlightGroup } from "./resumePT";
export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
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
    description: [
      "Leading the creation of the <strong>Product & Design Center of Excellence (CoE)</strong> for Zé Delivery and TaDa, structured around <strong>3 pillars</strong> — Consumer Centricity, Quality Experience, and Maturity & Ops — with cross-functional work across <strong>6 operational fronts</strong>",
      "Raising Product maturity from <strong>2.70 to 4.11</strong> with a proprietary Maturity Framework focused on Foundation, People, Platform, and Practices",
      "Implementing AI-powered <strong>Ways of Working</strong>, making Upstream measurable and delivering executive views on quality and completeness",
      "Designing the <strong>Experience Quality Review</strong> process to ensure quality of Content, Design System, and Illustration before production",
      "Co-creating with the team the <strong>Content IA HUB</strong> — an AI platform for content review with brand voice — resulting in <strong>94%</strong> of adjustments before production",
      "Building the <strong>100% AI-powered Research Platform</strong> as a centralized insight repository for teams"
    ]
  },
  {
    role: "Sr. Design Ops & System Manager",
    company: "Unico IDtech",
    period: "Feb 2022 – Nov 2023",
    location: "São Paulo, Brazil",
    logo: experienceLogo('unico.png'),
    description: [
      "Built and led <strong>Design Ops</strong> at Unico from scratch, structuring cross-design workstreams that improved team consistency and efficiency. Rolled out Accessibility, Content Design, Service Design, Research Ops, and Design System at one of Brazil’s largest identity-tech companies.",
      "Structured the cross-product team and defined a Design Ops strategy aligned with business impact.",
      "Created an <strong>Experience Quality Review</strong> process with the team, ensuring interface experience quality before production.",
      "Led Design System implementation and evolution, building adoption culture and scalability.",
      "Built dashboards to measure design impact on the product, supporting operational decision-making.",
      "Drove quarterly and annual strategic planning, connecting the design vision with company goals.",
      "Implemented Accessibility practices with specialists, ensuring <strong>LGPD</strong> compliance across digital products.",
      "<strong>Stack & methods:</strong> Figma · Data Studio · Notion · Design System · Research Ops · Accessibility (WCAG) · LGPD"
    ]
  },
  {
    role: "Design Ops & System Lead",
    company: "RD (Raia Drogasil)",
    period: "Jan 2021 – Feb 2022",
    location: "São Paulo, Brazil",
    logo: experienceLogo('rd.png'),
    description: [
      "Built and led <strong>Design Ops</strong> at RD, structuring the team and core disciplines to raise design maturity at one of Brazil’s largest pharmacy retail networks.",
      "Structured and led the Design Ops team with a strategic, cross-functional mandate.",
      "Acted as PM for the <strong>Design System</strong> squad, defining evolution strategy and adoption culture.",
      "Created standards for rituals and documentation, strengthening design maturity.",
      "Reduced inconsistencies between Product and Design teams through cross-functional initiatives.",
      "<strong>Stack & methods:</strong> Figma · Design System · Service Design · Research Ops · Accessibility · LGPD"
    ]
  },
  {
    role: "CoE | Design Ops Lead & PM | Lead Design System",
    company: "Natura",
    period: "Dec 2013 – Dec 2020",
    location: "São Paulo, Brazil (6 years)",
    logo: experienceLogo('natura.png'),
    description: [
      "From <strong>Designer</strong> specializing in heuristic analysis to <strong>Design Ops</strong> leadership and <strong>Design System</strong> management at Latin America’s largest cosmetics company.",
      "<strong>Design Ops Lead & PM | Lead Design System (2018 – 2020)</strong>",
      "Coordinated Design Ops activities and acted as PO for the Design System squad.",
      "Participated actively in strategic definitions, connecting design and product.",
      "Consolidated governance and continuous evolution of the Design System as an internal reference, making it a reality for <strong>Natura, Avon, and The Body Shop</strong>.",
      "<strong>Designer — Heuristic Analysis (2015 – 2018)</strong>",
      "Responsible for heuristic analysis of digital channels and design team planning.",
      "Managed design projects with agencies and the marketing team.",
      "Supported digital campaign strategies and product launches."
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

export const summaryEN = `<p>I lead and develop initiatives with a clear purpose: <strong class="font-bold text-gray-900">turning challenges into reality</strong>!</p><p>In the four companies where I have worked — <strong class="font-bold text-gray-900">AB InBev, Unico IDtech, RD (Raia Drogasil), and Natura</strong> — I built cross-tribe teams and Product & Design ecosystems with <strong class="font-bold text-gray-900">Maturity Framework, Ways of Working, Experience Quality Review, and AI hubs</strong>, among other initiatives that turn strategy into building complex systems.</p><p>I lead people in an inspirational way while also driving hands-on execution of initiatives, applying AI to optimize flows and scale team performance.</p>`;

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
    "Global Head of Design Ops & Product Ops | Design Systems | AI-Driven Operations | Scaling Global Teams",
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
  certifications: "CERTIFICATIONS"
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
