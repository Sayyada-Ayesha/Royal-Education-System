import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Compass, GraduationCap, Briefcase } from 'lucide-react';
import { masterclassConfig, workshopConfig, trainingConfig } from '../data/offeringsData';

export const LearnBeyondSection: React.FC = () => {
  return (
    <section className="section-padding bg-ivory-50 border-b border-ink-100/8">
      <div className="site-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <span className="eyebrow-pill mb-3">Skill & Professional Growth</span>
            <h2 className="font-heading font-extrabold text-ink-950 mt-2 mb-3" style={{ fontSize: 'var(--fs-h2)' }}>
              Learn Beyond the Core Programme
            </h2>
            <p className="text-ink-600 text-sm leading-relaxed">
              Masterclasses, interactive workshops, structured trainings, and practical partner pathways designed for focused capability and digital portfolio building.
            </p>
          </div>
          <Link
            to="/offerings"
            className="btn-primary text-xs px-5 py-2.5 rounded-full inline-flex items-center gap-2 whitespace-nowrap self-start md:self-auto"
          >
            Explore All Learning Opportunities <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 4 Curated Category Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1: Masterclasses */}
          <div className="card p-6 flex flex-col justify-between hover:border-champagne-400 transition-all">
            <div>
              <div className="w-9 h-9 rounded-lg bg-champagne-100 text-champagne-800 flex items-center justify-center mb-4">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="px-2 py-0.5 rounded bg-champagne-50 border border-champagne-200 text-champagne-800 text-[10px] font-bold uppercase tracking-wider">
                {masterclassConfig.priceDisplay}
              </span>
              <h3 className="font-heading font-bold text-base text-ink-950 mt-3 mb-2">
                RES Masterclasses
              </h3>
              <p className="text-xs text-ink-500 leading-relaxed mb-4">
                Focused practical learning around Shopify, AI workflows, client hunting, English communication, and modern digital skills.
              </p>
            </div>
            <Link
              to="/masterclasses"
              className="text-xs font-bold text-champagne-600 hover:text-champagne-700 inline-flex items-center gap-1.5 pt-3 border-t border-ink-100/60"
            >
              View 8 Masterclasses <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Card 2: Workshops */}
          <div className="card p-6 flex flex-col justify-between hover:border-wine-300 transition-all">
            <div>
              <div className="w-9 h-9 rounded-lg bg-wine-100 text-wine-800 flex items-center justify-center mb-4">
                <Compass className="w-4 h-4" />
              </div>
              <span className="px-2 py-0.5 rounded bg-wine-50 border border-wine-200 text-wine-800 text-[10px] font-bold uppercase tracking-wider">
                {workshopConfig.priceDisplay}
              </span>
              <h3 className="font-heading font-bold text-base text-ink-950 mt-3 mb-2">
                RES Workshops
              </h3>
              <p className="text-xs text-ink-500 leading-relaxed mb-4">
                Interactive sessions exploring creative thinking, digital presence, intentional routines, and life management frameworks.
              </p>
            </div>
            <Link
              to="/workshops"
              className="text-xs font-bold text-wine-700 hover:text-wine-800 inline-flex items-center gap-1.5 pt-3 border-t border-ink-100/60"
            >
              View 6 Workshops <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Card 3: Trainings */}
          <div className="card p-6 flex flex-col justify-between hover:border-ink-400 transition-all">
            <div>
              <div className="w-9 h-9 rounded-lg bg-ink-100 text-ink-800 flex items-center justify-center mb-4">
                <GraduationCap className="w-4 h-4" />
              </div>
              <span className="px-2 py-0.5 rounded bg-ink-50 border border-ink-200 text-ink-800 text-[10px] font-bold uppercase tracking-wider">
                {trainingConfig.priceDisplay}
              </span>
              <h3 className="font-heading font-bold text-base text-ink-950 mt-3 mb-2">
                RES Trainings
              </h3>
              <p className="text-xs text-ink-500 leading-relaxed mb-4">
                Structured skill development sprints: Shopify in 7 Days, Portfolio in 1 Month, and Project Building in 3 Months.
              </p>
            </div>
            <Link
              to="/trainings"
              className="text-xs font-bold text-ink-800 hover:text-ink-950 inline-flex items-center gap-1.5 pt-3 border-t border-ink-100/60"
            >
              View Structured Trainings <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Card 4: Opportunity Pathways */}
          <div className="card p-6 flex flex-col justify-between hover:border-champagne-400 transition-all">
            <div>
              <div className="w-9 h-9 rounded-lg bg-pearl-200 text-ink-900 flex items-center justify-center mb-4">
                <Briefcase className="w-4 h-4" />
              </div>
              <span className="px-2 py-0.5 rounded bg-pearl-100 border border-pearl-300 text-ink-800 text-[10px] font-bold uppercase tracking-wider">
                Partner Pathway
              </span>
              <h3 className="font-heading font-bold text-base text-ink-950 mt-3 mb-2">
                SYNX AI Horizon
              </h3>
              <p className="text-xs text-ink-500 leading-relaxed mb-4">
                Competitive application pathways for internship, volunteer, and hands-on technology exposure for eligible learners.
              </p>
            </div>
            <Link
              to="/opportunities"
              className="text-xs font-bold text-champagne-600 hover:text-champagne-700 inline-flex items-center gap-1.5 pt-3 border-t border-ink-100/60"
            >
              Apply for Pathway <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Global Language Policy Sub-bar */}
        <div className="mt-8 py-3.5 px-5 bg-white rounded-xl border border-champagne-200/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-ink-700">
            <span className="w-2 h-2 rounded-full bg-champagne-500" />
            <span className="font-bold text-ink-950">Global Language Policy:</span>
            <span>English-led globally, with Urdu language support available for Pakistani learners.</span>
          </div>
          <Link
            to="/offerings"
            className="text-champagne-600 font-bold hover:underline shrink-0 text-[11px]"
          >
            Explore Ecosystem Overview →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LearnBeyondSection;
