import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function Navbar({ theme, onToggleTheme }) {
  const isDark = theme === 'dark';

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-[#f8f9fa]/80 dark:bg-[#0b0c0e]/70 border-b border-black/[0.06] dark:border-white/[0.06] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 h-20 flex items-center justify-between">
        
        {/* Editorial Brand signature */}
        <a 
          href="#" 
          className="group flex items-center gap-2 text-sm sm:text-base font-normal tracking-tight text-slate-800 dark:text-slate-300 hover:text-black dark:hover:text-white transition"
        >
          <span className="text-slate-400 dark:text-slate-500 font-mono text-xs">©</span>
          <span className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition">himanshu.dev</span>
          <span className="hidden sm:inline-block text-slate-400 dark:text-slate-500 text-xs font-mono ml-2">/ New Delhi, IN</span>
        </a>

        {/* Clean nav links & Theme Toggle */}
        <nav className="flex items-center gap-5 sm:gap-8 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
          <a 
            href="#projects" 
            className="hover:text-slate-950 dark:hover:text-white transition relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-cyan-500 dark:after:bg-cyan-400 hover:after:w-full after:transition-all after:duration-300"
          >
            Work
          </a>
          <a 
            href="#skills" 
            className="hover:text-slate-950 dark:hover:text-white transition relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-cyan-500 dark:after:bg-cyan-400 hover:after:w-full after:transition-all after:duration-300"
          >
            Skills
          </a>
          <a 
            href="#contact" 
            className="hover:text-slate-950 dark:hover:text-white transition relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-cyan-500 dark:after:bg-cyan-400 hover:after:w-full after:transition-all after:duration-300"
          >
            Contact
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="p-2.5 rounded-full border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.04] hover:bg-black/[0.08] dark:hover:bg-white/[0.08] text-slate-700 dark:text-slate-200 transition-all duration-300 cursor-pointer flex items-center justify-center hover:scale-105 active:scale-95"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? (
              <Sun 
                className="w-4 h-4 text-amber-400 transition-transform duration-300 rotate-0 hover:rotate-45 pointer-events-none" 
              />
            ) : (
              <Moon 
                className="w-4 h-4 text-black transition-transform duration-300 rotate-0 hover:-rotate-12 pointer-events-none" 
              />
            )}
          </button>

          <a
            href="https://github.com/himanshu-dot-dev"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-full border border-black/10 dark:border-white/10 hover:border-black/25 dark:hover:border-white/30 bg-black/[0.03] dark:bg-white/[0.03] hover:bg-black/[0.06] dark:hover:bg-white/[0.08] text-slate-800 dark:text-slate-200 text-xs font-medium transition"
          >
            GitHub ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
