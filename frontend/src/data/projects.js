// Real projects from local repos + GitHub.
// `featured: true` projects also appear in the Home page preview.
export const projects = [
  {
    title: "LinguaPath",
    description:
      "AI language-learning platform (CEFR A1–C2) with graded reading, interactive games, SM-2 vocab drills, and real-time multiplayer. Behavioral interest engine personalizes tutoring; multi-provider AI pipelines (Gemini, Groq, GPT-4o-mini, ElevenLabs) with streaming chat, Zod validation, Supabase RLS, and feature-flag cost controls.",
    tech: ["Next.js", "TypeScript", "Supabase", "Vercel AI SDK", "Zod"],
    github: "https://github.com/ucgmae47/language-learning-app",
    demo: "",
    featured: true,
  },
  {
    title: "Cinema E-Booking System",
    description:
      "Full-stack cinema platform with dynamic seat selection, payments, promotional discounts, and automated email receipts. Modular Flask REST API and MySQL schema using OOP design patterns (Facade, Adapter), containerized with Docker Compose, delivered iteratively in Agile sprints.",
    tech: ["React", "TypeScript", "Flask", "MySQL", "Docker"],
    github: "https://github.com/Ryan-Cortez/SoftwareEngineering",
    demo: "",
    featured: true,
  },
  {
    title: "VIPR Math Assessment",
    description:
      "Undergraduate research tooling for AI4STEM / VIPR — LLM pipelines that grade student math work from images and analyze reasoning, plus ML evaluation utilities for automated assessment experiments.",
    tech: ["Python", "OpenAI", "PyTorch", "scikit-learn"],
    github: "https://github.com/ucgmae47/math_assessment",
    demo: "",
    featured: false,
  },
  {
    title: "Athens Figure Skating Club Site",
    description:
      "Responsive full-stack club site with dynamic event scheduling, interactive member profiles, media cloud storage, cryptographic password hashing, role-based admin access, and ORM-backed MySQL schemas.",
    tech: ["Python", "Flask", "MySQL", "JavaScript", "HTML/CSS"],
    github: "https://github.com/ucgmae47/skating_site",
    demo: "",
    featured: false,
  },
  {
    title: "Chinese Story API App",
    description:
      "CSCI 1302 JavaFX app that generates Chinese reading passages with Cohere based on skill level, then enriches characters with hover translations via a Chinese Character REST API.",
    tech: ["Java", "JavaFX", "HTTP", "Gson"],
    github: "https://github.com/ucgmae47/cs1302-api-app",
    demo: "",
    featured: false,
  },
  {
    title: "Royal Subversion",
    description:
      "Turn-based JavaFX board game — knight vs. rebel wizard and soldier on a custom grid with dice rolls, lives, star objectives, and win/lose overlays.",
    tech: ["Java", "JavaFX"],
    github: "https://github.com/ucgmae47/royal-subversion",
    demo: "",
    featured: false,
  },
  {
    title: "Personal Portfolio",
    description:
      "This site — React + Tailwind portfolio with animated sections, an Education page backed by transcript data, and a FastAPI/MySQL contact form.",
    tech: ["React", "FastAPI", "MySQL", "Tailwind"],
    github: "",
    demo: "",
    featured: false,
  },
];

// Unique tech tags across all projects, for the Projects page filter bar.
export const projectTags = [...new Set(projects.flatMap((p) => p.tech))].sort();
