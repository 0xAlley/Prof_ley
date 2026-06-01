import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data.ts';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <AnimatePresence>
      {scrolled && (
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed top-3 sm:top-4 left-0 right-0 z-50 mx-auto w-full max-w-[1180px] px-3 sm:px-6 lg:px-10 pointer-events-none"
        >
          <div className="w-full pointer-events-auto bg-brand-bg/85 backdrop-blur-md border border-brand-border/40 py-2.5 px-3 sm:px-5 rounded-2xl sm:rounded-full shadow-lg flex items-center justify-between gap-3">
            {/* Logo */}
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setMenuOpen(false);
              }}
              className="text-white hover:text-gold-accent font-serif font-semibold tracking-wider text-sm transition-colors cursor-pointer"
            >
              Ley
            </button>

            {/* Nav links */}
            <nav className="hidden sm:flex items-center gap-4 md:gap-6 text-xs font-mono tracking-wider">
              <button
                onClick={() => scrollToSection('journal')}
                className="text-gray-400 hover:text-white transition-colors cursor-pointer py-2"
              >
                Journal
              </button>
              <button
                onClick={() => scrollToSection('now')}
                className="text-gray-400 hover:text-white transition-colors cursor-pointer py-2"
              >
                Now
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-400 hover:text-white transition-colors cursor-pointer py-2"
              >
                Contact
              </button>
              <a
                href={PERSONAL_INFO.labUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-accent hover:text-gold-accent-hover transition-colors cursor-pointer py-2"
              >
                Lab
              </a>
            </nav>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              className="sm:hidden h-10 w-10 rounded-full border border-brand-border/70 bg-brand-card text-gray-300 hover:text-white flex items-center justify-center transition-colors"
            >
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="sm:hidden pointer-events-auto mt-2 overflow-hidden rounded-2xl border border-brand-border/50 bg-brand-bg/95 backdrop-blur-md shadow-lg font-mono text-xs tracking-wider"
              >
                <button onClick={() => scrollToSection('journal')} className="block w-full px-4 py-4 text-left text-gray-300 hover:text-white hover:bg-brand-card/70">
                  Journal
                </button>
                <button onClick={() => scrollToSection('now')} className="block w-full px-4 py-4 text-left text-gray-300 hover:text-white hover:bg-brand-card/70 border-t border-brand-border/30">
                  Now
                </button>
                <button onClick={() => scrollToSection('contact')} className="block w-full px-4 py-4 text-left text-gray-300 hover:text-white hover:bg-brand-card/70 border-t border-brand-border/30">
                  Contact
                </button>
                <a href={PERSONAL_INFO.labUrl} target="_blank" rel="noopener noreferrer" className="block w-full px-4 py-4 text-left text-gold-accent hover:text-white hover:bg-brand-card/70 border-t border-brand-border/30">
                  Lab
                </a>
              </motion.nav>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
