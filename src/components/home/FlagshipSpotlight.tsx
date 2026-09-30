import { Link } from "react-router-dom";
import { featuredProjects } from "../../data/content";

export function FlagshipSpotlight() {
  const project = featuredProjects[0]; // Merry Chama

  return (
    <section className="border-b border-[var(--color-line)] bg-[var(--color-bg)] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1280px]">
        {/* Section label */}
        <div className="section-label">
          <span className="section-label-index">02</span>
          <span className="section-label-line" />
          <span>Flagship Production Spotlight</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Context & Overview */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/10 px-3 py-1 font-mono text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
              Live In Production · Real Users
            </div>

            <h2 className="mt-4 font-display text-[clamp(2.4rem,4.5vw,4.2rem)] font-semibold leading-[0.94] tracking-[-0.04em] text-[var(--color-ink)]">
              {project.name}
            </h2>

            <p className="mt-2 font-mono text-sm uppercase tracking-[0.12em] text-[var(--color-accent)]">
              {project.tagline}
            </p>

            <p className="mt-6 text-[1.02rem] leading-7 text-[var(--color-muted)]">
              {project.description}
            </p>

            <div className="mt-8 space-y-3">
              <h3 className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-[var(--color-muted)]">
                Core System Deliverables
              </h3>
              <ul className="space-y-2.5">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 text-sm leading-6 text-[var(--color-ink)]"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-[var(--color-ink)] bg-[var(--color-ink)] px-5 py-2.5 font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[var(--color-bg)] transition-colors hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]"
                >
                  <span>Launch Live App</span>
                  <span>↗</span>
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-[var(--color-line)] bg-[var(--color-paper)] px-5 py-2.5 font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                >
                  <span>View Repository</span>
                  <span>↗</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Architectural Schematic & Gateway */}
          <div className="flex flex-col justify-between lg:col-span-6">
            <div className="border border-[var(--color-line)] bg-[var(--color-paper)] p-6 sm:p-8">
              <div className="flex items-center justify-between border-b border-[var(--color-line)] pb-4">
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-[var(--color-muted)]">
                  System Topology &amp; Ledger Logic
                </span>
                <span className="font-mono text-[0.58rem] text-[var(--color-accent)]">
                  PYTHON / DJANGO / SQLITE
                </span>
              </div>

              {/* Topology boxes */}
              <div className="mt-6 space-y-3 font-mono text-xs">
                <div className="border border-[var(--color-line)] bg-[var(--color-bg)] p-3.5">
                  <div className="text-[0.6rem] uppercase tracking-[0.12em] text-[var(--color-muted)]">
                    Step 01 / Ingestion
                  </div>
                  <div className="mt-1 font-semibold text-[var(--color-ink)]">
                    Session-Authenticated Member Contribution
                  </div>
                  <div className="mt-1 text-[0.7rem] text-[var(--color-muted)]">
                    Enforces role boundary: members submit records, admins verify
                  </div>
                </div>

                <div className="flex justify-center text-[var(--color-accent)]">
                  ↓
                </div>

                <div className="border border-[var(--color-accent)]/50 bg-[var(--color-bg)] p-3.5">
                  <div className="text-[0.6rem] uppercase tracking-[0.12em] text-[var(--color-accent)]">
                    Step 02 / Consensus &amp; Ledger
                  </div>
                  <div className="mt-1 font-semibold text-[var(--color-ink)]">
                    ACID Atomic Ledger Entry &amp; Double Validation
                  </div>
                  <div className="mt-1 text-[0.7rem] text-[var(--color-muted)]">
                    Balances updated simultaneously; prevents duplicate payouts
                  </div>
                </div>

                <div className="flex justify-center text-[var(--color-accent)]">
                  ↓
                </div>

                <div className="border border-[var(--color-line)] bg-[var(--color-bg)] p-3.5">
                  <div className="text-[0.6rem] uppercase tracking-[0.12em] text-[var(--color-muted)]">
                    Step 03 / Dissemination
                  </div>
                  <div className="mt-1 font-semibold text-[var(--color-ink)]">
                    Automated Queue Payout &amp; Excel Audit Export
                  </div>
                  <div className="mt-1 text-[0.7rem] text-[var(--color-muted)]">
                    Generates verifiable community reports for offline meetings
                  </div>
                </div>
              </div>
            </div>

            {/* Gateway banner to /work */}
            <div className="mt-8 border border-[var(--color-line)] bg-[var(--color-charcoal)] p-6 sm:p-7">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h4 className="font-display text-lg font-semibold text-[var(--color-ink)]">
                    Explore the complete project portfolio
                  </h4>
                  <p className="mt-1 text-xs text-[var(--color-muted)]">
                    Detailed case studies, system flowcharts, GIS engines, and translator services.
                  </p>
                </div>
                <Link
                  to="/work"
                  className="inline-flex shrink-0 items-center gap-2 border border-[var(--color-accent)] bg-transparent px-4 py-2 font-mono text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[var(--color-accent)] transition-colors hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)]"
                >
                  <span>All Projects</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
