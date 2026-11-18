import React, { useState } from 'react';
import { ArrowUpRight, Check, Copy, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import Magnetic from './Magnetic';

const EMAIL = 'himanshudotdev2003@gmail.com';

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    handle: 'himanshu-dot-dev',
    href: 'https://github.com/himanshu-dot-dev',
    icon: FaGithub
  },
  {
    label: 'LinkedIn',
    handle: 'himanshu-sharma-programmer',
    href: 'https://www.linkedin.com/in/himanshu-sharma-programmer/',
    icon: FaLinkedin
  },
  {
    label: 'X / Twitter',
    handle: '@HimanshuSupDev',
    href: 'https://x.com/HimanshuSupDev',
    icon: FaXTwitter
  }
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 sm:py-28 px-5 sm:px-8 max-w-6xl mx-auto border-t border-[var(--border-subtle)]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left: Direct CTA */}
        <div className="reveal-section lg:col-span-7 space-y-6">
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--text-muted)]">
              04 / Contact
            </p>
            <h2
              id="contact-heading"
              className="font-display font-semibold tracking-[-0.03em] text-[var(--text-primary)] leading-[1.08]"
              style={{ fontSize: 'clamp(1.9rem, 3.6vw, 2.85rem)' }}
            >
              Let&apos;s build something solid.
            </h2>
            <p className="text-base text-[var(--text-secondary)] leading-[1.7] max-w-[52ch]">
              Open to full-time Full Stack and AI Engineering roles, as well as select product engineering work. Reach out directly by email or connect on GitHub and LinkedIn.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Magnetic>
              <a
                href={`mailto:${EMAIL}`}
                className="min-h-[44px] px-5 py-2.5 rounded-lg bg-[var(--text-primary)] text-[var(--bg-canvas)] hover:opacity-90 font-medium text-sm inline-flex items-center gap-2 transition-opacity"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                <span>{EMAIL}</span>
              </a>
            </Magnetic>

            <Magnetic>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="min-h-[44px] px-4 py-2.5 rounded-lg border border-[var(--border-strong)] bg-[var(--bg-surface)] hover:border-[var(--text-primary)] text-[var(--text-primary)] font-medium text-sm inline-flex items-center gap-2 transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" aria-hidden="true" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[var(--text-muted)]" aria-hidden="true" />
                    <span>Copy email</span>
                  </>
                )}
              </button>
            </Magnetic>
          </div>

          <span role="status" aria-live="polite" className="sr-only">
            {copied ? 'Email address copied to clipboard' : ''}
          </span>
        </div>

        {/* Right: Structured Social Directory */}
        <div className="reveal-section lg:col-span-5 border-t border-[var(--border-subtle)] divide-y divide-[var(--border-subtle)]">
          {SOCIAL_LINKS.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group min-h-[60px] py-4 flex items-center justify-between gap-4 text-sm hover:text-[var(--accent)] transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <Icon
                    className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] shrink-0 transition-colors"
                    aria-hidden="true"
                  />
                  <div className="min-w-0">
                    <p className="font-medium text-[var(--text-primary)]">
                      {item.label}
                    </p>
                    <p className="font-mono text-xs text-[var(--text-muted)] truncate">
                      {item.handle}
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
                  aria-hidden="true"
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
