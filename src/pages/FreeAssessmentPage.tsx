import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { submitForm } from '../utils/formSubmit';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const subjects = [
  'Mathematics',
  'Science',
  'English',
  'Communication',
  'Technology',
  'Other'
];

export const FreeAssessmentPage: React.FC = () => {
  useDocumentTitle('Free Assessment | The Royal Education System');
  useScrollReveal();

  const [formData, setFormData] = useState({
    parentName: '',
    parentEmail: '',
    whatsapp: '',
    childName: '',
    childAge: '',
    country: '',
    grade: '',
    curriculum: '',
    subjects: [] as string[],
    concerns: '',
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

  const handleCheckbox = (subject: string) => {
    setFormData(prev => {
      if (prev.subjects.includes(subject)) {
        return { ...prev, subjects: prev.subjects.filter(s => s !== subject) };
      }
      return { ...prev, subjects: [...prev.subjects, subject] };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    const result = await submitForm(formData, 'FreeAssessment');

    if (result.success) {
      setSuccess(result.submissionId);
      setFormData({
        parentName: '',
        parentEmail: '',
        whatsapp: '',
        childName: '',
        childAge: '',
        country: '',
        grade: '',
        curriculum: '',
        subjects: [],
        concerns: '',
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
        title="Free Learning Assessment"
        subtitle="Discover Your Child's Learning Potential"
      />

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-ink-900/5 reveal">
          <div className="mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-jakarta text-ink-900 font-bold mb-4">
              Book an Assessment
            </h2>
            <p className="text-ink-800/80 max-w-2xl mx-auto">
              Our assessment identifies current knowledge, strengths, and gaps to recommend the perfect programme.
              For KG–Grade 8, we find the appropriate pathway. For Grade 9+, we discuss goals to build a custom curriculum.
            </p>
          </div>

          {success && (
            <div className="mb-8 p-6 bg-champagne-50 border border-champagne-200 rounded-xl flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-champagne-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-semibold text-ink-900 mb-1">Assessment Request Received!</h3>
                <p className="text-ink-800 mb-2">We will contact you shortly to schedule the assessment.</p>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Parent Info */}
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
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-ink-900 mb-2" htmlFor="parentEmail">
                  Parent Email *
                </label>
                <input
                  type="email"
                  id="parentEmail"
                  name="parentEmail"
                  required
                  value={formData.parentEmail}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-ink-900/10 focus:ring-2 focus:ring-champagne-500 focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
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
                  placeholder="+971 50 123 4567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-ink-900 mb-2" htmlFor="country">
                  Country *
                </label>
                <select
                  id="country"
                  name="country"
                  required
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-ink-900/10 focus:ring-2 focus:ring-champagne-500 focus:border-transparent outline-none transition-all bg-white"
                >
                  <option value="">Select Country</option>
                  <option value="UAE">UAE</option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="Qatar">Qatar</option>
                  <option value="Kuwait">Kuwait</option>
                  <option value="Oman">Oman</option>
                  <option value="Bahrain">Bahrain</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Child Info */}
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
                <label className="block text-sm font-medium text-ink-900 mb-2" htmlFor="childAge">
                  Child Age *
                </label>
                <input
                  type="number"
                  id="childAge"
                  name="childAge"
                  required
                  min="3"
                  max="18"
                  value={formData.childAge}
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
                <label className="block text-sm font-medium text-ink-900 mb-2" htmlFor="curriculum">
                  Current School Curriculum
                </label>
                <input
                  type="text"
                  id="curriculum"
                  name="curriculum"
                  value={formData.curriculum}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-ink-900/10 focus:ring-2 focus:ring-champagne-500 focus:border-transparent outline-none transition-all"
                  placeholder="e.g. British, CBSE, American"
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-ink-900">
                Subjects Needing Support
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {subjects.map(subject => (
                  <label key={subject} className="flex items-center space-x-3 p-3 rounded-lg border border-ink-900/5 hover:bg-ink-900/5 cursor-pointer transition-colors">
                    <input
                      type="checkbox"
                      checked={formData.subjects.includes(subject)}
                      onChange={() => handleCheckbox(subject)}
                      className="w-4 h-4 text-champagne-600 rounded focus:ring-champagne-500"
                    />
                    <span className="text-sm text-ink-800">{subject}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-ink-900 mb-2" htmlFor="concerns">
                  Learning Concerns
                </label>
                <textarea
                  id="concerns"
                  name="concerns"
                  rows={3}
                  value={formData.concerns}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-ink-900/10 focus:ring-2 focus:ring-champagne-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us what you'd like to improve..."
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-ink-900 mb-2" htmlFor="preferredTime">
                  Preferred Assessment Time
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
                  <option value="Weekend">Weekend</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-ink-900 mb-2" htmlFor="notes">
                  Additional Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={2}
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-ink-900/10 focus:ring-2 focus:ring-champagne-500 focus:border-transparent outline-none transition-all resize-none"
                ></textarea>
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
                  <span>Start Your Free Assessment</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FreeAssessmentPage;
