import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { ClaudeIcon, CopilotIcon, CursorIcon } from "./BrandIcons";
import { aiTools } from "../data/aiTools";

const LOGO_ICONS = {
  cursor: CursorIcon,
  claude: ClaudeIcon,
  copilot: CopilotIcon,
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function AiToolsSection() {
  return (
    <section id="ai-tools" className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-700 ring-1 ring-emerald-500/20">
            <Sparkles size={14} />
            Modern workflow
          </div>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            AI-Assisted Development
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-500">
            I treat AI coding tools as part of how I ship — accelerating
            scaffolding, exploration, and iteration while I own the design,
            judgment, and final quality.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8"
        >
          {aiTools.map((tool) => {
            const Logo = LOGO_ICONS[tool.logo];
            return (
              <motion.div
                key={tool.name}
                variants={item}
                className="flex flex-col items-center text-center md:items-start md:text-left"
              >
                <div
                  className={`grid h-14 w-14 place-items-center rounded-2xl shadow-md ${tool.tile}`}
                  aria-hidden="true"
                >
                  {Logo ? <Logo size={28} /> : null}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-900">
                  {tool.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {tool.blurb}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default AiToolsSection;
