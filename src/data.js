export const meta = {
  name: 'Shreya Goel',
  title: 'Data & Analytics Professional',
  tagline: 'Turning messy data into decisions that stick.',
  email: 'sgoel@scu.edu',
  phone: '+1 (669) 234-2087',
  location: 'San Jose, CA',
  linkedin: 'https://www.linkedin.com/in/shreyagoel0501/',
  github: 'https://github.com/shreyagoel0501',
  heroDescription: `I build analytics pipelines, ML models, and BI systems that help organizations move from gut-feel to evidence. From engineering 26+ enterprise integrations at Deloitte to building LLM evaluation frameworks at Microsoft, I work at the intersection of data engineering, machine learning, and business strategy.`,
  about: `I started in software — building databases, APIs, and full-stack platforms — then spent three years at Deloitte translating that technical fluency into enterprise analytics for healthcare and public-sector clients. Now I'm deepening that foundation with an MS in Business Analytics at Santa Clara University, where I've maintained a 4.0 GPA and placed 2nd in a competitive forecasting showdown against my cohort.\n\nWhat I care about: making data useful. Not just technically correct, but actionable. I've standardized KPIs for hospital networks, quantified wage disparities in H-1B data, and built retrieval-augmented AI assistants — and every project starts with the same question: what decision does this need to support?\n\nWhen I'm not deep in a notebook, I'm probably reading about behavioral economics or wondering why more dashboards don't just say what they mean.`,
}

export const experience = [
  {
    company: 'Microsoft',
    role: 'AI Meeting Effectiveness Practicum',
    location: 'Redmond, United States',
    period: 'Jan 2026 – Present',
    bullets: [
      'Built an LLM-driven evaluation pipeline using Azure Video Indexer for transcript ingestion and Microsoft Foundry for scalable prompt-based processing across topic blocks, turn-groups, and speaker-splits.',
      'Engineered structured extractors for action items, tone shifts, responsiveness, agenda adherence, and conversational repair — producing consistent JSON outputs for downstream scoring.',
      'Developed confidence-aware scoring models covering participation, engagement, structure, sentiment, and professionalism to support Microsoft\'s AI-assisted meeting analytics research.',
    ],
  },
  {
    company: 'Deloitte Consulting USI',
    role: 'Workday Financials Technical Analyst',
    location: 'Mumbai, India',
    period: 'Aug 2022 – Aug 2025',
    bullets: [
      'Built and maintained 26+ ETL/data pipelines and integrations at 99.9% uptime, enabling financial data analysis, reporting, and dashboarding across banking, procurement, and settlement workflows for healthcare and public-sector clients.',
      'Led delivery of 15+ enterprise integrations and analytics reports, partnering with cross-functional stakeholders to migrate PeopleSoft to Workday, standardize KPIs, and enable audit-ready decision-support dashboards.',
      'Acting Integration Lead for 2 months on a large public-sector university engagement, coordinating analysts, developers, and finance stakeholders to automate critical workflows and accelerate go-live timelines.',
      'Engineered 13 integrations replacing legacy PeopleSoft logic for a regional academic medical center, stabilizing cutover and implementing automated exception tracking that reduced manual investigation time.',
      'Optimized procurement and purchase-order pipelines for a multi-hospital healthcare network, reducing system failures and improving downstream reporting accuracy via BIRT analytics reports.',
    ],
  },
  {
    company: 'AIESEC in Bengaluru',
    role: 'Team Leader, Outgoing Global Talent',
    location: 'Bengaluru, India',
    period: 'Feb 2020 – Jan 2021',
    bullets: [
      'Streamlined recruiting and international coordination processes, reducing placement turnaround time and improving global collaboration across partner organizations.',
    ],
  },
]

export const education = [
  {
    school: 'Santa Clara University, Leavey School of Business',
    degree: 'Master of Science in Business Analytics',
    location: 'Santa Clara, CA',
    period: 'Dec 2026',
    gpa: '4.0',
    honors: "Dean's List (Winter 2026, Fall 2025)",
    highlight: '2nd Place, Fall 2025 Analytics Showdown — XGBoost sales forecasting model, 89% accuracy',
    coursework: [
      'Machine Learning with Python',
      'Prescriptive Analytics',
      'GenAI for the Enterprise',
      'Database Management & SQL',
      'Dashboards with Tableau',
      'Data Driven Marketing with R',
      'Data Analytics with Python',
      'Linear Algebra',
    ],
  },
  {
    school: 'Christ University',
    degree: 'Bachelor of Science in Computer Science, Mathematics & Statistics',
    location: 'Bangalore, India',
    period: 'May 2022',
    gpa: null,
    honors: null,
    highlight: null,
    coursework: [],
  },
]

export const projects = [
  {
    title: 'Wine Quality Prediction',
    period: 'Winter 2026',
    description: 'Built a classification pipeline on the UCI Vinho Verde dataset that achieved 0.90 AUC with XGBoost. Engineered domain-specific features (sulphur ratio, total acidity, body index), applied SMOTE to address class imbalance, and benchmarked across Logistic Regression, Decision Trees, and Gradient Boosting.',
    tags: ['XGBoost', 'SMOTE', 'Feature Engineering', 'Python', 'Scikit-learn'],
  },
  {
    title: 'AI Gym Agent',
    period: 'Winter 2026',
    description: 'Built a LangChain retrieval-augmented AI assistant using vector embeddings to deliver personalized workout recommendations. Improved response relevance by ~35% through retrieval optimization and iterative prompt tuning.',
    tags: ['LangChain', 'RAG', 'Vector Embeddings', 'Python', 'Prompt Engineering'],
  },
  {
    title: 'H-1B Wage Fairness Analytics',
    period: 'Fall 2025',
    description: 'Developed an end-to-end Python analytics pipeline integrating U.S. Department of Labor and Bureau of Labor Statistics datasets. Performed statistical modeling and dashboard visualizations to quantify H-1B wage premiums and occupational disparities across industries.',
    tags: ['Python', 'Statistical Modeling', 'Data Visualization', 'Pandas', 'Policy Analytics'],
  },
  {
    title: 'Sentiment Analysis on X (Twitter)',
    period: 'Fall 2025',
    description: 'Built a Python-based NLP sentiment analysis model on Twitter data to analyze public opinion polarity on a high-volume political topic, surfacing trends and opinion shifts across the dataset.',
    tags: ['NLP', 'Sentiment Analysis', 'Python', 'Twitter API'],
  },
  {
    title: 'The Book Spot — Community Reading Platform',
    period: 'Winter 2022',
    description: 'Engineered a full-stack web platform with authentication, social features, and integrated commerce workflows. Designed scalable databases and APIs, and delivered 5+ end-to-end features in an agile team environment.',
    tags: ['Full-Stack', 'REST APIs', 'Database Design', 'Agile'],
  },
]

export const skills = [
  {
    category: 'Programming & Data',
    items: [
      { name: 'Python (Pandas, NumPy, Sklearn)', level: 90 },
      { name: 'SQL', level: 88 },
      { name: 'R (Tidyverse, ggplot2, Shiny)', level: 75 },
    ],
  },
  {
    category: 'Machine Learning & AI',
    items: [
      { name: 'Supervised Learning (Classification, Regression)', level: 85 },
      { name: 'Ensemble Methods (XGBoost, Gradient Boosting)', level: 82 },
      { name: 'NLP & LLM Pipelines', level: 72 },
      { name: 'Model Evaluation & A/B Testing', level: 80 },
    ],
  },
  {
    category: 'BI & Visualization',
    items: [
      { name: 'Tableau', level: 85 },
      { name: 'Excel (Advanced)', level: 88 },
      { name: 'BIRT (Business Intelligence & Reporting)', level: 78 },
      { name: 'Dashboard Design & KPI Systems', level: 83 },
    ],
  },
  {
    category: 'Enterprise & Delivery',
    items: [
      { name: 'Workday Financials / Studio', level: 90 },
      { name: 'ETL Pipeline Engineering', level: 85 },
      { name: 'Stakeholder Communication', level: 88 },
      { name: 'Cross-functional Delivery', level: 85 },
    ],
  },
]
