import { education, experience } from "../data/content";
import { ButtonLink } from "./ButtonLink";
import { PageHeader } from "./PageHeader";

type JourneyCard = {
  org: string;
  period: string;
  role: string;
  description: string;
  points: string[];
  focus: string;
};

const experienceItems: JourneyCard[] = [
  {
    org: "Zone01 Kisumu",
    period: "2026 – PRESENT",
    role: "Software Engineering Apprentice",
    description:
      "Intensive peer-to-peer engineering curriculum mastering Go, JavaScript, and Python. Tackling algorithmic problem solving, custom data structures, low-level concurrency, and collaborative code reviews.",
    points: experience[0]?.points || [
      "Peer-to-peer, project-based software engineering programme",
      "Go, JavaScript and Python across algorithms, data structures and debugging",
      "Git-based collaborative workflows and code reviews",
    ],
    focus: "Go · Algorithms · Distributed Systems",
  },
  {
    org: "Anigraphics Copiers and IT Solutions",
    period: "JUNE 2025 – JAN 2026",
    role: "IT & Operations Manager",
    description:
      "Hands-on operational responsibility: hardware diagnostics, network troubleshooting, digital printing systems, customer technical support, and records management.",
    points: experience[1]?.points || [
      "IT support, hardware troubleshooting and basic networking",
      "Day-to-day digital printing operations and record keeping",
      "Direct customer support for technical issues",
    ],
    focus: "Infrastructure · Uptime · Operations",
  },
  {
    org: "Koitaleel Samoei University College",
    period: "MAY 2024 – AUG 2024",
    role: "ICT Assistant",
    description:
      "Campus technical support across faculty and student environments: local area network diagnostics, Wi-Fi maintenance, hardware triage, and software maintenance.",
    points: experience[2]?.points || [
      "Technical support for staff and students",
      "LAN/Wi-Fi troubleshooting and hardware diagnostics",
      "Software maintenance and basic technical training",
    ],
    focus: "Systems Support · Hardware · Campus LAN",
  },
];

const educationItems: JourneyCard[] = [
  {
    org: "University of Eldoret",
    period: `GRADUATED ${education.graduated}`,
    role: education.degree,
    description:
      "Comprehensive academic foundation in computer science: database normalization, operating system concepts, network architecture, cybersecurity fundamentals, and algorithm design.",
    points: education.focus,
    focus: "CS Theory · Databases · Security",
  },
];

function JourneyCardView({ item, index }: { item: JourneyCard; index: number }) {
  return (
    <div className="flex flex-col justify-between border border-[var(--color-line)] bg-[var(--color-paper)] p-6 transition-all duration-300 hover:border-[var(--color-accent)]/50 sm:p-8">
      <div>
        {/* Top Bar */}
        <div className="flex items-center justify-between border-b border-[var(--color-line)] pb-4 font-mono">
          <span className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]">
            0{index} // {item.org}
          </span>
          <span className="text-[0.58rem] tracking-[0.12em] text-[var(--color-muted)]">
            {item.period}
          </span>
        </div>

        {/* Role Title */}
        <h2 className="mt-5 font-display text-2xl font-semibold tracking-[-0.03em] text-[var(--color-ink)] sm:text-3xl">
          {item.role}
        </h2>

        {/* Overview Description */}
        <p className="mt-4 text-[0.92rem] leading-7 text-[var(--color-muted)]">
          {item.description}
        </p>

        {/* Core Deliverables / Focus */}
        <div className="mt-6 space-y-2 border-t border-[var(--color-line)] pt-5">
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-[var(--color-muted)]">
            Key Highlights &amp; Practice
          </span>
          <ul className="mt-2 space-y-2">
            {item.points.map((pt) => (
              <li
                key={pt}
                className="flex items-start gap-2.5 text-xs leading-5 text-[var(--color-ink)]"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Focus Tag */}
      <div className="mt-8 border-t border-[var(--color-line)] pt-4 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-[var(--color-accent)]">
        Focus: {item.focus}
      </div>
    </div>
  );
}

export function Journey() {
  return (
    <div className="overflow-hidden">
      {/* ── Page Header ────────────────────────────────────── */}
      <PageHeader
        label="Professional Journey"
        pill="Learning In Public · Execution Over Theory"
        title={
          <>
            <span>Grounded in practice</span>
            <br />
            <span className="text-[var(--color-accent)]">
              and continuous learning.
            </span>
          </>
        }
        description="Bridging classical computer science theory with high-velocity, peer-driven software engineering and production operations."
      />

      {/* ── Experience ─────────────────────────────────────── */}
      <section className="bg-[var(--color-bg)] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div>
          <div className="section-label">
            <span className="section-label-index">01</span>
            <span className="section-label-line" />
            <span>Experience</span>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:gap-8">
            {experienceItems.map((item, idx) => (
              <JourneyCardView key={item.org} item={item} index={idx + 1} />
            ))}
          </div>

          {/* ── Education ────────────────────────────────────── */}
          <div className="mt-20 section-label sm:mt-24">
            <span className="section-label-index">02</span>
            <span className="section-label-line" />
            <span>Education</span>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:gap-8">
            {educationItems.map((item, idx) => (
              <JourneyCardView key={item.org} item={item} index={idx + 1} />
            ))}
          </div>

          {/* Bottom Conversion Banner */}
          <div className="mt-14 flex flex-col items-start justify-between gap-6 border border-[var(--color-line)] bg-[var(--color-charcoal)] p-7 sm:flex-row sm:items-center sm:p-10">
            <div>
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-[var(--color-accent)]">
                Next Steps
              </span>
              <h3 className="mt-2 font-display text-xl font-semibold text-[var(--color-ink)] sm:text-2xl">
                Ready to build something impactful together?
              </h3>
              <p className="mt-2 text-xs leading-6 text-[var(--color-muted)]">
                Open to full-time remote software engineering roles, team
                collaborations, and contract backend engagements worldwide.
              </p>
            </div>

            <div className="flex shrink-0 flex-wrap items-center gap-3">
              <ButtonLink to="/work" variant="paper">
                <span>Explore Work</span>
                <span>↗</span>
              </ButtonLink>
              <ButtonLink to="/contact">
                <span>Initiate Contact</span>
                <span>→</span>
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
