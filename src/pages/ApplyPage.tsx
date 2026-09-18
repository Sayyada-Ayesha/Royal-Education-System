import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, Shield, Sparkles, Send, ArrowRight, HelpCircle } from 'lucide-react';
import PageHero from '../components/PageHero';
import { submitForm } from '../utils/formSubmit';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const ApplyPage: React.FC = () => {
  useDocumentTitle('Apply | The Royal Education System');
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    whatsapp: '',
    country: 'United Arab Emirates',
    childName: '',
    grade: 'Grade 1',
    programme: 'Royal Juniors',
    curriculum: 'British Curriculum',
    includeQuran: false,
    includeResources: false,
    requestScholarship: false,
    learningGoals: '',
  });

  const [loading, setLoading] = useState(false);
  const [submissionId, setSubmissionId] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleGradeChange = (selectedGrade: string) => {
    let prog = 'Royal Juniors';
    if (['Grade 5', 'Grade 6', 'Grade 7', 'Grade 8'].includes(selectedGrade)) {
      prog = 'Royal Gems';
    } else if (selectedGrade === 'Grade 9+' || selectedGrade === 'Adult / Professional') {
      prog = 'Royal Nova';
    }
    setFormData(prev => ({ ...prev, grade: selectedGrade, programme: prog }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    const res = await submitForm(formData, 'Official Application');
    setLoading(false);

    if (res.success) {
      setSubmissionId(res.submissionId);
    } else {
      setErrorMsg(res.error || 'Failed to submit application. Please reach out to us on WhatsApp.');
    }
  };

  return (
    <div className="min-h-screen bg-ivory-50">
      <PageHero
        title="Apply to Royal Education System"
        subtitle="Take the first official step toward structured, boundary-free online education."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Apply Now' }]}
      />

      <div className="site-container py-16 -mt-8 relative z-20">
        <div className="max-w-3xl mx-auto">
          {submissionId ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-3xl p-8 sm:p-12 border border-champagne-200 shadow-2xl text-center"
            >
              <div className="w-16 h-16 bg-champagne-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-champagne-500/30">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <span className="text-xs uppercase font-bold tracking-widest text-champagne-600 bg-champagne-50 px-3 py-1 rounded-full border border-champagne-200">
                Application Received
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-ink-900 mt-3 mb-2">
                Welcome to the Journey!
              </h2>
              <p className="text-sm text-slate-600 mb-6 max-w-md mx-auto">
                Your application has been registered with reference ID:
              </p>
              <div className="inline-block px-5 py-2.5 bg-ivory-50 border border-slate-200 rounded-xl font-mono font-bold text-champagne-700 text-lg mb-8">
                {submissionId}
              </div>

              <div className="p-5 bg-ivory-50 rounded-2xl text-left border border-slate-200 text-xs text-slate-700 mb-8 space-y-2">
                <h4 className="font-bold text-ink-900 text-sm mb-2">What Happens Next:</h4>
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 bg-ink-900 text-white rounded-full flex items-center justify-center text-[10px] shrink-0 mt-0.5">1</span>
                  <span>An admissions coordinator will verify your learning goals via WhatsApp or Email.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 bg-ink-900 text-white rounded-full flex items-center justify-center text-[10px] shrink-0 mt-0.5">2</span>
                  <span>We schedule your complimentary Diagnostic Learning Assessment to determine baseline placement.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 bg-ink-900 text-white rounded-full flex items-center justify-center text-[10px] shrink-0 mt-0.5">3</span>
                  <span>Your live cohort onboarding and schedule configuration are finalized.</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/"
                  className="px-6 py-3 bg-ink-900 text-white font-bold text-xs rounded-xl hover:bg-ink-800 transition-colors"
                >
                  Return to Homepage
                </Link>
                <Link
                  to="/free-demo"
                  className="px-6 py-3 border border-champagne-500 text-champagne-600 font-bold text-xs rounded-xl hover:bg-champagne-50 transition-colors"
                >
                  Schedule Demo While You Wait
                </Link>
              </div>
            </motion.div>
          ) : (
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
              <div className="text-center mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-champagne-600 bg-champagne-50 px-3 py-1 rounded-full border border-champagne-200">
                  Enrolment Form
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-ink-900 mt-2 mb-1">
                  Start Your Child's Enrolment
                </h2>
                <p className="text-xs text-slate-500">
                  Quick and straightforward. No upfront commitment required before your assessment.
                </p>
              </div>

              {errorMsg && (
                <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xl border border-red-200 mb-6">
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Section 1: Guardian Details */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-champagne-700 mb-3 border-b pb-1">
                    1. Guardian Information
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-ink-900 block mb-1">Parent / Guardian Name *</label>
                      <input
                        required
                        type="text"
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        placeholder="Full Name"
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-champagne-500"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-ink-900 block mb-1">Country of Residence *</label>
                      <select
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-champagne-500 bg-white"
                      >
                        <option>United Arab Emirates</option>
                        <option>Saudi Arabia</option>
                        <option>Qatar</option>
                        <option>Kuwait</option>
                        <option>Oman</option>
                        <option>Bahrain</option>
                        <option>United Kingdom</option>
                        <option>United States</option>
                        <option>Pakistan</option>
                        <option>Other International</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-ink-900 block mb-1">Email Address *</label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="parent@example.com"
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-champagne-500"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-ink-900 block mb-1">WhatsApp Number *</label>
                      <input
                        required
                        type="tel"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        placeholder="+971 50 123 4567"
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-champagne-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 2: Learner Details & Grade */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-champagne-700 mb-3 border-b pb-1">
                    2. Student Details & Placement
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-ink-900 block mb-1">Child / Student Name *</label>
                      <input
                        required
                        type="text"
                        value={formData.childName}
                        onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                        placeholder="Student's full name"
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-champagne-500"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-ink-900 block mb-1">Target Grade *</label>
                      <select
                        value={formData.grade}
                        onChange={(e) => handleGradeChange(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-champagne-500 bg-white"
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
                        <option>Grade 9+</option>
                        <option>Adult / Professional</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-ink-900 block mb-1">Assigned Pathway</label>
                      <input
                        readOnly
                        type="text"
                        value={formData.programme}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50 font-bold text-champagne-700 cursor-not-allowed"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-ink-900 block mb-1">
                        Current Day-School Curriculum <span className="text-ink-400 font-normal">(Context only — RES has its own proprietary curriculum)</span>
                      </label>
                      <select
                        value={formData.curriculum}
                        onChange={(e) => setFormData({ ...formData, curriculum: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-champagne-500 bg-white"
                      >
                        <option>British Curriculum (IGCSE / GCSE)</option>
                        <option>CBSE / ICSE (Indian Board)</option>
                        <option>American Curriculum</option>
                        <option>National Curriculum (UAE / Saudi / Pakistan)</option>
                        <option>IB (International Baccalaureate)</option>
                        <option>Homeschooled / Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Section 3: Optional Add-ons & Scholarship */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-champagne-700 mb-3 border-b pb-1">
                    3. Optional Learning Add-ons & Financial Assistance
                  </h3>
                  <div className="space-y-3">
                    <label className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors">
                      <input
                        type="checkbox"
                        checked={formData.requestScholarship}
                        onChange={(e) => setFormData({ ...formData, requestScholarship: e.target.checked })}
                        className="mt-0.5 h-4 w-4 rounded border-slate-300 text-champagne-600 focus:ring-champagne-500"
                      />
                      <div>
                        <span className="text-xs font-bold text-ink-900 block">Apply for Need-Based Financial Scholarship</span>
                        <span className="text-[11px] text-slate-500 block">Need-based scholarship support may be available, subject to assessment and available funding (up to 50% fee assistance).</span>
                      </div>
                    </label>

                    <label className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors">
                      <input
                        type="checkbox"
                        checked={formData.includeQuran}
                        onChange={(e) => setFormData({ ...formData, includeQuran: e.target.checked })}
                        className="mt-0.5 h-4 w-4 rounded border-slate-300 text-champagne-600 focus:ring-champagne-500"
                      />
                      <div>
                        <span className="text-xs font-bold text-ink-900 block">Add Quran & Islamic Learning Programme</span>
                        <span className="text-[11px] text-slate-500 block">Optional add-on covering Quran recitation, comprehension, Akhlaq, and Islamic values (From AED 79/mo).</span>
                      </div>
                    </label>

                    <label className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors">
                      <input
                        type="checkbox"
                        checked={formData.includeResources}
                        onChange={(e) => setFormData({ ...formData, includeResources: e.target.checked })}
                        className="mt-0.5 h-4 w-4 rounded border-slate-300 text-champagne-600 focus:ring-champagne-500"
                      />
                      <div>
                        <span className="text-xs font-bold text-ink-900 block">Include Physical Workbooks & Project Kits</span>
                        <span className="text-[11px] text-slate-500 block">Supplementary printed exercises and self-paced material kits shipped to your location.</span>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Learning Goals */}
                <div>
                  <label className="text-xs font-bold text-ink-900 block mb-1">Learning Priorities / Concerns (Optional)</label>
                  <textarea
                    rows={2}
                    value={formData.learningGoals}
                    onChange={(e) => setFormData({ ...formData, learningGoals: e.target.value })}
                    placeholder="e.g. Needs help with mental math, interested in coding, needs stronger confidence in English speaking..."
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-champagne-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    disabled={loading}
                    type="submit"
                    className="w-full py-4 bg-champagne-400 text-ink-950 font-bold rounded-xl hover:bg-champagne-300 transition-all text-xs flex items-center justify-center gap-2 shadow-lg shadow-champagne-400/20"
                  >
                    {loading ? 'Submitting Application...' : 'Submit Application Now'}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-center text-slate-500 mt-3">
                    By submitting, our academic team will reach out to confirm assessment timing. No immediate payment required.
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplyPage;
