import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

function TimelineItem({ entry, index }) {
  const isLeft = index % 2 === 0;
  const Icon = entry.type === "work" ? Briefcase : GraduationCap;

  return (
    <div className="relative flex md:min-h-[1px] md:items-center">
      {/* Center node */}
      <div className="absolute left-4 top-1 z-10 grid h-9 w-9 -translate-x-1/2 place-items-center rounded-full bg-emerald-500 text-white ring-4 ring-white md:left-1/2">
        <Icon size={18} />
      </div>

      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`ml-12 w-full md:ml-0 md:w-1/2 ${
          isLeft ? "md:pr-12" : "md:ml-auto md:pl-12"
        }`}
      >
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <span className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
            {entry.date}
          </span>
          <h3 className="mt-1 text-lg font-bold text-slate-900">
            {entry.title}
          </h3>
          <p className="text-sm font-medium text-slate-500">{entry.org}</p>
          <ul className="mt-3 space-y-1.5">
            {entry.bullets.map((b, i) => (
              <li
                key={i}
                className="flex gap-2 text-sm leading-relaxed text-slate-600"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

export default TimelineItem;
