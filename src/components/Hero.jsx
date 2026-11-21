import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import Magnetic from './Magnetic';

export default function Hero({ ready, onNavigate }) {
  const heroRef = useRef(null);
  const portraitRef = useRef(null);

  useEffect(() => {
    if (!ready) return undefined;

    const reducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion) return undefined;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-stagger',
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power3.out',
          clearProps: 'transform,opacity'
        }
      );

      gsap.fromTo(
        portraitRef.current,
        { y: 16, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.14,
          ease: 'power3.out',
          clearProps: 'transform,opacity'
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, [ready]);

  return (
    <section
      id="top"
      ref={heroRef}
      className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 px-5 sm:px-8 max-w-6xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        {/* Left column: editorial technical introduction */}
        <div className="lg:col-span-7 space-y-7">
          {/* Quiet metadata eyebrow (no SaaS pill chrome) */}
          <div className="hero-stagger flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-[var(--text-muted)]">
            <span className="inline-flex items-center gap-2 text-[var(--text-secondary)]">
              <span>Open to engineering roles &amp; select work</span>
            </span>
            <span aria-hidden="true" className="hidden sm:inline text-[var(--border-strong)]">·</span>
            <span>India / Mohali, Chandigarh</span>
          </div>

          {/* Primary Heading & Role */}
          <div className="space-y-3">
            <h1
              className="hero-stagger font-display font-semibold tracking-[-0.035em] leading-[1.04] text-[var(--text-primary)]"
              style={{ fontSize: 'clamp(2.65rem, 6vw, 4.75rem)' }}
            >
              Himanshu Sharma
            </h1>
            <p className="hero-stagger font-display text-lg sm:text-xl font-medium tracking-[-0.015em] text-[var(--text-secondary)]">
              Full Stack Developer &amp; AI Engineer
            </p>
          </div>

          {/* Grounded positioning statement */}
          <p className="hero-stagger text-base sm:text-[1.125rem] leading-[1.65] text-[var(--text-secondary)] max-w-[54ch]">
            I engineer full-stack web applications, practical AI systems, and local-first developer tools — including{' '}
            <a
              href="#work"
              onClick={(e) => onNavigate?.(e, '#work')}
              className="text-[var(--text-primary)] font-medium underline decoration-[var(--border-strong)] underline-offset-4 hover:decoration-[var(--accent)] transition-colors"
            >
              VersaRail AI
            </a>
            , a multi-provider desktop coding workstation.
          </p>

          {/* Actions */}
          <div className="hero-stagger flex flex-wrap items-center gap-3 pt-1">
            <Magnetic>
              <a
                href="#work"
                onClick={(e) => onNavigate?.(e, '#work')}
                className="group min-h-[44px] px-5 py-2.5 rounded-lg bg-[var(--text-primary)] text-[var(--bg-canvas)] hover:opacity-90 font-medium text-sm inline-flex items-center gap-2 transition-opacity"
              >
                <span>Explore VersaRail AI</span>
                <ArrowDown
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </Magnetic>

            <Magnetic>
              <a
                href="#contact"
                onClick={(e) => onNavigate?.(e, '#contact')}
                className="min-h-[44px] px-5 py-2.5 rounded-lg border border-[var(--border-strong)] bg-[var(--bg-surface)] hover:border-[var(--text-primary)] text-[var(--text-primary)] font-medium text-sm inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4 text-[var(--text-muted)]" aria-hidden="true" />
              </a>
            </Magnetic>
          </div>

          {/* Crisp technical focus strip */}
          <div className="hero-stagger pt-6 border-t border-[var(--border-subtle)] grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                Focus
              </p>
              <p className="text-sm font-medium text-[var(--text-primary)] mt-1">
                Full-Stack &amp; Desktop Apps
              </p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                AI Engineering
              </p>
              <p className="text-sm font-medium text-[var(--text-primary)] mt-1">
                RAG Pipelines &amp; Automation
              </p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                Flagship Build
              </p>
              <p className="text-sm font-medium text-[var(--text-primary)] mt-1">
                VersaRail AI Workstation
              </p>
            </div>
          </div>
        </div>

        {/* Right column: Clean, unencumbered portrait frame */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div
            ref={portraitRef}
            className="w-full max-w-[360px]"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-sm dark:shadow-none">
              <img
                src="/himanshu.jpg"
                alt="Portrait of Himanshu Sharma, Full Stack Developer and AI Engineer"
                width="360"
                height="450"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
