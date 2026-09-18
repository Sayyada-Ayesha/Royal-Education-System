import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, BookOpen, Cpu, HeartHandshake, Compass } from 'lucide-react';
import siteConfig from '../data/siteConfig';

export const FoundersSection: React.FC = () => {
  const founders = siteConfig.about.founders;
  const [imgErrors, setImgErrors] = useState<{ [key: string]: boolean }>({});

  const handleImageError = (id: string) => {
    setImgErrors(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section className="section-padding px-4 bg-ivory-50 border-b border-ink-100/10 relative overflow-hidden">
      {/* Subtle decorative background watermark */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-champagne-300/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-ink-950/5 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="site-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne-400/15 border border-champagne-400/30 text-champagne-700 text-xs font-bold uppercase tracking-widest mb-3.5">
            <Sparkles className="w-3.5 h-3.5 text-champagne-600" /> The People Behind the Vision
          </div>
          <h2 
            className="font-heading font-extrabold text-ink-950 mb-3 tracking-tight"
            style={{ fontSize: 'var(--fs-h2)' }}
          >
            Our Founders
          </h2>
          <p 
            className="text-champagne-700 font-serif italic text-base sm:text-lg mb-4"
          >
            &ldquo;Building a learning system means staying learners ourselves.&rdquo;
          </p>
          <p 
            className="text-ink-600 max-w-2xl mx-auto leading-relaxed"
            style={{ fontSize: 'var(--fs-body)' }}
          >
            The people designing The Royal Education System are dedicated lifelong learners. 
            We continuously study emerging technology, pedagogical research, and cognitive development 
            to create an education that prepares young minds for life.
          </p>
        </div>

        {/* Editorial Two-Column Founders Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto items-stretch">
          {founders.map((founder, idx) => {
            const hasError = imgErrors[founder.name];
            const initials = founder.name
              .split(' ')
              .map(n => n[0])
              .join('')
              .slice(0, 2);

            const isTech = founder.role.includes('Technology');

            return (
              <motion.article
                key={founder.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-ink-100/15 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300 relative group"
              >
                <div>
                  {/* Top Profile Bar */}
                  <div className="flex items-start gap-4 sm:gap-5 mb-6">
                    {/* Portrait Frame / Graceful Monogram Fallback */}
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-gradient-to-br from-ivory-100 to-pearl-100 border-2 border-champagne-300/40 shrink-0 shadow-inner flex items-center justify-center">
                      {!hasError && founder.image ? (
                        <img
                          src={founder.image}
                          alt={founder.name}
                          className="w-full h-full object-cover"
                          onError={() => handleImageError(founder.name)}
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-ink-950 via-ink-900 to-ink-850 text-white p-2 text-center">
                          <span className="font-heading font-extrabold text-xl text-champagne-300 tracking-wider">
                            {initials}
                          </span>
                          <span className="text-[9px] uppercase tracking-widest text-champagne-200/70 mt-0.5">
                            Founder
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Titles and verified details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="inline-block px-2.5 py-0.5 rounded-md bg-champagne-400/15 text-champagne-800 text-[10px] font-bold uppercase tracking-wider border border-champagne-400/30">
                          {founder.qualification}
                        </span>
                        <span className="inline-block px-2 py-0.5 rounded-md bg-ink-50 text-ink-600 text-[10px] font-semibold border border-ink-100/30">
                          Verified
                        </span>
                      </div>
                      <h3 className="font-heading font-extrabold text-lg sm:text-xl text-ink-950 tracking-tight leading-snug">
                        {founder.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-champagne-700">
                        {founder.role}
                      </p>
                    </div>
                  </div>

                  {/* Focus Areas Tag */}
                  <div className="mb-4 pb-4 border-b border-ink-100/10">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-ink-400 block mb-1.5 flex items-center gap-1.5">
                      {isTech ? <Cpu className="w-3.5 h-3.5 text-champagne-600" /> : <HeartHandshake className="w-3.5 h-3.5 text-champagne-600" />}
                      Focus &amp; Integration
                    </span>
                    <p className="text-xs text-ink-700 font-medium leading-relaxed">
                      {founder.focus}
                    </p>
                  </div>

                  {/* Editorial Perspective / Quote */}
                  <div className="mb-5">
                    <p className="text-ink-700 text-xs sm:text-sm leading-relaxed italic text-ink-800/90 font-serif">
                      &ldquo;{founder.philosophy}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Lifelong Learning Commitment Badge */}
                <div className="mt-2 pt-4 border-t border-ink-100/10 bg-ivory-50/70 -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-4 sm:p-5 rounded-b-3xl">
                  <div className="flex items-start gap-2.5">
                    <BookOpen className="w-4 h-4 text-champagne-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-ink-500 block">
                        Lifelong Learning Philosophy
                      </span>
                      <p className="text-[11px] sm:text-xs text-ink-600 leading-normal mt-0.5">
                        {founder.lifelongLearning}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Centralized Ethos Footer Strip */}
        <div className="mt-12 max-w-3xl mx-auto p-4 sm:p-5 rounded-2xl bg-white border border-champagne-300/30 shadow-xs text-center flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-ink-800 text-xs sm:text-sm font-semibold">
            <Compass className="w-4 h-4 text-champagne-600 shrink-0" />
            <span>The RES Principle: <strong className="text-ink-950 font-bold">Learn. Understand. Grow. Connect.</strong></span>
          </div>
          <span className="text-xs text-ink-500 italic">
            Living the philosophy we teach.
          </span>
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
