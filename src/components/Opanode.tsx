import { opanodeSteps } from "../data/content";

export function Opanode() {
  return (
    <section className="border-b border-[var(--color-line)] bg-[var(--color-paper)] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        <div className="section-label">
          <span className="section-label-index">—</span>
          <span className="section-label-line" />
          <span>Opanode</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-28">
          <div>
            <h2 className="font-display text-[clamp(2.8rem,5.5vw,5rem)] font-semibold leading-[0.92] tracking-[-0.05em] text-[var(--color-ink)]">
              Opanode is where technology meets perspective.
            </h2>
            <p className="mt-8 text-[0.95rem] leading-7 text-[var(--color-muted)]">
              Opanode is the name behind the work: an approach to building that
              treats software as a system to be understood before it&apos;s written.
              The engineering is what&apos;s meant to speak.
            </p>
          </div>

          <ol className="flex flex-col divide-y divide-[var(--color-line)]">
            {opanodeSteps.map((step, i) => (
              <li key={step.verb} className="flex gap-5 py-6">
                <span className="font-mono text-[0.6rem] font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[0.95rem] leading-7 text-[var(--color-ink)]">
                  <span className="font-display text-lg font-semibold tracking-[-0.025em] text-[var(--color-accent)]">
                    {step.verb}
                  </span>{" "}
                  {step.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
