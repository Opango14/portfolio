import type { ReactNode } from "react";
import { BackButton } from "./BackButton";

type PageHeaderProps = {
  label: string;
  pill: string;
  title: ReactNode;
  description: ReactNode;
  children?: ReactNode;
  showBack?: boolean;
};

/**
 * Shared hero header for every non-home page: grid-patterned background,
 * back button, section label, accent status pill, two-tone headline, and intro copy.
 */
export function PageHeader({
  label,
  pill,
  title,
  description,
  children,
  showBack = true,
}: PageHeaderProps) {
  return (
    <section className="hero-grid border-b border-[var(--color-line)] px-5 pb-16 pt-28 sm:px-8 lg:px-12 lg:pb-20 lg:pt-36">
      <div>
        {/* Navigation & Status bar */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          {showBack && <BackButton />}

          <div className="inline-flex items-center gap-2 border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/10 px-3 py-1 font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[var(--color-accent)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
            {pill}
          </div>
        </div>

        <div className="section-label">
          <span className="section-label-index">—</span>
          <span className="section-label-line" />
          <span>{label}</span>
        </div>

        <h1 className="mt-6 font-display text-[clamp(2.8rem,7vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.05em] text-[var(--color-ink)]">
          {title}
        </h1>

        <p className="mt-8 max-w-[54ch] text-[1.05rem] leading-relaxed text-[var(--color-muted)] sm:text-[1.15rem]">
          {description}
        </p>

        {children}
      </div>
    </section>
  );
}
