import { Link } from "react-router-dom";
import { heroFacts, profile } from "../data/content";

export function Hero() {
  return (
    <section
      id="top"
      className="hero-grid relative border-b border-[var(--color-line)] px-5 pb-24 pt-[8rem] sm:px-8 lg:px-12 lg:pb-32 lg:pt-[10rem]"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Location pill */}
        <div className="reveal mb-8 flex items-center gap-2 font-mono text-[0.63rem] font-bold uppercase tracking-[0.15em] text-[var(--color-muted)]">
          <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
          {profile.location} — Available for remote
        </div>

        {/* Heading */}
        <h1 className="reveal-1 font-display text-[clamp(3.4rem,9vw,8.5rem)] font-semibold leading-[0.9] tracking-[-0.05em] text-[var(--color-ink)]">
          <span className="block">Software</span>
          <span className="block text-[var(--color-accent)]">developer.</span>
        </h1>

        {/* Sub-line + CTA row */}
        <div className="reveal-2 mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-[40ch] text-[1.05rem] leading-7 text-[var(--color-muted)]">
            {profile.summary}
          </p>

          <div className="flex shrink-0 flex-col items-start gap-4 sm:items-end">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 border border-[var(--color-ink)] px-5 py-2.5 font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[var(--color-ink)] transition-colors duration-200 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              View work ↗
            </Link>
            <Link
              to="/contact"
              className="font-mono text-[0.63rem] uppercase tracking-[0.14em] text-[var(--color-muted)] underline underline-offset-4 hover:text-[var(--color-ink)]"
            >
              Get in touch
            </Link>
          </div>
        </div>

        {/* Facts strip */}
        <dl className="reveal-3 mt-20 grid grid-cols-2 gap-px border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-4">
          {heroFacts.map((fact) => (
            <div
              key={fact.label}
              className="flex flex-col gap-2 bg-[var(--color-bg)] px-5 py-5"
            >
              <dt className="font-mono text-[0.58rem] uppercase tracking-[0.15em] text-[var(--color-muted)]">
                {fact.label}
              </dt>
              <dd className="text-[0.9rem] leading-snug text-[var(--color-ink)]">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

