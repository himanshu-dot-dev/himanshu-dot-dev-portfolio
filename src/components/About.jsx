import React from 'react';

const PRINCIPLES = [
  {
    index: '01',
    title: 'Systems over thin wrappers',
    description:
      'Practical AI software needs predictable failure handling, typed schemas, retrieval quality, and clear telemetry — not just a chat input wired to an API key.'
  },
  {
    index: '02',
    title: 'Local-first & security-aware',
    description:
      'Developer tools earn trust through explicit boundaries: OS-backed credential storage, diff review before disk mutation, and minimal external runtime dependencies.'
  },
  {
    index: '03',
    title: 'Product clarity in code and UI',
    description:
      'Full-stack ownership means caring equally about IPC contracts, database persistence, responsive layouts, keyboard accessibility, and readable interfaces.'
  }
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-20 sm:py-28 px-5 sm:px-8 max-w-6xl mx-auto border-t border-[var(--border-subtle)]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        {/* Left column */}
        <div className="reveal-section lg:col-span-5 space-y-4">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--text-muted)]">
            03 / About &amp; Approach
          </p>
          <h2
            id="about-heading"
            className="font-display font-semibold tracking-[-0.03em] text-[var(--text-primary)] leading-[1.12]"
            style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)' }}
          >
            Full-stack software with practical AI systems underneath.
          </h2>
          <p className="font-mono text-xs text-[var(--text-muted)] pt-2">
            Based in Chandigarh / Mohali, India
          </p>
        </div>

        {/* Right column */}
        <div className="lg:col-span-7 space-y-10">
          <div className="reveal-section space-y-4 text-base text-[var(--text-secondary)] leading-[1.72] max-w-[62ch]">
            <p>
              I&apos;m Himanshu Sharma, a Full Stack Developer and AI Engineer focused on building end-to-end software — spanning React and TypeScript interfaces, Node.js backends, RAG pipelines, AI automation workflows, and local-first desktop tools.
            </p>
            <p>
              My recent work centers on <strong className="font-medium text-[var(--text-primary)]">VersaRail AI</strong>, where I designed the Electron process boundaries, multi-provider failover routing, SQLite token budget tracking, and diff-first security model from the ground up.
            </p>
          </div>

          <div className="reveal-section border-t border-[var(--border-subtle)] divide-y divide-[var(--border-subtle)]">
            {PRINCIPLES.map((principle) => (
              <div
                key={principle.index}
                className="py-5 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-baseline"
              >
                <div className="sm:col-span-5 flex items-baseline gap-3">
                  <span className="font-mono text-xs text-[var(--text-muted)]">
                    {principle.index}
                  </span>
                  <h3 className="font-display text-sm sm:text-base font-semibold text-[var(--text-primary)]">
                    {principle.title}
                  </h3>
                </div>
                <p className="sm:col-span-7 text-sm text-[var(--text-secondary)] leading-[1.65]">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
