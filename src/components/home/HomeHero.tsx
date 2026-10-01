import { Link } from "react-router-dom";
import { profile } from "../../data/content";
import { ButtonLink } from "../ButtonLink";
import { DevtoIcon, GithubIcon, LinkedinIcon, ResumeIcon, XIcon } from "../SocialIcons";

export function HomeHero() {
  return (
    <section
      id="top"
      className="hero-grid relative px-5 pb-20 pt-[7.5rem] sm:px-8 lg:px-12 lg:pb-28 lg:pt-[9.5rem]"
    >
      <div>
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

        {/* Main Grid: Headline & Profile Photo */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 lg:items-center">
          {/* Left Column (8 cols): Typography & Actions */}
          <div className="lg:col-span-8">
            <h1 className="reveal-1 font-display text-[clamp(2.8rem,7vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.05em] text-[var(--color-ink)]">
              <span>Timothy Opango.</span>
              <br />
              <span className="text-[var(--color-accent)]">
                Software Developer.
              </span>
            </h1>

            <p className="reveal-2 mt-8 max-w-[50ch] text-[1.05rem] leading-relaxed text-[var(--color-muted)] sm:text-[1.15rem]">
              I design and build resilient backend services, transactional data
              ledgers, and lean full-stack applications with{" "}
              <span className="text-[var(--color-ink)]">
                Python, Django, FastAPI, and Go
              </span>
              . Focused on clean system logic, data integrity, and shipping software
              that holds up in production.
            </p>

            {/* Action buttons including Resume */}
            <div className="reveal-3 mt-10 flex flex-wrap items-center gap-4">
              <ButtonLink to="/work" size="md">
                <span>Explore Work</span>
                <span>↗</span>
              </ButtonLink>

              <ButtonLink href={profile.resumeUrl} variant="paper" size="md">
                <ResumeIcon className="h-3.5 w-3.5" />
                <span>Resume (PDF)</span>
                <span>↓</span>
              </ButtonLink>

              <ButtonLink to="/opanode" variant="paper" size="md">
                <span>Philosophy</span>
                <span>→</span>
              </ButtonLink>

              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 px-3 py-3 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-[var(--color-muted)] underline underline-offset-4 transition-colors hover:text-[var(--color-ink)]"
              >
                Get in touch
              </Link>
            </div>

            {/* Social Links Row */}
            <div className="reveal-3 mt-8 flex flex-wrap items-center gap-3 border-t border-[var(--color-line)] pt-6">
              <span className="font-mono text-[0.58rem] uppercase tracking-[0.16em] text-[var(--color-muted)]">
                Socials:
              </span>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 border border-[var(--color-line)] bg-[var(--color-paper)]/70 px-3 py-1 font-mono text-[0.62rem] font-bold text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                <GithubIcon className="h-3 w-3" />
                <span>GitHub</span>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 border border-[var(--color-line)] bg-[var(--color-paper)]/70 px-3 py-1 font-mono text-[0.62rem] font-bold text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                <LinkedinIcon className="h-3 w-3" />
                <span>LinkedIn</span>
              </a>

              <a
                href={profile.devto}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 border border-[var(--color-line)] bg-[var(--color-paper)]/70 px-3 py-1 font-mono text-[0.62rem] font-bold text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                <DevtoIcon className="h-3 w-3" />
                <span>Dev.to</span>
              </a>

              <a
                href={profile.x}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 border border-[var(--color-line)] bg-[var(--color-paper)]/70 px-3 py-1 font-mono text-[0.62rem] font-bold text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                <XIcon className="h-3 w-3" />
                <span>X</span>
              </a>
            </div>
          </div>

          {/* Right Column (4 cols): Professional Portrait Card */}
          <div className="reveal-2 lg:col-span-4">
            <div className="group relative mx-auto max-w-sm border border-[var(--color-line)] bg-[var(--color-paper)] p-3 transition-all duration-300 hover:border-[var(--color-accent)]/60">
              <div className="relative aspect-square overflow-hidden bg-[var(--color-charcoal)]">
                <img
                  src={profile.avatar}
                  alt="Timothy Opango — Software Developer portrait"
                  className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  loading="eager"
                  width="400"
                  height="400"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[0.6rem] text-[var(--color-ink)]">
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                    Timothy Opango
                  </span>
                  <span className="text-[var(--color-accent)]">Opanode</span>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between border-t border-[var(--color-line)] pt-2.5 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-[var(--color-muted)]">
                <span>Software Developer</span>
                <span>Kenya · Remote</span>
              </div>
            </div>
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
            <div className="relative flex flex-col gap-1.5 p-5 transition-colors hover:bg-[var(--color-paper)]/60">
              <dt className="font-mono text-[0.58rem] uppercase tracking-[0.15em] text-[var(--color-muted)]">
                01 / Current Role
              </dt>
              <dd className="font-display text-base font-semibold text-[var(--color-ink)]">
                Software Apprentice
              </dd>
              <span className="text-xs text-[var(--color-muted)]">
                Zone01 Kisumu (Go, JS, Python, Algorithms)
              </span>
              <Link
                to="/journey"
                aria-label="Software Apprentice — Journey page"
                className="absolute inset-0"
              />
            </div>

            <div className="relative flex flex-col gap-1.5 p-5 transition-colors hover:bg-[var(--color-paper)]/60">
              <dt className="font-mono text-[0.58rem] uppercase tracking-[0.15em] text-[var(--color-muted)]">
                02 / Core Focus
              </dt>
              <dd className="font-display text-base font-semibold text-[var(--color-ink)]">
                Backend &amp; APIs
              </dd>
              <span className="text-xs text-[var(--color-muted)]">
                Transactional integrity &amp; REST architectures
              </span>
              <Link
                to="/work"
                aria-label="Backend and APIs — Work page"
                className="absolute inset-0"
              />
            </div>

            <div className="relative flex flex-col gap-1.5 p-5 transition-colors hover:bg-[var(--color-paper)]/60">
              <dt className="font-mono text-[0.58rem] uppercase tracking-[0.15em] text-[var(--color-muted)]">
                03 / Primary Languages
              </dt>
              <dd className="font-display text-base font-semibold text-[var(--color-ink)]">
                Python · Go · TypeScript
              </dd>
              <span className="text-xs text-[var(--color-muted)]">
                Django, FastAPI, SQLite, PostgreSQL
              </span>
              <Link
                to="/expertise"
                aria-label="Python, Go, TypeScript — Expertise page"
                className="absolute inset-0"
              />
            </div>

            <div className="relative flex flex-col gap-1.5 p-5 transition-colors hover:bg-[var(--color-paper)]/60">
              <dt className="font-mono text-[0.58rem] uppercase tracking-[0.15em] text-[var(--color-muted)]">
                04 / Availability
              </dt>
              <dd className="font-display text-base font-semibold text-[var(--color-ink)]">
                Open to Opportunities
              </dd>
              <span className="text-xs text-[var(--color-muted)]">
                Full-time remote roles &amp; contract engineering
              </span>
              <Link
                to="/contact"
                aria-label="Open to opportunities — Contact page"
                className="absolute inset-0"
              />
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
