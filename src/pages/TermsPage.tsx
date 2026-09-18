import React from 'react';
import { CheckCircle, AlertCircle, FileText, CreditCard, Scale, Mail } from 'lucide-react';
import PageHero from '../components/PageHero';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const TermsPage: React.FC = () => {
  useDocumentTitle('Terms | The Royal Education System');
  return (
    <div className="min-h-screen bg-ivory pb-20">
      <PageHero
        title="Terms & Conditions"
        subtitle="Guidelines and rules for using our services"
        breadcrumbs={[{ label: 'Terms & Conditions' }]}
      />

      <div className="site-container py-16 -mt-10 relative z-20">
        <div className="max-w-4xl mx-auto bg-pearl rounded-3xl shadow-xl p-8 md:p-12 lg:p-16 border border-ivory-200">
          
          <div className="prose prose-lg prose-headings:text-ink-900 prose-headings:font-heading max-w-none text-ink-700">
            <p className="lead text-xl text-ink-600 font-medium mb-10 border-b border-ivory-200 pb-8">
              Welcome to Royal Education System. By accessing our platform and enrolling in our programmes, you agree to be bound by the following Terms and Conditions. Please read them carefully.
            </p>

            <div className="mb-12 flex gap-6 items-start">
              <div className="bg-ink-50 p-3 rounded-xl shrink-0 mt-1">
                <CheckCircle className="w-6 h-6 text-ink-700" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-ink-900 mb-4 mt-0">1. Acceptance of Terms</h2>
                <p>
                  By creating an account, enrolling a student, or using our platform, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.
                </p>
              </div>
            </div>

            <div className="mb-12 flex gap-6 items-start">
              <div className="bg-ink-50 p-3 rounded-xl shrink-0 mt-1">
                <FileText className="w-6 h-6 text-ink-700" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-ink-900 mb-4 mt-0">2. Services Description</h2>
                <p>
                  Royal Education System provides online, project-based educational programmes, including live sessions, curriculum materials, and assessment tools. We reserve the right to modify, update, or discontinue any aspect of our services at our discretion, with reasonable notice provided to active subscribers.
                </p>
              </div>
            </div>

            <div className="mb-12 flex gap-6 items-start">
              <div className="bg-ink-50 p-3 rounded-xl shrink-0 mt-1">
                <AlertCircle className="w-6 h-6 text-ink-700" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-ink-900 mb-4 mt-0">3. User Responsibilities</h2>
                <p>As a user of our platform, you agree to:</p>
                <ul className="space-y-2 mt-4 list-disc pl-5">
                  <li>Provide accurate and complete registration information.</li>
                  <li>Maintain the confidentiality of your account credentials.</li>
                  <li>Ensure students attend scheduled live sessions promptly.</li>
                  <li>Maintain a respectful and appropriate environment during all interactive sessions.</li>
                  <li>Not record, distribute, or reproduce any live sessions or proprietary curriculum materials without explicit written permission.</li>
                </ul>
              </div>
            </div>

            <div className="mb-12 flex gap-6 items-start">
              <div className="bg-ink-50 p-3 rounded-xl shrink-0 mt-1">
                <CreditCard className="w-6 h-6 text-ink-700" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-ink-900 mb-4 mt-0">4. Payment Terms</h2>
                <p>
                  Tuition fees are billed on a monthly, quarterly, or semi-annual basis depending on your selected plan. Payments must be made in full prior to the start of the billing cycle. Failure to complete payment may result in a temporary suspension of access to live sessions and platform materials until the account is settled.
                </p>
              </div>
            </div>

            <div className="mb-12 flex gap-6 items-start">
              <div className="bg-ink-50 p-3 rounded-xl shrink-0 mt-1">
                <AlertCircle className="w-6 h-6 text-ink-700" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-ink-900 mb-4 mt-0">5. Cancellation Policy</h2>
                <p>
                  You may cancel your enrolment at any time. Cancellations must be requested at least 7 days before the next billing cycle to avoid being charged for the subsequent month. We do not provide partial refunds for mid-cycle cancellations, but the student will retain access until the end of the current paid period.
                </p>
              </div>
            </div>

            <div className="mb-12 flex gap-6 items-start">
              <div className="bg-ink-50 p-3 rounded-xl shrink-0 mt-1">
                <Scale className="w-6 h-6 text-ink-700" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-ink-900 mb-4 mt-0">6. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, Royal Education System shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of our services.
                </p>
              </div>
            </div>

            <div className="bg-champagne-50 rounded-2xl p-8 border border-champagne-200 flex gap-6 items-start mt-16">
              <div className="bg-white p-3 rounded-xl shrink-0 mt-1 shadow-sm">
                <Mail className="w-6 h-6 text-champagne-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-ink-900 mb-2 mt-0">7. Contact Information</h2>
                <p className="mb-0">
                  If you have any questions about these Terms and Conditions, please contact us at:
                </p>
                <a href="mailto:legal@royaleducation.com" className="inline-block mt-4 text-champagne-600 font-bold hover:text-champagne-500">
                  legal@royaleducation.com
                </a>
              </div>
            </div>
            
            <p className="text-sm text-ink-400 mt-12 text-center">
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
