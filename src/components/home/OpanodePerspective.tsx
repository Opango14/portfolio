import { Link } from "react-router-dom";
import { opanodePhilosophy } from "../../data/content";

export function OpanodePerspective() {
  const { mantra, nameMeaning, pillars } = opanodePhilosophy;

  return (
    <section className="border-b border-[var(--color-line)] bg-[var(--color-bg)] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1280px]">
        {/* Section label */}
        <div className="section-label">
          <span className="section-label-index">04</span>
          <span className="section-label-line" />
          <span>Brand Philosophy &amp; Ethos</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 lg:items-center">
          {/* Left Column: Ethos */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/10 px-3 py-1 font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[var(--color-accent)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
              {mantra}
            </div>

            <h2 className="mt-4 font-display text-[clamp(2.4rem,4.5vw,4.2rem)] font-semibold leading-[0.96] tracking-[-0.04em] text-[var(--color-ink)]">
              Technology gives structure. Creativity gives expression.
            </h2>

            <p className="mt-6 text-[1.02rem] leading-8 text-[var(--color-muted)]">
              <strong className="text-[var(--color-ink)] font-medium">OPANODE</strong>{" "}
              unites personal identity (<span className="text-[var(--color-accent)]">{nameMeaning.opa.element}</span>, from Opango)
              with connection points in technology (<span className="text-[var(--color-accent)]">{nameMeaning.node.element}</span>).
              It is the bridge where software engineering, photographic observation, and purposeful creation converge.
            </p>

            <div className="mt-8">
              <Link
                to="/opanode"
                className="inline-flex items-center gap-2 border border-[var(--color-accent)] bg-[var(--color-accent)] px-5 py-2.5 font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[var(--color-bg)] transition-colors hover:bg-transparent hover:text-[var(--color-accent)]"
              >
                <span>Read Full Brand Manifesto</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Right Column: 3 Pillars Preview */}
          <div className="lg:col-span-6">
            <div className="border border-[var(--color-line)] bg-[var(--color-paper)] p-6 sm:p-8">
              <div className="flex items-center justify-between border-b border-[var(--color-line)] pb-4 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-[var(--color-muted)]">
                <span>The Three Pillars of OPANODE</span>
                <span className="text-[var(--color-accent)]">CORE PILLARS</span>
              </div>

              <div className="mt-6 space-y-5">
                {pillars.map((pillar, idx) => (
                  <div key={pillar.title} className="flex items-start gap-4">
                    <span className="font-mono text-sm font-bold text-[var(--color-accent)]">
                      0{idx + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-base font-semibold text-[var(--color-ink)]">
                        {pillar.title}
                      </h3>
                      <p className="mt-1 text-xs leading-5 text-[var(--color-muted)]">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-[var(--color-line)] pt-4">
                <p className="font-mono text-[0.62rem] text-[var(--color-muted)]">
                  &ldquo;Every creation can become part of something bigger.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
