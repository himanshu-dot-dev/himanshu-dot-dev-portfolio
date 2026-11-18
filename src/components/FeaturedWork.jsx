import React, { useState } from 'react';
import {
  ArrowUpRight,
  Cpu,
  Database,
  FileCode2,
  KeyRound,
  Layers,
  ShieldCheck
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import Magnetic from './Magnetic';

const SHOWCASE_VIEWS = [
  {
    id: 'usage',
    label: 'Usage & Quotas',
    title: 'Per-Provider & Per-Model Token Calculator',
    caption:
      'Aggregates monthly free-tier capacity across enabled keys, deduplicates shared provider pools, tracks 24h and monthly token usage in SQLite, and monitors live failover health.',
    imageDark: '/projects/versarail/usage-quotas.png',
    imageLight: '/projects/versarail/usage-quotas.png',
    alt: 'VersaRail AI Usage and Quotas view showing 173M monthly free-tier token budget calculator across providers and live endpoint health'
  },
  {
    id: 'security',
    label: 'Diff-First Security',
    title: 'Action Approval & SHA-256 TOCTOU Guard',
    caption:
      'Every workspace file mutation renders a unified diff for explicit review and binds approval to a SHA-256 payload hash so parameters cannot be altered before execution.',
    imageDark: '/projects/versarail/diff-security.png',
    imageLight: '/projects/versarail/diff-security.png',
    alt: 'VersaRail AI Action Approval modal displaying a unified file diff, risk badge, and SHA-256 TOCTOU payload hash guard'
  },
  {
    id: 'workspace',
    label: 'Agent Workspace',
    title: 'Workspace-Aware Coding Agent & Tool Execution',
    caption:
      'Inspects local project directories, streams model reasoning traces, runs built-in tools like write_file and edit_file with approval, and persists conversations locally.',
    imageDark: '/projects/versarail/agent-workspace.png',
    imageLight: '/projects/versarail/agent-workspace.png',
    alt: 'VersaRail AI Chat workspace with live reasoning trace, completed write_file tool action, and project file explorer'
  },
  {
    id: 'workstation',
    label: 'Workstation UI',
    title: 'Local-First Desktop Shell (Dark & Light Themes)',
    caption:
      'Cross-platform Electron 45 + React 19 desktop interface supporting BYOK keys, local endpoints (Ollama / LM Studio), @ file mentions, and theme parity.',
    imageDark: '/projects/versarail/workstation-dark.png',
    imageLight: '/projects/versarail/workstation-light.png',
    alt: 'VersaRail AI Agent Workstation main interface showing workspace controls, BYOK direct keys, auto-failover, and diff-first safety'
  },
  {
    id: 'keychain',
    label: 'OS Keychain',
    title: 'Hardware-Encrypted Provider Credentials',
    caption:
      'Provider API keys are encrypted immediately via Electron safeStorage (Windows DPAPI, macOS Keychain, Linux Secret Service) and never exposed in plaintext to the renderer.',
    imageDark: '/projects/versarail/keychain-providers.png',
    imageLight: '/projects/versarail/keychain-providers.png',
    alt: 'VersaRail AI Add AI Provider dialog with local OS keychain encryption notice and live connection test'
  }
];

const CORE_SYSTEMS = [
  {
    num: '01',
    title: '13-Provider Mesh & Pre-First-Byte Failover',
    icon: Cpu,
    body: 'Supports Gemini, Groq, Cerebras, OpenRouter, Mistral, NVIDIA NIM, Cohere, DeepSeek, Cloudflare Workers AI, Hugging Face, Ollama/LM Studio, and keyless gateways with transparent failover on 429/5xx before streaming starts.'
  },
  {
    num: '02',
    title: 'Zero-Native SQLite Token Engine',
    icon: Database,
    body: 'Uses Node.js 24 built-in node:sqlite (DatabaseSync) — avoiding Python, MSBuild, and native C++ addons — to persist conversations, log actual SSE token usage, and deduplicate shared free-tier account pools.'
  },
  {
    num: '03',
    title: 'Cryptographic Execution Boundaries',
    icon: ShieldCheck,
    body: 'Routes file writes, edits, and shell execution through a central PermissionBroker with SHA-256 payload-hash TOCTOU protection, unified diff conflict checks, canonical path validation, and .env / .git / .ssh exclusions.'
  },
  {
    num: '04',
    title: 'Hardened Electron Process Isolation',
    icon: KeyRound,
    body: 'Sandboxed Chromium renderer (contextIsolation: true, nodeIntegration: false, connect-src none in production), narrow contextBridge API with SenderVerifier + Zod validation, OS safeStorage keys, and @electron/fuses.'
  }
];

const ARCHITECTURE_LAYERS = [
  {
    layer: '01 · Renderer Process',
    boundary: 'Sandboxed Chromium · React 19',
    items: ['Chat & Inspector UI', 'Unified Diff Viewer', 'Usage & Quotas', 'xterm.js Terminal']
  },
  {
    layer: '02 · Preload Bridge',
    boundary: 'contextIsolation · Narrow Typed IPC',
    items: ['window.electronApi', 'SenderVerifier', 'Zod Schema Validation']
  },
  {
    layer: '03 · Main Process',
    boundary: 'Privileged Node.js 24 Runtime',
    items: ['Provider Router & Failover', 'PermissionBroker (SHA-256)', 'node:sqlite Storage', 'safeStorage Keyring', 'Safe FS & Command Runner']
  }
];

const TECH_STACK = [
  'Electron 45',
  'React 19',
  'TypeScript',
  'Node.js 24',
  'node:sqlite',
  'Tailwind CSS',
  'Zod',
  'Vitest',
  'xterm.js',
  '@electron/fuses'
];

export default function FeaturedWork({ theme }) {
  const [activeTab, setActiveTab] = useState(SHOWCASE_VIEWS[0].id);
  const currentView =
    SHOWCASE_VIEWS.find((view) => view.id === activeTab) || SHOWCASE_VIEWS[0];
  const currentImage =
    theme === 'light' ? currentView.imageLight : currentView.imageDark;

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="py-20 sm:py-28 px-5 sm:px-8 max-w-6xl mx-auto border-t border-[var(--border-subtle)]"
    >
      {/* Section Header */}
      <div className="reveal-section flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
        <div className="space-y-3">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--text-muted)]">
            01 / Featured Work
          </p>
          <h2
            id="work-heading"
            className="font-display font-semibold tracking-[-0.03em] text-[var(--text-primary)]"
            style={{ fontSize: 'clamp(1.9rem, 3.6vw, 2.85rem)' }}
          >
            VersaRail AI
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-[58ch] leading-relaxed">
            A local-first desktop AI coding workstation that unifies 13+ cloud and local LLM providers behind automatic failover, unified diff approval, and hardware-encrypted credentials.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <Magnetic>
            <a
              href="https://versarail-landing.pages.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] px-4 py-2.5 rounded-lg bg-[var(--text-primary)] text-[var(--bg-canvas)] hover:opacity-90 text-sm font-medium inline-flex items-center gap-1.5 transition-opacity"
            >
              <span>Live Site &amp; Downloads</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="https://github.com/himanshu-dot-dev/versarail-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] px-4 py-2.5 rounded-lg border border-[var(--border-strong)] bg-[var(--bg-surface)] hover:border-[var(--text-primary)] text-[var(--text-primary)] text-sm font-medium inline-flex items-center gap-2 transition-colors"
            >
              <FaGithub className="w-4 h-4" aria-hidden="true" />
              <span>Source Code</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)]" aria-hidden="true" />
            </a>
          </Magnetic>
        </div>
      </div>

      {/* Metadata strip */}
      <article className="space-y-12">
        <div className="reveal-section grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-[var(--border-subtle)] text-xs font-mono">
          <div>
            <span className="block text-[var(--text-muted)] mb-1">ROLE</span>
            <span className="text-[var(--text-primary)]">Creator &amp; Engineer</span>
          </div>
          <div>
            <span className="block text-[var(--text-muted)] mb-1">CATEGORY</span>
            <span className="text-[var(--text-primary)]">Desktop AI Workstation</span>
          </div>
          <div>
            <span className="block text-[var(--text-muted)] mb-1">PLATFORMS</span>
            <span className="text-[var(--text-primary)]">Win · macOS · Linux</span>
          </div>
          <div>
            <span className="block text-[var(--text-muted)] mb-1">DOCS</span>
            <a
              href="https://github.com/himanshu-dot-dev/versarail-ai/blob/main/docs/ARCHITECTURE.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] hover:underline inline-flex items-center gap-1"
            >
              <span>Architecture</span>
              <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Interactive Real Product Screenshot Showcase */}
        <div className="reveal-section space-y-4">
          <div
            role="tablist"
            aria-label="VersaRail AI interface previews"
            className="flex flex-wrap gap-2"
          >
            {SHOWCASE_VIEWS.map((view) => {
              const isSelected = view.id === activeTab;
              return (
                <button
                  key={view.id}
                  type="button"
                  role="tab"
                  id={`tab-${view.id}`}
                  aria-selected={isSelected}
                  aria-controls={`panel-${view.id}`}
                  onClick={() => setActiveTab(view.id)}
                  className={`min-h-[40px] px-3.5 py-2 rounded-lg text-xs font-mono transition-colors cursor-pointer border ${
                    isSelected
                      ? 'bg-[var(--text-primary)] text-[var(--bg-canvas)] border-[var(--text-primary)] font-medium'
                      : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {view.label}
                </button>
              );
            })}
          </div>

          <div
            id={`panel-${currentView.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${currentView.id}`}
            className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] overflow-hidden shadow-sm dark:shadow-none"
          >
            {/* Minimal technical figure header (avoids double-titlebar over native Electron chrome) */}
            <div className="px-4 sm:px-5 py-2.5 border-b border-[var(--border-subtle)] bg-[var(--bg-elevated)]/60 flex items-center justify-between gap-4">
              <span className="font-mono text-[11px] text-[var(--text-muted)] truncate">
                VIEW · {currentView.label.toUpperCase()}
              </span>
              <span className="font-mono text-[11px] text-[var(--text-muted)] hidden sm:inline truncate">
                {currentView.title}
              </span>
            </div>

            <div className="bg-[#090a0f]">
              <img
                key={currentImage}
                src={currentImage}
                alt={currentView.alt}
                className="w-full h-auto block object-cover"
              />
            </div>

            <div className="px-5 py-4 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-[74ch]">
                <strong className="font-medium text-[var(--text-primary)]">
                  {currentView.title}:
                </strong>{' '}
                {currentView.caption}
              </p>
            </div>
          </div>
        </div>

        {/* Problem & Motivation vs Engineering Approach */}
        <div className="reveal-section grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pt-2">
          <div className="space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--text-muted)]">
              Problem &amp; Motivation
            </h3>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-[1.7]">
              Developers relying on AI coding tools often get locked into a single paid vendor, hit unexpected <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-[var(--bg-elevated)] text-[var(--text-primary)]">429</code> rate limits across fragmented free-tier APIs, or run coding agents that mutate files and shell commands without clear verification boundaries.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--text-muted)]">
              Architectural Direction
            </h3>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-[1.7]">
              VersaRail AI treats the desktop shell as a strict trust boundary: API credentials stay inside the OS keyring, model traffic routes through an automatic multi-provider failover mesh, and every disk write or shell command requires verified user approval backed by a SHA-256 payload hash.
            </p>
          </div>
        </div>

        {/* 4 Core Systems Engineered (Hairline Grid — no nested cards) */}
        <div className="reveal-section space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--text-muted)]">
              Key Systems Engineered
            </h3>
            <span className="font-mono text-xs text-[var(--text-muted)] hidden sm:inline">
              Verified against repository &amp; Vitest suite
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-[var(--border-subtle)] rounded-xl overflow-hidden bg-[var(--bg-surface)]">
            {CORE_SYSTEMS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.num}
                  className="p-6 sm:p-7 border-r border-b border-[var(--border-subtle)] space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[var(--text-muted)]">
                      {item.num}
                    </span>
                    <Icon className="w-4 h-4 text-[var(--accent)]" aria-hidden="true" />
                  </div>
                  <h4 className="font-display text-base sm:text-lg font-semibold tracking-[-0.015em] text-[var(--text-primary)]">
                    {item.title}
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)] leading-[1.65]">
                    {item.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3-Layer Process Boundary Schematic (Modeled on docs/ARCHITECTURE.md) */}
        <div className="reveal-section rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-[var(--accent)]" aria-hidden="true" />
              <h3 className="font-display text-base font-semibold text-[var(--text-primary)]">
                Process Boundary Architecture
              </h3>
            </div>
            <a
              href="https://github.com/himanshu-dot-dev/versarail-ai/blob/main/docs/SECURITY_THREAT_MODEL.md"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[var(--text-muted)] hover:text-[var(--accent)] inline-flex items-center gap-1 transition-colors"
            >
              <FileCode2 className="w-3.5 h-3.5" aria-hidden="true" />
              <span>SECURITY_THREAT_MODEL.md</span>
              <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {ARCHITECTURE_LAYERS.map((tier, index) => (
              <div
                key={tier.layer}
                className="relative rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-canvas)] p-5 space-y-3"
              >
                <div className="space-y-0.5">
                  <p className="font-mono text-xs font-medium text-[var(--text-primary)]">
                    {tier.layer}
                  </p>
                  <p className="font-mono text-[11px] text-[var(--text-muted)]">
                    {tier.boundary}
                  </p>
                </div>

                <ul className="space-y-1.5 pt-2 border-t border-[var(--border-subtle)]">
                  {tier.items.map((node) => (
                    <li
                      key={node}
                      className="text-xs text-[var(--text-secondary)] flex items-center gap-2"
                    >
                      <span
                        aria-hidden="true"
                        className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0"
                      />
                      <span>{node}</span>
                    </li>
                  ))}
                </ul>

                {index < ARCHITECTURE_LAYERS.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="hidden lg:flex items-center justify-center absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full border border-[var(--border-strong)] bg-[var(--bg-surface)] font-mono text-[10px] text-[var(--text-muted)]"
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Stack strip */}
        <div className="reveal-section flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
          <div className="flex flex-wrap gap-2">
            {TECH_STACK.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs font-mono border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)]"
              >
                {tech}
              </span>
            ))}
          </div>

          <a
            href="https://github.com/himanshu-dot-dev/versarail-ai/blob/main/docs/ARCHITECTURE.md"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] inline-flex items-center gap-1 shrink-0 transition-colors"
          >
            <span>Read Architecture Docs</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
      </article>
    </section>
  );
}
