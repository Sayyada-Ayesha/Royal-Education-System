import React from 'react';
import { Link } from 'react-router-dom';
import { Youtube, Instagram, Facebook, Linkedin, Mail, MessageCircle } from 'lucide-react';
import siteConfig from '../data/siteConfig';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const config = siteConfig || {};
  const social = config.socialLinks || {};

  return (
    <footer className="gradient-ink text-white/90 pt-20 pb-10">
      {/* Champagne divider */}
      <div className="divider-champagne mb-16"></div>

      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-14 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <img 
                src="/logo.jpg" 
                alt="Royal Education System" 
                className="w-10 h-10 object-contain rounded-lg bg-white p-0.5"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span className="font-heading font-extrabold text-xl text-white tracking-tight">
                Royal Education System
              </span>
            </Link>
            <p className="text-champagne-400 font-semibold text-sm mb-1">
              A Global, Structured & Unified Learning System
            </p>
            <p className="text-champagne-300/60 font-medium text-xs mb-4">
              Learn for Life. Grow for the Future.
            </p>
            <p className="text-ink-300 text-[11px] mb-6 max-w-md leading-relaxed">
              {config.positioningStatement || "This is an independent online learning system. It supports learners and families through academic, conceptual, practical, personal, technological and other learning opportunities. It does not claim government accreditation, school licensing or formal affiliation unless specifically stated for a verified program or partnership."}
            </p>

            {/* Social */}
            <div className="flex items-center gap-2.5">
              {social.youtube && (
                <a href={social.youtube} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/8 rounded-lg hover:bg-champagne-500/20 transition-colors" aria-label="YouTube">
                  <Youtube className="w-4 h-4 text-white/70" />
                </a>
              )}
              {social.instagram && (
                <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/8 rounded-lg hover:bg-champagne-500/20 transition-colors" aria-label="Instagram">
                  <Instagram className="w-4 h-4 text-white/70" />
                </a>
              )}
              {social.facebook && (
                <a href={social.facebook} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/8 rounded-lg hover:bg-champagne-500/20 transition-colors" aria-label="Facebook">
                  <Facebook className="w-4 h-4 text-white/70" />
                </a>
              )}
              {social.tiktok && (
                <a href={social.tiktok} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/8 rounded-lg hover:bg-champagne-500/20 transition-colors font-bold" aria-label="TikTok">
                  <span className="w-4 h-4 flex items-center justify-center text-[10px] text-white/70">TT</span>
                </a>
              )}
              {social.linkedin && (
                <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/8 rounded-lg hover:bg-champagne-500/20 transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4 text-white/70" />
                </a>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading font-bold text-xs text-champagne-400 uppercase tracking-widest mb-5">Explore</h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li><Link to="/" className="text-white/60 hover:text-champagne-300 transition-colors">Home</Link></li>
              <li><Link to="/why-res" className="text-white/60 hover:text-champagne-300 transition-colors">Why RES</Link></li>
              <li><Link to="/programmes" className="text-white/60 hover:text-champagne-300 transition-colors">Programmes</Link></li>
              <li><Link to="/curriculum" className="text-white/60 hover:text-champagne-300 transition-colors">Curriculum</Link></li>
              <li><Link to="/learning-method" className="text-white/60 hover:text-champagne-300 transition-colors">Learning Method</Link></li>
              <li><Link to="/technology-ai" className="text-white/60 hover:text-champagne-300 transition-colors">Technology & AI</Link></li>
              <li><Link to="/projects" className="text-white/60 hover:text-champagne-300 transition-colors">Projects</Link></li>
              <li><Link to="/offerings" className="text-champagne-300 font-semibold hover:text-champagne-200 transition-colors">Learning Opportunities</Link></li>
              <li><Link to="/masterclasses" className="text-white/60 hover:text-champagne-300 transition-colors">Masterclasses</Link></li>
              <li><Link to="/workshops" className="text-white/60 hover:text-champagne-300 transition-colors">Workshops</Link></li>
              <li><Link to="/trainings" className="text-white/60 hover:text-champagne-300 transition-colors">Trainings</Link></li>
              <li><Link to="/pricing" className="text-white/60 hover:text-champagne-300 transition-colors">Fees</Link></li>
            </ul>
          </div>

          {/* Programmes */}
          <div>
            <h3 className="font-heading font-bold text-xs text-champagne-400 uppercase tracking-widest mb-5">Programmes</h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li><Link to="/royal-juniors" className="text-white/60 hover:text-champagne-300 transition-colors">Royal Juniors (KG–4)</Link></li>
              <li><Link to="/royal-gems" className="text-white/60 hover:text-champagne-300 transition-colors">Royal Gems (5–8)</Link></li>
              <li><Link to="/royal-nova" className="text-white/60 hover:text-champagne-300 transition-colors">Royal Nova (9+)</Link></li>
              <li><Link to="/faith-values" className="text-white/60 hover:text-champagne-300 transition-colors">Faith & Values</Link></li>
              <li><Link to="/partners" className="text-white/60 hover:text-champagne-300 transition-colors">Our Partners</Link></li>
              <li><Link to="/teachers" className="text-white/60 hover:text-champagne-300 transition-colors">Our Educators</Link></li>
            </ul>
          </div>

          {/* Get Started & Contact */}
          <div>
            <h3 className="font-heading font-bold text-xs text-champagne-400 uppercase tracking-widest mb-5">Get Started</h3>
            <ul className="flex flex-col gap-2.5 text-sm mb-6">
              <li><Link to="/enrol" className="text-champagne-400 font-bold hover:text-champagne-300 transition-colors">Enrol Now →</Link></li>
              <li><Link to="/free-assessment" className="text-white/60 hover:text-champagne-300 transition-colors">Free Assessment</Link></li>
              <li><Link to="/free-demo" className="text-white/60 hover:text-champagne-300 transition-colors">Free Demo Class</Link></li>
              <li><Link to="/query" className="text-white/60 hover:text-champagne-300 transition-colors">Contact / Query</Link></li>
              <li><Link to="/faq" className="text-white/60 hover:text-champagne-300 transition-colors">FAQ</Link></li>
            </ul>
            
            <h3 className="font-heading font-bold text-xs text-champagne-400 uppercase tracking-widest mb-3">Contact</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <a href={`mailto:${config.contact?.email || 'info@royaleducationsystem.com'}`} className="flex items-center gap-2 text-white/60 hover:text-champagne-300 transition-colors">
                  <Mail className="w-3.5 h-3.5 shrink-0" /> {config.contact?.email || 'info@royaleducationsystem.com'}
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${config.contact?.whatsapp?.replace(/[^0-9]/g, '') || '971501234567'}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/60 hover:text-champagne-300 transition-colors">
                  <MessageCircle className="w-3.5 h-3.5 shrink-0" /> WhatsApp Support
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal */}
        <div className="pt-8 border-t border-white/8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>&copy; {currentYear} Royal Education System. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-champagne-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-champagne-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
