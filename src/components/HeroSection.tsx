import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, MapPin, Calendar, Clock, Globe, Shield, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data.ts';

const localAvatarSrc = new URL('../../assets/.aistudio/pfp/file_000000000f2071f8b346355f32899db4.png', import.meta.url).href;

export default function HeroSection() {
  const [systemTime, setSystemTime] = useState<string>('');
  const [avatarSrc, setAvatarSrc] = useState(localAvatarSrc);

  const handleAvatarError = () => {
    // Gracefully fall back to their official, exact X/Twitter profile picture CDN
    setAvatarSrc('https://unavatar.io/twitter/0xAlley_');
  };

  useEffect(() => {
    // Keep local timer running for the terminal card look
    const updateTime = () => {
      const now = new Date();
      setSystemTime(now.toUTCString().replace('GMT', 'UTC'));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-4 sm:pt-6 pb-8 sm:pb-12 text-left" id="identity">
      {/* Visual Identity Hero Card Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full bg-brand-card border border-brand-border rounded-2xl overflow-hidden shadow-2xl relative"
      >
        {/* ==================== 1. X BANNER ==================== */}
        <div className="relative h-40 sm:h-56 md:h-64 lg:h-72 w-full bg-[#08080a] overflow-hidden border-b border-brand-border/80 group">
          {/* Subtle Technical Grid Background */}
          <div className="absolute inset-0 opacity-15" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '16px 16px'
          }} />

          {/* Glowing blue laser line / cosmic sword slash from bottom-right (matching image banner) */}
          <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] bg-gradient-to-tr from-blue-600/30 via-indigo-500/25 to-cyan-400/5 blur-[50px] transform rotate-12 pointer-events-none" />
          <div className="absolute bottom-0 right-[15%] w-[450px] h-0.5 bg-gradient-to-r from-transparent via-blue-500/60 to-cyan-300/30 transform -rotate-12 origin-bottom-right opacity-80" />
          <div className="absolute bottom-1/4 right-[25%] opacity-35 text-[10px] font-mono text-cyan-400 select-none hidden sm:block tracking-widest animate-pulse">
            0xB23e...8CeB6
          </div>

          {/* Tech lines, angles, and coordinates (similar to cybernetic detail in user's image) */}
          <div className="absolute top-4 left-6 text-gray-600 font-mono text-[9px] tracking-wider select-none opacity-60">
            0x9F1e...D4a7C
          </div>
          <div className="absolute bottom-4 right-6 text-gray-600 font-mono text-[9px] tracking-wider select-none opacity-60">
            0x73b...9CE66
          </div>

          {/* SVG futuristic circuit background details */}
          <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 50,20 H 120 L 135,35 H 180" fill="none" stroke="#1f1f23" strokeWidth="1" />
            <path d="M 50,30 L 60,40 V 60" fill="none" stroke="#cda851" strokeWidth="0.8" opacity="0.4" />
            <path d="M 200,160 L 220,180 H 260" fill="none" stroke="#2563eb" strokeWidth="1" opacity="0.3" strokeDasharray="4 4" />
          </svg>

          <div className="absolute top-4 right-6 flex items-center gap-1.5 opacity-50 select-none z-10">
            <span className="text-[9px] font-mono text-gold-accent font-medium">XXX</span>
            <div className="h-1.5 w-1.5 rounded-full bg-gold-accent animate-ping" />
          </div>

          {/* Central Typography Header - "LEY AI • TECH • WEB3" */}
          <div className="absolute inset-0 flex -translate-y-5 flex-col items-center justify-center pointer-events-none select-none z-10 px-4 sm:-translate-y-2 lg:translate-y-0">
            <h2 className="text-[clamp(2.75rem,9vw,5.75rem)] font-serif font-bold text-white tracking-widest relative drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              LEY
              {/* Subtle underline slash mimicking original design */}
              <span className="absolute left-[10%] right-[10%] bottom-[-8px] h-[1.5px] bg-gradient-to-r from-transparent via-gold-accent to-transparent" />
            </h2>
            <p className="text-[10px] sm:text-[11px] font-mono text-gray-200 tracking-[0.4em] uppercase mt-4 text-center drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
              <span className="text-gold-accent">&bull;</span> Ex Laravel. Now Tinkering.<span className="text-gold-accent">&bull;</span> 
            </p>
          </div>
        </div>

        {/* ==================== 2. OVERLAPPING X PFP ==================== */}
        <div className="relative px-5 sm:px-8 lg:px-10 xl:px-12 pb-6 sm:pb-8 lg:pb-10 z-20">
          <div className="grid grid-cols-1 lg:grid-cols-[168px_minmax(0,1fr)_auto] xl:grid-cols-[184px_minmax(0,1fr)_auto] gap-6 lg:gap-8 xl:gap-10 -mt-14 sm:-mt-20">
            
            {/* Elf Portrait Profile Circle with Breathing Glowing Circuits (Using their actual, original Twitter Avatar!) */}
            <div className="relative group/pfp h-28 w-28 sm:h-36 sm:w-36 lg:h-40 lg:w-40 rounded-full border-4 border-brand-card bg-[#0d0d0f] shadow-xl overflow-hidden flex items-center justify-center flex-shrink-0 cursor-pointer">
              
              {/* Actual Profile Picture Image */}
              <img
                src={avatarSrc}
                alt={PERSONAL_INFO.name}
                onError={handleAvatarError}
                className="relative w-full h-full object-cover transition-transform duration-500 group-hover/pfp:scale-110 z-10"
                referrerPolicy="no-referrer"
              />

              {/* Inner glowing core representing fallback screen during lazy loading */}
              <div className="absolute inset-0 bg-[#0d0d0f] z-0" />

              {/* Holographic grid border overlay */}
              <div className="absolute inset-0 border border-gold-accent/20 rounded-full group-hover/pfp:border-gold-accent/70 transition-all duration-500 pointer-events-none z-20" />
              
              {/* Online pulse point */}
              <div className="absolute bottom-2 right-2 h-4 w-4 rounded-full bg-[#0d0d0f] flex items-center justify-center border border-brand-border z-30">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
            </div>

            {/* CTA Option - Enter the Lab ⚗️ */}
            <div className="order-2 lg:order-3 self-start lg:self-end lg:justify-self-end pt-0 lg:pt-20">
              <a
                href={PERSONAL_INFO.labUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex min-h-11 items-center justify-center gap-2.5 px-5 py-3 border border-gold-accent/30 hover:border-gold-accent bg-brand-bg hover:bg-gold-accent/[0.04] text-[11px] sm:text-xs font-mono tracking-widest uppercase text-gold-accent hover:text-white rounded-lg transition-all duration-300 shadow-sm overflow-hidden"
              >
                {/* Hover backlighting transition */}
                <span className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-gold-accent to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-305" />
                <span>⚗️ Enter The Lab</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-gold-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>
            </div>
            {/* ==================== 3. BIO & DESCRIPTION ==================== */}
            <div className="order-3 lg:order-2 space-y-6 text-left lg:pt-20 min-w-0">
            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <h1 className="text-[clamp(2rem,5vw,3.75rem)] leading-[0.95] font-serif font-bold text-white tracking-tight">
                  {PERSONAL_INFO.name}
                </h1>
                
                {/* Premium verified-like badge for "Curious Internet Builder" */}
                <div className="inline-flex items-center gap-1 bg-gold-accent/[0.06] border border-gold-accent/20 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium text-gold-accent">
                  <Sparkles className="h-2.5 w-2.5" />
                  <span>Internet Builder</span>
                </div>

                <div className="inline-flex items-center gap-1 bg-blue-500/[0.06] border border-blue-500/20 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium text-blue-400">
                  <Shield className="h-2.5 w-2.5" />
                  <span>Verified Tinkerer</span>
                </div>
              </div>
              
              <p className="text-xs sm:text-sm font-mono text-gray-500 mt-2">
                {PERSONAL_INFO.handle} <span className="text-brand-border px-1">|</span> ex-Laravel monolith developer
              </p>
            </div>

            {/* Statement Bio - Rich editorial font weight, extremely cozy narrative style */}
            <div className="space-y-3 max-w-3xl text-base text-gray-300 font-sans leading-relaxed font-light">
              <p className="tracking-tight text-[clamp(1.08rem,2vw,1.45rem)] leading-relaxed font-serif italic text-gray-200">
                &ldquo;Deep into AI × Web3.
                <br />
                Still figuring things out.&rdquo;
              </p>
              <p className="text-sm sm:text-[15px] text-gray-400 max-w-2xl">
               I spent years building Laravel applications.

Then AI happened.

Now I'm exploring AI, Web3,
internet tools, and whatever catches my curiosity.

Most of what I learn ends up here.
              </p>
            </div>

            {/* Metadata Badges Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-6 gap-y-3.5 text-xs font-mono text-gray-500 pt-4 border-t border-brand-border/40">
              <div className="flex items-center gap-1.5 hover:text-gray-300 transition-colors">
                <MapPin className="h-3.5 w-3.5 text-gold-accent/60" />
                <span>Cloud Native / Remote</span>
              </div>
              <div className="flex items-center gap-1.5 hover:text-gray-300 transition-colors">
                <Globe className="h-3.5 w-3.5 text-gold-accent/60" />
                <a href="#" className="hover:underline">ley.dev</a>
              </div>
              <div className="flex items-center gap-1.5 hover:text-gray-300 transition-colors">
                <Calendar className="h-3.5 w-3.5 text-gold-accent/60" />
                <span>Joined March 2026</span>
              </div>
              <div className="flex items-center gap-1.5 hover:text-gray-300 transition-colors min-w-0">
                <Clock className="h-3.5 w-3.5 text-gold-accent/60" />
                <span className="tabular-nums truncate">{systemTime || 'Loading UTC...'}</span>
              </div>
            </div>

            {/* ==================== 4. QUICK NAVIGATION ==================== */}
            <div className="pt-5 border-t border-brand-border/40 flex flex-wrap items-center gap-3 sm:gap-5 text-xs font-mono">
              <span className="basis-full sm:basis-auto text-gray-600 select-none text-[10px] uppercase tracking-wider font-semibold">Quick Jump:</span>
              
              <button
                onClick={() => scrollToSection('exploring')}
                className="min-h-9 text-gray-400 hover:text-white transition-all cursor-pointer group flex items-center"
              >
                <span className="text-gray-600 group-hover:text-gold-accent transition-colors mr-1 font-light">[</span>
                <span className="group-hover:text-white group-hover:underline decoration-gold-accent/40 transition-colors">Exploring</span>
                <span className="text-gray-600 group-hover:text-gold-accent transition-colors ml-1 font-light">]</span>
              </button>

              <button
                onClick={() => scrollToSection('journal')}
                className="min-h-9 text-gray-400 hover:text-white transition-all cursor-pointer group flex items-center"
              >
                <span className="text-gray-600 group-hover:text-gold-accent transition-colors mr-1 font-light">[</span>
                <span className="group-hover:text-white group-hover:underline decoration-gold-accent/40 transition-colors">Journal</span>
                <span className="text-gray-600 group-hover:text-gold-accent transition-colors ml-1 font-light">]</span>
              </button>

              <button
                onClick={() => scrollToSection('now')}
                className="min-h-9 text-gray-400 hover:text-white transition-all cursor-pointer group flex items-center"
              >
                <span className="text-gray-600 group-hover:text-gold-accent transition-colors mr-1 font-light">[</span>
                <span className="group-hover:text-white group-hover:underline decoration-gold-accent/40 transition-colors">Now</span>
                <span className="text-gray-600 group-hover:text-gold-accent transition-colors ml-1 font-light">]</span>
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="min-h-9 text-gray-400 hover:text-white transition-all cursor-pointer group flex items-center"
              >
                <span className="text-gray-600 group-hover:text-gold-accent transition-colors mr-1 font-light">[</span>
                <span className="group-hover:text-white group-hover:underline decoration-gold-accent/40 transition-colors">Contact</span>
                <span className="text-gray-600 group-hover:text-gold-accent transition-colors ml-1 font-light">]</span>
              </button>
            </div>

            </div>
          </div>
        </div>

        {/* Decorative subtle outline styling points for high end typography feel */}
        <div className="absolute top-3 left-3 h-2 w-2 border-t border-l border-brand-border rounded-tl pointer-events-none" />
        <div className="absolute top-3 right-3 h-2 w-2 border-t border-r border-brand-border rounded-tr pointer-events-none" />
        <div className="absolute bottom-3 left-3 h-2 w-2 border-b border-l border-brand-border rounded-bl pointer-events-none" />
        <div className="absolute bottom-3 right-3 h-2 w-2 border-b border-r border-brand-border rounded-br pointer-events-none" />
      </motion.div>
    </section>
  );
}
