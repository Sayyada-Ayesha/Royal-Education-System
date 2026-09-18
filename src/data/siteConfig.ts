// ============================================================
// ROYAL EDUCATION SYSTEM — CENTRAL SITE CONFIGURATION
// ============================================================
// EDIT HERE: All major site-wide settings
// This file is the single source of truth for business information.
// ============================================================

export const siteConfig = {
  // EDIT HERE: Business name and brand language (PRD v2.0 Sections 2-4)
  name: 'Royal Education System',
  descriptor: 'A Global, Structured & Unified Learning System',
  tagline: 'Learn. Understand. Grow. Connect.',
  vision: 'Education should prepare a learner for life—not only for an examination.',
  shortDescription:
    'An international, global, structured and unified learning system designed to bring different parts of a learner\'s educational journey together in one disciplined, supportive environment.',
  fullDescription:
    'Royal Education System is a structured, unified learning system that integrates proprietary academic curriculum, interactive tutoring, faith and moral ethics, communication mastery, technology and AI literacy, practical projects, and whole-person development—with clear expectations and guided support.',

  // EDIT HERE: Live Learning & Privacy Policies
  liveLearningPolicy: {
    recordings: 'Class recordings are not provided as a standard learning model. Learning is built on live participation, dialogue, guided practice, and active engagement.',
    cameraPolicy: 'Learner cameras are not required during general sessions to protect student privacy and comfort. Instructors use live cameras, screen sharing, software demonstrations, and interactive visual tools.',
    attendance: 'Live session attendance and responsible participation are expected across all structured learning tracks.',
  },

  // EDIT HERE: Positioning disclaimer (PRD v2.0 Section 4)
  positioningStatement:
    'This is an independent online learning system. It operates its own proprietary curriculum and learning framework. It does not claim government accreditation, school licensing or formal affiliation unless specifically stated for a verified program or partnership.',

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

  // EDIT HERE: Social media links (centralized source of truth)
  socialLinks: {
    youtube: 'https://youtube.com/@royaleducationsystem',
    instagram: 'https://instagram.com/royaleducationsystem',
    facebook: 'https://facebook.com/royaleducationsystem',
    linkedin: 'https://linkedin.com/company/royaleducationsystem',
    tiktok: '', // Editable placeholder: leave empty if not yet active
  },

  // EDIT HERE: Official social handles for display
  socialHandles: {
    youtube: '@royaleducationsystem',
    instagram: '@royaleducationsystem',
    facebook: 'Royal Education System',
    linkedin: 'Royal Education System',
    tiktok: '@royaleducationsystem',
  },

  // EDIT HERE: About section (PRD v2.0 Section 26)
  about: {
    founders: [
      { 
        name: 'Sayyada Ayesha', 
        role: 'Co-Founder',
        qualification: 'IT Graduate',
        focus: 'Conceptual Academics, Ethics & Values, Student Communication',
        story: 'Passionate about integrating conceptual academics, moral grounding, communication confidence, and holistic student growth into one unified pathway.',
        lifelongLearning: 'Continuously studying modern pedagogy, cognitive development, and human-centered education.',
        philosophy: 'A learning system must nurture understanding, ethics, and clarity—growing alongside the learner at every stage.',
        image: '/images/founders/sayyada-ayesha.jpg'
      },
      { 
        name: 'Malik Ayan Ahmed', 
        role: 'Co-Founder, Technology',
        qualification: 'IT Graduate',
        focus: 'Educational Architecture, AI & Emerging Tech, Practical Systems',
        story: 'Dedicated to designing robust learning architecture, modern AI & digital literacy tools, and hands-on technical environments that prepare learners for the future.',
        lifelongLearning: 'Actively exploring artificial intelligence, software architectures, and emerging technologies to keep RES at the frontier.',
        philosophy: 'Technology is an amplifier of human capability. We guide learners from passive consumers into active, ethical creators.',
        image: '/images/founders/malik-ayan-ahmed.jpg'
      },
    ],
    digitalCharacters: [
      {
        id: 'mr-rook',
        name: 'Mr. Rook',
        role: 'Digital Character',
        system: 'The Royal Education System',
        badge: 'Digital Character · The Royal Education System',
        title: 'Senior Academic & Logic Guide',
        focus: 'Analytical thinking, mathematics, algorithmic reasoning, structured problem solving, and technological inquiry.',
        quote: 'Every complex challenge yields to patience, structured logic, and curiosity.',
        image: '/images/characters/mr-rook.png',
      },
      {
        id: 'mrs-rook',
        name: 'Mrs. Rook',
        role: 'Digital Character',
        system: 'The Royal Education System',
        badge: 'Digital Character · The Royal Education System',
        title: 'Communication & Character Guide',
        focus: 'Expressive speaking, emotional intelligence, moral grounding, confidence building, and empathy.',
        quote: 'True strength is expressed through thoughtful speech, deep listening, and character.',
        image: '/images/characters/mrs-rook.png',
      },
    ],
    foundedBy: 'Sayyada Ayesha and Malik Ayan Ahmed',
    founderBelief:
      'Education should not feel fragmented. A learner needs knowledge, understanding, skills, technology, communication, confidence and character—all in one place.',
    mission:
      'Royal Education System was designed to unify the different parts of a learner\'s educational journey into one accessible, structured environment.',
  },

  // EDIT HERE: Target market
  targetMarket: {
    primary: ['UAE', 'Dubai', 'Sharjah', 'Ajman'],
    secondary: ['Saudi Arabia', 'Qatar', 'Kuwait', 'Oman', 'Bahrain'],
    global: ['UK', 'USA', 'Pakistan', 'Other'],
    currency: {
      primary: 'AED',
      secondary: 'USD',
    },
  },
};

export default siteConfig;
