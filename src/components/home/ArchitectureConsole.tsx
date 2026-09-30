import { useState } from "react";
import { Link } from "react-router-dom";

type ArchitecturalPattern = {
  id: string;
  tabLabel: string;
  title: string;
  subhead: string;
  challenge: string;
  solution: string;
  tradeOff: string;
  stack: string[];
  metrics: { label: string; value: string }[];
  flowSteps: string[];
  relatedSlug: string;
};

const patterns: ArchitecturalPattern[] = [
  {
    id: "ledger",
    tabLabel: "01. Ledger Integrity",
    title: "Transactional Consistency in Informal Finance",
    subhead: "Deterministic state transitions for community rotating savings",
    challenge:
      "Community groups ('chamas') manage cyclic pooled funds. Without rigorous audit logs, manual records suffer from disputed contribution histories, race conditions, and unverifiable payouts.",
    solution:
      "Engineered an ACID-compliant ledger model inside Django. Every deposit and payout transition is treated as an immutable ledger transaction with role-scoped permissions, session verification, and instant tabular audit reports.",
    tradeOff:
      "Opted for explicit relational ledger tables over simplified balance counters. While it requires stricter migration validation, it guarantees zero state divergence.",
    stack: ["Python", "Django ORM", "SQLite", "Excel Report Engine"],
    metrics: [
      { label: "State Reliability", value: "100% auditable" },
      { label: "Deployment", value: "Production active" },
      { label: "Data Integrity", value: "ACID compliant" },
    ],
    flowSteps: [
      "Member Authentication & Role Check",
      "Immutable Ledger Transaction Entry",
      "Atomic Balance Recalculation",
      "Audit Trail & CSV/Excel Generation",
    ],
    relatedSlug: "merry-chama",
  },
  {
    id: "gis-cache",
    tabLabel: "02. Geospatial Caching",
    title: "High-Throughput GIS & Decision Modeling",
    subhead: "Low-latency agro-climatic advisories over variable connections",
    challenge:
      "Querying external agro-meteorological APIs and multi-layer GIS rasters on mobile cellular networks causes high latency and fragile connectivity for field farmers.",
    solution:
      "Constructed an asynchronous FastAPI backend featuring an in-memory geo-coordinate caching layer. Requests check spatial tile hashes first before querying external meteorological providers.",
    tradeOff:
      "Accepted an 8-hour cache TTL on weather forecasts to keep response latencies under 120ms and minimize billable API calls by over 80%.",
    stack: ["FastAPI", "Python Async", "GIS Data Layers", "Agro APIs"],
    metrics: [
      { label: "Response Time", value: "<120ms cached" },
      { label: "API Call Reduction", value: "~85%" },
      { label: "Throughput", value: "Async non-blocking" },
    ],
    flowSteps: [
      "Spatial Coordinate Normalization",
      "Geo-Tile Cache Query",
      "Decision Tree Heuristic Evaluation",
      "Localized Farmer Irrigation Advisory",
    ],
    relatedSlug: "kilimoclick",
  },
  {
    id: "lean-protocol",
    tabLabel: "03. Lean Protocols",
    title: "Zero-Bloat Asynchronous Client-Server Protocols",
    subhead: "Reactive interfaces without heavy framework runtime overhead",
    challenge:
      "Shipping 300KB+ client framework bundles to users on metered, high-latency 3G networks degrades time-to-interactive and burns mobile data.",
    solution:
      "Designed a clean RESTful translation endpoint in Django coupled to a vanilla ES6 JavaScript client. Updates patch the DOM in-place without full-page reloads or bundle compilation steps.",
    tradeOff:
      "Requires manual state synchronization in the client, but achieves near-instant initial paint (<15KB total asset payload) and seamless mobile responsiveness.",
    stack: ["Django REST", "Python", "Vanilla JavaScript", "Semantic HTML"],
    metrics: [
      { label: "Asset Size", value: "<15 KB total" },
      { label: "Client Overhead", value: "0 runtime deps" },
      { label: "Latency", value: "Instant DOM patch" },
    ],
    flowSteps: [
      "Debounced Input Capture",
      "Lightweight JSON REST Payload",
      "Server-Side Translation Pipeline",
      "In-Place DOM Mutation",
    ],
    relatedSlug: "translator",
  },
];

export function ArchitectureConsole() {
  const [activeTab, setActiveTab] = useState(0);
  const current = patterns[activeTab];

  return (
    <section className="border-b border-[var(--color-line)] bg-[var(--color-paper)] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1280px]">
        {/* Section label */}
        <div className="section-label">
          <span className="section-label-index">01</span>
          <span className="section-label-line" />
          <span>System Architecture &amp; Patterns</span>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="font-display text-[clamp(2.4rem,5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-[var(--color-ink)]">
              How I reason about systems.
            </h2>
            <p className="mt-4 max-w-[50ch] text-[0.98rem] leading-7 text-[var(--color-muted)]">
              Architecture isn&apos;t just writing code—it is making deliberate
              trade-offs around reliability, data integrity, and operational
              efficiency.
            </p>
          </div>

          <Link
            to="/work"
            className="inline-flex items-center gap-2 font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[var(--color-ink)] underline underline-offset-4 hover:text-[var(--color-accent)]"
          >
            <span>Inspect All System Flows in Work</span>
            <span>↗</span>
          </Link>
        </div>

        {/* Tab switcher */}
        <div className="mt-12 flex flex-wrap gap-2 border-b border-[var(--color-line)] pb-4">
          {patterns.map((pattern, idx) => (
            <button
              key={pattern.id}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2.5 font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em] transition-all duration-200 ${
                activeTab === idx
                  ? "border border-[var(--color-accent)] bg-[var(--color-bg)] text-[var(--color-accent)]"
                  : "border border-transparent bg-transparent text-[var(--color-muted)] hover:border-[var(--color-line)] hover:text-[var(--color-ink)]"
              }`}
            >
              {pattern.tabLabel}
            </button>
          ))}
        </div>

        {/* Console Box */}
        <div className="mt-6 border border-[var(--color-line)] bg-[var(--color-bg)]">
          {/* Console top bar */}
          <div className="flex items-center justify-between border-b border-[var(--color-line)] bg-[var(--color-charcoal)] px-5 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
              <span className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[var(--color-ink)]">
                ARCHITECTURE SPEC // {current.id.toUpperCase()}
              </span>
            </div>
            <span className="font-mono text-[0.58rem] text-[var(--color-muted)]">
              STATUS: VALIDATED IN CODE
            </span>
          </div>

          <div className="grid gap-8 p-6 lg:grid-cols-12 lg:gap-10 lg:p-10">
            {/* Left 7 cols: Challenge, Solution, Trade-off */}
            <div className="flex flex-col justify-between lg:col-span-7">
              <div>
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.15em] text-[var(--color-accent)]">
                  {current.subhead}
                </span>
                <h3 className="mt-2 font-display text-2xl font-semibold tracking-[-0.03em] text-[var(--color-ink)] sm:text-3xl">
                  {current.title}
                </h3>

                <div className="mt-6 space-y-5 text-[0.92rem] leading-7">
                  <div>
                    <h4 className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-[var(--color-muted)]">
                      The Constraint &amp; Challenge
                    </h4>
                    <p className="mt-1.5 text-[var(--color-ink)]/90">
                      {current.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-[var(--color-muted)]">
                      Architectural Strategy
                    </h4>
                    <p className="mt-1.5 text-[var(--color-ink)]/90">
                      {current.solution}
                    </p>
                  </div>

                  <div className="border-l-2 border-[var(--color-accent)] pl-4">
                    <h4 className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-[var(--color-accent)]">
                      Explicit Trade-off
                    </h4>
                    <p className="mt-1 text-sm text-[var(--color-muted)]">
                      {current.tradeOff}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-2 border-t border-[var(--color-line)] pt-5">
                {current.stack.map((item) => (
                  <span
                    key={item}
                    className="border border-[var(--color-line)] bg-[var(--color-paper)] px-3 py-1 font-mono text-[0.6rem] uppercase tracking-[0.1em] text-[var(--color-ink)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Right 5 cols: Metrics & Visual Flow Sequence */}
            <div className="flex flex-col justify-between border-t border-[var(--color-line)] pt-6 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              {/* Metrics strip */}
              <div>
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-[var(--color-muted)]">
                  Production Telemetry
                </span>
                <div className="mt-3 grid grid-cols-3 gap-2 border border-[var(--color-line)] bg-[var(--color-paper)] p-3">
                  {current.metrics.map((m) => (
                    <div key={m.label} className="text-center">
                      <div className="font-display text-sm font-bold text-[var(--color-accent)] sm:text-base">
                        {m.value}
                      </div>
                      <div className="mt-0.5 font-mono text-[0.52rem] uppercase tracking-[0.1em] text-[var(--color-muted)]">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Sequence Step Pipeline */}
                <div className="mt-8">
                  <span className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-[var(--color-muted)]">
                    Execution Pipeline
                  </span>

                  <ol className="mt-3 space-y-2.5">
                    {current.flowSteps.map((step, sIdx) => (
                      <li
                        key={step}
                        className="flex items-center gap-3 border border-[var(--color-line)] bg-[var(--color-paper)]/70 px-3 py-2 text-xs"
                      >
                        <span className="font-mono text-[0.58rem] font-bold text-[var(--color-accent)]">
                          0{sIdx + 1}
                        </span>
                        <span className="text-[var(--color-ink)]">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <Link
                  to="/work"
                  className="inline-flex w-full items-center justify-center gap-2 border border-[var(--color-line)] bg-[var(--color-paper)] py-2.5 font-mono text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                >
                  <span>See Full Implementation in Work</span>
                  <span>↗</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
