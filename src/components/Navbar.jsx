import React, { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X, ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import Magnetic from './Magnetic';

const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar({ theme, onToggleTheme, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isDark = theme === 'dark';

  useEffect(() => {
    if (!menuOpen) return undefined;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  const handleLinkClick = (e, href) => {
    setMenuOpen(false);
    onNavigate?.(e, href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-[var(--border-subtle)] bg-[var(--bg-canvas)]/88 backdrop-blur-md transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 sm:h-18 flex items-center justify-between gap-4">
        {/* Brand */}
        <a
          href="#top"
          onClick={(e) => handleLinkClick(e, '#top')}
          className="group inline-flex items-center gap-2.5 min-h-[44px] text-sm font-medium tracking-tight text-[var(--text-primary)]"
        >
          <span
            aria-hidden="true"
            className="w-6 h-6 rounded-[6px] border border-[var(--border-strong)] bg-[var(--bg-surface)] flex items-center justify-center font-mono text-[11px] font-medium text-[var(--text-primary)] group-hover:border-[var(--accent)] transition-colors"
          >
            H
          </span>
          <span className="font-display font-semibold tracking-[-0.02em]">
            himanshu.dev
          </span>
          <span className="hidden lg:inline-flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] ml-1">
            <span aria-hidden="true" className="text-[var(--border-strong)]">/</span>
            <span>Chandigarh, IN</span>
          </span>
        </a>

        {/* Desktop navigation */}
        <nav aria-label="Primary" className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors py-1"
            >
              {item.label}
            </a>
          ))}

          <span aria-hidden="true" className="h-4 w-[1px] bg-[var(--border-subtle)]" />

          <a
            href="https://github.com/himanshu-dot-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors py-1"
          >
            <FaGithub className="w-3.5 h-3.5" aria-hidden="true" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)]" aria-hidden="true" />
          </a>

          <Magnetic strength={0.22} maxOffset={5}>
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
              title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
              className="w-10 h-10 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--border-strong)] text-[var(--text-primary)] inline-flex items-center justify-center transition-colors cursor-pointer"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400" aria-hidden="true" />
              ) : (
                <Moon className="w-4 h-4 text-[var(--text-primary)]" aria-hidden="true" />
              )}
            </button>
          </Magnetic>
        </nav>

        {/* Mobile controls (>= 44x44 touch targets) */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            className="w-11 h-11 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)] inline-flex items-center justify-center transition-colors cursor-pointer"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-400" aria-hidden="true" />
            ) : (
              <Moon className="w-4 h-4 text-[var(--text-primary)]" aria-hidden="true" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-drawer"
            className="w-11 h-11 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)] inline-flex items-center justify-center transition-colors cursor-pointer"
          >
            {menuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <nav
          id="mobile-nav-drawer"
          aria-label="Mobile navigation"
          className="md:hidden border-t border-[var(--border-subtle)] bg-[var(--bg-canvas)] px-5 py-4"
        >
          <div className="flex flex-col divide-y divide-[var(--border-subtle)]">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="min-h-[48px] flex items-center justify-between text-base font-medium text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
              >
                <span>{item.label}</span>
                <span className="font-mono text-xs text-[var(--text-muted)]">↓</span>
              </a>
            ))}
          </div>

          <div className="pt-4 mt-2 border-t border-[var(--border-subtle)] flex items-center gap-3">
            <a
              href="https://github.com/himanshu-dot-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-h-[44px] px-4 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] inline-flex items-center justify-center gap-2 text-sm font-medium text-[var(--text-primary)]"
            >
              <FaGithub className="w-4 h-4" aria-hidden="true" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/himanshu-sharma-programmer/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-h-[44px] px-4 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] inline-flex items-center justify-center gap-2 text-sm font-medium text-[var(--text-primary)]"
            >
              <FaLinkedin className="w-4 h-4" aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
