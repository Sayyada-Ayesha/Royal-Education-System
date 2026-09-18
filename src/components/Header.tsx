import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [learningOpen, setLearningOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setLearningOpen(false);
    setProgramsOpen(false);
  }, [location.pathname]);

  // Dynamic colors: transparent + white text over hero, ivory + ink text elsewhere
  const headerBg = isScrolled
    ? 'bg-ivory-100/95 backdrop-blur-lg shadow-[0_1px_0_rgba(199,166,106,0.15)]'
    : isHome
      ? 'bg-transparent'
      : 'bg-ivory-100/95 backdrop-blur-lg';

  const textColor = isScrolled || !isHome ? 'text-ink-950' : 'text-white';
  const activeColor = 'text-champagne-400';
  const hoverColor = isScrolled || !isHome ? 'hover:text-champagne-500' : 'hover:text-champagne-300';
  const logoText = isScrolled || !isHome ? 'text-ink-950' : 'text-white';
  const subText = isScrolled || !isHome ? 'text-champagne-500' : 'text-champagne-300';

  const isActive = (paths: string[]) => paths.some(p =>
    p === '/' ? location.pathname === '/' : location.pathname.startsWith(p)
  );

  const navLinkClass = (paths: string[]) =>
    `font-semibold text-sm transition-colors duration-200 ${
      isActive(paths) ? activeColor : `${textColor} ${hoverColor}`
    }`;

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${headerBg} ${isScrolled ? 'py-3' : 'py-4 lg:py-5'}`}>
      <div className="site-container-wide">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 z-50 shrink-0">
            <img
              src="/logo.jpg"
              alt="Royal Education System"
              className={`w-10 h-10 object-contain rounded-lg transition-all duration-300 ${isScrolled || !isHome ? 'shadow-sm' : 'shadow-md ring-1 ring-white/20'}`}
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="flex flex-col">
              <span className={`font-heading font-extrabold text-lg md:text-xl tracking-tight leading-tight transition-colors duration-300 ${logoText}`}>
                Royal Education System
              </span>
              <span className={`text-[10px] font-semibold uppercase tracking-wider hidden sm:block transition-colors duration-300 ${subText}`}>
                A Global & Unified Learning System
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-7" aria-label="Main navigation">
            <Link to="/" className={navLinkClass(['/'])}>Home</Link>
            <Link to="/about" className={navLinkClass(['/about', '/why-res'])}>About</Link>

            {/* Learning Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setLearningOpen(true)}
              onMouseLeave={() => setLearningOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1 font-semibold text-sm transition-colors duration-200 py-2 ${
                  isActive(['/curriculum', '/academics', '/learning-method', '/projects', '/technology-ai', '/faith-values', '/masterclasses', '/workshops', '/trainings', '/offerings', '/opportunities'])
                    ? activeColor
                    : `${textColor} ${hoverColor}`
                }`}
                aria-expanded={learningOpen}
              >
                Learning
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${learningOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {learningOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 bg-white shadow-xl rounded-xl py-2 w-64 border border-ink-100/60"
                  >
                    {[
                      { to: '/curriculum', label: 'Curriculum', desc: 'Conceptual, skills-based framework' },
                      { to: '/academics', label: 'Academics', desc: 'Math, Science, English & Communication' },
                      { to: '/learning-method', label: 'Learning Method', desc: 'Understand → Practice → Create' },
                      { to: '/technology-ai', label: 'Technology & AI', desc: 'Digital foundations to applied AI' },
                      { to: '/projects', label: 'Projects', desc: 'Real, student-created work' },
                      { to: '/masterclasses', label: 'Masterclasses', desc: 'Focused modern practical skills (PKR 5K)' },
                      { to: '/workshops', label: 'Workshops', desc: 'Interactive thinking & life frameworks' },
                      { to: '/trainings', label: 'Trainings', desc: 'Structured skill sprints (7d, 1mo, 3mo)' },
                    ].map(item => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block px-4 py-2 hover:bg-ivory-100 transition-colors"
                      >
                        <span className="font-bold block text-ink-950 text-xs">{item.label}</span>
                        <span className="text-[11px] text-ink-400">{item.desc}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Programs Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProgramsOpen(true)}
              onMouseLeave={() => setProgramsOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1 font-semibold text-sm transition-colors duration-200 py-2 ${
                  isActive(['/royal-', '/programmes'])
                    ? activeColor
                    : `${textColor} ${hoverColor}`
                }`}
                aria-expanded={programsOpen}
              >
                Programs
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${programsOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {programsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 bg-white shadow-xl rounded-xl py-2 w-64 border border-ink-100/60"
                  >
                    <Link to="/programmes" className="block px-4 py-2.5 hover:bg-ivory-100 transition-colors border-b border-ink-50">
                      <span className="font-bold block text-champagne-500 text-xs">All Programs Overview</span>
                      <span className="text-[11px] text-ink-400">The complete learning continuum</span>
                    </Link>
                    {[
                      { to: '/royal-juniors', label: 'Royal Juniors (KG–4)', desc: 'Foundations, manners & curiosity' },
                      { to: '/royal-gems', label: 'Royal Gems (5–8)', desc: 'Applied capability, tech & skills' },
                      { to: '/royal-nova', label: 'Royal Nova (9+)', desc: 'Custom, flexible skill pathways' },
                    ].map(item => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block px-4 py-2.5 hover:bg-ivory-100 transition-colors"
                      >
                        <span className="font-bold block text-ink-950 text-xs">{item.label}</span>
                        <span className="text-[11px] text-ink-400">{item.desc}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/pricing" className={navLinkClass(['/pricing', '/fees'])}>Fees</Link>
            <Link to="/admissions" className={navLinkClass(['/admissions', '/how-it-works'])}>Admissions</Link>
            <Link to="/query" className={navLinkClass(['/query', '/contact'])}>Contact</Link>
          </nav>

          {/* Primary CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/free-assessment"
              className="hidden sm:inline-flex btn-primary text-xs px-5 py-2.5 rounded-full whitespace-nowrap"
            >
              BOOK FREE ASSESSMENT
            </Link>

            <button
              className={`xl:hidden p-2 focus:outline-none transition-colors ${textColor}`}
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
            transition={{ duration: 0.25 }}
            className="xl:hidden bg-ivory-100 border-t border-champagne-100 overflow-hidden shadow-2xl"
          >
            <div className="site-container-wide py-4 flex flex-col gap-1">
              <Link to="/" className="text-ink-900 font-semibold py-2.5 border-b border-ink-50 text-sm">Home</Link>
              <Link to="/about" className="text-ink-900 font-semibold py-2.5 border-b border-ink-50 text-sm">About</Link>

              {/* Mobile Learning */}
              <div className="py-2.5 border-b border-ink-50">
                <button
                  className="flex items-center justify-between w-full text-ink-900 font-semibold text-sm"
                  onClick={() => setLearningOpen(!learningOpen)}
                >
                  Learning
                  <ChevronDown className={`w-4 h-4 transition-transform ${learningOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {learningOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex flex-col gap-1 mt-2 pl-4"
                    >
                      <Link to="/curriculum" className="text-ink-700 py-1.5 text-xs">Curriculum</Link>
                      <Link to="/academics" className="text-ink-700 py-1.5 text-xs">Academics</Link>
                      <Link to="/learning-method" className="text-ink-700 py-1.5 text-xs">Learning Method</Link>
                      <Link to="/technology-ai" className="text-ink-700 py-1.5 text-xs">Technology & AI</Link>
                      <Link to="/projects" className="text-ink-700 py-1.5 text-xs">Projects</Link>
                      <Link to="/masterclasses" className="text-champagne-600 font-semibold py-1.5 text-xs">Masterclasses (PKR 5K)</Link>
                      <Link to="/workshops" className="text-wine-700 font-semibold py-1.5 text-xs">Workshops (PKR 5K–10K)</Link>
                      <Link to="/trainings" className="text-ink-950 font-semibold py-1.5 text-xs">Trainings (PKR 10K–50K)</Link>
                      <Link to="/offerings" className="text-champagne-600 font-bold py-1.5 text-xs">All Learning Opportunities →</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Programs */}
              <div className="py-2.5 border-b border-ink-50">
                <button
                  className="flex items-center justify-between w-full text-ink-900 font-semibold text-sm"
                  onClick={() => setProgramsOpen(!programsOpen)}
                >
                  Programs
                  <ChevronDown className={`w-4 h-4 transition-transform ${programsOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {programsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex flex-col gap-1 mt-2 pl-4"
                    >
                      <Link to="/programmes" className="text-champagne-500 font-semibold py-1.5 text-xs">All Programs Overview</Link>
                      <Link to="/royal-juniors" className="text-ink-600 py-1.5 text-xs">Royal Juniors (KG–4)</Link>
                      <Link to="/royal-gems" className="text-ink-600 py-1.5 text-xs">Royal Gems (5–8)</Link>
                      <Link to="/royal-nova" className="text-ink-600 py-1.5 text-xs">Royal Nova (9+)</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/pricing" className="text-ink-900 font-semibold py-2.5 border-b border-ink-50 text-sm">Fees</Link>
              <Link to="/admissions" className="text-ink-900 font-semibold py-2.5 border-b border-ink-50 text-sm">Admissions</Link>
              <Link to="/query" className="text-ink-900 font-semibold py-2.5 border-b border-ink-50 text-sm">Contact</Link>

              <div className="pt-4 pb-2 flex flex-col gap-2">
                <Link
                  to="/free-assessment"
                  className="btn-primary text-center text-sm rounded-xl"
                >
                  BOOK FREE ASSESSMENT
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
