import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import { CHRONICLE_DISCOVERIES, CHRONICLE_WORTH_SHARING, JOURNAL_STORY } from '../data.ts';

export default function JournalSection() {
  return (
    <section id="journal" className="py-12 sm:py-16 md:py-20 lg:py-24 border-b border-brand-border/20">
      
      {/* Title */}
      <div className="space-y-3 mb-10 sm:mb-14 lg:mb-16 text-left">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-gold-accent" />
          <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-gold-accent font-medium">
            Written Records
          </span>
        </div>
        <h2 className="text-[clamp(2rem,4vw,3.4rem)] leading-tight font-serif font-medium text-white tracking-tight">
          Journal
        </h2>
      </div>

      <div className="space-y-14 sm:space-y-16 lg:space-y-20">
        
        {/* SUBSECTION 1: MY STORY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 md:gap-10 xl:gap-14 items-start">
          <div className="lg:col-span-4 xl:col-span-3 text-left">
            <h3 className="text-2xl font-serif font-medium text-white pb-3 md:border-b border-brand-border/40">
              My Story
            </h3>
            <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mt-3 block">
              Origins &amp; Shift
            </span>
          </div>
          
          <div className="lg:col-span-8 xl:col-span-9 text-left space-y-6 max-w-4xl">
            <p className="text-[clamp(1.15rem,2.2vw,1.55rem)] font-serif italic text-gray-300 leading-relaxed font-light">
              &ldquo;{JOURNAL_STORY.quote}&rdquo;
            </p>
            
            <div className="text-sm md:text-base text-gray-400 font-sans space-y-5 leading-relaxed font-light">
              {JOURNAL_STORY.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="h-[1px] w-full bg-brand-border/30" />

        {/* SUBSECTION 2: DISCOVERIES */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 md:gap-10 xl:gap-14 items-start">
          <div className="lg:col-span-4 xl:col-span-3 text-left">
            <h3 className="text-2xl font-serif font-medium text-white pb-3 md:border-b border-brand-border/40">
              Things Worth Sharing
            </h3>
            <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mt-3 block">
              Selected Threads &amp; Notes
            </span>
          </div>

          <div className="lg:col-span-8 xl:col-span-9 text-left space-y-5 lg:space-y-6">
            {CHRONICLE_DISCOVERIES.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-brand-card hover:bg-brand-card/90 border border-brand-border/40 hover:border-gold-accent/25 p-5 sm:p-6 lg:p-7 rounded-xl transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-gray-500">
                    <span>{item.sourceName}</span>
                    <span>{item.date}</span>
                  </div>

                  <h4 className="text-lg font-serif font-medium text-white group-hover:text-gold-accent transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-sm text-gray-400 font-sans leading-relaxed font-light">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 mt-2 border-t border-brand-border/30">
                    <div className="flex flex-wrap gap-2">
                      {item.tags?.map((t) => (
                        <span key={t} className="text-[10px] font-mono text-gray-400 bg-brand-bg px-2.5 py-0.5 rounded border border-brand-border/60">
                          {t}
                        </span>
                      ))}
                    </div>

                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono text-gold-accent hover:text-white transition-colors"
                      >
                        <span>View thread</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="h-[1px] w-full bg-brand-border/30" />

        {/* SUBSECTION 3: WORTH SHARING */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 md:gap-10 xl:gap-14 items-start">
          <div className="lg:col-span-4 xl:col-span-3 text-left">
            <h3 className="text-2xl font-serif font-medium text-white pb-3 md:border-b border-brand-border/40">
              Worth Sharing
            </h3>
            <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mt-3 block">
              THINGS I KEEP REVISITING
            </span>
          </div>

          <div className="lg:col-span-8 xl:col-span-9 text-left space-y-6">
            <p className="text-sm md:text-base text-gray-400 font-sans leading-relaxed font-light">
              Interesting things worth bookmarking.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
              {CHRONICLE_WORTH_SHARING.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="group bg-brand-card hover:bg-brand-card/95 border border-brand-border/40 hover:border-gold-accent/20 p-5 sm:p-6 rounded-xl transition-all duration-300 flex flex-col justify-between text-left min-h-[240px]"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-[10px] font-mono text-gray-500">
                      <span>{item.sourceName}</span>
                      <BookOpen className="h-4 w-4 text-gray-500 group-hover:text-gold-accent transition-colors" />
                    </div>

                    <h4 className="text-base font-serif font-medium text-white group-hover:text-gold-accent transition-colors line-clamp-2">
                      {item.title}
                    </h4>

                    <p className="text-xs text-gray-400 font-sans leading-relaxed font-light line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-brand-border/30 flex flex-wrap items-center justify-between gap-3">
                    <span className="text-[10px] font-mono text-gray-400 bg-brand-bg px-2 py-0.5 rounded border border-brand-border/60">
                      {item.tags ? item.tags[0] : ''}
                    </span>

                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-mono text-gold-accent hover:text-white transition-colors"
                      >
                        <span>Visit resource</span>
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
