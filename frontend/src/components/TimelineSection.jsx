import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import TimelineItem from "./TimelineItem";
import { timeline } from "../data/timeline";

function TimelineSection() {
  const containerRef = useRef(null);

  // Track scroll progress through the timeline container.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Map scroll progress (0 -> 1) to the line's height (0% -> 100%).
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative px-6 py-20">
      {/* Soft atmospheric washes behind the timeline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute bottom-32 right-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(15,23,42,0.06) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <div ref={containerRef} className="relative">
          {/* Static track */}
          <div className="absolute left-4 top-0 h-full w-0.5 -translate-x-1/2 bg-slate-200 md:left-1/2" />
          {/* Progress line that draws itself on scroll */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-4 top-0 w-0.5 -translate-x-1/2 bg-emerald-500 md:left-1/2"
          />

          <div className="space-y-12">
            {timeline.map((entry, index) => (
              <TimelineItem key={index} entry={entry} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TimelineSection;
