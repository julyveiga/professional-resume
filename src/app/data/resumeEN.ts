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
  institution: string;
  date: string;
  credentialId?: string;
  link?: string;
  logo?: string;
}

// Import icons
import fgvIcon from '@/assets/icon_educ_fgv.jpeg';
import ufmgIcon from '@/assets/icon_educ_ufmg.jpeg';
import stanfordEduIcon from '@/assets/icon_educ_stanford.png';
import leWagonIcon from '@/assets/icon_educ_le_wagon.jpeg';
import googleIcon from '@/assets/icon_cert_google.png';
import michiganIcon from '@/assets/icon_cert_michigan.jpeg';
import uspIcon from '@/assets/icon_cert_usp.png';
import statisticalHorizonsIcon from '@/assets/icon_cert_statistical_horizons.png';
import centerStatIcon from '@/assets/icon_cert_center_stat.png';
import figmaIcon from '@/assets/icon_cert_figma.png';
import aiCreativeBuildersIcon from '@/assets/icon_cert_ai_creative_builders.png';

export const experiencesEN: Experience[] = [
  {
    role: "Global Head Sr. CoE — Center of Excellence (Product & Design)",
    company: "AB InBev",
    period: "Nov 2023 – Mar 2026",
    location: "São Paulo, Brazil",
    description: [
      "Led the creation and leadership of the <strong>Product & Design Center of Excellence</strong> for the Zé Delivery and TaDa brands—an organizational structure that centralizes knowledge, governance, and scalable practices for the entire DTC organization. The CoE acted as a strategic enabler with direct impact on consumer experience quality and team operational maturity.",
      "Architected the CoE operating model with <strong>3 strategic pillars</strong> — Consumer Centricity, Quality Experience, and Maturity & Ops — and <strong>6 operational workstreams</strong>: Program & Portfolio, Product Insights, Service Design Cross, Content Experience, Design System & Illustration, and Experience Cross.",
      "Implemented a proprietary <strong>Maturity Framework</strong> that raised Product maturity from 2.70 (2023) to 4.11 (2025) and Design from 2.40 to 4.10 — a two-level improvement over two years, focused on four pillars: Foundation, People, Platform, and Practices.",
      "Created a cross-functional <strong>Ways of Working (WoW)</strong> model with automated upstream workflows in Jira: standardized discovery tasks with a GPT Assistant, enabling 8 simultaneous tasks in under 2 minutes and unlocking real productivity and quality metrics.",
      "Deployed the <strong>Experience 10 Stars</strong> framework with four integrated quality tracks — AI Quality Assistant, Design Critique, Quality Gates, and Experience Quality Review — covering ideation through handoff with defined criteria and scores.",
      "Led <strong>Design System</strong> governance, driving a 249% increase in component usage in interfaces, 27 components ready in design, and +29 coded in production for Seller and TaDa; implemented an AI-powered adoption dashboard for continuous measurement.",
      "Built the <strong>Content IA HUB</strong> — an AI platform that empowers Product, CRM, and agencies to review content with brand voice; 147 flows analyzed at the Content Gate with 94% adjusted and consistent.",
      "Created <strong>10 custom GPTs</strong> for the team covering: Product & Design Assistant, Research (Questionnaire Reviewer, Sample Size Calculator, Objective Definition, Methodology Consultant), Quarter Papers, Initiative, Decision Document, and Meeting Genie.",
      "Structured a <strong>Consumer Centricity</strong> platform centralizing 25+ strategic studies on the Zé Platform Research & Insights.",
      "Developed the <strong>DTC Health Check</strong> — an intelligent AI platform that turns raw data from monthly organizational health surveys into interactive dashboards and leadership insights.",
      "<strong>Stack & methods:</strong> Figma · Notion · Jira · OKRs · Design Ops · Product Ops · Design System · Ways of Working · Experience Quality Review · Maturity Framework · GPT/AI · Stakeholder Management · Data Studio"
    ]
  },
  {
    role: "Sr. Design Ops & System Manager",
    company: "Unico IDtech",
    period: "Feb 2022 – Nov 2023",
    location: "São Paulo, Brazil",
    description: [
      "Built Unico's <strong>Design Ops</strong> function from scratch, structuring cross-design workstreams that improved team consistency and efficiency. Led the rollout of Accessibility, Content Design, Service Design, Research Ops, and Design System at one of Brazil's largest identity-tech companies.",
      "Structured the cross-product team and defined a Design Ops strategy aligned with business impact.",
      "Led Design System implementation and evolution, building an adoption culture and ensuring scalability.",
      "Created dashboards to measure design impact on the product, making the practice <strong>data-informed</strong>.",
      "Drove quarterly and annual strategic planning, connecting the design vision with company goals.",
      "Implemented <strong>Accessibility (WCAG)</strong> practices and <strong>LGPD</strong> compliance across digital products.",
      "<strong>Stack & methods:</strong> Figma · Data Studio · Notion · Design System · Research Ops · Accessibility (WCAG) · LGPD"
    ]
  },
  {
    role: "Design Ops & System Lead",
    company: "RD (Raia Drogasil)",
    period: "Jan 2021 – Feb 2022",
    location: "São Paulo, Brazil",
    description: [
      "Pioneered the <strong>Design Ops</strong> function at RD, structuring the team and consolidating core disciplines to raise design maturity at one of Latin America's largest pharmacy retail networks.",
      "Structured and led the Design Ops team with a strategic, cross-functional mandate.",
      "Led the <strong>Design System</strong> squad, defining the evolution strategy and adoption culture.",
      "Created standards for rituals and documentation, strengthening design maturity.",
      "Reduced inconsistencies between product and design teams through cross-functional initiatives.",
      "<strong>Stack & methods:</strong> Figma · Design System · Service Design · Research Ops · Accessibility · LGPD"
    ]
  },
  {
    role: "CoE | Design Ops Lead & PM | Lead Design System",
    company: "Natura",
    period: "Jan 2015 – Dec 2020",
    location: "São Paulo, Brazil (6 years)",
    description: [
      "A consistent growth path from <strong>Designer</strong> specializing in heuristic analysis to <strong>Design Ops</strong> leadership and <strong>Design System</strong> management at Latin America's largest cosmetics company.",
      "<strong>Design Ops Lead & PM | Lead Design System (2018 – 2020)</strong>",
      "Coordinated Design Ops activities and acted as PO for the Design System squad.",
      "Participated in strategic area definitions, connecting design and product.",
      "Consolidated governance and continuous evolution of the Design System as an internal reference.",
      "<strong>Designer — Heuristic Analysis (2015 – 2018)</strong>",
      "Responsible for heuristic analysis of digital channels and design team planning.",
      "Managed design projects with agencies and the marketing team.",
      "Supported digital campaign strategies and product launches."
    ]
  }
];

export const educationEN: Education[] = [
  {
    degree: "Bootcamp Data Science",
    school: "Le Wagon",
    period: "01/2025 - 03/2025",
    location: "São Paulo, Brazil",
    logo: leWagonIcon
  },
  {
    degree: "Ph.D. Economics of Education",
    school: "Stanford University",
    period: "09/2012 - 04/2018",
    location: "Stanford, United States",
    logo: stanfordEduIcon
  },
  {
    degree: "M.A. Economics",
    school: "Universidade Federal de Minas Gerais",
    period: "01/2010 - 04/2012",
    location: "Belo Horizonte, Brazil",
    logo: ufmgIcon
  },
  {
    degree: "B.A. Economics",
    school: "FGV",
    period: "01/2006 - 12/2009",
    location: "São Paulo, Brazil",
    logo: fgvIcon
  }
];

export const skillCategoriesEN: SkillCategory[] = [
  {
    title: "Programming",
    skills: "Python, SQL, R, Stata, LaTeX, MPLUS"
  },
  {
    title: "Data Tools",
    skills: "Pandas, NumPy, Statsmodels, APIs, BeautifulSoup, Streamlit"
  },
  {
    title: "Machine Learning & AI",
    skills: "Scikit-Learn, TensorFlow, Keras, Hugging Face, LangChain, A/B Testing"
  },
  {
    title: "Cloud & Deployment",
    skills: "Google Cloud Platform, Docker, MLflow, Prefect"
  },
  {
    title: "Soft Skills",
    skills: "Analytical and critical thinking, proactive problem-solving, cross-cultural collaboration, data storytelling, leadership, adaptability"
  },
  {
    title: "Language",
    skills: "English (fluent), Portuguese (native), Spanish (advanced), French (basic)"
  }
];

export const publicationsEN: Publication[] = [
  {
    title: "Amooora's Connection Algorithm",
    date: "03/2025",
    link: "https://amooora.streamlit.app/",
    description: "Developed a matchmaking algorithm in Python for LGBTQ+ women, utilizing machine learning and deep learning techniques (clustering with Word2Vec, topic modeling with BERTopic, embeddings with CNN) to generate inclusive, data-driven connection recommendations (<a href='https://github.com/ninamcunha/amooora' target='_blank' rel='noopener noreferrer' class='text-orange-600 hover:text-orange-700'>link to GitHub repository</a>)."
  },
  {
    title: "Are the effects of informational interventions driven by salience?",
    journal: "American Economic Journal: Economic Policy",
    authors: "Berlinger, E., Cunha, N. M., Lischard, G., Madeira, R.",
    date: "2024",
    link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3644124",
    description: "Also published on the <a href='https://blogs.worldbank.org/en/impactevaluations/attention-or-information-why-telling-nina-s-parents-she-missed-school-makes-her-better-student-guest' target='_blank' rel='noopener noreferrer' class='text-orange-600 hover:text-orange-700'>World Bank Development Impact Blog</a>."
  },
  {
    title: "The effects of adding social-emotional learning to a comprehensive education intervention in El Salvador on teacher well-being: a mixed methods evaluation",
    journal: "Educational Research and Evaluation",
    authors: "Soares, F., Cunha, N.M",
    date: "2024",
    link: "https://www.tandfonline.com/doi/abs/10.1080/13803611.2024.2339830"
  },
  {
    title: "Development of a new tool for international youth programs: The YouthPower Action Youth Soft Skills Assessment (YAYSSA)",
    journal: "European Journal of Psychological Assessment",
    authors: "Ormaco, G., Cunha, N. M., Kyllonen, P., Gates, S., Manrique, A., & Burke, H. M",
    date: "2023",
    link: "https://econtent.hogrefe.com/doi/10.1027/1015-5759/a000770"
  },
  {
    title: "Cross-Country Comparability of a Social-Emotional Skills Assessment Designed for Youth in Low-Resource Environments",
    journal: "International Journal of Testing",
    authors: "Cunha N.M., Martinez A., Kyllonen P., Gates S.",
    date: "2021",
    link: "https://www.tandfonline.com/eprint/3FNYG6RDVQBCP9QAHDN6/full?target=10.1080/15305058.2021.1995867"
  },
  {
    title: "How do we know if teachers are well? The wellbeing holistic assessment for teachers tool",
    journal: "Journal on Education in Emergencies",
    authors: "Soares, F., Cunha, N. M., Prissll, P.",
    date: "2021",
    link: "https://archive.nyu.edu/bitstream/2451/63540/2/JEiE_Vol7No2_The-Wellbeing-Holistic-Assessment-for-Teachers_December2021.pdf"
  },
  {
    title: "Through the looking glass: can classroom observation and coaching improve teacher performance in Brazil?",
    journal: "Economics of Education Review",
    authors: "Bruns, B., Costa, L., Cunha, N. M",
    date: "2018",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0272775717303576"
  }
];

export const certificationsEN: Certification[] = [
  {
    title: "From Figma MCP to Cursor AI",
    institution: "AI Creative Builders",
    date: "01/2026",
    logo: aiCreativeBuildersIcon
  },
  {
    title: "Google Advanced Data Analytics Professional Certificate",
    institution: "Google",
    date: "12/2024",
    credentialId: "98C47QKOL H8A",
    link: "Via Coursera | Certificate Link",
    logo: googleIcon
  },
  {
    title: "Applied Machine Learning in Python",
    institution: "University of Michigan",
    date: "10/2023",
    credentialId: "D8NC5S5AKSZ Q",
    link: "Via Coursera | Certificate Link",
    logo: michiganIcon
  },
  {
    title: "Introduction to Computer Science with Python Part II",
    institution: "USP - University of São Paulo",
    date: "10/2023",
    credentialId: "T6DRTCPBAMD D",
    link: "Via Coursera | Certificate Link",
    logo: uspIcon
  },
  {
    title: "Applied Plotting, Charting & Data Representation in Python",
    institution: "University of Michigan",
    date: "09/2023",
    credentialId: "D8NC5S5AKSZ Q",
    link: "Via Coursera | Certificate Link",
    logo: michiganIcon
  },
  {
    title: "Introduction to Data Science in Python",
    institution: "University of Michigan",
    date: "09/2023",
    credentialId: "8TMUB39YBTD TR",
    link: "Via Coursera | Certificate Link",
    logo: michiganIcon
  },
  {
    title: "Introduction to Computer Science with Python Part I",
    institution: "USP - University of São Paulo",
    date: "09/2023",
    credentialId: "VGR22WM5K5G J",
    link: "Via Coursera | Certificate Link",
    logo: uspIcon
  },
  {
    title: "Categorical Structural Equation Modeling",
    institution: "Statistical Horizons",
    date: "05/2021",
    link: "Certificate Link",
    logo: statisticalHorizonsIcon
  },
  {
    title: "Applied Measurement Modeling",
    institution: "CenterStat",
    date: "05/2021",
    link: "Certificate Link",
    logo: centerStatIcon
  },
  {
    title: "Introduction to Structural Equation Modeling",
    institution: "CenterStat",
    date: "05/2021",
    link: "Certificate Link",
    logo: centerStatIcon
  }
];

export const summaryEN = `<strong class="font-bold text-gray-900">Data Scientist</strong> and economist with <strong class="font-bold text-gray-900">10+ years of experience</strong> using <strong class="font-bold text-gray-900">machine learning, causal inference,</strong> and data storytelling to solve large-scale social challenges and support strategic decision-making in the private sector. From shaping <strong class="font-bold text-gray-900">education policy</strong> to building <strong class="font-bold text-gray-900">predictive tools for online communities</strong>, I turn <strong class="font-bold text-gray-900">rigorous research</strong> into products that drive <strong class="font-bold text-gray-900">impact</strong>. Now eager to apply this foundation in the <strong class="font-bold text-gray-900">private sector</strong>—using data to uncover patterns in user behavior, improve products, and <strong class="font-bold text-gray-900">support smarter, evidence-based decisions</strong>.`;

export const headerEN = {
  name: "Nina Menezes Cunha",
  title: "Data Scientist",
  email: "ninamcunha@gmail.com",
  linkedin: "https://www.linkedin.com/in/nina-menezes-cunha/",
  github: "https://github.com/ninamcunha",
  portfolio: "https://ninamcunha.github.io/my-portfolio/"
};

export const sectionsEN = {
  experience: "EXPERIENCE",
  summary: "SUMMARY",
  skills: "SKILLS",
  education: "EDUCATION",
  publications: "PUBLICATIONS AND FEATURED PROJECTS",
  certifications: "CERTIFICATIONS"
};