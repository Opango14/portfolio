import { Link } from "react-router-dom";
import { opanodePhilosophy } from "../data/content";

export function Opanode() {
  const {
    tagline,
    mantra,
    nameMeaning,
    coreBelief,
    disciplines,
    intention,
    pillars,
    mission,
    vision,
    values,
    closingManifesto,
  } = opanodePhilosophy;

  return (
    <div className="overflow-hidden">
      {/* ── 01. Hero / Brand Anthem ─────────────────────────── */}
      <section className="hero-grid border-b border-[var(--color-line)] px-5 pb-20 pt-28 sm:px-8 lg:px-12 lg:pb-28 lg:pt-36">
        <div className="mx-auto max-w-[1280px]">
          <div className="section-label">
            <span className="section-label-index">—</span>
            <span className="section-label-line" />
            <span>Brand Philosophy</span>
          </div>

          <div className="inline-flex items-center gap-2 border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/10 px-3 py-1 font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[var(--color-accent)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
            {mantra}
          </div>

          <h1 className="mt-6 font-display text-[clamp(2.8rem,7vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.05em] text-[var(--color-ink)]">
            <span>Build with purpose.</span>
            <br />
            <span>See with vision.</span>
            <br />
            <span className="text-[var(--color-accent)]">
              Connect through creativity.
            </span>
          </h1>

          <p className="mt-8 max-w-[54ch] text-[1.1rem] leading-relaxed text-[var(--color-muted)] sm:text-[1.2rem]">
            {coreBelief}
          </p>

          {/* Name Meaning / Etymology breakdown */}
          <div className="mt-14 border border-[var(--color-line)] bg-[var(--color-paper)] p-6 sm:p-8">
            <div className="flex items-center justify-between border-b border-[var(--color-line)] pb-4 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-[var(--color-muted)]">
              <span>The Meaning Behind the Name</span>
              <span className="text-[var(--color-accent)]">ETIMOLOGY &amp; IDENTITY</span>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              <div className="border border-[var(--color-line)] bg-[var(--color-bg)] p-5">
                <span className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                  {nameMeaning.opa.element}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold text-[var(--color-ink)]">
                  Identity &amp; Origin
                </h3>
                <p className="mt-2 text-xs leading-5 text-[var(--color-muted)]">
                  {nameMeaning.opa.meaning}
                </p>
              </div>

              <div className="border border-[var(--color-line)] bg-[var(--color-bg)] p-5">
                <span className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                  {nameMeaning.node.element}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold text-[var(--color-ink)]">
                  Connection &amp; Systems
                </h3>
                <p className="mt-2 text-xs leading-5 text-[var(--color-muted)]">
                  {nameMeaning.node.meaning}
                </p>
              </div>

              <div className="border border-[var(--color-accent)]/50 bg-[var(--color-bg)] p-5">
                <span className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                  {nameMeaning.synthesis.element}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold text-[var(--color-ink)]">
                  Creative Convergence
                </h3>
                <p className="mt-2 text-xs leading-5 text-[var(--color-muted)]">
                  {nameMeaning.synthesis.meaning}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 02. The Core Philosophy & Disciplines ────────────── */}
      <section className="border-b border-[var(--color-line)] bg-[var(--color-paper)] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 lg:items-center">
            <div className="lg:col-span-6">
              <div className="section-label">
                <span className="section-label-index">01</span>
                <span className="section-label-line" />
                <span>The Core Philosophy</span>
              </div>

              <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.8rem)] font-semibold leading-[0.96] tracking-[-0.04em] text-[var(--color-ink)]">
                Where technology meets thoughtful perspective.
              </h2>

              <p className="mt-6 text-[1.02rem] leading-8 text-[var(--color-muted)]">
                {disciplines}
              </p>

              <p className="mt-4 text-[1.02rem] leading-8 text-[var(--color-ink)]">
                {intention}
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="space-y-4 font-mono text-xs">
                <div className="border border-[var(--color-line)] bg-[var(--color-bg)] p-6">
                  <span className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                    DISCIPLINE 01 // TECHNOLOGY
                  </span>
                  <h4 className="mt-2 font-display text-xl font-semibold text-[var(--color-ink)]">
                    The Tools to Build
                  </h4>
                  <p className="mt-2 text-xs leading-6 text-[var(--color-muted)]">
                    Software engineering, backend logic, APIs, and dependable architectures turn abstract concepts into tangible, resilient systems.
                  </p>
                </div>

                <div className="border border-[var(--color-line)] bg-[var(--color-bg)] p-6">
                  <span className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                    DISCIPLINE 02 // PHOTOGRAPHY &amp; OBSERVATION
                  </span>
                  <h4 className="mt-2 font-display text-xl font-semibold text-[var(--color-ink)]">
                    The Ability to See
                  </h4>
                  <p className="mt-2 text-xs leading-6 text-[var(--color-muted)]">
                    Looking beyond the obvious. Framing, light, patience, and creative perception that capture authentic narratives.
                  </p>
                </div>

                <div className="border border-[var(--color-accent)]/50 bg-[var(--color-bg)] p-6">
                  <span className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                    DISCIPLINE 03 // CONNECTION
                  </span>
                  <h4 className="mt-2 font-display text-xl font-semibold text-[var(--color-ink)]">
                    The Meaningful Network
                  </h4>
                  <p className="mt-2 text-xs leading-6 text-[var(--color-muted)]">
                    Bridging people, ideas, and technologies together like nodes in an interconnected ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03. The Three Pillars ────────────────────────────── */}
      <section className="border-b border-[var(--color-line)] bg-[var(--color-bg)] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="section-label">
            <span className="section-label-index">02</span>
            <span className="section-label-line" />
            <span>The Three Pillars</span>
          </div>

          <div className="max-w-[700px]">
            <h2 className="font-display text-[clamp(2.4rem,5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-[var(--color-ink)]">
              {tagline}
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="flex flex-col justify-between border border-[var(--color-line)] bg-[var(--color-paper)] p-7 transition-all duration-300 hover:border-[var(--color-accent)]/50 sm:p-8"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                      PILLAR 0{idx + 1} // {pillar.verb.toUpperCase()}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                  </div>

                  <h3 className="mt-5 font-display text-2xl font-semibold text-[var(--color-ink)]">
                    {pillar.title}
                  </h3>

                  <p className="mt-2 font-mono text-xs text-[var(--color-accent)]">
                    {pillar.tagline}
                  </p>

                  <p className="mt-5 text-[0.92rem] leading-7 text-[var(--color-muted)]">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 border-t border-[var(--color-line)] pt-4 font-mono text-[0.58rem] uppercase tracking-[0.12em] text-[var(--color-muted)]">
                  Focus: {pillar.focus}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04. Mission & Vision ─────────────────────────────── */}
      <section className="border-b border-[var(--color-line)] bg-[var(--color-paper)] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="section-label">
            <span className="section-label-index">03</span>
            <span className="section-label-line" />
            <span>Mission &amp; Vision</span>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="border border-[var(--color-line)] bg-[var(--color-bg)] p-8 sm:p-10">
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-[var(--color-accent)]">
                Our Mission
              </span>
              <h3 className="mt-3 font-display text-2xl font-semibold text-[var(--color-ink)] sm:text-3xl">
                Bridging technology &amp; visual creativity.
              </h3>
              <p className="mt-6 text-[1.02rem] leading-8 text-[var(--color-muted)]">
                {mission}
              </p>
            </div>

            <div className="border border-[var(--color-line)] bg-[var(--color-bg)] p-8 sm:p-10">
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-[var(--color-accent)]">
                Our Vision
              </span>
              <h3 className="mt-3 font-display text-2xl font-semibold text-[var(--color-ink)] sm:text-3xl">
                A distinctive creative technology brand.
              </h3>
              <p className="mt-6 text-[1.02rem] leading-8 text-[var(--color-muted)]">
                {vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 05. Core Values ─────────────────────────────────── */}
      <section className="border-b border-[var(--color-line)] bg-[var(--color-bg)] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="section-label">
            <span className="section-label-index">04</span>
            <span className="section-label-line" />
            <span>Core Values</span>
          </div>

          <h2 className="font-display text-[clamp(2.4rem,5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-[var(--color-ink)]">
            The principles that guide every creation.
          </h2>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((val, idx) => (
              <div
                key={val.name}
                className="border border-[var(--color-line)] bg-[var(--color-paper)] p-6 transition-colors hover:border-[var(--color-accent)]/50 sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[0.62rem] font-bold text-[var(--color-accent)]">
                    0{idx + 1}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                </div>

                <h3 className="mt-3 font-display text-xl font-semibold text-[var(--color-ink)]">
                  {val.name}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                  {val.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 06. Manifesto Closing ────────────────────────────── */}
      <section className="bg-[var(--color-charcoal)] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-[850px]">
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[var(--color-accent)]">
              The OPANODE Manifesto
            </span>

            <blockquote className="mt-6 font-display text-[clamp(2.2rem,5vw,4.2rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-[var(--color-ink)]">
              &ldquo;{closingManifesto.statement}&rdquo;
            </blockquote>

            <p className="mt-8 max-w-[50ch] text-[1.05rem] leading-8 text-[var(--color-muted)]">
              {closingManifesto.subtext}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link
                to="/work"
                className="inline-flex items-center gap-2 border border-[var(--color-accent)] bg-[var(--color-accent)] px-6 py-3 font-mono text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[var(--color-bg)] transition-colors hover:bg-transparent hover:text-[var(--color-accent)]"
              >
                <span>Explore The Work</span>
                <span>↗</span>
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-[var(--color-line)] bg-[var(--color-paper)] px-5 py-3 font-mono text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink)]"
              >
                <span>Connect with Timothy</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
