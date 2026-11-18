import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  ArrowUpRight,
  Cpu,
  Database,
  FileCode2,
  KeyRound,
  Layers,
  ShieldCheck,
  X
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

const SYSTEM_ICONS = {
  mesh: Cpu,
  sqlite: Database,
  security: ShieldCheck,
  isolation: KeyRound
};

export default function ProjectCaseStudyModal({ project, theme, onClose }) {
  const [activeTab, setActiveTab] = useState(project?.views?.[0]?.id ?? '');
  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (!project) return undefined;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeBtnRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose?.();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const views = project.views || [];
  const currentView = views.find((v) => v.id === activeTab) || views[0];
  const currentImage =
    currentView && (theme === 'light' ? currentView.imageLight : currentView.imageDark);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-[90] flex justify-end bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Slide-over engineering case study sheet */}
      <div
        data-lenis-prevent
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl h-full bg-[var(--bg-canvas)] text-[var(--text-primary)] border-l border-[var(--border-subtle)] overflow-y-auto overscroll-contain flex flex-col"
      >
        {/* Sticky Top Header */}
        <div className="sticky top-0 z-20 px-5 sm:px-8 h-16 border-b border-[var(--border-subtle)] bg-[var(--bg-canvas)]/92 backdrop-blur-md flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <span className="font-mono text-xs text-[var(--text-muted)]">
              {project.index} / CASE STUDY
            </span>
            <span aria-hidden="true" className="text-[var(--border-strong)]">·</span>
            <span className="font-display text-sm font-semibold text-[var(--text-primary)] truncate">
              {project.title}
            </span>
          </div>

          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="min-w-[40px] min-h-[40px] px-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--border-strong)] text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span className="hidden sm:inline">ESC</span>
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="px-5 sm:px-8 py-8 sm:py-10 space-y-10">
          {/* Title & Primary Links */}
          <div className="space-y-5">
            <div className="space-y-2.5">
              <h2
                id="case-study-title"
                className="font-display font-semibold tracking-[-0.03em] text-[var(--text-primary)]"
                style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)' }}
              >
                {project.title}
              </h2>
              <p className="text-base text-[var(--text-secondary)] leading-[1.65] max-w-[64ch]">
                {project.tagline}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              {project.links?.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[42px] px-4 py-2 rounded-lg bg-[var(--text-primary)] text-[var(--bg-canvas)] hover:opacity-90 text-sm font-medium inline-flex items-center gap-1.5 transition-opacity"
                >
                  <span>Live Site &amp; Downloads</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>
              )}
              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[42px] px-4 py-2 rounded-lg border border-[var(--border-strong)] bg-[var(--bg-surface)] hover:border-[var(--text-primary)] text-[var(--text-primary)] text-sm font-medium inline-flex items-center gap-2 transition-colors"
                >
                  <FaGithub className="w-4 h-4" aria-hidden="true" />
                  <span>Source Code</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)]" aria-hidden="true" />
                </a>
              )}
              {project.links?.architecture && (
                <a
                  href={project.links.architecture}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[42px] px-3.5 py-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--border-strong)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-xs font-mono inline-flex items-center gap-1.5 transition-colors"
                >
                  <FileCode2 className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>ARCHITECTURE.md</span>
                  <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
                </a>
              )}
            </div>

            {/* Metadata Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-4 border-y border-[var(--border-subtle)] text-xs font-mono">
              <div>
                <span className="block text-[var(--text-muted)] mb-1">ROLE</span>
                <span className="text-[var(--text-primary)]">{project.role}</span>
              </div>
              <div>
                <span className="block text-[var(--text-muted)] mb-1">CATEGORY</span>
                <span className="text-[var(--text-primary)]">{project.category}</span>
              </div>
              <div>
                <span className="block text-[var(--text-muted)] mb-1">PLATFORMS</span>
                <span className="text-[var(--text-primary)]">{project.platforms}</span>
              </div>
            </div>
          </div>

          {/* Interactive Screenshot Gallery */}
          {currentView && (
            <div className="space-y-3.5">
              <div
                role="tablist"
                aria-label={`${project.title} interface previews`}
                className="flex flex-wrap gap-2"
              >
                {views.map((view) => {
                  const selected = view.id === currentView.id;
                  return (
                    <button
                      key={view.id}
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      onClick={() => setActiveTab(view.id)}
                      className={`min-h-[38px] px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer border ${
                        selected
                          ? 'bg-[var(--text-primary)] text-[var(--bg-canvas)] border-[var(--text-primary)] font-medium'
                          : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]'
                      }`}
                    >
                      {view.label}
                    </button>
                  );
                })}
              </div>

              <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] overflow-hidden">
                <div className="px-4 py-2 border-b border-[var(--border-subtle)] bg-[var(--bg-elevated)]/60 flex items-center justify-between gap-4">
                  <span className="font-mono text-[11px] text-[var(--text-muted)]">
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

                <div className="px-4 sm:px-5 py-3.5 border-t border-[var(--border-subtle)]">
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    <strong className="font-medium text-[var(--text-primary)]">
                      {currentView.title}:
                    </strong>{' '}
                    {currentView.caption}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Problem & Direction */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="space-y-2.5">
              <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--text-muted)]">
                Problem &amp; Motivation
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-[1.7]">
                {project.problem}
              </p>
            </div>
            <div className="space-y-2.5">
              <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--text-muted)]">
                Architectural Direction
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-[1.7]">
                {project.direction}
              </p>
            </div>
          </div>

          {/* Core Systems Engineered */}
          {project.systems?.length > 0 && (
            <div className="space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--text-muted)]">
                Key Systems Engineered
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-[var(--border-subtle)] rounded-xl overflow-hidden bg-[var(--bg-surface)]">
                {project.systems.map((item) => {
                  const Icon = SYSTEM_ICONS[item.key] || Cpu;
                  return (
                    <div
                      key={item.num}
                      className="p-5 sm:p-6 border-r border-b border-[var(--border-subtle)] space-y-2.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs text-[var(--text-muted)]">
                          {item.num}
                        </span>
                        <Icon className="w-4 h-4 text-[var(--accent)]" aria-hidden="true" />
                      </div>
                      <h4 className="font-display text-sm sm:text-base font-semibold text-[var(--text-primary)]">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-[1.65]">
                        {item.body}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Process Boundary Architecture */}
          {project.architecture?.length > 0 && (
            <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-5 sm:p-6 space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[var(--accent)]" aria-hidden="true" />
                  <h3 className="font-display text-sm sm:text-base font-semibold text-[var(--text-primary)]">
                    Process Boundary Architecture
                  </h3>
                </div>
                {project.links?.threatModel && (
                  <a
                    href={project.links.threatModel}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-[var(--text-muted)] hover:text-[var(--accent)] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>SECURITY_THREAT_MODEL.md</span>
                    <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
                  </a>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                {project.architecture.map((tier, idx) => (
                  <div
                    key={tier.layer}
                    className="relative rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-canvas)] p-4 space-y-2.5"
                  >
                    <div>
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
                    {idx < project.architecture.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="hidden md:flex items-center justify-center absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 w-5 h-5 rounded-full border border-[var(--border-strong)] bg-[var(--bg-surface)] font-mono text-[10px] text-[var(--text-muted)]"
                      >
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Full Tech Stack */}
          <div className="space-y-3 pt-2 border-t border-[var(--border-subtle)]">
            <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--text-muted)]">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.fullStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-mono border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
