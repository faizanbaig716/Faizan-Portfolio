import React from 'react';
import {
  Code2,
  Database,
  Layout,
  Bot,
  BrainCircuit,
  Workflow,
  Search,
} from "lucide-react";

export const PERSONAL_INFO = {
  name: "Mirza Faizan Abid Baig",
  title: "AI Engineer | Full-Stack Developer | Technical Expert | Data Entry Expert|Automation Specialist",
  tagline: "Turning Complex Problems into Intelligent Automated Solutions",
  status: "Available for Freelance Projects & Remote Opportunities",
  about: "I am a Computer Science graduate from Virtual University of Pakistan with a strong passion for Artificial Intelligence, Automation, and Software Development. I specialize in building AI-powered systems, automation solutions, and modern web applications that solve real-world problems efficiently. I also handle general technical computer work including troubleshooting, system support, and software-related tasks across different environments..",
  whatsapp: "923496793399",
  email: "Faizanbaig716@gmail.com",
  github: "https://github.com/Faizan-Baig",
  linkedin: "https://www.linkedin.com/in/mirza-faizan-abid-baig-29714a211/",
};

export const EDUCATION = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Virtual University of Pakistan",
    cgpa: "3.90 / 4.00",
    date: "Graduated",
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    degree: "Associate Degree Program Computer Science",
    institution: "Virtual University of Pakistan",
    cgpa: "3.07 / 4.00",
    date: "Completed",
    icon: <Database className="w-6 h-6" />,
  },
];

export const CORE_EXPERTISE = [
  "Artificial Intelligence", "Machine Learning", "Generative AI", "LLMs", "Agentic AI", "RAG", "Prompt Engineering", "Python Automation", "AI Assistants", "Chatbots", "Workflow Automation", "Business Automation", "React Development", "Full Stack Development", "PHP Development", "API Integration", "SEO", "Web Scraping", "Data Pipelines", "Networking", "Operating Systems", "Git", "GitHub", "Software Architecture"
];

export const PROGRAMMING_LANGUAGES = [
  "Python", "JavaScript", "React", "PHP", "C++", "C#", "SQL", "HTML5", "CSS3"
];

export const SERVICES = [
  {
    title: "Custom AI Chatbots",
    description: "Intelligent conversational agents tailored for your business needs.",
    icon: <Bot className="w-8 h-8 text-primary" />,
  },
   
  {
    title: "Agentic AI Systems",
    description: "Autonomous AI agents that plan and execute complex workflows.",
    icon: <BrainCircuit className="w-8 h-8 text-success" />,
  },
  {
    title: "Automation Solutions",
    description: "Streamline operations with custom Python scripts and data pipelines.",
    icon: <Workflow className="w-8 h-8 text-secondary" />,
  },
  {
    title: "Full Stack Web Apps",
    description: "Scalable, performant, and beautiful web applications built with modern frameworks.",
    icon: <Layout className="w-8 h-8 text-primary" />,
  },
  {
    title: "Machine Learning",
    description: "Predictive models and data analysis to drive business intelligence.",
    icon: <Database className="w-8 h-8 text-success" />,
  },
  {
    title: "SEO Optimization",
    description: "Enhance your digital presence and rank higher on search engines.",
    icon: <Search className="w-8 h-8 text-secondary" />,
  },
];

export const PROJECTS = [
  {
    title: "Free CV Builder",
    description: "A professional platform where users can create and download PDF resumes free of cost.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop",
    tags: ["React", "PDF", "Tailwind"],
    liveUrl: "https://free-cv-phi.vercel.app/",
  },
  {
    title: "Document & PDF Converter",
    description: "A web-based document conversion platform that allows users to process and convert files efficiently through a simple interface.",
    image: "https://images.unsplash.com/photo-1618044733300-9472054094ee?q=80&w=2071&auto=format&fit=crop",
    tags: ["Converter", "Web App", "Document"],
    liveUrl: "https://document-and-pdf-converter-935416267486.asia-southeast1.run.app",
  },
  {
    title: "Scientific Calculator & Converter",
    description: "Advanced scientific calculator with multiple unit conversion capabilities and a clean user experience.",
    image: "https://images.unsplash.com/photo-1594980596870-8caa52a71d81?q=80&w=2082&auto=format&fit=crop",
    tags: ["Calculator", "React", "Tools"],
    liveUrl: "https://scientific-calculator-and-converter-935416267486.asia-southeast1.run.app",
  },
  {
    title: "Social Video Downloader",
    description: "Web application for downloading and managing online video content through a user-friendly interface.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
    tags: ["Downloader", "Web", "Media"],
    liveUrl: "https://social-video-downloader-120318720870.asia-southeast1.run.app/",
  },
];

export const STATS = [
  { label: "CGPA", value: 3.90, suffix: "" },
  { label: "AI Focused", value: 100, suffix: "%" },
  { label: "Automation Expert", value: 100, suffix: "%" },
  { label: "Remote Worldwide", value: 24, suffix: "/7" },
];
