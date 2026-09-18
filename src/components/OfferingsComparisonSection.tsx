import React from 'react';
import { offeringsComparisonMatrix } from '../data/offeringsData';
import { Sparkles, Compass, GraduationCap, CheckCircle2 } from 'lucide-react';

export const OfferingsComparisonSection: React.FC = () => {
  return (
    <section className="section-padding bg-ivory-100/60 border-y border-champagne-200/50">
      <div className="site-container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow-pill mb-3">Ecosystem Clarity</span>
          <h2 className="font-heading font-extrabold text-ink-950 mt-2 mb-3" style={{ fontSize: 'var(--fs-h2)' }}>
            Masterclass vs. Workshop vs. Training
          </h2>
          <p className="text-ink-600 text-sm leading-relaxed">
            Understanding the distinction between our three standalone learning formats so you choose the right path for your goals.
          </p>
        </div>

        {/* 3 Visual Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {/* Card 1: Masterclasses */}
          <div className="card p-7 border-t-4 border-t-champagne-500 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-champagne-100 text-champagne-800 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-champagne-600 block mb-1">
                Focused Modern Skills
              </span>
              <h3 className="font-heading font-bold text-lg text-ink-950 mb-2">
                RES Masterclass
              </h3>
              <p className="text-xs text-ink-600 leading-relaxed mb-5">
                Focused, practical learning experiences around a specific modern tool, workflow, or capability. Compact and immediately applicable.
              </p>
              <ul className="space-y-2 text-xs text-ink-700 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-champagne-600 shrink-0" />
                  <span>Focused modern skill topic</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-champagne-600 shrink-0" />
                  <span>Single-day or multi-session</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-champagne-600 shrink-0" />
                  <span>Immediate practical takeaways</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-ink-100">
              <span className="text-[11px] text-ink-400 block">Base Pricing</span>
              <span className="font-heading font-extrabold text-base text-ink-950">PKR 5,000</span>
              <span className="text-[10px] text-ink-500 block mt-0.5">Per Masterclass</span>
            </div>
          </div>

          {/* Card 2: Workshops */}
          <div className="card p-7 border-t-4 border-t-wine-600 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-wine-100 text-wine-800 flex items-center justify-center mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-wine-600 block mb-1">
                Interactive Experiences
              </span>
              <h3 className="font-heading font-bold text-lg text-ink-950 mb-2">
                RES Workshop
              </h3>
              <p className="text-xs text-ink-600 leading-relaxed mb-5">
                Focused interactive sessions exploring creative thinking, professional digital presence, intentional habit design, and life maintenance.
              </p>
              <ul className="space-y-2 text-xs text-ink-700 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-wine-600 shrink-0" />
                  <span>Interactive & guided exercises</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-wine-600 shrink-0" />
                  <span>Creative & personal clarity</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-wine-600 shrink-0" />
                  <span>Educational, wellbeing framing</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-ink-100">
              <span className="text-[11px] text-ink-400 block">Standard Fee Range</span>
              <span className="font-heading font-extrabold text-base text-ink-950">PKR 5,000–10,000</span>
              <span className="text-[10px] text-ink-500 block mt-0.5">Negotiable depending on scope</span>
            </div>
          </div>

          {/* Card 3: Trainings */}
          <div className="card p-7 border-t-4 border-t-ink-800 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-ink-100 text-ink-800 flex items-center justify-center mb-4">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-ink-600 block mb-1">
                Structured Skill Programmes
              </span>
              <h3 className="font-heading font-bold text-lg text-ink-950 mb-2">
                RES Training
              </h3>
              <p className="text-xs text-ink-600 leading-relaxed mb-5">
                Structured skill development programmes with defined durations (7 days, 1 month, 3 months) leading to completed, deployable projects.
              </p>
              <ul className="space-y-2 text-xs text-ink-700 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-ink-700 shrink-0" />
                  <span>Structured curriculum & sprints</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-ink-700 shrink-0" />
                  <span>Clear duration (7d, 1mo, 3mo)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-ink-700 shrink-0" />
                  <span>Verified portfolio deliverable</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-ink-100">
              <span className="text-[11px] text-ink-400 block">Training Fee Range</span>
              <span className="font-heading font-extrabold text-base text-ink-950">PKR 10,000–50,000</span>
              <span className="text-[10px] text-ink-500 block mt-0.5">Based on duration & scope</span>
            </div>
          </div>
        </div>

        {/* Detailed Comparison Table (Collapsible / Responsive) */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-champagne-200/60 overflow-hidden shadow-sm">
          <div className="px-6 py-4 bg-ink-950 text-white flex items-center justify-between">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider">
              Comprehensive Offering Comparison
            </h4>
            <span className="text-[11px] text-ivory-300">Modern Royal Learning Continuum</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-ink-100 bg-ivory-50/80 text-ink-900">
                  <th className="py-3 px-5 font-bold">Feature</th>
                  <th className="py-3 px-5 font-bold text-champagne-800">Masterclass</th>
                  <th className="py-3 px-5 font-bold text-wine-800">Workshop</th>
                  <th className="py-3 px-5 font-bold text-ink-800">Training</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-100/70 text-ink-700">
                {offeringsComparisonMatrix.map((row, idx) => (
                  <tr key={idx} className="hover:bg-ivory-50/40 transition-colors">
                    <td className="py-3.5 px-5 font-bold text-ink-950 bg-ivory-50/30 whitespace-nowrap">
                      {row.dimension}
                    </td>
                    <td className="py-3.5 px-5 text-ink-700">{row.masterclass}</td>
                    <td className="py-3.5 px-5 text-ink-700">{row.workshop}</td>
                    <td className="py-3.5 px-5 text-ink-700">{row.training}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferingsComparisonSection;
