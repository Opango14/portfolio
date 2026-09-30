import { expertise } from "../data/content";

export function TechnicalExpertise() {
  const groups = Object.entries(expertise);

  return (
    <section className="border-b border-[var(--color-line)] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        {/* Section label */}
        <div className="section-label">
          <span className="section-label-index">02</span>
          <span className="section-label-line" />
          <span>Approach &amp; capability</span>
        </div>

        <div className="grid gap-16 lg:grid-cols-[0.82fr_1.18fr] lg:gap-28">
          <div>
            <h2 className="font-display text-[clamp(2.8rem,5.5vw,5rem)] font-semibold leading-[0.92] tracking-[-0.05em] text-[var(--color-ink)]">
              Understand the system. Find the problem.
            </h2>
            <p className="mt-8 max-w-[34ch] text-[0.95rem] leading-7 text-[var(--color-muted)]">
              An approach that keeps the problem visible while the system takes shape: understand the context, design the logic, and build with care.
            </p>
          </div>

          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {groups.map(([group, items]) => (
              <div
                key={group}
                className="border-t border-[var(--color-line)] pt-5"
              >
                <h3 className="font-display text-2xl font-semibold tracking-[-0.035em] text-[var(--color-ink)]">
                  {group}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-[var(--color-muted)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
