import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TubesCursor from './components/TubesCursor';

gsap.registerPlugin(ScrollTrigger);

// Authentic Project Data
const FEATURED_PROJECTS = [
  {
    id: 'versarail-ai',
    title: 'VersaRail AI',
    category: 'Workstation & Desktop App',
    description: 'Local-first multi-provider desktop AI coding workstation featuring token calculation engines, sandboxed execution, and diff-first security.',
    tags: ['Electron.js', 'React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/himanshu-dot-dev/versarail-ai',
    demo: 'https://github.com/himanshu-dot-dev/versarail-landing'
  },
  {
    id: 'agent-harness',
    title: 'Agent Harness',
    category: 'AI Tooling & Boilerplate',
    description: 'Autonomous AI agent execution boilerplate tailored for multi-agent orchestration, resilient background processes, and IPC messaging.',
    tags: ['Electron.js', 'Node.js', 'Autonomous Agents'],
    github: 'https://github.com/himanshu-dot-dev/agent-harness'
  },
  {
    id: 'versarail-landing',
    title: 'VersaRail Showcase',
    category: 'Web & Distribution',
    description: 'High-speed static showcase and multi-OS binary download site for VersaRail AI.',
    tags: ['Tailwind CSS', 'Static Web', 'UI/UX'],
    github: 'https://github.com/himanshu-dot-dev/versarail-landing'
  },
  {
    id: 'clothing-website-demo',
    title: 'Clothing Storefront',
    category: 'Interactive E-Commerce',
    description: 'Modern responsive storefront with dynamic catalog browsing and fluid interactive cart UI.',
    tags: ['JavaScript', 'CSS3', 'E-Commerce'],
    github: 'https://github.com/himanshu-dot-dev/clothing-website-demo'
  }
];

export default function App() {
  const [preloaderComplete, setPreloaderComplete] = useState(false);

  useEffect(() => {
    // Initialize Lenis smooth inertia scrolling
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });

    lenis.on('scroll', ScrollTrigger.update);
    const tickerCallback = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-[#0b0c0e] text-slate-100 min-h-screen selection:bg-white selection:text-black relative">
      
      {/* 3D Glowing Neon Tubes Cursor (Active exclusively on the background) */}
      <TubesCursor />

      {/* 1. Dennis Snellenberg Multilingual Preloader */}
      {!preloaderComplete && (
        <Preloader onComplete={() => setPreloaderComplete(true)} />
      )}

      {/* 2. Minimalist Navbar */}
      <Navbar />

      {/* 3. Hero Section featuring Portrait & Editorial Typography */}
      <main className="relative z-10">
        <Hero ready={preloaderComplete} />

        {/* 4. Selected Work Section (Clean, Spacious Editorial Grid) */}
        <section id="projects" className="py-24 px-6 sm:px-10 max-w-7xl mx-auto border-t border-white/[0.08]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-2">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Selected Work</span>
              <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight">
                Featured Projects
              </h2>
            </div>
            <p className="text-slate-400 text-sm max-w-md font-normal leading-relaxed">
              A curated selection of real desktop software, AI agent systems, and web projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FEATURED_PROJECTS.map((project, idx) => (
              <div 
                key={project.id}
                className="group p-8 rounded-3xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                    <span>0{idx + 1}</span>
                    <span className="text-slate-400">{project.category}</span>
                  </div>

                  <h3 className="text-2xl font-semibold text-white group-hover:text-cyan-400 transition">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] border border-white/[0.06] text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between text-xs">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white font-medium transition"
                  >
                    <span>View Repository</span>
                    <span>↗</span>
                  </a>

                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-slate-400 hover:text-cyan-400 transition"
                    >
                      Live Demo ↗
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Clean Contact Footer */}
        <section id="contact" className="py-24 px-6 sm:px-10 max-w-7xl mx-auto border-t border-white/[0.08] text-center space-y-8">
          <div className="space-y-4 max-w-2xl mx-auto">
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Get In Touch</span>
            <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight">
              Have an ambitious project in mind?
            </h2>
            <p className="text-slate-400 text-sm">
              I am open to full-time engineering roles, high-impact contract work, or AI collaborations.
            </p>
          </div>

          <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
            <a 
              href="mailto:himanshudotdev2003@gmail.com" 
              className="px-8 py-4 rounded-full bg-white hover:bg-slate-200 text-slate-950 font-semibold text-sm transition-all shadow-xl"
            >
              himanshudotdev2003@gmail.com ↗
            </a>
            <a 
              href="https://www.linkedin.com/in/himanshu-sharma-programmer/" 
              target="_blank" 
              rel="noreferrer"
              className="px-6 py-4 rounded-full border border-white/15 hover:border-white/30 text-slate-300 hover:text-white text-sm font-medium transition"
            >
              LinkedIn ↗
            </a>
            <a 
              href="https://github.com/himanshu-dot-dev" 
              target="_blank" 
              rel="noreferrer"
              className="px-6 py-4 rounded-full border border-white/15 hover:border-white/30 text-slate-300 hover:text-white text-sm font-medium transition"
            >
              GitHub ↗
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 sm:px-10 max-w-7xl mx-auto border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
        <p>© {new Date().getFullYear()} Himanshu Sharma</p>
        <p>Built with React, Vite, GSAP & Lenis</p>
      </footer>
    </div>
  );
}
