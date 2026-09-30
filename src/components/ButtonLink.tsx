import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonLinkProps = {
  /** Internal route (react-router) — e.g. "/work" */
  to?: string;
  /** External / mailto target — e.g. "mailto:hi@example.com" */
  href?: string;
  variant?: "accent" | "paper" | "ink";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
};

const base =
  "inline-flex items-center gap-2 font-mono font-bold uppercase tracking-[0.14em]";

const variants: Record<string, string> = {
  accent:
    "border border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-bg)] transition-colors hover:bg-transparent hover:text-[var(--color-accent)]",
  paper:
    "border border-[var(--color-line)] bg-[var(--color-paper)] text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]",
  ink:
    "border border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-bg)] transition-colors hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]",
};

const sizes: Record<string, string> = {
  sm: "px-5 py-2.5 text-[0.68rem]",
  md: "px-6 py-3 text-[0.7rem]",
  lg: "px-7 py-3.5 text-[0.72rem]",
};

export function ButtonLink({
  to,
  href,
  variant = "accent",
  size = "sm",
  children,
  className = "",
}: ButtonLinkProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={to || "/"} className={classes}>
      {children}
    </Link>
  );
}
