import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, 
  HeartHandshake, 
  ShieldCheck, 
  ArrowRight, 
  FileText, 
  Sparkles,
  Lock,
  Send,
  CheckCircle2,
  Heart
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { scholarshipConfig } from '../data/pricingData';
import { submitForm } from '../utils/formSubmit';

export const ScholarshipAndDonationSection: React.FC = () => {
  const [showAppModal, setShowAppModal] = useState(false);
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    whatsapp: '',
    country: 'Pakistan',
    childName: '',
    grade: 'Grade 5',
    monthlyIncome: '',
    householdDependents: '2',
    requestedSupport: 'Up to 50%',
    financialReason: '',
    identificationInfo: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submittedId, setSubmittedId] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const res = await submitForm(formData, 'Need-Based Scholarship Application');
    setSubmitting(false);
    if (res.success) {
      setSubmittedId(res.submissionId);
    }
  };

  return (
    <section className="section-padding px-4 bg-white border-b border-ink-100/10 relative overflow-hidden" id="scholarships">
      <div className="site-container relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne-400/15 border border-champagne-400/30 text-champagne-800 text-xs font-bold uppercase tracking-widest mb-3.5">
            <GraduationCap className="w-3.5 h-3.5 text-champagne-600" /> Educational Access &amp; Opportunity
          </div>
          <h2 
            className="font-heading font-extrabold text-ink-950 mb-3 tracking-tight"
            style={{ fontSize: 'var(--fs-h2)' }}
          >
            Need-Based Scholarships &amp; Learner Support
          </h2>
          <p 
            className="text-ink-600 max-w-2xl mx-auto leading-relaxed"
            style={{ fontSize: 'var(--fs-body)' }}
          >
            We believe financial constraints should never prevent a motivated young mind from receiving a world-class, 
            structured education. Through community philanthropy and dedicated allocation, we offer transparent fee assistance.
          </p>
        </div>

        {/* Dual Cards: Scholarship Assistance & Support a Learner */}
        <div className="grid md:grid-cols-12 gap-8 lg:gap-12 max-w-5xl mx-auto mb-14 items-stretch">
          
          {/* Card 1: Apply for Need-Based Scholarship (7 Cols) */}
          <div className="md:col-span-7 bg-ivory-50/80 rounded-3xl p-7 sm:p-8 border border-ink-100/15 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-ink-950 text-champagne-300 text-[10px] font-bold uppercase tracking-wider border border-champagne-400/30">
                  Fee Assistance Pathway
                </span>
                <span className="text-xs font-extrabold text-champagne-700">
                  {scholarshipConfig.maxAssistance} Assistance
                </span>
              </div>
              
              <h3 className="font-heading font-extrabold text-2xl text-ink-950 mb-3">
                Cannot Afford the Full Fee?
              </h3>
              
              <p className="text-xs sm:text-sm text-ink-600 leading-relaxed mb-6">
                {scholarshipConfig.policyNotice}
              </p>

              {/* 4-Step Review Flow */}
              <div className="space-y-3 mb-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-ink-400 block">
                  Transparent Review Process
                </span>
                {scholarshipConfig.workflow.map((w) => (
                  <div key={w.step} className="flex items-start gap-3 p-2.5 rounded-xl bg-white border border-ink-100/10">
                    <span className="w-5 h-5 rounded-full bg-champagne-500/20 text-champagne-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {w.step}
                    </span>
                    <div>
                      <h5 className="font-heading font-bold text-xs text-ink-900">{w.title}</h5>
                      <p className="text-[11px] text-ink-600 leading-snug">{w.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-ink-100/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <button
                onClick={() => setShowAppModal(true)}
                className="btn-primary text-xs px-6 py-3 flex items-center justify-center gap-2 shadow-sm"
              >
                APPLY FOR SCHOLARSHIP <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <span className="text-[11px] text-ink-500 italic flex items-center gap-1.5">
                <Lock className="w-3 h-3 text-ink-400" /> Confidential Evaluation
              </span>
            </div>
          </div>

          {/* Card 2: Support a Learner / Donate (5 Cols) */}
          <div className="md:col-span-5 bg-gradient-to-br from-ink-950 to-ink-900 text-white rounded-3xl p-7 sm:p-8 border border-champagne-400/25 shadow-md flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-36 h-36 bg-champagne-400/10 rounded-full blur-3xl pointer-events-none" />
            
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne-400/15 border border-champagne-400/30 text-champagne-300 text-[10px] font-bold uppercase tracking-wider mb-5">
                <Heart className="w-3 h-3 text-champagne-400" /> Community Philanthropy
              </div>

              <h3 className="font-heading font-extrabold text-xl text-white mb-3 tracking-tight">
                Support a Learner
              </h3>

              <p className="text-xs sm:text-sm text-ivory-200/80 leading-relaxed mb-6">
                Directly sponsor a child’s education. Community donations fund our verified need-based scholarships, 
                enabling talented students with genuine financial need to access structured conceptual education, AI literacy, and mentorship.
              </p>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-6">
                <span className="text-xs font-bold text-champagne-300 block mb-1">
                  100% Directed Funding
                </span>
                <p className="text-[11px] text-ivory-200/70 leading-relaxed">
                  Every contributed dollar or rupee directly reduces educational fees for vetted families. No administrative diversion.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <a
                href={scholarshipConfig.donation.link}
                className="btn-secondary text-xs w-full py-3 border-champagne-400/40 text-champagne-300 hover:bg-champagne-400/15 text-center flex items-center justify-center gap-2"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Thank you for your interest in supporting a learner. Our official donation gateway is currently being finalized. Please contact info@royaleducationsystem.com to discuss direct student sponsorship.");
                }}
              >
                DONATE FOR SCHOLARSHIPS <HeartHandshake className="w-4 h-4 text-champagne-400" />
              </a>
              <span className="text-[10px] text-ivory-300/50 block text-center mt-2">
                *Donation integration placeholder · Verified student sponsorship
              </span>
            </div>
          </div>

        </div>

      </div>

      {/* Scholarship Application Modal */}
      <AnimatePresence>
        {showAppModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-950/70 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-xl w-full my-8 shadow-2xl border border-ink-100 relative"
            >
              <button
                onClick={() => setShowAppModal(false)}
                className="absolute top-5 right-5 text-ink-400 hover:text-ink-900 text-lg font-bold w-8 h-8 rounded-full bg-ivory-100 flex items-center justify-center"
              >
                &times;
              </button>

              {submittedId ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-champagne-100 text-champagne-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading font-extrabold text-2xl text-ink-950 mb-2">
                    Application Received
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-600 mb-4">
                    Your confidential scholarship request has been submitted successfully.
                  </p>
                  <p className="text-xs font-mono font-bold text-champagne-700 bg-champagne-50 p-2 rounded-lg border border-champagne-200 mb-6">
                    Reference ID: {submittedId}
                  </p>
                  <button
                    onClick={() => {
                      setSubmittedId(null);
                      setShowAppModal(false);
                    }}
                    className="btn-primary text-xs px-6 py-2.5"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-champagne-700 block mb-1">
                      Confidential Application
                    </span>
                    <h3 className="font-heading font-extrabold text-xl text-ink-950">
                      Need-Based Scholarship Application
                    </h3>
                    <p className="text-xs text-ink-500 mt-1">
                      Please provide accurate household details. All information is held in strict privacy.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-ink-700 uppercase tracking-wider mb-1">
                          Parent / Guardian Name *
                        </label>
                        <input
                          type="text"
                          name="parentName"
                          required
                          value={formData.parentName}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-ink-100 text-xs focus:ring-2 focus:ring-champagne-500 outline-none"
                          placeholder="Full Name"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-ink-700 uppercase tracking-wider mb-1">
                          Child / Learner Name *
                        </label>
                        <input
                          type="text"
                          name="childName"
                          required
                          value={formData.childName}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-ink-100 text-xs focus:ring-2 focus:ring-champagne-500 outline-none"
                          placeholder="Student Name"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-ink-700 uppercase tracking-wider mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-ink-100 text-xs focus:ring-2 focus:ring-champagne-500 outline-none"
                          placeholder="parent@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-ink-700 uppercase tracking-wider mb-1">
                          WhatsApp / Phone *
                        </label>
                        <input
                          type="tel"
                          name="whatsapp"
                          required
                          value={formData.whatsapp}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-ink-100 text-xs focus:ring-2 focus:ring-champagne-500 outline-none"
                          placeholder="+92 3XX XXXXXXX"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-ink-700 uppercase tracking-wider mb-1">
                          Country
                        </label>
                        <select
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          className="w-full px-3 py-2.5 rounded-xl border border-ink-100 text-xs focus:ring-2 focus:ring-champagne-500 outline-none"
                        >
                          <option value="Pakistan">Pakistan</option>
                          <option value="UAE">United Arab Emirates</option>
                          <option value="UK">United Kingdom</option>
                          <option value="USA">United States</option>
                          <option value="Other">Other Country</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-ink-700 uppercase tracking-wider mb-1">
                          Grade / Level
                        </label>
                        <select
                          name="grade"
                          value={formData.grade}
                          onChange={handleChange}
                          className="w-full px-3 py-2.5 rounded-xl border border-ink-100 text-xs focus:ring-2 focus:ring-champagne-500 outline-none"
                        >
                          {['KG', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9+ / Nova'].map(g => (
                            <option key={g} value={g}>{g}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-ink-700 uppercase tracking-wider mb-1">
                          Monthly Household Income
                        </label>
                        <input
                          type="text"
                          name="monthlyIncome"
                          required
                          value={formData.monthlyIncome}
                          onChange={handleChange}
                          className="w-full px-3 py-2.5 rounded-xl border border-ink-100 text-xs focus:ring-2 focus:ring-champagne-500 outline-none"
                          placeholder="e.g. PKR 45,000"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-ink-700 uppercase tracking-wider mb-1">
                        Reason for Scholarship Application *
                      </label>
                      <textarea
                        name="financialReason"
                        required
                        rows={3}
                        value={formData.financialReason}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-ink-100 text-xs focus:ring-2 focus:ring-champagne-500 outline-none resize-none"
                        placeholder="Please summarize your household financial circumstances and why fee assistance is requested..."
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="btn-primary text-xs w-full py-3 flex items-center justify-center gap-2"
                      >
                        {submitting ? 'Submitting Application...' : 'SUBMIT CONFIDENTIAL APPLICATION'} <Send className="w-3.5 h-3.5" />
                      </button>
                      <p className="text-[10px] text-center text-ink-400 mt-2 italic">
                        *Need-based scholarship support may be available, subject to assessment and available funding. Application does not guarantee automatic approval.
                      </p>
                    </div>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default ScholarshipAndDonationSection;
