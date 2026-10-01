import { profile } from "../data/content";

export function Footer() {
  return (
    <footer className="sticky bottom-0 z-30 border-t border-[var(--color-line)] bg-[var(--color-charcoal)] px-5 py-4 sm:px-8 lg:px-12">
      <div className="flex flex-col justify-between gap-4 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-[var(--color-muted)] sm:flex-row sm:items-center">
        <span>© {new Date().getFullYear()} {profile.fullName}</span>

        {/* Social Links & Resume */}
        <div className="flex flex-wrap items-center gap-4 text-[var(--color-muted)]">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-[var(--color-accent)]"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-[var(--color-accent)]"
          >
            LinkedIn
          </a>
          <a
            href={profile.devto}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-[var(--color-accent)]"
          >
            Dev.to
          </a>
          <a
            href={profile.x}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-[var(--color-accent)]"
          >
            X
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="text-[var(--color-accent)] transition-opacity hover:opacity-80"
          >
            Resume (PDF) ↓
          </a>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 text-left text-[var(--color-accent)] transition-opacity hover:opacity-70 sm:text-right"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}
