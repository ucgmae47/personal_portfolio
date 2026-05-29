import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import { GithubIcon, LinkedinIcon } from "../components/BrandIcons";
import { profile } from "../data/profile";

function Contact() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 pb-24 pt-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto max-w-xl"
      >
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Get In Touch
          </h1>
          <p className="mx-auto mt-3 max-w-md text-slate-500">
            {profile.contactIntro}
          </p>
        </div>

        <ContactForm />

        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-slate-600 ring-1 ring-slate-200 transition-colors hover:bg-white hover:text-slate-900"
          >
            <LinkedinIcon size={18} />
            LinkedIn
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-slate-600 ring-1 ring-slate-200 transition-colors hover:bg-white hover:text-slate-900"
          >
            <GithubIcon size={18} />
            GitHub
          </a>
        </div>
      </motion.div>
    </main>
  );
}

export default Contact;
