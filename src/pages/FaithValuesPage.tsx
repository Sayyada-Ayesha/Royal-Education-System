import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HeartHandshake, BookOpen, Star, Users2, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { quranProgramme } from '../data/pricingData';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const FaithValuesPage: React.FC = () => {
  useDocumentTitle('Faith Values | The Royal Education System');
  const [ref, isVisible] = useScrollReveal();

  return (
    <div className="bg-ivory min-h-screen">
      <PageHero 
        title="Faith, Values & Character" 
        subtitle="Cultivating moral clarity, empathy, and personal integrity alongside academic achievement."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Faith & Values' }]}
      />

      <section className="section-padding px-4 bg-white border-b border-ivory-200" ref={ref}>
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-champagne-600 bg-champagne-50 px-3 py-1 rounded-full border border-champagne-200">
              Inclusive Character Education
            </span>
            <h2 className="font-extrabold font-heading text-ink mt-2 mb-2" style={{ fontSize: 'var(--fs-h2)' }}>
              Two Respectful, Values-Driven Pathways
            </h2>
            <p className="text-xs sm:text-sm text-ink-600">
              We offer tailored character cultivation that respects family values and spiritual heritage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pathway 1: For Muslim Learners */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="bg-pearl rounded-3xl p-8 border border-ivory-300 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 bg-champagne-100 text-champagne-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <BookOpen className="w-7 h-7" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-2xl font-heading font-extrabold text-ink-900">For Muslim Learners</h3>
                  <span className="text-[10px] uppercase font-bold text-champagne-600 bg-champagne-100 px-2 py-0.5 rounded">
                    Values & Akhlaq
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-ink-600 mb-6 leading-relaxed">
                  A balanced, inspiring curriculum integrating Quranic reflection, authentic prophetic stories, and daily character practice into modern life.
                </p>

                <div className="grid grid-cols-2 gap-2.5 mb-8">
                  {[
                    'Quran Recitation & Tajweed',
                    'Quranic Comprehension',
                    'Prophetic Character Stories',
                    'Islamic Manners (Akhlaq)',
                    'Honesty & Discipline',
                    'Digital Integrity & Modesty',
                  ].map((item) => (
                    <div key={item} className="p-2.5 bg-white rounded-xl border border-ivory-200 flex items-center gap-2 text-xs font-medium text-ink-900">
                      <Star className="w-3.5 h-3.5 text-champagne-400 shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Optional Quran Add-on Notice */}
              <div className="p-4 bg-white rounded-2xl border border-champagne-200 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-xs text-ink-900">Optional Quran Add-on Programme</h4>
                  <p className="text-[11px] text-ink-500">Live recitation & tajweed coaching</p>
                </div>
                <div className="text-right">
                  <span className="font-bold text-xs text-champagne-600 block">From AED {quranProgramme.fromAed}/mo</span>
                  <span className="text-[10px] text-ink-400">Optional add-on</span>
                </div>
              </div>
            </motion.div>

            {/* Pathway 2: For All Learners */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="gradient-ink text-white rounded-3xl p-8 border border-ink-800 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 bg-ink-800 text-champagne-300 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-champagne-400/20">
                  <Users2 className="w-7 h-7" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-2xl font-heading font-extrabold text-white">For All Learners</h3>
                  <span className="text-[10px] uppercase font-bold text-champagne-300 bg-ink-950 px-2 py-0.5 rounded border border-champagne-400/30">
                    Universal Ethics
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-ivory-200/80 mb-6 leading-relaxed">
                  Building a robust moral foundation, empathy, resilience, and ethical principles designed for responsible global citizenship.
                </p>

                <div className="grid grid-cols-2 gap-2.5 mb-8">
                  {[
                    'Moral Philosophy & Ethics',
                    'Empathy & Compassion',
                    'Civic Responsibility',
                    'Respect & Cultural Openness',
                    'Digital Citizenship',
                    'Accountability & Truthfulness',
                  ].map((item) => (
                    <div key={item} className="p-2.5 bg-ink-950/80 rounded-xl border border-ink-800 flex items-center gap-2 text-xs font-medium text-ivory-100">
                      <HeartHandshake className="w-3.5 h-3.5 text-champagne-400 shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-ink-800/80 rounded-2xl border border-champagne-400/20">
                <p className="text-xs text-ivory-200/80">
                  ✓ Universal character learning is seamlessly integrated into classroom discussions and collaborative teamwork exercises.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection
        title="Character That Outlasts the Classroom"
        description="Discover how our integrated moral education and optional Quranic tracks build grounded, confident learners."
        primaryCTA={{ text: "Book Free Assessment", link: "/free-assessment" }}
        secondaryCTA={{ text: "Explore Programs", link: "/programs" }}
        variant="navy"
      />
    </div>
  );
};

export default FaithValuesPage;
