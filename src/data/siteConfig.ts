// ============================================================
// ROYAL EDUCATION SYSTEM — CENTRAL SITE CONFIGURATION
// ============================================================
// EDIT HERE: All major site-wide settings
// This file is the single source of truth for business information.
// ============================================================

export const siteConfig = {
  // EDIT HERE: Business name and tagline
  name: 'Royal Education System',
  tagline: 'Learn for Life. Grow for the Future.',
  shortDescription:
    'A structured online learning ecosystem combining academics, technology, communication, life skills and character.',
  fullDescription:
    'Royal Education System is a modern, international online education ecosystem designed to help learners build knowledge, practical skills, technological capability, communication, confidence, character and lifelong learning habits.',

  // EDIT HERE: Positioning statement (used in footer)
  positioningStatement:
    'This is a supplementary online learning programme. It supports a learner\'s formal education and does not replace enrolment in a school where applicable.',

  // EDIT HERE: Business email
  businessEmail: 'BUSINESS_EMAIL',

  // EDIT HERE: Form submission endpoints
  formEndpoint: 'FORM_ENDPOINT',
  googleSheetEndpoint: 'GOOGLE_SHEET_ENDPOINT',

  // EDIT HERE: Contact information
  contact: {
    email: 'info@royaleducationsystem.com',
    phone: '+971 XX XXX XXXX',
    whatsapp: '+971 XX XXX XXXX',
  },

  // EDIT HERE: Social media links
  socialLinks: {
    youtube: '#',
    instagram: '#',
    facebook: '#',
    tiktok: '#',
    linkedin: '#',
  },

  // EDIT HERE: About section
  about: {
    foundedBy: 'two IT graduates',
    founderBelief:
      'Education should go beyond memorization. Learners need knowledge, understanding, skills, technology, communication, confidence and character.',
    mission:
      'Royal Education System was designed to make learning practical, structured and future-ready.',
  },

  // EDIT HERE: Target market
  targetMarket: {
    primary: ['UAE', 'Dubai', 'Sharjah', 'Ajman'],
    secondary: ['Saudi Arabia', 'Qatar', 'Kuwait', 'Oman', 'Bahrain'],
    currency: {
      primary: 'AED',
      secondary: 'USD',
    },
  },
};

export default siteConfig;
