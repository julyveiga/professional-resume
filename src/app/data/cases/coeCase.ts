export type CaseMetric = {
  label: string;
  value: string;
};

export type CaseHighlight = {
  title: string;
  description: string;
  tone: 'blue' | 'purple' | 'green';
};

export type CasePillar = {
  label: string;
  value: string;
};

export type CasePractice = {
  title: string;
  description: string;
};

export const coeCaseData = {
  header: {
    eyebrow: 'Projeto recente',
    title: 'Center of Excellence (CoE)',
    subtitle: 'Transformando operações de Produto & Design em um sistema escalável',
  },
  overview: {
    sectionNumber: '0',
    sectionTitle: 'Overview',
    description:
      'Construção de um modelo global de operações para escalar qualidade, eficiência e maturidade em Produto & Design. Criação de um ecossistema operacional que conecta estratégia à execução, com impacto direto na experiência do consumidor, eficiência dos times e maturidade organizacional.',
    metrics: [
      { label: 'Problemas resolvidos pré-produção', value: '94%' },
      { label: 'Evolução de Maturidade', value: '2.7 → 4.11' },
      { label: 'Escala', value: 'Global' },
      { label: 'Redução de retrabalho', value: '+60%' },
    ] as CaseMetric[],
  },
  strategies: {
    sectionNumber: '0.1',
    sectionTitle: 'Estratégia',
    description:
      'Criação de um Center of Excellence (CoE) como núcleo estruturante de Produto & Design, com objetivo de conectar estratégia à execução cmo indicadores claros de medição e impacto.',
    highlights: [
      {
        title: 'Governança',
        description: 'Papel, responsabilidades e fóruns de decisão',
        tone: 'blue',
      },
      {
        title: 'Rituais',
        description: 'Cadência global de acompanhamento e priorização',
        tone: 'purple',
      },
      {
        title: 'Métricas',
        description: 'Indicadores de maturidade e execução contínua',
        tone: 'green',
      },
    ] as CaseHighlight[],
  },
  context: {
    sectionNumber: '1',
    sectionTitle: 'Contexto',
    text: 'A empresa operava com múltiplos times de Produto e Design distribuídos, com desafios de consistência, governança e eficiência operacional. A ausência de um modelo estruturado impactava a qualidade das entregas, a escalabilidade e a tomada de decisão.',
  },
  problem: {
    sectionNumber: '2',
    sectionTitle: 'Problema',
    items: [
      'Baixa visibilidade sobre qualidade das entregas',
      'Inconsistência entre times e produtos',
      'Falta de governança estruturada',
      'Processos pouco padronizados',
      'Dificuldade de escalar boas práticas',
    ],
  },
  strategyPillars: {
    sectionNumber: '3',
    sectionTitle: 'Estratégia',
    description:
      'Criar um Center of Excellence (CoE) como núcleo central de Produto & Design, com papel de estruturar governança, definir padrões e frameworks, elevar maturidade organizacional e conectar estratégia à execução.',
    pillars: [
      { label: '1º Pilar', value: 'People' },
      { label: '2º Pilar', value: 'Process' },
      { label: '3º Pilar', value: 'Performance' },
    ] as CasePillar[],
  },
  solution: {
    sectionNumber: '4',
    sectionTitle: 'Solução',
    items: [
      'Roadmap de implementação de CoE',
      'Rituais de alinhamento entre Product e Design',
      'Governança e papéis com clareza de decisão',
      'Modelo de escala para países e squads',
      'Framework de performance operacional',
      'Padrões de documentação e comunicação',
    ],
    miniCards: [
      {
        title: 'People',
        description: 'Papéis claros e liderança distribuída.',
        tone: 'purple',
      },
      {
        title: 'Process',
        description: 'Rituais e fluxo de execução padronizados.',
        tone: 'blue',
      },
      {
        title: 'Performance',
        description: 'Medição contínua para melhoria de maturidade.',
        tone: 'green',
      },
    ] as CaseHighlight[],
  },
  practices: {
    sectionNumber: '5',
    sectionTitle: 'Boas práticas do CoE',
    items: [
      {
        title: 'People First Mindset',
        description: 'Foco em colaboração, autonomia e ownership.',
      },
      {
        title: 'Center Excellence',
        description: 'Governança global com padrões replicáveis.',
      },
      {
        title: 'Data-Driven Decisions',
        description: 'Priorização e acompanhamento por indicadores.',
      },
      {
        title: 'Fail Fast',
        description: 'Aprendizado rápido com pilotos e ajustes curtos.',
      },
    ] as CasePractice[],
  },
  execution: {
    sectionNumber: '5.1',
    sectionTitle: 'Execução',
    items: [
      'Diagnóstico da operação por região e diretoria.',
      'Definição dos pilares e arquitetura de governança.',
      'Construção de rituais e playbooks do CoE.',
      'Pilotos com times prioritários e ciclos de feedback.',
      'Escala gradual do modelo para operação global.',
      'Medição contínua de maturidade e eficiência.',
    ],
  },
  impact: {
    sectionNumber: '6',
    sectionTitle: 'Impacto',
    cards: [
      { label: 'People', value: 'Maior clareza de papéis' },
      { label: 'Process', value: 'Operação mais previsível' },
      { label: 'Performance', value: 'Evolução contínua de maturidade' },
    ],
    metrics: [
      { label: 'Maturidade de time de Produto', value: '2.7 → 4.11' },
      { label: 'Problemas resolvidos antes da produção', value: '94%' },
    ] as CaseMetric[],
    bullets: [
      'Escala de boas práticas globalmente',
      'Melhor previsibilidade de entregas estratégicas.',
      'Aumento significativo de consistência entre produtos',
    ],
  },
  organizationalImpact: {
    sectionNumber: '7',
    sectionTitle: 'Escala e impacto organizacional',
    description:
      'O CoE se tornou referência interna e modelo replicável, influenciando a criação de outras estruturas na companhia e consolidando Produto & Design como drivers estratégicos.',
    badgeText: 'Estratégia operacional implementada com impacto global e ganhos mensuráveis',
  },
  footerButtonText: 'Voltar ao currículo',
};
