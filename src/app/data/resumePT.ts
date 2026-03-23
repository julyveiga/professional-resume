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
  institution?: string;
  date?: string;
  credentialId?: string;
  link?: string;
  logo?: string;
}

export const experiencesPT: Experience[] = [
  {
    role: "Global Head Sr. CoE — Center of Excellence (Product & Design)",
    company: "AB InBev",
    period: "nov 2023 – mar 2026",
    location: "São Paulo, Brasil",
    description: [
      "Responsável pela criação e liderança do <strong>Center of Excellence de Produto & Design</strong> das marcas Zé Delivery e TaDa, estrutura organizacional que concentra conhecimento, governança e práticas escaláveis para o time de Produto e Design. O CoE atuou como habilitador estratégico com impacto direto na qualidade da experiência do consumidor e na maturidade operacional dos times, inspirando a companhia na criação de demais CoEs e atuando como referência global.",
      "Idealizei o modelo do CoE com <strong>3 pilares estratégicos</strong> — Consumer Centricity, Quality Experience e Maturity & Ops — atuando em <strong>6 frentes operacionais</strong>: Program & Portfolio, Product Insights, Service Design Cross, Content Experience, Design System & Illustration e Experience Cross.",
      "Liderei junto ao time o <strong>Maturity Framework</strong> que elevou o índice de maturidade de Produto de 2,70 para 4,11, com foco em 4 pilares: Foundation, Pessoas, Plataforma e Práticas.",
      "Liderei ativamente a construção do modelo de <strong>Ways of Working (WoW)</strong> cross-áreas junto à diretoria de Tecnologia, automatizando e tornando o Upstream mensurável com ferramentas de IA, proporcionando visões executivas de completude de entregas e qualidade.",
      "Implantei junto ao time o <strong>Experience Quality Review</strong>, garantindo a qualidade das entregas (Content, Design System e Illustration) pré-produção.",
      "Liderei a estratégia junto ao especialista do <strong>Design System</strong>, proporcionando o facelift do app TaDa com 100% de componentes nas interfaces.",
      "Liderei ativamente com a especialista de Content o <strong>Content IA HUB</strong> — plataforma com IA que dá autonomia a Produto, CRM e Agências para revisão de conteúdo com tom de voz da marca, resultando em 94% de ajustes pré-produção.",
      "Idealizei e coloquei em prática a <strong>Plataforma de Pesquisas</strong>, desenvolvida 100% com IA, garantindo um repositório para uso dos times e captação ágil de insights.",
      "Atuei estrategicamente junto aos times trazendo autonomia e consistência de assets que se tornaram parte do DNA de marca.",
      "Planejei e conduzi junto a parceiros iniciativas de inovação, elevando a plataforma a uma experiência diferenciada na jornada de produto.",
      "<strong>Stack & métodos:</strong> Figma · Notion · Jira · OKRs · Design Ops · Product Ops · Design System · Ways of Working · Experience Quality Review · Maturity Framework · GPT/IA · Stakeholder Management · Data Studio"
    ]
  },
  {
    role: "Design Ops & System Manager Sr.",
    company: "Unico IDtech",
    period: "fev 2022 – nov 2023",
    location: "São Paulo, Brasil",
    description: [
      "Responsável pela criação e liderança do <strong>Design Ops</strong> da Unico, estruturando frentes cross-design que ampliaram a consistência e eficiência do time. Liderou a implementação das disciplinas de Acessibilidade, Content Design, Service Design, Research Ops e Design System em uma das maiores identech do Brasil.",
      "Estruturei o time cross-produtos e defini a estratégia de Design Ops alinhada ao impacto no negócio.",
      "Criei junto ao time um processo de <strong>Experience Quality Review</strong>, garantindo a qualidade da experiência das interfaces antes da produção.",
      "Liderei a implementação e evolução do <strong>Design System</strong>, criando cultura de adoção e garantindo escalabilidade.",
      "Criei dashboards para mensuração de impacto de design em produto, proporcionando dados para tomada de decisão operacional.",
      "Conduzi planejamento estratégico trimestral e anual, conectando visão de design com metas da companhia.",
      "Implantei junto a especialistas práticas de Acessibilidade, garantindo a adequação à <strong>LGPD</strong> nos produtos digitais.",
      "<strong>Stack & métodos:</strong> Figma · Data Studio · Notion · Design System · Research Ops · Acessibilidade (WCAG) · LGPD"
    ]
  },
  {
    role: "Design Ops & System Lead",
    company: "RD (Raia Drogasil)",
    period: "jan 2021 – fev 2022",
    location: "São Paulo, Brasil",
    description: [
      "Responsável pela criação e liderança da área de <strong>Design Ops</strong> na RD, estruturando o time e consolidando disciplinas fundamentais para elevar a maturidade de design em uma das maiores redes de varejo farmacêutico do Brasil.",
      "Estruturei e liderei o time de Design Ops com visão estratégica e impacto transversal.",
      "Liderei como PM a Squad de <strong>Design System</strong>, estabelecendo estratégia de evolução e cultura de adoção.",
      "Criei padrões para rituais e documentações, fortalecendo a maturidade da área de design.",
      "Reduzi inconsistências entre times de Produto e Design com iniciativas cross-funcionais.",
      "<strong>Stack & métodos:</strong> Figma · Design System · Service Design · Research Ops · Acessibilidade · LGPD"
    ]
  },
  {
    role: "CoE | Design Ops Lead & PM | Lead Design System",
    company: "Natura",
    period: "jan 2015 – dez 2020",
    location: "São Paulo, Brasil (6 anos)",
    description: [
      "Atuei como <strong>Designer</strong> especialista em Análise Heurística até assumir a liderança do <strong>Design Ops</strong> e a gestão do <strong>Design System</strong> da maior empresa de cosméticos da América Latina.",
      "<strong>Design Ops Lead & PM | Lead Design System (2018 – 2020)</strong>",
      "Coordenei as atividades de Design Ops e atuei como PO da Squad de Design System.",
      "Participei ativamente das definições estratégicas das áreas, conectando design e produto.",
      "Consolidei a governança e evolução contínua do Design System como referência interna, tornando-o realidade para <strong>Natura, Avon e The Body Shop</strong>.",
      "<strong>Designer — Análise Heurística (2015 – 2018)</strong>",
      "Responsável pela análise heurística dos canais digitais e pelo planejamento do time de design.",
      "Gerenciei projetos de design com agências e time de marketing.",
      "Apoiei estratégias de campanhas digitais e lançamentos de produtos."
    ]
  },
  {
    role: "Consultora de Projetos Digitais",
    company: "Concrete Solutions / Natura",
    period: "dez 2013 – jan 2015",
    location: "São Paulo, Brasil",
    description: [
      "Consultoria em projetos de marketing digital."
    ]
  },
  {
    role: "Design Lead",
    company: "Agência Pipeline",
    period: "jan 2013 – dez 2013",
    location: "São Paulo, Brasil",
    description: [
      "Liderança de projetos digitais, gestão de times e direcionamento criativo."
    ]
  },
  {
    role: "Design Lead & Web Designer",
    company: "Iguana Sports",
    period: "nov 2011 – jan 2013",
    location: "São Paulo, Brasil",
    description: [
      "Arquitetura de informação, design de interfaces e planejamento de projetos digitais para o ecossistema de portais esportivos da empresa."
    ]
  },
  {
    role: "Gerente de Projetos Digitais & Analista Web",
    company: "Vivo (Telefônica Brasil)",
    period: "dez 1998 – jan 2011",
    location: "São Paulo, Brasil",
    description: [
      "12 anos de atuação em gestão de projetos de canais digitais, implementação de ferramentas corporativas (CMS, SEO, métricas) e arquitetura de informação para portais corporativos."
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

export const summaryPT = `<p class="mb-2">Ao longo da minha carreira, liderei iniciativas com um propósito claro: <strong class="font-bold text-gray-900">tornar desafios em realidade</strong>! Tive a oportunidade de elevar a escala, a eficiência e a maturidade dos times de Produto e Design, fazendo a gestão de pessoas de forma eficiente e engajadora.</p>
<p class="mb-2">Nas últimas 4 empresas em que atuei — <strong class="font-bold text-gray-900">AB InBev, Unico IDtech, RD (Raia Drogasil) e Natura</strong> — estruturei times de atuação cross-tribos, proporcionando a liderança de ecossistemas para Produto e Design, como: <strong class="font-bold text-gray-900">Maturity Framework, Ways of Working, Experience Quality Review e Hubs de IA</strong> que trouxeram autonomia para os times e conectaram a estratégia de negócio à execução, elevando a qualidade das entregas de forma mensurável.</p>
<p class="mb-2">Combino <strong class="font-bold text-gray-900">liderança de pessoas</strong> com <strong class="font-bold text-gray-900">execução direta (mão na massa)</strong>, aplicando IA para criar sistemas diversos que otimizam fluxos e ciclos operacionais, escalando a performance dos times.</p>
<p>Sou apaixonada por construir o que ainda não existe e transformar isso em resultado real — vivenciando na prática a parceria com liderados e parceiros em prol do sucesso dos desafios recebidos.</p>`;

export const achievementsPT = `<ul class="list-disc pl-4 space-y-1 marker:text-red-300">
<li>Estruturei do zero times de operação de Produto e Design / CoE (Centers of Excellence) em 4 grandes empresas (AB InBev, Unico IDtech, RD e Natura), viabilizando a escala consistente de squads e tribos.</li>
<li>Liderei iniciativas que elevaram a maturidade de Produto de 2,70 para 4,11 e de Design de 2,40 para 4,10 — métrica estratégica e bonificada.</li>
<li>Liderei times que construíram Design Systems utilizados em ambientes produtivos, com adoção exponencial chegando a <strong class="font-bold text-gray-900">249%</strong> de aumento de uso nas interfaces.</li>
<li>Coloquei em prática em 2 empresas um processo de Experience Quality Review, garantindo que <strong class="font-bold text-gray-900">94%</strong> dos problemas de experiência fossem identificados antes de QA, assegurando consistência e tom de voz da marca.</li>
<li>Junto à especialista de Visual Illustration, evoluímos de uma atuação tática para estratégica, tornando a ilustração um asset de marca conectado ao DNA das empresas.</li>
<li>Liderei estrategicamente o time na criação de Hubs de IA, trazendo autonomia para os times em processos operacionais e gerando redução de <strong class="font-bold text-gray-900">80%</strong> do tempo gasto em burocracia.</li>
</ul>`;

export const footerNotePT = "Versão final aprovada em março de 2026.";

export const headerPT = {
  name: "Juliana Veiga",
  title:
    "Global Head of Design Ops & Product Ops | Design Systems | AI-Driven Operations | Scaling Global Teams",
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
  certifications: "Certificações"
};
