import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { submitForm } from '../utils/formSubmit';
import { Loader2, CheckCircle2, AlertCircle, Mail, Phone } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const QueryPage: React.FC = () => {
  useDocumentTitle('Query | The Royal Education System');
  useScrollReveal();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    country: '',
    category: '',
    message: ''
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

    const result = await submitForm(formData, 'GeneralQuery');

    if (result.success) {
      setSuccess(result.submissionId);
      setFormData({
        name: '',
        email: '',
        whatsapp: '',
        country: '',
        category: '',
        message: ''
      });
    } else {
      setError(result.error || 'Failed to submit form. Please try again.');
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-ivory-50">
      <PageHero
        title="Contact Us"
        subtitle="We're Here to Help"
      />

      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-1 space-y-8 reveal">
            <div>
              <h3 className="text-xl font-jakarta font-bold text-ink-900 mb-4">Get in Touch</h3>
              <p className="text-ink-800/80 mb-6">
                Have questions about our programmes or enrollment process? Reach out to us directly or fill out the form.
              </p>
              
              <div className="space-y-4">
                <a href={`mailto:${siteConfig.businessEmail}`} className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm border border-ink-900/5 hover:border-champagne-400/30 transition-all">
                  <div className="w-10 h-10 bg-champagne-50 rounded-full flex items-center justify-center text-champagne-600">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-ink-800/60 font-medium">Email Us</p>
                    <p className="text-ink-900 font-medium">{siteConfig.businessEmail}</p>
                  </div>
                </a>
                
                <a href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\+/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm border border-ink-900/5 hover:border-champagne-400/30 transition-all">
                  <div className="w-10 h-10 bg-champagne-50 rounded-full flex items-center justify-center text-champagne-600">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-ink-800/60 font-medium">WhatsApp</p>
                    <p className="text-ink-900 font-medium">{siteConfig.contact.whatsapp}</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm p-8 border border-ink-900/5 reveal">
              
              {success && (
                <div className="mb-8 p-6 bg-champagne-50 border border-champagne-200 rounded-xl flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-champagne-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-ink-900 mb-1">Message Sent!</h3>
                    <p className="text-ink-800 mb-2">We've received your query and will get back to you shortly.</p>
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
                    <label className="block text-sm font-medium text-ink-900 mb-2">Name *</label>
                    <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-ink-900/10 focus:ring-2 focus:ring-champagne-500 outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink-900 mb-2">Email *</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-ink-900/10 focus:ring-2 focus:ring-champagne-500 outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink-900 mb-2">WhatsApp</label>
                    <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-ink-900/10 focus:ring-2 focus:ring-champagne-500 outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink-900 mb-2">Country</label>
                    <select name="country" value={formData.country} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-ink-900/10 focus:ring-2 focus:ring-champagne-500 outline-none bg-white">
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

                <div>
                  <label className="block text-sm font-medium text-ink-900 mb-2">Query Category *</label>
                  <select name="category" required value={formData.category} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-ink-900/10 focus:ring-2 focus:ring-champagne-500 outline-none bg-white">
                    <option value="">Select Category</option>
                    <option value="General">General</option>
                    <option value="Programme Information">Programme Information</option>
                    <option value="Pricing">Pricing</option>
                    <option value="Admissions">Admissions</option>
                    <option value="Partnerships">Partnerships</option>
                    <option value="Royal Nova">Royal Nova</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-ink-900 mb-2">Message *</label>
                  <textarea name="message" required rows={5} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-ink-900/10 focus:ring-2 focus:ring-champagne-500 outline-none resize-none"></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-ink-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-ink-800 transition-colors inline-flex items-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed w-full md:w-auto justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <span>Send Query</span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default QueryPage;
