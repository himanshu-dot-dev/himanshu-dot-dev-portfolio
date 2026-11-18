import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Subtle magnetic micro-pull wrapper powered by GSAP quickTo.
 * Automatically disables on coarse/touch pointers and under prefers-reduced-motion.
 */
export default function Magnetic({ children, strength = 0.18, maxOffset = 7, className = '' }) {
  const wrapperRef = useRef(null);
  const quickXRef = useRef(null);
  const quickYRef = useRef(null);
  const enabledRef = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !wrapperRef.current) return undefined;
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || reducedMotion) return undefined;

    enabledRef.current = true;
    quickXRef.current = gsap.quickTo(wrapperRef.current, 'x', {
      duration: 0.42,
      ease: 'power3.out'
    });
    quickYRef.current = gsap.quickTo(wrapperRef.current, 'y', {
      duration: 0.42,
      ease: 'power3.out'
    });

    const node = wrapperRef.current;
    return () => {
      enabledRef.current = false;
      gsap.set(node, { x: 0, y: 0 });
    };
  }, []);

  const handlePointerMove = (e) => {
    if (!enabledRef.current || !wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    const relX = (e.clientX - (rect.left + rect.width / 2)) * strength;
    const relY = (e.clientY - (rect.top + rect.height / 2)) * strength;
    const clampedX = Math.max(-maxOffset, Math.min(maxOffset, relX));
    const clampedY = Math.max(-maxOffset, Math.min(maxOffset, relY));
    quickXRef.current?.(clampedX);
    quickYRef.current?.(clampedY);
  };

  const handlePointerLeave = () => {
    if (!enabledRef.current) return;
    quickXRef.current?.(0);
    quickYRef.current?.(0);
  };

  return (
    <span
      ref={wrapperRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`inline-flex ${className}`}
    >
      {children}
    </span>
  );
}
