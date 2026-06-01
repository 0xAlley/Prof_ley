import React from 'react';
import { motion } from 'motion/react';
import { Brain, Fingerprint, Hammer, PenTool, ArrowUpRight } from 'lucide-react';
import { EXPLORING_ITEMS } from '../data.ts';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain: Brain,
  Fingerprint: Fingerprint,
  Hammer: Hammer,
  PenTool: PenTool,
};

export default function ExploringSection() {
  return (
    <section id="exploring" className="py-12 sm:py-16 md:py-20 lg:py-24 border-b border-brand-border/20">
      
      {/* Clean section title with subtle gold indicators */}
      <div className="space-y-3 mb-10 sm:mb-12 lg:mb-14 text-left">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-gold-accent" />
          <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-gold-accent font-medium">
            Active Focus
          </span>
        </div>
        <h2 className="text-[clamp(2rem,4vw,3.4rem)] leading-tight font-serif font-medium text-white tracking-tight">
          Currently Exploring
        </h2>
      </div>

      {/* Grid containing 4 beautifully minimal cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
        {EXPLORING_ITEMS.map((item, index) => {
          const IconComponent = iconMap[item.icon] || Brain;
          
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-brand-card hover:bg-brand-card/90 border border-brand-border/40 hover:border-gold-accent/30 p-5 sm:p-6 lg:p-7 xl:p-6 rounded-xl text-left transition-all duration-300 group flex flex-col justify-between min-h-[260px]"
            >
              <div className="space-y-6">
                {/* Brand-aligned Icon wrapper with rich minimalism */}
                <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-brand-bg border border-brand-border/80 text-gray-400 group-hover:text-gold-accent group-hover:border-gold-accent/20 transition-all duration-300">
                  <IconComponent className="h-5 w-5 stroke-[1.5]" />
                </div>

                <div className="space-y-2.5">
                  <h3 className="text-xl font-serif font-medium text-white group-hover:text-gold-accent transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-gray-400 leading-relaxed font-sans font-light">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Minimal human index tag */}
              <div className="pt-6 mt-8 border-t border-brand-border/40 flex flex-wrap justify-between items-center gap-2 text-[10px] font-mono text-gray-500">
                <span className="tracking-wide min-w-0 truncate">Ley / {item.title}</span>
                <span className="text-gold-accent/50 group-hover:text-gold-accent transition-colors">[ 0{index + 1} ]</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
