import type { Project } from "../data/content";
import { additionalProjects, featuredProjects } from "../data/content";
import { FlowDiagram } from "./FlowDiagram";

const diagrams: Record<string, string[]> = {
  "merry-chama": ["Member", "Group ledger", "Admin review", "Payout"],
  kilimoclick: ["GIS + climate data", "Decision engine", "Cache", "Advisory"],
  translator: ["Input text", "Django API", "Translation", "Live update"],
};

export function SelectedWork() {
  return (
    <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        {/* Section label */}
        <div className="section-label">
          <span className="section-label-index">01</span>
          <span className="section-label-line" />
          <span>Selected work</span>
        </div>

        <div className="flex flex-col gap-20">
          {featuredProjects.map((project, i) => (
            <FeaturedProject key={project.slug} project={project} index={i} />
          ))}
        </div>

        {/* Additional work */}
        <div className="mt-28">
          <div className="section-label">
            <span className="section-label-index">—</span>
            <span className="section-label-line" />
            <span>Additional work</span>
          </div>

          <div className="flex flex-col divide-y divide-[var(--color-line)] border-t border-[var(--color-line)]">
            {additionalProjects.map((project) => (
              <AdditionalProject key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedProject({ project, index }: { project: Project; index: number }) {
  const reversed = index % 2 === 1;
  const nodes = diagrams[project.slug];

  return (
    <article className="project-card grid gap-8 border-t border-[var(--color-line)] pt-10 md:grid-cols-12 md:gap-8">
      <div className={`md:col-span-7 ${reversed ? "md:order-2 md:col-start-6" : ""}`}>
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-[var(--color-ink)]">
            {project.name}
          </h3>
          <span className="shrink-0 font-mono text-[0.6rem] font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <p className="mt-1 text-sm text-[var(--color-muted)]">{project.tagline}</p>

        <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-[var(--color-muted)]"
            >
              {tech}
            </li>
          ))}
        </ul>

        <p className="mt-6 text-[0.95rem] leading-7 text-[var(--color-ink)]">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-col gap-2">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2 text-sm leading-6 text-[var(--color-ink)]">
              <span className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
              {h}
            </li>
          ))}
        </ul>

        {project.role && (
          <p className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-[var(--color-muted)]">
            Role — {project.role}
          </p>
        )}

        <div className="mt-7 flex gap-6 font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em]">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--color-ink)] underline underline-offset-4 hover:text-[var(--color-accent)]"
            >
              Repository ↗
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--color-ink)] underline underline-offset-4 hover:text-[var(--color-accent)]"
            >
              Live app ↗
            </a>
          )}
        </div>
      </div>

      <div className={`md:col-span-5 ${reversed ? "md:order-1 md:col-start-1" : ""}`}>
        <div className="border border-[var(--color-line)] bg-[var(--color-paper)] p-6">
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.13em] text-[var(--color-muted)]">
            System flow
          </p>
          <div className="mt-5">
            <FlowDiagram nodes={nodes} />
          </div>
        </div>
      </div>
    </article>
  );
}

function AdditionalProject({ project }: { project: Project }) {
  return (
    <div className="grid gap-4 py-8 md:grid-cols-12 md:gap-8">
      <div className="md:col-span-4">
        <h3 className="font-display text-xl font-semibold tracking-[-0.03em] text-[var(--color-ink)]">
          {project.name}
        </h3>
        <p className="mt-1 text-sm text-[var(--color-muted)]">{project.tagline}</p>
        <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-[var(--color-muted)]"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="md:col-span-6">
        <p className="text-sm leading-6 text-[var(--color-ink)]">{project.description}</p>
        <p className="mt-2 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-[var(--color-muted)]">
          {project.role ? `Role — ${project.role}` : (project.status ?? "")}
        </p>
      </div>

      <div className="flex items-start gap-4 font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em] md:col-span-2 md:justify-end">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="text-[var(--color-ink)] underline underline-offset-4 hover:text-[var(--color-accent)]"
          >
            Repo ↗
          </a>
        )}
      </div>
    </div>
  );
}
