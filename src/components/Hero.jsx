import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function Hero({ ready }) {
  const heroRef = useRef(null);
  const imageCardRef = useRef(null);

  useEffect(() => {
    if (!ready) return;

    // Gentle staggered reveal once the preloader completes
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-reveal',
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          ease: 'power3.out',
          delay: 0.1
        }
      );

      gsap.fromTo(
        imageCardRef.current,
        { scale: 0.94, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          delay: 0.25
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, [ready]);

  // Subtle 3D tilt tracking mouse
  const handleMouseMove = (e) => {
    const card = imageCardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    gsap.to(card, {
      rotateY: x * 0.04,
      rotateX: -y * 0.04,
      transformPerspective: 900,
      duration: 0.5,
      ease: 'power2.out'
    });
  };

  const handleMouseLeave = () => {
    const card = imageCardRef.current;
    if (!card) return;
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.7,
      ease: 'power2.out'
    });
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-[90vh] pt-32 pb-16 flex items-center justify-center px-6 sm:px-10 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
        
        {/* Left Column: Editorial Headline & Bio */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Status Badge */}
          <div className="hero-reveal inline-flex items-center gap-2.5 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-slate-300 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for projects & roles</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Delhi, India</span>
          </div>

          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="hero-reveal text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.08]">
              Himanshu <br />
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-slate-200 to-slate-400">
                Sharma
              </span>
            </h1>

            <p className="hero-reveal text-lg sm:text-xl text-slate-400 font-normal leading-relaxed max-w-xl">
              Full Stack Developer & AI Engineer focused on building robust local-first desktop software, agentic workflows, and fast web systems.
            </p>
          </div>

          {/* Core Highlights / Statement */}
          <div className="hero-reveal border-l-2 border-slate-700 pl-4 py-1 text-sm text-slate-400 italic">
            "First, solve the problem. Then, write the code."
          </div>

          {/* Actions */}
          <div className="hero-reveal flex flex-wrap items-center gap-4 pt-2">
            <a 
              href="#projects"
              className="px-6 py-3.5 rounded-full bg-white text-slate-950 font-semibold text-sm hover:bg-slate-200 transition-all flex items-center gap-2 shadow-xl shadow-white/5"
            >
              <span>Explore Selected Work</span>
              <span>↓</span>
            </a>

            <a 
              href="#contact"
              className="px-6 py-3.5 rounded-full border border-white/15 hover:border-white/30 bg-transparent text-slate-300 hover:text-white font-medium text-sm transition"
            >
              Get in Touch
            </a>
          </div>

          {/* Quick Stats bar */}
          <div className="hero-reveal pt-6 border-t border-white/[0.08] flex items-center gap-8 sm:gap-12 text-xs font-mono text-slate-400">
            <div>
              <div className="text-white text-base font-semibold">Creator</div>
              <div className="text-slate-500">VersaRail AI Workstation</div>
            </div>
            <div>
              <div className="text-white text-base font-semibold">Specialization</div>
              <div className="text-slate-500">Electron • React • AI Agents</div>
            </div>
          </div>
        </div>

        {/* Right Column: Himanshu's Portrait */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div
            ref={imageCardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full max-w-[380px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl group cursor-pointer"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Ambient background glow behind photo */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-500/10 via-transparent to-indigo-500/10 rounded-3xl blur-xl pointer-events-none opacity-60 group-hover:opacity-100 transition duration-500" />

            {/* The Portrait Image */}
            <img 
              src="/himanshu.jpg" 
              alt="Himanshu Sharma" 
              className="w-full h-full object-cover object-top transition duration-700 ease-out group-hover:scale-[1.03]"
            />

            {/* Subtle Vignette overlay to seamlessly blend with dark background */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

            {/* Bottom Card Meta Details */}
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl backdrop-blur-md bg-slate-950/70 border border-white/10 flex items-center justify-between text-xs">
              <div>
                <p className="text-white font-medium">Himanshu Sharma</p>
                <p className="text-slate-400 text-[11px] font-mono">Full Stack & AI Engineer</p>
              </div>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 ring-4 ring-emerald-400/20" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
