PROJECT CONTEXT — Personal Portfolio Website
I am a Computer Science student with existing full-stack experience in React, Flask, and MySQL. I am building a personal portfolio website to share with employers and recruiters. This prompt is my master context document. Reference it throughout our entire working relationship on this project.

Tech Stack

Frontend: React (Vite) + Tailwind CSS + Framer Motion + Lucide React
Backend: Python (FastAPI) + PyMySQL or mysql-connector-python + python-dotenv
Database: MySQL
No UI component libraries (no shadcn, no MUI, no Chakra) — all components built with Tailwind utility classes only


Folder Structure
portfolio/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── ToolsSection.jsx
│   │   │   ├── ProjectsSection.jsx
│   │   │   ├── TimelineSection.jsx
│   │   │   ├── ContactForm.jsx
│   │   │   ├── ToolCard.jsx
│   │   │   ├── ProjectCard.jsx
│   │   │   └── TimelineItem.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── History.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── Contact.jsx
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── tailwind.config.js
│   └── vite.config.js
├── backend/
│   ├── main.py
│   ├── database.py
│   ├── models.py
│   ├── .env
│   └── requirements.txt
└── database/
    └── schema.sql

Order of Implementation — Do Not Deviate Without Asking Me
We will build in this exact order. Do not jump ahead to a later phase unless I explicitly say so:

Scaffold the full folder structure and confirm it with me before generating any component code
Navbar and Hero section (frontend only, no API calls yet)
Tools & Technologies section (frontend only, hardcoded data)
Featured Projects preview (frontend only, hardcoded data)
History/Timeline page (frontend only, hardcoded data)
Projects page with filter bar (frontend only, hardcoded data)
Contact page and form UI (frontend only, no backend yet)
Full styling pass — responsiveness, animations, polish across all sections
FastAPI backend — project scaffold, CORS, environment config
POST /api/contact endpoint
MySQL schema and contact_submissions table
Wire contact form to live backend endpoint
Deployment

At no point should backend or database setup block frontend progress. If I need real data to continue, hardcode it temporarily and flag it for replacement later.

Visual Design & Layout
The site should feel modern, clean, and developer-focused. Dark hero transitioning to a light content area on scroll. Animations purposeful and smooth, never flashy. All colors and spacing defined in tailwind.config.js for easy global updates. Fully responsive — test at 375px (mobile), 768px (tablet), and 1280px (desktop). All inname as a text logo
Center: page links — Home, History, Projects, Contact (React Router)
Right: three icon-only buttons using Lucide React — LinkedIn (external link), GitHub (external link), Resume (PDF download) — each with a hover highlight and tooltip

Hero Section

Full viewport height (100vh)
Deep navy-to-dark-green gradient background with a subtle grid or dot pattern overlay for texture
Centered layout: circular profile photo with a glowing colored ring border, my name in large text below, a typewriter animation cycling through 2-3 role titles, two CTA buttons ("View My Work" scrolls to tools, "Get In Touch" links to /contact), and a bouncing scroll indicator at the bottom center
As the user scrolls down, the white content area slides up and covers the hero — the profile photo scrolls away naturally underneath the rising content using a layered z-index approach

Tools & Technologies Section

White/light background
Responsive grid: 4 columns desktop, 2 columns mobile
Each card shows the tool logo and name on the front face
On hover (desktop) or tap (mobile): card flips 180 degrees on the Y axis to reveal the back face showing years of experience, a one-line context blurb, and a proficiency indicator
Cards slide up from below with staggered delay using Framer Motion whileInView
Tools to include: Python, React, MySQL, FastAPI, JavaScript, HTML/CSS, Git, Docker

Featured Projects Preview (Home Page)

Light gray background
2–3 project cards in a 2-column desktop / 1-column mobile grid
Each card: project title, short description, tech stack pill badges, GitHub and live demo icon buttons
Cards slide up on scroll into view
"View All Projects" button links to /projects

History Page (/history)

Vertical timeline centered on the page with a line running down the middle
Entries alternateright on desktop, stack single column on mobile
Each entry: date range, role/degree title, company/institution, 2-3 bullet points, icon for work vs. education
Entries animate in from alternating sides using Framer Motion whileInView
The center vertical line progressively draws itself downward as the user scrolls using a scroll-linked motion value

Projects Page (/projects)

3-column desktop, 2-column tablet, 1-column mobile grid
Filter bar at the top — filter by tech tag (React, Python, MySQL, etc.)
Same card structure as featured projects
Cards animate in with staggered slide-up on load and when filter changes

Contact Page (/contact)

Centered layout, max-width ~600px
Short intro text above the form
Fields: Name (required), Email (required, validated), Subject (optional), Message (required, textarea)
Submit button with loading state while request is in flight — disable during submission to prevent double-submit
On success: replace the form with a thank-you message (no browser alerts)
On error: show a friendly inline error message (no browser alerts)
Frontend validation fires before the request hits the backend
Below the form: LinkedIn and GitHub as icon + label buttons
Form POSTs to FastAPI endpoint POST /api/contact which saves to MySQL


Backend (FastAPI)

Entry point: backend/main.py
CORS middleware configured to allow requests from http://localhost:5173
Environment variables via python-dotenv: DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME
Single endpoint to start: POST /api/contact — accepts name, email, subject, message — validates presence and email format — inserts into contact_submissions table — returns success or error tabase (MySQL)
sqlCREATE TABLE contact_submissions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(255),
  message TEXT NOT NULL,
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

Animation Rules

Use Framer Motion for all animations
Use whileInView with viewport={{ once: true }} so animations only trigger once per page load
Scroll-triggered entrance animations: slide up from below with staggered children for grids, slide in from alternating sides for timeline entries
Hero scroll effect: layered z-index, content area overlays the hero as user scrolls
Tool card flip: CSS 3D Y-axis flip on hover/tap
Timeline line: scroll-linked height animation using Framer Motion useScroll and useTransform


Teaching & Learning Style — This Is Non-Negotiable
I want to learn through this project, not just have code generated for me. You must follow this approach for every new concept we encounter:

Explain first — Before writing any code for a concI haven't seen in this stack, explain how it works in plain language. No code yet.
Minimal example — Show me the simplest possible isolated working example of just that concept.
Hand it to me — Give me a skeleton with clearly labeled gaps and tell me what each gap needs to accomplish. Wait for me to attempt it.
Debrief — Review what I wrote, explain what I got right or wrong, then show the complete correct version.
Then scale — After we've done one guided example together, you may implement the remaining repetitive instances of that concept on your own.

Always invite me to ask questions before moving on to the next concept. Never introduce more than one new concept at a time. If you find yourself about to generate a large block of code covering something new, stop and go back to step 1.
Concepts in this project that are new relative to my Flask/React experience and require the full guided treatment:

FastAPI route structure and Pydantic models (different pattern than Flask)
FastAPI dependency injecng Depends()
Framer Motion scroll-linked animations (useScroll, useTransform)
Framer Motion whileInView with staggered children
CSS 3D card flip implementation
Environment variable management across both frontend and backend
MySQL connection pooling in FastAPI (different from Flask-SQLAlchemy)
Deployment configuration (AWS or Render/Railway)

Concepts I already know well — implement these freely without the guided walkthrough:

Basic React component structure and props
React Router setup
Standard MySQL queries
REST API conventions
Tailwind utility class styling
Basic fetch/axios API calls

If I say "just build it" for any concept, override the teaching mode for that moment only and generate the code directly. Then return to teaching mode for the next new concept.

General Rules for Our Sessions

Always scaffold the file/folder structure and confirm it with me before generating component code
Commit checkpoints: remind me to git commit after every working feature with a suggested descriptive commit message
Never hardcode credentials — always use .env and remind me to add .env to .gitignore
If you're about to make an assumption about layout, data structure, or behavior, ask me first instead
If I ask you to proceed and something is ambiguous, flag the ambiguity and give me two options rather than guessing
Keep a running mental note of anywhere data is hardcoded so we can replace it systematically in the backend phase