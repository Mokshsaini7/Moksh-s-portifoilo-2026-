/* =========================================================
   MOKSH SAINI PORTFOLIO DATA
   Replace this entire file with your data.js
   ========================================================= */

const portfolioData = {
  projects: [
    {
      id: "project-1",
      title: "AI Resume Intelligence",
      category: "NLP · Generative AI",
      description:
        "AI-powered resume analysis system that extracts skills, evaluates job relevance, and generates actionable improvement insights.",
      image: "assets/AI-Resume.png",
      tags: ["Python", "NLP", "LLM", "FastAPI"],
      link: "https://github.com/mokshsaini7"
    },
    {
      id: "project-2",
      title: "RAG Knowledge Intelligence Engine",
      category: "LLMs · Generative AI",
      description:
        "Retrieval-Augmented Generation platform for intelligent multi-document search, contextual reasoning, and grounded AI answers.",
      image: "assets/RAG.png",
      tags: ["Python", "LangChain", "RAG", "OpenAI"],
      link: "https://github.com/mokshsaini7"
    },
    {
      id: "project-3",
      title: "Computer Vision Object Detection",
      category: "Computer Vision · Deep Learning",
      description:
        "Real-time object detection pipeline designed to identify and classify objects from images and live video streams.",
      image: "assets/Object-Detection.png",
      tags: ["Python", "YOLO", "OpenCV", "PyTorch"],
      link: "https://github.com/mokshsaini7"
    },
    {
      id: "project-4",
      title: "AI Document Intelligence",
      category: "OCR · NLP · AI",
      description:
        "Document understanding workflow that combines OCR, text extraction, classification, and structured information retrieval.",
      image: "assets/Document-AI.png",
      tags: ["Python", "OCR", "NLP", "FastAPI"],
      link: "https://github.com/mokshsaini7"
    },
    {
      id: "project-5",
      title: "Predictive Analytics Engine",
      category: "Machine Learning · Analytics",
      description:
        "End-to-end machine learning system for data preprocessing, feature engineering, model training, evaluation, and prediction.",
      image: "assets/Predictive-Analytics.png",
      tags: ["Python", "Scikit-learn", "Pandas", "ML"],
      link: "https://github.com/mokshsaini7"
    },
    {
      id: "project-6",
      title: "AI Conversational Assistant",
      category: "LLMs · Conversational AI",
      description:
        "Context-aware conversational assistant built to combine natural-language understanding, memory, tool usage, and intelligent responses.",
      image: "assets/AI-Assistant.png",
      tags: ["Python", "LLM", "LangChain", "API"],
      link: "https://github.com/mokshsaini7"
    }
  ],

  services: [
    {
      number: "01",
      title: "Machine Learning",
      description: "Build practical ML pipelines from data preparation through training, evaluation, and deployment.",
      tools: ["Python", "Scikit-learn", "Pandas", "NumPy"]
    },
    {
      number: "02",
      title: "Generative AI & RAG",
      description: "Design grounded AI applications using LLMs, embeddings, retrieval pipelines, and structured context.",
      tools: ["OpenAI", "LangChain", "RAG", "Vector DB"]
    },
    {
      number: "03",
      title: "Computer Vision",
      description: "Create intelligent vision systems for image understanding, object detection, and visual automation.",
      tools: ["OpenCV", "PyTorch", "YOLO", "TensorFlow"]
    }
  ],

  workHistory: [
    {
      role: "Aspiring AI/ML Engineer",
      period: "2025 — Present",
      organization: "Independent Projects",
      description: "Building practical AI/ML systems across machine learning, generative AI, NLP, and computer vision."
    },
    {
      role: "AI/ML Project Development",
      period: "2024 — 2025",
      organization: "Personal Research & Development",
      description: "Explored model development, data pipelines, intelligent applications, and deployment workflows."
    }
  ],

  testimonials: [
    {
      quote: "Moksh's approach is structured. He focuses on model clarity before architecture design, and that reflects in every detail.",
      name: "Phillip B.",
      role: "AI Research Collaborator",
      initials: "PB"
    },
    {
      quote: "Strong attention to detail and a clear understanding of how AI systems should solve real problems.",
      name: "Alex R.",
      role: "Technology Collaborator",
      initials: "AR"
    },
    {
      quote: "Moksh combines curiosity with practical execution and communicates technical ideas clearly.",
      name: "Jordan K.",
      role: "Project Collaborator",
      initials: "JK"
    }
  ],

  faqs: [
    {
      question: "What kind of AI/ML projects do you build?",
      answer: "I build machine learning, generative AI, RAG, NLP, and computer vision applications with a focus on practical problem solving."
    },
    {
      question: "Can you build an AI solution from scratch?",
      answer: "Yes. I can work across data preparation, model development, AI integration, API development, testing, and deployment."
    },
    {
      question: "Do you work with LLM and RAG applications?",
      answer: "Yes. I work with LLM-based applications, retrieval pipelines, embeddings, vector search, prompt design, and contextual generation."
    },
    {
      question: "How can I contact you?",
      answer: "Use the Contact or Book a call buttons on the website to start a conversation about your project."
    }
  ],

  marquee: [
    ["Python", "CORE"],
    ["PyTorch", "DEEP LEARNING"],
    ["TensorFlow", "AI"],
    ["OpenCV", "VISION"],
    ["OpenAI", "LLM"],
    ["LangChain", "GEN AI"],
    ["FastAPI", "BACKEND"],
    ["Scikit-learn", "ML"]
  ]
};

// Backward-compatible aliases.
const projects = portfolioData.projects;
const services = portfolioData.services;
const workHistory = portfolioData.workHistory;
const testimonials = portfolioData.testimonials;
const faqs = portfolioData.faqs;
const marqueeItems = portfolioData.marquee;
