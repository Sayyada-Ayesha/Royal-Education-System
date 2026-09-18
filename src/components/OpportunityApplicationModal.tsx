import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, ShieldCheck, Briefcase } from 'lucide-react';
import { opportunityConfig } from '../data/offeringsData';

interface OpportunityModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillArea?: string;
}

export const OpportunityApplicationModal: React.FC<OpportunityModalProps> = ({ isOpen, onClose, prefillArea = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    country: '',
    age: '',
    educationLevel: 'High School',
    resProgramme: 'Royal Nova',
    skills: '',
    portfolioLink: '',
    resumeLink: '',
    areaOfInterest: prefillArea || 'AI Solution Testing & Evaluation',
    whyInterested: '',
    additionalInfo: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-950/70 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-champagne-200/60 overflow-hidden my-8"
        >
          {/* Header Bar */}
          <div className="bg-gradient-to-r from-ink-950 via-ink-900 to-ink-950 text-white p-6 sm:p-7 relative border-b border-champagne-500/20">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-ivory-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-champagne-500/20 border border-champagne-400/30 text-champagne-300 text-[10px] font-extrabold uppercase tracking-widest flex items-center gap-1">
                <Briefcase className="w-3 h-3" /> Partner Pathway: SYNX AI HORIZON
              </span>
            </div>
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white tracking-tight">
              Apply for Practical Opportunity Pathway
            </h3>
            <p className="text-xs sm:text-sm text-ivory-300/80 mt-1 max-w-lg leading-relaxed">
              Internship, volunteer, and hands-on practical exposure pathways through SYNX AI HORIZON.
            </p>
          </div>

          {/* Form Content */}
          <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto bg-ivory-50/50">
            {isSuccess ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h4 className="font-heading font-bold text-xl text-ink-950 mb-2">
                  Application Received
                </h4>
                <p className="text-xs sm:text-sm text-ink-600 max-w-md mx-auto mb-6 leading-relaxed">
                  Thank you for submitting your opportunity application for SYNX AI HORIZON. Our team will review your portfolio credentials and notify you if a matching opening is available.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="btn-primary text-xs px-6 py-2.5 rounded-xl font-bold"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                {/* Mandatory Non-Guarantee Policy Notice */}
                <div className="p-3.5 bg-amber-50/90 border border-amber-200 rounded-xl flex items-start gap-2.5 text-amber-950">
                  <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div className="text-[11px] leading-relaxed">
                    <p className="font-bold text-amber-900 mb-0.5">Strict Non-Guaranteed Policy Notice:</p>
                    <p>{opportunityConfig.strictPolicyNotice}</p>
                    <p className="mt-1 text-amber-800 italic">
                      Potential formats include paid, unpaid, and volunteer exposure. Submission does not guarantee placement.
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-ink-900 mb-1 text-[11px] uppercase tracking-wider">
                      Applicant Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Bilal Mansoor"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-ink-200 focus:outline-none focus:border-champagne-500 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-ink-900 mb-1 text-[11px] uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. bilal@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-ink-200 focus:outline-none focus:border-champagne-500 bg-white"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block font-bold text-ink-900 mb-1 text-[11px] uppercase tracking-wider">
                      WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      placeholder="+92 321 0000000"
                      className="w-full px-3 py-2.5 rounded-xl border border-ink-200 focus:outline-none focus:border-champagne-500 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-ink-900 mb-1 text-[11px] uppercase tracking-wider">
                      Country *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="e.g. Pakistan / UAE"
                      className="w-full px-3 py-2.5 rounded-xl border border-ink-200 focus:outline-none focus:border-champagne-500 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-ink-900 mb-1 text-[11px] uppercase tracking-wider">
                      Age *
                    </label>
                    <input
                      type="number"
                      required
                      min={12}
                      max={99}
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      placeholder="e.g. 17"
                      className="w-full px-3 py-2.5 rounded-xl border border-ink-200 focus:outline-none focus:border-champagne-500 bg-white"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-ink-900 mb-1 text-[11px] uppercase tracking-wider">
                      Current Education Level *
                    </label>
                    <select
                      value={formData.educationLevel}
                      onChange={(e) => setFormData({ ...formData, educationLevel: e.target.value })}
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl border border-ink-200 focus:outline-none focus:border-champagne-500 bg-white"
                    >
                      <option value="Middle School (Grades 6-8)">Middle School (Grades 6-8)</option>
                      <option value="High School / O-Levels / Matric">High School / O-Levels / Matric</option>
                      <option value="College / A-Levels / Intermediate">College / A-Levels / Intermediate</option>
                      <option value="Undergraduate Student">Undergraduate Student</option>
                      <option value="Graduate / Professional">Graduate / Professional</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-bold text-ink-900 mb-1 text-[11px] uppercase tracking-wider">
                      RES Programme / Course Enrolled
                    </label>
                    <input
                      type="text"
                      value={formData.resProgramme}
                      onChange={(e) => setFormData({ ...formData, resProgramme: e.target.value })}
                      placeholder="e.g. Royal Nova / AI Masterclass"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-ink-200 focus:outline-none focus:border-champagne-500 bg-white"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-ink-900 mb-1 text-[11px] uppercase tracking-wider">
                      Area of Opportunity Interest *
                    </label>
                    <select
                      value={formData.areaOfInterest}
                      onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl border border-ink-200 focus:outline-none focus:border-champagne-500 bg-white"
                    >
                      {opportunityConfig.areas.map(area => (
                        <option key={area} value={area}>{area}</option>
                      ))}
                      <option value="Other Technology Opportunity">Other Technology Opportunity</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-bold text-ink-900 mb-1 text-[11px] uppercase tracking-wider">
                      Core Skills / Tools You Use *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.skills}
                      onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                      placeholder="e.g. React, Python, Figma, Prompt Engineering"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-ink-200 focus:outline-none focus:border-champagne-500 bg-white"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-ink-900 mb-1 text-[11px] uppercase tracking-wider">
                      Digital Portfolio Link *
                    </label>
                    <input
                      type="url"
                      required
                      value={formData.portfolioLink}
                      onChange={(e) => setFormData({ ...formData, portfolioLink: e.target.value })}
                      placeholder="https://yourportfolio.com or GitHub URL"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-ink-200 focus:outline-none focus:border-champagne-500 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-ink-900 mb-1 text-[11px] uppercase tracking-wider">
                      CV / Resume Link (Google Drive / PDF)
                    </label>
                    <input
                      type="url"
                      value={formData.resumeLink}
                      onChange={(e) => setFormData({ ...formData, resumeLink: e.target.value })}
                      placeholder="https://drive.google.com/..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-ink-200 focus:outline-none focus:border-champagne-500 bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-ink-900 mb-1 text-[11px] uppercase tracking-wider">
                    Why Are You Interested in this Practical Opportunity? *
                  </label>
                  <textarea
                    rows={2}
                    required
                    value={formData.whyInterested}
                    onChange={(e) => setFormData({ ...formData, whyInterested: e.target.value })}
                    placeholder="Describe how this hands-on opportunity connects to your learning goals and what contribution you aim to make."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-ink-200 focus:outline-none focus:border-champagne-500 bg-white resize-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-ink-900 mb-1 text-[11px] uppercase tracking-wider">
                    Additional Information or Availability
                  </label>
                  <textarea
                    rows={2}
                    value={formData.additionalInfo}
                    onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                    placeholder="Weekly hours available, preferred start timeline, or relevant project highlights..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-ink-200 focus:outline-none focus:border-champagne-500 bg-white resize-none"
                  />
                </div>

                <div className="pt-3 flex items-center justify-between border-t border-ink-100">
                  <button
                    type="button"
                    onClick={onClose}
                    className="text-ink-500 hover:text-ink-900 font-bold px-4 py-2"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary text-xs px-6 py-2.5 rounded-xl font-bold flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      'Submitting Application...'
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" /> Submit Application
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default OpportunityApplicationModal;
