import React from 'react';
import {
  SiDocker,
  SiElectron,
  SiExpress,
  SiGit,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiReact,
  SiSqlite,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVitest,
  SiWordpress,
  SiZod
} from 'react-icons/si';
import { Database, Workflow } from 'lucide-react';

const STACK_DOMAINS = [
  {
    id: 'frontend-desktop',
    index: '01',
    title: 'Frontend & Desktop',
    items: [
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'React', icon: SiReact },
      { name: 'Electron', icon: SiElectron },
      { name: 'Tailwind CSS', icon: SiTailwindcss }
    ]
  },
  {
    id: 'backend-systems',
    index: '02',
    title: 'Backend & Runtime',
    items: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'PHP', icon: SiPhp },
      { name: 'WordPress', icon: SiWordpress },
      { name: 'Express.js', icon: SiExpress },
      { name: 'Electron IPC', icon: SiElectron },
      { name: 'Zod', icon: SiZod }
    ]
  },
  {
    id: 'ai-data',
    index: '03',
    title: 'AI Systems & Data',
    items: [
      { name: 'RAG Pipelines', icon: Workflow },
      { name: 'AI Automation', icon: Workflow },
      { name: 'Pinecone', icon: Database },
      { name: 'MySQL', icon: SiMysql },
      { name: 'node:sqlite', icon: SiSqlite },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Supabase', icon: SiSupabase }
    ]
  },
  {
    id: 'tooling',
    index: '04',
    title: 'Testing & Delivery',
    items: [
      { name: 'Vitest', icon: SiVitest },
      { name: 'Docker', icon: SiDocker },
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub }
    ]
  }
];

export default function Skills() {
  return (
    <section
      id="stack"
      aria-labelledby="stack-heading"
      className="py-20 sm:py-28 px-5 sm:px-8 max-w-6xl mx-auto border-t border-[var(--border-subtle)]"
    >
      {/* Header */}
      <div className="reveal-section flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <div className="space-y-3">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--text-muted)]">
            04 / Stack &amp; Tooling
          </p>
          <h2
            id="stack-heading"
            className="font-display font-semibold tracking-[-0.03em] text-[var(--text-primary)]"
            style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)' }}
          >
            Technologies I build with
          </h2>
        </div>
        <p className="text-sm text-[var(--text-secondary)] max-w-[44ch] leading-relaxed">
          Core languages, frameworks, data layers, and tooling used across web products, desktop software, and AI workflows.
        </p>
      </div>

      {/* Hairline-divided editorial specification matrix (zero empty voids, zero mobile truncation) */}
      <div className="reveal-section border-t border-[var(--border-subtle)] divide-y divide-[var(--border-subtle)]">
        {STACK_DOMAINS.map((domain) => (
          <div
            key={domain.id}
            className="py-6 sm:py-7 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center"
          >
            <div className="lg:col-span-4">
              <div className="flex items-baseline gap-2.5">
                <span className="font-mono text-xs text-[var(--text-muted)]">
                  {domain.index}
                </span>
                <h3 className="font-display text-base sm:text-lg font-semibold text-[var(--text-primary)]">
                  {domain.title}
                </h3>
              </div>
            </div>

            <div className="lg:col-span-8 flex flex-wrap gap-2.5">
              {domain.items.map((skill) => {
                const Icon = skill.icon;
                return (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-sm font-medium text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-colors"
                  >
                    <Icon
                      className="w-3.5 h-3.5 text-[var(--text-muted)] shrink-0"
                      aria-hidden="true"
                    />
                    <span>{skill.name}</span>
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
