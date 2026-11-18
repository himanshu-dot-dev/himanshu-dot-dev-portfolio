import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Layers } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { PROJECTS } from '../data/projects';
import Magnetic from './Magnetic';
import ProjectCaseStudyModal from './ProjectCaseStudyModal';

export default function FeaturedWork({ theme, onModalChange }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const openCaseStudy = (project) => {
    setSelectedProject(project);
    onModalChange?.(true);
  };

  const closeCaseStudy = () => {
    setSelectedProject(null);
    onModalChange?.(false);
  };

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="py-20 sm:py-28 px-5 sm:px-8 max-w-6xl mx-auto border-t border-[var(--border-subtle)]"
    >
      {/* Compact Section Header */}
      <div className="reveal-section flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <div className="space-y-3">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--text-muted)]">
            01 / Selected Work
          </p>
          <h2
            id="work-heading"
            className="font-display font-semibold tracking-[-0.03em] text-[var(--text-primary)]"
            style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)' }}
          >
            Engineered Projects
          </h2>
        </div>
        <p className="text-sm text-[var(--text-secondary)] max-w-[44ch] leading-relaxed">
          Compact overview on the page — open any project for full architecture, security boundaries, and interface previews.
        </p>
      </div>

      {/* Scalable Editorial Project Index (compact ~420px per project, scales cleanly to N projects) */}
      <div className="border-t border-[var(--border-subtle)] divide-y divide-[var(--border-subtle)]">
        {PROJECTS.map((project) => (
          <article
            key={project.id}
            className="reveal-section py-10 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center"
          >
            {/* Left column: Concise engineering overview + actions */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-[var(--text-muted)]">
                <span className="text-[var(--accent)] font-medium">{project.index}</span>
                <span aria-hidden="true">/</span>
                <span>{project.category}</span>
                <span aria-hidden="true" className="text-[var(--border-strong)]">·</span>
                <span>{project.platforms}</span>
              </div>

              <div className="space-y-2.5">
                <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-[-0.025em] text-[var(--text-primary)]">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-[1.65]">
                  {project.tagline}
                </p>
              </div>

              {/* 3 Scannable Proof Points */}
              <ul className="space-y-2 pt-1">
                {project.highlights.map((point) => (
                  <li
                    key={point}
                    className="text-xs sm:text-sm text-[var(--text-secondary)] flex items-start gap-2.5"
                  >
                    <span
                      aria-hidden="true"
                      className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 shrink-0"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Core Stack Strip */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.cardStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-mono border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Bar */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Magnetic>
                  <button
                    type="button"
                    onClick={() => openCaseStudy(project)}
                    className="group min-h-[44px] px-4 py-2.5 rounded-lg bg-[var(--text-primary)] text-[var(--bg-canvas)] hover:opacity-90 text-sm font-medium inline-flex items-center gap-2 transition-opacity cursor-pointer"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight
                      className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </button>
                </Magnetic>

                {project.links?.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] px-3.5 py-2 rounded-lg border border-[var(--border-strong)] bg-[var(--bg-surface)] hover:border-[var(--text-primary)] text-[var(--text-primary)] text-sm font-medium inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Live Site</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)]" aria-hidden="true" />
                  </a>
                )}

                {project.links?.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub repository`}
                    className="min-h-[44px] px-3.5 py-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--border-strong)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-sm font-medium inline-flex items-center gap-1.5 transition-colors"
                  >
                    <FaGithub className="w-4 h-4" aria-hidden="true" />
                    <span>Code</span>
                  </a>
                )}
              </div>
            </div>

            {/* Right column: Compact clickable product preview */}
            <div className="lg:col-span-6">
              <button
                type="button"
                onClick={() => openCaseStudy(project)}
                aria-label={`Open ${project.title} full case study and ${project.views.length} interface previews`}
                className="group block w-full text-left rounded-xl border border-[var(--border-subtle)] hover:border-[var(--border-strong)] bg-[var(--bg-surface)] overflow-hidden transition-colors cursor-pointer"
              >
                <div className="aspect-[16/10] bg-[#090a0f] overflow-hidden">
                  <img
                    src={project.coverImage}
                    alt={project.coverAlt}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                  />
                </div>
                <div className="px-4 py-3 border-t border-[var(--border-subtle)] flex items-center justify-between gap-3 text-xs font-mono">
                  <span className="inline-flex items-center gap-1.5 text-[var(--text-secondary)]">
                    <Layers className="w-3.5 h-3.5 text-[var(--accent)]" aria-hidden="true" />
                    <span>{project.views.length} screens · Architecture &amp; Security</span>
                  </span>
                  <span className="text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors shrink-0">
                    Inspect →
                  </span>
                </div>
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* On-demand Full Engineering Case Study Drawer */}
      <ProjectCaseStudyModal
        key={selectedProject?.id ?? 'closed'}
        project={selectedProject}
        theme={theme}
        onClose={closeCaseStudy}
      />
    </section>
  );
}
