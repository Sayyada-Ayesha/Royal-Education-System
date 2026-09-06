// ============================================================
// ROYAL EDUCATION SYSTEM — TEACHER DATA
// ============================================================
// ADD TEACHER HERE: Add real teacher profiles below
// Replace placeholders with actual information when available
// ============================================================

export interface Teacher {
  id: string;
  name: string;
  photo: string;
  qualification: string;
  specialization: string;
  subjects: string[];
  philosophy: string;
  experience: string;
  introVideo?: string;
}

// ADD TEACHER HERE: Replace these placeholders with real teacher data
export const teachers: Teacher[] = [
  {
    id: 'teacher-1',
    name: 'Teacher Name',
    photo: '/images/teachers/placeholder-1.jpg',
    qualification: 'Qualification to be updated',
    specialization: 'Mathematics & Science',
    subjects: ['Mathematics', 'Science'],
    philosophy: 'Every learner deserves to understand concepts, not just memorize them.',
    experience: 'Experience details to be updated',
    introVideo: undefined,
  },
  {
    id: 'teacher-2',
    name: 'Teacher Name',
    photo: '/images/teachers/placeholder-2.jpg',
    qualification: 'Qualification to be updated',
    specialization: 'English & Communication',
    subjects: ['English', 'Communication'],
    philosophy: 'Communication is the foundation of confidence and success.',
    experience: 'Experience details to be updated',
    introVideo: undefined,
  },
  {
    id: 'teacher-3',
    name: 'Teacher Name',
    photo: '/images/teachers/placeholder-3.jpg',
    qualification: 'Qualification to be updated',
    specialization: 'Technology & AI',
    subjects: ['Coding', 'AI', 'Technology'],
    philosophy: 'Technology empowers learners to create, innovate and solve real problems.',
    experience: 'Experience details to be updated',
    introVideo: undefined,
  },
  {
    id: 'teacher-4',
    name: 'Teacher Name',
    photo: '/images/teachers/placeholder-4.jpg',
    qualification: 'Qualification to be updated',
    specialization: 'Quran & Islamic Studies',
    subjects: ['Quran', 'Islamic Values'],
    philosophy: 'Building character through understanding, not just recitation.',
    experience: 'Experience details to be updated',
    introVideo: undefined,
  },
];

export default teachers;
