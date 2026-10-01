import { useState } from "react";
import { profile } from "../data/content";
import { ButtonLink } from "./ButtonLink";
import { PageHeader } from "./PageHeader";
import { DevtoIcon, GithubIcon, LinkedinIcon, ResumeIcon, XIcon } from "./SocialIcons";

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
        pill="Open To Opportunities | Reply Within 24 Hours"
        title={
          <>
            <span>Let&apos;s build</span>
            <br />
            <span className="text-[var(--color-accent)]">something useful.</span>
          </>
        }
        description="Currently open to full-time software engineering roles, team collaborations and contract full-stack engagements worldwide. If your team values solid system design, clear communication and shipping software with care, I&apos;d love to connect."
      />

      {/* ── Direct Channels ─────────────────────────────── */}
      <section className="bg-[var(--color-bg)] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column (7 cols): Direct Action, Photo & Resume */}
            <div className="lg:col-span-7">
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-[var(--color-muted)]">
                Start a conversation
              </span>

              <div className="mt-6 flex flex-wrap items-center gap-4">
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

                <ButtonLink href={profile.resumeUrl} variant="paper" size="lg">
                  <ResumeIcon className="h-4 w-4" />
                  <span>Download Resume (PDF)</span>
                  <span>↓</span>
                </ButtonLink>
              </div>

              {/* Profile Card */}
              <div className="mt-12 flex flex-col gap-6 border border-[var(--color-line)] bg-[var(--color-paper)] p-6 sm:flex-row sm:items-center sm:p-8">
                <img
                  src={profile.avatar}
                  alt="Timothy Opango"
                  className="h-24 w-24 shrink-0 rounded-sm border border-[var(--color-line)] object-cover grayscale transition-all hover:grayscale-0 sm:h-28 sm:w-28"
                  width="112"
                  height="112"
                />
                <div>
                  <h3 className="mt-2 font-display text-xl font-semibold text-[var(--color-ink)]">
                    {profile.fullName}
                  </h3>
                  <p className="mt-1 text-xs text-[var(--color-muted)]">
                    {profile.role}
                  </p>
                  <p className="mt-3 text-xs leading-5 text-[var(--color-muted)]">
                    Open to remote software engineering roles, backend systems architecture and engineering collaborations.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column (5 cols): Social Links Directory */}
            <div className="border-t border-[var(--color-line)] pt-8 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-[var(--color-muted)]">
                Social Networks and Profiles
              </span>

              <div className="mt-6 flex flex-col gap-3 font-mono text-[0.72rem] font-bold uppercase tracking-[0.14em]">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between border border-[var(--color-line)] bg-[var(--color-paper)] p-4 text-[var(--color-ink)] transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                >
                  <span className="flex items-center gap-3">
                    <GithubIcon className="h-4 w-4 text-[var(--color-accent)]" />
                    <span>GitHub // @Opango14</span>
                  </span>
                  <span className="transition-transform group-hover:translate-x-1">↗</span>
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between border border-[var(--color-line)] bg-[var(--color-paper)] p-4 text-[var(--color-ink)] transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                >
                  <span className="flex items-center gap-3">
                    <LinkedinIcon className="h-4 w-4 text-[var(--color-accent)]" />
                    <span>LinkedIn // Timothy Opango</span>
                  </span>
                  <span className="transition-transform group-hover:translate-x-1">↗</span>
                </a>

                <a
                  href={profile.devto}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between border border-[var(--color-line)] bg-[var(--color-paper)] p-4 text-[var(--color-ink)] transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                >
                  <span className="flex items-center gap-3">
                    <DevtoIcon className="h-4 w-4 text-[var(--color-accent)]" />
                    <span>Dev.to // @opango_timmy14</span>
                  </span>
                  <span className="transition-transform group-hover:translate-x-1">↗</span>
                </a>

                <a
                  href={profile.x}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between border border-[var(--color-line)] bg-[var(--color-paper)] p-4 text-[var(--color-ink)] transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                >
                  <span className="flex items-center gap-3">
                    <XIcon className="h-4 w-4 text-[var(--color-accent)]" />
                    <span>X (Twitter) // @opango_dev14</span>
                  </span>
                  <span className="transition-transform group-hover:translate-x-1">↗</span>
                </a>

                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between border border-[var(--color-accent)]/50 bg-[var(--color-paper)] p-4 text-[var(--color-accent)] transition-all hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)]"
                >
                  <span className="flex items-center gap-3">
                    <ResumeIcon className="h-4 w-4" />
                    <span>Download Curriculum Vitae (PDF)</span>
                  </span>
                  <span className="transition-transform group-hover:translate-x-1">↓</span>
                </a>
              </div>

              <div className="mt-8 border-t border-[var(--color-line)] pt-4">
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
