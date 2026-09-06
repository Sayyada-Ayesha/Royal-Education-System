import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, MessageCircleQuestion } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { faqData, faqCategories } from '../data/faqData';

const FAQPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(faqCategories[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [openId, setOpenId] = useState<string | null>(null);

  // Filter FAQs based on search query and category
  const filteredFaqs = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    // If searching, ignore category filter unless it's 'All'
    if (searchQuery) return matchesSearch;
    
    // Otherwise filter by category
    return faq.category === activeCategory;
  });

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-sand-50 pb-20">
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Everything You Need to Know"
        breadcrumbs={[{ label: 'FAQ' }]}
      />

      <div className="container mx-auto px-4 py-16 -mt-10 relative z-20">
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative bg-white rounded-2xl shadow-lg flex items-center p-2 border border-gray-100">
            <Search className="w-6 h-6 text-navy-300 ml-4" />
            <input 
              type="text"
              placeholder="Search for answers..."
              className="flex-1 bg-transparent border-none outline-none py-4 px-4 text-navy-900 placeholder-navy-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {!searchQuery && (
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {faqCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-navy-900 text-white shadow-md'
                    : 'bg-white text-navy-600 hover:bg-navy-50 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto mb-20 min-h-[400px]">
          {filteredFaqs.length > 0 ? (
            <div className="space-y-4">
              {filteredFaqs.map((faq) => (
                <div 
                  key={faq.id} 
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                    openId === faq.id ? 'border-teal-300 shadow-md ring-1 ring-teal-100' : 'border-gray-200 hover:border-teal-200'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={openId === faq.id}
                  >
                    <span className={`font-semibold text-lg pr-8 ${openId === faq.id ? 'text-teal-700' : 'text-navy-900'}`}>
                      {faq.question}
                    </span>
                    <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      openId === faq.id ? 'bg-teal-50 text-teal-600' : 'bg-gray-50 text-gray-400 group-hover:bg-teal-50'
                    }`}>
                      <ChevronDown 
                        className={`w-5 h-5 transition-transform duration-300 ${openId === faq.id ? 'rotate-180' : ''}`} 
                      />
                    </div>
                  </button>
                  <AnimatePresence>
                    {openId === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 pt-2 text-navy-700 leading-relaxed border-t border-gray-50 mt-2">
                          <p>{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <MessageCircleQuestion className="w-16 h-16 text-navy-200 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-navy-900 mb-2">No results found</h3>
              <p className="text-navy-500">We couldn't find any FAQs matching "{searchQuery}"</p>
              <button 
                onClick={() => setSearchQuery('')}
                className="mt-6 text-teal-600 font-semibold hover:text-teal-700"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>

        {/* Still Have Questions CTA */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl p-10 md:p-14 text-center text-white shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-left">
            <div>
              <h2 className="text-3xl font-bold mb-3">Still have questions?</h2>
              <p className="text-navy-200 text-lg max-w-lg">
                Can't find the answer you're looking for? Our team is here to help clarify any details about our programmes.
              </p>
            </div>
            <Link to="/contact" className="shrink-0 px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white font-bold rounded-lg transition-colors shadow-lg shadow-teal-500/30 whitespace-nowrap">
              Send Us a Query
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FAQPage;
