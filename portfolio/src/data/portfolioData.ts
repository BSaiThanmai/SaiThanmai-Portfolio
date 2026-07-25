import { PersonalInfo, Project, Experience, SkillCategory, Certification, EducationItem } from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: "Badri Saithanmai",
  headline: "AI/ML Developer & Data Analyst",
  bio: "Motivated Computer Science (AIML) engineer specializing in predictive modeling, speech AI integration, structured data querying, and machine learning pipelines.",
  fullBio: "Motivated Computer Science (AIML) student with strong foundations in Python, OOPs, DBMS, and core software development concepts. Hands-on experience in building and deploying machine learning models through academic and internship projects. Comfortable working with databases, writing structured queries, and applying problem-solving skills to real-world scenarios. Eager to contribute as an IT & Digital Technologies Intern while continuously learning and adapting to industry standards.",
  email: "hthanmai@gmail.com",
  phone: "+91 9347765443",
  location: "Hyderabad, Telangana, India",
  cgpa: "7.91 / 10.0",
  github: "https://github.com/BSaiThanmai",
  linkedin: "https://www.linkedin.com/in/saithanmai",
  stats: [
    { label: "B.Tech AIML CGPA", value: "7.91", description: "MallaReddy Institute of Tech & Sciences" },
    { label: "ML & AI Projects", value: "3+", description: "Predictive Models, Ransomware Detection & Voice AI" },
    { label: "Internships Completed", value: "2", description: "SAL Biosciences & Edunet Foundation" },
    { label: "Certifications", value: "4+", description: "Azure ML, Power BI, Voice AI, AI Tools" }
  ]
};

export const projectsData: Project[] = [
  {
    id: "ai-sales-call-agent",
    title: "AI Sales Call Agent",
    shortDesc: "Automated real-time voice sales agent combining Python, Flask, Gemini API, and Twilio webhooks.",
    fullDesc: "Developed an end-to-end AI-powered voice sales agent using Python, Gemini API, and Twilio to automate interactive customer communications. Features real-time speech processing, intelligent LLM-generated responses, and secure webhook communication integrated via Flask and ngrok.",
    category: "Voice & Web AI",
    tags: ["Python", "Flask", "Gemini API", "Twilio", "ngrok", "Voice Processing"],
    githubUrl: "https://github.com/BSaiThanmai/AI-Call-Agent",
    liveUrl: "https://github.com/BSaiThanmai/AI-Call-Agent",
    featured: true,
    highlights: [
      "Integrated speech recognition and real-time Gemini LLM response generation.",
      "Configured secure webhook communication using Flask and ngrok for live call handling.",
      "Automated customer engagement workflows with customizable conversational paths."
    ],
    metrics: "Real-time AI voice interaction & webhook integration"
  },
  {
    id: "ransomware-detection-ml",
    title: "Ransomware Detection System",
    shortDesc: "Machine learning ransomware detection classifier using system disk & usage behavior analytics.",
    fullDesc: "Built a machine learning-based ransomware detection system that monitors disk and system activity patterns. Utilized advanced feature extraction and classification algorithms to identify malicious ransomware footprints with high accuracy.",
    category: "Machine Learning",
    tags: ["Python", "Machine Learning", "Feature Extraction", "Scikit-Learn", "Cybersecurity", "Data Analysis"],
    githubUrl: "https://github.com/BSaiThanmai/Ransomware-Detection",
    liveUrl: "https://github.com/BSaiThanmai/Ransomware-Detection",
    featured: true,
    highlights: [
      "Analyzed system activity logs and disk usage metrics to perform feature extraction.",
      "Trained and evaluated classification algorithms to detect anomalous ransomware behavior.",
      "Achieved boosted detection accuracy through hyperparameter tuning and cross-validation."
    ],
    metrics: "Behavioral disk analytics & automated anomaly classification"
  },
  {
    id: "calories-burned-prediction",
    title: "Calories Burned Prediction Model",
    shortDesc: "Predictive regression ML model calculating calories burned based on user exercise metrics.",
    fullDesc: "Developed a machine learning regression model to accurately forecast calories burned based on individual user parameters such as exercise duration, heart rate, body temperature, and physical demographics.",
    category: "Machine Learning",
    tags: ["Python", "Pandas", "NumPy", "Regression", "Exploratory Data Analysis", "Matplotlib"],
    githubUrl: "https://github.com/BSaiThanmai/Calories-Burned-Prediction",
    liveUrl: "https://github.com/BSaiThanmai/Calories-Burned-Prediction",
    featured: true,
    highlights: [
      "Executed data cleaning, preprocessing, and exploratory data analysis (EDA) using Pandas & NumPy.",
      "Applied linear & ensemble regression algorithms to predict caloric expenditure accurately.",
      "Evaluated model performance using RMSE, R² metrics, and visual residual diagnostics."
    ],
    metrics: "Optimized regression pipeline with comprehensive EDA"
  }
];

export const educationData: EducationItem = {
  degree: "B.Tech in Computer Science (Artificial Intelligence & Machine Learning)",
  institution: "MallaReddy Institute of Technology And Sciences",
  location: "Hyderabad, Telangana, India",
  period: "2022 – 2026",
  grade: "CGPA: 7.91 / 10.0",
  highlights: [
    "Specializing in Artificial Intelligence, Machine Learning algorithms, Data Engineering, and DBMS.",
    "Active participant in technical hackathons and collegiate Learnathon volunteer initiatives.",
    "Consistently maintained a 7.91 CGPA with hands-on coursework in Python, Data Structures, and SQL."
  ]
};

export const experiencesData: Experience[] = [
  {
    id: "sal-biosciences",
    role: "Data Analyst & AI/ML Intern",
    company: "SAL Biosciences Pvt. Ltd.",
    location: "Hyderabad, Telangana",
    period: "January 2026 – July 2026",
    type: "Internship",
    description: [
      "Applied Python, SQL, and machine learning techniques for data analysis, visualization, and executive business reporting.",
      "Assisted in dataset preparation, analytical report development, and database management to support data-driven decision-making.",
      "Built structured SQL queries and automated analytical workflows to streamline research data processing."
    ],
    skillsUsed: ["Python", "SQL", "Data Cleaning", "Data Visualization", "Pandas", "Business Intelligence"]
  },
  {
    id: "edunet-foundation",
    role: "Foundations of AI Intern",
    company: "Edunet Foundation",
    location: "Remote / Hybrid",
    period: "April 2025 – May 2025",
    type: "Internship",
    description: [
      "Developed and deployed ML models using Microsoft Azure Cognitive Services and Azure ML Studio for AI-based applications.",
      "Gained hands-on experience in data preprocessing, model evaluation, and integrating REST APIs for scalable AI solutions."
    ],
    skillsUsed: ["Azure ML Studio", "Azure Cognitive Services", "Model Deployment", "Python", "API Integration"]
  }
];

export const skillCategoriesData: SkillCategory[] = [
  {
    category: "Data Analysis & ML",
    iconName: "BrainCircuit",
    skills: [
      { name: "Python", level: "Advanced" },
      { name: "Pandas & NumPy", level: "Advanced" },
      { name: "Machine Learning Basics", level: "Intermediate" },
      { name: "LLM Fundamentals", level: "Intermediate" },
      { name: "Data Cleaning & Preprocessing", level: "Advanced" },
      { name: "Exploratory Data Analysis", level: "Advanced" }
    ]
  },
  {
    category: "Visualization & Dashboards",
    iconName: "BarChart3",
    skills: [
      { name: "Power BI", level: "Certified" },
      { name: "Matplotlib", level: "Intermediate" },
      { name: "Seaborn", level: "Intermediate" },
      { name: "Dashboard Design", level: "Intermediate" }
    ]
  },
  {
    category: "Databases & Web APIs",
    iconName: "Database",
    skills: [
      { name: "SQL Databases", level: "Intermediate" },
      { name: "Flask Web Framework", level: "Intermediate" },
      { name: "Twilio & Webhooks", level: "Intermediate" },
      { name: "Gemini API Integration", level: "Intermediate" }
    ]
  },
  {
    category: "Tools & Environment",
    iconName: "Wrench",
    skills: [
      { name: "Jupyter Notebook", level: "Advanced" },
      { name: "Git & GitHub", level: "Intermediate" },
      { name: "Microsoft Azure ML Studio", level: "Certified" },
      { name: "MS Excel & MS Office", level: "Advanced" },
      { name: "ngrok Tunneling", level: "Intermediate" }
    ]
  },
  {
    category: "Soft Skills",
    iconName: "Users",
    skills: [
      { name: "Problem Solving", level: "Core Value" },
      { name: "Analytical Thinking", level: "Core Value" },
      { name: "Team Collaboration", level: "Core Value" },
      { name: "Fast Learner", level: "Core Value" }
    ]
  }
];

export const certificationsData: Certification[] = [
  {
    id: "cert-ai-sales-agent",
    title: "AI Sales Call Agent Certification",
    issuer: "10000Coders",
    description: "Specialized certification in building interactive voice AI systems, webhook routing, and LLM integrations.",
    badge: "Voice AI Expert"
  },
  {
    id: "cert-power-bi",
    title: "Power BI Data Visualization Certification",
    issuer: "10000Coders",
    description: "Mastery of interactive dashboard creation, DAX queries, and data model transformation.",
    badge: "BI Analytics"
  },
  {
    id: "cert-learning-ai-tools",
    title: "Learning AI Tools Certification",
    issuer: "OutSkill",
    description: "Hands-on training with modern generative AI productivity, workflow automation, and LLM interfaces.",
    badge: "GenAI Specialist"
  },
  {
    id: "hackathon-bionic-eye",
    title: "Bionic Eye Innovation Project",
    issuer: "College Hackathon Showcase",
    description: "Presented an innovative hardware-software concept for visual accessibility at a competitive collegiate hackathon.",
    badge: "Hackathon Presenter"
  },
  {
    id: "learnathon-volunteer",
    title: "Learnathon Volunteer Leadership",
    issuer: "MallaReddy Institute of Technology and Sciences",
    description: "Contributed to peer learning, technical awareness sessions, and campus coding workshops.",
    badge: "Community Lead"
  }
];
