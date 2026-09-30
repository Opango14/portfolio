import { Link } from "react-router-dom";

type Pillar = {
  index: string;
  title: string;
  description: string;
  highlights: string[];
  focusPill: string;
};

const pillars: Pillar[] = [
  {
    index: "01",
    title: "High-Assurance Backend Architecture",
    description:
      "Designing clean RESTful API contracts, relational schemas, and deterministic state transitions. Prioritizing strict validation and transactional integrity over fragile ad-hoc scripts.",
    highlights: [
      "Explicit ACID transaction boundaries",
      "Robust role-based authorization & session auth",
      "Strict relational schema migration hygiene",
    ],
    focusPill: "System Reliability",
  },
  {
    index: "02",
    title: "Low-Latency Data Pipelines",
    description:
      "Transforming complex external inputs—from geospatial raster layers to meteorological feeds—into cached, sub-second decision outputs optimized for mobile clients on low-bandwidth networks.",
    highlights: [
      "In-memory spatial coordinate caching",
      "Asynchronous non-blocking request handling",
      "External API call reduction & rate mitigation",
    ],
    focusPill: "Data & Performance",
  },
  {
    index: "03",
    title: "Algorithmic Rigor & Systems Discipline",
    description:
      "Sharpened through the intensive Zone01 peer-to-peer curriculum: implementing custom algorithms and data structures in Go, conducting peer code reviews, and debugging at the systems layer.",
    highlights: [
      "Time and space complexity optimization",
      "Unix/Linux systems comfort & shell automation",
      "Disciplined Git workflow & peer review culture",
    ],
    focusPill: "Engineering Rigor",
  },
  {
    index: "04",
    title: "Pragmatic, Lean Product Delivery",
    description:
      "Delivering full-stack solutions that prioritize speed to interactive. Choosing the right tool for the job—whether a zero-dependency vanilla JS client or a React/TypeScript interface.",
    highlights: [
      "Zero-bloat client runtime overhead",
      "Mobile-first responsive architecture",
      "Accessible, semantic markup standards",
    ],
    focusPill: "Product Execution",
  },
];

export function EngineeringPillars() {
  return (
    <section className="border-b border-[var(--color-line)] bg-[var(--color-paper)] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1280px]">
        {/* Section label */}
        <div className="section-label">
          <span className="section-label-index">03</span>
          <span className="section-label-line" />
          <span>Core Capabilities &amp; Value</span>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="font-display text-[clamp(2.4rem,5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-[var(--color-ink)]">
              What I bring to an engineering team.
            </h2>
            <p className="mt-4 max-w-[52ch] text-[0.98rem] leading-7 text-[var(--color-muted)]">
              Beyond individual syntax and frameworks, here are the foundational
              engineering disciplines I apply to build maintainable, resilient
              software.
            </p>
          </div>

          <Link
            to="/expertise"
            className="inline-flex items-center gap-2 font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[var(--color-ink)] underline underline-offset-4 hover:text-[var(--color-accent)]"
          >
            <span>View Full Toolchain in Expertise</span>
            <span>↗</span>
          </Link>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.index}
              className="flex flex-col justify-between border border-[var(--color-line)] bg-[var(--color-bg)] p-6 transition-all duration-300 hover:border-[var(--color-accent)]/50 sm:p-8"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[var(--color-accent)]">
                    {pillar.index} // {pillar.focusPill}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                </div>

                <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.03em] text-[var(--color-ink)]">
                  {pillar.title}
                </h3>

                <p className="mt-3 text-[0.92rem] leading-7 text-[var(--color-muted)]">
                  {pillar.description}
                </p>

                <ul className="mt-6 space-y-2 border-t border-[var(--color-line)] pt-5">
                  {pillar.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-2.5 font-mono text-[0.65rem] text-[var(--color-ink)]"
                    >
                      <span className="text-[var(--color-accent)]">›</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Gateway Bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border border-[var(--color-line)] bg-[var(--color-charcoal)] p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <h4 className="font-display text-lg font-semibold text-[var(--color-ink)]">
              Looking for specific technologies, languages, and runtime environments?
            </h4>
            <p className="mt-1 text-xs text-[var(--color-muted)]">
              Explore the full categorized matrix covering Python, Go, Django, FastAPI, Linux, Docker, PostgreSQL, and more.
            </p>
          </div>
          <Link
            to="/expertise"
            className="inline-flex shrink-0 items-center gap-2 border border-[var(--color-accent)] bg-[var(--color-accent)] px-5 py-2.5 font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[var(--color-bg)] transition-colors hover:bg-transparent hover:text-[var(--color-accent)]"
          >
            <span>Explore Expertise</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
