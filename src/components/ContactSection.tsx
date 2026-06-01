import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Twitter, MessageCircle, Hash, Instagram, Mail, ArrowUpRight } from 'lucide-react';
import { SOCIAL_LINKS } from '../data.ts';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Twitter: Twitter,
  MessageCircle: MessageCircle,
  Hash: Hash,
  Instagram: Instagram,
  Mail: Mail,
};

export default function ContactSection() {
  const [copiedName, setCopiedName] = useState<string | null>(null);

  const handleCopy = (handle: string, name: string) => {
    navigator.clipboard.writeText(handle);
    setCopiedName(name);
    setTimeout(() => setCopiedName(null), 2000);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 text-left">
      
      {/* Pristine Header */}
      <div className="space-y-3 mb-10 sm:mb-12 lg:mb-14">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-gold-accent" />
          <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-gold-accent font-medium">
            Keep in Touch
          </span>
        </div>
        <h2 className="text-[clamp(2rem,4vw,3.4rem)] leading-tight font-serif font-medium text-white tracking-tight">
          Say Hello
        </h2>
      </div>

      {/* Grid of contact card units */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5 lg:gap-6 mb-12 sm:mb-16 lg:mb-20">
        {SOCIAL_LINKS.map((link, idx) => {
          const IconComponent = iconMap[link.icon] || Mail;
          const isCopied = copiedName === link.name;

          return (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-brand-card hover:bg-brand-card/95 border border-brand-border/40 hover:border-gold-accent/25 p-5 sm:p-6 xl:p-5 rounded-xl flex flex-col justify-between gap-6 transition-all duration-300 min-h-[150px]"
            >
              <div className="flex items-center justify-between gap-3 min-w-0">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="h-9 w-9 rounded-full bg-brand-bg flex items-center justify-center text-gray-400 group-hover:text-gold-accent border border-brand-border/80 transition-colors duration-300">
                    <IconComponent className="h-4 w-4 stroke-[1.5]" />
                  </div>
                  <span className="min-w-0 truncate text-base font-serif font-medium text-white">{link.name}</span>
                </div>
                
                {/* External indicator icon */}
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 text-gray-500 hover:text-gold-accent transition-colors"
                >
                  <ArrowUpRight className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              <div className="flex items-baseline justify-between gap-3 pt-1 min-w-0">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-gray-400 group-hover:text-white transition-colors block hover:underline truncate min-w-0"
                >
                  {link.handle}
                </a>

                {/* Copied highlight tooltip */}
                <button
                  onClick={() => handleCopy(link.handle, link.name)}
                  className="flex-shrink-0 text-[10px] font-mono text-gray-500 hover:text-gold-accent tracking-wider uppercase transition-colors cursor-pointer"
                >
                  {isCopied ? 'Copied' : 'Copy'}
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Handcrafted signature/footer */}
      <div className="pt-12 border-t border-brand-border/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
        <div className="flex items-center gap-2">
          <span className="h-1 text-gold-accent/40" />
          <span>Open to conversations, collaborations, and internet rabbit holes.</span>
        </div>
        <div>
          <span>Ley © {new Date().getFullYear()}</span>
        </div>
      </div>
    </section>
  );
}
