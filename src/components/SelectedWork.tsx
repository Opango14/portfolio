import { useState } from "react";
import { additionalProjects, featuredProjects } from "../data/content";

type ProjectTopology = {
  header: string;
  steps: {
    label: string;
    title: string;
    detail: string;
  }[];
};

const topologies: Record<string, ProjectTopology> = {
  "merry-chama": {
    header: "PYTHON / DJANGO / SQLITE",
    steps: [
      {
        label: "Step 01 / Ingestion",
        title: "Session-Authenticated Member Contribution",
        detail: "Enforces role boundary: members submit records, admins verify.",
      },
      {
        label: "Step 02 / Consensus & Ledger",
        title: "ACID Atomic Ledger Entry & Double Validation",
        detail: "Balances updated simultaneously; prevents duplicate payouts.",
      },
      {
        label: "Step 03 / Dissemination",
        title: "Automated Queue Payout & Excel Audit Export",
        detail: "Generates verifiable community reports for offline meetings.",
      },
    ],
  },
  kilimoclick: {
    header: "PYTHON / FASTAPI / GIS / REST",
    steps: [
      {
        label: "Step 01 / Spatial Ingestion",
        title: "Coordinate Normalization & GIS Tile Lookup",
        detail: "Receives farmer geo-coordinates and queries regional raster layers.",
      },
      {
        label: "Step 02 / Decision Engine",
        title: "In-Memory Weather Cache & Agro-Climatic Rule Processing",
        detail: "Evaluates soil moisture heuristics against cached forecast data.",
      },
      {
        label: "Step 03 / Dissemination",
        title: "Sub-120ms Localized Irrigation Advisory",
        detail: "Delivers plain-language watering advice to low-bandwidth mobile clients.",
      },
    ],
  },
  translator: {
    header: "PYTHON / DJANGO REST / VANILLA JS",
    steps: [
      {
        label: "Step 01 / Capture",
        title: "Debounced Client Input & Lightweight REST Payload",
        detail: "Captures bilingual phrases with minimal network payload overhead.",
      },
      {
        label: "Step 02 / Translation Engine",
        title: "Django REST API Translation & Model Inference",
        detail: "Processes linguistic mappings through server-side translation logic.",
      },
      {
        label: "Step 03 / Client Mutation",
        title: "In-Place Vanilla DOM Patching (<15KB Asset Payload)",
        detail: "Updates interface in real-time without full page reload or framework bloat.",
      },
    ],
  },
  shambachain: {
    header: "BLOCKCHAIN / AGRI-TECH / PROTOCOL",
    steps: [
      {
        label: "Step 01 / Origin Minting",
        title: "Farm-Level Harvest Tagging & Batch Tokenization",
        detail: "Records crop batch origin and grower metadata at source.",
      },
      {
        label: "Step 02 / Transit Ledger",
        title: "Distributed Supply Chain Checkpoints",
        detail: "Logs custody transitions and cold-chain checkpoints immutably.",
      },
      {
        label: "Step 03 / Verification",
        title: "Consumer Scannable Produce Authenticity",
        detail: "Provides transparent farm-to-table provenance data to buyers.",
      },
    ],
  },
  "agwata-restaurant": {
    header: "HTML5 / CSS / MODERN JS / PERFORMANCE",
    steps: [
      {
        label: "Step 01 / Discovery",
        title: "Mobile-First Menu & Experience Hierarchy",
        detail: "Engineered for quick patron scanning on mobile data connections.",
      },
      {
        label: "Step 02 / Optimization",
        title: "Zero-Bloat Asset Delivery & Responsive Layouts",
        detail: "Ensures fast paint times and high clarity on variable mobile networks.",
      },
      {
        label: "Step 03 / Conversion",
        title: "Direct Ordering, Reservation & Location Links",
        detail: "Converts digital visitors into table reservations and in-person diners.",
      },
    ],
  },
};

const defaultTopology: ProjectTopology = {
  header: "SYSTEM ARCHITECTURE & FLOW",
  steps: [
    {
      label: "Step 01 / Ingestion",
      title: "Input Processing & Verification",
      detail: "Validates incoming data payloads and checks authentication boundaries.",
    },
    {
      label: "Step 02 / Processing",
      title: "Core Business Logic & State Transition",
      detail: "Executes deterministic state transitions with transactional integrity.",
    },
    {
      label: "Step 03 / Delivery",
      title: "Response Serialization & Presentation",
      detail: "Dispatches validated responses and updates client-side interfaces.",
    },
  ],
};

const statusLabels: Record<string, string> = {
  "merry-chama": "Live In Production · Real Users",
  kilimoclick: "Agri-Tech Decision Engine",
  translator: "Asynchronous REST & Vanilla Client",
  shambachain: "Hackathon Innovation · Supply Chain",
  "agwata-restaurant": "Client Production · Live Marketing",
};

export function SelectedWork() {
  const [filter, setFilter] = useState<"all" | "featured">("all");

  const allProjects = [...featuredProjects, ...additionalProjects];

  const filteredProjects = allProjects.filter((project) => {
    if (filter === "featured") {
      return featuredProjects.some((p) => p.slug === project.slug);
    }
    return true;
  });

  return (
    <div className="overflow-hidden">
      {/* ── Page Header ────────────────────────────────────── */}
      <section className="hero-grid border-b border-[var(--color-line)] px-5 pb-16 pt-28 sm:px-8 lg:px-12 lg:pb-20 lg:pt-36">
        <div className="mx-auto max-w-[1280px]">
          <div className="section-label">
            <span className="section-label-index">01</span>
            <span className="section-label-line" />
            <span>Selected Work</span>
          </div>

          <h1 className="font-display text-[clamp(2.8rem,7vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.05em] text-[var(--color-ink)]">
            <span>Production systems,</span>
            <br />
            <span className="text-[var(--color-accent)]">
              decision engines &amp; architecture.
            </span>
          </h1>

          <p className="mt-8 max-w-[54ch] text-[1.05rem] leading-relaxed text-[var(--color-muted)] sm:text-[1.15rem]">
            A comprehensive look into software engineered and shipped—spanning
            auditable financial ledgers, geospatial raster caching, decoupled
            asynchronous protocols, and full-stack applications.
          </p>

          {/* Filter Pills */}
          <div className="mt-12 flex flex-wrap gap-2 border-t border-[var(--color-line)] pt-6">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em] transition-all duration-200 ${
                filter === "all"
                  ? "border border-[var(--color-accent)] bg-[var(--color-bg)] text-[var(--color-accent)]"
                  : "border border-transparent bg-[var(--color-paper)] text-[var(--color-muted)] hover:border-[var(--color-line)] hover:text-[var(--color-ink)]"
              }`}
            >
              All Projects ({allProjects.length})
            </button>

            <button
              onClick={() => setFilter("featured")}
              className={`px-4 py-2 font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em] transition-all duration-200 ${
                filter === "featured"
                  ? "border border-[var(--color-accent)] bg-[var(--color-bg)] text-[var(--color-accent)]"
                  : "border border-transparent bg-[var(--color-paper)] text-[var(--color-muted)] hover:border-[var(--color-line)] hover:text-[var(--color-ink)]"
              }`}
            >
              Featured Systems ({featuredProjects.length})
            </button>
          </div>
        </div>
      </section>

      {/* ── Project List (Organized as FlagshipSpotlight) ──── */}
      <div className="divide-y divide-[var(--color-line)]">
        {filteredProjects.map((project, index) => {
          const topo = topologies[project.slug] || defaultTopology;
          const statusText =
            statusLabels[project.slug] ||
            project.status ||
            "Production Software";

          return (
            <section
              key={project.slug}
              className="bg-[var(--color-bg)] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
            >
              <div className="mx-auto max-w-[1280px]">
                {/* Index & Category tag */}
                <div className="mb-6 flex items-center justify-between font-mono text-[0.62rem] uppercase tracking-[0.16em] text-[var(--color-muted)]">
                  <span className="flex items-center gap-2">
                    <span className="font-bold text-[var(--color-accent)]">
                      CASE STUDY // {String(index + 1).padStart(2, "0")}
                    </span>
                  </span>
                  <span>{project.slug.toUpperCase()}</span>
                </div>

                <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
                  {/* Left Column: Context, Overview & Actions */}
                  <div className="lg:col-span-6">
                    <div className="inline-flex items-center gap-2 border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/10 px-3 py-1 font-mono text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                      {statusText}
                    </div>

                    <h2 className="mt-4 font-display text-[clamp(2.2rem,4.5vw,3.8rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-[var(--color-ink)]">
                      {project.name}
                    </h2>

                    <p className="mt-2 font-mono text-sm uppercase tracking-[0.12em] text-[var(--color-accent)]">
                      {project.tagline}
                    </p>

                    <p className="mt-6 text-[1.02rem] leading-7 text-[var(--color-muted)]">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="mt-8 space-y-3">
                      <h3 className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-[var(--color-muted)]">
                        Core System Deliverables
                      </h3>
                      <ul className="space-y-2.5">
                        {project.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-3 text-sm leading-6 text-[var(--color-ink)]"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Role & Stack Tags */}
                    <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-[var(--color-line)] pt-5">
                      {project.role && (
                        <span className="border border-[var(--color-accent)]/50 bg-[var(--color-paper)] px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-[var(--color-accent)]">
                          Role: {project.role}
                        </span>
                      )}
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="border border-[var(--color-line)] bg-[var(--color-paper)] px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.1em] text-[var(--color-muted)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="mt-10 flex flex-wrap items-center gap-4">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 border border-[var(--color-ink)] bg-[var(--color-ink)] px-5 py-2.5 font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[var(--color-bg)] transition-colors hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]"
                        >
                          <span>Launch Live App</span>
                          <span>↗</span>
                        </a>
                      )}

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 border border-[var(--color-line)] bg-[var(--color-paper)] px-5 py-2.5 font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                        >
                          <span>View Repository</span>
                          <span>↗</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Architectural Schematic & Topology */}
                  <div className="flex flex-col justify-between lg:col-span-6">
                    <div className="border border-[var(--color-line)] bg-[var(--color-paper)] p-6 sm:p-8">
                      <div className="flex items-center justify-between border-b border-[var(--color-line)] pb-4">
                        <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-[var(--color-muted)]">
                          System Topology &amp; Logic
                        </span>
                        <span className="font-mono text-[0.58rem] text-[var(--color-accent)]">
                          {topo.header}
                        </span>
                      </div>

                      {/* Topology Step Boxes */}
                      <div className="mt-6 space-y-3 font-mono text-xs">
                        <div className="border border-[var(--color-line)] bg-[var(--color-bg)] p-4">
                          <div className="text-[0.6rem] uppercase tracking-[0.12em] text-[var(--color-muted)]">
                            {topo.steps[0].label}
                          </div>
                          <div className="mt-1 font-semibold text-[var(--color-ink)]">
                            {topo.steps[0].title}
                          </div>
                          <div className="mt-1 text-[0.72rem] text-[var(--color-muted)]">
                            {topo.steps[0].detail}
                          </div>
                        </div>

                        <div className="flex justify-center text-[var(--color-accent)]">
                          ↓
                        </div>

                        <div className="border border-[var(--color-accent)]/50 bg-[var(--color-bg)] p-4">
                          <div className="text-[0.6rem] uppercase tracking-[0.12em] text-[var(--color-accent)]">
                            {topo.steps[1].label}
                          </div>
                          <div className="mt-1 font-semibold text-[var(--color-ink)]">
                            {topo.steps[1].title}
                          </div>
                          <div className="mt-1 text-[0.72rem] text-[var(--color-muted)]">
                            {topo.steps[1].detail}
                          </div>
                        </div>

                        <div className="flex justify-center text-[var(--color-accent)]">
                          ↓
                        </div>

                        <div className="border border-[var(--color-line)] bg-[var(--color-bg)] p-4">
                          <div className="text-[0.6rem] uppercase tracking-[0.12em] text-[var(--color-muted)]">
                            {topo.steps[2].label}
                          </div>
                          <div className="mt-1 font-semibold text-[var(--color-ink)]">
                            {topo.steps[2].title}
                          </div>
                          <div className="mt-1 text-[0.72rem] text-[var(--color-muted)]">
                            {topo.steps[2].detail}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
