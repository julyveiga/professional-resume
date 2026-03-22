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
import stoneIcon from '@/assets/icon_expe_stone.png';
import amoooraIcon from '@/assets/icon_expe_amooora.jpg';
import scholarIcon from '@/assets/icon_expe_scholar_launch.png';
import fhiIcon from '@/assets/icon_expe_fhi.png';
import stanfordIcon from '@/assets/icon_expe_stanford.png';
import movvaIcon from '@/assets/icon_expe_movva.jpeg';
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
    role: "Cientista de Dados | Especialista em Inferência Causal",
    company: "Stone",
    period: "09/2025 - Presente",
    location: "Remoto",
    logo: stoneIcon,
    description: [
      "Aplicação de <strong>inferência causal</strong>, <strong>econometria</strong> e <strong>ciência de dados</strong> no time de <strong>Economic Research</strong> da Stone para avaliar o impacto de iniciativas estratégicas em marketing, crédito, precificação, retenção, desenvolvimento de produtos e serviços bancários."
    ]
  },
  {
    role: "Fundadora & CEO",
    company: "Amooora",
    period: "12/2023 - Presente",
    location: "São Paulo, Brasil",
    logo: amoooraIcon,
    description: [
      "Desenvolvimento de <strong>plataforma baseada em dados</strong> para promover conexão, advocacy e compartilhamento de informações em espaço seguro e inclusivo, com aplicação de <em>machine learning</em> para personalização de conteúdo e engajamento inicial."
    ]
  },
  {
    role: "Mentora de Pesquisa em Ciência de Dados",
    company: "Scholar Launch",
    period: "01/2024 - Presente",
    location: "Remoto",
    logo: scholarIcon,
    description: [
      "Supervisão e mentoria de <strong>projetos de pesquisa conduzidos por estudantes</strong>, aplicando estatística, machine learning e IA a desafios práticos, do planejamento da pesquisa à publicação."
    ]
  },
  {
    role: "Pesquisadora Sênior",
    company: "FHI 360",
    period: "05/2018 - 08/2023",
    location: "Washington, DC",
    logo: fhiIcon,
    description: [
      "Liderança de <strong>avaliações de programas educacionais</strong> em mais de 10 países (incluindo Brasil, Gana, Guatemala e El Salvador), utilizando <strong>testes A/B</strong>, <strong>machine learning</strong> e <strong>métodos quase-experimentais</strong> para avaliar o impacto de políticas públicas.",
      "Desenvolvimento de <strong>modelos preditivos e ferramentas psicométricas</strong> (análise fatorial, PCA) e gestão de <strong>bases de dados em larga escala</strong> (mais de 50.000 estudantes) para gerar insights aplicáveis a políticas públicas e criar <strong>dashboards interativos</strong> para governos e parceiros internacionais."
    ]
  },
  {
    role: "Pesquisadora Sênior",
    company: "Universidade Stanford",
    period: "01/2013 - 04/2018",
    location: "Stanford, CA",
    logo: stanfordIcon,
    description: [
      "Condução de <strong>experimentos aleatórios</strong> com mais de 25.000 estudantes, aplicando <strong>inferência causal</strong>, <strong>machine learning</strong> e <strong>testes A/B</strong>, além de regressão e modelagem preditiva, para avaliar a efetividade de programas educacionais e identificar intervenções que melhoraram frequência, desempenho e aprovação escolar.",
      "Publicação de <strong>artigos acadêmicos</strong> e realização de estudos observacionais em sala de aula para informar políticas públicas e aprimorar práticas docentes, com <strong>co-liderança de seminário sobre educação brasileira</strong> e mentoria de alunos de mestrado em métodos de estatística e pesquisa aplicada."
    ]
  },
  {
    role: "Consultora",
    company: "Movva",
    period: "02/2015 - 12/2016",
    location: "São Paulo, Brasil",
    logo: movvaIcon,
    description: [
      "Concepção e liderança de <strong>pesquisas educacionais em larga escala</strong> em 400 escolas públicas (30.000 alunos), incluindo desenvolvimento de questionários, negociação com governos, supervisão de campo e garantia da qualidade dos dados, com realização de <strong>avaliações de impacto</strong> e comunicação de resultados por meio de <strong>visualizações de dados</strong> para gestores e stakeholders do setor público."
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
  name: "Nina Menezes Cunha",
  title: "Cientista de Dados",
  email: "ninamcunha@gmail.com",
  linkedin: "https://www.linkedin.com/in/nina-menezes-cunha/",
  github: "https://github.com/ninamcunha",
  portfolio: "https://ninamcunha.github.io/my-portfolio/"
};

export const sectionsPT = {
  experience: "Experiência",
  summary: "Resumo",
  skills: "Habilidades",
  education: "Educação",
  publications: "Publicações e Projetos em Destaque",
  certifications: "Certificações"
};