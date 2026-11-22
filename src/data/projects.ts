export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  github: string;
  featured: boolean;
  collaboration: string;
  role: string;
  visual: "agrosphere" | "tracewatch" | "traffic" | "glamnet" | "cinema" | "detection";
  problem: string;
  contribution: string;
  challenge: string;
  outcome: string;
  evidence: { label: string; url: string };
}

export const projects: Project[] = [
  {
    id: "agrosphere", title: "AgroSphere AI", category: "Applied AI · Agriculture",
    description: "A bilingual farming workspace that brings crop-photo screening, weather context, and harvest planning into one place.",
    techStack: ["Next.js", "FastAPI", "PyTorch", "PostgreSQL"],
    github: "https://github.com/ShishiMaru81/AI-BUILDERS-", featured: true,
    collaboration: "Team project", role: "AI integration", visual: "agrosphere",
    problem: "Help farmers connect a crop observation with useful next steps in English or Bangla.",
    contribution: "I handled AI integration within the team's agricultural application.",
    challenge: "Connect photo screening to the application while making model uncertainty and unavailable providers visible to the user.",
    outcome: "The project supports crop-photo screening with local-model fallback and saved cases. The captures show farmer chat and Bangla action guidance; field accuracy has not been independently established.",
    evidence: { label: "Screening design & limitations", url: "https://github.com/ShishiMaru81/AI-BUILDERS-/blob/main/docs/agrodoctor-multicrop.md" },
  },
  {
    id: "tracewatch", title: "Tracewatch", category: "Local AI · Security tooling",
    description: "A local log analyzer that combines a small language model with event correlation and source-linked findings.",
    techStack: ["Python", "FastAPI", "Qwen2.5", "llama.cpp", "SQLite"],
    github: "https://github.com/ShishiMaru81/TraceWatch---Local-Log-Analyzer-", featured: true,
    collaboration: "Team project", role: "AI integration", visual: "tracewatch",
    problem: "Investigate server logs without sending their contents to a cloud AI service.",
    contribution: "I handled the AI integration for the team's local log-analysis workflow.",
    challenge: "Work within a 2,048-token model context while preserving source evidence across multiple chunks.",
    outcome: "A recorded verification run processed all 258 source lines with 34 map calls, 5 reduce calls, and no failed calls. This is one documented run, rather than a detection-accuracy benchmark.",
    evidence: { label: "Recorded verification run", url: "https://github.com/ShishiMaru81/TraceWatch---Local-Log-Analyzer-/blob/main/artifacts/verification.json" },
  },
  {
    id: "traffic", title: "Traffic Accident Detection", category: "Computer vision · Video analysis",
    description: "A video-analysis prototype that combines crash detection, vehicle counts, and traffic-density overlays.",
    techStack: ["Python", "YOLOv8", "OpenCV", "Ultralytics"],
    github: "https://github.com/ShishiMaru81/smart-traffic-accident-detector", featured: true,
    collaboration: "Solo project", role: "Computer vision pipeline", visual: "traffic",
    problem: "Bring crash detection and surrounding traffic context together in one annotated video.",
    contribution: "I built this solo project, combining a custom crash detector with pretrained vehicle detection and an OpenCV video pipeline.",
    challenge: "Combine two model outputs on each frame and keep vehicle counts, crash status, and density estimates aligned in the saved video.",
    outcome: "The pipeline detects five road-user classes and writes annotated video with crash status and count-based density estimates. It is a prototype, with no claim of deployment in a live safety system.",
    evidence: { label: "Video pipeline source", url: "https://github.com/ShishiMaru81/smart-traffic-accident-detector/blob/main/Video_pipeline.py" },
  },
  {
    id: "glamnet", title: "GlamNet", category: "Backend engineering · MERN",
    description: "A salon-booking platform with customer accounts, appointments, reviews, and salon-management workflows.",
    techStack: ["Node.js", "Express", "MongoDB", "JWT", "React"],
    github: "https://github.com/ShishiMaru81/GlamNet", featured: true,
    collaboration: "Team project", role: "Backend development", visual: "glamnet",
    problem: "Connect salon customers and staff through a shared booking and service-management platform.",
    contribution: "I handled backend development for the team's MERN web application.",
    challenge: "Support authenticated customer and salon workflows across appointments, services, schedules, and reviews.",
    outcome: "The backend includes Express APIs and MongoDB models for authentication, salons, appointments, reviews, services, and schedules. The diagram highlights the backend's place in the application.",
    evidence: { label: "Backend implementation", url: "https://github.com/ShishiMaru81/GlamNet/tree/main/backend" },
  },
  {
    id: "cinesuggest", title: "CineSuggest", category: "Machine learning · Recommendations",
    description: "A Streamlit movie recommender using TF-IDF features and cosine similarity to find related films.",
    techStack: ["Python", "Scikit-learn", "Streamlit", "Pandas"],
    github: "https://github.com/ShishiMaru81/CineSuggest", featured: false,
    collaboration: "ML project", role: "Content-based recommendations", visual: "cinema",
    problem: "Recommend related movies from the metadata of a title the user already knows.",
    contribution: "Metadata preparation, similarity ranking, and an interactive recommendation interface.",
    challenge: "Turn text metadata into comparable vectors and match approximate movie-title input.",
    outcome: "The application ranks movies with TF-IDF and cosine similarity and presents recommendations in Streamlit.",
    evidence: { label: "Project method & setup", url: "https://github.com/ShishiMaru81/CineSuggest#readme" },
  },
  {
    id: "object-detection", title: "Smart Object Detection", category: "Computer vision · Detection & tracking",
    description: "Object detection and tracking for webcam feeds and video files, with labels and confidence scores.",
    techStack: ["Python", "YOLOv8", "OpenCV", "SORT"],
    github: "https://github.com/ShishiMaru81/Smart-Object-Detection-YOLOv8", featured: false,
    collaboration: "Computer vision project", role: "Detection & tracking", visual: "detection",
    problem: "Identify objects in video and follow them across successive frames.",
    contribution: "YOLOv8 inference, visual annotations, and SORT-based tracking.",
    challenge: "Keep object identities useful across frames while displaying class labels and model confidence.",
    outcome: "The project supports webcam and video inputs with bounding boxes, class labels, tracking IDs, and an FPS display.",
    evidence: { label: "Features & implementation notes", url: "https://github.com/ShishiMaru81/Smart-Object-Detection-YOLOv8#readme" },
  },
];
