import { Link } from "react-router-dom";

type BackButtonProps = {
  /** Target route — defaults to home ("/") */
  to?: string;
  label?: string;
  className?: string;
};

export function BackButton({
  to = "/",
  label = "Back",
  className = "",
}: BackButtonProps) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-2 border border-[var(--color-line)] bg-[var(--color-paper)]/90 px-3.5 py-1.5 font-mono text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[var(--color-muted)] backdrop-blur-sm transition-all duration-200 hover:border-[var(--color-accent)] hover:bg-[var(--color-paper)] hover:text-[var(--color-accent)] ${className}`}
      aria-label="Back to home page"
    >
      <span
        className="transition-transform duration-200 group-hover:-translate-x-1"
        aria-hidden="true"
      >
        ←
      </span>
      <span>{label}</span>
    </Link>
  );
}
