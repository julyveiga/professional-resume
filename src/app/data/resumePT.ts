// Portuguese version of resume data
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

export const experiencesPT: Experience[] = [
  {
    role: "Global Head Sr. CoE — Center of Excellence (Product & Design)",
    company: "AB InBev",
    period: "nov 2023 – mar 2026",
    location: "São Paulo, Brasil",
    description: [
      "Responsável pela criação e liderança do <strong>Center of Excellence de Produto & Design</strong> das marcas Zé Delivery e TaDa, estrutura organizacional que concentra conhecimento, governança e práticas escaláveis para toda a diretoria DTC. O CoE atuou como habilitador estratégico com impacto direto na qualidade da experiência do consumidor e na maturidade operacional dos times.",
      "Arquitetou o modelo funcional do CoE com <strong>3 pilares estratégicos</strong> — Consumer Centricity, Quality Experience e Maturity & Ops — e <strong>6 frentes operacionais</strong>: Program & Portfolio, Product Insights, Service Design Cross, Content Experience, Design System & Illustration e Experience Cross.",
      "Implementou <strong>Maturity Framework</strong> próprio que elevou o índice de maturidade de Produto de 2,70 (2023) para 4,11 (2025) e de Design de 2,40 para 4,10 — evolução de 2 níveis em 2 anos, com foco em 4 pilares: Foundation, Pessoas, Plataforma e Práticas.",
      "Criou o modelo de <strong>Ways of Working (WoW)</strong> cross-áreas com Upstream Automatizado no Jira: padronização de tasks de discovery com GPT Assistant, permitindo criar 8 tasks simultâneas em menos de 2 minutos e viabilizando métricas reais de produtividade e qualidade.",
      "Implantou o framework <strong>Experience 10 Stars</strong> com 4 esteiras de qualidade integradas — AI Quality Assistant, Design Critique, Quality Gates e Experience Quality Review — cobrindo da ideação ao handoff com critérios e scores definidos.",
      "Liderou a governança do <strong>Design System</strong> resultando em 249% de aumento na inserção de componentes nas interfaces, 27 componentes prontos em design e +29 codados em produção no Seller e TaDa; implementou dashboard de adoção com IA para mensuração contínua.",
      "Construiu o <strong>Content IA HUB</strong> — plataforma com IA que dá autonomia a Produto, CRM e Agências para revisão de conteúdo com tom de voz da marca; resultou em 147 fluxos analisados no Gate de Content com 94% ajustados e consistentes.",
      "Criou <strong>10 GPTs customizados</strong> para o time cobrindo: Product & Design Assistant, Research (Revisor de Questionários, Calculadora de Amostra, Definição de Objetivo, Consultor de Metodologia), Papers de Quarter, Iniciativa, Documento para Decisão e Meeting Genie.",
      "Estruturou plataforma de <strong>Consumer Centricity</strong> centralizando +25 pesquisas estratégicas na Zé Platform Research & Insights.",
      "Desenvolveu o <strong>DTC Health Check</strong> — plataforma inteligente com IA que converte dados brutos de pesquisas mensais de saúde organizacional em dashboards interativos e insights para a liderança.",
      "<strong>Stack & métodos:</strong> Figma · Notion · Jira · OKRs · Design Ops · Product Ops · Design System · Ways of Working · Experience Quality Review · Maturity Framework · GPT/IA · Stakeholder Management · Data Studio"
    ]
  },
  {
    role: "Design Ops & System Manager Sr.",
    company: "Unico IDtech",
    period: "fev 2022 – nov 2023",
    location: "São Paulo, Brasil",
    description: [
      "Construiu do zero a área de <strong>Design Ops</strong> da Unico, estruturando frentes cross-design que ampliaram a consistência e eficiência do time. Liderou a implementação das disciplinas de Acessibilidade, Content Design, Service Design, Research Ops e Design System em uma das maiores identech do Brasil.",
      "Estruturou o time cross-produtos e definiu estratégia de Design Ops alinhada ao impacto no negócio.",
      "Liderou a implementação e evolução do <strong>Design System</strong>, criando cultura de adoção e garantindo escalabilidade.",
      "Criou dashboards para mensuração de impacto de design em produto, tornando a área <strong>data-informed</strong>.",
      "Conduziu planejamento estratégico trimestral e anual, conectando visão de design com metas da companhia.",
      "Implantou práticas de <strong>Acessibilidade (WCAG)</strong> e adequação à <strong>LGPD</strong> nos produtos digitais.",
      "<strong>Stack & métodos:</strong> Figma · Data Studio · Notion · Design System · Research Ops · Acessibilidade (WCAG) · LGPD"
    ]
  },
  {
    role: "Design Ops & System Lead",
    company: "RD (Raia Drogasil)",
    period: "jan 2021 – fev 2022",
    location: "São Paulo, Brasil",
    description: [
      "Pioneira na criação da área de <strong>Design Ops</strong> na RD, estruturando o time e consolidando disciplinas fundamentais para elevar a maturidade de design em uma das maiores redes de varejo farmacêutico da América Latina.",
      "Estruturou e liderou o time de Design Ops com visão estratégica e impacto transversal.",
      "Liderou a Squad de <strong>Design System</strong>, estabelecendo estratégia de evolução e cultura de adoção.",
      "Criou padrões para rituais e documentações, fortalecendo a maturidade da área de design.",
      "Reduziu inconsistências entre times de produto e design com iniciativas cross-funcionais.",
      "<strong>Stack & métodos:</strong> Figma · Design System · Service Design · Research Ops · Acessibilidade · LGPD"
    ]
  },
  {
    role: "CoE | Design Ops Lead & PM | Lead Design System",
    company: "Natura",
    period: "jan 2015 – dez 2020",
    location: "São Paulo, Brasil (6 anos)",
    description: [
      "Trajetória de crescimento consistente, de <strong>Designer</strong> especialista em Análise Heurística até liderança do <strong>Design Ops</strong> e gestão do <strong>Design System</strong> da maior empresa de cosméticos da América Latina.",
      "<strong>Design Ops Lead & PM | Lead Design System (2018 – 2020)</strong>",
      "Coordenou as atividades de Design Ops e atuou como PO da Squad de Design System.",
      "Participou das definições estratégicas das áreas, conectando design e produto.",
      "Consolidou governança e evolução contínua do Design System como referência interna.",
      "<strong>Designer — Análise Heurística (2015 – 2018)</strong>",
      "Responsável pela análise heurística dos canais digitais e planejamento do time de design.",
      "Gerenciou projetos de design com agências e time de marketing.",
      "Apoiou estratégias de campanhas digitais e lançamentos de produtos."
    ]
  }
];

export const educationPT: Education[] = [
  {
    degree: "Bootcamp de Ciência de Dados",
    school: "Le Wagon",
    period: "01/2025 - 03/2025",
    location: "São Paulo, Brasil",
    logo: leWagonIcon
  },
  {
    degree: "Doutorado em Economia da Educação",
    school: "Universidade de Stanford",
    period: "09/2012 - 04/2018",
    location: "Stanford, Estados Unidos",
    logo: stanfordEduIcon
  },
  {
    degree: "Mestrado em Economia",
    school: "Universidade Federal de Minas Gerais",
    period: "01/2010 - 04/2012",
    location: "Belo Horizonte, Brasil",
    logo: ufmgIcon
  },
  {
    degree: "Bacharel em Economia",
    school: "FGV",
    period: "01/2006 - 12/2009",
    location: "São Paulo, Brasil",
    logo: fgvIcon
  }
];

export const skillCategoriesPT: SkillCategory[] = [
  {
    title: "Programação",
    skills: "Python, SQL, R, Stata, LaTeX, MPLUS"
  },
  {
    title: "Ferramentas de Dados",
    skills: "Pandas, NumPy, Statsmodels, APIs, BeautifulSoup, Streamlit"
  },
  {
    title: "Machine Learning & IA",
    skills: "Scikit-Learn, TensorFlow, Keras, Hugging Face, LangChain, Teste A/B"
  },
  {
    title: "Cloud & Deployment",
    skills: "Google Cloud Platform, Docker, MLflow, Prefect"
  },
  {
    title: "Habilidades socio-emocionais",
    skills: "Pensamento analítico e crítico, solução proativa de problemas, colaboração intercultural, storytelling com dados, liderança, adaptabilidade"
  },
  {
    title: "Idiomas",
    skills: "Inglês (fluente), Português (nativo), Espanhol (avançado), Francês (básico)"
  }
];

export const publicationsPT: Publication[] = [
  {
    title: "Algoritmo de Conexão da Amooora",
    date: "03/2025",
    link: "https://amooora.streamlit.app/",
    description: "Desenvolvimento de um algoritmo de matchmaking em Python para mulheres LGBTQ+, utilizando técnicas de machine learning e deep learning (clusterização com Word2Vec, modelos de tópicos com BERTopic, embeddings com CNN) para gerar recomendações de conexão inclusivas e baseadas em dados (<a href='https://github.com/ninamcunha/amooora' target='_blank' rel='noopener noreferrer' class='text-orange-600 hover:text-orange-700'>link para o repositório no GitHub</a>)."
  },
  {
    title: "Are the effects of informational interventions driven by salience?",
    journal: "American Economic Journal: Economic Policy",
    authors: "Berlinger, E., Cunha, N. M., Lischard, G., Madeira, R.",
    date: "2024",
    link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3644124",
    description: "Publicado também no <a href='https://blogs.worldbank.org/en/impactevaluations/attention-or-information-why-telling-nina-s-parents-she-missed-school-makes-her-better-student-guest' target='_blank' rel='noopener noreferrer' class='text-orange-600 hover:text-orange-700'>Blog de Impacto de Desenvolvimento do Banco Mundial</a>."
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
    journal: "Revista de Economia da Educação",
    authors: "Bruns, B., Costa, L., Cunha, N. M",
    date: "2018",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0272775717303576"
  }
];

export const certificationsPT: Certification[] = [
  {
    title: "Do Figma MCP ao Cursor AI",
    institution: "AI Creative Builders",
    date: "01/2026",
    logo: aiCreativeBuildersIcon
  },
  {
    title: "Google Advanced Data Analytics Professional Certificate",
    institution: "Google",
    date: "12/2024",
    credentialId: "98C47QKOL H8A",
    link: "Via Coursera | Link para o certificado",
    logo: googleIcon
  },
  {
    title: "Applied Machine Learning in Python",
    institution: "Universidade de Michigan",
    date: "10/2023",
    credentialId: "D8NC5S5AKSZ Q",
    link: "Via Coursera | Link para o certificado",
    logo: michiganIcon
  },
  {
    title: "Introdução à Computação com Python Parte II",
    institution: "USP - Universidade de São Paulo",
    date: "10/2023",
    credentialId: "T6DRTCPBAMD D",
    link: "Via Coursera | Link para o certificado",
    logo: uspIcon
  },
  {
    title: "Applied Plotting, Charting & Data Representation in Python",
    institution: "Universidade de Michigan",
    date: "09/2023",
    credentialId: "D8NC5S5AKSZ Q",
    link: "Via Coursera | Link para o certificado",
    logo: michiganIcon
  },
  {
    title: "Introduction to Data Science in Python",
    institution: "Universidade de Michigan",
    date: "09/2023",
    credentialId: "8TMUB39YBTD TR",
    link: "Via Coursera | Link para o certificado",
    logo: michiganIcon
  },
  {
    title: "Introdução à Ciência da Computação com Python Parte I",
    institution: "USP - Universidade de São Paulo",
    date: "09/2023",
    credentialId: "VGR22WM5K5G J",
    link: "Via Coursera | Link para o certificado",
    logo: uspIcon
  },
  {
    title: "Categorical Structural Equation Modeling",
    institution: "Statistical Horizons",
    date: "05/2021",
    link: "Link para o certificado",
    logo: statisticalHorizonsIcon
  },
  {
    title: "Applied Measurement Modeling",
    institution: "CenterStat",
    date: "05/2021",
    link: "Link para o certificado",
    logo: centerStatIcon
  },
  {
    title: "Introduction to Structural Equation Modeling",
    institution: "CenterStat",
    date: "05/2021",
    link: "Link para o certificado",
    logo: centerStatIcon
  }
];

export const summaryPT = `<strong class="font-bold text-gray-900">Cientista de Dados</strong> e economista com <strong class="font-bold text-gray-900">mais de 10 anos de experiência</strong> no uso de <strong class="font-bold text-gray-900">machine learning, inferência causal</strong> e narrativa de dados para resolver desafios sociais em larga escala e apoiar a tomada de decisões estratégicas no setor privado. Da <strong class="font-bold text-gray-900">formulação de políticas educacionais</strong> à construção de <strong class="font-bold text-gray-900">ferramentas preditivas para comunidades online</strong>, transformo <strong class="font-bold text-gray-900">pesquisas rigorosas</strong> em produtos que geram <strong class="font-bold text-gray-900">impacto</strong>. Atualmente, busco aplicar essa experiência no <strong class="font-bold text-gray-900">setor privado</strong>—utilizando dados para entender o comportamento de usuários, aprimorar produtos e apoiar decisões <strong class="font-bold text-gray-900">baseadas em evidências</strong>.`;

export const headerPT = {
  name: "Juliana Veiga",
  title: "Cientista de Dados",
  email: "ninamcunha@gmail.com",
  linkedin: "https://www.linkedin.com/in/juliana-veiga/",
  github: "https://github.com/julyveiga",
  portfolio: "https://julyveiga.github.io/professional-resume/"
};

export const sectionsPT = {
  experience: "Experiência",
  summary: "Resumo",
  skills: "Habilidades",
  education: "Educação",
  publications: "Publicações e Projetos em Destaque",
  certifications: "Certificações"
};