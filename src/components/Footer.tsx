import React from 'react';
import { Link } from 'react-router-dom';
import { Crown, Youtube, Instagram, Facebook, Linkedin, Mail, Phone, MessageCircle } from 'lucide-react';
// @ts-ignore
import { siteConfig } from '../data/siteConfig';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Fallback for siteConfig in case it's not fully defined
  const config = siteConfig || {};
  const social = config.socialLinks || {};

  return (
    <footer className="bg-gradient-to-br from-navy-900 to-navy-800 text-white/90 pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Crown className="w-8 h-8 text-accent-gold" />
              <span className="font-heading font-bold text-2xl text-white tracking-tight">
                Royal Education System
              </span>
            </Link>
            <p className="text-navy-100 text-lg mb-6 max-w-sm">
              Learn for Life. Grow for the Future.
            </p>
            <p className="text-navy-200 text-sm mb-6 max-w-md italic">
              {config.positioningStatement || "This is a supplementary online learning programme. It supports a learner's formal education and does not replace enrolment in a school where applicable."}
            </p>
            <div className="flex items-center gap-4">
              {social.youtube && (
                <a href={social.youtube} target="_blank" rel="noopener noreferrer" className="p-2 bg-navy-700/50 rounded-full hover:bg-teal-600 transition-colors" aria-label="YouTube">
                  <Youtube className="w-5 h-5 text-white" />
                </a>
              )}
              {social.instagram && (
                <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-navy-700/50 rounded-full hover:bg-teal-600 transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5 text-white" />
                </a>
              )}
              {social.facebook && (
                <a href={social.facebook} target="_blank" rel="noopener noreferrer" className="p-2 bg-navy-700/50 rounded-full hover:bg-teal-600 transition-colors" aria-label="Facebook">
                  <Facebook className="w-5 h-5 text-white" />
                </a>
              )}
              {social.tiktok && (
                <a href={social.tiktok} target="_blank" rel="noopener noreferrer" className="p-2 bg-navy-700/50 rounded-full hover:bg-teal-600 transition-colors flex items-center justify-center font-bold" aria-label="TikTok">
                  <span className="w-5 h-5 flex items-center justify-center text-sm">TT</span>
                </a>
              )}
              {social.linkedin && (
                <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-navy-700/50 rounded-full hover:bg-teal-600 transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg text-white mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              <li><Link to="/" className="text-navy-100 hover:text-teal-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-navy-100 hover:text-teal-400 transition-colors">About</Link></li>
              <li><Link to="/academics" className="text-navy-100 hover:text-teal-400 transition-colors">Academics</Link></li>
              <li><Link to="/curriculum" className="text-navy-100 hover:text-teal-400 transition-colors">Curriculum</Link></li>
              <li><Link to="/how-it-works" className="text-navy-100 hover:text-teal-400 transition-colors">How It Works</Link></li>
              <li><Link to="/pricing" className="text-navy-100 hover:text-teal-400 transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Programmes */}
          <div>
            <h3 className="font-heading font-semibold text-lg text-white mb-6">Programmes</h3>
            <ul className="flex flex-col gap-3">
              <li><Link to="/programmes/juniors" className="text-navy-100 hover:text-teal-400 transition-colors">Royal Juniors</Link></li>
              <li><Link to="/programmes/gems" className="text-navy-100 hover:text-teal-400 transition-colors">Royal Gems</Link></li>
              <li><Link to="/programmes/nova" className="text-navy-100 hover:text-teal-400 transition-colors">Royal Nova</Link></li>
            </ul>
          </div>

          {/* Resources & Contact */}
          <div>
            <h3 className="font-heading font-semibold text-lg text-white mb-6">Resources</h3>
            <ul className="flex flex-col gap-3 mb-6">
              <li><Link to="/free-assessment" className="text-navy-100 hover:text-teal-400 transition-colors">Free Assessment</Link></li>
              <li><Link to="/free-demo" className="text-navy-100 hover:text-teal-400 transition-colors">Free Demo</Link></li>
              <li><Link to="/enrol" className="text-navy-100 hover:text-teal-400 transition-colors">Enrol</Link></li>
              <li><Link to="/faq" className="text-navy-100 hover:text-teal-400 transition-colors">FAQ</Link></li>
              <li><Link to="/teachers" className="text-navy-100 hover:text-teal-400 transition-colors">Teachers</Link></li>
              <li><Link to="/projects" className="text-navy-100 hover:text-teal-400 transition-colors">Projects</Link></li>
            </ul>
            
            <h3 className="font-heading font-semibold text-lg text-white mb-4">Contact</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="mailto:info@royaleducationsystem.com" className="flex items-center gap-2 text-navy-100 hover:text-teal-400 transition-colors">
                  <Mail className="w-4 h-4" /> info@royaleducationsystem.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="flex items-center gap-2 text-navy-100 hover:text-teal-400 transition-colors">
                  <Phone className="w-4 h-4" /> Phone Support
                </a>
              </li>
              <li>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-navy-100 hover:text-teal-400 transition-colors">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-navy-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-navy-300 text-sm">
            &copy; {currentYear} Royal Education System. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-navy-300 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-navy-300 hover:text-white text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
