import { motion } from "framer-motion";
import { Download, FileText, GraduationCap, Award, BookOpen } from "lucide-react";
import { UgaLogo } from "../components/BrandIcons";
import { profile } from "../data/profile";
import { education, coursework, inProgress } from "../data/education";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function Education() {
  return (
    <main className="min-h-screen bg-slate-50 pb-24 pt-16">
      {/* Hero banner — GPA + UGA front and center */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-[#3a0a14] to-[#BA0C2F] px-6 py-16 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.12 }}
          className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 text-center md:flex-row md:text-left"
        >
          <motion.div variants={fadeUp} className="shrink-0">
            <UgaLogo size={112} className="drop-shadow-xl" />
          </motion.div>

          <div className="flex-1">
            <motion.p
              variants={fadeUp}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300/90"
            >
              Education
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
            >
              {education.university}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-2 text-lg text-white/75"
            >
              {education.college} · {education.location}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start"
            >
              <div className="rounded-2xl bg-white/10 px-6 py-4 ring-1 ring-white/20 backdrop-blur-sm">
                <p className="text-xs font-medium uppercase tracking-wider text-amber-200/90">
                  Institutional GPA
                </p>
                <p className="mt-1 text-5xl font-bold tabular-nums tracking-tight text-white">
                  {education.gpa}
                  <span className="ml-1 text-2xl font-semibold text-white/50">
                    /{education.gpaScale}
                  </span>
                </p>
              </div>
              <div className="rounded-2xl bg-white/10 px-6 py-4 ring-1 ring-white/20 backdrop-blur-sm">
                <p className="text-xs font-medium uppercase tracking-wider text-amber-200/90">
                  Expected
                </p>
                <p className="mt-1 text-3xl font-bold text-white">
                  {education.expectedGraduation}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <div className="mx-auto max-w-5xl space-y-16 px-6 pt-14">
        {/* Degrees + résumé highlights */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="mb-6 flex items-center gap-3">
            <GraduationCap className="text-[#BA0C2F]" size={26} />
            <h2 className="text-2xl font-bold text-slate-900">
              {education.degrees.length > 1 ? "Degrees" : "Degree"}
            </h2>
          </div>

          <div
            className={`grid gap-4 ${
              education.degrees.length > 1 ? "sm:grid-cols-2" : "max-w-xl"
            }`}
          >
            {education.degrees.map((degree) => (
              <div
                key={degree.title}
                className="rounded-2xl bg-white p-6 ring-1 ring-slate-200"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {degree.title}
                </h3>
                <p className="mt-1 text-sm text-slate-500">{degree.department}</p>
                <p className="mt-3 text-sm font-medium text-slate-600">
                  {education.dateRange}
                </p>
              </div>
            ))}
          </div>

          <ul className="mt-6 space-y-2 text-slate-600">
            {education.highlights.map((line) => (
              <li key={line} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#BA0C2F]" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Honors */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="mb-6 flex items-center gap-3">
            <Award className="text-amber-500" size={26} />
            <h2 className="text-2xl font-bold text-slate-900">Achievements</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {education.honors.map((honor) => (
              <span
                key={honor}
                className="rounded-full bg-amber-50 px-4 py-2 text-sm font-medium text-amber-900 ring-1 ring-amber-200"
              >
                {honor}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Downloads */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="mb-6 flex items-center gap-3">
            <Download className="text-emerald-600" size={26} />
            <h2 className="text-2xl font-bold text-slate-900">Documents</h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={education.transcriptUrl}
              download
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#BA0C2F] px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-900/15 transition-all hover:-translate-y-0.5 hover:bg-[#9a0a27]"
            >
              <FileText size={18} />
              Download {education.transcriptLabel}
            </a>
            <a
              href={profile.links.resume}
              download
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-slate-800"
            >
              <FileText size={18} />
              Download Resume
            </a>
          </div>
          <p className="mt-3 text-xs text-slate-400">
            The transcript file is unofficial and intended for recruiter review.
          </p>
        </motion.section>

        {/* Coursework from transcript */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="mb-2 flex items-center gap-3">
            <BookOpen className="text-emerald-600" size={26} />
            <h2 className="text-2xl font-bold text-slate-900">Coursework</h2>
          </div>
          <p className="mb-8 text-slate-500">
            Institution credit at UGA, pulled from the unofficial transcript.
          </p>

          <div className="space-y-8">
            {coursework.map((term) => (
              <div
                key={term.term}
                className="rounded-2xl bg-white ring-1 ring-slate-200"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 rounded-t-2xl border-b border-slate-100 bg-slate-50/80 px-5 py-4">
                  <div>
                    <h3 className="font-semibold text-slate-900">{term.term}</h3>
                    <p className="text-sm text-slate-500">{term.standing}</p>
                  </div>
                  <p className="text-sm font-medium text-slate-600">
                    Term GPA{" "}
                    <span className="tabular-nums text-slate-900">
                      {term.termGpa}
                    </span>
                  </p>
                </div>
                <div className="rounded-b-2xl">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-slate-100 text-xs uppercase tracking-wider text-slate-400">
                        <th className="px-5 py-3 font-medium">Course</th>
                        <th className="px-5 py-3 font-medium">Title</th>
                        <th className="px-5 py-3 font-medium">Grade</th>
                        <th className="px-5 py-3 font-medium">Credits</th>
                      </tr>
                    </thead>
                    <tbody>
                      {term.courses.map((course) => (
                        <tr
                          key={course.code}
                          className="border-b border-slate-50 last:border-0"
                        >
                          <td className="px-5 py-3 font-medium tabular-nums text-slate-800">
                            {course.code}
                          </td>
                          <td className="relative px-5 py-3 text-slate-600">
                            <span className="inline-flex items-center gap-1.5">
                              {course.title}
                              {course.award && (
                                <span className="group relative inline-flex">
                                  <button
                                    type="button"
                                    aria-label={course.award.name}
                                    className="rounded-full p-0.5 text-amber-500 transition-colors hover:bg-amber-50 hover:text-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
                                  >
                                    <Award size={16} aria-hidden="true" />
                                  </button>
                                  <span
                                    role="tooltip"
                                    className="pointer-events-none absolute left-1/2 top-full z-30 mt-2 w-64 -translate-x-1/2 rounded-xl bg-slate-900 px-3.5 py-3 text-left text-xs leading-relaxed text-white opacity-0 shadow-lg ring-1 ring-white/10 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100"
                                  >
                                    <span
                                      aria-hidden="true"
                                      className="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-slate-900"
                                    />
                                    <span className="block font-semibold text-amber-300">
                                      {course.award.name}
                                    </span>
                                    <span className="mt-1 block text-slate-200">
                                      {course.award.detail}
                                    </span>
                                  </span>
                                </span>
                              )}
                            </span>
                          </td>
                          <td className="px-5 py-3 font-semibold text-emerald-700">
                            {course.grade}
                          </td>
                          <td className="px-5 py-3 tabular-nums text-slate-500">
                            {course.credits}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}

            {/* In progress — same layout as completed terms, without GPA/grade */}
            <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 bg-slate-50/80 px-5 py-4">
                <div>
                  <h3 className="font-semibold text-slate-900">
                    {inProgress.term}
                  </h3>
                  <p className="text-sm text-slate-500">In Progress</p>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[480px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-100 text-xs uppercase tracking-wider text-slate-400">
                      <th className="px-5 py-3 font-medium">Course</th>
                      <th className="px-5 py-3 font-medium">Title</th>
                      <th className="px-5 py-3 font-medium">Credits</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inProgress.courses.map((course) => (
                      <tr
                        key={course.code}
                        className="border-b border-slate-50 last:border-0"
                      >
                        <td className="px-5 py-3 font-medium tabular-nums text-slate-800">
                          {course.code}
                        </td>
                        <td className="px-5 py-3 text-slate-600">
                          {course.title}
                        </td>
                        <td className="px-5 py-3 tabular-nums text-slate-500">
                          {course.credits}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}

export default Education;
