import { useState } from "react";
import { Link } from "react-router-dom";
import { profile } from "../../data/content";

export function HomeCTA() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="bg-[var(--color-charcoal)] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        {/* Section label */}
        <div className="section-label">
          <span className="section-label-index">03</span>
          <span className="section-label-line" />
          <span>Next Steps</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h2 className="font-display text-[clamp(2.8rem,6.5vw,5.5rem)] font-semibold leading-[0.9] tracking-[-0.05em] text-[var(--color-ink)]">
              Ready to build systems that{" "}
              <span className="text-[var(--color-accent)]">scale cleanly?</span>
            </h2>

            <p className="mt-8 max-w-[50ch] text-[1.05rem] leading-8 text-[var(--color-muted)]">
              Currently open to full-time software engineering roles, team
              collaborations, and contract backend engagements worldwide. If
              your team values solid system design, clear communication, and
              shipping software with care, I&apos;d love to connect.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-[var(--color-accent)] bg-[var(--color-accent)] px-7 py-3.5 font-mono text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[var(--color-bg)] transition-all hover:bg-transparent hover:text-[var(--color-accent)]"
              >
                <span>Initiate Contact</span>
                <span>↗</span>
              </Link>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 border border-[var(--color-line)] bg-[var(--color-paper)] px-5 py-3.5 font-mono text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink)]"
              >
                <span>{copied ? "✓ Copied to clipboard" : "Copy Email Address"}</span>
              </button>
            </div>
          </div>

          <div className="border-t border-[var(--color-line)] pt-8 lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-[var(--color-muted)]">
              Direct Channels
            </span>

            <div className="mt-6 flex flex-col gap-4 font-mono text-[0.72rem] font-bold uppercase tracking-[0.14em]">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-between border-b border-[var(--color-line)] pb-3 text-[var(--color-ink)] transition-colors hover:text-[var(--color-accent)]"
              >
                <span>GitHub // @Opango14</span>
                <span>↗</span>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-between border-b border-[var(--color-line)] pb-3 text-[var(--color-ink)] transition-colors hover:text-[var(--color-accent)]"
              >
                <span>LinkedIn // Timothy Opango</span>
                <span>↗</span>
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-between border-b border-[var(--color-line)] pb-3 text-[var(--color-ink)] transition-colors hover:text-[var(--color-accent)]"
              >
                <span>Direct Mail // {profile.email}</span>
                <span>↗</span>
              </a>
            </div>

            <div className="mt-8">
              <span className="inline-flex items-center gap-2 font-mono text-[0.62rem] text-[var(--color-muted)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                Response time: usually under 24 hours
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
