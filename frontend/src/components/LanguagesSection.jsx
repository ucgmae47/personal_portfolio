import { motion } from "framer-motion";
import { languages } from "../data/languages";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const levelStyles = {
  Proficient: "bg-emerald-50 text-emerald-800 ring-emerald-200",
  Intermediate: "bg-cyan-50 text-cyan-900 ring-cyan-200",
  Conversational: "bg-slate-100 text-slate-700 ring-slate-200",
};

function LanguagesSection() {
  return (
    <section id="languages" className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Languages
          </h2>
          <p className="mt-3 text-slate-500">
            Human languages I speak — beyond the ones I write in code.
          </p>
        </div>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-3"
        >
          {languages.map((lang) => (
            <motion.li
              key={lang.name}
              variants={item}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium ring-1 ${
                levelStyles[lang.level] ?? levelStyles.Conversational
              }`}
            >
              <span
                className="text-lg leading-none"
                role="img"
                aria-label={lang.flagLabel}
              >
                {lang.flag}
              </span>
              <span>{lang.name}</span>
              <span className="font-normal opacity-70">· {lang.level}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

export default LanguagesSection;
