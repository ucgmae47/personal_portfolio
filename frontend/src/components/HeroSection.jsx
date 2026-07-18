import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import Typewriter from "./Typewriter";
import { UgaLogo } from "./BrandIcons";
import { profile } from "../data/profile";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function HeroSection() {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950">
      {/* Dot-pattern texture overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* Soft glow accents */}
      <div className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center px-6 text-center"
      >
        <motion.div
          variants={item}
          className="mb-8 grid h-36 w-36 place-items-center rounded-full bg-slate-800 text-3xl font-bold text-emerald-300 ring-4 ring-emerald-400/70 shadow-[0_0_50px_rgba(52,211,153,0.45)]"
        >
          {profile.initials}
        </motion.div>

        <motion.h1
          variants={item}
          className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-4 flex h-8 items-center text-lg font-medium text-emerald-300 sm:text-xl"
        >
          <Typewriter words={profile.roles} />
        </motion.p>

        <motion.div
          variants={item}
          className="mt-6 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            to="/education"
            className="inline-flex items-center gap-2.5 rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/15 transition-colors hover:bg-white/15"
          >
            <UgaLogo size={28} />
            <span className="text-sm font-medium text-white/90">
              {profile.university}
            </span>
          </Link>
          <Link
            to="/education"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-4 py-2 ring-1 ring-emerald-400/40 transition-colors hover:bg-emerald-500/25"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300/90">
              GPA
            </span>
            <span className="text-lg font-bold tabular-nums text-white">
              {profile.gpa}
            </span>
          </Link>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#tools"
            className="rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-slate-900 shadow-lg shadow-emerald-500/20 transition-all hover:-translate-y-0.5 hover:bg-emerald-400"
          >
            View My Work
          </a>
          <Link
            to="/contact"
            className="rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
          >
            Get In Touch
          </Link>
        </motion.div>
      </motion.div>

      {/* Bouncing scroll indicator */}
      <a
        href="#tools"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 transition-colors hover:text-white"
      >
        <ChevronDown size={32} className="animate-bounce" />
      </a>
    </section>
  );
}

export default HeroSection;
