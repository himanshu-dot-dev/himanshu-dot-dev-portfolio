import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

const WORDS = [
  "Hello",
  "Bonjour",
  "नमस्ते",
  "Ciao",
  "Olà",
  "やあ",
  "Hallo",
  "Hello"
];

export default function Preloader({ onComplete }) {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);
  const pathRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Disable body scroll while preloader is active
    document.body.style.overflow = 'hidden';

    // Cycle through words rapidly like Dennis Snellenberg
    if (index < WORDS.length - 1) {
      const timeout = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, index === 0 ? 320 : 180);
      return () => clearTimeout(timeout);
    }

    // When last word is reached, trigger exit animation
    const timeout = setTimeout(() => {
      const container = containerRef.current;
      const path = pathRef.current;
      const text = textRef.current;

      if (!container || !path) return;

      const width = window.innerWidth;
      const height = window.innerHeight;

      // Initial curved SVG path (drawn as curved downward like pulling a curtain)
      const initialCurve = `M0 0 L${width} 0 L${width} ${height} Q${width / 2} ${height + 300} 0 ${height} L0 0`;
      const targetCurve = `M0 0 L${width} 0 L${width} ${height} Q${width / 2} ${height} 0 ${height} L0 0`;

      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = '';
          if (onComplete) onComplete();
        }
      });

      // 1. Text fades out smoothly with slight upward drift
      tl.to(text, {
        y: -40,
        opacity: 0,
        duration: 0.4,
        ease: "power2.in"
      });

      // 2. Animate the SVG curve flat
      tl.to(path, {
        attr: { d: targetCurve },
        duration: 0.8,
        ease: "power3.inOut"
      }, "-=0.1");

      // 3. Slide the entire preloader panel up
      tl.to(container, {
        yPercent: -100,
        duration: 0.85,
        ease: "power4.inOut"
      }, "-=0.65");

    }, 300);

    return () => clearTimeout(timeout);
  }, [index, onComplete]);

  // Handle window dimensions for SVG path
  const [dimensions, setDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { width, height } = dimensions;
  const initialPath = `M0 0 L${width} 0 L${width} ${height} Q${width / 2} ${height + 300} 0 ${height} L0 0`;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#141517] text-white"
      style={{ height: 'calc(100vh + 300px)' }}
    >
      {/* Centered Cycling Word */}
      <div
        ref={textRef}
        className="relative z-10 flex items-center gap-3 select-none"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-lg shadow-cyan-400/50" />
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-slate-100 font-sans">
          {WORDS[index]}
        </h1>
      </div>

      {/* SVG Liquid Bottom Curve */}
      <svg
        className="absolute top-0 left-0 w-full pointer-events-none"
        style={{ height: 'calc(100vh + 300px)' }}
      >
        <path
          ref={pathRef}
          d={initialPath}
          fill="#141517"
        />
      </svg>
    </div>
  );
}
