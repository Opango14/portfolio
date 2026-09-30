import { useState } from "react";
import { profile } from "../data/content";
import { ButtonLink } from "./ButtonLink";
import { PageHeader } from "./PageHeader";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="overflow-hidden">
      {/* ── Page Header ────────────────────────────────── */}
      <PageHeader
        label="Contact"
        pill="Open To Opportunities · Reply Within 24 Hours"
        title={
          <>
            <span>Let&apos;s build</span>
            <br />
            <span className="text-[var(--color-accent)]">something useful.</span>
          </>
        }
        description="Currently open to full-time software engineering roles, team collaborations, and contract backend engagements worldwide. If your team values solid system design, clear communication, and shipping software with care, I&apos;d love to connect."
      />

      {/* ── Direct Channels ─────────────────────────────── */}
      <section className="bg-[var(--color-bg)] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-[var(--color-muted)]">
                Start a conversation
              </span>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <ButtonLink href={`mailto:${profile.email}`} size="lg">
                  <span>Write an Email</span>
                  <span>↗</span>
                </ButtonLink>

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
    </div>
  );
}
