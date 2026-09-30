import { Link } from "react-router-dom";
import { expertise } from "../data/content";

export function TechnicalExpertise() {
  return (
    <section className="border-b border-[var(--color-line)] bg-[var(--color-paper)] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        {/* Section label */}
        <div className="section-label">
          <span className="section-label-index">—</span>
          <span className="section-label-line" />
          <span>Full Toolchain &amp; Capability</span>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="font-display text-[clamp(2.4rem,5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-[var(--color-ink)]">
              The full categorized toolchain.
            </h2>
            <p className="mt-4 max-w-[52ch] text-[0.98rem] leading-7 text-[var(--color-muted)]">
              Python, Go, Django, FastAPI, Linux, Docker, PostgreSQL, and more —
              the complete matrix of what I work with, organized by discipline.
            </p>
          </div>

          <Link
            to="/work"
            className="inline-flex items-center gap-2 font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[var(--color-ink)] underline underline-offset-4 hover:text-[var(--color-accent)]"
          >
            <span>See it applied in real projects</span>
            <span>↗</span>
          </Link>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:gap-8">
          {expertise.map((group, idx) => (
            <div
              key={group.title}
              className="flex flex-col justify-between border border-[var(--color-line)] bg-[var(--color-bg)] p-6 transition-all duration-300 hover:border-[var(--color-accent)]/50 sm:p-8"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[var(--color-accent)]">
                    0{idx + 1} // {group.tag}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                </div>

                <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.03em] text-[var(--color-ink)]">
                  {group.title}
                </h3>

                <p className="mt-3 text-[0.92rem] leading-7 text-[var(--color-muted)]">
                  {group.description}
                </p>

                <ul className="mt-6 space-y-2 border-t border-[var(--color-line)] pt-5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 font-mono text-[0.65rem] text-[var(--color-ink)]"
                    >
                      <span className="text-[var(--color-accent)]">›</span>
                      <span>{item}</span>
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
              Need a technology that isn&apos;t listed here?
            </h4>
            <p className="mt-1 text-xs text-[var(--color-muted)]">
              Open to full-time remote roles, collaborations, and contract backend engagements worldwide — tell me what you&apos;re building.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 border border-[var(--color-accent)] bg-[var(--color-accent)] px-5 py-2.5 font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[var(--color-bg)] transition-colors hover:bg-transparent hover:text-[var(--color-accent)]"
          >
            <span>Start a Conversation</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
