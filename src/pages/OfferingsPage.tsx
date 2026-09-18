import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  Sparkles,
  Compass,
  GraduationCap,
  Briefcase,
  Layers,
  ArrowRight,
  Filter,
  CheckCircle2,
  Clock,
  Coins,
  ShieldCheck,
  FolderGit2,
  HelpCircle,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import OfferingsComparisonSection from '../components/OfferingsComparisonSection';
import CustomWorkshopModal from '../components/CustomWorkshopModal';
import OpportunityApplicationModal from '../components/OpportunityApplicationModal';
import {
  offeringsLanguagePolicy,
  masterclassConfig,
  masterclassesData,
  workshopConfig,
  workshopsData,
  trainingConfig,
  trainingsData,
  opportunityConfig,
  digitalPortfolioConfig,
} from '../data/offeringsData';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

type CategoryFilter =
  | 'All'
  | 'Masterclasses'
  | 'Workshops'
  | 'Trainings'
  | 'Technology'
  | 'Business'
  | 'Communication'
  | 'Creative'
  | 'Personal Development'
  | 'Digital Skills';

export const OfferingsPage: React.FC = () => {
  useDocumentTitle('Explore Learning Opportunities | Royal Education System');
  const location = useLocation();

  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('All');
  const [customModalOpen, setCustomModalOpen] = useState(false);
  const [opportunityModalOpen, setOpportunityModalOpen] = useState(false);
  const [selectedTopicForCustom, setSelectedTopicForCustom] = useState('');

  // Handle direct routes: /masterclasses, /workshops, /trainings, /opportunities
  useEffect(() => {
    const path = location.pathname.toLowerCase();
    if (path.includes('masterclass')) {
      setActiveFilter('Masterclasses');
    } else if (path.includes('workshop')) {
      setActiveFilter('Workshops');
    } else if (path.includes('training')) {
      setActiveFilter('Trainings');
    } else if (path.includes('opportunit')) {
      // scroll to opportunity section
      const el = document.getElementById('opportunities-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.pathname]);

  const filterOptions: CategoryFilter[] = [
    'All',
    'Masterclasses',
    'Workshops',
    'Trainings',
    'Technology',
    'Business',
    'Communication',
    'Creative',
    'Personal Development',
    'Digital Skills',
  ];

  // Filter Masterclasses
  const filteredMasterclasses = masterclassesData.filter((item) => {
    if (activeFilter === 'All' || activeFilter === 'Masterclasses') return true;
    return item.category === activeFilter;
  });

  // Filter Workshops
  const filteredWorkshops = workshopsData.filter((item) => {
    if (activeFilter === 'All' || activeFilter === 'Workshops') return true;
    return item.category === activeFilter;
  });

  // Filter Trainings
  const filteredTrainings = trainingsData.filter((item) => {
    if (activeFilter === 'All' || activeFilter === 'Trainings') return true;
    return item.category === activeFilter;
  });

  const showMasterclasses =
    activeFilter === 'All' ||
    activeFilter === 'Masterclasses' ||
    filteredMasterclasses.length > 0;

  const showWorkshops =
    activeFilter === 'All' ||
    activeFilter === 'Workshops' ||
    filteredWorkshops.length > 0;

  const showTrainings =
    activeFilter === 'All' ||
    activeFilter === 'Trainings' ||
    filteredTrainings.length > 0;

  const openCustomModalWithTopic = (topic: string) => {
    setSelectedTopicForCustom(topic);
    setCustomModalOpen(true);
  };

  return (
    <div className="bg-ivory-50 text-ink-900 min-h-screen">
      {/* 1. Page Hero */}
      <PageHero
        title="Explore Learning Opportunities"
        subtitle="Standalone Masterclasses, interactive Workshops, structured Trainings, and practical Partner Pathways in the Royal Education System ecosystem."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Learning Opportunities', path: '/offerings' },
        ]}
      />

      {/* 2. Global Language & Ecosystem Policy Bar */}
      <section className="bg-white border-b border-champagne-200/50 py-4 px-4">
        <div className="site-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-ink-800">
              <span className="w-2.5 h-2.5 rounded-full bg-champagne-500 animate-pulse shrink-0" />
              <span className="font-bold text-ink-950">Language Policy:</span>
              <span>{offeringsLanguagePolicy.headline}</span>
            </div>
            <div className="flex items-center gap-4 text-ink-500 text-[11px]">
              <span>International: English-led</span>
              <span className="text-ink-300">•</span>
              <span>Pakistan: Urdu voice support available</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Category Filter Navigation */}
      <section className="sticky top-16 md:top-20 z-30 bg-white/95 backdrop-blur-md border-b border-ink-100 py-4 px-4 shadow-sm">
        <div className="site-container">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-bold text-ink-600">
              <Filter className="w-4 h-4 text-champagne-600" />
              <span className="uppercase tracking-wider text-[10px]">Filter Offerings:</span>
            </div>

            {/* Desktop / Tablet Segmented Buttons */}
            <div className="hidden lg:flex items-center gap-1.5 flex-wrap">
              {filterOptions.map((filter) => {
                const isSelected = activeFilter === filter;
                return (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      isSelected
                        ? 'bg-ink-950 text-white shadow-sm'
                        : 'bg-ivory-100 text-ink-700 hover:bg-champagne-100/70 hover:text-ink-950'
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>

            {/* Mobile / Tablet Dropdown */}
            <div className="lg:hidden w-full sm:w-auto">
              <select
                value={activeFilter}
                onChange={(e) => setActiveFilter(e.target.value as CategoryFilter)}
                className="w-full sm:w-64 px-3 py-2 bg-ivory-100 border border-ink-200 rounded-lg text-xs font-bold text-ink-900 focus:outline-none focus:border-champagne-500"
              >
                {filterOptions.map((filter) => (
                  <option key={filter} value={filter}>
                    {filter}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MASTERCLASSES SECTION */}
      {showMasterclasses && filteredMasterclasses.length > 0 && (
        <section id="masterclasses-section" className="section-padding px-4 bg-ivory-50">
          <div className="site-container">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <span className="eyebrow-pill mb-2">Focused Modern Skills</span>
                <h2 className="font-heading font-extrabold text-ink-950" style={{ fontSize: 'var(--fs-h2)' }}>
                  RES Masterclasses
                </h2>
                <p className="text-ink-600 text-xs sm:text-sm mt-1 max-w-xl leading-relaxed">
                  Focused, practical learning experiences around specific modern skills, tools, and digital capabilities.
                </p>
              </div>
              <div className="flex items-center gap-2 self-start md:self-auto">
                <span className="px-3 py-1 rounded-full bg-champagne-100 text-champagne-900 font-bold text-xs border border-champagne-300">
                  Base Fee: {masterclassConfig.priceDisplay}
                </span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredMasterclasses.map((mc) => (
                <div
                  key={mc.id}
                  className="card p-6 flex flex-col justify-between hover:border-champagne-400 transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-ivory-200 text-ink-700">
                        {mc.category}
                      </span>
                      <span className="text-xs font-extrabold text-champagne-700">
                        PKR 5,000
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-base text-ink-950 group-hover:text-champagne-700 transition-colors mb-2">
                      {mc.title}
                    </h3>
                    <p className="text-xs text-ink-600 leading-relaxed mb-4 line-clamp-3">
                      {mc.shortOutcome}
                    </p>

                    {/* Topics / Skills */}
                    <div className="space-y-1.5 mb-5 pt-3 border-t border-ink-100/70">
                      <span className="text-[10px] font-bold text-ink-400 uppercase tracking-wider block mb-1">
                        Core Competencies:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {mc.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 bg-pearl-100 text-ink-800 rounded text-[11px] font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-ink-100/70 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1 text-ink-500 text-[11px]">
                      <Clock className="w-3.5 h-3.5 text-champagne-600" />
                      <span>{mc.duration}</span>
                    </div>
                    <Link
                      to="/query"
                      className="text-champagne-600 hover:text-champagne-700 font-bold inline-flex items-center gap-1"
                    >
                      Enrol <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. WORKSHOPS SECTION */}
      {showWorkshops && filteredWorkshops.length > 0 && (
        <section id="workshops-section" className="section-padding px-4 bg-pearl-50 border-t border-ink-100/8">
          <div className="site-container">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <span className="eyebrow-pill mb-2 bg-wine-100 text-wine-900 border-wine-200">
                  Interactive Personal Development
                </span>
                <h2 className="font-heading font-extrabold text-ink-950" style={{ fontSize: 'var(--fs-h2)' }}>
                  RES Workshops
                </h2>
                <p className="text-ink-600 text-xs sm:text-sm mt-1 max-w-xl leading-relaxed">
                  Focused interactive sessions for creative thinking, professional digital presence, and intentional routine architecture.
                </p>
              </div>
              <div className="flex flex-col items-start md:items-end gap-1 self-start md:self-auto">
                <span className="px-3 py-1 rounded-full bg-wine-100 text-wine-950 font-bold text-xs border border-wine-300">
                  Fee: {workshopConfig.priceDisplay}
                </span>
                <span className="text-[10px] text-ink-500">{workshopConfig.negotiableNote}</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredWorkshops.map((ws) => (
                <div
                  key={ws.id}
                  className="card p-6 flex flex-col justify-between hover:border-wine-400 transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-wine-50 text-wine-800">
                        {ws.category}
                      </span>
                      <span className="text-xs font-bold text-wine-900">
                        PKR 5K–10K
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-base text-ink-950 group-hover:text-wine-800 transition-colors mb-1">
                      {ws.title}
                    </h3>
                    <p className="text-[11px] font-semibold text-wine-700 mb-3">
                      Theme: {ws.theme}
                    </p>
                    <p className="text-xs text-ink-600 leading-relaxed mb-4">
                      {ws.outcome}
                    </p>

                    {/* Workshop Topics */}
                    <div className="space-y-1.5 mb-5 pt-3 border-t border-ink-100/70">
                      <span className="text-[10px] font-bold text-ink-400 uppercase tracking-wider block mb-1">
                        Interactive Themes:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {ws.topics.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 bg-ivory-200 text-ink-800 rounded text-[11px]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-ink-100/70 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-ink-500 font-medium">
                      {ws.format}
                    </span>
                    <button
                      type="button"
                      onClick={() => openCustomModalWithTopic(ws.title)}
                      className="text-wine-800 hover:text-wine-950 font-bold inline-flex items-center gap-1"
                    >
                      Join / Inquire <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Wellbeing Educational Notice */}
            <div className="mt-8 p-3.5 bg-ivory-100 rounded-xl border border-ink-100/70 text-center text-xs text-ink-500 max-w-3xl mx-auto">
              <span className="font-bold text-ink-700">Educational Notice: </span>
              {workshopConfig.disclaimer}
            </div>
          </div>
        </section>
      )}

      {/* 6. TRAININGS SECTION */}
      {showTrainings && filteredTrainings.length > 0 && (
        <section id="trainings-section" className="section-padding px-4 bg-ivory-50 border-t border-ink-100/8">
          <div className="site-container">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <span className="eyebrow-pill mb-2 bg-ink-100 text-ink-900 border-ink-200">
                  Structured Skill Development
                </span>
                <h2 className="font-heading font-extrabold text-ink-950" style={{ fontSize: 'var(--fs-h2)' }}>
                  RES Trainings
                </h2>
                <p className="text-ink-600 text-xs sm:text-sm mt-1 max-w-xl leading-relaxed">
                  More structured and practical than single masterclasses or workshops, structured over defined sprint durations.
                </p>
              </div>
              <div className="flex flex-col items-start md:items-end gap-1 self-start md:self-auto">
                <span className="px-3 py-1 rounded-full bg-ink-950 text-white font-bold text-xs">
                  Training Fees: {trainingConfig.priceDisplay}
                </span>
                <span className="text-[10px] text-ink-500">{trainingConfig.note}</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {filteredTrainings.map((tr) => (
                <div
                  key={tr.id}
                  className="card p-7 flex flex-col justify-between hover:border-ink-500 transition-all border-t-4 border-t-ink-900"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-ink-100 text-ink-900 text-[10px] font-extrabold uppercase tracking-wider">
                        {tr.durationLabel}
                      </span>
                      <span className="text-xs font-bold text-ink-800">
                        {trainingConfig.priceDisplay}
                      </span>
                    </div>

                    <h3 className="font-heading font-extrabold text-lg text-ink-950 mb-2">
                      {tr.title}
                    </h3>
                    <p className="text-xs text-ink-600 leading-relaxed mb-5">
                      {tr.description}
                    </p>

                    {/* Deliverables */}
                    <div className="space-y-2 mb-6 pt-4 border-t border-ink-100">
                      <span className="text-[10px] font-bold text-ink-400 uppercase tracking-wider block mb-1">
                        Verified Deliverables:
                      </span>
                      {tr.deliverables.map((d) => (
                        <div key={d} className="flex items-start gap-2 text-xs text-ink-800">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-ink-100 flex items-center justify-between">
                    <span className="text-[11px] text-ink-500 font-bold">
                      {tr.durationWeeks}
                    </span>
                    <Link
                      to="/query"
                      className="btn-primary text-xs px-4 py-2 rounded-lg font-bold inline-flex items-center gap-1.5"
                    >
                      Apply for Training <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. VISUAL COMPARISON: MASTERCLASS vs WORKSHOP vs TRAINING */}
      <OfferingsComparisonSection />

      {/* 8. DIGITAL PORTFOLIO PHILOSOPHY SECTION */}
      <section className="section-padding px-4 bg-white border-b border-ink-100/8">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow-pill mb-3">Proof of Capability</span>
            <h2 className="font-heading font-extrabold text-ink-950 mt-2 mb-3" style={{ fontSize: 'var(--fs-h2)' }}>
              {digitalPortfolioConfig.title}
            </h2>
            <p className="text-ink-600 text-sm leading-relaxed">
              {digitalPortfolioConfig.subtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-8">
            {digitalPortfolioConfig.evidenceTypes.map((item) => (
              <div key={item.title} className="card p-5 bg-ivory-50/70 border border-ink-100/80">
                <FolderGit2 className="w-5 h-5 text-champagne-600 mb-2.5" />
                <h4 className="font-heading font-bold text-xs text-ink-950 mb-1">
                  {item.title}
                </h4>
                <p className="text-[11px] text-ink-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="p-3 bg-pearl-100 rounded-xl max-w-2xl mx-auto text-center text-xs text-ink-500">
            {digitalPortfolioConfig.disclaimer}
          </div>
        </div>
      </section>

      {/* 9. INTERNSHIP & OPPORTUNITY PATHWAY (SYNX AI HORIZON) */}
      <section id="opportunities-section" className="section-padding px-4 bg-pearl-50 border-b border-champagne-200/40">
        <div className="site-container">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-ink-950 via-ink-900 to-ink-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-champagne-400/20">
            <div className="absolute top-0 right-0 w-80 h-80 bg-champagne-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-champagne-500/20 border border-champagne-400/40 text-champagne-300 text-[10px] font-extrabold uppercase tracking-widest flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5" /> Partner Pathway: {opportunityConfig.partner}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-ivory-200 text-[10px] font-bold">
                  Internships • Volunteer • Practical Exposure
                </span>
              </div>

              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-3 tracking-tight">
                Internship & Opportunity Pathways
              </h2>
              <p className="text-xs sm:text-sm text-ivory-200/90 max-w-2xl mb-6 leading-relaxed">
                For appropriate and high-performing learners, RES provides structured pathways to apply for technology opportunities through partner organizations, notably <strong className="text-champagne-300">SYNX AI HORIZON</strong>.
              </p>

              {/* Strict Non-Guarantee Policy Notice */}
              <div className="p-4 bg-white/10 rounded-2xl border border-white/15 mb-8 backdrop-blur-sm max-w-2xl">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-champagne-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-ivory-100 leading-relaxed">
                    <p className="font-bold text-champagne-300 mb-1">Strict Non-Guaranteed Policy Notice:</p>
                    <p>“{opportunityConfig.strictPolicyNotice}”</p>
                    <p className="mt-2 text-ivory-300/80 text-[11px]">
                      Potential formats include paid internships, unpaid practical exposure, and volunteer projects. All opportunities depend on partner vetting and project readiness.
                    </p>
                  </div>
                </div>
              </div>

              {/* Focus Areas */}
              <div className="mb-8">
                <span className="text-xs font-bold text-champagne-300 uppercase tracking-wider block mb-3">
                  Eligible Technology Focus Areas:
                </span>
                <div className="grid sm:grid-cols-2 gap-2.5 max-w-2xl">
                  {opportunityConfig.areas.map((area) => (
                    <div key={area} className="flex items-center gap-2 text-xs text-ivory-200 bg-white/5 px-3 py-2 rounded-xl border border-white/10">
                      <CheckCircle2 className="w-3.5 h-3.5 text-champagne-400 shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => setOpportunityModalOpen(true)}
                  className="btn-primary text-xs px-6 py-3 rounded-full font-bold inline-flex items-center gap-2"
                >
                  Apply for Opportunity <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  to="/partners"
                  className="text-xs font-bold text-ivory-300 hover:text-white inline-flex items-center gap-1 underline underline-offset-4"
                >
                  Learn About Partner Organizations <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CUSTOM WORKSHOP / LEARNING REQUEST CTA */}
      <section className="section-padding px-4 bg-ivory-100/60">
        <div className="site-container">
          <div className="card p-8 sm:p-10 border border-champagne-300/70 bg-gradient-to-br from-white to-ivory-100 max-w-3xl mx-auto text-center shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-champagne-100 text-champagne-800 flex items-center justify-center mx-auto mb-4">
              <HelpCircle className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-champagne-700 block mb-1">
              Bespoke Capability
            </span>
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-ink-950 mb-2">
              Can’t Find What You’re Looking For?
            </h3>
            <p className="text-xs sm:text-sm text-ink-600 max-w-lg mx-auto mb-6 leading-relaxed">
              Tell us what you want to learn and our team can review your request. We organize specialized workshops and private cohorts based on demand.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedTopicForCustom('');
                setCustomModalOpen(true);
              }}
              className="btn-primary text-xs px-6 py-3 rounded-full font-bold inline-flex items-center gap-2"
            >
              Request a Custom Workshop / Learning Topic <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <p className="text-[10px] text-ink-400 mt-3">
              Review notice: Custom topics are subject to academic syllabus review and scheduling availability.
            </p>
          </div>
        </div>
      </section>

      {/* Modals */}
      <CustomWorkshopModal
        isOpen={customModalOpen}
        onClose={() => setCustomModalOpen(false)}
        prefillTopic={selectedTopicForCustom}
      />
      <OpportunityApplicationModal
        isOpen={opportunityModalOpen}
        onClose={() => setOpportunityModalOpen(false)}
      />
    </div>
  );
};

export default OfferingsPage;
