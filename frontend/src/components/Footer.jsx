import { FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile } from "../data/profile";

const links = [
  { label: "LinkedIn", href: profile.links.linkedin, Icon: LinkedinIcon },
  { label: "GitHub", href: profile.links.github, Icon: GithubIcon },
  { label: "Resume", href: profile.links.resume, Icon: FileText },
];

function Footer() {
  return (
    <footer className="relative z-10 border-t border-slate-800 bg-slate-900 px-6 py-10 text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} {profile.name}. Built with React &amp;
          FastAPI.
        </p>
        <div className="flex items-center gap-3">
          {links.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="rounded-lg p-2 transition-colors hover:bg-white/10 hover:text-white"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
