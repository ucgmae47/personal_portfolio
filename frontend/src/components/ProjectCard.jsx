import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./BrandIcons";

function ProjectCard({ project }) {
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
      <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} on GitHub`}
            className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
          >
            <GithubIcon size={18} />
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} live demo`}
            className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
          >
            <ExternalLink size={18} />
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
