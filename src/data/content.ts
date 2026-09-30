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
  graduated: 2025,
  focus: [
    "Web development",
    "Network security",
    "Data structures and algorithms",
    "Database systems",
  ],
};

export type ExpertiseGroup = {
  title: string;
  tag: string;
  description: string;
  items: string[];
};

export const expertise: ExpertiseGroup[] = [
  {
    title: "Backend",
    tag: "Services & APIs",
    description:
      "Python and Go services built on Django and FastAPI — REST contracts, relational schema design, and data flows kept explicit and predictable.",
    items: ["Python", "Go", "Django", "FastAPI", "REST APIs", "Database design"],
  },
  {
    title: "Frontend",
    tag: "Interfaces & UX",
    description:
      "React and TypeScript for product interfaces, with vanilla JavaScript and hand-written CSS when a lighter client is the right call.",
    items: ["JavaScript", "HTML", "CSS", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Dev environment",
    tag: "Tooling & Delivery",
    description:
      "A Linux-first daily workflow with Git, Docker, and PostgreSQL keeping builds, reviews, and deployments repeatable.",
    items: ["Linux", "Git", "GitHub", "Docker", "PostgreSQL"],
  },
  {
    title: "Engineering interests",
    tag: "Direction & Growth",
    description:
      "The problem spaces I keep pulling toward: backend systems, web applications, cybersecurity, APIs, and open-source software.",
    items: [
      "Backend systems",
      "Web applications",
      "Cybersecurity",
      "APIs",
      "Systems development",
      "Open-source software",
    ],
  },
];

export const opanodeSteps = [
  { verb: "Understand", detail: "the system as it actually behaves, not as it's assumed to." },
  { verb: "Find", detail: "the specific problem worth solving, before writing a line of code." },
  { verb: "Design", detail: "the logic that solves it cleanly, with the trade-offs made explicit." },
  { verb: "Build", detail: "the solution, and ship something that works in the real world." },
];

export const opanodePhilosophy = {
  tagline: "Build with purpose. See with vision. Connect through creativity.",
  mantra: "Build. See. Connect.",
  nameMeaning: {
    opa: {
      element: "OPA",
      meaning: "Your identity and origin, inspired by Opango.",
    },
    node: {
      element: "NODE",
      meaning: "A point of connection, representing technology, systems and interconnected ideas.",
    },
    synthesis: {
      element: "OPANODE",
      meaning: "Your identity meeting technology and creativity to build, capture and connect.",
    },
  },
  coreBelief:
    "OPANODE is built on the belief that technology and creativity are interconnected ways of understanding and shaping the world. At its heart, OPANODE believes that every idea has the potential to become something meaningful when creativity, technology and perspective come together.",
  disciplines:
    "Technology provides the tools to build. Photography provides the ability to observe, interpret and capture the world. OPANODE brings these disciplines together to transform ideas into experiences, solutions and visual stories.",
  intention:
    "The philosophy is not simply about creating things, but about creating with intention, seeing beyond the obvious and connecting people with ideas through innovation.",
  pillars: [
    {
      title: "Build with purpose",
      verb: "Build",
      tagline: "Turn ideas into practical, valuable solutions.",
      description:
        "Use technology, logic and systems to turn ideas into practical solutions. Every creation should have a purpose and provide value.",
      focus: "Engineering, Systems, Logic, Impact",
    },
    {
      title: "See with vision",
      verb: "See",
      tagline: "Discover perspectives beyond the obvious.",
      description:
        "Look beyond what is immediately visible. Through photography and creative observation, discover new perspectives, capture meaningful moments and tell compelling stories.",
      focus: "Photography, Creative Observation, Visual Storytelling",
    },
    {
      title: "Connect through creativity",
      verb: "Connect",
      tagline: "Bring ideas, people, and possibilities together.",
      description:
        "Bring technology and visual storytelling together to connect ideas, people and possibilities. Like a node in a network, every creation can become part of something bigger.",
      focus: "Networks, Creative Expression, Community, Synergy",
    },
  ],
  mission:
    "To bridge technology and visual creativity by building purposeful digital solutions and capturing meaningful perspectives that inspire connection, innovation and discovery.",
  vision:
    "To become a distinctive creative technology brand that transforms ideas into impactful digital experiences and visual stories, continually exploring the possibilities where technology and creativity intersect.",
  values: [
    {
      name: "Innovation",
      detail: "Explore new approaches and challenge conventional ways of creating.",
    },
    {
      name: "Purpose",
      detail: "Make every project meaningful and intentional.",
    },
    {
      name: "Creativity",
      detail: "Embrace originality, imagination and different perspectives.",
    },
    {
      name: "Connection",
      detail: "Bring people, ideas and technologies together.",
    },
    {
      name: "Curiosity",
      detail: "Keep observing, learning, experimenting and discovering.",
    },
    {
      name: "Excellence",
      detail: "Pay attention to detail and continuously improve the quality of every creation.",
    },
  ],
  closingManifesto: {
    statement:
      "We believe technology gives ideas structure, creativity gives them expression, and connection gives them meaning.",
    subtext:
      "Through purposeful building and thoughtful observation, OPANODE brings digital innovation and visual storytelling together to create things that matter.",
  },
};

