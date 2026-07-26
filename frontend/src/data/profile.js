// SINGLE SOURCE OF TRUTH for your personal info.
// Edit these values once and they update everywhere in the app.
// TODO(content): replace placeholders with your real details.
export const profile = {
  name: "Caleb Elder",
  initials: "CE",
  university: "University of Georgia",
  universityShort: "UGA",
  gpa: "3.98",
  // Role titles cycled by the typewriter in the hero.
  roles: [
    "Software Engineering Intern",
    "Full-Stack Developer",
    "Computer Science Student",
    "Undergraduate Researcher",
  ],
  // Short intro shown on the contact page.
  contactIntro:
    "Have a question, an opportunity, or just want to say hi? Drop me a message and I'll get back to you.",
  links: {
    linkedin: "https://www.linkedin.com/in/calebelder-compsci",
    github: "https://github.com/ucgmae47",
    // Your resume lives in frontend/public/. BASE_URL is required for GitHub Pages.
    resume: `${import.meta.env.BASE_URL}resume.pdf`,
    email: "caleb.elder4@icloud.com",
  },
};
