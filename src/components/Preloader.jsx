import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const GREETINGS = [
  { word: 'Hello', code: 'EN' },
  { word: 'नमस्ते', code: 'HI' },
  { word: 'Bonjour', code: 'FR' },
  { word: 'Ciao', code: 'IT' },
  { word: 'Olà', code: 'PT' },
  { word: 'やあ', code: 'JA' },
  { word: 'Hallo', code: 'DE' },
  { word: 'Hello', code: 'EN' }
];

export default function Preloader({ onComplete }) {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const overlayRef = useRef(null);
  const contentRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    const reducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion) {
      onComplete?.();
      return undefined;
    }

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Sync greeting steps, tabular progress counter, and 1px hairline bar cleanly
    const stepDurations = [240, 145, 130, 130, 130, 130, 130];
    const totalCycleMs = stepDurations.reduce((sum, ms) => sum + ms, 0) + 180;
    const totalCycleSec = totalCycleMs / 1000;

    const timeouts = [];
    let elapsed = 0;

    stepDurations.forEach((delay, stepIdx) => {
      elapsed += delay;
      const id = window.setTimeout(() => {
        setIndex(stepIdx + 1);
      }, elapsed);
      timeouts.push(id);
    });

    const counter = { value: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = prevOverflow;
        onComplete?.();
      }
    });

    tl.to(counter, {
      value: 100,
      duration: totalCycleSec,
      ease: 'power1.inOut',
      onUpdate: () => {
        setProgress(Math.round(counter.value));
      }
    });

    tl.to(
      barRef.current,
      {
        scaleX: 1,
        duration: totalCycleSec,
        ease: 'power1.inOut'
      },
      0
    );

    tl.to(contentRef.current, {
      y: -16,
      opacity: 0,
      duration: 0.26,
      ease: 'power2.in'
    });

    tl.to(
      overlayRef.current,
      {
        yPercent: -100,
        duration: 0.52,
        ease: 'power4.inOut'
      },
      '-=0.12'
    );

    return () => {
      timeouts.forEach((id) => window.clearTimeout(id));
      tl.kill();
      document.body.style.overflow = prevOverflow;
    };
  }, [onComplete]);

  const current = GREETINGS[index] || GREETINGS[0];

  return (
    <div
      ref={overlayRef}
      role="status"
      aria-label="Loading portfolio"
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-[var(--bg-canvas)] text-[var(--text-primary)] px-6 sm:px-10 py-8 border-b border-[var(--border-subtle)]"
    >
      {/* Top bar */}
      <div className="max-w-6xl w-full mx-auto flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
        <span className="inline-flex items-center gap-2.5">
          <span className="inline-block w-2 h-2 bg-[var(--accent)] rounded-[2px]" />
          <span>himanshu.dev</span>
        </span>
        <span>CHANDIGARH / IN</span>
      </div>

      {/* Center multilingual greeting & precision hairline */}
      <div ref={contentRef} className="max-w-6xl w-full mx-auto space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div className="space-y-2">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--text-muted)] inline-flex items-center gap-2">
              <span className="text-[var(--accent)]">{current.code}</span>
              <span aria-hidden="true">/</span>
              <span>Himanshu Sharma</span>
            </p>
            <p className="font-display text-4xl sm:text-6xl font-semibold tracking-[-0.035em] leading-none text-[var(--text-primary)] select-none min-h-[1.15em]">
              {current.word}
            </p>
          </div>

          <span className="font-mono text-xl sm:text-3xl font-medium tabular-nums tracking-tight text-[var(--text-muted)]">
            {String(progress).padStart(2, '0')}
          </span>
        </div>

        <div className="w-full h-[1px] bg-[var(--border-subtle)] overflow-hidden">
          <div
            ref={barRef}
            className="h-full w-full bg-[var(--text-primary)] origin-left scale-x-0"
          />
        </div>
      </div>

      {/* Bottom meta */}
      <div className="max-w-6xl w-full mx-auto flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
        <span>Full Stack Developer &amp; AI Engineer</span>
        <span className="tabular-nums">
          {String(index + 1).padStart(2, '0')} / {String(GREETINGS.length).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
}
