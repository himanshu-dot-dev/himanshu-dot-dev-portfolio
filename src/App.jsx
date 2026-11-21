import React, { useCallback, useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import AmbientPointer from './components/AmbientPointer';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedWork from './components/FeaturedWork';
import Experience from './components/Experience';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

gsap.registerPlugin(ScrollTrigger);

const CURRENT_YEAR = new Date().getFullYear();

export default function App() {
  const [preloaderComplete, setPreloaderComplete] = useState(false);
  const lenisRef = useRef(null);
  const mainRef = useRef(null);

  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio_theme');
      if (saved === 'dark' || saved === 'light') return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('portfolio_theme', theme);
    const meta = document.getElementById('theme-color-meta');
    if (meta) {
      meta.setAttribute('content', theme === 'dark' ? '#0b0c0e' : '#f7f7f5');
    }
  }, [theme]);

  const handleToggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  const handlePreloaderComplete = useCallback(() => {
    setPreloaderComplete(true);
  }, []);

  // Initialize Lenis smooth scroll (disabled automatically when reduced-motion is preferred)
  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return undefined;

    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });

    lenisRef.current = lenis;
    lenis.on('scroll', ScrollTrigger.update);

    const tickerCallback = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Subtle once-only scroll reveals for sections below the fold
  useEffect(() => {
    if (!preloaderComplete || !mainRef.current) return undefined;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return undefined;

    const ctx = gsap.context(() => {
      const nodes = gsap.utils.toArray('.reveal-section');
      nodes.forEach((node) => {
        gsap.fromTo(
          node,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: node,
              start: 'top 88%',
              once: true
            }
          }
        );
      });
    }, mainRef);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, [preloaderComplete]);

  // Pause Lenis while a project case study drawer is open
  const handleModalChange = useCallback((isOpen) => {
    if (!lenisRef.current) return;
    if (isOpen) {
      lenisRef.current.stop();
    } else {
      lenisRef.current.start();
    }
  }, []);

  // Smooth anchor scrolling via Lenis (or native jump if reduced motion)
  const handleNavigate = useCallback((e, href) => {
    if (!href || !href.startsWith('#')) return;
    const target = href === '#top' ? 0 : document.querySelector(href);
    if (target === null) return;
    e.preventDefault();

    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, { offset: href === '#top' ? 0 : -72 });
    } else if (typeof target === 'number') {
      window.scrollTo({ top: 0 });
    } else {
      target.scrollIntoView({ block: 'start' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg-canvas)] text-[var(--text-primary)] relative transition-colors duration-200">
      {/* Skip to content link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[120] focus:px-4 focus:py-2.5 focus:rounded-lg focus:bg-[var(--text-primary)] focus:text-[var(--bg-canvas)] focus:text-sm focus:font-medium"
      >
        Skip to main content
      </a>

      {/* Subtle architectural background grid (hero atmosphere only) */}
      <div
        aria-hidden="true"
        className="arch-grid pointer-events-none fixed inset-x-0 top-0 h-[560px] z-0"
      />

      {/* Lightweight CSS pointer ambient highlight */}
      <AmbientPointer />

      {/* Theme-aware, original architectural preloader */}
      {!preloaderComplete && <Preloader onComplete={handlePreloaderComplete} />}

      {/* Minimalist precision navigation */}
      <Navbar
        theme={theme}
        onToggleTheme={handleToggleTheme}
        onNavigate={handleNavigate}
      />

      {/* Main Content */}
      <main id="main-content" ref={mainRef} className="relative z-10">
        <Hero ready={preloaderComplete} onNavigate={handleNavigate} />
        <FeaturedWork theme={theme} onModalChange={handleModalChange} />
        <Experience />
        <About />
        <Skills />
        <Contact />
      </main>

      {/* Clean Colophon Footer */}
      <footer className="relative z-10 py-8 px-5 sm:px-8 max-w-6xl mx-auto border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--text-muted)]">
        <p>© {CURRENT_YEAR} Himanshu Sharma · India / Mohali, Chandigarh</p>
        <a
          href="#top"
          onClick={(e) => handleNavigate(e, '#top')}
          className="min-h-[36px] inline-flex items-center gap-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
        >
          <span>Back to top</span>
          <span aria-hidden="true">↑</span>
        </a>
      </footer>
    </div>
  );
}
