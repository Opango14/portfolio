import { Link } from "react-router-dom";
import { featuredProjects } from "../data/content";

export function WorkTeaser() {
  return (
    <section className="border-b border-[var(--color-line)] bg-[var(--color-paper)] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        {/* Section label */}
        <div className="section-label">
          <span className="section-label-index">01</span>
          <span className="section-label-line" />
          <span>Selected work</span>
        </div>

        <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <div>
            <h2 className="font-display text-[clamp(2.8rem,5.5vw,5rem)] font-semibold leading-[0.92] tracking-[-0.05em] text-[var(--color-ink)]">
              Things built. Shipped. In use.
            </h2>
            <p className="mt-8 max-w-[34ch] text-[0.95rem] leading-7 text-[var(--color-muted)]">
              A selection of projects — backend systems, full-stack apps, and tools that solve real problems.
            </p>
            <Link
              to="/work"
              className="mt-8 inline-flex items-center gap-2 font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[var(--color-ink)] underline underline-offset-4 hover:text-[var(--color-accent)]"
            >
              All projects ↗
            </Link>
          </div>

          <div className="flex flex-col divide-y divide-[var(--color-line)]">
            {featuredProjects.map((project, i) => (
              <Link
                key={project.slug}
                to="/work"
                className="project-card group grid gap-4 border-[var(--color-line)] py-7 sm:grid-cols-[4rem_1fr_auto] sm:gap-6"
              >
                <span className="font-mono text-[0.6rem] font-bold uppercase tracking-[0.15em] text-[var(--color-accent)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-[-0.03em] text-[var(--color-ink)]">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--color-muted)]">
                    {project.tagline}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="font-mono text-[0.58rem] uppercase tracking-[0.1em] text-[var(--color-muted)]"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="self-center font-mono text-[var(--color-muted)] transition-colors group-hover:text-[var(--color-accent)]">
                  ↗
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
