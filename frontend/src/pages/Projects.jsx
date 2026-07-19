import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { projects, projectTags } from "../data/projects";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

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
    <main className="min-h-screen bg-slate-50 pt-16 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950 px-6 py-16 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="pointer-events-none absolute -left-20 top-1/3 h-64 w-64 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl" />

        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.12 }}
          className="relative mx-auto max-w-6xl text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/90"
          >
            Portfolio
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Projects
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-3 max-w-xl text-lg text-white/70"
          >
            Filter by the technology you&apos;re curious about.
          </motion.p>
        </motion.div>
      </section>

      <div className="relative px-6 pt-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute left-1/4 top-20 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute right-1/4 bottom-20 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(15,23,42,0.06) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-6xl">
          {/* Filter bar */}
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {filters.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeTag === tag
                    ? "bg-slate-900 text-white shadow-md shadow-slate-900/20"
                    : "bg-white/80 text-slate-600 ring-1 ring-slate-200 backdrop-blur-sm hover:bg-white"
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
      </div>
    </main>
  );
}

export default Projects;
