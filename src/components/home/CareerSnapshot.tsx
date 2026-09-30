import { Link } from "react-router-dom";

export function CareerSnapshot() {
  return (
    <section className="border-b border-[var(--color-line)] bg-[var(--color-paper)] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1280px]">
        {/* Section label */}
        <div className="section-label">
          <span className="section-label-index">05</span>
          <span className="section-label-line" />
          <span>Professional Trajectory</span>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="font-display text-[clamp(2.4rem,5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-[var(--color-ink)]">
              Grounded in practice and continuous learning.
            </h2>
            <p className="mt-4 max-w-[50ch] text-[0.98rem] leading-7 text-[var(--color-muted)]">
              Bridging classical computer science theory with high-velocity,
              peer-driven software engineering and production operations.
            </p>
          </div>

          <Link
            to="/journey"
            className="inline-flex items-center gap-2 font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[var(--color-ink)] underline underline-offset-4 hover:text-[var(--color-accent)]"
          >
            <span>View Full Timeline in Journey</span>
            <span>↗</span>
          </Link>
        </div>

        {/* 3 Columns */}
        <div className="mt-14 grid gap-6 md:grid-cols-3 lg:gap-8">
          <div className="flex flex-col justify-between border border-[var(--color-line)] bg-[var(--color-bg)] p-6 sm:p-8">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                  Zone01 Kisumu
                </span>
                <span className="font-mono text-[0.58rem] text-[var(--color-muted)]">
                  2026 – PRESENT
                </span>
              </div>
              <h3 className="mt-3 font-display text-xl font-semibold text-[var(--color-ink)]">
                Software Engineering Apprentice
              </h3>
              <p className="mt-4 text-[0.9rem] leading-6 text-[var(--color-muted)]">
                Intensive peer-to-peer engineering curriculum mastering Go,
                JavaScript, and Python. Tackling algorithmic problem solving,
                data structures, low-level concurrency, and collaborative code reviews.
              </p>
            </div>
            <div className="mt-6 border-t border-[var(--color-line)] pt-4 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-[var(--color-accent)]">
              Focus: Go · Algorithms · Systems
            </div>
          </div>

          <div className="flex flex-col justify-between border border-[var(--color-line)] bg-[var(--color-bg)] p-6 sm:p-8">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                  University of Eldoret
                </span>
                <span className="font-mono text-[0.58rem] text-[var(--color-muted)]">
                  GRADUATE
                </span>
              </div>
              <h3 className="mt-3 font-display text-xl font-semibold text-[var(--color-ink)]">
                BSc in Computer Science
              </h3>
              <p className="mt-4 text-[0.9rem] leading-6 text-[var(--color-muted)]">
                Academic foundation in computer science: database normalization,
                operating system concepts, network architecture, cybersecurity
                fundamentals, and algorithm design.
              </p>
            </div>
            <div className="mt-6 border-t border-[var(--color-line)] pt-4 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-[var(--color-accent)]">
              Focus: CS Theory · Databases · Security
            </div>
          </div>

          <div className="flex flex-col justify-between border border-[var(--color-line)] bg-[var(--color-bg)] p-6 sm:p-8">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                  IT &amp; Systems Operations
                </span>
                <span className="font-mono text-[0.58rem] text-[var(--color-muted)]">
                  2024 – 2026
                </span>
              </div>
              <h3 className="mt-3 font-display text-xl font-semibold text-[var(--color-ink)]">
                Operations &amp; Technical Support
              </h3>
              <p className="mt-4 text-[0.9rem] leading-6 text-[var(--color-muted)]">
                Hands-on operational responsibility across Anigraphics and Koitaleel
                Samoei University College: network diagnostics, hardware triage,
                digital records, and customer-facing troubleshooting.
              </p>
            </div>
            <div className="mt-6 border-t border-[var(--color-line)] pt-4 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-[var(--color-accent)]">
              Focus: Infrastructure · Uptime · Support
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border border-[var(--color-line)] bg-[var(--color-charcoal)] p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <h4 className="font-display text-lg font-semibold text-[var(--color-ink)]">
              Explore the detailed career journey and experience timeline
            </h4>
            <p className="mt-1 text-xs text-[var(--color-muted)]">
              Read comprehensive details on every past role, responsibilities, and academic coursework.
            </p>
          </div>
          <Link
            to="/journey"
            className="inline-flex shrink-0 items-center gap-2 border border-[var(--color-line)] bg-[var(--color-paper)] px-5 py-2.5 font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            <span>Read Journey</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
