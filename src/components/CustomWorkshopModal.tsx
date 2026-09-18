import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, Sparkles, AlertCircle } from 'lucide-react';

interface CustomWorkshopModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillTopic?: string;
}

export const CustomWorkshopModal: React.FC<CustomWorkshopModalProps> = ({ isOpen, onClose, prefillTopic = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    country: '',
    topic: prefillTopic,
    learnerAge: '',
    preferredFormat: 'Live Online Cohort',
    preferredDuration: 'Focused Workshop (1-2 Days)',
    learningGoal: '',
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
                <Sparkles className="w-3 h-3" /> Custom Learning Request
              </span>
            </div>
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white tracking-tight">
              Request a Custom Workshop or Learning Topic
            </h3>
            <p className="text-xs sm:text-sm text-ivory-300/80 mt-1 max-w-lg leading-relaxed">
              Tell us what you want to learn and our team can review your request.
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
                  Request Received
                </h4>
                <p className="text-xs sm:text-sm text-ink-600 max-w-md mx-auto mb-6 leading-relaxed">
                  Thank you for submitting your custom learning request. Our academic curriculum team will review your suggested topic and reach out via WhatsApp/Email.
                </p>
                <div className="p-4 bg-pearl-100 rounded-xl max-w-md mx-auto text-left text-xs text-ink-700 border border-ink-100 mb-6">
                  <p className="font-bold text-ink-900 mb-1">Topic Requested:</p>
                  <p className="italic text-ink-600">{formData.topic || 'Custom learning inquiry'}</p>
                </div>
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
                {/* Notice Box */}
                <div className="p-3.5 bg-champagne-50 border border-champagne-200/70 rounded-xl flex items-start gap-2.5 text-ink-800">
                  <AlertCircle className="w-4 h-4 text-champagne-700 shrink-0 mt-0.5" />
                  <p className="text-[11px] leading-relaxed">
                    <strong>Review Notice:</strong> Tell us what you want to learn and our team can review your request. Submitting an inquiry does not guarantee that every requested topic is immediately available or scheduled.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-ink-900 mb-1 text-[11px] uppercase tracking-wider">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Ahmed"
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
                      placeholder="e.g. sarah@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-ink-200 focus:outline-none focus:border-champagne-500 bg-white"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-ink-900 mb-1 text-[11px] uppercase tracking-wider">
                      WhatsApp Number (with Country Code) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      placeholder="+92 300 1234567"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-ink-200 focus:outline-none focus:border-champagne-500 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-ink-900 mb-1 text-[11px] uppercase tracking-wider">
                      Country of Residence *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="e.g. Pakistan, UAE, UK"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-ink-200 focus:outline-none focus:border-champagne-500 bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-ink-900 mb-1 text-[11px] uppercase tracking-wider">
                    Topic / Skill Wanted *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    placeholder="e.g. Advanced Prompt Engineering for Teachers / Financial Modeling"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-ink-200 focus:outline-none focus:border-champagne-500 bg-white"
                  />
                </div>

                <div className="grid sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block font-bold text-ink-900 mb-1 text-[11px] uppercase tracking-wider">
                      Learner Age / Level *
                    </label>
                    <select
                      value={formData.learnerAge}
                      onChange={(e) => setFormData({ ...formData, learnerAge: e.target.value })}
                      required
                      className="w-full px-3 py-2.5 rounded-xl border border-ink-200 focus:outline-none focus:border-champagne-500 bg-white"
                    >
                      <option value="">Select Level</option>
                      <option value="Junior (Ages 5-10)">Junior (Ages 5-10)</option>
                      <option value="Middle (Ages 11-14)">Middle (Ages 11-14)</option>
                      <option value="High School (Ages 15-18)">High School (Ages 15-18)</option>
                      <option value="University / Graduate">University / Graduate</option>
                      <option value="Working Professional / Adult">Working Professional / Adult</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-bold text-ink-900 mb-1 text-[11px] uppercase tracking-wider">
                      Preferred Format
                    </label>
                    <select
                      value={formData.preferredFormat}
                      onChange={(e) => setFormData({ ...formData, preferredFormat: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-ink-200 focus:outline-none focus:border-champagne-500 bg-white"
                    >
                      <option value="Live Online Cohort">Live Online Cohort</option>
                      <option value="1-on-1 Personal Intensive">1-on-1 Personal Intensive</option>
                      <option value="Small Executive Group">Small Executive Group</option>
                      <option value="Self-Paced with Review">Self-Paced with Review</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-bold text-ink-900 mb-1 text-[11px] uppercase tracking-wider">
                      Preferred Duration
                    </label>
                    <select
                      value={formData.preferredDuration}
                      onChange={(e) => setFormData({ ...formData, preferredDuration: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-ink-200 focus:outline-none focus:border-champagne-500 bg-white"
                    >
                      <option value="Focused Workshop (1-2 Days)">Focused (1-2 Days)</option>
                      <option value="1-Week Intensive">1-Week Intensive</option>
                      <option value="1-Month Structured">1-Month Structured</option>
                      <option value="Multi-Month Custom">Multi-Month Custom</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-ink-900 mb-1 text-[11px] uppercase tracking-wider">
                    Learning Goal / Desired Outcome *
                  </label>
                  <textarea
                    rows={2}
                    required
                    value={formData.learningGoal}
                    onChange={(e) => setFormData({ ...formData, learningGoal: e.target.value })}
                    placeholder="What specific outcome or capability do you want to achieve through this learning topic?"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-ink-200 focus:outline-none focus:border-champagne-500 bg-white resize-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-ink-900 mb-1 text-[11px] uppercase tracking-wider">
                    Additional Context or Scheduling Preferences
                  </label>
                  <textarea
                    rows={2}
                    value={formData.additionalInfo}
                    onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                    placeholder="Any specific dates, group members, language preferences (English or Urdu voice support), or background details..."
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
                      'Submitting Request...'
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" /> Submit Topic Request
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

export default CustomWorkshopModal;
