import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { projects, projectTags } from "../data/projects";

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

function Projects() {
  const [activeTag, setActiveTag] = useState("All");
  const filters = ["All", ...projectTags];

  const visible =
    activeTag === "All"
      ? projects
      : projects.filter((p) => p.tech.includes(activeTag));

  return (
    <main className="min-h-screen bg-slate-50 px-6 pb-24 pt-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Projects
          </h1>
          <p className="mt-3 text-slate-500">
            Filter by the technology you&apos;re curious about.
          </p>
        </div>

        {/* Filter bar */}
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {filters.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeTag === tag
                  ? "bg-slate-900 text-white"
                  : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-100"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Grid re-animates whenever the filter changes (via the key) */}
        <motion.div
          key={activeTag}
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.08 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {visible.map((project) => (
            <motion.div key={project.title} variants={item}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {visible.length === 0 && (
          <p className="mt-12 text-center text-slate-400">
            No projects match that filter yet.
          </p>
        )}
      </div>
    </main>
  );
}

export default Projects;
