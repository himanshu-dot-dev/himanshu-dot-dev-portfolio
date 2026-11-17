import React from 'react';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiElectron,
  SiThreedotjs,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiFastapi,
  SiMongodb,
  SiPostgresql,
  SiSqlite,
  SiRedis,
  SiPrisma,
  SiSupabase,
  SiGit,
  SiGithub,
  SiDocker,
  SiLinux,
  SiVite,
  SiPostman,
  SiPnpm
} from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';

const SKILL_CATEGORIES = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Modern component architectures, interactive physics, and design systems.',
    skills: [
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', tag: 'ESNext' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', tag: 'Typed' },
      { name: 'React', icon: SiReact, color: '#61DAFB', tag: 'Core' },
      { name: 'Next.js', icon: SiNextdotjs, color: 'currentColor', tag: 'SSR / SSG' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', tag: 'Styling' },
      { name: 'Electron.js', icon: SiElectron, color: '#47848F', tag: 'Desktop UI' },
      { name: 'Three.js / WebGL', icon: SiThreedotjs, color: 'currentColor', tag: '3D Graphics' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26', tag: 'Semantic' },
      { name: 'CSS3', icon: SiCss, color: '#1572B6', tag: 'Layout' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend Engineering',
    description: 'High-throughput runtimes, asynchronous microservices, and IPC messaging.',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E', tag: 'Runtime' },
      { name: 'Express.js', icon: SiExpress, color: 'currentColor', tag: 'REST APIs' },
      { name: 'Python', icon: SiPython, color: '#3776AB', tag: 'AI & Systems' },
      { name: 'FastAPI', icon: SiFastapi, color: '#009688', tag: 'Async API' },
      { name: 'Electron IPC', icon: SiElectron, color: '#47848F', tag: 'Desktop Engine' }
    ]
  },
  {
    id: 'database',
    title: 'Databases & Storage',
    description: 'ACID-compliant relational schemas, document stores, and in-memory caches.',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248', tag: 'NoSQL' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', tag: 'Relational' },
      { name: 'SQLite', icon: SiSqlite, color: '#003B57', tag: 'Embedded' },
      { name: 'Redis', icon: SiRedis, color: '#DC382D', tag: 'Cache & Queue' },
      { name: 'Prisma ORM', icon: SiPrisma, color: 'currentColor', tag: 'Type-Safe ORM' },
      { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E', tag: 'BaaS / Postgres' }
    ]
  },
  {
    id: 'tools',
    title: 'Developer Tools & DevOps',
    description: 'Version control workflows, build tooling, containerization, and automation.',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032', tag: 'VCS' },
      { name: 'GitHub', icon: SiGithub, color: 'currentColor', tag: 'CI/CD' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED', tag: 'Containers' },
      { name: 'Linux', icon: SiLinux, color: '#FCC624', tag: 'Kernel / OS' },
      { name: 'VS Code', icon: TbBrandVscode, color: '#007ACC', tag: 'Editor' },
      { name: 'Vite', icon: SiVite, color: '#646CFF', tag: 'Bundler' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37', tag: 'API Testing' },
      { name: 'pnpm / npm', icon: SiPnpm, color: '#F69220', tag: 'Pkg Manager' }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 sm:px-10 max-w-7xl mx-auto border-t border-black/[0.08] dark:border-white/[0.08] transition-colors">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="space-y-2">
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest">Technical Competencies</span>
          <h2 className="text-3xl sm:text-5xl font-light text-slate-900 dark:text-white tracking-tight transition-colors">
            Skills & Stack
          </h2>
        </div>
        <p className="text-slate-600 dark:text-slate-400 text-sm max-w-md font-normal leading-relaxed transition-colors">
          Languages, frameworks, databases, and tooling applied across desktop workstation engineering and modern web systems.
        </p>
      </div>

      {/* 4 Categorized Columns / Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {SKILL_CATEGORIES.map((category) => (
          <div
            key={category.id}
            className="p-8 sm:p-10 rounded-3xl border border-black/[0.08] dark:border-white/[0.08] bg-white/90 dark:bg-white/[0.02] hover:bg-white dark:hover:bg-white/[0.04] hover:border-black/20 dark:hover:border-white/20 shadow-sm hover:shadow-xl dark:shadow-none dark:hover:shadow-cyan-500/5 transition-all duration-300 flex flex-col justify-between space-y-8 backdrop-blur-sm"
          >
            {/* Category Header */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-950 dark:text-white tracking-tight transition-colors">
                  {category.title}
                </h3>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  {category.skills.length} skills
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
                {category.description}
              </p>
            </div>

            {/* Skills Pills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {category.skills.map((skill) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="group/skill flex items-center gap-3 p-3 rounded-2xl bg-black/[0.03] dark:bg-white/[0.03] hover:bg-black/[0.06] dark:hover:bg-white/[0.07] border border-black/[0.06] dark:border-white/[0.06] hover:border-black/15 dark:hover:border-white/20 transition-all duration-200 cursor-default"
                  >
                    <div 
                      className="p-2 rounded-xl bg-white dark:bg-black/40 shadow-sm border border-black/[0.04] dark:border-white/[0.06] flex items-center justify-center shrink-0 group-hover/skill:scale-110 transition-transform duration-200"
                    >
                      <IconComponent
                        className="w-4 h-4 transition-colors"
                        style={{ color: skill.color === 'currentColor' ? undefined : skill.color }}
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold text-slate-900 dark:text-slate-100 truncate">
                        {skill.name}
                      </p>
                      <p className="text-[10px] font-mono text-slate-500 dark:text-slate-400 truncate">
                        {skill.tag}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
