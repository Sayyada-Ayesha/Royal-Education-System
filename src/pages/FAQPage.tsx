import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, MessageCircleQuestion } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { faqData, faqCategories } from '../data/faqData';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const FAQPage: React.FC = () => {
  useDocumentTitle('FAQ | The Royal Education System');
  const [activeCategory, setActiveCategory] = useState(faqCategories[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [openId, setOpenId] = useState<string | null>(null);

  // Filter FAQs based on search query and category
  const filteredFaqs = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    // If searching, check if text matches
    if (searchQuery) return matchesSearch;
    
    // Otherwise filter by category ('All' shows all)
    if (activeCategory === 'All') return true;
    return faq.category === activeCategory;
  });

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="bg-ivory-50 pb-24">
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Everything You Need to Know"
        breadcrumbs={[{ label: 'FAQ' }]}
      />

      <div className="site-container-narrow py-12 relative z-20">
        
        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative bg-white rounded-2xl shadow-lg flex items-center p-2 border border-ink-100">
            <Search className="w-6 h-6 text-ink-400 ml-4" />
            <input 
              type="text"
              placeholder="Search for answers..."
              className="flex-1 bg-transparent border-none outline-none py-4 px-4 text-ink-900 placeholder-ink-300 text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {!searchQuery && (
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {faqCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-ink-900 text-white shadow-md'
                    : 'bg-white text-ink-600 hover:bg-ink-50 hover:text-ink-900 border border-ink-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* FAQ Accordion */}
        <div className="mb-24">
          {filteredFaqs.length > 0 ? (
            <div className="space-y-4">
              {filteredFaqs.map((faq) => (
                <div 
                  key={faq.id} 
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                    openId === faq.id ? 'border-champagne-400 shadow-md ring-1 ring-champagne-200' : 'border-ink-100 hover:border-champagne-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={openId === faq.id}
                  >
                    <span className={`font-bold text-lg pr-8 ${openId === faq.id ? 'text-champagne-600' : 'text-ink-950'}`}>
                      {faq.question}
                    </span>
                    <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      openId === faq.id ? 'bg-champagne-50 text-champagne-600' : 'bg-ivory-100 text-ink-400 group-hover:bg-champagne-50'
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
                        <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 text-ink-700 text-lg leading-relaxed mt-1">
                          <p>{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-ink-100 shadow-sm">
              <MessageCircleQuestion className="w-16 h-16 text-ink-200 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-ink-950 mb-2">No results found</h3>
              <p className="text-ink-600 text-lg">We couldn't find any FAQs matching "{searchQuery}"</p>
              <button 
                onClick={() => setSearchQuery('')}
                className="mt-6 text-champagne-600 font-bold hover:text-champagne-700 underline underline-offset-4"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>

        {/* Still Have Questions CTA */}
        <div className="gradient-ink rounded-3xl p-10 md:p-14 text-center md:text-left text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
          <div className="relative z-10 max-w-xl">
            <h2 className="font-heading font-bold mb-4" style={{ fontSize: 'var(--fs-h2)' }}>Still have questions?</h2>
            <p className="text-ivory-50/80 text-lg leading-relaxed">
              Can't find the answer you're looking for? Our team is here to help clarify any details about our programmes.
            </p>
          </div>
          <div className="relative z-10 shrink-0">
            <Link to="/query" className="btn-primary">
              Send Us a Query
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FAQPage;
