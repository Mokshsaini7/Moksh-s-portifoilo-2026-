/* =========================================================
   MOKSH SAINI PORTFOLIO DATA
   Content-only portfolio update. Existing visual theme is preserved.
   ========================================================= */

const portfolioData = {
  projects: [
    {
      id: "vigil",
      title: "VIGIL — Voice Integrity & Impersonation Guard",
      category: "AI/ML · Audio Intelligence",
      description: "An AI-powered voice-cloning impersonation detection project focused on identifying suspicious audio, verifying speakers, analysing conversation context, and generating risk alerts.",
      image: "",
      tags: ["Python", "FastAPI", "Audio AI", "SQLAlchemy", "Supabase"],
      link: ""
    },
    {
      id: "aura",
      title: "AURA — AI Research Engineer",
      category: "Generative AI · RAG",
      description: "A research assistant that ingests documents and retrieves relevant information to support grounded question answering. The current foundation uses a FastAPI backend, PDF processing, and BM25 retrieval.",
      image: "RAG.png",
      tags: ["Python", "FastAPI", "RAG", "BM25", "PyPDF"],
      link: "https://github.com/Mokshsaini7/AURA-AI-Research-Engineer"
    },
    {
      id: "redis-java",
      title: "Redis-Inspired Key-Value Store",
      category: "Java · Systems Engineering",
      description: "An in-progress implementation of an in-memory key-value store in Java, exploring core data structures, command handling, and storage operations.",
      image: "",
      tags: ["Java", "Data Structures", "OOP", "Command Parsing"],
      link: ""
    },
    {
      id: "database-engine",
      title: "Database Engine from Scratch",
      category: "Database · Backend Engineering",
      description: "An in-progress learning project to understand database internals, data storage, and the components behind database operations. Features will be documented as they are implemented.",
      image: "",
      tags: ["Database Internals", "Storage", "Java", "SQL"],
      link: ""
    },
    {
      id: "private-search",
      title: "Private Search Engine",
      category: "Information Retrieval · Search",
      description: "An in-progress project exploring private information retrieval, indexing, and relevant-result ranking, with implementation details to be added as the system develops.",
      image: "",
      tags: ["Python", "Information Retrieval", "Indexing", "Search"],
      link: ""
    }
  ],

  services: [
    {
      number: "01",
      title: "AI & Machine Learning",
      description: "Building practical foundations in data preparation, exploratory analysis, model development, evaluation, and intelligent application workflows.",
      tools: ["Python", "Pandas", "NumPy", "Scikit-learn"]
    },
    {
      number: "02",
      title: "Generative AI & Research Systems",
      description: "Developing document-based AI workflows using retrieval, language models, prompt engineering, and context-aware responses.",
      tools: ["RAG", "BM25", "LLMs", "PyPDF"]
    },
    {
      number: "03",
      title: "Software & Backend Engineering",
      description: "Building software foundations through Java, Python APIs, database concepts, and backend application development.",
      tools: ["Java", "Python", "FastAPI", "SQL", "Git"]
    }
  ],

  workHistory: [
    {
      role: "AI/ML Virtual Intern",
      period: "October 2026 — Present",
      organization: "Infosys Springboard",
      description: "Virtual internship focused on strengthening AI/ML knowledge through structured learning and practical assignments."
    },
    {
      role: "Software Development Intern",
      period: "July 2026 — August 2026",
      organization: "Tech Access",
      description: "Software development internship completed as part of the college-integrated training experience."
    },
    {
      role: "AI/ML Intern",
      period: "February 2026 — March 2026",
      organization: "Tronixia Tech",
      description: "Worked on data preprocessing, exploratory data analysis, and introductory machine-learning development and evaluation tasks."
    },
    {
      role: "Data Analyst Intern",
      period: "July 2025 — August 2025",
      organization: "Tech Access",
      description: "College-integrated internship covering data analysis workflows and tools including Excel, Tableau, and Power BI."
    },
    {
      role: "Bachelor of Computer Applications (BCA)",
      period: "2024 — 2028",
      organization: "Don Bosco Institute of Technology · GGSIPU, New Delhi",
      description: "Undergraduate computer applications student building foundations in programming, software development, databases, and artificial intelligence."
    }
  ],

  // No testimonials are displayed until genuine, approved endorsements are supplied.
  testimonials: [],

  faqs: [
    {
      question: "What areas of technology are you focused on?",
      answer: "My current focus is AI/ML engineering and software development, especially Python, Java, machine-learning fundamentals, generative AI, retrieval systems, APIs, and databases."
    },
    {
      question: "What are you currently building?",
      answer: "My featured projects include VIGIL, an AI voice-impersonation detection system; AURA, an AI research assistant; a Redis-inspired key-value store in Java; a database engine; and a private search engine. Some are actively in development."
    },
    {
      question: "What courses and training have you completed?",
      answer: "My learning includes AI/ML training through Apna College, Databricks Generative AI, Google Cloud Introduction to Generative AI, Microsoft Prompt Engineering with GitHub Copilot, IBM Prompt Engineering, and the Tata Data Visualization job simulation."
    },
    {
      question: "Where are you studying?",
      answer: "I am pursuing a Bachelor of Computer Applications (BCA) at Don Bosco Institute of Technology, affiliated with Guru Gobind Singh Indraprastha University (GGSIPU), from 2024 to 2028."
    },
    {
      question: "How can I contact you?",
      answer: "You can reach me by email or connect with me through GitHub and LinkedIn using the links on this website."
    }
  ],

  marquee: [
    ["Python", "PROGRAMMING"],
    ["Java", "SOFTWARE"],
    ["Machine Learning", "AI"],
    ["Generative AI", "LLM"],
    ["FastAPI", "BACKEND"],
    ["SQL", "DATABASES"],
    ["Pandas", "DATA"],
    ["Git", "DEVELOPMENT"]
  ]
};

// Backward-compatible aliases.
const projects = portfolioData.projects;
const services = portfolioData.services;
const workHistory = portfolioData.workHistory;
const testimonials = portfolioData.testimonials;
const faqs = portfolioData.faqs;
const marqueeItems = portfolioData.marquee;
