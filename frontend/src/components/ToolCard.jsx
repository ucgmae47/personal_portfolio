import { useState } from "react";

// TODO(content): swap the monogram badge for real tool logos if desired.
function ToolCard({ tool }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="perspective h-52 w-full cursor-pointer"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((f) => !f)}
    >
      <div
        className={`preserve-3d relative h-full w-full transition-transform duration-500 ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front face */}
        <div className="backface-hidden absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid h-16 w-16 place-items-center rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-2xl font-bold text-white">
            {tool.name.charAt(0)}
          </div>
          <h3 className="text-lg font-semibold text-slate-800">{tool.name}</h3>
        </div>

        {/* Back face */}
        <div className="backface-hidden rotate-y-180 absolute inset-0 flex flex-col justify-center gap-3 rounded-2xl border border-emerald-500/30 bg-slate-900 p-6 text-left shadow-lg">
          <div className="flex items-baseline justify-between">
            <h3 className="text-lg font-semibold text-white">{tool.name}</h3>
            <span className="text-xs font-medium text-emerald-400">
              {tool.years}
            </span>
          </div>
          <p className="text-sm leading-snug text-slate-300">{tool.blurb}</p>
          <div className="mt-1">
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-700">
              <div
                className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400"
                style={{ width: `${tool.level}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToolCard;
