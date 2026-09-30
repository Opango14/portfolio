import { Link } from "react-router-dom";

export function OpanodePerspective() {
  return (
    <section className="border-b border-[var(--color-line)] bg-[var(--color-bg)] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1280px]">
        {/* Section label */}
        <div className="section-label">
          <span className="section-label-index">04</span>
          <span className="section-label-line" />
          <span>The Opanode Methodology</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 lg:items-center">
          {/* Left Column: Ethos */}
          <div className="lg:col-span-7">
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-[var(--color-accent)]">
              Engineering Mindset
            </span>
            <h2 className="mt-3 font-display text-[clamp(2.4rem,4.5vw,4.2rem)] font-semibold leading-[0.96] tracking-[-0.04em] text-[var(--color-ink)]">
              Software is a system to be understood before it is written.
            </h2>
            <p className="mt-6 text-[1.02rem] leading-8 text-[var(--color-muted)]">
              <strong className="text-[var(--color-ink)] font-medium">Opanode</strong>{" "}
              represents my signature approach to software engineering: stripping
              away incidental complexity, diagnosing the real operational
              bottlenecks first, and designing systems where every architectural
              trade-off is made intentional.
            </p>

            <div className="mt-8">
              <Link
                to="/opanode"
                className="inline-flex items-center gap-2 border border-[var(--color-ink)] bg-transparent px-5 py-2.5 font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                <span>Read the Opanode Philosophy</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Right Column: 4-Phase Schematic Preview */}
          <div className="lg:col-span-5">
            <div className="border border-[var(--color-line)] bg-[var(--color-paper)] p-6 sm:p-8">
              <div className="flex items-center justify-between border-b border-[var(--color-line)] pb-4 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-[var(--color-muted)]">
                <span>Core Engineering Lifecycle</span>
                <span className="text-[var(--color-accent)]">OPANODE / CADENCE</span>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-4">
                  <span className="font-mono text-sm font-bold text-[var(--color-accent)]">
                    01
                  </span>
                  <div>
                    <h4 className="font-display text-base font-semibold text-[var(--color-ink)]">
                      Understand
                    </h4>
                    <p className="text-xs leading-5 text-[var(--color-muted)]">
                      Study how the actual operational domain behaves in reality, not assumptions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="font-mono text-sm font-bold text-[var(--color-accent)]">
                    02
                  </span>
                  <div>
                    <h4 className="font-display text-base font-semibold text-[var(--color-ink)]">
                      Find
                    </h4>
                    <p className="text-xs leading-5 text-[var(--color-muted)]">
                      Isolate the exact, high-leverage technical problem worth solving.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="font-mono text-sm font-bold text-[var(--color-accent)]">
                    03
                  </span>
                  <div>
                    <h4 className="font-display text-base font-semibold text-[var(--color-ink)]">
                      Design
                    </h4>
                    <p className="text-xs leading-5 text-[var(--color-muted)]">
                      Structure the data model and logic cleanly, with trade-offs made explicit.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="font-mono text-sm font-bold text-[var(--color-accent)]">
                    04
                  </span>
                  <div>
                    <h4 className="font-display text-base font-semibold text-[var(--color-ink)]">
                      Build
                    </h4>
                    <p className="text-xs leading-5 text-[var(--color-muted)]">
                      Implement with test coverage, deploy to production, and monitor resilience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
