import { Link } from "react-router-dom";
import { expertise } from "../data/content";
import { ButtonLink } from "./ButtonLink";
import { PageHeader } from "./PageHeader";

export function TechnicalExpertise() {
  return (
    <div className="overflow-hidden">
      {/* ── Page Header ────────────────────────────────────── */}
      <PageHeader
        label="Full Toolchain and Capability"
        pill="Frontend | Backend"
        title={
          <>
            <span>The full</span>
            <br />
            <span className="text-[var(--color-accent)]">
              categorized toolchain.
            </span>
          </>
        }
        description="Python, Go, Django, FastAPI, Linux, Docker, PostgreSQL and more. The complete matrix of what I work with, organized by discipline."
      >
          <Link
            to="/work"
            className="mt-8 inline-flex items-center gap-2 font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[var(--color-ink)] underline underline-offset-4 hover:text-[var(--color-accent)]"
          >
            <span>See it applied in real projects</span>
            <span>↗</span>
          </Link>
      </PageHeader>

      {/* ── Cards Grid ─────────────────────────────────────── */}
      <section className="bg-[var(--color-bg)] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {expertise.map((group, idx) => (
              <div
                key={group.title}
                className="flex flex-col justify-between border border-[var(--color-line)] bg-[var(--color-paper)] p-6 transition-all duration-300 hover:border-[var(--color-accent)]/50 sm:p-8"
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
                Open to full-time remote roles, collaborations and contract full-stack engagements worldwide. Tell me what you&apos;re building.
              </p>
            </div>
            <ButtonLink to="/contact" className="shrink-0">
              <span>Start a Conversation</span>
              <span>→</span>
            </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}
