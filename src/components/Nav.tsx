import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../data/content";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-[var(--color-line)] transition-colors duration-200 ${
        scrolled ? "bg-[var(--color-bg)]/95 backdrop-blur-xl" : "bg-[var(--color-bg)]"
      }`}
    >
      <div className="flex h-[4.75rem] items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Logo */}
        <Link
          to="/"
          className="group flex items-center gap-3"
          aria-label="Timothy Opango home"
        >
          <span className="flex h-8 w-8 items-center justify-center bg-[var(--color-ink)] text-[var(--color-bg)] transition-transform duration-200 group-hover:rotate-[-8deg]">
            <span className="font-mono text-[0.65rem] font-bold">O/</span>
          </span>
          <span
            className="font-mono text-[0.75rem] font-bold uppercase tracking-[0.16em] text-[var(--color-ink)]"
          >
            Timothy Opango
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              end={link.href === "/"}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="grid h-9 w-9 place-items-center border border-[var(--color-line)] text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] md:hidden"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          className="flex flex-col gap-1 border-t border-[var(--color-line)] px-5 py-5 sm:px-8 md:hidden"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              end={link.href === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `py-3 font-mono text-xs font-bold uppercase tracking-[0.14em] transition-colors ${
                  isActive
                    ? "text-[var(--color-accent)]"
                    : "text-[var(--color-muted)] hover:text-[var(--color-ink)]"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M2 4.5h12M2 8h12M2 11.5h12"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 3l10 10M13 3 3 13"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

