import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, Check, Sparkles, BookOpen, 
  FileText, Send 
} from 'lucide-react';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import ScholarshipAndDonationSection from '../components/ScholarshipAndDonationSection';
import { 
  gradePricing, 
  admissionFee, 
  quranProgramme, 
  countryRegions, 
  annualDiscounts,
  pakistaniPricing,
  paymentSchedules 
} from '../data/pricingData';
import { submitForm } from '../utils/formSubmit';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const FeesPage: React.FC = () => {
  useDocumentTitle('Fees | The Royal Education System');
  const [selectedCountryId, setSelectedCountryId] = useState<string>('uae');
  
  // Quick Quote Form State for Pakistan & Other Countries
  const [quoteFormOpen, setQuoteFormOpen] = useState(false);
  const [quoteData, setQuoteData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    country: 'Pakistan',
    grade: 'Grade 5',
    subjects: '',
    notes: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submittedId, setSubmittedId] = useState<string | null>(null);

  const activeCountry = countryRegions.find(c => c.id === selectedCountryId) || countryRegions[0];

  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const res = await submitForm(quoteData, 'Custom Quote Request');
    setSubmitting(false);
    if (res.success) {
      setSubmittedId(res.submissionId);
    }
  };

  return (
    <div className="min-h-screen bg-ivory-50">
      <PageHero
        title="Transparent Educational Fees"
        subtitle="Yearly educational programmes with clear, accessible monthly installments. No hidden charges."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Fees' }]}
      />

      <div className="site-container py-16 -mt-8 relative z-20">
        {/* Transparency Banner */}
        <div className="max-w-2xl mx-auto mb-12 bg-white rounded-2xl p-4 shadow-sm border border-champagne-200 flex items-center justify-center gap-3 text-center">
          <Shield className="w-5 h-5 text-champagne-600 shrink-0" />
          <p className="text-xs sm:text-sm font-semibold text-ink-900">
            100% Fee Transparency: No hidden registration costs, exam fees, or forced material charges.
          </p>
        </div>

        {/* Interactive Country Selector */}
        <div className="max-w-4xl mx-auto mb-14">
          <div className="text-center mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-champagne-600 bg-champagne-50 px-3 py-1 rounded-full border border-champagne-200">
              Country Region Selector
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-ink-900 mt-2">
              Select Your Region for Localized Schedules
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 p-2 bg-white rounded-2xl shadow-sm border border-slate-200">
            {countryRegions.map((region) => {
              const isSelected = selectedCountryId === region.id;
              return (
                <button
                  key={region.id}
                  onClick={() => {
                    setSelectedCountryId(region.id);
                    if (region.id === 'pakistan') {
                      setQuoteData(prev => ({ ...prev, country: 'Pakistan' }));
                    }
                  }}
                  className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl font-bold text-xs transition-all ${
                    isSelected
                      ? 'bg-ink-900 text-white shadow-md'
                      : 'bg-ivory-50 text-ink-800 hover:bg-ivory-100'
                  }`}
                >
                  <span className="text-base">{region.flag}</span>
                  <span className="truncate">{region.name.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Region Notice */}
          <div className="mt-3 text-center">
            <span className="text-xs text-slate-500 italic">
              {activeCountry.notice}
            </span>
          </div>
        </div>

        {/* Pakistan Specific Flow */}
        {activeCountry.hasPakistaniPlans ? (
          <div className="max-w-5xl mx-auto mb-20">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-champagne-700 bg-champagne-50 px-3.5 py-1.5 rounded-full border border-champagne-200 mb-4 inline-block">
                Pakistan Educational Pathways
              </span>
              <h3 className="font-extrabold font-heading text-ink-950 mb-3" style={{ fontSize: 'var(--fs-h2)' }}>
                Two Transparent Educational Options in Pakistan
              </h3>
              <p className="text-sm text-ink-700 leading-relaxed max-w-2xl mx-auto">
                We clearly separate tuition-only homework support for students attending physical schools from our full, 
                unified RES Academic Programme. All fees are paid in advance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-stretch mb-12">
              {/* Plan 1: Paid Personal Tuition */}
              <div className="bg-white rounded-3xl p-8 border border-ink-100/15 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-ivory-100 text-ink-800 text-[10px] font-bold uppercase tracking-wider border border-ink-100/20">
                      Option A · Pakistan Tuition
                    </span>
                    <span className="text-xs font-bold text-wine-700">Paid Service</span>
                  </div>
                  <h4 className="font-heading font-extrabold text-2xl text-ink-950 mb-2">
                    {pakistaniPricing.tuitionOnly.label}
                  </h4>
                  <p className="text-xs text-ink-600 mb-6 leading-relaxed">
                    {pakistaniPricing.tuitionOnly.description}
                  </p>

                  <div className="p-4 rounded-2xl bg-ivory-50 border border-ink-100/10 mb-6">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-sm font-normal text-ink-500">From </span>
                      <span className="font-heading font-black text-3xl text-ink-950">PKR 1,000</span>
                      <span className="text-xs text-ink-500 font-medium">/ month (Paid in Advance)</span>
                    </div>
                    <span className="text-xs font-bold text-champagne-700 block">
                      Admission Fee: From PKR 1,000 (one-time)
                    </span>
                    <span className="text-[10px] text-ink-400 mt-1 block italic">
                      *Actual fee depends on grade, learner level, and support scope. Urdu voice support available where helpful.
                    </span>
                  </div>

                  <ul className="space-y-2.5 text-xs text-ink-700 mb-6">
                    {pakistaniPricing.tuitionOnly.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-champagne-600 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-ink-100/10">
                  <Link to="/enrol" className="btn-secondary w-full text-center text-xs py-3">
                    Enrol in Personal Tuition
                  </Link>
                </div>
              </div>

              {/* Plan 2: RES Academic Programme */}
              <div className="bg-white rounded-3xl p-8 border-2 border-champagne-300 shadow-md flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 px-4 py-1 bg-champagne-400 text-ink-950 text-[10px] font-extrabold uppercase tracking-wider rounded-bl-xl shadow-xs">
                  Full Unified Experience
                </div>
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-ink-900 text-champagne-300 text-[10px] font-bold uppercase tracking-wider">
                      Option B · Full Programme
                    </span>
                    <span className="text-xs font-bold text-champagne-700">Proprietary Curriculum</span>
                  </div>
                  <h4 className="font-heading font-extrabold text-2xl text-ink-950 mb-2">
                    {pakistaniPricing.academicProgramme.label}
                  </h4>
                  <p className="text-xs text-ink-600 mb-6 leading-relaxed">
                    {pakistaniPricing.academicProgramme.description}
                  </p>

                  <div className="p-4 rounded-2xl bg-champagne-50/70 border border-champagne-200 mb-6">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-sm font-normal text-ink-500">From </span>
                      <span className="font-heading font-black text-3xl text-ink-950">PKR 5,000</span>
                      <span className="text-xs text-ink-500 font-medium">/ month (Paid in Advance)</span>
                    </div>
                    <span className="text-xs font-bold text-champagne-800 block">
                      Admission Fee: From PKR 5,000 (Termed "RES Academic Programme Fee", never a school fee)
                    </span>
                    <span className="text-[10px] text-ink-400 mt-1 block italic">
                      *Internal Study, Practice &amp; Support sessions and programme-related tuition are included.
                    </span>
                  </div>

                  <ul className="space-y-2.5 text-xs text-ink-700 mb-6">
                    {pakistaniPricing.academicProgramme.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-champagne-600 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-ink-100/10">
                  <Link to="/apply" className="btn-primary w-full text-center text-xs py-3 shadow-sm">
                    Enrol in RES Academic Programme
                  </Link>
                </div>
              </div>
            </div>

            {/* Advance Discounts for Pakistan */}
            <div className="bg-ivory-50 rounded-2xl p-6 border border-ink-100/15 text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-ink-400 block mb-3">
                Advance Payment Schedules &amp; Savings (RES Academic Programme)
              </span>
              <div className="grid sm:grid-cols-4 gap-3">
                <div className="p-3 bg-white rounded-xl border border-ink-100/10">
                  <span className="font-bold text-xs text-ink-900 block">Monthly in Advance</span>
                  <span className="text-[11px] text-ink-500">PKR 5,000 / mo</span>
                </div>
                <div className="p-3 bg-champagne-50/80 rounded-xl border border-champagne-200">
                  <span className="font-bold text-xs text-champagne-800 block">3 Months in Advance</span>
                  <span className="text-[11px] text-champagne-700 font-semibold">3% Discount</span>
                </div>
                <div className="p-3 bg-champagne-50/80 rounded-xl border border-champagne-200">
                  <span className="font-bold text-xs text-champagne-800 block">6 Months in Advance</span>
                  <span className="text-[11px] text-champagne-700 font-semibold">5% Discount</span>
                </div>
                <div className="p-3 bg-champagne-100 rounded-xl border border-champagne-300">
                  <span className="font-bold text-xs text-champagne-900 block">Full Year in Advance</span>
                  <span className="text-[11px] text-champagne-800 font-bold">10% Discount</span>
                </div>
              </div>
              <p className="text-[11px] text-ink-500 mt-4 italic">
                *These are payment options, not programme durations. Each grade is designed as a complete 1-year learning pathway.
              </p>
            </div>
          </div>
        ) : (
          <>
            {/* Grade-by-Grade Annual Educational Programme Breakdown */}
            <div className="mb-24">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-xs font-bold uppercase tracking-widest text-champagne-600 bg-champagne-50 px-3.5 py-1.5 rounded-full border border-champagne-200 mb-4 inline-block">
                  Core Academic Years
                </span>
                <h3 className="font-extrabold font-heading text-ink-950 mb-4" style={{ fontSize: 'var(--fs-h2)' }}>
                  Grade-Based Learning (KG – Grade 8)
                </h3>
                <p className="text-base text-ink-700 leading-relaxed">
                  Each grade represents a full one-year learning stage. The fees below show the cost of the complete annual curriculum, broken down into a standard monthly equivalent.
                </p>
              </div>

              <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-ink-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-ink-950 text-white text-sm font-semibold tracking-wide">
                        <th className="p-5 font-heading">Programme Phase</th>
                        <th className="p-5 font-heading">Grade Level</th>
                        <th className="p-5 font-heading text-right">Monthly Equivalent</th>
                        <th className="p-5 font-heading text-right">Annual Total</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-ink-100">
                      {gradePricing.map((item) => {
                        let monthlyPrice = item.aedMonthly;
                        let annualPrice = item.aedAnnual;
                        let currencySymbol = 'AED';

                        if (activeCountry.id === 'uk') {
                          monthlyPrice = item.gbpMonthly;
                          annualPrice = item.gbpAnnual;
                          currencySymbol = '£';
                        } else if (activeCountry.id === 'usa' || activeCountry.id === 'other') {
                          monthlyPrice = item.usdMonthly;
                          annualPrice = item.usdAnnual;
                          currencySymbol = '$';
                        }

                        const isJuniors = item.programme === 'Royal Juniors';

                        return (
                          <tr key={item.grade} className="hover:bg-ivory-50 transition-colors">
                            <td className="p-5">
                              <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                                isJuniors ? 'bg-ivory-200 text-ink-900' : 'bg-champagne-100 text-champagne-800'
                              }`}>
                                {item.programme}
                              </span>
                            </td>
                            <td className="p-5 font-bold text-ink-950">{item.label}</td>
                            <td className="p-5 text-right font-bold text-champagne-600">
                              {currencySymbol} {monthlyPrice}
                            </td>
                            <td className="p-5 text-right font-semibold text-ink-900">
                              {currencySymbol} {annualPrice}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="p-6 bg-ivory-50 border-t border-ink-100 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-sm text-ink-700">
                    <span className="font-bold text-ink-900">One-Time Admission Fee: </span>
                    {activeCountry.id === 'uk' ? '£22' : activeCountry.id === 'uae' ? 'AED 99' : '$27'}
                  </div>
                  <Link to="/apply" className="btn-primary text-sm px-6 py-2.5">
                    Begin Application
                  </Link>
                </div>
              </div>
            </div>

            {/* Payment Options Section */}
            <div className="max-w-4xl mx-auto mb-24">
              <div className="gradient-ink rounded-3xl p-8 sm:p-12 text-white shadow-xl">
                <div className="text-center mb-10">
                  <h3 className="text-2xl sm:text-3xl font-bold font-heading mb-3">
                    Flexible Payment Options
                  </h3>
                  <p className="text-ivory-50/80 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                    These are payment scheduling options, not different learning durations. Your child receives the full annual programme regardless of how you choose to budget the fees.
                  </p>
                </div>

                <div className="grid sm:grid-cols-3 gap-4 lg:gap-6">
                  <div className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-sm text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="font-bold text-white">1x</span>
                    </div>
                    <h4 className="font-bold text-lg mb-2">Monthly</h4>
                    <p className="text-xs text-ivory-50/70">Pay step-by-step each month. Standard rate applies.</p>
                  </div>
                  
                  <div className="bg-champagne-500/20 border border-champagne-400/30 rounded-2xl p-6 backdrop-blur-sm text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-champagne-500 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">Save 5%</div>
                    <div className="w-12 h-12 bg-champagne-400/20 text-champagne-300 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="font-bold">3x</span>
                    </div>
                    <h4 className="font-bold text-lg mb-2 text-champagne-50">3-Month Term</h4>
                    <p className="text-xs text-ivory-50/70">Pay every quarter. Includes a 5% discount on the term.</p>
                  </div>

                  <div className="bg-champagne-400/20 border border-champagne-400/30 rounded-2xl p-6 backdrop-blur-sm text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-champagne-400 text-ink-950 text-[10px] font-bold px-2 py-1 rounded-bl-lg">Save 10%</div>
                    <div className="w-12 h-12 bg-champagne-400/20 text-champagne-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="font-bold">6x</span>
                    </div>
                    <h4 className="font-bold text-lg mb-2 text-champagne-50">6-Month Term</h4>
                    <p className="text-xs text-ivory-50/70">Pay half-yearly. Includes a 10% discount on the term.</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Separated One-Time Admission Fee */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-20">
          <div className="bg-ink-900 text-white rounded-3xl p-8 border border-ink-800 shadow-xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-champagne-400/20 text-champagne-300 rounded-full text-xs font-bold mb-4">
                <Shield className="w-3.5 h-3.5" /> Single One-Time Charge
              </div>
              <h3 className="text-2xl font-bold font-heading mb-2">One-Time Admission Fee</h3>
              <p className="text-xs text-ivory-50/70 mb-6 leading-relaxed">
                {admissionFee.description} Applies once upon enrolment across all standard grade-based annual pathways.
              </p>
            </div>
            <div className="pt-4 border-t border-ink-800 flex items-baseline justify-between">
              <span className="text-2xl sm:text-3xl font-extrabold text-champagne-400 font-heading">
                AED {admissionFee.aed} <span className="text-xs text-slate-400 font-normal">/ ~${admissionFee.usd} / ~£{admissionFee.gbp}</span>
              </span>
              <span className="text-xs text-champagne-300 font-semibold">One-time only</span>
            </div>
          </div>

          {/* Sibling & Annual Payment Discounts */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-champagne-50 text-champagne-500 rounded-full text-xs font-bold mb-4">
                <Sparkles className="w-3.5 h-3.5" /> Value & Family Discounts
              </div>
              <h3 className="text-2xl font-bold font-heading text-ink-900 mb-2">Family & Annual Discounts</h3>
              <div className="space-y-3 mt-4">
                {annualDiscounts.map((disc, i) => (
                  <div key={i} className="p-3 bg-ivory-50 rounded-xl border border-ivory-100 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-xs text-ink-900 block">{disc.plan}</span>
                      <span className="text-[11px] text-slate-500">{disc.description}</span>
                    </div>
                    <span className="text-xs font-bold text-champagne-600 bg-champagne-100/70 px-2.5 py-1 rounded-md">
                      {disc.discount}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-[11px] text-slate-500 mt-4 italic">
              Discounts are automatically calculated and applied upon enrollment review.
            </p>
          </div>
        </div>

        {/* Visually Separated Optional Services */}
        <div className="mb-20 max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Flexible Add-ons</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-ink-900 mt-1 mb-2">
              Optional Supplementary Services
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Clearly marked optional services. A learner can participate fully in live core learning without purchasing these.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Optional Quran */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-champagne-50 text-champagne-600 rounded-xl flex items-center justify-center mb-4">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold text-sm text-ink-900">{quranProgramme.label}</h4>
                  <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">Optional</span>
                </div>
                <p className="text-xs text-slate-600 mb-4">{quranProgramme.description}</p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs text-slate-500 block">Starting from</span>
                <span className="font-bold text-base text-champagne-600">AED {quranProgramme.fromAed} <span className="text-xs text-slate-400 font-normal">/ ~${quranProgramme.fromUsd}/mo</span></span>
              </div>
            </div>

            {/* Standalone Skill Courses */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold text-sm text-ink-900">Standalone Skill Modules</h4>
                  <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">Optional</span>
                </div>
                <p className="text-xs text-slate-600 mb-4">
                  Targeted courses in AI, Python, Web, and Communication for Grade 9+ learners through Royal Nova.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs text-slate-500 block">From Basic to Advanced</span>
                <span className="font-bold text-base text-ink-900">AED 199 – 699+</span>
              </div>
            </div>

            {/* Books & Workbooks */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-purple-50 text-purple-700 rounded-xl flex items-center justify-center mb-4">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold text-sm text-ink-900">Workbooks & Resources</h4>
                  <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">Optional</span>
                </div>
                <p className="text-xs text-slate-600 mb-4">
                  Supplementary self-paced revision guides, exercise books, and printable project kits.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs text-slate-500 block">Supplementary</span>
                <span className="font-bold text-base text-slate-700">Available upon request</span>
              </div>
            </div>
          </div>
        </div>

        {/* Grade 9+ Custom Quote Section */}
        <div className="gradient-ink text-white rounded-3xl p-8 sm:p-12 border border-champagne-500/20 shadow-2xl max-w-5xl mx-auto mb-16 text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold font-heading mb-3">
            Grade 9+ & Lifelong Learners (Royal Nova)
          </h3>
          <p className="text-xs sm:text-sm text-ivory-50/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            Because high-school and adult learning requirements are inherently custom, we do not charge a single fixed Grade 9 fee. You choose what you need, and we build a custom curriculum and quote.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/royal-nova/query"
              className="px-8 py-4 bg-champagne-400 text-ink-950 font-bold rounded-xl hover:bg-champagne-300 transition-all text-xs shadow-md"
            >
              REQUEST CUSTOM NOVA PLAN & QUOTE
            </Link>
            <Link
              to="/free-assessment"
              className="px-8 py-4 bg-transparent border border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all text-xs"
            >
              TAKE SKILL ASSESSMENT
            </Link>
          </div>
        </div>
      </div>

      {/* Quote Request Modal */}
      <AnimatePresence>
        {quoteFormOpen && (
          <div className="fixed inset-0 bg-ink-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-xl font-bold font-heading text-ink-900">Request a Customized Quote</h3>
                  <p className="text-xs text-slate-500">Provide your details to receive our localized proposal.</p>
                </div>
                <button
                  onClick={() => { setQuoteFormOpen(false); setSubmittedId(null); }}
                  className="text-slate-400 hover:text-ink-900 font-bold text-lg p-1"
                >
                  ✕
                </button>
              </div>

              {submittedId ? (
                <div className="p-6 bg-champagne-50 rounded-2xl text-center border border-champagne-200">
                  <div className="w-12 h-12 bg-champagne-500 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-ink-900 text-base mb-1">Quote Request Received!</h4>
                  <p className="text-xs text-slate-600 mb-3">
                    Your reference ID is <strong className="font-mono text-champagne-700">{submittedId}</strong>. Our academic team will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setQuoteFormOpen(false); setSubmittedId(null); }}
                    className="px-6 py-2.5 bg-ink-900 text-white text-xs font-bold rounded-xl"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleQuoteSubmit} className="space-y-4 text-left">
                  <div>
                    <label className="text-xs font-bold text-ink-900 block mb-1">Parent or Learner Name *</label>
                    <input
                      required
                      type="text"
                      value={quoteData.name}
                      onChange={(e) => setQuoteData({ ...quoteData, name: e.target.value })}
                      placeholder="Your full name"
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-champagne-400"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-ink-900 block mb-1">Email *</label>
                      <input
                        required
                        type="email"
                        value={quoteData.email}
                        onChange={(e) => setQuoteData({ ...quoteData, email: e.target.value })}
                        placeholder="you@email.com"
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-champagne-400"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-ink-900 block mb-1">WhatsApp *</label>
                      <input
                        required
                        type="tel"
                        value={quoteData.whatsapp}
                        onChange={(e) => setQuoteData({ ...quoteData, whatsapp: e.target.value })}
                        placeholder="+92 300 1234567"
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-champagne-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-ink-900 block mb-1">Country</label>
                      <input
                        type="text"
                        value={quoteData.country}
                        onChange={(e) => setQuoteData({ ...quoteData, country: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-champagne-400"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-ink-900 block mb-1">Grade or Level</label>
                      <select
                        value={quoteData.grade}
                        onChange={(e) => setQuoteData({ ...quoteData, grade: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-champagne-400 bg-white"
                      >
                        <option>KG</option>
                        <option>Grade 1</option>
                        <option>Grade 2</option>
                        <option>Grade 3</option>
                        <option>Grade 4</option>
                        <option>Grade 5</option>
                        <option>Grade 6</option>
                        <option>Grade 7</option>
                        <option>Grade 8</option>
                        <option>Grade 9+ / Adult</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-ink-900 block mb-1">Subjects or Goals Needing Support</label>
                    <input
                      type="text"
                      value={quoteData.subjects}
                      onChange={(e) => setQuoteData({ ...quoteData, subjects: e.target.value })}
                      placeholder="e.g. Mathematics, Science, Coding, British curriculum"
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-champagne-400"
                    />
                  </div>

                  <button
                    disabled={submitting}
                    type="submit"
                    className="w-full py-3 bg-ink-900 text-white font-bold rounded-xl hover:bg-ink-800 transition-colors text-xs flex items-center justify-center gap-2"
                  >
                    {submitting ? 'Submitting...' : 'Send Quote Request'}
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Need-Based Scholarships & Community Support */}
      <ScholarshipAndDonationSection />

      <CTASection
        title="Clear, Transparent Investment in Your Child's Future"
        description="Get started with a free learning diagnostic assessment. We evaluate current grade capability before any financial commitment."
        primaryCTA={{ text: "Book Free Assessment", link: "/free-assessment" }}
        secondaryCTA={{ text: "Enrol Now", link: "/enrol" }}
        variant="navy"
      />
    </div>
  );
};

export default FeesPage;
