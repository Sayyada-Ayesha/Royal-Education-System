import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Sparkles, 
  Binary, 
  MessageSquareHeart, 
  ExternalLink,
  Youtube,
  Instagram,
  Facebook,
  Linkedin
} from 'lucide-react';
import siteConfig from '../data/siteConfig';

export const DigitalCharactersSection: React.FC = () => {
  const characters = siteConfig.about.digitalCharacters;
  const { socialLinks, socialHandles } = siteConfig;
  const [imgErrors, setImgErrors] = useState<{ [key: string]: boolean }>({});

  const handleImageError = (id: string) => {
    setImgErrors(prev => ({ ...prev, [id]: true }));
  };

  // Supported social platforms with icons
  const socialPlatforms = [
    { key: 'instagram', label: 'Instagram', icon: Instagram, url: socialLinks.instagram, handle: socialHandles.instagram },
    { key: 'youtube', label: 'YouTube', icon: Youtube, url: socialLinks.youtube, handle: socialHandles.youtube },
    { key: 'facebook', label: 'Facebook', icon: Facebook, url: socialLinks.facebook, handle: socialHandles.facebook },
    { key: 'linkedin', label: 'LinkedIn', icon: Linkedin, url: socialLinks.linkedin, handle: socialHandles.linkedin },
  ].filter(p => p.url && p.url.trim() !== '');

  return (
    <section className="section-padding px-4 bg-white border-b border-ink-100/10 relative overflow-hidden">
      <div className="site-container relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne-400/15 border border-champagne-400/30 text-champagne-700 text-xs font-bold uppercase tracking-widest mb-3.5">
            <Bot className="w-3.5 h-3.5 text-champagne-600" /> Official Digital Characters
          </div>
          <h2 
            className="font-heading font-extrabold text-ink-950 mb-3 tracking-tight"
            style={{ fontSize: 'var(--fs-h2)' }}
          >
            Meet the Royal Digital Guides
          </h2>
          <p 
            className="text-champagne-700 font-serif italic text-base sm:text-lg mb-4"
          >
            &ldquo;Bringing the Royal Education System to life across our digital world.&rdquo;
          </p>
          <p 
            className="text-ink-600 max-w-2xl mx-auto leading-relaxed"
            style={{ fontSize: 'var(--fs-body)' }}
          >
            Real people build our vision; our digital guides bring the world to life. 
            Mr. Rook and Mrs. Rook are official brand characters that escort learners through interactive quests, 
            mathematical logic challenges, expressive communication seminars, and our digital community.
          </p>
        </div>

        {/* Characters Grid: 2 Column Composition */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto items-stretch">
          {characters.map((char, idx) => {
            const hasError = imgErrors[char.id];
            const isMrRook = char.id === 'mr-rook';

            return (
              <motion.article
                key={char.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-ivory-50/70 rounded-3xl p-6 sm:p-8 border border-ink-100/15 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300 relative group"
              >
                <div>
                  {/* Digital Character Official Label Badge */}
                  <div className="flex items-center justify-between gap-2 mb-6 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ink-950 text-champagne-300 text-[11px] font-bold uppercase tracking-wider border border-champagne-400/30 shadow-xs">
                      <Sparkles className="w-3 h-3 text-champagne-400" />
                      Digital Character · The Royal Education System
                    </span>
                    <span className="text-[11px] font-semibold text-ink-500 uppercase tracking-wider">
                      Official Guide
                    </span>
                  </div>

                  {/* Character Visual Showcase */}
                  <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden bg-gradient-to-b from-white to-ivory-100 border border-ink-100/15 flex items-center justify-center p-4 mb-6 shadow-inner">
                    {!hasError ? (
                      <img
                        src={char.image}
                        alt={char.name}
                        className="w-full h-full object-contain filter drop-shadow-md transition-transform duration-300 group-hover:scale-105"
                        onError={() => handleImageError(char.id)}
                      />
                    ) : (
                      /* Styled anime-inspired character badge fallback */
                      <div className="w-full h-full flex flex-col items-center justify-center text-center p-4">
                        <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-3 shadow-md ${
                          isMrRook 
                            ? 'bg-gradient-to-br from-ink-900 to-ink-950 text-champagne-300 border border-champagne-400/30' 
                            : 'bg-gradient-to-br from-wine-900 to-ink-950 text-champagne-300 border border-champagne-400/30'
                        }`}>
                          {isMrRook ? (
                            <Binary className="w-10 h-10 text-champagne-400" />
                          ) : (
                            <MessageSquareHeart className="w-10 h-10 text-champagne-400" />
                          )}
                        </div>
                        <span className="font-heading font-extrabold text-base text-ink-950 tracking-tight">
                          {char.name}
                        </span>
                        <span className="text-[11px] font-semibold text-champagne-700 mt-0.5">
                          {char.title}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Identification */}
                  <div className="mb-4">
                    <h3 className="font-heading font-extrabold text-2xl text-ink-950 tracking-tight mb-1">
                      {char.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-bold text-champagne-700 tracking-wide">
                      {char.title}
                    </p>
                  </div>

                  {/* Focus & Domain */}
                  <div className="mb-5 pb-4 border-b border-ink-100/10">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-ink-400 block mb-1">
                      Domain &amp; Guided Pathways
                    </span>
                    <p className="text-xs text-ink-700 leading-relaxed">
                      {char.focus}
                    </p>
                  </div>

                  {/* Quote / Character Persona */}
                  <div className="mb-6">
                    <p className="text-xs sm:text-sm text-ink-800 italic font-serif leading-relaxed">
                      &ldquo;{char.quote}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Centralized Social Handles Underneath */}
                <div className="pt-5 border-t border-ink-100/10 bg-white -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-5 rounded-b-3xl">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-ink-400 block mb-3">
                    Connect Across Our Official Digital Channels
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    {socialPlatforms.map((platform) => {
                      const Icon = platform.icon;
                      return (
                        <a
                          key={platform.key}
                          href={platform.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-ivory-50 border border-ink-100/20 text-ink-700 text-xs hover:text-champagne-700 hover:border-champagne-400/40 hover:bg-white transition-all shadow-2xs"
                          aria-label={`${char.name} on ${platform.label}`}
                        >
                          <Icon className="w-3.5 h-3.5 text-champagne-600 shrink-0" />
                          <span className="font-medium">{platform.label}</span>
                          <ExternalLink className="w-2.5 h-2.5 opacity-50 ml-0.5" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Reassurance Disclaimer Strip */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-[11px] sm:text-xs text-ink-500 leading-relaxed">
            Note: Mr. Rook &amp; Mrs. Rook are proprietary creative digital brand guides of The Royal Education System. 
            They support educational storytelling, interactive guidance, and community connection.
          </p>
        </div>

      </div>
    </section>
  );
};

export default DigitalCharactersSection;
