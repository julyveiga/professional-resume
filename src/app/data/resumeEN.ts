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

export const experiencesEN: Experience[] = [
  {
    role: "Data Scientist | Causal Inference Specialist",
    company: "Stone",
    period: "09/2025 - Present",
    location: "Remote",
    logo: stoneIcon,
    description: [
      "Applying <strong>causal inference, econometrics, and data science</strong> as part of Stone's <strong>Economic Research team</strong> to evaluate the impact of strategic initiatives across marketing, credit, pricing, retention, product development, and banking.",
      "Using <strong>SQL for large-scale data analysis</strong> and <strong>Python and R</strong> for <strong>statistical modeling and experimentation</strong> to support evidence-based business decisions."
    ]
  },
  {
    role: "Founder & CEO",
    company: "Amooora",
    period: "12/2023 - Present",
    location: "São Paulo, Brazil",
    logo: amoooraIcon,
    description: [
      "Developing a <strong>data-driven platform</strong> fostering connection, advocacy, and information-sharing in a safe and inclusive space",
      "Applying <strong>machine learning and predictive analytics</strong> to personalize content, improve retention, and drive community engagement"
    ]
  },
  {
    role: "Academic Mentor (Data Science Research Projects)",
    company: "Scholar Launch",
    period: "01/2024 - Present",
    location: "Remote",
    logo: scholarIcon,
    description: [
      "Supervising and mentoring <strong>student-led research projects</strong> applying <strong>statistics, machine learning, and AI</strong> to <strong>real-world problems</strong>, from proposal to publication."
    ]
  },
  {
    role: "Senior Research Associate",
    company: "FHI 360",
    period: "05/2018 - 08/2023",
    location: "Washington, DC",
    logo: fhiIcon,
    description: [
      "<strong>Led evaluations</strong> of education programs across <strong>10+ countries</strong> (including Brazil, Ghana, Malawi, Guatemala, and El Salvador) using <strong>A/B testing, machine learning,</strong> and <strong>quasi-experimental methods</strong>",
      "Designed <strong>predictive models</strong> and assisted in 4 <strong>psychometric tools</strong> (factor analysis, PCA, clustering) to assess youth soft skills, teacher well-being, and policy impact",
      "Managed <strong>large-scale datasets</strong> (50,000+ students) to generate <strong>actionable policy insights</strong>",
      "Created <strong>interactive dashboards and visualizations</strong> for governments and international partners"
    ]
  },
  {
    role: "Senior Researcher",
    company: "Stanford University",
    period: "01/2013 - 04/2018",
    location: "Stanford, CA",
    logo: stanfordIcon,
    description: [
      "Led <strong>randomized controlled trials</strong> with 25,000+ students, applying <strong>causal inference, machine learning</strong> and <strong>A/B testing</strong> to evaluate program effectiveness",
      "Used <strong>regression and predictive modeling</strong> to identify interventions that improved attendance, test scores, and promotion rates",
      "<strong>Published peer-reviewed research</strong> and conducted classroom observation studies to inform policy and improve teacher effectiveness",
      "Co-led a seminar on Brazilian education and assisted in a flipped-classroom <strong>statistics course, mentoring</strong> Master's students on applied research methods"
    ]
  },
  {
    role: "Consultant",
    company: "Movva",
    period: "02/2015 - 12/2016",
    location: "São Paulo, Brazil",
    logo: movvaIcon,
    description: [
      "Designed and led <strong>large-scale education research</strong> in 400 public schools (30,000 students), including questionnaire development, government negotiations, field supervision, and data quality assurance",
      "Conducted <strong>impact evaluations</strong> and communicated findings through <strong>data visualizations</strong> for policymakers and public sector stakeholders"
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