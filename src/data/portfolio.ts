export const siteConfig = {
  name: "Anindya Paul",
  title: "Computer Science Student · Applied ML & AI",
  headline: "Applied ML, computer vision, and backend engineering.",
  description:
    "I build applied AI and computer vision projects, with hands-on work in AI integration and backend development. Final-year Computer Science student at BRAC University, open to internships and junior engineering roles.",
  email: "paulanindya2001@gmail.com",
  phone: "+8801537081691",
  location: "Dhaka, Bangladesh",
  resumeUrl: "/resume/Anindya_Paul_Resume.pdf",
  profileImage: "/images/profile.jpg",
  social: {
    github: "https://github.com/ShishiMaru81",
    linkedin: "https://www.linkedin.com/in/anindya-paul-5663221a8/",
    facebook: "https://www.facebook.com/anindya.paul.3348/",
    medium: "https://medium.com/@paulanindya2001",
    orcid: "https://orcid.org/0009-0006-0517-5899",
  },
} as const;

export const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Activities", href: "#achievements" },
  { label: "Contact", href: "#contact" },
] as const;

export const aboutData = {
  summary: [
    "I'm a final-year Computer Science and Engineering student at BRAC University. My interests sit where machine learning meets software: connecting models to applications and making their outputs useful to people.",
    "My project work includes AI integration for agricultural tools and local log analysis, backend development for a salon-booking platform, and a solo traffic-video analysis project. My research explores Bengali–English agricultural question answering and how models respond when information is missing.",
  ],
  highlights: [
    "AI integration and local language models",
    "Computer vision and video analysis",
    "Python and backend development",
    "Applied AI research in agriculture",
  ],
  goal: "I'm looking for internship and junior roles in applied ML, AI integration, and backend engineering, while building toward graduate research in Data Science.",
} as const;

export const skillCategories = [
  {
    title: "Machine Learning & AI",
    skills: [
      "Scikit-learn",
      "PyTorch",
      "YOLO",
      "LangChain",
      "RAG",
      "NLP",
      "Computer Vision",
      "Model Deployment",
    ],
  },
  {
    title: "Languages",
    skills: ["Python", "SQL", "Verilog", "RISC-V"],
  },
  {
    title: "Data & Analytics",
    skills: [
      "Pandas",
      "NumPy",
      "Power BI",
      "Matplotlib",
      "Seaborn",
      "Data Annotation",
    ],
  },
  {
    title: "Web Development",
    skills: [
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Streamlit",
      "HTML/CSS",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Jupyter", "Kaggle", "Figma"],
  },
  {
    title: "Soft Skills",
    skills: [
      "Leadership",
      "Presentation",
      "Team Collaboration",
      "Research",
      "UI/UX Design",
    ],
  },
] as const;

export const experiences = [
  {
    title: "AI Intern",
    company: "FlyRank",
    companyUrl: "https://flyrank.ai/",
    location: "Remote",
    type: "Internship",
    period: "July 2026 – Present",
    description: [
      "Build and iterate on projects with AI-assisted development tools, from prototyping through implementation.",
      "Explore AI-assisted marketing and content experiments alongside practical software development.",
    ],
  },
  {
    title: "Web Scraping Intern",
    company: "ScholarTrack AI",
    companyUrl: "#",
    location: "Dhaka, Bangladesh (Remote)",
    type: "Internship",
    period: "July 2025 – August 2025",
    description: [
      "Developed web-scraping pipelines to collect and structure academic data for the ScholarTrack AI platform.",
      "Worked with the team to review collected data and resolve collection issues.",
    ],
  },
  {
    title: "Data Labeler",
    company: "Sapien.io",
    companyUrl: "https://www.sapien.io/",
    location: "San Francisco, CA (Remote)",
    type: "Contract",
    period: "June 2024 – January 2025",
    description: [
      "Annotated text, image, and structured datasets for machine-learning workflows.",
      "Collaborated with data-science teams on label consistency and dataset quality.",
    ],
  },
] as const;

export const education = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "BRAC University",
    location: "Dhaka, Bangladesh",
    period: "2022 – 2026 (Expected)",
    grade: "CGPA: 3.23 / 4.00",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Udayan Uchcha Madhyamik Bidyalaya",
    location: "Dhaka, Bangladesh",
    period: "2019 – 2021",
    grade: "GPA: 5.00 / 5.00",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Udayan Uchcha Madhyamik Bidyalaya",
    location: "Dhaka, Bangladesh",
    period: "2013 – 2019",
    grade: "GPA: 5.00 / 5.00",
  },
] as const;

export const achievements = [
  {
    title: "Kaggle Competition Modeler",
    issuer: "Kaggle",
    description:
      "Built models for Kaggle competitions and earned the Competition Modeler badge.",
  },
  {
    title: "Data Visualization Competition",
    issuer: "6th Bangladesh Economics Summit 2025",
    description:
      "Participated in the 2025 Data Visualization Competition at the Bangladesh Economics Summit.",
  },
  {
    title: "Internship Completion ScholarTrack AI",
    issuer: "ScholarTrack AI",
    description:
      "Completed the ScholarTrack AI web-scraping internship.",
  },
  {
    title: "AMD Developers Hackathon",
    issuer: "AMD",
    description:
      "Participated in the AMD Developers Hackathon with an AI project team.",
  },
  {
    title: "Infinity AI Hackathon",
    issuer: "Dhaka",
    description:
      "Participated in the Infinity AI Hackathon in Dhaka as part of a project team.",
  },
] as const;

export const research = [
  {
    type: "Preprint",
    title:
      "Cross-Dataset Generalization of Bangladeshi Rice Leaf Disease Classifiers: Benchmark, Diagnosis, and Mitigation",
    authors: "Anindya Paul",
    affiliation: "BRAC University",
    date: "August 2026",
    doi: "10.48550/arXiv.2609.31709",
    doiUrl: "https://doi.org/10.48550/arXiv.2609.31709",
    arxivUrl: "https://arxiv.org/abs/2609.31709",
    zenodoUrl: "https://zenodo.org/records/21787018",
    githubUrl: "https://github.com/ShishiMaru81/Research_CV",
    description:
      "A benchmark study examining how deep learning models for rice leaf disease classification degrade when applied across different datasets. The research normalized three Bangladesh-based datasets and evaluated MobileNetV2, EfficientNet-B0, and ResNet50 across dataset combinations to diagnose and mitigate the generalization gap.",
    findings: [
      "In-dataset performance reaches 0.719 macro-F1, but drops to 0.436 cross-dataset",
      "Data augmentation improved cross-dataset performance to 0.503 macro-F1",
      "Background randomization accounted for most of the performance recovery",
    ],
    tags: ["Computer Vision", "Deep Learning", "Agricultural AI", "Benchmarking"],
  },
  {
    type: "Thesis / Journal Version",
    title:
      "Fine-Tuning Creates Confident Errors: Clarification Failure in Bengali–English Agricultural Question Answering",
    authors:
      "Awsaf Muntakim, Abdullah Ahnaf Tahmid, Sadman Hossain, Anindya Paul, and Chinmoy Bhowmick Ratul",
    affiliation: "BRAC University",
    date: "October 2026",
    pdfUrl: "/research/Thesis_IEEE_Journal_Version.pdf",
    description:
      "A bilingual Bengali–English agricultural question-answering study examining how fine-tuning affects clarification, abstention, and confident errors when irrigation queries are missing required runtime information.",
    findings: [
      "Fine-tuning improved numeric irrigation-answering performance across four open-weight language models",
      "Fine-tuned models produced confident invented values on nearly all incomplete queries",
      "Adding 300 clarification examples increased clarification while reducing invented values without detectable numeric-accuracy loss",
    ],
    tags: ["NLP", "Large Language Models", "Agricultural AI", "Bengali–English"],
  },
] as const;
