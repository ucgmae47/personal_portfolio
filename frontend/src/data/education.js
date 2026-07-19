// Education details sourced from résumé + unofficial Spring 2026 transcript.
// Birthdate and other sensitive fields intentionally omitted.

export const education = {
  university: "University of Georgia",
  shortName: "UGA",
  college: "College of Arts and Sciences",
  location: "Athens, GA",
  gpa: "3.98",
  gpaScale: "4.00",
  expectedGraduation: "2027",
  dateRange: "2023 — 2027 (Expected)",
  degrees: [
    {
      title: "B.S. Computer Science",
      department: "School of Computing",
    },
    {
      title: "B.S. Applied Mathematics",
      department: "Department of Mathematics",
    },
  ],
  honors: [
    "Hollingsworth Award in Linear Algebra",
    "President’s Honor Roll",
    "Dean’s List",
    "Zell Miller Scholarship",
  ],
  highlights: [
    "3.98 institutional GPA across a double major in Computer Science and Applied Mathematics.",
    "119 credit hours earned; strong record in systems, algorithms, software engineering, and advanced math.",
    "Relevant coursework includes Algorithms, Data Structures, Graph Theory, Applied Linear Algebra, Discrete Mathematics, Systems Programming, Computer Architecture, Computer Networks, Theory of Computing, Mathematical Analysis, Software Engineering, and Software Development.",
    "Software Engineering Intern at Fetch Freight; previously undergraduate researcher (AI4STEM / VIPR).",
  ],
  // Downloadable PDFs in frontend/public/
  transcriptUrl: "/transcript-spring-2026.pdf",
  transcriptLabel: "Unofficial Transcript (Spring 2026)",
};

/** Term-by-term institution coursework from the unofficial transcript. */
export const coursework = [
  {
    term: "Fall 2024",
    standing: "Presidential Scholar",
    termGpa: "4.00",
    courses: [
      { code: "CSCI 1301", title: "Intro Computing and Programming", grade: "A", credits: 4 },
      { code: "CSCI 2610", title: "Discrete Mathematics for CSCI", grade: "A", credits: 4 },
      { code: "FYOS 1001", title: "First Year Odyssey", grade: "A", credits: 1 },
      {
        code: "MATH 3300",
        title: "Applied Linear Algebra",
        grade: "A",
        credits: 3,
        award: {
          name: "Hollingsworth Award",
          detail:
            "Awarded by Professor David Plaxco for earning the highest grade in the class.",
        },
      },
      { code: "MUSI 2040", title: "History of Popular Music", grade: "A", credits: 3 },
    ],
  },
  {
    term: "Spring 2025",
    standing: "Presidential Scholar",
    termGpa: "4.00",
    courses: [
      { code: "CSCI 1302", title: "Software Development", grade: "A", credits: 4 },
      { code: "LING 2100", title: "Study of Language", grade: "A", credits: 3 },
      { code: "MATH 3200W", title: "Intro to Higher Mathematics", grade: "A", credits: 3 },
      { code: "STAT 2000", title: "Introductory Statistics", grade: "A", credits: 4 },
    ],
  },
  {
    term: "Fall 2025",
    standing: "Presidential Scholar",
    termGpa: "4.00",
    courses: [
      { code: "CSCI 1730", title: "Systems Programming", grade: "A", credits: 4 },
      { code: "CSCI 2670", title: "Intro to Theory of Computing", grade: "A", credits: 4 },
      { code: "CSCI 2720", title: "Data Structures", grade: "A", credits: 4 },
      { code: "CSCI 3030", title: "Computing Ethics and Society", grade: "A", credits: 3 },
      { code: "MATH 3100", title: "Intro Mathematical Analysis", grade: "A", credits: 3 },
      { code: "VIPR 2601", title: "VIPR Team First Level", grade: "A", credits: 1 },
    ],
  },
  {
    term: "Spring 2026",
    standing: "Dean's List",
    termGpa: "3.95",
    courses: [
      { code: "CSCI 4050", title: "Software Engineering", grade: "A", credits: 4 },
      { code: "CSCI 4470", title: "Algorithms", grade: "A", credits: 4 },
      { code: "CSCI 4720", title: "Computer Architecture", grade: "A", credits: 4 },
      { code: "CSCI 4760", title: "Computer Networks", grade: "A", credits: 4 },
      { code: "MATH 4690", title: "Graph Theory", grade: "A-", credits: 3 },
    ],
  },
];

export const inProgress = {
  term: "Fall 2026",
  courses: [
    { code: "CSCI 4300", title: "Web Programming", credits: 4 },
    { code: "CSCI 4670", title: "Combinatorics", credits: 3 },
    { code: "MATH 2270", title: "Calc III Science and Math", credits: 4 },
    { code: "MATH 2700", title: "Elementary Differential Equations", credits: 3 },
  ],
};
