import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { submitForm } from '../utils/formSubmit';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { programmes } from '../data/programmeData';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const FreeDemoPage: React.FC = () => {
  useDocumentTitle('Free Demo | The Royal Education System');
  useScrollReveal();

  const [formData, setFormData] = useState({
    parentName: '',
    whatsapp: '',
    email: '',
    childName: '',
    grade: '',
    programme: '',
    preferredDate: '',
    preferredTime: '',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    const result = await submitForm(formData, 'FreeDemo');

    if (result.success) {
      setSuccess(result.submissionId);
      setFormData({
        parentName: '',
        whatsapp: '',
        email: '',
        childName: '',
        grade: '',
        programme: '',
        preferredDate: '',
        preferredTime: '',
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
        title="Free Demo Class"
        subtitle="Experience Our Teaching Before You Commit"
      />

      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-ink-900/5 reveal">
          <div className="mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-jakarta text-ink-900 font-bold mb-4">
              Book a Demo
            </h2>
            <p className="text-ink-800/80 max-w-xl mx-auto">
              We want parents to experience our teaching approach before enrolling. Schedule a free demo class today with absolutely no payment required.
            </p>
          </div>

          {success && (
            <div className="mb-8 p-6 bg-champagne-50 border border-champagne-200 rounded-xl flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-champagne-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-semibold text-ink-900 mb-1">Demo Requested Successfully!</h3>
                <p className="text-ink-800 mb-2">We'll be in touch shortly to confirm your demo schedule.</p>
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

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-ink-900 mb-2" htmlFor="parentName">
                  Parent Name *
                </label>
                <input
                  type="text"
                  id="parentName"
                  name="parentName"
                  required
                  value={formData.parentName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-ink-900/10 focus:ring-2 focus:ring-champagne-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-ink-900 mb-2" htmlFor="whatsapp">
                  WhatsApp Number *
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  required
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-ink-900/10 focus:ring-2 focus:ring-champagne-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-ink-900 mb-2" htmlFor="email">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-ink-900/10 focus:ring-2 focus:ring-champagne-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-ink-900 mb-2" htmlFor="childName">
                  Child Name *
                </label>
                <input
                  type="text"
                  id="childName"
                  name="childName"
                  required
                  value={formData.childName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-ink-900/10 focus:ring-2 focus:ring-champagne-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-ink-900 mb-2" htmlFor="grade">
                  Grade *
                </label>
                <select
                  id="grade"
                  name="grade"
                  required
                  value={formData.grade}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-ink-900/10 focus:ring-2 focus:ring-champagne-500 focus:border-transparent outline-none transition-all bg-white"
                >
                  <option value="">Select Grade</option>
                  <option value="KG">KG</option>
                  <option value="Grade 1-8">Grade 1-8</option>
                  <option value="Grade 9+">Grade 9+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-ink-900 mb-2" htmlFor="programme">
                  Programme *
                </label>
                <select
                  id="programme"
                  name="programme"
                  required
                  value={formData.programme}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-ink-900/10 focus:ring-2 focus:ring-champagne-500 focus:border-transparent outline-none transition-all bg-white"
                >
                  <option value="">Select Programme</option>
                  {programmes.map(p => (
                    <option key={p.id} value={p.name}>{p.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-ink-900 mb-2" htmlFor="preferredDate">
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-ink-900/10 focus:ring-2 focus:ring-champagne-500 focus:border-transparent outline-none transition-all bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-ink-900 mb-2" htmlFor="preferredTime">
                  Preferred Time
                </label>
                <select
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-ink-900/10 focus:ring-2 focus:ring-champagne-500 focus:border-transparent outline-none transition-all bg-white"
                >
                  <option value="">Select Time</option>
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Evening">Evening</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-ink-900 mb-2" htmlFor="notes">
                Notes
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                value={formData.notes}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-ink-900/10 focus:ring-2 focus:ring-champagne-500 focus:border-transparent outline-none transition-all resize-none"
                placeholder="Any special requests or details..."
              ></textarea>
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
                  <span>Book Your Free Demo</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FreeDemoPage;
