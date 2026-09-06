import React from 'react';
import { motion } from 'framer-motion';
import { Check, Info, ArrowRight, BookOpen, Star, Sparkles, Shield, Percent } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import {
  gradePricing,
  admissionFee,
  quranProgramme,
  skillCoursePricing,
  discounts,
} from '../data/pricingData';

const PricingPage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-sand-50 pb-20">
      <PageHero
        title="Transparent Pricing. No Hidden Charges."
        subtitle="Quality education that fits your family's needs. Simple, clear, and straightforward."
        breadcrumbs={[{ label: 'Pricing' }]}
      />

      <div className="container mx-auto px-4 -mt-10 relative z-20">
        {/* No Hidden Charges Badge */}
        <div className="flex justify-center mb-16">
          <div className="bg-white rounded-full shadow-lg px-6 py-3 flex items-center gap-3 border border-teal-100">
            <Shield className="w-6 h-6 text-teal-500" />
            <span className="font-semibold text-navy-900">100% Transparent: No Hidden Fees, Ever.</span>
          </div>
        </div>

        {/* Monthly Programme Pricing */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4">Monthly Learning Programme</h2>
            <p className="text-lg text-navy-700 max-w-2xl mx-auto">
              Our core academic programme pricing by grade level. Billed monthly.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {gradePricing.map((grade, index) => (
              <motion.div key={index} variants={itemVariants} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className={`p-6 ${grade.programme === 'Royal Juniors' ? 'bg-teal-50 border-b border-teal-100' : 'bg-navy-50 border-b border-navy-100'}`}>
                  <div className="text-sm font-semibold mb-2 flex items-center gap-2">
                    {grade.programme === 'Royal Juniors' ? <Star className="w-4 h-4 text-teal-600" /> : <Sparkles className="w-4 h-4 text-navy-600" />}
                    <span className={grade.programme === 'Royal Juniors' ? 'text-teal-700' : 'text-navy-700'}>{grade.programme}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900">{grade.label}</h3>
                </div>
                <div className="p-6">
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-4xl font-bold text-navy-900">AED {grade.aed}</span>
                    <span className="text-navy-500 font-medium">/mo</span>
                  </div>
                  <div className="text-sm text-navy-500 mb-6 flex items-center gap-1">
                    <Info className="w-4 h-4" />
                    Approx. USD {grade.usd}/mo
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                      <span className="text-navy-700 text-sm">Full core curriculum access</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                      <span className="text-navy-700 text-sm">Live expert-led sessions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                      <span className="text-navy-700 text-sm">Project-based learning approach</span>
                    </li>
                  </ul>
                  <Link to="/book-assessment" className="block w-full py-3 px-4 bg-white border-2 border-navy-900 text-navy-900 font-semibold rounded-lg text-center hover:bg-navy-50 transition-colors">
                    Book Assessment
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Additional Fees & Options */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          
          {/* Admission Fee */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-navy-900 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 opacity-10">
              <Shield className="w-40 h-40" />
            </div>
            <h3 className="text-2xl font-bold mb-2">One-Time Admission Fee</h3>
            <p className="text-navy-200 mb-6">{admissionFee.description}</p>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl font-bold">AED {admissionFee.aed}</span>
            </div>
            <div className="text-sm text-navy-300">Approx. USD {admissionFee.usd}</div>
          </motion.div>

          {/* Optional Quran Programme */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-teal-600 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 opacity-10">
              <BookOpen className="w-40 h-40" />
            </div>
            <h3 className="text-2xl font-bold mb-2">{quranProgramme.label}</h3>
            <p className="text-teal-100 mb-6">{quranProgramme.description}</p>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-lg">from</span>
              <span className="text-3xl font-bold">AED {quranProgramme.fromAed}</span>
              <span>/mo</span>
            </div>
          </motion.div>
        </div>

        {/* Standalone Skill Courses & Discounts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
          
          {/* Skill Courses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-navy-900 mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-teal-500" />
              Standalone Skill Courses (Royal Nova)
            </h3>
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
                <span className="font-semibold text-navy-800">{skillCoursePricing.basic.label}</span>
                <span className="font-bold text-teal-600">AED {skillCoursePricing.basic.aedRange}</span>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
                <span className="font-semibold text-navy-800">{skillCoursePricing.intermediate.label}</span>
                <span className="font-bold text-teal-600">AED {skillCoursePricing.intermediate.aedRange}</span>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
                <span className="font-semibold text-navy-800">{skillCoursePricing.advanced.label}</span>
                <span className="font-bold text-teal-600">AED {skillCoursePricing.advanced.aedRange}</span>
              </div>
            </div>
          </motion.div>

          {/* Discounts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-navy-900 mb-6 flex items-center gap-2">
              <Percent className="w-6 h-6 text-accent-gold" />
              Available Discounts
            </h3>
            <div className="space-y-4">
              {discounts.map((discount, index) => (
                <div key={index} className="bg-cream-50 p-5 rounded-xl border border-accent-gold/20 flex gap-4 items-start">
                  <div className="bg-accent-gold/10 p-2 rounded-lg text-accent-gold font-bold">
                    {discount.discount}
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900">{discount.plan}</h4>
                    <p className="text-sm text-navy-700">{discount.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Learning Resources Note */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-20 text-center"
        >
          <Info className="w-8 h-8 text-teal-500 mx-auto mb-3" />
          <h4 className="font-bold text-navy-900 mb-2">Optional Learning Resources</h4>
          <p className="text-navy-600 text-sm">
            Books, workbooks, and self-paced courses are supplementary and not required for participating in our live learning sessions.
          </p>
        </motion.div>

        {/* Grade 9+ Custom Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{skillCoursePricing.custom.label}</h2>
            <p className="text-navy-100 text-lg mb-8 max-w-2xl mx-auto">
              For older students, we build tailored pathways focusing on advanced skills, portfolios, and future career readiness.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-10">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center font-bold mb-2">1</div>
                <span className="text-sm font-medium">Free Assessment</span>
              </div>
              <ArrowRight className="w-5 h-5 text-teal-500 hidden md:block" />
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center font-bold mb-2">2</div>
                <span className="text-sm font-medium">Goal Discussion</span>
              </div>
              <ArrowRight className="w-5 h-5 text-teal-500 hidden md:block" />
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center font-bold mb-2">3</div>
                <span className="text-sm font-medium">Custom Curriculum</span>
              </div>
              <ArrowRight className="w-5 h-5 text-teal-500 hidden md:block" />
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center font-bold mb-2">4</div>
                <span className="text-sm font-medium">Custom Fee</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/royal-nova/query" className="px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white font-bold rounded-lg transition-colors shadow-lg shadow-teal-500/30">
                Get Custom Quote
              </Link>
              <Link to="/contact" className="px-8 py-4 bg-transparent border-2 border-white/20 hover:bg-white/10 text-white font-bold rounded-lg transition-colors">
                Enrol Now
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default PricingPage;
