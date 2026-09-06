// ============================================================
// ROYAL EDUCATION SYSTEM — ROYAL AGENT KNOWLEDGE BASE
// ============================================================
// UPDATE AGENT INFORMATION HERE: Add or modify agent knowledge
// ============================================================

import { gradePricing, admissionFee, quranProgramme, skillCoursePricing, discounts } from './pricingData';
import { programmes, novaSkills } from './programmeData';
import { faqData } from './faqData';
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
    keywords: ['what is royal education', 'about royal', 'tell me about', 'what do you do'],
    answer: `${siteConfig.fullDescription} We bring together academic understanding, technology & AI, communication, life skills and character development into one structured learning ecosystem.`,
    link: '/about',
    linkText: 'Learn more about us',
  },
  {
    keywords: ['royal juniors', 'kg', 'kindergarten', 'grade 1', 'grade 2', 'grade 3', 'grade 4', 'young', 'small children', 'foundation'],
    answer: `Royal Juniors is our foundation learning pathway for KG to Grade 4 learners. It focuses on academic foundations, conceptual understanding, English & communication, mathematics, science, technology foundations, creativity, problem solving, values and digital awareness.`,
    link: '/royal-juniors',
    linkText: 'Explore Royal Juniors',
  },
  {
    keywords: ['royal gems', 'grade 5', 'grade 6', 'grade 7', 'grade 8', 'middle'],
    answer: `Royal Gems is our development and applied-learning pathway for Grades 5 to 8. Learners build on their foundation with advanced academics, coding, AI literacy, practical projects, critical thinking and independent thinking.`,
    link: '/royal-gems',
    linkText: 'Explore Royal Gems',
  },
  {
    keywords: ['royal nova', 'grade 9', 'grade 10', 'grade 11', 'grade 12', 'graduate', 'university', 'professional', 'adult', 'skill', 'flexible'],
    answer: `Royal Nova is our flexible skill-development pathway for Grade 9+ learners, graduates, university students and anyone who wants to build selected skills. You can choose specific skills like AI, coding, Python, web development, communication and more without joining the complete academic pathway.`,
    link: '/royal-nova',
    linkText: 'Explore Royal Nova',
  },
  {
    keywords: ['price', 'cost', 'fee', 'how much', 'pricing', 'affordable', 'expensive', 'money', 'payment'],
    answer: `Our monthly programme fees: ${gradePricing.map(g => `${g.grade === 'KG' ? 'KG' : 'Grade ' + g.grade}: AED ${g.aed}`).join(', ')}. One-time admission fee: AED ${admissionFee.aed}. No hidden charges. Grade 9+ programmes have custom pricing.`,
    link: '/pricing',
    linkText: 'View full pricing',
  },
  {
    keywords: ['admission', 'registration', 'joining fee'],
    answer: `There is a one-time admission fee of AED ${admissionFee.aed} (approximately USD ${admissionFee.usd}) for all standard grade-based programmes. No hidden registration charges.`,
    link: '/pricing',
    linkText: 'View pricing details',
  },
  {
    keywords: ['discount', 'sibling', 'offer', 'savings'],
    answer: `We offer: ${discounts.map(d => `${d.plan}: ${d.discount}`).join(', ')}.`,
    link: '/pricing',
    linkText: 'View all discounts',
  },
  {
    keywords: ['assessment', 'test', 'evaluate', 'level', 'placement'],
    answer: `We offer a free learning assessment to understand your current knowledge, identify strengths and gaps, and recommend the most suitable programme. It's completely free with no obligation.`,
    link: '/free-assessment',
    linkText: 'Book your free assessment',
  },
  {
    keywords: ['demo', 'trial', 'try', 'sample', 'experience'],
    answer: `You can book a free demo class to experience our teaching approach before enrolling. No payment required. See how our Understand → Practice → Explain → Apply → Create methodology works.`,
    link: '/free-demo',
    linkText: 'Book your free demo',
  },
  {
    keywords: ['enrol', 'enroll', 'join', 'register', 'sign up', 'start'],
    answer: `To enrol: submit the enrolment form → assessment → demo class → programme recommendation → admission → monthly programme → onboarding. For Grade 9+, the process includes a goal discussion and custom curriculum design.`,
    link: '/enrol',
    linkText: 'Start your enrolment',
  },
  {
    keywords: ['quran', 'islamic', 'muslim', 'islam', 'faith', 'religion'],
    answer: `Quran & Islamic Learning is an optional add-on programme starting from AED ${quranProgramme.fromAed}/month. It includes Quran reading, Quran understanding, Quranic concepts, Prophetic stories, Islamic values and Akhlaq. It is not mandatory.`,
    link: '/faith-values',
    linkText: 'Learn about Faith & Values',
  },
  {
    keywords: ['python', 'code', 'coding', 'programming', 'ai', 'artificial intelligence', 'technology', 'tech', 'scratch', 'tinkercad'],
    answer: `Our technology pathway progresses from digital foundations through coding (Scratch, Code.org), creative computing (Tinkercad, Micro:bit), to Python, web development, AI literacy and applied AI projects. Through Royal Nova, you can also learn individual skills.`,
    link: '/technology-ai',
    linkText: 'Explore Technology & AI',
  },
  {
    keywords: ['curriculum', 'what do you teach', 'subjects', 'syllabus'],
    answer: `We teach Mathematics, Science, English, Communication, Technology & AI, Coding, Life Skills and Character Development. The specific curriculum varies by grade and programme.`,
    link: '/curriculum',
    linkText: 'View our curriculum',
  },
  {
    keywords: ['teacher', 'tutor', 'instructor', 'faculty'],
    answer: `Our teachers are passionate educators specializing in their respective subjects. Visit our Teachers page to learn about our team.`,
    link: '/teachers',
    linkText: 'Meet our teachers',
  },
  {
    keywords: ['contact', 'reach', 'email', 'whatsapp', 'phone', 'call', 'message'],
    answer: `You can reach us through our Query page, email us at ${siteConfig.contact.email}, or message us on WhatsApp. We're here to help with any questions.`,
    link: '/query',
    linkText: 'Send us a query',
  },
  {
    keywords: ['certificate', 'certification', 'qualification'],
    answer: `We provide Certificates of Completion for programmes and courses. Please note these are not government academic qualifications.`,
  },
  {
    keywords: ['country', 'location', 'where', 'dubai', 'uae', 'sharjah', 'ajman', 'saudi', 'qatar', 'kuwait', 'oman', 'bahrain', 'gulf'],
    answer: `We primarily serve families in the UAE (Dubai, Sharjah, Ajman) and the wider Gulf region including Saudi Arabia, Qatar, Kuwait, Oman and Bahrain. Our online programmes are accessible worldwide.`,
  },
  {
    keywords: ['book', 'resource', 'workbook', 'material', 'course material'],
    answer: `Books, workbooks and self-paced courses are optional supplementary resources. You can participate in live learning without purchasing additional materials.`,
    link: '/pricing',
    linkText: 'View pricing details',
  },
  {
    keywords: ['only learn', 'just want', 'single skill', 'specific skill', 'one subject', 'only python', 'only ai', 'only coding'],
    answer: `Yes! Through Royal Nova, you can choose specific skills without enrolling in the complete academic programme. Request a custom learning plan for any skill you want to develop.`,
    link: '/royal-nova',
    linkText: 'Explore Royal Nova',
  },
];

// Fallback response when no match is found
export const agentFallback =
  "I don't have that information yet. Please send us a query and our team will help you.";

export const agentGreeting = "Hi! I'm Royal Agent. How can I help you today?";

export default agentKnowledge;
