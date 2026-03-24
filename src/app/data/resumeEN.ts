// English version of resume data
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

export const experiencesEN: Experience[] = [
  {
    role: "Sr. Global Head CoE — Center of Excellence (Product & Design)",
    company: "AB InBev",
    period: "Nov 2023 – present",
    location: "São Paulo, Brazil",
    description: [
      "Leads the <strong>Product & Design Center of Excellence</strong> for the Zé Delivery and TaDa brands, structured around <strong>3 strategic pillars</strong>: Consumer Centricity, Quality Experience, and Maturity & Ops. Works cross-functionally with the <strong>DTC (Direct to Consumer)</strong> organization, connecting governance, expertise, and innovation to scale delivery with consistency and global excellence.",
      "Defined and implemented the CoE operating model, including frameworks, playbooks, and global rituals adopted across the Product & Design leadership.",
      "Leads upskilling, mentoring, and culture initiatives focused on data- and AI-driven practices for design and product teams.",
      "Acts as a strategic bridge between business leadership and execution teams, aligning OKRs and delivery consistency.",
      "Built an experience governance and quality system applied across multiple products and markets.",
      "Introduced generative AI practices into design and research workflows, accelerating discovery and prototyping cycles."
    ]
  },
  {
    role: "Sr. Design Ops & System Manager",
    company: "Unico IDtech",
    period: "Feb 2022 – Nov 2023",
    location: "São Paulo, Brazil",
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
    period: "Jan 2015 – Dec 2020",
    location: "São Paulo, Brazil (6 years)",
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
    role: "Digital Projects Consultant",
    company: "Concrete Solutions / Natura",
    period: "Dec 2013 – Jan 2015",
    location: "São Paulo, Brazil",
    description: [
      "Consulting on digital marketing projects."
    ]
  },
  {
    role: "Design Lead",
    company: "Agência Pipeline",
    period: "Jan 2013 – Dec 2013",
    location: "São Paulo, Brazil",
    description: [
      "Led digital projects, team management, and creative direction."
    ]
  },
  {
    role: "Design Lead & Web Designer",
    company: "Iguana Sports",
    period: "Nov 2011 – Jan 2013",
    location: "São Paulo, Brazil",
    description: [
      "Information architecture, interface design, and digital project planning for the company’s sports portal ecosystem."
    ]
  },
  {
    role: "Digital Projects Manager & Web Analyst",
    company: "Vivo (Telefônica Brasil)",
    period: "Dec 1998 – Jan 2011",
    location: "São Paulo, Brazil",
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

export const summaryEN = `<p>Throughout my career I have led initiatives with a clear purpose: <strong class="font-bold text-gray-900">turning challenges into reality</strong>. In the four companies where I have worked — <strong class="font-bold text-gray-900">AB InBev, Unico IDtech, RD (Raia Drogasil), and Natura</strong> — I built cross-tribe teams and Product & Design ecosystems with <strong class="font-bold text-gray-900">Maturity Framework, Ways of Working, Experience Quality Review, and AI hubs</strong>, connecting business strategy to execution and raising delivery quality in measurable ways. I combine <strong class="font-bold text-gray-900">people leadership</strong> with <strong class="font-bold text-gray-900">hands-on execution</strong>, using AI to optimize flows and scale team performance — passionate about building what does not yet exist and turning it into real results.</p>`;

export const achievementsEN = `<ul class="list-disc pl-4 space-y-1 marker:text-red-300">
<li>Built Product and Design operations / CoE (Centers of Excellence) teams from scratch at four major companies (AB InBev, Unico IDtech, RD, and Natura), enabling consistent scaling of squads and tribes</li>
<li>Led initiatives that raised Product maturity from 2.70 to 4.11 and Design from 2.40 to 4.10 — a strategic, incentivized metric</li>
<li>Led teams that built Design Systems used in production, with adoption growth of up to <strong class="font-bold text-gray-900">249%</strong> in interfaces</li>
<li>Implemented Experience Quality Review at two companies so that <strong class="font-bold text-gray-900">94%</strong> of experience issues were caught before QA, protecting brand consistency and voice</li>
<li>With the Visual Illustration specialist, evolved illustration from tactical to strategic work, making it a brand asset aligned with company DNA</li>
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
