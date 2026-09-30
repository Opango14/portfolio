import { Link } from "react-router-dom";
import { profile } from "../../data/content";

export function HomeHero() {
  return (
    <section
      id="top"
      className="hero-grid relative border-b border-[var(--color-line)] px-5 pb-20 pt-[7.5rem] sm:px-8 lg:px-12 lg:pb-28 lg:pt-[9.5rem]"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Status indicator bar */}
        <div className="reveal mb-8 flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 border border-[var(--color-line)] bg-[var(--color-paper)]/80 px-3 py-1.5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent)]" />
            </span>
            <span className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.15em] text-[var(--color-ink)]">
              Available for Remote Engineering
            </span>
          </div>

          <span className="hidden font-mono text-[0.62rem] text-[var(--color-muted)] sm:inline">
            /
          </span>

          <span className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-[var(--color-muted)]">
            {profile.location} (UTC+3) · Zone01 Apprentice
          </span>
        </div>

        {/* Main headline */}
        <div className="max-w-[1100px]">
          <h1 className="reveal-1 font-display text-[clamp(2.8rem,7.5vw,7.2rem)] font-semibold leading-[0.92] tracking-[-0.05em] text-[var(--color-ink)]">
            <span>Software developer.</span>
            <br />
            <span className="text-[var(--color-accent)]">
              Backend &amp; systems architecture.
            </span>
          </h1>
        </div>

        {/* Value statement + Call to actions */}
        <div className="reveal-2 mt-8 flex flex-col gap-10 lg:mt-12 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-[48ch] text-[1.05rem] leading-relaxed text-[var(--color-muted)] sm:text-[1.12rem]">
            I design and build resilient backend services, transactional data
            ledgers, and lean full-stack applications with{" "}
            <span className="text-[var(--color-ink)]">
              Python, Django, FastAPI, and Go
            </span>
            . Focused on clean system logic, data integrity, and shipping software
            that holds up in production.
          </p>

          <div className="flex shrink-0 flex-wrap items-center gap-4">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 border border-[var(--color-accent)] bg-[var(--color-accent)] px-6 py-3 font-mono text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[var(--color-bg)] transition-all duration-200 hover:bg-transparent hover:text-[var(--color-accent)]"
            >
              <span>Explore Work</span>
              <span>↗</span>
            </Link>

            <Link
              to="/opanode"
              className="inline-flex items-center gap-2 border border-[var(--color-line)] bg-[var(--color-paper)] px-5 py-3 font-mono text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[var(--color-ink)] transition-colors duration-200 hover:border-[var(--color-ink)]"
            >
              <span>Philosophy</span>
              <span>→</span>
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 px-3 py-3 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-[var(--color-muted)] underline underline-offset-4 transition-colors hover:text-[var(--color-ink)]"
            >
              Get in touch
            </Link>
          </div>
        </div>

        {/* Executive Telemetry Grid */}
        <div className="reveal-3 mt-16 border border-[var(--color-line)] bg-[var(--color-paper)]/50 backdrop-blur-sm sm:mt-20">
          <div className="border-b border-[var(--color-line)] px-5 py-3">
            <div className="flex items-center justify-between font-mono text-[0.58rem] uppercase tracking-[0.16em] text-[var(--color-muted)]">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                SYSTEM TELEMETRY &amp; SPECIALIZATION
              </span>
              <span>OPANODE / SYS-INDEX</span>
            </div>
          </div>

          <dl className="grid grid-cols-1 divide-y divide-[var(--color-line)] sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            <div className="flex flex-col gap-1.5 p-5">
              <dt className="font-mono text-[0.58rem] uppercase tracking-[0.15em] text-[var(--color-muted)]">
                01 / Current Role
              </dt>
              <dd className="font-display text-base font-semibold text-[var(--color-ink)]">
                Software Apprentice
              </dd>
              <span className="text-xs text-[var(--color-muted)]">
                Zone01 Kisumu (Go, JS, Python, Algorithms)
              </span>
            </div>

            <div className="flex flex-col gap-1.5 p-5">
              <dt className="font-mono text-[0.58rem] uppercase tracking-[0.15em] text-[var(--color-muted)]">
                02 / Core Focus
              </dt>
              <dd className="font-display text-base font-semibold text-[var(--color-ink)]">
                Backend &amp; APIs
              </dd>
              <span className="text-xs text-[var(--color-muted)]">
                Transactional integrity &amp; REST architectures
              </span>
            </div>

            <div className="flex flex-col gap-1.5 p-5">
              <dt className="font-mono text-[0.58rem] uppercase tracking-[0.15em] text-[var(--color-muted)]">
                03 / Primary Languages
              </dt>
              <dd className="font-display text-base font-semibold text-[var(--color-ink)]">
                Python · Go · TypeScript
              </dd>
              <span className="text-xs text-[var(--color-muted)]">
                Django, FastAPI, SQLite, PostgreSQL
              </span>
            </div>

            <div className="flex flex-col gap-1.5 p-5">
              <dt className="font-mono text-[0.58rem] uppercase tracking-[0.15em] text-[var(--color-muted)]">
                04 / Availability
              </dt>
              <dd className="font-display text-base font-semibold text-[var(--color-ink)]">
                Open to Opportunities
              </dd>
              <span className="text-xs text-[var(--color-muted)]">
                Full-time remote roles &amp; contract engineering
              </span>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
