import React from 'react';
import { motion } from 'motion/react';
import { Compass } from 'lucide-react';
import { NOW_STATUS } from '../data.ts';

export default function NowSection() {
  return (
    <section id="now" className="py-12 sm:py-16 md:py-20 lg:py-24 border-b border-brand-border/20">
      
      {/* Section Header with elegant live indicator */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-10 sm:mb-12 lg:mb-14 text-left gap-4">
        
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-accent" />
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-gold-accent font-medium">
              Current Focus
            </span>
          </div>
          <h2 className="text-[clamp(2rem,4vw,3.4rem)] leading-tight font-serif font-medium text-white tracking-tight">
            Now
          </h2>
        </div>

        {/* Live indicator (designed like a quiet editorial update time) */}
        <div className="flex max-w-full items-center gap-3 font-mono text-[11px] text-gray-500 bg-brand-card/60 py-2 px-4 rounded-full border border-brand-border/60 self-start sm:self-auto shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-accent"></span>
          </span>
          <span className="min-w-0 truncate">Status: Active &bull; Spring 2026</span>
        </div>
      </div>

      <div className="space-y-10 sm:space-y-12 lg:space-y-14">
        
        {/* Understated current intent callout block */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative p-5 sm:p-7 lg:p-8 rounded-xl border border-gold-accent/20 bg-gold-accent/[0.01] overflow-hidden flex flex-col md:flex-row md:items-center gap-5 text-left"
        >
          {/* Faint gold highlight bar */}
          <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-gold-accent" />
          
          <div className="text-gold-accent flex-shrink-0">
            <Compass className="h-5 w-5 stroke-[1.5]" />
          </div>

          <div className="space-y-1">
            <span className="text-[10px] font-mono tracking-widest uppercase text-gold-accent/80 font-medium block">
              Active Focus
            </span>
            <p className="text-[clamp(1.08rem,2vw,1.35rem)] font-serif italic text-white font-light">
              &ldquo;{NOW_STATUS.goal}&rdquo;
            </p>
          </div>
        </motion.div>

        {/* 3 columns breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 xl:gap-12 pt-2">
          
          {/* COLUMN 1: Currently Learning */}
          <div className="space-y-6 text-left">
            <div className="border-b border-brand-border/40 pb-3">
              <h3 className="font-serif text-xl font-medium text-white flex items-center gap-2">
                <span className="text-gold-accent font-serif font-light text-lg">۰1</span> Learning
              </h3>
            </div>
            
            <ul className="space-y-6">
              {NOW_STATUS.learning.map((item, idx) => (
                <li key={idx} className="space-y-1.5 list-none">
                  <span className="text-base font-sans font-medium text-gray-200 block tracking-tight">
                    {item.name}
                  </span>
                  {item.description && (
                    <span className="text-sm text-gray-400 font-sans leading-relaxed block font-light">
                      {item.description}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 2: Currently Building */}
          <div className="space-y-6 text-left">
            <div className="border-b border-brand-border/40 pb-3">
              <h3 className="font-serif text-xl font-medium text-white flex items-center gap-2">
                <span className="text-gold-accent font-serif font-light text-lg">۰2</span> Building
              </h3>
            </div>
            
            <ul className="space-y-6">
              {NOW_STATUS.building.map((item, idx) => (
                <li key={idx} className="space-y-1.5 list-none">
                  <span className="text-base font-sans font-medium text-gray-200 block tracking-tight">
                    {item.name}
                  </span>
                  {item.description && (
                    <span className="text-sm text-gray-400 font-sans leading-relaxed block font-light">
                      {item.description}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Currently Writing */}
          <div className="space-y-6 text-left">
            <div className="border-b border-brand-border/40 pb-3">
              <h3 className="font-serif text-xl font-medium text-white flex items-center gap-2">
                <span className="text-gold-accent font-serif font-light text-lg">۰3</span> Writing
              </h3>
            </div>
            
            <ul className="space-y-6">
              {NOW_STATUS.writing.map((item, idx) => (
                <li key={idx} className="space-y-1.5 list-none">
                  <span className="text-base font-sans font-medium text-gray-200 block tracking-tight">
                    {item.name}
                  </span>
                  {item.description && (
                    <span className="text-sm text-gray-400 font-sans leading-relaxed block font-light">
                      {item.description}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
