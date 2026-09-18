import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, BookOpen, Share2, Lightbulb, Shield, Briefcase, Sparkles } from 'lucide-react';
import PageHero from '../components/PageHero';
import { partners } from '../data/partnerData';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const PartnersPage: React.FC = () => {
  useDocumentTitle('Partners | The Royal Education System');
  const getPartnerIcon = (id: string) => {
    switch (id) {
      case 'synx-ai-horizon':
        return <Cpu className="w-8 h-8 text-champagne-500" />;
      case 'nova-gen-institute':
        return <BookOpen className="w-8 h-8 text-champagne-500" />;
      case 'synx-marketing-studio':
        return <Share2 className="w-8 h-8 text-champagne-600" />;
      default:
        return <Briefcase className="w-8 h-8 text-champagne-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-ivory">
      <PageHero
        title="Our Strategic Partner Ecosystem"
        subtitle="Collaborating with specialized technology, digital business, and media innovators to bring authentic modern capabilities to our learners."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Partners', path: '/partners' }
        ]}
      />

      {/* Official Partners Grid */}
      <section className="site-container py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-champagne-600 bg-champagne-50 px-3 py-1 rounded-full border border-champagne-200">
            Real-World Industry Collaboration
          </span>
          <h2 className="font-heading font-extrabold text-ink mt-3 mb-3" style={{ fontSize: 'var(--fs-h2)' }}>
            Specialized Ecosystem Partners
          </h2>
          <p className="text-sm text-ink-600">
            Connecting conceptual education with practical computing, e-commerce, and digital brand development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {partners.map((partner, idx) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-pearl rounded-3xl p-8 shadow-sm border border-ivory-300 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-ivory-100 border border-ivory-200 flex items-center justify-center mb-6">
                  {getPartnerIcon(partner.id)}
                </div>

                <span className="text-[11px] font-bold uppercase tracking-wider text-champagne-600 bg-champagne-50 px-2.5 py-1 rounded-full inline-block mb-3">
                  {partner.category}
                </span>

                <h3 className="text-xl font-heading font-bold text-ink-900 mb-2">{partner.name}</h3>
                <p className="text-xs font-semibold text-champagne-600 mb-4">{partner.tagline}</p>
                <p className="text-xs text-ink-600 leading-relaxed mb-6">{partner.description}</p>
              </div>

              {partner.internshipNote && (
                <div className="mt-4 pt-4 border-t border-ivory-200 flex items-start gap-2 text-[11px] text-ink-500 italic bg-ivory-100 p-3 rounded-xl">
                  <Sparkles className="w-3.5 h-3.5 text-champagne-500 shrink-0 mt-0.5" />
                  <span>{partner.internshipNote}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* PRD Section 40 Non-Guaranteed Internship Disclosure */}
        <div className="max-w-3xl mx-auto mt-12 p-5 bg-pearl rounded-2xl border border-ivory-300 text-center shadow-sm">
          <p className="text-xs text-ink-600 leading-relaxed">
            <strong className="text-ink-900 font-semibold">Program Note:</strong> Practical exposure, student seminars, and exploratory internship opportunities are extended in collaboration with our network partners, subject to individual learner readiness, performance evaluations, and partner availability.
          </p>
        </div>
      </section>

      {/* What Partners Bring Section */}
      <section className="py-16 bg-white border-t border-ivory-200">
        <div className="site-container">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-ink mb-3" style={{ fontSize: 'var(--fs-h2)' }}>
              Why Partner Collaboration Matters
            </h2>
            <p className="text-sm text-ink-600 max-w-2xl mx-auto">
              We bridge classroom understanding with modern industry practices so learners see immediate purpose in what they study.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Lightbulb className="w-8 h-8 text-champagne-500" />,
                title: 'Emerging AI Curriculum',
                desc: 'Access to modern AI principles, prompt literacy, and machine intelligence tools guided by active tech practitioners.'
              },
              {
                icon: <Shield className="w-8 h-8 text-champagne-500" />,
                title: 'Practical Seminars & Guidance',
                desc: 'Real masterclasses on e-commerce, digital business models, and responsible digital presence for young adults.'
              },
              {
                icon: <Briefcase className="w-8 h-8 text-ink-700" />,
                title: 'Career & Project Relevance',
                desc: 'Capstone projects reviewed against industry standards rather than theoretical school exams alone.'
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-pearl rounded-2xl p-6 border border-ivory-300 flex flex-col items-start"
              >
                <div className="w-12 h-12 rounded-xl bg-white shadow-xs flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-base font-bold text-ink-900 mb-2">{feature.title}</h3>
                <p className="text-xs text-ink-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Inquiry CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto gradient-ink rounded-3xl p-10 md:p-12 text-center relative overflow-hidden shadow-xl text-white">
          <div className="relative z-10">
            <span className="text-[11px] font-bold uppercase tracking-wider text-champagne-300 bg-ink-800/80 border border-champagne-400/20 px-3 py-1 rounded-full inline-block mb-4">
              Institutional & Industry Inquiries
            </span>
            <h2 className="font-heading font-extrabold text-white mb-4" style={{ fontSize: 'var(--fs-h2)' }}>
              Interested in Partnering with Royal Education System?
            </h2>
            <p className="text-ivory-200/80 text-sm max-w-xl mx-auto mb-8 leading-relaxed">
              We welcome academic, technological, and corporate partners who share our commitment to meaningful, life-ready education.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/query"
                className="inline-flex items-center px-8 py-3.5 bg-champagne-400 text-ink-950 font-bold rounded-xl hover:bg-champagne-300 transition-colors text-sm shadow-md gap-2"
              >
                Submit Partner Inquiry
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-3.5 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-champagne-400/40 transition-colors text-sm"
              >
                Learn About Our Vision
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;
