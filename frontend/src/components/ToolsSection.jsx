import { motion } from "framer-motion";
import ToolCard from "./ToolCard";
import { tools } from "../data/tools";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function ToolsSection() {
  return (
    <section id="tools" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Tools &amp; Technologies
          </h2>
          <p className="mt-3 text-slate-500">
            Hover or tap a card to see how I&apos;ve used each one.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {tools.map((tool) => (
            <motion.div key={tool.name} variants={item}>
              <ToolCard tool={tool} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ToolsSection;
