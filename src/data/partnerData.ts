// ============================================================
// ROYAL EDUCATION SYSTEM — VERIFIED PARTNER ECOSYSTEM
// ============================================================
// Exact Partner Names and Roles as specified in Master PRD:
// 1. SYNX AI HORIZON
// 2. NOVA-GEN Institute of Technology
// 3. SYNX Marketing Studio
// ============================================================

export interface Partner {
  id: string;
  name: string;
  tagline: string;
  category: string;
  pillar: string;
  description: string;
  internshipNote?: string;
  logoText: string;
}

export const partners: Partner[] = [
  {
    id: 'synx-ai-horizon',
    name: 'SYNX AI HORIZON',
    tagline: 'AI, Technology & Future-Oriented Opportunities',
    category: 'Technology & AI Ecosystem',
    pillar: 'AI + Technology Support',
    description: 'Provides technological advisory, cutting-edge AI insights, IT capability building, and practical exposure. Learners may have access to practical exposure, volunteering, or potential internship opportunities subject to availability, eligibility, and partner requirements (may be paid, unpaid, or volunteer; not guaranteed).',
    internshipNote: 'Practical exposure and internship opportunities are subject to availability and partner selection criteria.',
    logoText: 'SYNX AI HORIZON',
  },
  {
    id: 'nova-gen-institute',
    name: 'NOVA-GEN Institute of Technology',
    tagline: 'Monthly Seminars, Digital Business & E-Commerce',
    category: 'Applied Business & Digital Skills',
    pillar: 'Digital Business & Career Awareness',
    description: 'Hosts monthly seminars and focused masterclasses exploring modern e-commerce foundations, digital business dynamics, and career awareness for future-facing digital opportunities.',
    logoText: 'NOVA-GEN INSTITUTE',
  },
  {
    id: 'synx-marketing-studio',
    name: 'SYNX Marketing Studio',
    tagline: 'Social Media Management & Digital Presence',
    category: 'Creative & Digital Presence',
    pillar: 'Marketing & Digital Presence',
    description: 'Guides learners through the principles of authentic digital marketing, social media management, brand ethics, and establishing a professional digital portfolio in a connected world.',
    logoText: 'SYNX MARKETING STUDIO',
  },
];

export default partners;
