import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FileText, Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile } from "../data/profile";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "History", to: "/history" },
  { label: "Education", to: "/education" },
  { label: "Projects", to: "/projects" },
  // Contact hidden until the remote backend is ready.
  // { label: "Contact", to: "/contact" },
];

const iconButtons = [
  {
    label: "LinkedIn",
    href: profile.links.linkedin,
    Icon: LinkedinIcon,
    download: false,
  },
  {
    label: "GitHub",
    href: profile.links.github,
    Icon: GithubIcon,
    download: false,
  },
  {
    label: "Resume",
    href: profile.links.resume,
    Icon: FileText,
    download: true,
  },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-900/70 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <NavLink
          to="/"
          onClick={() => setOpen(false)}
          className="text-lg font-bold tracking-tight text-white"
        >
          {profile.name}
        </NavLink>

        <ul className="hidden items-center gap-5 lg:gap-8 md:flex">
          {navLinks.map(({ label, to }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive
                      ? "text-emerald-400"
                      : "text-slate-300 hover:text-white"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 sm:flex">
            {iconButtons.map(({ label, href, Icon, download }) => (
              <a
                key={label}
                href={href}
                target={download ? undefined : "_blank"}
                rel="noopener noreferrer"
                download={download || undefined}
                aria-label={label}
                className="group relative rounded-lg p-2 text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
              >
                <Icon size={20} />
                <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-800 px-2 py-1 text-xs text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                  {label}
                </span>
              </a>
            ))}
          </div>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="rounded-lg p-2 text-slate-200 transition-colors hover:bg-white/10 md:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-slate-900/95 px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map(({ label, to }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-2 text-base font-medium transition-colors ${
                      isActive
                        ? "bg-white/10 text-emerald-400"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-4">
            {iconButtons.map(({ label, href, Icon, download }) => (
              <a
                key={label}
                href={href}
                target={download ? undefined : "_blank"}
                rel="noopener noreferrer"
                download={download || undefined}
                aria-label={label}
                className="rounded-lg p-2 text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
