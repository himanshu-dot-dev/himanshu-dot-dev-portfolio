import React, { useState } from 'react';
import { 
  Mail, 
  ExternalLink, 
  Code2, 
  Terminal, 
  Layers, 
  Cpu, 
  Database, 
  Wrench, 
  Sparkles, 
  ArrowUpRight, 
  Copy, 
  Check, 
  Send,
  FolderGit2
} from 'lucide-react';

// Brand SVG Icons
const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const TwitterIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const PROJECTS = [
  {
    id: 'versarail-ai',
    title: 'VersaRail AI',
    subtitle: 'Desktop AI Coding Workstation',
    description: 'Local-first multi-provider desktop AI coding workstation with per-provider token calculation, automated diff verification, and strict sandboxed security.',
    tags: ['Electron.js', 'React', 'TypeScript', 'Tailwind CSS', 'Desktop AI'],
    category: 'AI & Desktop',
    github: 'https://github.com/himanshu-dot-dev/versarail-ai',
    demo: 'https://github.com/himanshu-dot-dev/versarail-landing',
    featured: true,
    stats: 'Multi-Provider Engine • Diff Verification'
  },
  {
    id: 'agent-harness',
    title: 'Agent Harness',
    subtitle: 'Modern Desktop Agent Boilerplate',
    description: 'Electron.js boilerplate designed specifically for autonomous AI agent workflows, background task management, and secure IPC communication.',
    tags: ['Electron.js', 'Node.js', 'AI Agents', 'Architecture'],
    category: 'AI & Desktop',
    github: 'https://github.com/himanshu-dot-dev/agent-harness',
    featured: true,
    stats: 'Modular Boilerplate • Extensible IPC'
  },
  {
    id: 'versarail-landing',
    title: 'VersaRail Landing Website',
    subtitle: 'Showcase & Multi-OS Distribution',
    description: 'High-performance static showcase and multi-OS binary distribution landing site engineered for the VersaRail AI application ecosystem.',
    tags: ['JavaScript', 'Tailwind CSS', 'UI/UX Design', 'Performance'],
    category: 'Full Stack & Web',
    github: 'https://github.com/himanshu-dot-dev/versarail-landing',
    featured: false,
    stats: 'Zero-JS Fast Static • Responsive Layout'
  },
  {
    id: 'clothing-website-demo',
    title: 'E-Commerce Fashion Store',
    subtitle: 'Interactive Shopping Experience',
    description: 'Modern, responsive online clothing storefront featuring dynamic catalog filtering, cart interactions, and frictionless client-side checkout flows.',
    tags: ['JavaScript', 'CSS3', 'E-Commerce', 'Frontend'],
    category: 'Full Stack & Web',
    github: 'https://github.com/himanshu-dot-dev/clothing-website-demo',
    featured: false,
    stats: 'Dynamic Catalog • Smooth Mobile UI'
  }
];

const SKILL_CATEGORIES = [
  {
    title: 'Frontend Engineering',
    icon: Layers,
    color: 'from-blue-500/20 to-cyan-500/10 text-cyan-400 border-cyan-500/20',
    skills: ['React', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5 & CSS3', 'Vite', 'Responsive UI/UX']
  },
  {
    title: 'Backend & Systems',
    icon: Cpu,
    color: 'from-purple-500/20 to-pink-500/10 text-purple-400 border-purple-500/20',
    skills: ['Node.js', 'Express', 'PHP', 'Electron.js', 'REST APIs', 'IPC Architecture', 'Microservices']
  },
  {
    title: 'Databases & AI',
    icon: Database,
    color: 'from-emerald-500/20 to-teal-500/10 text-emerald-400 border-emerald-500/20',
    skills: ['MongoDB', 'Supabase', 'MySQL', 'SQLite', 'Pinecone Vector DB', 'LLM Integration', 'Prompt Optimization']
  },
  {
    title: 'Tools & DevOps',
    icon: Wrench,
    color: 'from-amber-500/20 to-orange-500/10 text-amber-400 border-amber-500/20',
    skills: ['Git & GitHub', 'Docker Desktop', 'VS Code', 'Vitest', 'Playwright', 'Claude Code / AI Tooling']
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('All');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const email = 'himanshudotdev2003@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  const filteredProjects = activeTab === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative overflow-hidden">
      {/* Background Gradients & Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-cyan-600/15 via-indigo-600/15 to-purple-600/15 blur-[120px] rounded-full pointer-events-none animate-glow" />

      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 font-bold text-lg tracking-tight hover:opacity-90 transition">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20">
              <Code2 className="w-5 h-5" />
            </span>
            <span className="bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent">
              himanshu<span className="text-cyan-400">.dev</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a 
              href="https://github.com/himanshu-dot-dev" 
              target="_blank" 
              rel="noreferrer"
              className="px-3.5 py-1.5 rounded-lg border border-slate-700/80 hover:border-slate-600 bg-slate-900/60 hover:bg-slate-800/60 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-2 transition"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a 
              href="#contact"
              className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold text-xs transition shadow-lg shadow-cyan-500/20"
            >
              Hire Me
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-28 relative z-10">
        
        {/* HERO SECTION */}
        <section className="text-center space-y-8 pt-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-medium backdrop-blur-sm shadow-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Open for High-Impact Roles & Innovative Projects</span>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Crafting <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Scalable Web & AI Systems</span> with Precision
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Hi, I'm <strong className="text-slate-100 font-semibold">Himanshu Sharma</strong>. Full Stack Developer, AI Engineer, and problem solver passionate about turning ambitious ideas into robust, production-grade reality.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a 
              href="#projects"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-sm transition-all transform hover:-translate-y-0.5 shadow-lg shadow-cyan-500/25 flex items-center gap-2"
            >
              <span>Explore My Work</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            
            <button
              onClick={handleCopyEmail}
              className="px-6 py-3 rounded-xl border border-slate-700/80 hover:border-slate-600 bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white font-medium text-sm transition-all flex items-center gap-2"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>

          {/* Social Links Bar */}
          <div className="pt-6 flex items-center justify-center gap-4 text-slate-400">
            <a 
              href="https://github.com/himanshu-dot-dev" 
              target="_blank" 
              rel="noreferrer" 
              className="p-2.5 rounded-lg border border-slate-800 bg-slate-900/50 hover:bg-slate-800 hover:text-cyan-400 transition"
              title="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/himanshu-sharma-programmer/" 
              target="_blank" 
              rel="noreferrer" 
              className="p-2.5 rounded-lg border border-slate-800 bg-slate-900/50 hover:bg-slate-800 hover:text-blue-400 transition"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a 
              href="https://x.com/HimanshuSupDev" 
              target="_blank" 
              rel="noreferrer" 
              className="p-2.5 rounded-lg border border-slate-800 bg-slate-900/50 hover:bg-slate-800 hover:text-sky-400 transition"
              title="Twitter / X"
            >
              <TwitterIcon className="w-5 h-5" />
            </a>
            <a 
              href={`mailto:${email}`} 
              className="p-2.5 rounded-lg border border-slate-800 bg-slate-900/50 hover:bg-slate-800 hover:text-rose-400 transition"
              title="Send Direct Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* ABOUT & PHILOSOPHY SECTION */}
        <section id="about" className="space-y-8 scroll-mt-24">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              <Terminal className="w-5 h-5" />
            </span>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white">About Me</h2>
              <p className="text-sm text-slate-400">Engineering philosophy and background</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Developer Quote & Highlights */}
            <div className="lg:col-span-5 p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  <Sparkles className="w-4 h-4" />
                  Core Motto
                </div>
                <blockquote className="text-xl font-semibold text-slate-200 italic border-l-2 border-cyan-400 pl-4 py-1">
                  "First, solve the problem. Then, write the code."
                </blockquote>
                <p className="text-sm text-slate-400 leading-relaxed">
                  I specialize in full-stack engineering with an emphasis on local-first architectures, AI workstation tooling, and high-performance user interfaces. When I'm not architecting systems, you'll find me training in MMA or exploring cutting-edge AI research.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-800/80">
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/60">
                  <div className="text-xs text-slate-400">Focus Areas</div>
                  <div className="text-sm font-semibold text-cyan-300 mt-0.5">AI Apps & Full Stack</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/60">
                  <div className="text-xs text-slate-400">Location</div>
                  <div className="text-sm font-semibold text-slate-200 mt-0.5">India (Remote)</div>
                </div>
              </div>
            </div>

            {/* Interactive Code Spec */}
            <div className="lg:col-span-7 rounded-2xl border border-slate-800 bg-slate-950/80 overflow-hidden shadow-2xl flex flex-col font-mono text-xs">
              <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-slate-400 text-[11px]">developer.config.ts</span>
                </div>
                <span className="text-[11px] text-cyan-400/80 font-semibold">TypeScript</span>
              </div>
              <div className="p-5 text-slate-300 overflow-x-auto leading-relaxed">
                <p><span className="text-purple-400">export const</span> <span className="text-yellow-300">himanshuSharma</span>: <span className="text-cyan-400">DeveloperProfile</span> = &#123;</p>
                <p className="pl-4"><span className="text-slate-400">name</span>: <span className="text-emerald-300">'Himanshu Sharma'</span>,</p>
                <p className="pl-4"><span className="text-slate-400">roles</span>: [<span className="text-emerald-300">'Full Stack Developer'</span>, <span className="text-emerald-300">'AI Workstation Engineer'</span>],</p>
                <p className="pl-4"><span className="text-slate-400">stack</span>: &#123;</p>
                <p className="pl-8"><span className="text-slate-400">core</span>: [<span className="text-emerald-300">'TypeScript'</span>, <span className="text-emerald-300">'JavaScript'</span>, <span className="text-emerald-300">'Node.js'</span>, <span className="text-emerald-300">'PHP'</span>],</p>
                <p className="pl-8"><span className="text-slate-400">client</span>: [<span className="text-emerald-300">'React'</span>, <span className="text-emerald-300">'Tailwind CSS'</span>, <span className="text-emerald-300">'Electron'</span>],</p>
                <p className="pl-8"><span className="text-slate-400">data</span>: [<span className="text-emerald-300">'Supabase'</span>, <span className="text-emerald-300">'MongoDB'</span>, <span className="text-emerald-300">'MySQL'</span>, <span className="text-emerald-300">'Pinecone'</span>]</p>
                <p className="pl-4">&#125;,</p>
                <p className="pl-4"><span className="text-slate-400">passions</span>: [<span className="text-emerald-300">'Autonomous Agentic Workflows'</span>, <span className="text-emerald-300">'MMA 🥊'</span>, <span className="text-emerald-300">'Coffee ☕'</span>],</p>
                <p className="pl-4"><span className="text-slate-400">readyToBuild</span>: <span className="text-cyan-400">true</span></p>
                <p>&#125;;</p>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS MATRIX */}
        <section id="skills" className="space-y-8 scroll-mt-24">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <Cpu className="w-5 h-5" />
            </span>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white">Technical Arsenal</h2>
              <p className="text-sm text-slate-400">Tools, frameworks, and technologies I leverage to solve problems</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SKILL_CATEGORIES.map((category, idx) => {
              const Icon = category.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl border border-slate-800 bg-slate-900/30 hover:bg-slate-900/60 transition duration-200 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-2.5">
                      <span className={`p-2 rounded-lg border bg-gradient-to-br ${category.color}`}>
                        <Icon className="w-4 h-4" />
                      </span>
                      <h3 className="font-semibold text-slate-200 text-sm tracking-tight">{category.title}</h3>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {category.skills.map((skill, sIdx) => (
                        <span 
                          key={sIdx}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-800/80 border border-slate-700/60 text-slate-300 hover:text-white hover:border-slate-600 transition"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* FEATURED PROJECTS */}
        <section id="projects" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400">
                <FolderGit2 className="w-5 h-5" />
              </span>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-white">Featured Projects</h2>
                <p className="text-sm text-slate-400">Real-world applications and open-source contributions</p>
              </div>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800 self-start sm:self-auto text-xs">
              {['All', 'AI & Desktop', 'Full Stack & Web'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1.5 rounded-lg font-medium transition ${
                    activeTab === tab 
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="group p-6 sm:p-7 rounded-2xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900/70 hover:border-slate-700 transition duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">{project.subtitle}</span>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition mt-0.5">{project.title}</h3>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-slate-800 border border-slate-700 text-slate-300 whitespace-nowrap">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="px-2.5 py-0.5 rounded text-[11px] font-medium bg-slate-950/70 border border-slate-800/80 text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono text-[11px] text-slate-500">{project.stats}</span>
                  <div className="flex items-center gap-3">
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-slate-300 hover:text-cyan-400 flex items-center gap-1 font-semibold transition"
                      >
                        <span>Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-slate-300 hover:text-white flex items-center gap-1 font-semibold transition"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Repo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT & GET IN TOUCH */}
        <section id="contact" className="space-y-8 scroll-mt-24">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <Mail className="w-5 h-5" />
            </span>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white">Let's Connect</h2>
              <p className="text-sm text-slate-400">Have an idea, project, or opportunity? Drop me a message.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Direct Info Card */}
            <div className="lg:col-span-5 p-6 sm:p-7 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm space-y-6">
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white">Contact Information</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  I'm always open to discussing new software challenges, full-time positions, freelance contracts, or AI workstation innovations.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div 
                  onClick={handleCopyEmail}
                  className="p-3.5 rounded-xl border border-slate-800 bg-slate-950/60 hover:bg-slate-900 hover:border-slate-700 cursor-pointer transition flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <span className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                      <Mail className="w-4 h-4" />
                    </span>
                    <div>
                      <div className="text-[11px] text-slate-400">Direct Email</div>
                      <div className="text-xs font-semibold text-slate-200 group-hover:text-cyan-300 transition">{email}</div>
                    </div>
                  </div>
                  <span className="text-slate-500 group-hover:text-slate-300">
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </span>
                </div>

                <a 
                  href="https://www.linkedin.com/in/himanshu-sharma-programmer/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3.5 rounded-xl border border-slate-800 bg-slate-950/60 hover:bg-slate-900 hover:border-slate-700 transition flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <span className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                      <LinkedinIcon className="w-4 h-4" />
                    </span>
                    <div>
                      <div className="text-[11px] text-slate-400">Professional Network</div>
                      <div className="text-xs font-semibold text-slate-200 group-hover:text-blue-300 transition">linkedin.com/in/himanshu-sharma-programmer</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-slate-300" />
                </a>

                <a 
                  href="https://github.com/himanshu-dot-dev" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3.5 rounded-xl border border-slate-800 bg-slate-950/60 hover:bg-slate-900 hover:border-slate-700 transition flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <span className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                      <GithubIcon className="w-4 h-4" />
                    </span>
                    <div>
                      <div className="text-[11px] text-slate-400">GitHub Repositories</div>
                      <div className="text-xs font-semibold text-slate-200 group-hover:text-purple-300 transition">github.com/himanshu-dot-dev</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-slate-300" />
                </a>
              </div>
            </div>

            {/* Quick Inquiry Form */}
            <div className="lg:col-span-7 p-6 sm:p-7 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm">
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">Your Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none text-slate-100 text-sm placeholder:text-slate-600 transition"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">Your Email</label>
                    <input 
                      type="email" 
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none text-slate-100 text-sm placeholder:text-slate-600 transition"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">Message / Inquiry</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="Tell me about your project, timeline, or open role..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none text-slate-100 text-sm placeholder:text-slate-600 transition resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Opens your mail client directly</span>
                  <button 
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-sm transition shadow-lg shadow-cyan-500/20 flex items-center gap-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>

                {formSubmitted && (
                  <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs text-center">
                    Mail draft triggered! Looking forward to connecting.
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800/80 bg-slate-950/80 py-8 relative z-10 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Himanshu Sharma. All rights reserved.</p>
          <p className="flex items-center gap-1 font-mono text-[11px] text-slate-400">
            <span>Built with React, Vite & Tailwind CSS</span>
          </p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/himanshu-dot-dev" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition">GitHub</a>
            <a href="https://www.linkedin.com/in/himanshu-sharma-programmer/" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">LinkedIn</a>
            <a href="https://x.com/HimanshuSupDev" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
