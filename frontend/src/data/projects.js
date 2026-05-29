// TODO(content): replace with your real projects, links, and tech stacks.
// `featured: true` projects also appear in the Home page preview.
export const projects = [
  {
    title: "Portfolio Website",
    description:
      "This very site — a React + FastAPI portfolio with animated sections and a MySQL-backed contact form.",
    tech: ["React", "FastAPI", "MySQL", "Tailwind"],
    github: "https://github.com/your-handle/portfolio",
    demo: "https://your-portfolio.com",
    featured: true,
  },
  {
    title: "Task Manager API",
    description:
      "A RESTful task management backend with authentication, filtering, and full CRUD operations.",
    tech: ["Python", "FastAPI", "MySQL"],
    github: "https://github.com/your-handle/task-api",
    demo: "",
    featured: true,
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive dashboard that visualizes live weather data from a public API with charts.",
    tech: ["React", "JavaScript", "HTML/CSS"],
    github: "https://github.com/your-handle/weather-dashboard",
    demo: "https://your-weather-demo.com",
    featured: true,
  },
  {
    title: "Inventory Tracker",
    description:
      "A full-stack CRUD app for tracking inventory with search, sorting, and CSV export.",
    tech: ["React", "Python", "MySQL"],
    github: "https://github.com/your-handle/inventory-tracker",
    demo: "",
    featured: false,
  },
  {
    title: "Markdown Notes",
    description:
      "A local-first notes app with live markdown preview and keyboard-driven navigation.",
    tech: ["React", "JavaScript"],
    github: "https://github.com/your-handle/markdown-notes",
    demo: "https://your-notes-demo.com",
    featured: false,
  },
  {
    title: "DevOps Sandbox",
    description:
      "Containerized microservices demo with Docker Compose and a CI pipeline.",
    tech: ["Docker", "Python", "Git"],
    github: "https://github.com/your-handle/devops-sandbox",
    demo: "",
    featured: false,
  },
];

// Unique tech tags across all projects, for the Projects page filter bar.
export const projectTags = [...new Set(projects.flatMap((p) => p.tech))].sort();
