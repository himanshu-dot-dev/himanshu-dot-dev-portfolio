import React, { useEffect, useRef } from 'react';

/**
 * Illuminated Blueprint Grid + Subtle Ambient Spotlight.
 * Desktop pointer-only, zero idle CPU/GPU loop (updates via rAF only during pointermove),
 * and disabled automatically on touch devices or prefers-reduced-motion.
 */
export default function AmbientPointer() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || reducedMotion) return undefined;

    const el = containerRef.current;
    if (!el) return undefined;

    let rafId = null;
    let nextX = -400;
    let nextY = -400;

    const update = () => {
      rafId = null;
      el.style.setProperty('--mx', `${nextX}px`);
      el.style.setProperty('--my', `${nextY}px`);
      el.style.opacity = '1';
    };

    const handleMove = (e) => {
      nextX = e.clientX;
      nextY = e.clientY;
      if (rafId === null) {
        rafId = window.requestAnimationFrame(update);
      }
    };

    const handleLeave = () => {
      el.style.opacity = '0';
    };

    window.addEventListener('pointermove', handleMove, { passive: true });
    document.addEventListener('pointerleave', handleLeave);

    return () => {
      window.removeEventListener('pointermove', handleMove);
      document.removeEventListener('pointerleave', handleLeave);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-0 transition-opacity duration-300"
    >
      {/* Illuminated 64px blueprint hairlines around cursor */}
      <div className="absolute inset-0 arch-grid-lit" />

      {/* Soft radial surface illumination */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(380px circle at var(--mx, -400px) var(--my, -400px), var(--pointer-glow), transparent 72%)'
        }}
      />
    </div>
  );
}
