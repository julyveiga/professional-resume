import { 
  Briefcase, 
  Code, 
  Database, 
  Globe, 
  GraduationCap, 
  Languages, 
  Layout, 
  Lightbulb, 
  Mail, 
  MapPin, 
  Github, 
  Linkedin, 
  Link,
  Brain,
  Cloud,
  Terminal,
  BarChart3,
  Building2,
  Users,
  Smartphone
} from 'lucide-react';

export const resumeData = {
  header: {
    name: "NINA MENEZES CUNHA",
    title: "Cientista de Dados",
    contact: [
      {
        type: "email",
        value: "ninamcunha@gmail.com",
        href: "mailto:ninamcunha@gmail.com",
        icon: Mail
      },
      {
        type: "linkedin",
        value: "linkedin.com/in/nina-menezes-cunha",
        href: "https://www.linkedin.com/in/nina-menezes-cunha/",
        icon: Linkedin
      },
      {
        type: "github",
        value: "github.com/ninamcunha",
        href: "https://github.com/ninamcunha",
        icon: Github
      },
      {
        type: "portfolio",
        value: "ninamcunha.github.io/my-portfolio",
        href: "https://ninamcunha.github.io/my-portfolio/",
        icon: Globe
      }
    ]
  },
  experience: [
    {
      company: "Stone",
      role: "Cientista de Dados | Especialista em Inferência Causal",
      period: "09/2025 - Presente", // Keeping strict fidelity to image
      location: "Location",
      description: "Aplicação de <b>inferência causal</b>, econometria e <b>ciência de dados</b> no time de <b>Economic Research</b> da Stone para avaliar o impacto de iniciativas estratégicas em marketing, crédito, precificação, retenção, desenvolvimento de produtos e serviços bancários.",
      icon: Briefcase, 
      color: "bg-[#00A859]" // Stone green
    },
    {
      company: "Amoooora",
      role: "Fundadora & CEO",
      period: "12/2023 - Presente",
      location: "São Paulo, Brasil",
      description: "Desenvolvimento de <b>plataforma baseada em dados</b> para promover conexão, advocacy e compartilhamento de informações em espaço seguro e inclusivo, com aplicação de <i>machine learning</i> para personalização de conteúdo e engajamento inicial.",
      icon: Users,
      color: "bg-[#7B2CBF]" // Purple
    },
    {
      company: "Scholar Launch",
      role: "Mentora de Pesquisa em Ciência de Dados",
      period: "01/2024 - Presente",
      location: "Remote",
      description: "Supervisão e mentoria de <b>projetos de pesquisa conduzidos por estudantes</b>, aplicando estatística, machine learning e IA a desafios práticos, do planejamento da pesquisa à publicação.",
      icon: Lightbulb,
      color: "bg-[#10B981]" // Emerald
    },
    {
      company: "Fhi 360",
      role: "Pesquisadora Sênior",
      period: "05/2018 - 08/2023",
      location: "Washington, DC",
      description: "Liderança de <b>avaliações de programas educacionais</b> em mais de 10 países (incluindo Brasil, Gana, Guatemala e El Salvador), utilizando <b>testes A/B</b>, <b>machine learning</b> e <b>métodos quase-experimentais</b> para avaliar o impacto de políticas públicas. Desenvolvimento de <b>modelos preditivos</b> e ferramentas <b>psicométricas</b> (análise fatorial, PCA) e gestão de <b>bases de dados em larga escala</b> (mais de 50.000 estudantes) para gerar insights aplicáveis a políticas públicas e criar <b>dashboards interativos</b> para governos e parceiros internacionais.",
      icon: Globe,
      color: "bg-[#F97316]" // Orange
    },
    {
      company: "Universidade Stanford",
      role: "Pesquisadora Sênior",
      period: "01/2013 - 04/2018",
      location: "Stanford, CA",
      description: "Condução de <b>experimentos aleatórios</b> com mais de 25.000 estudantes, aplicando <b>inferência causal</b>, <b>machine learning</b> e <b>testes A/B</b>, além de regressão e modelagem preditiva, para avaliar a efetividade de programas educacionais e identificar intervenções que melhoraram frequência, desempenho e aprovação escolar. Publicação de <b>artigos acadêmicos</b> e realização de estudos observacionais em sala de aula para informar políticas públicas e aprimorar práticas docentes, com <b>co-liderança de seminário sobre educação brasileira</b> e mentoria de alunos de mestrado em métodos de estatística e pesquisa aplicada.",
      icon: GraduationCap,
      color: "bg-[#8C1515]" // Stanford Cardinal
    },
    {
      company: "Movva",
      role: "Consultora",
      period: "02/2015 - 12/2016",
      location: "São Paulo, Brasil",
      description: "Concepção e liderança de <b>pesquisas educacionais em larga escala</b> em 400 escolas públicas (30.000 alunos), incluindo desenvolvimento de questionários, negociação com governos, supervisão de campo e garantia da qualidade dos dados, com realização de <b>avaliações de impacto</b> e comunicação de resultados por meio de <b>visualizações de dados</b> para gestores e stakeholders do setor público.",
      icon: BarChart3,
      color: "bg-[#2563EB]" // Blue
    }
  ],
  summary: "<b>Cientista de Dados</b> e economista com <b>mais de 10 anos de experiência</b> no uso de <b>machine learning</b>, <b>inferência causal</b> e narrativa de dados para resolver desafios sociais em larga escala e apoiar a tomada de decisões estratégicas no setor privado. Da <b>formulação de políticas educacionais</b> à construção de <b>ferramentas preditivas para comunidades online</b>, transformo <b>pesquisas rigorosas</b> em produtos que geram <b>impacto</b>. Atualmente, busco aplicar essa experiência no <b>setor privado</b>—utilizando dados para entender o comportamento de usuários, aprimorar produtos e apoiar decisões <b>baseadas em evidências</b>.",
  skills: [
    {
      title: "Programação",
      items: "Python, SQL, R, Stata, LaTeX, MPLUS",
      icon: Database,
      color: "text-orange-600"
    },
    {
      title: "Ferramentas de Dados",
      items: "Pandas, NumPy, Statsmodels, APIs, BeautifulSoup, Streamlit",
      icon: BarChart3,
      color: "text-orange-600"
    },
    {
      title: "Machine Learning & IA",
      items: "Scikit-Learn, TensorFlow, Keras, Hugging Face, LangChain, Teste A/B",
      icon: Brain,
      color: "text-orange-600"
    },
    {
      title: "Cloud & Deployment",
      items: "Google Cloud Platform, Docker, MLflow, Prefect",
      icon: Cloud,
      color: "text-orange-600"
    },
    {
      title: "Habilidades socio-emocionais",
      items: "Pensamento analítico e crítico, solução proativa de problemas, colaboração intercultural, storytelling com dados, liderança, adaptabilidade",
      icon: Lightbulb,
      color: "text-orange-600"
    },
    {
      title: "Idiomas",
      items: "Inglês (fluente), Português (nativo), Espanhol (avançado), Francês (básico)",
      icon: Languages, // Changed icon to match typical language icon
      color: "text-orange-600"
    }
  ],
  education: [
    {
      institution: "Le Wagon",
      degree: "Bootcamp de Ciência de Dados",
      period: "01/2025 - 03/2025",
      location: "São Paulo, Brasil",
      icon: Terminal,
      color: "bg-[#D91F26]" // Le Wagon Red
    },
    {
      institution: "Universidade de Stanford",
      degree: "Doutorado em Economia da Educação",
      period: "09/2012 - 04/2018",
      location: "Stanford, Estados Unidos",
      icon: GraduationCap,
      color: "bg-[#8C1515]"
    },
    {
      institution: "Universidade Federal de Minas Gerais",
      degree: "Mestrado em Economia",
      period: "01/2010 - 04/2012",
      location: "Belo Horizonte, Brasil",
      icon: Building2,
      color: "bg-[#1E3A8A]"
    },
    {
      institution: "FGV",
      degree: "Bacharel em Economia",
      period: "01/2006 - 12/2009",
      location: "São Paulo, Brasil",
      icon: Building2,
      color: "bg-[#1E40AF]"
    }
  ]
};
