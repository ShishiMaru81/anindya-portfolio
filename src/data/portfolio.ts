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
  { label: "Achievements", href: "#achievements" },
  { label: "Research", href: "#research" },
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
  {
    title: "AI Intern",
    company: "FlyRank",
    companyUrl: "https://flyrank.ai/",
    location: "Remote",
    type: "Internship",
    period: "July 2026 – January 2027",
    description: [
      "Learning to use artificial intelligence as a practical co-pilot rather than a replacement for busywork, applying it to build portfolio-worthy projects end to end.",
      "Running AI-assisted marketing experiments to understand how automation and content generation can drive organic growth.",
      "Writing and shipping code faster by pairing with AI tools throughout the development workflow, from prototyping to deployment.",
    ],
  },
] as const;

export const projects = [
  {
    title: "AgroSphere AI",
    description:
      "A bilingual agricultural workspace combining crop-photo screening, rainfall preparedness, market comparisons, and harvest planning for farmers in Bangladesh.",
    techStack: ["Next.js", "TypeScript", "FastAPI", "PyTorch", "PostgreSQL"],
    features: [
      "Crop-photo screening with vision models and local model fallback",
      "Location-based weather and rainfall preparedness",
      "Farm management and harvest decision snapshots",
      "Marketplace prototype with fixed-price listings and auctions",
    ],
    github: "https://github.com/ShishiMaru81/AI-BUILDERS-",
    featured: true,
  },
  {
    title: "Tracewatch — Local AI Log Analyzer",
    description:
      "A local security log analyzer that combines a small language model with event correlation to produce deduplicated findings backed by original log lines. Analysis runs without cloud AI services.",
    techStack: ["Python", "FastAPI", "Qwen2.5", "llama.cpp", "SQLite"],
    features: [
      "Local CPU inference with a quantized language model",
      "Token-aware chunking and checkpointed analysis",
      "Security event correlation across log entries",
      "Deduplicated reports with source-line evidence",
    ],
    github: "https://github.com/ShishiMaru81/TraceWatch---Local-Log-Analyzer-",
    featured: true,
  },
  {
    title: "Traffic Accident Detection",
    description:
      "A computer vision prototype that combines a custom YOLOv8 crash detector with vehicle detection to annotate road videos and estimate traffic density.",
    techStack: ["Python", "YOLOv8", "OpenCV", "Ultralytics"],
    features: [
      "Crash detection using custom-trained YOLOv8 weights",
      "Vehicle counts for common road users",
      "Traffic density estimates from detected vehicle counts",
      "Annotated video output with accident status overlays",
    ],
    github: "https://github.com/ShishiMaru81/smart-traffic-accident-detector",
    featured: true,
  },
  {
    title: "GlamNet — Smart Salon Network",
    description:
      "A full-stack salon booking platform built with the MERN stack, bringing together service discovery, appointment scheduling, customer reviews, and salon management.",
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "JWT"],
    features: [
      "Salon discovery and service recommendations",
      "Appointment booking and staff schedule management",
      "Customer reviews with sentiment analysis",
      "Authenticated customer and salon workflows",
    ],
    github: "https://github.com/ShishiMaru81/GlamNet",
    featured: true,
  },
  {
    title: "CineSuggest — Movie Recommendations",
    description:
      "A content-based movie recommender that uses TF-IDF features and cosine similarity to find related films through an interactive Streamlit interface.",
    techStack: ["Python", "Scikit-learn", "Streamlit", "Pandas"],
    features: [
      "Movie metadata vectorization with TF-IDF",
      "Content similarity ranking with cosine similarity",
      "Approximate title matching for user input",
      "Interactive movie search and recommendations",
    ],
    github: "https://github.com/ShishiMaru81/CineSuggest",
    featured: false,
  },
  {
    title: "Smart Object Detection & Tracking",
    description:
      "A YOLOv8 computer vision project for detecting and tracking objects in webcam feeds and video files, with class labels, confidence scores, and visual annotations.",
    techStack: ["Python", "YOLOv8", "OpenCV", "cvzone", "SORT"],
    features: [
      "Object detection from webcam feeds and video files",
      "Bounding boxes with class labels and confidence scores",
      "Multi-frame object tracking with SORT",
      "FPS display for monitoring processing speed",
    ],
    github: "https://github.com/ShishiMaru81/Smart-Object-Detection-YOLOv8",
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
  {
    title: "AMD Developers Hackathon",
    issuer: "AMD",
    description:
      "Participated in the AMD Developers Hackathon, collaborating on AI-driven solutions and gaining hands-on experience with high-performance computing tools.",
  },
  {
    title: "Infinity AI Hackathon",
    issuer: "Dhaka",
    description:
      "Participated in the Infinity AI Hackathon in Dhaka, building AI-powered solutions under time constraints alongside fellow developers and researchers.",
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
