import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { submitForm } from '../utils/formSubmit';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { programmes } from '../data/programmeData';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const EnrolPage: React.FC = () => {
  useDocumentTitle('Enrol | The Royal Education System');
  useScrollReveal();

  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    whatsapp: '',
    country: '',
    childName: '',
    grade: '',
    programme: '',
    curriculum: '',
    plan: 'Monthly',
    requestScholarship: false,
    addQuran: false,
    addResources: false,
    schedule: '',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as any;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    const result = await submitForm(formData, 'Enrolment');

    if (result.success) {
      setSuccess(result.submissionId);
      setFormData({
        parentName: '',
        email: '',
        whatsapp: '',
        country: '',
        childName: '',
        grade: '',
        programme: '',
        curriculum: '',
        plan: 'Monthly',
        requestScholarship: false,
        addQuran: false,
        addResources: false,
        schedule: '',
        notes: ''
      });
    } else {
      setError(result.error || 'Failed to submit form. Please try again.');
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-ivory-50">
      <PageHero
        title="Enrol Now"
        subtitle="Begin Your Learning Journey Today"
      />

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-ink-900/5 reveal">
          <div className="mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-jakarta text-ink-900 font-bold mb-4">
              Enrolment Form
            </h2>
            <p className="text-ink-800/80 max-w-2xl mx-auto">
              Ready to join? Fill out the details below and our academic advisor will contact you to finalize the schedule and confirm your enrolment.
            </p>
          </div>

          {success && (
            <div className="mb-8 p-6 bg-champagne-50 border border-champagne-200 rounded-xl flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-champagne-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-semibold text-ink-900 mb-1">Enrolment Received!</h3>
                <p className="text-ink-800 mb-2">Welcome! We're processing your application and will contact you shortly.</p>
                <p className="text-sm text-champagne-600 font-mono">Reference ID: {success}</p>
              </div>
            </div>
          )}

          {error && (
            <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-4 text-red-800">
              <AlertCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
              <p>{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Contact Details */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-ink-900 pb-2 border-b border-ink-900/10">Contact Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-ink-900 mb-2">Parent Name *</label>
                  <input type="text" name="parentName" required value={formData.parentName} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-ink-900/10 focus:ring-2 focus:ring-champagne-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-900 mb-2">Email *</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-ink-900/10 focus:ring-2 focus:ring-champagne-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-900 mb-2">WhatsApp Number *</label>
                  <input type="tel" name="whatsapp" required value={formData.whatsapp} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-ink-900/10 focus:ring-2 focus:ring-champagne-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-900 mb-2">Country *</label>
                  <select name="country" required value={formData.country} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-ink-900/10 focus:ring-2 focus:ring-champagne-500 outline-none bg-white">
                    <option value="">Select Country</option>
                    <option value="UAE">UAE</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Oman">Oman</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                    <option value="Other">Other International</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Academic Details */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-ink-900 pb-2 border-b border-ink-900/10">Academic Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-ink-900 mb-2">Child / Student Name *</label>
                  <input type="text" name="childName" required value={formData.childName} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-ink-900/10 focus:ring-2 focus:ring-champagne-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-900 mb-2">Grade *</label>
                  <select name="grade" required value={formData.grade} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-ink-900/10 focus:ring-2 focus:ring-champagne-500 outline-none bg-white">
                    <option value="">Select Grade</option>
                    <option value="KG">Kindergarten (KG)</option>
                    <option value="Grade 1">Grade 1</option>
                    <option value="Grade 2">Grade 2</option>
                    <option value="Grade 3">Grade 3</option>
                    <option value="Grade 4">Grade 4</option>
                    <option value="Grade 5">Grade 5</option>
                    <option value="Grade 6">Grade 6</option>
                    <option value="Grade 7">Grade 7</option>
                    <option value="Grade 8">Grade 8</option>
                    <option value="Grade 9+">Grade 9+</option>
                    <option value="Adult / Professional">Adult / Professional</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-900 mb-2">Selected Programme *</label>
                  <select name="programme" required value={formData.programme} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-ink-900/10 focus:ring-2 focus:ring-champagne-500 outline-none bg-white">
                    <option value="">Select Programme</option>
                    <option value="Royal Juniors">Royal Juniors (KG – Grade 4) — Proprietary Curriculum</option>
                    <option value="Royal Gems">Royal Gems (Grades 5 – 8) — Proprietary Curriculum</option>
                    <option value="Royal Nova">Royal Nova (Grade 9+ & Specializations)</option>
                    <option value="Paid Personal Tuition">Paid Personal Tuition / Coaching (From PKR 1,000/mo - Pakistan Day-School Support)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-900 mb-2">
                    Current Day-School Curriculum <span className="text-xs text-ink-400 font-normal">(Context only — RES has its own curriculum)</span>
                  </label>
                  <input type="text" name="curriculum" value={formData.curriculum} onChange={handleChange} placeholder="e.g. British, CBSE, Federal Board, American" className="w-full px-4 py-3 rounded-lg border border-ink-900/10 focus:ring-2 focus:ring-champagne-500 outline-none" />
                </div>
              </div>
            </div>

            {/* Enrolment Options */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-ink-900 pb-2 border-b border-ink-900/10">Enrolment &amp; Advance Payment Options</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-ink-900 mb-2">Payment Billing Schedule (Paid in Advance)</label>
                  <select name="plan" value={formData.plan} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-ink-900/10 focus:ring-2 focus:ring-champagne-500 outline-none bg-white">
                    <option value="Monthly">Monthly (Paid in Advance)</option>
                    <option value="3-Month">3-Month (3% Savings, Paid in Advance)</option>
                    <option value="6-Month">6-Month (5% Savings, Paid in Advance)</option>
                    <option value="Full Year">Full Year (10% Savings, Paid in Advance)</option>
                  </select>
                  <span className="text-[11px] text-ink-400 mt-1 block">
                    *Payment intervals are billing terms, not programme durations (each grade is one full learning year).
                  </span>
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-900 mb-2">Preferred Schedule</label>
                  <input type="text" name="schedule" value={formData.schedule} onChange={handleChange} placeholder="e.g. Mon/Wed 4PM" className="w-full px-4 py-3 rounded-lg border border-ink-900/10 focus:ring-2 focus:ring-champagne-500 outline-none" />
                </div>
              </div>

              <div className="space-y-3">
                <label className="flex items-start space-x-3 p-3.5 rounded-lg border border-ink-900/10 hover:bg-ink-900/5 cursor-pointer transition-colors bg-pearl-50">
                  <input type="checkbox" name="requestScholarship" checked={formData.requestScholarship} onChange={handleChange} className="w-4 h-4 text-champagne-600 rounded focus:ring-champagne-500 mt-0.5" />
                  <div>
                    <span className="text-sm text-ink-900 font-semibold block">Apply for Need-Based Financial Scholarship</span>
                    <span className="text-xs text-ink-500 block">Need-based scholarship support may be available, subject to assessment and available funding (up to 50%).</span>
                  </div>
                </label>

                <label className="flex items-center space-x-3 p-3 rounded-lg border border-ink-900/5 hover:bg-ink-900/5 cursor-pointer transition-colors">
                  <input type="checkbox" name="addQuran" checked={formData.addQuran} onChange={handleChange} className="w-4 h-4 text-champagne-600 rounded focus:ring-champagne-500" />
                  <span className="text-sm text-ink-800 font-medium">Add Quran & Islamic Learning (From AED 79/mo)</span>
                </label>
                <label className="flex items-center space-x-3 p-3 rounded-lg border border-ink-900/5 hover:bg-ink-900/5 cursor-pointer transition-colors">
                  <input type="checkbox" name="addResources" checked={formData.addResources} onChange={handleChange} className="w-4 h-4 text-champagne-600 rounded focus:ring-champagne-500" />
                  <span className="text-sm text-ink-800 font-medium">Include physical workbooks & project kits</span>
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium text-ink-900 mb-2">Additional Notes / Learning Goals</label>
                <textarea name="notes" rows={4} value={formData.notes} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-ink-900/10 focus:ring-2 focus:ring-champagne-500 outline-none resize-none"></textarea>
              </div>
            </div>

            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-ink-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-ink-800 transition-colors inline-flex items-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <span>Submit Enrolment</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnrolPage;
