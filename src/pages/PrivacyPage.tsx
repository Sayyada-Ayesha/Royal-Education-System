import React from 'react';
import { Shield, Lock, Eye, Server, Mail } from 'lucide-react';
import PageHero from '../components/PageHero';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const PrivacyPage: React.FC = () => {
  useDocumentTitle('Privacy | The Royal Education System');
  return (
    <div className="min-h-screen bg-ivory pb-20">
      <PageHero
        title="Privacy Policy"
        subtitle="How we protect and manage your data"
        breadcrumbs={[{ label: 'Privacy Policy' }]}
      />

      <div className="site-container py-16 -mt-10 relative z-20">
        <div className="max-w-4xl mx-auto bg-pearl rounded-3xl shadow-xl p-8 md:p-12 lg:p-16 border border-ivory-200">
          
          <div className="prose prose-lg prose-headings:text-ink-900 prose-headings:font-heading prose-a:text-champagne-600 max-w-none text-ink-700">
            <p className="lead text-xl text-ink-600 font-medium mb-10 border-b border-ivory-200 pb-8">
              At Royal Education System, we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This policy outlines how we collect, use, and safeguard your data.
            </p>

            <div className="mb-12 flex gap-6 items-start">
              <div className="bg-champagne-50 p-3 rounded-xl shrink-0 mt-1">
                <Eye className="w-6 h-6 text-champagne-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-ink-900 mb-4 mt-0">1. Information We Collect</h2>
                <p>We may collect the following types of information when you interact with our platform:</p>
                <ul className="space-y-2 mt-4 list-disc pl-5">
                  <li><strong>Personal Identification Information:</strong> Name, email address, phone number, and physical address provided during registration.</li>
                  <li><strong>Student Data:</strong> Grade level, academic performance, project submissions, and learning preferences.</li>
                  <li><strong>Technical Data:</strong> IP address, browser type, device information, and usage patterns on our platform.</li>
                </ul>
              </div>
            </div>

            <div className="mb-12 flex gap-6 items-start">
              <div className="bg-champagne-50 p-3 rounded-xl shrink-0 mt-1">
                <Server className="w-6 h-6 text-champagne-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-ink-900 mb-4 mt-0">2. How We Use Information</h2>
                <p>The information we collect is used strictly to provide and improve our educational services:</p>
                <ul className="space-y-2 mt-4 list-disc pl-5">
                  <li>To personalize the learning experience and recommend appropriate pathways.</li>
                  <li>To communicate important updates, schedule changes, and progress reports.</li>
                  <li>To process payments and manage your account subscriptions.</li>
                  <li>To improve our curriculum, platform functionality, and user experience.</li>
                </ul>
              </div>
            </div>

            <div className="mb-12 flex gap-6 items-start">
              <div className="bg-champagne-50 p-3 rounded-xl shrink-0 mt-1">
                <Shield className="w-6 h-6 text-champagne-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-ink-900 mb-4 mt-0">3. Data Protection</h2>
                <p>We implement robust security measures to maintain the safety of your personal information:</p>
                <ul className="space-y-2 mt-4 list-disc pl-5">
                  <li>All sensitive data is encrypted during transmission using SSL technology.</li>
                  <li>Data is stored on secure servers with restricted access protocols.</li>
                  <li>We conduct regular security audits to identify and address potential vulnerabilities.</li>
                  <li>We never sell, trade, or rent your personal information to third parties.</li>
                </ul>
              </div>
            </div>

            <div className="mb-12 flex gap-6 items-start">
              <div className="bg-champagne-50 p-3 rounded-xl shrink-0 mt-1">
                <Lock className="w-6 h-6 text-champagne-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-ink-900 mb-4 mt-0">4. Third-Party Services</h2>
                <p>
                  We may employ third-party companies and individuals to facilitate our service, provide the service on our behalf, or assist us in analyzing how our service is used (e.g., payment processors, video conferencing tools). These third parties have access to your personal data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                </p>
              </div>
            </div>

            <div className="bg-ivory-100 rounded-2xl p-8 border border-ivory-300 flex gap-6 items-start mt-16">
              <div className="bg-white p-3 rounded-xl shrink-0 mt-1 shadow-sm">
                <Mail className="w-6 h-6 text-ink-700" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-ink-900 mb-2 mt-0">5. Contact for Privacy Concerns</h2>
                <p className="mb-0">
                  If you have any questions or concerns about this Privacy Policy or our data practices, please contact our Data Protection Officer at:
                </p>
                <a href="mailto:privacy@royaleducation.com" className="inline-block mt-4 text-champagne-600 font-bold hover:text-champagne-500">
                  privacy@royaleducation.com
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

export default PrivacyPage;
