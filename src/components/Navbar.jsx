import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-[#0b0c0e]/70 border-b border-white/[0.06] transition-all">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 h-20 flex items-center justify-between">
        
        {/* Editorial Brand signature */}
        <a 
          href="#" 
          className="group flex items-center gap-2 text-sm sm:text-base font-normal tracking-tight text-slate-300 hover:text-white transition"
        >
          <span className="text-slate-500 font-mono text-xs">©</span>
          <span className="font-medium text-slate-100 group-hover:text-cyan-400 transition">himanshu.dev</span>
          <span className="hidden sm:inline-block text-slate-500 text-xs font-mono ml-2">/ New Delhi, IN</span>
        </a>

        {/* Clean nav links */}
        <nav className="flex items-center gap-6 sm:gap-10 text-xs sm:text-sm font-medium text-slate-400">
          <a 
            href="#about" 
            className="hover:text-white transition relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-cyan-400 hover:after:w-full after:transition-all after:duration-300"
          >
            About
          </a>
          <a 
            href="#projects" 
            className="hover:text-white transition relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-cyan-400 hover:after:w-full after:transition-all after:duration-300"
          >
            Work
          </a>
          <a 
            href="#contact" 
            className="hover:text-white transition relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-cyan-400 hover:after:w-full after:transition-all after:duration-300"
          >
            Contact
          </a>
          <a
            href="https://github.com/himanshu-dot-dev"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-full border border-white/10 hover:border-white/30 bg-white/[0.03] hover:bg-white/[0.08] text-slate-200 text-xs font-medium transition"
          >
            GitHub ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
