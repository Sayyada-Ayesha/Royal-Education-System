import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Crown, Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programmesOpen, setProgrammesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setProgrammesOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Curriculum', path: '/curriculum' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Enrol', path: '/enrol' },
  ];

  const programmeLinks = [
    { name: 'Royal Juniors', path: '/royal-juniors' },
    { name: 'Royal Gems', path: '/royal-gems' },
    { name: 'Royal Nova', path: '/royal-nova' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-white py-5'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 z-50">
            <Crown className="w-8 h-8 text-teal-600" />
            <span className="font-heading font-bold text-xl md:text-2xl text-navy-900 tracking-tight">
              Royal Education System
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-navy-800 hover:text-teal-600 font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-navy-800 hover:text-teal-600 font-medium transition-colors">
              About
            </Link>
            
            {/* Programmes Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setProgrammesOpen(true)}
              onMouseLeave={() => setProgrammesOpen(false)}
            >
              <button 
                className="flex items-center gap-1 text-navy-800 group-hover:text-teal-600 font-medium transition-colors py-2"
                aria-expanded={programmesOpen}
                aria-haspopup="true"
              >
                Programmes
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${programmesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {programmesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-48 border border-gray-100"
                  >
                    {programmeLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.path}
                        className="block px-4 py-2 text-navy-700 hover:bg-teal-50 hover:text-teal-700 transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/curriculum" className="text-navy-800 hover:text-teal-600 font-medium transition-colors">
              Curriculum
            </Link>
            <Link to="/how-it-works" className="text-navy-800 hover:text-teal-600 font-medium transition-colors">
              How It Works
            </Link>
            <Link to="/pricing" className="text-navy-800 hover:text-teal-600 font-medium transition-colors">
              Pricing
            </Link>
            <Link to="/enrol" className="text-navy-800 hover:text-teal-600 font-medium transition-colors">
              Enrol
            </Link>
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              to="/free-assessment"
              className="hidden md:inline-flex bg-teal-600 hover:bg-teal-700 text-white font-medium px-6 py-2.5 rounded-full transition-colors"
            >
              Book Free Assessment
            </Link>
            
            <button
              className="lg:hidden text-navy-900 p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Link to="/" className="text-navy-800 font-medium py-2 border-b border-gray-50">Home</Link>
              <Link to="/about" className="text-navy-800 font-medium py-2 border-b border-gray-50">About</Link>
              
              <div className="py-2 border-b border-gray-50">
                <button 
                  className="flex items-center justify-between w-full text-navy-800 font-medium"
                  onClick={() => setProgrammesOpen(!programmesOpen)}
                >
                  Programmes
                  <ChevronDown className={`w-5 h-5 transition-transform ${programmesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {programmesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex flex-col gap-2 mt-2 pl-4"
                    >
                      {programmeLinks.map(link => (
                         <Link key={link.name} to={link.path} className="text-navy-600 py-1">{link.name}</Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/curriculum" className="text-navy-800 font-medium py-2 border-b border-gray-50">Curriculum</Link>
              <Link to="/how-it-works" className="text-navy-800 font-medium py-2 border-b border-gray-50">How It Works</Link>
              <Link to="/pricing" className="text-navy-800 font-medium py-2 border-b border-gray-50">Pricing</Link>
              <Link to="/enrol" className="text-navy-800 font-medium py-2">Enrol</Link>
              
              <Link
                to="/free-assessment"
                className="bg-teal-600 text-white font-medium px-6 py-3 rounded-full text-center mt-4"
              >
                Book Free Assessment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
