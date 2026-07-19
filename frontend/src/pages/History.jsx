import { motion } from "framer-motion";
import TimelineSection from "../components/TimelineSection";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function History() {
  return (
    <main className="min-h-screen bg-slate-50 pt-16">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 px-6 py-16 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="pointer-events-none absolute -left-24 top-1/4 h-64 w-64 rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />

        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.12 }}
          className="relative mx-auto max-w-5xl text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300/90"
          >
            Experience
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            My Journey
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-3 max-w-xl text-lg text-white/70"
          >
            Experience that shaped how I build.
          </motion.p>
        </motion.div>
      </section>

      <TimelineSection />
    </main>
  );
}

export default History;
