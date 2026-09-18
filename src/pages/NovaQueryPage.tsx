import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { submitForm } from '../utils/formSubmit';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { novaSkills } from '../data/programmeData';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const NovaQueryPage: React.FC = () => {
  useDocumentTitle('Nova Query | The Royal Education System');
  useScrollReveal();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    country: '',
    age: '',
    educationLevel: '',
    skillWanted: '',
    currentSkillLevel: '',
    learningGoal: '',
    preferredDuration: '',
    learningMode: '',
    additionalInfo: ''
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

    const result = await submitForm(formData, 'NovaCustomSkill');

    if (result.success) {
      setSuccess(result.submissionId);
      setFormData({
        name: '',
        email: '',
        whatsapp: '',
        country: '',
        age: '',
        educationLevel: '',
        skillWanted: '',
        currentSkillLevel: '',
        learningGoal: '',
        preferredDuration: '',
        learningMode: '',
        additionalInfo: ''
      });
    } else {
      setError(result.error || 'Failed to submit form. Please try again.');
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-ivory">
      <PageHero
        title="Request Your Custom Learning Plan"
        subtitle="Tell Us What You Want to Learn"
      />

      <div className="site-container-narrow py-16">
        <div className="bg-pearl rounded-2xl shadow-sm p-8 md:p-12 border border-ivory-300 reveal">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-ink font-bold mb-4" style={{ fontSize: 'var(--fs-h2)' }}>
              Royal Nova Custom Pathway
            </h2>
            <p className="text-ink-700 max-w-2xl mx-auto">
              Whether you want to learn coding, graphic design, languages, or life skills, our Royal Nova programme offers a completely flexible, custom-tailored curriculum designed specifically for your goals.
            </p>
          </div>

          {success && (
            <div className="mb-8 p-6 bg-champagne-50 border border-champagne-200 rounded-xl flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-champagne-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-semibold text-ink-900 mb-1">Request Received!</h3>
                <p className="text-ink-700 mb-2">We will review your goals and get in touch with a customized learning proposal.</p>
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
              {/* Personal Details */}
              <div>
                <label className="block text-sm font-medium text-ink-900 mb-2">Name *</label>
                <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-ink-200/40 focus:ring-2 focus:ring-champagne-400 focus:border-champagne-400 outline-none bg-white text-ink-950" />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-900 mb-2">Email *</label>
                <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-ink-200/40 focus:ring-2 focus:ring-champagne-400 focus:border-champagne-400 outline-none bg-white text-ink-950" />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-900 mb-2">WhatsApp Number *</label>
                <input type="tel" name="whatsapp" required value={formData.whatsapp} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-ink-200/40 focus:ring-2 focus:ring-champagne-400 focus:border-champagne-400 outline-none bg-white text-ink-950" />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-900 mb-2">Country *</label>
                <select name="country" required value={formData.country} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-ink-200/40 focus:ring-2 focus:ring-champagne-400 focus:border-champagne-400 outline-none bg-white text-ink-950">
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
              <div>
                <label className="block text-sm font-medium text-ink-900 mb-2">Age *</label>
                <input type="number" name="age" required min="10" value={formData.age} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-ink-200/40 focus:ring-2 focus:ring-champagne-400 focus:border-champagne-400 outline-none bg-white text-ink-950" />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-900 mb-2">Current Education Level *</label>
                <select name="educationLevel" required value={formData.educationLevel} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-ink-200/40 focus:ring-2 focus:ring-champagne-400 focus:border-champagne-400 outline-none bg-white text-ink-950">
                  <option value="">Select Level</option>
                  <option value="High School">High School</option>
                  <option value="Graduate">Graduate</option>
                  <option value="University Student">University Student</option>
                  <option value="Professional">Professional</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Skill Requirements */}
              <div>
                <label className="block text-sm font-medium text-ink-900 mb-2">Skill Wanted *</label>
                <select name="skillWanted" required value={formData.skillWanted} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-ink-200/40 focus:ring-2 focus:ring-champagne-400 focus:border-champagne-400 outline-none bg-white text-ink-950">
                  <option value="">Select Skill</option>
                  {novaSkills.map(s => (
                    <option key={s.name} value={s.name}>{s.name}</option>
                  ))}
                  <option value="Other">Other (Please specify in goals)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-900 mb-2">Current Skill Level *</label>
                <select name="currentSkillLevel" required value={formData.currentSkillLevel} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-ink-200/40 focus:ring-2 focus:ring-champagne-400 focus:border-champagne-400 outline-none bg-white text-ink-950">
                  <option value="">Select Level</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-ink-900 mb-2">What is your learning goal? *</label>
                <textarea name="learningGoal" required rows={3} value={formData.learningGoal} onChange={handleChange} placeholder="e.g. I want to build my own website, I want to pass an IELTS exam, etc." className="w-full px-4 py-3 rounded-lg border border-ink-200/40 focus:ring-2 focus:ring-champagne-400 focus:border-champagne-400 outline-none resize-none bg-white text-ink-950"></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-ink-900 mb-2">Preferred Duration</label>
                  <select name="preferredDuration" value={formData.preferredDuration} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-ink-200/40 focus:ring-2 focus:ring-champagne-400 focus:border-champagne-400 outline-none bg-white text-ink-950">
                    <option value="">Select Duration</option>
                    <option value="1 Month">1 Month</option>
                    <option value="3 Months">3 Months</option>
                    <option value="6 Months">6 Months</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-900 mb-2">Preferred Learning Mode</label>
                  <select name="learningMode" value={formData.learningMode} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-ink-200/40 focus:ring-2 focus:ring-champagne-400 focus:border-champagne-400 outline-none bg-white text-ink-950">
                    <option value="">Select Mode</option>
                    <option value="Live Online">Live Online</option>
                    <option value="Self-Paced">Self-Paced</option>
                    <option value="Blended">Blended (Mix of both)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-ink-900 mb-2">Additional Information</label>
                <textarea name="additionalInfo" rows={2} value={formData.additionalInfo} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-ink-200/40 focus:ring-2 focus:ring-champagne-400 focus:border-champagne-400 outline-none resize-none bg-white text-ink-950"></textarea>
              </div>
            </div>

            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-champagne-400 text-ink-950 px-8 py-4 rounded-xl font-bold text-base hover:bg-champagne-300 transition-all inline-flex items-center space-x-2 shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Submitting Request...</span>
                  </>
                ) : (
                  <span>Request Custom Learning Plan</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NovaQueryPage;
