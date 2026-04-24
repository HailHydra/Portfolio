import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  Code2,
  Database,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Rocket,
  ServerCog,
  Trophy,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type StatItem = {
  value: string;
  label: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ProjectItem = {
  id: string;
  title: string;
  summary: string;
  stack: string[];
  outcome: string;
  icon: LucideIcon;
  placeholder?: boolean;
};

export type TimelineItem = {
  period: string;
  title: string;
  company: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type AchievementItem = {
  title: string;
  detail: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "FAQ", href: "/FAQ" },
  { label: "Contact", href: "/contact" },
];

export const heroStats: StatItem[] = [
  { value: "1+", label: "Professional role completed as a frontend engineer at Ivana Tech" },
  { value: "5+", label: "Projects across LLM systems, speech AI, data analysis, and web development" },
  { value: "2027", label: "Expected B.Tech graduation in Artificial Intelligence and Machine Learning" },
];

export const services: ServiceItem[] = [
  {
    title: "AI Engineering",
    description:
      "Building applied AI systems across LLM memory, RAG workflows, speech classification, and practical model integration.",
    icon: BrainCircuit,
  },
  {
    title: "Data and ML Systems",
    description:
      "Working with Python, TensorFlow, scikit-learn, OpenCV, and analysis tooling to move from raw data to deployable insight.",
    icon: Database,
  },
  {
    title: "Web Development",
    description:
      "Using Next.js, Node.js, Express, TypeScript, and modern APIs to ship interfaces and product workflows as one subset of the stack.",
    icon: Code2,
  },
];

export const capabilities: ServiceItem[] = [
  {
    title: "LLM and RAG Systems",
    description: "Designing memory-aware AI workflows with vector and graph-backed retrieval strategies.",
    icon: BrainCircuit,
  },
  {
    title: "Modeling and Evaluation",
    description: "Training and validating deep learning systems with disciplined evaluation and practical fine-tuning methods.",
    icon: Rocket,
  },
  {
    title: "APIs and Databases",
    description: "Working across REST APIs, FastAPI, MongoDB, MySQL, PostgreSQL, Prisma, and Mongoose.",
    icon: ServerCog,
  },
  {
    title: "Full-Stack Product Build",
    description: "Shipping web products with Next.js, Vite.js, Express.js, and production-focused engineering habits.",
    icon: Code2,
  },
];

export const projects: ProjectItem[] = [
  {
    id: "sekhmet",
    title: "Sekhmet",
    summary:
      "A long-term cross-context LLM storage system using a hybrid vector and graph database approach for memory, retrieval, and structured context handling.",
    stack: ["LLM", "RAG", "Vector DB", "Graph DB"],
    outcome: "Built to support agentic retrieval across multiple contexts.",
    icon: BrainCircuit,
  },
  {
    id: "dysarthria-detection-wav2vec2",
    title: "Dysarthria Detection Using Wav2Vec2",
    summary:
      "A speech classification project using Wav2Vec2 with PEFT techniques such as LoRA and stratified k-fold validation for dysarthria detection.",
    stack: ["Python", "Wav2Vec2", "PEFT", "TensorFlow"],
    outcome: "Focused on efficient fine-tuning and robust speech evaluation.",
    icon: BarChart3,
  },
  {
    id: "virtual-art-gallery-and-museums",
    title: "Virtual Art Gallery and Museums",
    summary:
      "A web-based interactive gallery experience built with Next.js, TypeScript, and Three.js to present museum collections in an immersive format.",
    stack: ["Next.js", "TypeScript", "Three.js"],
    outcome: "Used web engineering as a delivery layer for interactive storytelling.",
    icon: ArrowUpRight,
  },
  {
    id: "reserved-git-project-1",
    title: "Reserved For Git Project",
    summary:
      "Empty project slot kept intentionally so you can add another shipped repository later without changing the layout.",
    stack: ["Coming Soon"],
    outcome: "Add from Git when ready.",
    icon: Code2,
    placeholder: true,
  },
  {
    id: "reserved-git-project-2",
    title: "Reserved For Git Project",
    summary:
      "Second empty slot reserved for another project import, keeping the portfolio structure ready for expansion.",
    stack: ["Coming Soon"],
    outcome: "Add from Git when ready.",
    icon: Code2,
    placeholder: true,
  },
];

export const timeline: TimelineItem[] = [
  {
    period: "Oct 2025 - Dec 2025",
    title: "Frontend Developer",
    company: "Ivana Tech",
    description:
      "Integrated features such as auto-fill and auto-reminder systems, developed a data analytics dashboard, collaborated with backend developers on API integration, and researched modern web technologies.",
  },
  {
    period: "Expected 2027",
    title: "B.Tech in Artificial Intelligence and Machine Learning",
    company: "SVKM D.J. Sanghvi College of Engineering",
    description:
      "Formal engineering track focused on AI and machine learning, supporting work across deep learning, speech systems, data analysis, and applied software projects.",
  },
  {
    period: "Core Stack",
    title: "AI Engineer with Full-Stack Range",
    company: "Independent projects and experimentation",
    description:
      "Building across Python, JavaScript, TypeScript, FastAPI, Next.js, Node.js, TensorFlow, scikit-learn, MongoDB, PostgreSQL, Docker, and Google Cloud.",
  },
];

export const achievements: AchievementItem[] = [
  {
    title: "Inspire Scholarship",
    detail: "Awarded among the top 1 percent highest scorers in HSC examinations.",
  },
  {
    title: "Frontend Hackathon",
    detail: "2nd Runner Up at RGIT College of Engineering.",
  },
  {
    title: "Breach Bytes 3.0 CTF",
    detail: "18th rank out of 35 teams.",
  },
  {
    title: "IIT Guwahati Neurohack",
    detail: "15th rank out of 816 registrations.",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "What domains does this portfolio focus on?",
    answer:
      "The portfolio is centered on AI engineering, machine learning systems, LLM workflows, and web development as one supporting subset of the stack.",
  },
  {
    question: "What kind of AI work is highlighted here?",
    answer:
      "It covers LLM memory and RAG systems, speech classification, data analysis, and projects that connect modeling with real software delivery.",
  },
  {
    question: "Why are there empty project slots?",
    answer:
      "Two sections are intentionally reserved so additional Git-based projects can be added later without redesigning the portfolio.",
  },
  {
    question: "Is this portfolio still responsive?",
    answer:
      "Yes. The visual treatment is editorial, but the layout is still built to adapt cleanly across desktop and mobile.",
  },
];

export const contactPoints = [
  {
    title: "Email",
    value: "adityaghagst@gmail.com",
    href: "mailto:adityaghagst@gmail.com",
    icon: Mail,
  },
  {
    title: "Phone",
    value: "+91 87792 84159",
    href: "tel:+918779284159",
    icon: Phone,
  },
  {
    title: "Location",
    value: "Mumbai, Maharashtra, India",
    href: "#",
    icon: MapPin,
  },
  {
    title: "GitHub",
    value: "github.com/HailHydra",
    href: "https://github.com/HailHydra",
    icon: Code2,
  },
  {
    title: "Education",
    value: "B.Tech in AI and ML, expected 2027",
    href: "#",
    icon: GraduationCap,
  },
  {
    title: "Recognition",
    value: "Scholarship, hackathon, CTF, and neurohack achievements",
    href: "#",
    icon: Trophy,
  },
];
