import { profile } from "../data/content";

export function Footer() {
  return (
    <footer className="sticky bottom-0 z-30 border-t border-[var(--color-line)] bg-[var(--color-charcoal)] px-5 py-6 sm:px-8 lg:px-12">
      <div className="flex flex-col justify-between gap-3 font-mono text-[0.62rem] uppercase tracking-[0.15em] text-[var(--color-muted)] sm:flex-row sm:items-center">
        <span>© {new Date().getFullYear()} {profile.fullName}</span>
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
