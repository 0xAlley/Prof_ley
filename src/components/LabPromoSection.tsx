import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data.ts';

export default function LabPromoSection() {
  return (
    <section id="lab" className="py-14 sm:py-16 md:py-24 lg:py-28 border-b border-brand-border/20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-brand-card hover:bg-brand-card/90 border border-brand-border/50 p-6 sm:p-10 md:p-14 lg:p-16 xl:p-20 rounded-2xl text-center overflow-hidden group"
      >
        {/* Subtle, beautiful gold gradient lighting bar */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-2/3 bg-gradient-to-r from-transparent via-gold-accent/30 to-transparent transition-all duration-500 group-hover:w-full" />
        
        <div className="max-w-2xl mx-auto space-y-8 sm:space-y-10 flex flex-col items-center">
          {/* Circular Elegant Badge */}
          <div className="h-14 w-14 rounded-full border border-gold-accent/20 bg-brand-bg flex items-center justify-center text-lg shadow-sm transition-all duration-500 group-hover:border-gold-accent/50 group-hover:scale-105 select-none">
            ⚗️
          </div>

          <div className="space-y-4">
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-gold-accent font-medium block">
              The Interactive Ledger
            </span>
            <h2 className="text-[clamp(2.4rem,7vw,4.75rem)] font-serif font-medium text-white tracking-tight leading-none">
              Things I&apos;ve Built
            </h2>
            <p className="text-sm md:text-base font-serif italic text-gray-400 font-light max-w-md mx-auto">
              Experiments, tiny tools, playgrounds,
and ideas that felt worth shipping.
            </p>
          </div>

          <div className="pt-2">
            <a
              href={PERSONAL_INFO.labUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-11 items-center justify-center gap-2.5 px-6 sm:px-8 py-4 border border-gold-accent/30 hover:border-gold-accent rounded-lg text-xs font-mono tracking-widest uppercase text-gold-accent hover:text-white bg-brand-bg hover:bg-gold-accent/[0.04] transition-all duration-300"
            >
              <span>⚗️ Enter The Lab</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-gold-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Traditional elegant framing marks (Editorial look) */}
        <div className="absolute top-6 left-6 h-4 w-4 border-t border-l border-brand-border/40 pointer-events-none group-hover:border-gold-accent/25 transition-colors" />
        <div className="absolute top-6 right-6 h-4 w-4 border-t border-r border-brand-border/40 pointer-events-none group-hover:border-gold-accent/25 transition-colors" />
        <div className="absolute bottom-6 left-6 h-4 w-4 border-b border-l border-brand-border/40 pointer-events-none group-hover:border-gold-accent/25 transition-colors" />
        <div className="absolute bottom-6 right-6 h-4 w-4 border-b border-r border-brand-border/40 pointer-events-none group-hover:border-gold-accent/25 transition-colors" />
      </motion.div>
    </section>
  );
}
