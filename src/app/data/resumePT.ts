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
    period: "nov 2023 – atual",
    location: "São Paulo, Brasil",
    description: [
      "Responsável pelo <strong>Center of Excellence de Produto & Design</strong> das marcas Zé Delivery e TaDa, estruturado em <strong>3 pilares estratégicos</strong>: Consumer Centricity, Quality Experience e Maturity & Ops. Atua de forma transversal à diretoria <strong>DTC (Direct to Consumer)</strong>, conectando governança, expertise e inovação para escalar entregas com consistência e excelência global.",
      "Definiu e implementou o modelo operacional do CoE, incluindo frameworks, playbooks e rituais globais adotados por toda a diretoria de Produto & Design.",
      "Lidera iniciativas de capacitação, mentoria e desenvolvimento de cultura orientada a dados e IA nos times de design e produto.",
      "Atua como elo estratégico entre liderança de negócio e execução dos times, garantindo alinhamento de OKRs e consistência de entrega.",
      "Estruturou sistema de governança e qualidade de experiência com aplicação transversal em múltiplos produtos e mercados.",
      "Introduziu práticas de IA generativa no fluxo de trabalho de design e pesquisa, acelerando ciclos de discovery e prototipação."
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

export const summaryPT = `<p>Ao longo da minha carreira, liderei iniciativas com um propósito claro: <strong class="font-bold text-gray-900">tornar desafios em realidade</strong>! Nas 4 empresas em que atuei — <strong class="font-bold text-gray-900">AB InBev, Unico IDtech, RD (Raia Drogasil) e Natura</strong> — estruturei times cross-tribos e ecossistemas de Produto e Design com <strong class="font-bold text-gray-900">Maturity Framework, Ways of Working, Experience Quality Review e Hubs de IA</strong>, conectando estratégia de negócio à execução e elevando a qualidade das entregas de forma mensurável. Combino <strong class="font-bold text-gray-900">liderança de pessoas</strong> com <strong class="font-bold text-gray-900">execução direta</strong>, aplicando IA para otimizar fluxos e escalar a performance dos times — apaixonada por construir o que ainda não existe e transformar isso em resultado real.</p>`;

export const achievementsPT = `<ul class="list-disc pl-4 space-y-1 marker:text-red-300">
<li>Estruturei do zero times de operação de Produto e Design / CoE (Centers of Excellence) em 4 grandes empresas (AB InBev, Unico IDtech, RD e Natura), viabilizando a escala consistente de squads e tribos</li>
<li>Liderei iniciativas que elevaram a maturidade de Produto de 2,70 para 4,11 e de Design de 2,40 para 4,10 — métrica estratégica e bonificada</li>
<li>Liderei times que construíram Design Systems utilizados em ambientes produtivos, com adoção exponencial chegando a <strong class="font-bold text-gray-900">249%</strong> de aumento de uso nas interfaces</li>
<li>Coloquei em prática em 2 empresas um processo de Experience Quality Review, garantindo que <strong class="font-bold text-gray-900">94%</strong> dos problemas de experiência fossem identificados antes de QA, assegurando consistência e tom de voz da marca</li>
<li>Junto à especialista de Visual Illustration, evoluímos de uma atuação tática para estratégica, tornando a ilustração um asset de marca conectado ao DNA das empresas</li>
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
