import React from 'react';
import { ArrowUpRight, Briefcase, Calendar, GraduationCap, MapPin } from 'lucide-react';

const EXPERIENCES = [
  {
    role: 'Software Developer',
    company: 'Cool Plugins',
    companyUrl: 'https://coolplugins.net/',
    employmentType: 'Full-time',
    period: 'Jun 2023 — Present',
    location: 'Mohali (Phase 7), India · On-site',
    summary:
      'Full-stack software developer building and maintaining high-traffic production web plugins and web applications. Responsible for architecting scalable backend logic in PHP, engineering responsive JavaScript and React interfaces, integrating robust REST APIs, and implementing modern agentic workflows and AI automation.',
    skills: [
      'PHP',
      'JavaScript',
      'React',
      'REST APIs',
      'Agentic Workflows',
      'AI Automation',
      'Node.js'
    ]
  }
];

const EDUCATION = [
  {
    degree: 'Diploma in Computer Science & Engineering',
    institution: 'Govt. Polytechnic, Morni Hills',
    period: 'Aug 2019 — Jun 2022',
    score: 'Score: 71.4%',
    description:
      'Rigorous foundational coursework in algorithms, data structures, object-oriented software engineering, database management systems, and computer networks.'
  },
  {
    degree: 'Matriculation (10th Standard)',
    institution: 'Govt. Sr. Secondary School, Morni',
    period: 'Completed 2019',
    score: 'Score: 78.9%',
    description:
      'Secondary school education with high academic distinction in mathematics and science.'
  }
];

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-20 sm:py-28 px-5 sm:px-8 max-w-6xl mx-auto border-t border-[var(--border-subtle)]"
    >
      {/* Section Header */}
      <div className="reveal-section flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <div className="space-y-3">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--text-muted)]">
            02 / Experience &amp; Education
          </p>
          <h2
            id="experience-heading"
            className="font-display font-semibold tracking-[-0.03em] text-[var(--text-primary)]"
            style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)' }}
          >
            Work History &amp; Background
          </h2>
        </div>
        <p className="text-sm text-[var(--text-secondary)] max-w-[46ch] leading-relaxed">
          Full-time software engineering experience in production web systems, coupled with a solid academic computer science foundation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        {/* Left Column: Work Experience */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-2 pb-2 border-b border-[var(--border-subtle)]">
            <Briefcase className="w-4 h-4 text-[var(--accent)]" aria-hidden="true" />
            <h3 className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--text-muted)]">
              Professional Experience
            </h3>
          </div>

          <div className="space-y-6">
            {EXPERIENCES.map((exp) => (
              <article
                key={exp.company}
                className="reveal-section p-6 sm:p-7 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] space-y-4 hover:border-[var(--border-strong)] transition-colors"
              >
                {/* Role & Company Header */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div>
                    <h4 className="font-display text-lg sm:text-xl font-semibold text-[var(--text-primary)]">
                      {exp.role}
                    </h4>
                    <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)] mt-0.5">
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-[var(--text-primary)] hover:text-[var(--accent)] inline-flex items-center gap-1 transition-colors"
                        >
                          <span>{exp.company}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)]" aria-hidden="true" />
                        </a>
                      ) : (
                        <span className="font-medium text-[var(--text-primary)]">{exp.company}</span>
                      )}
                      <span aria-hidden="true" className="text-[var(--border-strong)]">·</span>
                      <span className="text-xs font-mono text-[var(--text-muted)]">{exp.employmentType}</span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--accent)] bg-[var(--accent-soft)] px-2.5 py-1 rounded-md self-start">
                    <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>{exp.period}</span>
                  </span>
                </div>

                {/* Location Meta */}
                <div className="flex items-center gap-1.5 text-xs font-mono text-[var(--text-muted)]">
                  <MapPin className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  <span>{exp.location}</span>
                </div>

                {/* Summary */}
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {exp.summary}
                </p>

                {/* Skills strip */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[var(--border-subtle)]">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-xs font-mono border border-[var(--border-subtle)] bg-[var(--bg-elevated)] text-[var(--text-secondary)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Right Column: Education */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-2 pb-2 border-b border-[var(--border-subtle)]">
            <GraduationCap className="w-4 h-4 text-[var(--accent)]" aria-hidden="true" />
            <h3 className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--text-muted)]">
              Education
            </h3>
          </div>

          <div className="space-y-4">
            {EDUCATION.map((edu) => (
              <div
                key={edu.institution}
                className="reveal-section p-5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] space-y-2.5 hover:border-[var(--border-strong)] transition-colors"
              >
                <div className="flex items-start justify-between gap-3">
                  <h4 className="font-display text-base font-semibold text-[var(--text-primary)] leading-snug">
                    {edu.degree}
                  </h4>
                  <span className="text-[11px] font-mono text-[var(--text-muted)] shrink-0 mt-0.5">
                    {edu.period}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-[var(--text-muted)]">
                  <span className="text-[var(--text-secondary)]">{edu.institution}</span>
                  <span aria-hidden="true" className="text-[var(--border-strong)]">·</span>
                  <span className="text-[var(--accent)] font-medium">{edu.score}</span>
                </div>

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed pt-1">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
