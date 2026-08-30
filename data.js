const portfolioData = {
    name: "Moksh Saini",
    navName: "Moksh",
    role: "Aspiring AI/ML Engineer",
    tagline: "I help build intelligent systems and turn ideas into structured, meaningful AI experiences.",
    avatarImage: "assets/moksh-avatar.png",
    profileImage: "assets/moksh-profile-crop.jpg",
    statusBadge: "AVAILABLE FOR COLLABORATION",
    heroStats: "10+ AI Projects Built",

    heroHeading: {
        line1: "THINK",
        line2: "CREATIVELY.",
    },

    socialLinks: {
        github: "https://github.com/mokshsaini7",
        linkedin: "https://linkedin.com/in/mokshsaini",
        email: "mokshsaini442@gmail.com",
        twitter: "https://x.com/mokshsaini"
    },

    tools: [
        { name: "Python", category: "Language" },
        { name: "PyTorch", category: "Deep Learning" },
        { name: "TensorFlow", category: "Machine Learning" },
        { name: "OpenCV", category: "Computer Vision" },
        { name: "Scikit-Learn", category: "ML Toolkit" },
        { name: "OpenAI", category: "LLM & GenAI" },
        { name: "HuggingFace", category: "NLP Models" },
        { name: "FastAPI", category: "Backend API" },
        { name: "Pandas", category: "Data Processing" },
        { name: "NumPy", category: "Numerical AI" },
        { name: "Git", category: "Version Control" }
    ],

    projects: [
    {
        id: "project-1",
        title: "Neural Vision & Object Analytics",
        category: "Computer Vision · Deep Learning",
        description:
            "Real-time object detection and multi-object tracking system for video analytics, built with YOLOv8, PyTorch, and OpenCV.",
        image:
            "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=1200&q=85",
        tags: ["PyTorch", "YOLOv8", "OpenCV", "FastAPI"],
        githubUrl: "https://github.com/mokshsaini/neural-vision"
    },
{
    id: "project-2",
    title: "RAG Knowledge Intelligence Engine",
    category: "LLMs · Generative AI",
    description:
        "Retrieval-Augmented Generation platform that enables intelligent multi-document search, contextual reasoning, and AI-powered answers.",
    image: "/assets/RAG.png",
    tags: ["Python", "LangChain", "OpenAI", "ChromaDB"],
    githubUrl: "https://github.com/mokshsaini7/rag-intelligence"
},

    {
        id: "project-3",
        title: "Smart Predictive Analytics Dashboard",
        category: "Machine Learning · Data Science",
        description:
            "End-to-end machine learning dashboard for data exploration, prediction, model evaluation, and interactive business insights.",
        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
        tags: ["Scikit-Learn", "Pandas", "XGBoost", "Streamlit"],
        githubUrl: "https://github.com/mokshsaini7/predictive-analytics"
    },

    {
        id: "project-4",
        title: "Autonomous AI Research Agent",
        category: "AI Agents · Automation",
        description:
            "Multi-agent AI system that plans tasks, researches information, analyzes sources, and generates structured reports autonomously.",
        image:
            "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85",
        tags: ["Python", "LangGraph", "LLMs", "Docker"],
        githubUrl: "https://github.com/mokshsaini7/autonomous-agent"
    },

    {
        id: "project-5",
        title: "SentimentScope NLP Analyzer",
        category: "Natural Language Processing",
        description:
            "AI-powered sentiment analysis platform that processes customer reviews and social media text to identify emotions and trends.",
        image:
            "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=85",
        tags: ["Python", "Transformers", "BERT", "NLP"],
        githubUrl: "https://github.com/mokshsaini7/sentimentscope-nlp"
    },

    {
        id: "project-6",
        title: "DeepForecast Time Series Engine",
        category: "Deep Learning · Forecasting",
        description:
            "Intelligent time-series forecasting system using deep learning models to predict future trends from historical data.",
        image:
            "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1200&q=85",
        tags: ["TensorFlow", "LSTM", "Python", "Plotly"],
        githubUrl: "https://github.com/mokshsaini7/deepforecast"
    }
],

    quoteBanner: {
        quote: "Moksh's approach is structured. He focuses on model clarity before architecture design, and that reflects in every detail. Nothing felt random.",
        author: "Phillip B.",
        title: "Lead AI Research Director at TechLab"
    },

    services: [
        {
            id: "service-1",
            title: "Machine Learning Models",
            description: "Designing end-to-end ML workflows, model training, hyperparameter tuning, and scalable API deployments.",
            pills: ["Supervised ML", "XGBoost", "Model Optimization", "Scikit-Learn"]
        },
        {
            id: "service-2",
            title: "Deep Learning & Vision",
            description: "Building neural networks for computer vision, object classification, video analysis, and spatial perception.",
            pills: ["PyTorch", "CNNs", "Computer Vision", "TensorFlow"]
        },
        {
            id: "service-3",
            title: "LLM & GenAI Solutions",
            description: "Developing custom RAG pipelines, prompt engineering workflows, and intelligent conversational agents.",
            pills: ["LangChain", "Vector Databases", "Prompt Architecture", "OpenAI API"]
        },
        {
            id: "service-4",
            title: "Data Science & Analytics",
            description: "Extracting actionable insights from high-dimensional datasets with automated EDA and visual dashboards.",
            pills: ["Pandas", "NumPy", "Exploratory Data Analysis", "Feature Engineering"]
        }
    ],

    about: {
        heading: "Designing experiences",
        highlightText: "that make sense.",
        bio: [
            "I started my journey with a deep curiosity for computer science and data, exploring algorithms, neural architectures, and intelligent software.",
            "As an Aspiring AI/ML Engineer, I focus on building systems that solve real problems through clean data engineering, thoughtful model design, and scalable execution."
        ],
        signatureText: "Moksh",
        workHistory: [
            {
                role: "AI/ML Project Developer",
                organization: "Independent AI Lab",
                period: "2024 - Present",
                description: "Architecting custom ML pipelines and deep learning experiments."
            },
            {
                role: "Data Science Contributor",
                organization: "Open Source AI Community",
                period: "2023 - 2024",
                description: "Contributed to PyTorch model benchmarking and computer vision datasets."
            }
        ]
    },

    testimonials: [
        {
            quote: "Strong ML architecture with clear mathematical thinking behind it. Moksh's attention to detail really stood out.",
            author: "Arjun Mehta",
            title: "Founder at Pure Pulse AI"
        },
        {
            quote: "Loved the clean computer vision model design. Efficient, well documented, and fast execution.",
            author: "Natalie Rivera",
            title: "Operations Head at Vision Tech"
        },
        {
            quote: "Great collaboration! Helped build our predictive pipeline and supported our full API deployment.",
            author: "Emma Kraft",
            title: "Co-Founder at DataGrid"
        }
    ],

    faqs: [
        {
            question: "How do we get started on an AI project?",
            answer: "We start with a quick discussion about your goals, data readiness, and model expectations. From there, I outline the optimal ML pipeline and development steps."
        },
        {
            question: "What core AI technologies do you specialize in?",
            answer: "My core stack includes Python, PyTorch, TensorFlow, Scikit-Learn, OpenCV, LangChain, and FastAPI for model integration."
        },
        {
            question: "Can you help deploy models to production?",
            answer: "Yes! I build lightweight containerized microservices with FastAPI and Docker so model inference can be consumed by web & mobile apps."
        },
        {
            question: "Will I be involved in model evaluation and testing?",
            answer: "Absolutely. I provide transparent metrics (precision, recall, accuracy curves, latency benchmarks) throughout the project."
        },
        {
            question: "How long does a typical ML MVP prototype take?",
            answer: "Depending on dataset scope and complexity, an initial proof-of-concept prototype usually takes 1 to 3 weeks."
        }
    ],

    discoveryCard: {
        title: "Still not sure? Let's book a free discovery call.",
        description: "It should make your AI project clear, strong, and easy to execute. If that's what you're aiming for, we should talk.",
        scheduleButtonText: "Schedule Now",
        calButtonText: "Cal.com"
    },

    footer: {
        headingLine1: "Lets",
        headingHighlight: "build",
        headingLine2: "incredible work together.",
        contactBtnText: "Contact",
        bookBtnText: "Book a call",
        copyright: "© 2026 Moksh Saini",
        watermarkText: "MOKSH SAINI"
    }
};