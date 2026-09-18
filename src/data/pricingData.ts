// ============================================================
// ROYAL EDUCATION SYSTEM — PRICING & FEES DATA
// ============================================================
// EDIT HERE: All pricing and country fee configurations
// The KG–Grade 8 programme is an ANNUAL EDUCATIONAL PROGRAMME.
// ============================================================

export interface GradePricingItem {
  grade: string;
  label: string;
  programme: 'Royal Juniors' | 'Royal Gems';
  // UAE (Base PRD figures)
  aedMonthly: number;
  aedAnnual: number;
  // USD (USA & International)
  usdMonthly: number;
  usdAnnual: number;
  // UK (GBP)
  gbpMonthly: number;
  gbpAnnual: number;
  // Backward compatibility fields
  aed: number;
  usd: number;
}

// EDIT HERE: Exact grade-by-grade fee structures
export const gradePricing: GradePricingItem[] = [
  { grade: 'KG', label: 'Kindergarten', programme: 'Royal Juniors', aedMonthly: 199, aedAnnual: 2388, usdMonthly: 55, usdAnnual: 660, gbpMonthly: 44, gbpAnnual: 528, aed: 199, usd: 55 },
  { grade: '1', label: 'Grade 1', programme: 'Royal Juniors', aedMonthly: 219, aedAnnual: 2628, usdMonthly: 60, usdAnnual: 720, gbpMonthly: 48, gbpAnnual: 576, aed: 219, usd: 60 },
  { grade: '2', label: 'Grade 2', programme: 'Royal Juniors', aedMonthly: 229, aedAnnual: 2748, usdMonthly: 62, usdAnnual: 744, gbpMonthly: 50, gbpAnnual: 600, aed: 229, usd: 62 },
  { grade: '3', label: 'Grade 3', programme: 'Royal Juniors', aedMonthly: 239, aedAnnual: 2868, usdMonthly: 65, usdAnnual: 780, gbpMonthly: 52, gbpAnnual: 624, aed: 239, usd: 65 },
  { grade: '4', label: 'Grade 4', programme: 'Royal Juniors', aedMonthly: 249, aedAnnual: 2988, usdMonthly: 68, usdAnnual: 816, gbpMonthly: 54, gbpAnnual: 648, aed: 249, usd: 68 },
  { grade: '5', label: 'Grade 5', programme: 'Royal Gems', aedMonthly: 269, aedAnnual: 3228, usdMonthly: 73, usdAnnual: 876, gbpMonthly: 58, gbpAnnual: 696, aed: 269, usd: 73 },
  { grade: '6', label: 'Grade 6', programme: 'Royal Gems', aedMonthly: 289, aedAnnual: 3468, usdMonthly: 79, usdAnnual: 948, gbpMonthly: 63, gbpAnnual: 756, aed: 289, usd: 79 },
  { grade: '7', label: 'Grade 7', programme: 'Royal Gems', aedMonthly: 309, aedAnnual: 3708, usdMonthly: 84, usdAnnual: 1008, gbpMonthly: 67, gbpAnnual: 804, aed: 309, usd: 84 },
  { grade: '8', label: 'Grade 8', programme: 'Royal Gems', aedMonthly: 329, aedAnnual: 3948, usdMonthly: 90, usdAnnual: 1080, gbpMonthly: 72, gbpAnnual: 864, aed: 329, usd: 90 },
];

// EDIT HERE: One-time admission fee
export const admissionFee = {
  aed: 99,
  usd: 27,
  gbp: 22,
  description: 'One-time registration and admission fee across standard annual programmes. No hidden administrative charges.',
};

// EDIT HERE: Optional Quran & Islamic Learning Programme
export const quranProgramme = {
  label: 'Quran & Islamic Learning',
  fromAed: 79,
  fromUsd: 22,
  fromGbp: 18,
  description: 'Optional supplementary add-on programme. Never mandatory for enrolment.',
};

// EDIT HERE: Standalone skill courses (Royal Nova)
export const skillCoursePricing = {
  basic: {
    label: 'Basic Skill Programme',
    aedRange: '199–299',
    usdRange: '55–82',
    gbpRange: '44–66',
    duration: '4–6 Weeks',
    features: ['Core fundamentals', 'Hands-on practice', 'Certificate of Completion'],
  },
  intermediate: {
    label: 'Intermediate Programme',
    aedRange: '299–449',
    usdRange: '82–122',
    gbpRange: '66–98',
    duration: '8–10 Weeks',
    features: ['Applied projects', 'Portfolio work', 'Instructor review'],
  },
  advanced: {
    label: 'Advanced Programme',
    aedRange: '449–699+',
    usdRange: '122–190+',
    gbpRange: '98–152+',
    duration: '12+ Weeks',
    features: ['Industry-grade capstones', 'Mentorship sessions', 'Advanced certification'],
  },
  custom: {
    label: 'Grade 9+ Custom Pathway',
    description: 'Personalized quote based on learning assessment and custom curriculum design.',
    features: ['Custom goal planning', 'Tailored schedule', 'Dedicated academic advisor'],
  },
};

// EDIT HERE: Three Core Service Pathways & Pakistani Pricing (Latest Specifications)
export const academicSupportServices = {
  freeDoubtSupport: {
    title: 'Free Academic Doubt Support',
    scope: 'International & Global',
    countries: ['Pakistan', 'UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Bahrain', 'Oman', 'United Kingdom', 'United States', 'International'],
    targetAudience: 'Learners already studying in a day-school or external curriculum who have academic questions.',
    curriculumModel: 'Question & Doubt Support Only — RES does NOT adopt their school curriculum.',
    cost: 'Free where offered',
    workflow: [
      { step: '1', title: 'Submit Question', desc: 'Learner sends an academic question or concept doubt to the RES support channel.' },
      { step: '2', title: 'Academic Review', desc: 'RES academic team reviews the doubt and prepares structured pedagogical guidance.' },
      { step: '3', title: 'Free Doubt Session', desc: 'If deeper discussion is needed, learner joins a free peer-accessible live Doubt Session.' }
    ]
  },
  paidPersonalTuition: {
    title: 'Paid Personal Tuition / Coaching',
    scope: 'Pakistan Only',
    targetAudience: 'Pakistani learners seeking personalized coaching aligned with their day-school syllabus (Federal, Government, Private).',
    curriculumModel: 'Personalized tuition based on the learner\'s existing school syllabus (School Curriculum + RES Support; RES does NOT adopt the school curriculum as its own).',
    urduSupport: 'Urdu voice and language assistance is available for learners needing it, while English is progressively developed.',
    pricing: {
      admissionFrom: 1000,
      monthlyFrom: 1000,
      currency: 'PKR',
      notice: 'From PKR 1,000 admission (one-time) and From PKR 1,000 / month (paid in advance). Actual fee depends on grade, learner level, tuition scope, and support requirements.'
    }
  },
  resAcademicProgramme: {
    title: 'RES Academic Programme',
    scope: 'Global / International',
    targetAudience: 'Learners seeking the comprehensive Royal Education System unified learning experience.',
    curriculumModel: 'RES Proprietary Curriculum (KG–Grade 8, Grade 9+) — Academics + Practical Math + Coding + AI Solutions + Communication + Ethics.',
    includedSupport: 'Internal Study, Practice & Support sessions and programme-related tuition are fully included in the programme.',
    pricing: {
      admissionFrom: 5000,
      monthlyFrom: 5000,
      currency: 'PKR (Pakistan) / AED 199–329 (Gulf) / $55–$90 (Global)',
      notice: 'Billed as "RES Academic Programme Fee" (never a school fee). In Pakistan: From PKR 5,000 admission (one-time) and From PKR 5,000 / month (paid in advance). Actual amount depends on grade and programme level.'
    }
  }
};

export const pakistaniPricing = {
  tuitionOnly: {
    label: 'Paid Personal Tuition / Coaching (Pakistan)',
    admissionFee: 1000,
    monthlyFee: 1000,
    admissionFrom: 1000,
    monthlyFrom: 1000,
    currency: 'PKR',
    billingNotice: 'Paid in advance. From PKR 1,000 admission (one-time) & From PKR 1,000 / month. Actual fee depends on grade, learner level, tuition requirement, and support scope.',
    description: 'Personalized tuition and coaching for learners attending Pakistani schools (Federal, Government, Private). RES does not adopt their school curriculum as its own, but provides dedicated tutoring for their day-school academic needs. Urdu voice and language support is available where needed, with progressive English development.',
    features: [
      'Personalized coaching based on existing school syllabus',
      'Urdu voice / language support available where helpful',
      'Progressive English communication development',
      'Homework clarification & exam concept practice',
      'Admission fee: From PKR 1,000 (one-time)',
      'Monthly fee: From PKR 1,000 / month (paid in advance)',
    ]
  },
  academicProgramme: {
    label: 'RES Academic Programme (Proprietary Curriculum)',
    admissionFee: 5000,
    monthlyFee: 5000,
    admissionFrom: 5000,
    monthlyFrom: 5000,
    currency: 'PKR',
    billingNotice: 'Paid in advance. Termed "RES Academic Programme Fee" (never a school fee). From PKR 5,000 admission & From PKR 5,000 / month. Actual amount depends on grade and programme level.',
    description: 'The complete Royal Education System experience: our proprietary curriculum (KG–Grade 8), conceptual academics, practical mathematics (budgeting, finance, measurement), coding, web dev, AI solutions & agents, communication, ethics, digital portfolios, and included internal Study, Practice & Support sessions.',
    features: [
      'Proprietary RES conceptual curriculum (KG–Grade 8)',
      'Practical mathematics + coding + AI solutions + communication',
      'Internal Study, Practice & Support sessions included',
      'Values, life skills, and digital portfolio building',
      'Admission fee: From PKR 5,000 (one-time)',
      'Monthly fee: From PKR 5,000 / month (paid in advance)',
    ]
  }
};

// EDIT HERE: Advance Payment Options & Discount Schedules (PRD & Latest Update)
// Note: These are PAYMENT OPTIONS, not programme durations. Each grade is a 1-year learning pathway.
export const paymentSchedules = [
  {
    id: 'monthly',
    name: 'Pay Monthly in Advance',
    months: 1,
    discountRate: 0,
    discountLabel: 'Standard Rate',
    description: 'Upcoming month paid in advance. Continuous, disciplined learning arrangement.',
  },
  {
    id: 'quarterly',
    name: 'Pay 3 Months in Advance',
    months: 3,
    discountRate: 0.03,
    discountLabel: '3% Discount',
    description: 'Three months paid together in advance. Applied across the learning year.',
  },
  {
    id: 'biannual',
    name: 'Pay 6 Months in Advance',
    months: 6,
    discountRate: 0.05,
    discountLabel: '5% Discount',
    description: 'Six months paid together in advance. Preferred structured payment option.',
  },
  {
    id: 'annual',
    name: 'Pay Full Learning Year in Advance',
    months: 12,
    discountRate: 0.10,
    discountLabel: '10% Discount',
    description: 'Complete one-year curriculum fee paid in advance. Maximum savings.',
  },
];

// EDIT HERE: Need-Based Scholarship & Donation Configuration
export const scholarshipConfig = {
  title: 'Need-Based Scholarship Assistance',
  maxAssistance: 'Up to 50%',
  policyNotice: 'Need-based scholarship support may be available, subject to assessment and available funding.',
  description: 'Scholarship assistance is intended for learners and families facing genuine financial hardship. Funded in part by generous donor contributions, our scholarship committee reviews each application confidentially.',
  workflow: [
    { step: '1', title: 'Application Submission', desc: 'Family completes the confidential scholarship request form with household information.' },
    { step: '2', title: 'Document & Need Review', desc: 'Confidential review of income statements, dependents, and financial circumstances.' },
    { step: '3', title: 'Committee Assessment', desc: 'Evaluation against verified need criteria and available scholarship pool.' },
    { step: '4', title: 'Scholarship Decision', desc: 'Fee reduction offer of up to 50% granted to eligible learners where funds allow.' },
  ],
  donation: {
    title: 'Support a Learner / Donate',
    description: 'Community contributions directly sponsor deserving learners through verified need-based scholarships.',
    link: '#donate-placeholder',
  }
};

// EDIT HERE: Supported country regions for Country Selector
export interface CountryRegion {
  id: string;
  name: string;
  currency: string;
  currencySymbol: string;
  flag: string;
  isQuoteOnly?: boolean;
  hasPakistaniPlans?: boolean;
  notice?: string;
}

export const countryRegions: CountryRegion[] = [
  {
    id: 'uae',
    name: 'United Arab Emirates',
    currency: 'AED',
    currencySymbol: 'AED',
    flag: '🇦🇪',
    notice: 'Gulf Region Base Pricing (AED). Paid in advance.',
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    currency: 'GBP',
    currencySymbol: '£',
    flag: '🇬🇧',
    notice: 'UK & Europe Regional Pricing (GBP). Paid in advance.',
  },
  {
    id: 'usa',
    name: 'United States & Americas',
    currency: 'USD',
    currencySymbol: '$',
    flag: '🇺🇸',
    notice: 'Americas Regional Pricing (USD). Paid in advance.',
  },
  {
    id: 'pakistan',
    name: 'Pakistan',
    currency: 'PKR',
    currencySymbol: 'PKR',
    flag: '🇵🇰',
    hasPakistaniPlans: true,
    notice: 'Personal Tuition / Coaching: From PKR 1,000/mo (From PKR 1,000 admission) | RES Academic Programme: From PKR 5,000/mo (From PKR 5,000 admission). All fees paid in advance.',
  },
  {
    id: 'other',
    name: 'Other International Countries',
    currency: 'USD',
    currencySymbol: '$',
    flag: '🌐',
    notice: 'International Standard Pricing (USD). Paid in advance. Customized local adjustments on request.',
  },
];

// EDIT HERE: Annual programme sibling discount
export const annualDiscounts = [
  {
    plan: 'Annual Full Payment',
    discount: 'Save 10%',
    description: 'Full one-year curriculum fee paid in advance.',
  },
  {
    plan: '6-Month Advance Payment',
    discount: 'Save 5%',
    description: 'Six months of the learning year paid in advance.',
  },
  {
    plan: '3-Month Advance Payment',
    discount: 'Save 3%',
    description: 'Three months of the learning year paid in advance.',
  },
  {
    plan: 'Sibling Consideration',
    discount: '15%–20%',
    description: 'Discount applied to the second and subsequent enrolled siblings.',
  },
];

export const discounts = [
  { plan: 'Annual Commitment (Full Year in Advance)', discount: '10%', description: 'Savings when paying the complete annual curriculum in advance' },
  { plan: '6 Months in Advance', discount: '5%', description: 'Savings when paying 6 months in advance' },
  { plan: '3 Months in Advance', discount: '3%', description: 'Savings when paying 3 months in advance' },
  { plan: 'Sibling Discount', discount: '15–20%', description: 'Applied on additional sibling enrolments' },
];

// ============================================================
// EDIT HERE: Masterclass Pricing
// ============================================================
export const masterclassDefaultPrice = 5000; // PKR 5,000 per Masterclass
export const masterclassPricingDisplay = 'PKR 5,000';

// ============================================================
// EDIT HERE: Workshop Pricing
// ============================================================
export const workshopPriceRange = {
  min: 5000,
  max: 10000,
  display: 'PKR 5,000–10,000',
  note: 'Negotiable depending on the workshop, format, duration, group size, and scope.',
};

// ============================================================
// EDIT HERE: Training Pricing
// ============================================================
export const trainingPriceRange = {
  min: 10000,
  max: 50000,
  display: 'PKR 10,000–50,000',
  note: 'Exact pricing depends on training type, duration, complexity, scope, and mentorship support level.',
};

export default gradePricing;
