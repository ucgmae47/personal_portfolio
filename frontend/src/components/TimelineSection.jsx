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
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            My Journey
          </h1>
          <p className="mt-3 text-slate-500">
            Education and experience that shaped how I build.
          </p>
        </div>

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
