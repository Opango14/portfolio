import { education, experience } from "../data/content";

export function Journey() {
  return (
    <section className="border-b border-[var(--color-line)] bg-[var(--color-bg)] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        {/* Section label */}
        <div className="section-label">
          <span className="section-label-index">03</span>
          <span className="section-label-line" />
          <span>Journey</span>
        </div>

        <div className="grid gap-16 lg:grid-cols-[0.68fr_1.32fr] lg:gap-28">
          <div>
            <h2 className="font-display text-[clamp(2.8rem,5.5vw,5rem)] font-semibold leading-[0.92] tracking-[-0.05em] text-[var(--color-ink)]">
              Built by staying close to the work.
            </h2>
            <div className="mt-10 flex items-center gap-3 font-mono text-[0.63rem] uppercase tracking-[0.15em] text-[var(--color-muted)]">
              <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
              Learning in public
            </div>
          </div>

          <div className="border-t border-[var(--color-line)]">
            {experience.map((entry) => (
              <article
                key={entry.org}
                className="journey-row grid gap-4 border-b border-[var(--color-line)] py-8 sm:grid-cols-[9.5rem_1fr] sm:gap-10 sm:py-10"
              >
                <div className="font-mono text-[0.63rem] uppercase leading-5 tracking-[0.13em] text-[var(--color-accent)]">
                  {entry.period}
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]">
                    {entry.role}
                  </h3>
                  <p className="mt-1 font-mono text-[0.67rem] uppercase tracking-[0.12em] text-[var(--color-muted)]">
                    {entry.org}
                  </p>
                  <ul className="mt-5 flex flex-col gap-2">
                    {entry.points.map((p) => (
                      <li
                        key={p}
                        className="flex gap-2 text-[0.92rem] leading-6 text-[var(--color-muted)]"
                      >
                        <span className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}

            {/* Education */}
            <div className="mt-10 grid gap-4 border-t border-[var(--color-line)] pt-8 sm:grid-cols-2">
              <div>
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-[var(--color-accent)]">
                  Education
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]">
                  {education.degree}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-muted)]">
                  {education.school}
                </p>
              </div>
              <ul className="flex flex-wrap gap-x-4 gap-y-2 sm:pt-6">
                {education.focus.map((f) => (
                  <li
                    key={f}
                    className="font-mono text-[0.62rem] uppercase tracking-[0.1em] text-[var(--color-muted)]"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
