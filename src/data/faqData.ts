// ============================================================
// ROYAL EDUCATION SYSTEM — FAQ DATA
// ============================================================
// EDIT HERE: Add or modify FAQ questions and answers
// ============================================================

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is Royal Education System?',
    answer:
      'Royal Education System is a structured online learning ecosystem that combines academic understanding, technology & AI, communication, life skills and character development. We support learners alongside their formal education and provide standalone skill-development programmes.',
    category: 'General',
  },
  {
    id: 'faq-2',
    question: 'Is Royal Education System a school replacement?',
    answer:
      'No. Royal Education System is a supplementary online learning programme. It supports your child\'s formal education and does not replace school enrolment.',
    category: 'General',
  },
  {
    id: 'faq-3',
    question: 'What are Royal Juniors, Royal Gems and Royal Nova?',
    answer:
      'Royal Juniors is our foundation pathway for KG to Grade 4. Royal Gems is our development pathway for Grades 5 to 8. Royal Nova is our flexible skill-development pathway for Grade 9+, graduates, university students and professionals.',
    category: 'Programmes',
  },
  {
    id: 'faq-4',
    question: 'What subjects does Royal Education System teach?',
    answer:
      'We teach Mathematics, Science, English, Communication, Technology & AI, Coding, Life Skills and Character Development. The specific curriculum depends on the learner\'s grade and programme.',
    category: 'Academics',
  },
  {
    id: 'faq-5',
    question: 'How much does the programme cost?',
    answer:
      'Monthly programme fees range from AED 199 (KG) to AED 329 (Grade 8). There is a one-time admission fee of AED 99. Grade 9+ and Royal Nova programmes have custom pricing based on individual learning goals. Visit our Pricing page for full details.',
    category: 'Pricing',
  },
  {
    id: 'faq-6',
    question: 'Is there an admission fee?',
    answer:
      'Yes, there is a one-time admission fee of AED 99 (approximately USD 27) for all standard grade-based programmes. There are no hidden charges.',
    category: 'Pricing',
  },
  {
    id: 'faq-7',
    question: 'Do you offer discounts for siblings or long-term commitments?',
    answer:
      'Yes. We offer 5% discount on 3-month plans, 10% on 6-month plans, and 15–20% sibling discount on additional enrolments.',
    category: 'Pricing',
  },
  {
    id: 'faq-8',
    question: 'What is the Free Assessment?',
    answer:
      'Our free learning assessment helps identify your child\'s current knowledge, strengths and gaps. Based on the results, we recommend the most suitable programme and pathway.',
    category: 'Assessment',
  },
  {
    id: 'faq-9',
    question: 'Can I try a demo class before enrolling?',
    answer:
      'Yes. We offer a free demo class so you and your child can experience our teaching approach before making any commitment. No payment required.',
    category: 'Demo',
  },
  {
    id: 'faq-10',
    question: 'How does enrolment work?',
    answer:
      'The typical process is: submit an enrolment form → assessment → demo class → programme recommendation → admission → monthly programme → onboarding. For Grade 9+, the process includes a goal discussion and custom curriculum design.',
    category: 'Enrolment',
  },
  {
    id: 'faq-11',
    question: 'Can my child learn only one skill like Python or AI?',
    answer:
      'Yes. Through Royal Nova, learners can choose specific skills without enrolling in the complete academic programme. You can request a custom learning plan for any skill.',
    category: 'Royal Nova',
  },
  {
    id: 'faq-12',
    question: 'Is Quran learning mandatory?',
    answer:
      'No. Quran & Islamic Learning is an optional add-on programme starting from AED 79/month. It is available for Muslim learners who wish to include it alongside their main programme.',
    category: 'Faith & Values',
  },
  {
    id: 'faq-13',
    question: 'What technology do you teach?',
    answer:
      'Our technology pathway progresses from digital foundations through coding (Scratch, Code.org), creative computing (Tinkercad, Micro:bit), to Python, web development, AI literacy and applied AI projects.',
    category: 'Technology',
  },
  {
    id: 'faq-14',
    question: 'How are classes conducted?',
    answer:
      'All classes are conducted online through live interactive sessions. Our teaching method follows the Understand → Practice → Explain → Apply → Create methodology.',
    category: 'General',
  },
  {
    id: 'faq-15',
    question: 'Do you provide certificates?',
    answer:
      'We provide Certificates of Completion for programmes and courses. These are not government academic qualifications.',
    category: 'General',
  },
  {
    id: 'faq-16',
    question: 'Which countries do you serve?',
    answer:
      'We primarily serve families in the UAE (Dubai, Sharjah, Ajman) and the wider Gulf region including Saudi Arabia, Qatar, Kuwait, Oman and Bahrain. Our programmes are available to learners worldwide.',
    category: 'General',
  },
  {
    id: 'faq-17',
    question: 'Do I need to buy books or resources?',
    answer:
      'No. Books, workbooks and self-paced courses are optional supplementary resources. You can choose live learning without purchasing additional materials.',
    category: 'Pricing',
  },
  {
    id: 'faq-18',
    question: 'How is Royal Education System different from tutoring?',
    answer:
      'We are not ordinary per-class tutoring. Royal Education System is a structured learning ecosystem that integrates academics, technology, communication, life skills and character development into one cohesive learning journey.',
    category: 'General',
  },
];

export const faqCategories = [
  'All',
  'General',
  'Programmes',
  'Academics',
  'Technology',
  'Pricing',
  'Assessment',
  'Demo',
  'Enrolment',
  'Royal Nova',
  'Faith & Values',
];

export default faqData;
