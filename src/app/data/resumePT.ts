// Portuguese version of resume data
export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  /** Parágrafo introdutório (não entra na lista de bullets) */
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

export const experiencesPT: Experience[] = [
  {
    role: "Global Head Sr. CoE — Center of Excellence (Product & Design)",
    company: "AB InBev",
    period: "nov 2023 – atual",
    location: "São Paulo, Brasil",
    logo: experienceLogo('ab-inbev.png'),
    intro:
      "Liderei a criação e expansão global do Center of Excellence de Produto & Design para Zé Delivery e TaDa, estabelecendo um modelo operacional escalável que conecta estratégia, execução e qualidade de experiência.",
    description: [
      "Estruturei o CoE do zero, com base nos pilares Consumer Centricity, Quality Experience e Maturity & Ops",
      "Elevei a maturidade de Produto de 2,7 → 4,11 por meio de um Maturity Framework proprietário",
      "Desenhei e implementei Ways of Working com uso de IA, tornando o upstream mensurável e com visibilidade executiva",
      "Criei o framework de Experience Quality Review, resolvendo 94% dos problemas antes da produção",
      "Liderei a criação de Hub's IA (Content e Visual) garantindo a consistência das interfaces de acordo com a marca",
      "Desenvolvi uma plataforma de pesquisa com IA, centralizando insights para os times",
      "Atuei como parceira estratégica da liderança, influenciando decisões em nível global"
    ]
  },
  {
    role: "Design Ops & System Manager Sr.",
    company: "Unico IDtech",
    period: "fev 2022 – nov 2023",
    location: "São Paulo, Brasil",
    logo: experienceLogo('unico.png'),
    intro:
      "Estruturei e escalei a área de Design Operations em uma das principais idtechs do Brasil, impulsionando consistência, eficiência e maturidade.",
    description: [
      "Estruturei o time de Design Ops e sua atuação cross tribos",
      "Implementei disciplinas como Acessibilidade, Content Design, Service Design, Research Ops e Design System",
      "Introduzi o processo de Experience Quality Review para elevar a qualidade pré-produção",
      "Liderei a evolução e adoção do Design System",
      "Desenvolvi dashboards de performance de design para suporte à tomada de decisão"
    ]
  },
  {
    role: "Design Ops & System Lead",
    company: "RD (Raia Drogasil)",
    period: "jan 2021 – fev 2022",
    location: "São Paulo, Brasil",
    logo: experienceLogo('rd.png'),
    intro:
      "Liderei a criação da área de Design Operations e a estruturação de governança em uma das maiores empresas de varejo do país.",
    description: [
      "Estruturei e liderei o time de Design Ops",
      "Atuei também como Product Manager da squad de Design System",
      "Padronizei rituais, processos e documentações sendo padrão para as tribos",
      "Reduzi inconsistências entre Produto e Design por meio de iniciativas cross-funcionais"
    ]
  },
  {
    role: "CoE | Design Ops Lead & PM | Lead Design System",
    company: "Natura",
    period: "DEZ 2013 – DEZ 2020",
    location: "São Paulo, Brasil (6 anos)",
    logo: experienceLogo('natura.png'),
    intro:
      "Atuei na evolução e escala de Design Operations e Design Systems para Natura, Avon e The Body Shop.",
    description: [
      "Liderei Design Ops e a governança do Design System em múltiplas marcas",
      "Atuei como Product Owner da squad de Design System",
      "Estruturei modelos de governança e evolução contínua",
      "Conduzi análises heurísticas e apoiei estratégias digitais"
    ]
  },
  {
    role: "Design Lead",
    company: "Agência Pipeline",
    period: "jan 2013 – dez 2013",
    location: "São Paulo, Brasil",
    logo: experienceLogo('pipeline.png'),
    description: [
      "Liderança de time, agência parceiras e freelas;",
      "Planejamento e acompanhamento do desenvolvimento de projetos;",
      "Especificação e definição de soluções técnicas, tais como, CMS, E-commerce, Redes Sociais;",
      "Direcionamento criativo para criação da identidade visual dos hot-sites e portais;"
    ]
  },
  {
    role: "Design Lead & Web Designer",
    company: "Iguana Sports",
    period: "nov 2011 – jan 2013",
    location: "São Paulo, Brasil",
    logo: experienceLogo('iguana.png'),
    description: [
      "Criação da arquitetura da informação e prototipacão de novos portais;",
      "Criação e design das interfaces visuais dos sites de eventos esportivos, sites das revistas e campanhas em mídias sociais;",
      "Planejamento dos Projetos Digitais para atendimento das áreas de Marketing, Comercial, Assinatura e Eventos, conforme as diretrizes definidas pela diretoria;",
      "Planejamento e controle das réguas de disparos de emails marketings, principal canal de vendas dos produtos da empresa;",
      "Definição do fluxo de processos digitais e implantação da cultura de metodologia de projetos;"
    ]
  },
  {
    role: "Gerente de Projetos Digitais & Analista Web",
    company: "Vivo (Telefônica Brasil)",
    period: "dez 1998 – jan 2011",
    location: "São Paulo, Brasil",
    logo: experienceLogo('vivo.png'),
    description: [
      "Planejamento e condução de projetos web;",
      "Participação e condução de projetos de implementação de ferramentas corporativas, tais como: CMS,SEO, Sistemas de Métricas;",
      "Análise das especificações funcionais e elaboração das especificações técnicas.",
      "Definição da arquitetura da informações para portais corporativos;",
      "Definição da identidade visual para portais, folhetos, sistemas e campanhas internas;",
      "Desenvolvimento do front-end de sites internos (Intranet);",
      "Gestão de demandas para as agências."
    ]
  }
];

export const educationPT: Education[] = [
  {
    degree: "Pós-Graduação em Mídias Interativas",
    school: "UniverCidade",
    period: "2005 – 2007",
    location: "Brasil"
  },
  {
    degree: "Graduação em Tecnologia em Criação e Gestão de Ambientes Internet",
    school: "Universidade Estácio de Sá",
    period: "2003",
    location: "Brasil"
  }
];

export const skillCategoriesPT: SkillCategory[] = [
  {
    title: "Competências técnicas",
    skills:
      "Design Ops · Product Ops · Design Systems · UX Research · Research Ops · Content Design · Acessibilidade (WCAG) · LGPD · OKRs · Maturity Framework · Ways of Working · Experience Quality Review · Stakeholder Management · Frameworks Operacionais · Rituais e Governança · Data-Driven Design · IA Generativa aplicada a Design e Produto · GPT customizado · Cross-functional Leadership · Figma · Notion · Jira · Data Studio · Miro"
  },
  {
    title: "Idiomas",
    skills: "Português (nativo) · Inglês (Professional Working)"
  }
];

export const publicationsPT: Publication[] = [];

export const certificationsPT: Certification[] = [
  { title: "Bootcamp Design System Alta Performance" },
  { title: "Data Studio: Métricas de Experiência" },
  { title: "Formação UX Design" },
  { title: "Comunicação Não Violenta (CNV)" }
];

export const summaryPT = `<p>Construo e escalo organizações conectando estratégia à execução, com impacto em produto, experiência e performance. Transformo complexidade em sistemas escaláveis por meio de operações e IA.</p><p>Combino liderança inspiracional com execução direta para desenvolver times de alta performance e escalar resultados.</p><p>Ao longo da minha trajetória, atuei em empresas globais como AB InBev, Unico, RD e Natura.</p>`;

export const achievementsPT = `<ul class="list-disc pl-4 space-y-1 marker:text-red-300">
<li>Estruturei do zero times de operação de Produto e Design / CoE (Centers of Excellence) em 4 grandes empresas (AB InBev, Unico IDtech, RD e Natura)</li>
<li>Liderei iniciativas que elevaram a maturidade de Produto de 2,70 para 4,11 em Produto e Design (métrica estratégica e bônus da área)</li>
<li>Liderei times que construíram Design Systems utilizados em ambientes produtivos, com adoção exponencial chegando a <strong class="font-bold text-gray-900">249%</strong> de aumento de uso nas interfaces</li>
<li>Idealizei em 2 empresas um processo de Experience Quality Review, garantindo que <strong class="font-bold text-gray-900">94%</strong> dos problemas de experiência fossem identificados antes da produção, assegurando consistência e tom de voz da marca</li>
<li>Orquestração estratégica junto às lideranças, contribuindo para que os assets visuais se tornassem parte do DNA das empresas (Raia &amp; Drogasil / Zé Delivery)</li>
</ul>`;

export const footerNotePT = "Versão final aprovada em março de 2026.";

export const headerPT = {
  name: "Juliana Veiga",
  title:
    "Leader in Product & Design | AI-Driven | Scaling Organizations | Operations | Manager | Specialist",
  email: "julianavmveiga@gmail.com",
  linkedin: "https://www.linkedin.com/in/juveiga/",
  github: "",
  portfolio: "",
  location: "São Paulo, Brasil"
};

export const sectionsPT = {
  experience: "Experiência profissional",
  summary: "Resumo executivo",
  achievements: "Principais conquistas",
  skills: "Competências",
  education: "Formação acadêmica",
  publications: "Publicações",
  certifications: "Principais Certificações"
};

export type SkillHighlightCard = {
  source: string;
  title: string;
  /** Caminho relativo a `public/` (ex.: logos/foo.png) */
  logo?: string;
  /** Iniciais ou atalho quando não há logo */
  iconFallback?: string;
};

export type SkillHighlightGroup = {
  /** Rótulo acima da linha da grelha (ex.: Stack) */
  rowLabel?: string;
  cards: SkillHighlightCard[];
};

export const skillHighlightsPT: SkillHighlightGroup[] = [
  {
    cards: [
      {
        source: "SECTION IA",
        title: "Certificações IA",
        logo: "logos/certifications/section-ia.png",
      },
      {
        source: "Creative Builders",
        title: "Figma MCP ao Cursor AI",
        logo: "logos/certifications/creative-builders.png",
      },
      {
        source: "Conquer",
        title: "Inteligência Emocional",
        logo: "logos/certifications/conquer.png",
      },
    ],
  },
  {
    cards: [
      {
        source: "Conquer",
        title: "Alta Performance",
        logo: "logos/certifications/conquer.png",
      },
      {
        source: "EBAC",
        title: "Habilidades de Liderança",
        logo: "logos/certifications/ebac.png",
      },
      {
        source: "Echos Desirable Futures",
        title: "Business Design",
        logo: "logos/certifications/echos.png",
      },
    ],
  },
];
