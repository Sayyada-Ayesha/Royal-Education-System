import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { submitForm } from '../utils/formSubmit';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { programmes } from '../data/programmeData';

export const EnrolPage: React.FC = () => {
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
    plan: '',
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
        plan: '',
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
    <div className="min-h-screen bg-sand-50">
      <PageHero
        title="Enrol Now"
        subtitle="Begin Your Learning Journey Today"
      />

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-navy-900/5 reveal">
          <div className="mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-jakarta text-navy-900 font-bold mb-4">
              Enrolment Form
            </h2>
            <p className="text-navy-800/80 max-w-2xl mx-auto">
              Ready to join? Fill out the details below and our academic advisor will contact you to finalize the schedule and confirm your enrolment.
            </p>
          </div>

          {success && (
            <div className="mb-8 p-6 bg-teal-50 border border-teal-200 rounded-xl flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-semibold text-teal-900 mb-1">Enrolment Received!</h3>
                <p className="text-teal-800 mb-2">Welcome! We're processing your application and will contact you shortly.</p>
                <p className="text-sm text-teal-700 font-mono">Reference ID: {success}</p>
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
              <h3 className="text-xl font-semibold text-navy-900 pb-2 border-b border-navy-900/10">Contact Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-2">Parent Name *</label>
                  <input type="text" name="parentName" required value={formData.parentName} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-navy-900/10 focus:ring-2 focus:ring-teal-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-2">Email *</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-navy-900/10 focus:ring-2 focus:ring-teal-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-2">WhatsApp Number *</label>
                  <input type="tel" name="whatsapp" required value={formData.whatsapp} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-navy-900/10 focus:ring-2 focus:ring-teal-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-2">Country *</label>
                  <select name="country" required value={formData.country} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-navy-900/10 focus:ring-2 focus:ring-teal-500 outline-none bg-white">
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
              </div>
            </div>

            {/* Academic Details */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-navy-900 pb-2 border-b border-navy-900/10">Academic Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-2">Child Name *</label>
                  <input type="text" name="childName" required value={formData.childName} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-navy-900/10 focus:ring-2 focus:ring-teal-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-2">Grade *</label>
                  <select name="grade" required value={formData.grade} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-navy-900/10 focus:ring-2 focus:ring-teal-500 outline-none bg-white">
                    <option value="">Select Grade</option>
                    <option value="KG">KG</option>
                    <option value="Grade 1-8">Grade 1-8</option>
                    <option value="Grade 9+">Grade 9+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-2">Selected Programme *</label>
                  <select name="programme" required value={formData.programme} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-navy-900/10 focus:ring-2 focus:ring-teal-500 outline-none bg-white">
                    <option value="">Select Programme</option>
                    {programmes.map(p => (
                      <option key={p.id} value={p.name}>{p.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-2">School Curriculum</label>
                  <input type="text" name="curriculum" value={formData.curriculum} onChange={handleChange} placeholder="e.g. British, CBSE" className="w-full px-4 py-3 rounded-lg border border-navy-900/10 focus:ring-2 focus:ring-teal-500 outline-none" />
                </div>
              </div>
            </div>

            {/* Enrolment Options */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-navy-900 pb-2 border-b border-navy-900/10">Enrolment Options</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-2">Selected Plan</label>
                  <select name="plan" value={formData.plan} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-navy-900/10 focus:ring-2 focus:ring-teal-500 outline-none bg-white">
                    <option value="">Select Plan</option>
                    <option value="Monthly">Monthly</option>
                    <option value="3-Month">3-Month (5% discount)</option>
                    <option value="6-Month">6-Month (10% discount)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-2">Preferred Schedule</label>
                  <input type="text" name="schedule" value={formData.schedule} onChange={handleChange} placeholder="e.g. Mon/Wed 4PM" className="w-full px-4 py-3 rounded-lg border border-navy-900/10 focus:ring-2 focus:ring-teal-500 outline-none" />
                </div>
              </div>

              <div className="space-y-3">
                <label className="flex items-center space-x-3 p-3 rounded-lg border border-navy-900/5 hover:bg-navy-900/5 cursor-pointer transition-colors">
                  <input type="checkbox" name="addQuran" checked={formData.addQuran} onChange={handleChange} className="w-4 h-4 text-teal-600 rounded focus:ring-teal-500" />
                  <span className="text-sm text-navy-800 font-medium">Add Quran & Islamic Learning</span>
                </label>
                <label className="flex items-center space-x-3 p-3 rounded-lg border border-navy-900/5 hover:bg-navy-900/5 cursor-pointer transition-colors">
                  <input type="checkbox" name="addResources" checked={formData.addResources} onChange={handleChange} className="w-4 h-4 text-teal-600 rounded focus:ring-teal-500" />
                  <span className="text-sm text-navy-800 font-medium">Include learning resources</span>
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium text-navy-900 mb-2">Additional Notes</label>
                <textarea name="notes" rows={4} value={formData.notes} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-navy-900/10 focus:ring-2 focus:ring-teal-500 outline-none resize-none"></textarea>
              </div>
            </div>

            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-navy-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-navy-800 transition-colors inline-flex items-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
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
