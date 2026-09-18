import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Phone, MapPin, Send, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';
import PageHero from '../components/PageHero';
import { siteConfig } from '../data/siteConfig';
import { submitForm } from '../utils/formSubmit';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const ContactPage: React.FC = () => {
  useDocumentTitle('Contact | The Royal Education System');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    country: 'UAE',
    category: 'General Information',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submissionId, setSubmissionId] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    const res = await submitForm(formData, 'General Query');
    setLoading(false);

    if (res.success) {
      setSubmissionId(res.submissionId);
    } else {
      setErrorMsg(res.error || 'Unable to submit your query at this moment. Please reach out via WhatsApp.');
    }
  };

  return (
    <div className="min-h-screen bg-ivory-50">
      <PageHero
        title="Contact & Academic Support"
        subtitle="Connect directly with our admissions and academic advisory team. We are here to help."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Contact' }]}
      />

      <div className="site-container py-16 -mt-8 relative z-20">
        <div className="grid lg:grid-cols-12 gap-10 max-w-6xl mx-auto mb-16">
          {/* Contact Details & Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-champagne-600 bg-champagne-50 px-3 py-1 rounded-full border border-champagne-200 mb-3 inline-block">
                Direct Channels
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-ink-900 mb-4">
                We're Here to Answer Every Question
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-8 leading-relaxed">
                Whether you need assistance choosing between Royal Juniors and Royal Gems, or want a custom quote for Royal Nova skills, our team responds promptly.
              </p>

              <div className="space-y-4 mb-8">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-200 hover:border-champagne-400 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-champagne-50 text-champagne-600 flex items-center justify-center group-hover:bg-champagne-500 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Official Email</span>
                    <span className="text-xs sm:text-sm font-semibold text-ink-900">{siteConfig.contact.email}</span>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-200 hover:border-champagne-400 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Instant WhatsApp</span>
                    <span className="text-xs sm:text-sm font-semibold text-ink-900">{siteConfig.contact.whatsapp}</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-200">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Advisory Hours</span>
                    <span className="text-xs sm:text-sm font-semibold text-ink-900">Monday – Saturday: 9:00 AM – 7:00 PM (Gulf Time)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 bg-ink-900 text-white rounded-2xl border border-ink-800">
              <span className="text-xs font-bold text-champagne-300 block mb-1">Global Online Accessibility</span>
              <p className="text-[11px] text-ivory-50/80 leading-relaxed">
                Serving families across Dubai, Sharjah, Abu Dhabi, Saudi Arabia, Qatar, UK, and worldwide with flexible international time-zone scheduling.
              </p>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-ink-900 mb-2">
                Send an Academic Query
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Fill in the details below and an academic coordinator will contact you shortly.
              </p>

              {submissionId ? (
                <div className="p-8 bg-champagne-50 rounded-2xl text-center border border-champagne-200">
                  <div className="w-14 h-14 bg-champagne-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-heading font-extrabold text-lg text-ink-900 mb-1">
                    Thank You! Query Submitted
                  </h4>
                  <p className="text-xs text-slate-600 mb-4 max-w-md mx-auto">
                    Your reference ID is <strong className="font-mono text-champagne-600">{submissionId}</strong>. A member of our academic admissions desk will reach out within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmissionId(null);
                      setFormData({
                        name: '',
                        email: '',
                        whatsapp: '',
                        country: 'UAE',
                        category: 'General Information',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 bg-ink-900 text-white text-xs font-bold rounded-xl hover:bg-ink-800"
                  >
                    Send Another Query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xl border border-red-200">
                      {errorMsg}
                    </div>
                  )}

                  <div>
                    <label className="text-xs font-bold text-ink-900 block mb-1">Full Name *</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Khan"
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-champagne-500"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-ink-900 block mb-1">Email Address *</label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@example.com"
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

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-ink-900 block mb-1">Country / City *</label>
                      <select
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-champagne-500 bg-white"
                      >
                        <option value="UAE">United Arab Emirates (Dubai, Sharjah, etc.)</option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Oman">Oman</option>
                        <option value="Bahrain">Bahrain</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="United States">United States</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Other">Other International</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-ink-900 block mb-1">Query Category *</label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-champagne-500 bg-white"
                      >
                        <option>General Information</option>
                        <option>Free Academic Doubt Support (International)</option>
                        <option>Paid Personal Tuition (Pakistan)</option>
                        <option>RES Academic Programme Enrolment</option>
                        <option>Royal Juniors (KG–4)</option>
                        <option>Royal Gems (5–8)</option>
                        <option>Royal Nova (Grade 9+ Skills)</option>
                        <option>Fees & Country Pricing</option>
                        <option>Need-Based Scholarship Inquiry</option>
                        <option>Admissions & Assessment</option>
                        <option>Partnership Inquiry</option>
                        <option>Other Support</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-ink-900 block mb-1">Message or Specific Request *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your child's age, grade, existing school curriculum, or specific goals..."
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-champagne-500"
                    />
                  </div>

                  <button
                    disabled={loading}
                    type="submit"
                    className="w-full py-3.5 bg-ink-900 text-white font-bold rounded-xl hover:bg-ink-800 transition-colors text-xs flex items-center justify-center gap-2 shadow-md"
                  >
                    {loading ? 'Transmitting Query...' : 'Send Message Now'}
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
