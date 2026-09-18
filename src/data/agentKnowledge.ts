// ============================================================
// ROYAL EDUCATION SYSTEM — ROYAL AGENT KNOWLEDGE BASE
// ============================================================
// UPDATE AGENT INFORMATION HERE: Add or modify agent knowledge
// ============================================================

import { gradePricing, admissionFee, quranProgramme, discounts } from './pricingData';
import { siteConfig } from './siteConfig';

export interface AgentResponse {
  keywords: string[];
  answer: string;
  link?: string;
  linkText?: string;
}

// UPDATE AGENT INFORMATION HERE
export const agentKnowledge: AgentResponse[] = [
  {
    keywords: ['what is royal education', 'about royal', 'tell me about', 'what do you do', 'who are you'],
    answer: `${siteConfig.fullDescription} We bring together academic understanding, technology & AI, communication, life skills and character development into one structured, international learning ecosystem.`,
    link: '/about',
    linkText: 'Learn more about us',
  },
  {
    keywords: ['royal juniors', 'kg', 'kindergarten', 'grade 1', 'grade 2', 'grade 3', 'grade 4', 'foundation', 'early childhood'],
    answer: `Royal Juniors is our foundation learning pathway for KG to Grade 4 learners. It focuses on academic foundations, conceptual understanding, English & communication, mathematics, science discovery, technology foundations, creativity, problem solving, and values.`,
    link: '/royal-juniors',
    linkText: 'Explore Royal Juniors',
  },
  {
    keywords: ['royal gems', 'grade 5', 'grade 6', 'grade 7', 'grade 8', 'middle'],
    answer: `Royal Gems is our development and applied-learning pathway for Grades 5 to 8. Learners turn knowledge into capability with advanced academics, coding, AI literacy, hands-on projects, critical thinking, problem solving, and independent thinking.`,
    link: '/royal-gems',
    linkText: 'Explore Royal Gems',
  },
  {
    keywords: ['royal nova', 'grade 9', 'grade 10', 'grade 11', 'grade 12', 'graduate', 'university', 'professional', 'adult', 'skill', 'flexible'],
    answer: `Royal Nova is our flexible skill-development pathway for Grade 9+ learners, graduates, university students, and professionals. You can choose specific competencies like AI, coding, Python, web development, and communication without joining the complete academic pathway.`,
    link: '/royal-nova',
    linkText: 'Explore Royal Nova',
  },
  {
    keywords: ['programs', 'programmes', 'what programmes', 'options', 'offerings'],
    answer: `We offer three distinct learning pathways: Royal Juniors (KG–Grade 4 foundation), Royal Gems (Grades 5–8 development & applied learning), and Royal Nova (Grade 9+ & flexible lifelong skill mastery).`,
    link: '/programs',
    linkText: 'View all programs',
  },
  {
    keywords: ['price', 'cost', 'fee', 'fees', 'how much', 'pricing', 'affordable', 'expensive', 'money', 'payment'],
    answer: `Our KG–Grade 8 programme is a transparent annual educational programme with manageable monthly breakdowns: ${gradePricing.map(g => `${g.label}: AED ${g.aedMonthly}/mo (~$${g.usdMonthly})`).join(', ')}. One-time admission fee: AED ${admissionFee.aed}. Sibling & annual payment discounts available.`,
    link: '/fees',
    linkText: 'View complete fee schedules',
  },
  {
    keywords: ['admission', 'registration', 'joining fee', 'how to join', 'admissions'],
    answer: `Our admission process is clear and supportive: Explore → Free Assessment → Programme Recommendation → Apply → Onboarding → Begin Learning. There is a transparent one-time admission fee of AED ${admissionFee.aed} ($${admissionFee.usd}).`,
    link: '/admissions',
    linkText: 'Explore admissions process',
  },
  {
    keywords: ['apply', 'apply now', 'enrol', 'enroll', 'register', 'sign up'],
    answer: `You can apply directly online through our quick application form. We will evaluate your goals, arrange your assessment, and guide you through onboarding.`,
    link: '/apply',
    linkText: 'Apply now',
  },
  {
    keywords: ['discount', 'sibling', 'offer', 'savings'],
    answer: `We offer transparent discount policies: ${discounts.map(d => `${d.plan}: ${d.discount}`).join(', ')}.`,
    link: '/fees',
    linkText: 'View fee details & discounts',
  },
  {
    keywords: ['assessment', 'test', 'evaluate', 'level', 'placement', 'free assessment'],
    answer: `We offer a comprehensive Free Learning Assessment to evaluate current subject knowledge, pinpoint conceptual strengths and gaps, and recommend the best personalized pathway. Completely free with zero obligation.`,
    link: '/free-assessment',
    linkText: 'Book free learning assessment',
  },
  {
    keywords: ['demo', 'trial', 'try', 'sample', 'free demo'],
    answer: `Experience our teaching methodology firsthand before committing. Book a free demo class to see how our Understand → Practice → Explain → Apply → Create approach engages learners.`,
    link: '/free-demo',
    linkText: 'Book your free demo class',
  },
  {
    keywords: ['quran', 'islamic', 'muslim', 'islam', 'faith', 'religion'],
    answer: `Quran & Islamic Learning is an optional add-on starting from AED ${quranProgramme.fromAed}/month ($${quranProgramme.fromUsd}). For non-Muslim learners, we provide universal faith awareness, ethics, empathy, and character development.`,
    link: '/faith-values',
    linkText: 'Learn about Faith & Values',
  },
  {
    keywords: ['python', 'code', 'coding', 'programming', 'ai', 'artificial intelligence', 'technology', 'tech', 'scratch', 'tinkercad'],
    answer: `Our technology and AI pathway moves from digital foundations through block coding (Scratch, Code.org) to creative computing (Tinkercad, Micro:bit), Python programming, web development, and real-world applied AI projects.`,
    link: '/technology-ai',
    linkText: 'Explore Technology & AI',
  },
  {
    keywords: ['curriculum', 'what do you teach', 'subjects', 'syllabus'],
    answer: `Our curriculum integrates core academics (Mathematics, Science, English, Communication) with Technology & AI, Life & Civic Skills, and Character Development across every grade level.`,
    link: '/curriculum',
    linkText: 'View our curriculum framework',
  },
  {
    keywords: ['contact', 'reach', 'email', 'whatsapp', 'phone', 'call', 'message'],
    answer: `You can reach our admissions team via our Contact page, email us at ${siteConfig.contact.email}, or connect instantly via WhatsApp.`,
    link: '/contact',
    linkText: 'Contact our team',
  },
  {
    keywords: ['pakistan', 'quote in pakistan', 'pkr', 'pakistan fees'],
    answer: `For learners in Pakistan, we provide customized fee quotations based on the learner's existing school curriculum, subject support requirements, and learning pathway.`,
    link: '/fees',
    linkText: 'Request a customized quote',
  },
  {
    keywords: ['only learn', 'just want', 'single skill', 'specific skill', 'one subject', 'only python', 'only ai', 'only coding'],
    answer: `Yes! Through Royal Nova, you don't need to enrol in a full curriculum. You can choose specific skill modules like AI Literacy, Python, Web Development, or Communication.`,
    link: '/royal-nova',
    linkText: 'Explore Royal Nova skills',
  },
];

export const agentFallback =
  "I don't have that information yet. Please send us a query through our Contact page and our academic team will gladly assist you.";

export const agentGreeting = "Hi! I'm Royal Agent. How can I help you today?";

export default agentKnowledge;
