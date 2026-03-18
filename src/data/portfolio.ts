export const siteConfig = {
  name: "Anindya Paul",
  title: "ML & AI Enthusiast",
  headline: "Building intelligent solutions with data and code.",
  description:
    "Final-year Computer Science student at BRAC University, specializing in Machine Learning, AI, and data-driven applications. I turn complex problems into practical, impactful solutions.",
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
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;

export const aboutData = {
  summary: [
    "I'm a final-year Computer Science and Engineering student at BRAC University with a focused interest in Machine Learning and Artificial Intelligence. I enjoy building practical, data-driven solutions from recommendation engines and predictive models to computer vision systems and AI-powered chatbots.",
    "My hands-on experience spans ML model development, data annotation for production AI systems, full-stack web development, and participation in Kaggle competitions. I approach every project with a builder's mindset: understand the problem, design the solution, ship it.",
    "Currently, I'm working on my thesis, a Smart Irrigation Advisory System that uses Agentic RAG to help farmers make water-efficient crop cultivation decisions. This research sits at the intersection of AI and agriculture, an area where technology can drive real-world impact.",
  ],
  highlights: [
    "Machine Learning & AI model development",
    "Computer Vision (YOLOv8, OpenCV)",
    "Retrieval-Augmented Generation (RAG)",
    "Full-stack development (MERN, Streamlit)",
    "Data annotation & analysis at scale",
    "Research in applied AI for agriculture",
  ],
  goal: "My goal is to strengthen my expertise in machine learning engineering and applied AI while pursuing advanced research and graduate studies in Data Science.",
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
    skills: ["Python", "SQL", "Verilog","RiSC-V"],
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
    title: "Data Labeler",
    company: "Sapien.io",
    companyUrl: "https://www.sapien.io/",
    location: "San Francisco, CA (Remote)",
    type: "Contract",
    period: "June 2024 – January 2025",
    description: [
      "Annotated and labeled diverse datasets including text, images, and structured data to train machine learning models with high accuracy standards.",
      "Collaborated directly with data science teams to ensure data relevance, consistency, and model compatibility across multiple annotation projects.",
      "Identified bottlenecks in annotation workflows and suggested improvements that increased team efficiency and output quality.",
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
      "Developed and executed web scraping pipelines to collect and structure academic data for the ScholarTrack AI platform.",
      "Demonstrated strong analytical and problem-solving skills, contributing meaningfully to assigned data collection projects.",
      "Collaborated effectively with the team under supervision of the CEO, earning recognition for dedication and professionalism.",
    ],
  },
] as const;

export const projects = [
  {
    title: "MEdiBot Medical ChatBot",
    description:
      "An AI-powered medical chatbot using Retrieval-Augmented Generation (RAG) that answers health-related queries with context-aware, evidence-based responses. Reduces hallucination through vector-search-based document retrieval.",
    techStack: ["Python", "LangChain", "VectorDB", "LLMs", "RAG"],
    features: [
      "Context-aware medical Q&A with evidence-based responses",
      "Document retrieval using embeddings and vector search",
      "Interactive real-time Q&A interface",
      "Reduced hallucination through grounded retrieval",
    ],
    github: "https://github.com/ShishiMaru81",
    featured: true,
  },
  {
    title: "GlamNet Smart Salon Network",
    description:
      "A full-stack MERN web platform connecting customers with salons and barbers across Dhaka through smart service discovery, real-time availability, and online appointment booking.",
    techStack: ["MongoDB", "Express.js", "React", "Node.js"],
    features: [
      "Smart service discovery and salon search",
      "Online appointment booking with real-time availability",
      "Customer and salon dashboard interfaces",
      "Responsive design for mobile and desktop",
    ],
    github: "https://github.com/ShishiMaru81",
    featured: true,
  },
  {
    title: "Smart Movie Recommendation",
    description:
      "A content-based movie recommendation system using cosine similarity on movie metadata features. Deployed with Streamlit for an interactive, user-friendly experience.",
    techStack: ["Python", "Scikit-learn", "Streamlit", "Pandas"],
    features: [
      "Content-based filtering with cosine similarity",
      "Interactive UI with real-time recommendations",
      "Clean data preprocessing pipeline",
      "Deployed as a Streamlit web application",
    ],
    github: "https://github.com/ShishiMaru81/CineSuggest",
    featured: true,
  },
  {
    title: "Smart Object Detection",
    description:
      "Real-time object detection system built on YOLOv8 for video stream processing with bounding box visualization, confidence scoring, and camera-based tracking.",
    techStack: ["Python", "YOLOv8", "OpenCV"],
    features: [
      "Real-time object detection on video streams",
      "Bounding box visualization with confidence scores",
      "Fast camera-based object tracking pipeline",
    ],
    github: "https://github.com/ShishiMaru81",
    featured: false,
  },
  {
    title: "Fake News Detection",
    description:
      "A machine learning classifier to detect the authenticity of news articles using natural language processing techniques and trained models.",
    techStack: ["Python", "Scikit-learn", "NLP", "Pandas"],
    features: [
      "Text classification for news authenticity",
      "NLP-based feature extraction",
      "Model evaluation and comparison",
    ],
    github: "https://github.com/ShishiMaru81/NewsAuthenticityChecker",
    featured: false,
  },
] as const;

export const education = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "BRAC University",
    location: "Dhaka, Bangladesh",
    period: "2022 – 2026 (Expected)",
    grade: "CGPA: 3.23 / 4.00",
    thesis:
      "Smart Irrigation Advisory System Using Agentic RAG for Water-Efficient Crop Cultivation",
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
      "Earned the Competition Modeler badge for participating in and building models for Kaggle machine learning competitions.",
  },
  {
    title: "Data Visualization Competition",
    issuer: "6th Bangladesh Economics Summit 2025",
    description:
      "Participated in the Data Visualization Competition at the 6th Bangladesh Economics Summit, demonstrating skills in data storytelling and visual analytics.",
  },
  {
    title: "Internship Completion ScholarTrack AI",
    issuer: "ScholarTrack AI",
    description:
      "Successfully completed internship with recognition for dedication, professionalism, and meaningful contributions to data collection projects.",
  },
] as const;
