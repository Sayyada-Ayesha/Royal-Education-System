// ============================================================
// ROYAL EDUCATION SYSTEM — PRICING DATA
// ============================================================
// EDIT HERE: All pricing information
// CHANGE PRICE HERE: Update any grade price below
// ============================================================

export interface GradePrice {
  grade: string;
  label: string;
  programme: string;
  aed: number;
  usd: number;
}

// CHANGE PRICE HERE: Monthly programme pricing by grade
export const gradePricing: GradePrice[] = [
  { grade: 'KG', label: 'Kindergarten', programme: 'Royal Juniors', aed: 199, usd: 55 },
  { grade: '1', label: 'Grade 1', programme: 'Royal Juniors', aed: 219, usd: 60 },
  { grade: '2', label: 'Grade 2', programme: 'Royal Juniors', aed: 229, usd: 62 },
  { grade: '3', label: 'Grade 3', programme: 'Royal Juniors', aed: 239, usd: 65 },
  { grade: '4', label: 'Grade 4', programme: 'Royal Juniors', aed: 249, usd: 68 },
  { grade: '5', label: 'Grade 5', programme: 'Royal Gems', aed: 269, usd: 73 },
  { grade: '6', label: 'Grade 6', programme: 'Royal Gems', aed: 289, usd: 79 },
  { grade: '7', label: 'Grade 7', programme: 'Royal Gems', aed: 309, usd: 84 },
  { grade: '8', label: 'Grade 8', programme: 'Royal Gems', aed: 329, usd: 90 },
];

// CHANGE PRICE HERE: One-time admission fee
export const admissionFee = {
  aed: 99,
  usd: 27,
  description: 'One-time admission/registration fee across all standard grade-based programmes.',
};

// CHANGE PRICE HERE: Optional Quran programme
export const quranProgramme = {
  label: 'Quran & Islamic Learning',
  fromAed: 79,
  description: 'Optional add-on programme. Not mandatory for every learner.',
};

// CHANGE PRICE HERE: Standalone skill courses (Royal Nova)
export const skillCoursePricing = {
  basic: { label: 'Basic Skill Programme', aedRange: '199–299' },
  intermediate: { label: 'Intermediate Programme', aedRange: '299–449' },
  advanced: { label: 'Advanced Programme', aedRange: '449–699+' },
  custom: {
    label: 'Grade 9+ Custom Pathway',
    description: 'Contact for custom quote',
  },
};

// CHANGE PRICE HERE: Discount plans
export const discounts = [
  { plan: '3-Month Plan', discount: '5%', description: 'Save 5% with a 3-month commitment' },
  { plan: '6-Month Plan', discount: '10%', description: 'Save 10% with a 6-month commitment' },
  { plan: 'Sibling Discount', discount: '15–20%', description: 'Sibling discount on additional enrolments' },
];

export default gradePricing;
