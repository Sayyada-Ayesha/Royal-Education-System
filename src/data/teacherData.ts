// ============================================================
// ROYAL EDUCATION SYSTEM — TEACHER & CHARACTER DATA
// ============================================================
// PRD Section 6 & 23: Official teacher characters
// Mr. Rook & Mrs. Rook — anime visual style
// Preserve their names, identities, and roles faithfully.
// ============================================================

export interface Teacher {
  id: string;
  name: string;
  title: string;
  role: string;
  characterType: 'official_character' | 'educator';
  photo: string;
  qualification: string;
  specialization: string;
  subjects: string[];
  philosophy: string;
  experience: string;
  avatarBadgeColor: string;
  introVideo?: string;
}

// EDIT HERE: Official Characters (PRD Section 6/23) & Verified Educators
export const teachers: Teacher[] = [
  {
    id: 'mr-rook',
    name: 'Mr. Rook',
    title: 'Senior Academic & Logic Mentor',
    role: 'Official RES Character & Lead Mentor',
    characterType: 'official_character',
    photo: '/images/characters/mr-rook.png',
    qualification: 'Advanced Mathematics & Logic Specialist',
    specialization: 'Mathematics, Logic & Scientific Inquiry',
    subjects: ['Mathematics', 'Science', 'Computational Logic', 'Problem Solving'],
    philosophy: 'Real understanding happens when a learner asks why, explores the mechanics, and explains it with clarity.',
    experience: 'Guiding learners across foundational and development pathways',
    avatarBadgeColor: 'bg-navy-900 text-teal-300',
  },
  {
    id: 'mrs-rook',
    name: 'Mrs. Rook',
    title: 'Lead Communication & Character Mentor',
    role: 'Official RES Character & Foundations Lead',
    characterType: 'official_character',
    photo: '/images/characters/mrs-rook.png',
    qualification: 'Language Arts & Holistic Development Specialist',
    specialization: 'English, Articulation, Civic Values & Akhlaq',
    subjects: ['English', 'Communication & Public Speaking', 'Values & Ethics', 'Early Foundations'],
    philosophy: 'Confidence is not spoken loudly; it is built through patient understanding, self-expression, and empathetic character.',
    experience: 'Nurturing curiosity, expression and moral habits in young minds',
    avatarBadgeColor: 'bg-teal-700 text-white',
  },
  {
    id: 'faculty-tech',
    name: 'Technology & AI Faculty',
    title: 'Applied Computing Mentors',
    role: 'Technical Instructional Team',
    characterType: 'educator',
    photo: '/images/teachers/tech-faculty.jpg',
    qualification: 'Computer Science & AI Engineering Credentials',
    specialization: 'Python, Web Development, Micro:bit & Responsible AI',
    subjects: ['Coding Fundamentals', 'Python Programming', 'Generative AI', 'Applied Projects'],
    philosophy: 'Technology is not a gadget to consume—it is a creative canvas to build real solutions.',
    experience: 'Mentoring students from Scratch to functional web & AI prototypes',
    avatarBadgeColor: 'bg-navy-800 text-accent-gold',
  },
  {
    id: 'faculty-values',
    name: 'Values & Faith Faculty',
    title: 'Character & Spiritual Studies Mentors',
    role: 'Faith-Sensitive Instructional Team',
    characterType: 'educator',
    photo: '/images/teachers/values-faculty.jpg',
    qualification: 'Tajweed & Islamic Studies Certification',
    specialization: 'Quran Understanding, Prophetic Ethics & Universal Character',
    subjects: ['Quran Reading & Tajweed', 'Quranic Concepts', 'Character Development', 'Digital Ethics'],
    philosophy: 'Knowledge without character is empty. We cultivate discipline, honesty, and mutual respect.',
    experience: 'Delivering age-appropriate, compassionate instruction',
    avatarBadgeColor: 'bg-teal-800 text-cream-100',
  },
];

export default teachers;
