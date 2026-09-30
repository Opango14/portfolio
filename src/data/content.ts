// All portfolio copy and structured content lives here so the site
// can be updated without touching component/layout code.

export const profile = {
  name: "Timothy Opango",
  fullName: "Timothy Opango Osundwa",
  brand: "Opanode",
  role: "Software Developer · Backend & Full-Stack Developer",
  location: "Kenya",
  github: "https://github.com/Opango14",
  // TODO: replace with real contact details before publishing
  email: "hello@timothyopango.dev",
  linkedin: "https://www.linkedin.com/in/opango14",
  summary:
    "Software developer with hands-on experience building full-stack web applications and backend systems using Python, Django, FastAPI, JavaScript and Go.",
};

export const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Expertise", href: "/expertise" },
  { label: "Journey", href: "/journey" },
  { label: "Opanode", href: "/opanode" },
  { label: "Contact", href: "/contact" },
];

export const heroFacts = [
  { label: "Currently", value: "Zone01 Kisumu apprenticeship" },
  { label: "Focus", value: "Backend systems & full-stack products" },
  { label: "Stack", value: "Python · Django · FastAPI · Go · JS" },
  { label: "Based in", value: "Kenya, open to remote work" },
];

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  stack: string[];
  github?: string;
  live?: string;
  description: string;
  highlights: string[];
  role?: string;
  status?: string;
};

export const featuredProjects: Project[] = [
  {
    slug: "merry-chama",
    name: "Merry Chama",
    tagline: "Merry-go-round management platform",
    stack: ["Python", "Django", "SQLite"],
    github: "https://github.com/Opango14/merry_chama",
    live: "https://merrychama.onrender.com",
    description:
      "A full-stack Django app that helps community merry-go-round groups manage members, contributions and payouts on a shared, auditable ledger instead of notebooks and spreadsheets.",
    highlights: [
      "Role-based group administration and session-based auth",
      "Contribution and payout tracking with Excel export",
      "Deployed and in active use, not a prototype",
    ],
  },
  {
    slug: "kilimoclick",
    name: "KilimoClick",
    tagline: "Crop and irrigation advisory engine",
    stack: ["Python", "FastAPI", "REST APIs", "GIS data"],
    github: "https://github.com/HACKWITHNESBITT/KilimoClick",
    role: "Backend engineering",
    description:
      "An agricultural decision-support system that turns soil, GIS and forecast data into a plain answer for a farmer: is this crop suited here, and does the field need water today.",
    highlights: [
      "Crop-suitability and irrigation-timing decision logic",
      "GIS raster retrieval with a forecast caching layer",
      "Integrated with an external agro-climate API",
    ],
  },
  {
    slug: "translator",
    name: "English–Swahili Translator",
    tagline: "Full-stack translation application",
    stack: ["Python", "Django", "JavaScript", "REST API"],
    github: "https://github.com/Opango14/Full-Stack-Take-Home",
    description:
      "A bilingual translation tool with a Django API and a framework-free JavaScript frontend that updates results in place, without a page reload.",
    highlights: [
      "REST endpoint powering asynchronous translation requests",
      "Vanilla JS frontend — no framework overhead",
    ],
  },
];

export const additionalProjects: Project[] = [
  {
    slug: "shambachain",
    name: "Shambachain",
    tagline: "Agricultural traceability through blockchain",
    stack: ["Blockchain", "Agri-tech"],
    github: "https://github.com/Opango14/shambachain",
    role: "Project management & technical collaboration",
    description:
      "A team hackathon project exploring blockchain as a traceability layer for agricultural produce, from farm to buyer.",
    highlights: [
      "Coordinated team direction and delivery, not the core build",
    ],
  },
  {
    slug: "apprenticeship-platform",
    name: "Apprenticeship Performance & Analytics Platform",
    tagline: "Software engineering program management system",
    stack: ["Flask", "Python", "React", "TypeScript", "PostgreSQL"],
    status: "In development",
    description:
      "A platform that turns apprentice activity — checkpoints, reviews, attendance — into evidence, ratings and trends supervisors can act on.",
    highlights: [
      "Data → context → evidence → rating → trend → insight",
      "Largest system-design exercise in this portfolio",
    ],
  },
  {
    slug: "agwata-restaurant",
    name: "Agwata Restaurant",
    tagline: "Restaurant digital experience",
    stack: ["Web design", "Frontend", "Digital marketing"],
    github: "https://github.com/Opango14/agwata-restaurant",
    role: "Frontend & digital presence",
    description:
      "A mobile-first marketing site giving a real restaurant a clear, fast online presence.",
    highlights: ["Built for speed and clarity on mobile data"],
  },
];

export type ExperienceEntry = {
  role: string;
  org: string;
  period: string;
  points: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Software Engineering Apprentice",
    org: "Zone01 Kisumu",
    period: "February 2026 – Present",
    points: [
      "Peer-to-peer, project-based software engineering programme",
      "Go, JavaScript and Python across algorithms, data structures and debugging",
      "Git-based collaborative workflows and code reviews",
    ],
  },
  {
    role: "IT & Operations Manager",
    org: "Anigraphics Copiers and IT Solutions",
    period: "June 2025 – January 2026",
    points: [
      "IT support, hardware troubleshooting and basic networking",
      "Day-to-day digital printing operations and record keeping",
      "Direct customer support for technical issues",
    ],
  },
  {
    role: "ICT Assistant",
    org: "Koitaleel Samoei University College",
    period: "May 2024 – August 2024",
    points: [
      "Technical support for staff and students",
      "LAN/Wi-Fi troubleshooting and hardware diagnostics",
      "Software maintenance and basic technical training",
    ],
  },
];

export const education = {
  degree: "Bachelor of Science in Computer Science",
  school: "University of Eldoret",
  focus: [
    "Web development",
    "Network security",
    "Data structures and algorithms",
    "Database systems",
  ],
};

export const expertise = {
  Backend: ["Python", "Go", "Django", "FastAPI", "REST APIs", "Database design"],
  Frontend: ["JavaScript", "HTML", "CSS", "React", "TypeScript", "Tailwind CSS"],
  "Dev environment": ["Linux", "Git", "GitHub", "Docker", "PostgreSQL"],
  "Engineering interests": [
    "Backend systems",
    "Web applications",
    "Cybersecurity",
    "APIs",
    "Systems development",
    "Open-source software",
  ],
};

export const opanodeSteps = [
  { verb: "Understand", detail: "the system as it actually behaves, not as it's assumed to." },
  { verb: "Find", detail: "the specific problem worth solving, before writing a line of code." },
  { verb: "Design", detail: "the logic that solves it cleanly, with the trade-offs made explicit." },
  { verb: "Build", detail: "the solution, and ship something that works in the real world." },
];
