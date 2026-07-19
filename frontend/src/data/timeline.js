// Pulled from Caleb's résumé and related experience.
// `type` is "work", "activity", or "leadership".
// Ordered most-recent first. Education lives on /education.

export const timeline = [
  {
    type: "work",
    date: "May 2026 — Present",
    title: "Software Engineering Intern",
    org: "Fetch Freight · Birmingham, AL",
    bullets: [
      "Shipped 5 production systems in 8 weeks (Azure, Node.js/TypeScript, React, PostgreSQL), including a full-stack negotiation platform with automated writes into the company’s transportation management system.",
      "Co-developed an AI document-processing pipeline (Claude vision) that classifies, matches, and autonomously files carrier paperwork, with feedback loops that learn from human corrections.",
      "Reverse-engineered undocumented legacy systems and rebuilt them as tested cloud services, proving penny-perfect parity across 291 orders and surfacing $720K+ in past-due receivables on the first production run.",
      "Established the team’s safe-rollout playbook (shadow modes, idempotent send ledgers, feature flags) and owned security fixes including a stored-XSS patch and catching a vendor link exposing edit access to company data.",
    ],
  },
  {
    type: "work",
    date: "Jan 2026 — May 2026",
    title: "AI Trainer",
    org: "Handshake AI",
    bullets: [
      "Completed multiple AI training task types spanning image and video generation, conversational evaluation, and real-world data collection.",
      "Wrote prompts for image and video transformations and conducted structured video-call Q&A sessions used to train models.",
      "Recorded videos under specific movement constraints and contributed real-world data to help improve future AI systems.",
    ],
  },
  {
    type: "work",
    date: "Jan 2026 — May 2026",
    title: "Server’s Assistant",
    org: "The National · Downtown Athens, GA",
    bullets: [
      "Supported high-volume fine-dining service by running plates and drinks, resetting tables, and keeping the floor moving smoothly.",
      "Coordinated with servers on priorities so the most imminent tasks were handled first during busy service.",
      "Balanced fast-paced hospitality work alongside coursework and AI training commitments.",
    ],
  },
  {
    type: "work",
    date: "Aug 2025 — Dec 2025",
    title: "Undergraduate Researcher — AI4STEM (VIPR Program)",
    org: "University of Georgia · Athens, GA",
    bullets: [
      "Researched LLM automated assessment models, sourcing benchmark datasets and designing a multimodal rubric integrating text and image data.",
      "Developed Python data pipelines to process spreadsheet metrics into structured JSON, hitting the OpenAI API for reasoning-based grading scores.",
      "Evaluated system performance with Cohen’s Kappa against human teacher scores; presented findings at the CURO Symposium.",
    ],
  },
  {
    type: "activity",
    date: "Summer 2025",
    title: "Athlete — Athens Summer League",
    org: "Ultimate Frisbee · Athens, GA",
    bullets: [
      "Competed in the Athens Ultimate Frisbee Summer League, balancing practices and games with summer coursework and research.",
      "Built teamwork, communication, and competitive focus in a fast-paced team environment.",
    ],
  },
  {
    type: "work",
    date: "Jun 2021 — Jul 2025",
    title: "Server",
    org: "Rachel's Southern Style Restaurant · Watkinsville, GA",
    bullets: [
      "Promoted through three positions (busser → cashier → server), reflecting strong work ethic and reliability.",
      "Managed up to 40 hours/week while balancing coursework, demonstrating time management.",
      "Trained and supervised 15–20 team members on service, workflow, and closing procedures.",
    ],
  },
  {
    type: "leadership",
    date: "Aug 2022 — May 2024",
    title: "Founder & President — Chinese Club",
    org: "North Oconee High School",
    bullets: [
      "Founded the Chinese Club and recruited co-leaders to grow and sustain the organization.",
      "Created advertising posters, structured lesson plans, and games/activities that made meetings engaging.",
      "Brought in traditional food and built personal connections with members to strengthen community around language and culture.",
    ],
  },
];
