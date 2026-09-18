// ============================================================
// ROYAL EDUCATION SYSTEM — PROGRAMME DATA
// ============================================================
// EDIT HERE: Programme descriptions and features
// ============================================================

export interface ProgrammeInfo {
  id: string;
  name: string;
  grades: string;
  tagline: string;
  description: string;
  focus: string[];
  color: string;
  route: string;
}

export const programmes: ProgrammeInfo[] = [
  {
    id: 'royal-juniors',
    name: 'Royal Juniors',
    grades: 'KG – Grade 4',
    tagline: 'Build strong foundations before the world gets complicated.',
    description:
      'Foundation learning pathway focusing on academic foundations, conceptual understanding, communication, and age-appropriate technology and creativity.',
    focus: [
      'Academic Foundations',
      'Conceptual Understanding',
      'English & Communication',
      'Mathematics',
      'Science',
      'Technology Foundations',
      'Creativity',
      'Problem Solving',
      'Values & Character',
      'Digital Awareness',
    ],
    color: 'teal',
    route: '/royal-juniors',
  },
  {
    id: 'royal-gems',
    name: 'Royal Gems',
    grades: 'Grades 5 – 8',
    tagline: 'Turn knowledge into capability.',
    description:
      'Development and applied-learning pathway. Learners build on their foundation with advanced academics, coding, AI literacy, practical projects and independent thinking.',
    focus: [
      'Mathematics',
      'Science',
      'English',
      'Communication',
      'Computer Science',
      'Coding',
      'AI Literacy',
      'Practical Projects',
      'Critical Thinking',
      'Problem Solving',
      'Life Skills',
      'Digital Citizenship',
      'Character & Values',
    ],
    color: 'navy',
    route: '/royal-gems',
  },
  {
    id: 'royal-nova',
    name: 'Royal Nova',
    grades: 'Grade 9+ & Beyond',
    tagline: 'Choose what you want to learn. Build the skills you need.',
    description:
      'Flexible skill-development pathway for Grade 9+ learners, school graduates, university students, young adults, professionals and lifelong learners. Choose targeted skill programmes without joining the complete academic pathway.',
    focus: [
      'AI',
      'Coding',
      'Python',
      'Web Development',
      'Communication',
      'Digital Skills',
      'Entrepreneurship',
      'Technology',
      'Creative Computing',
      'Mathematics',
      'Science',
    ],
    color: 'accent',
    route: '/royal-nova',
  },
];

// Learning areas data
export const learningAreas = {
  academics: {
    title: 'Academics',
    subjects: ['Mathematics', 'Science', 'English', 'Communication'],
    scienceSubjects: [
      'Biology',
      'Physics',
      'Chemistry',
      'Environmental Science',
      'Earth/Space Science',
    ],
    philosophy: 'Understanding > Memorization',
  },
  technology: {
    title: 'Technology & AI',
    progression: [
      {
        stage: 'Computer Fundamentals',
        description: 'Digital literacy and computing basics',
      },
      {
        stage: 'Coding Foundations',
        tools: ['Scratch', 'Code.org'],
        outcome: 'Build your first interactive game',
      },
      {
        stage: 'Creative Computing',
        tools: ['Tinkercad', 'Micro:bit'],
        outcome: 'Design and test a virtual circuit',
      },
      {
        stage: 'AI Literacy',
        topics: ['Responsible AI', 'Prompting', 'Generative AI'],
        outcome: 'Understand AI, use it responsibly, and build useful projects',
      },
      {
        stage: 'Applied Development',
        tools: ['Python', 'Web Development'],
        outcome: 'Create real-world applications and solutions',
      },
      {
        stage: 'Applied AI & Projects',
        topics: ['AI-assisted creativity', 'Applied projects'],
        outcome: 'Build innovative AI-powered projects',
      },
    ],
  },
  faithValues: {
    title: 'Faith, Values & Character',
    muslim: {
      label: 'For Muslim Learners',
      areas: [
        'Quran Reading',
        'Quran Understanding',
        'Quranic Concepts',
        'Prophetic Stories',
        'Islamic Values',
        'Akhlaq',
        'Honesty',
        'Discipline',
        'Responsibility',
      ],
    },
    universal: {
      label: 'For All Learners',
      areas: [
        'Faith Awareness',
        'Ethics',
        'Morality',
        'Empathy',
        'Respect',
        'Responsibility',
        'Character Development',
        'Digital Citizenship',
      ],
    },
  },
  lifeSkills: {
    title: 'Life & Civic Skills',
    skills: [
      'Communication',
      'Decision Making',
      'Problem Solving',
      'Teamwork',
      'Time Management',
      'Digital Responsibility',
      'Independent Thinking',
      'Rights & Responsibilities',
    ],
  },
};

// Learning method steps
export const learningMethod = {
  title: 'How We Teach',
  subtitle: 'Understanding > Memorization',
  steps: [
    {
      name: 'Understand',
      description: 'Visual explanation with real-world context. See the concept, explore the process.',
      icon: 'Eye',
    },
    {
      name: 'Practice',
      description: 'Activity, simulation, and guided practice. Apply what you\'ve learned with support.',
      icon: 'PenTool',
    },
    {
      name: 'Explain',
      description: 'Answer "why" questions. Explain the concept in your own words to prove understanding.',
      icon: 'MessageCircle',
    },
    {
      name: 'Apply',
      description: 'Use knowledge in new contexts. Solve real problems using what you know.',
      icon: 'Lightbulb',
    },
    {
      name: 'Create',
      description: 'Build something new. Design a project that demonstrates mastery of the concept.',
      icon: 'Sparkles',
    },
  ],
  photosynthesisExample: {
    title: 'Example: Learning Photosynthesis',
    description:
      'Photosynthesis should not simply be memorized as a definition. The learner should:',
    steps: [
      'See the process through visual diagrams and animations',
      'Understand the components — sunlight, water, carbon dioxide, glucose, oxygen',
      'Explore the process through interactive simulation',
      'Answer why-questions — Why do plants need sunlight? What happens without water?',
      'Explain the process in their own words',
      'Apply the concept — How does deforestation affect oxygen levels?',
      'Create a project — Design an experiment or presentation about plant growth',
    ],
  },
};

// Royal Nova skills
export const novaSkills = [
  { name: 'AI & Automation Solutions', icon: 'Brain', description: 'Prompt engineering, agentic workflows, LLM applications, and ethical AI integration.' },
  { name: 'Python & Software Logic', icon: 'Terminal', description: 'Python programming, task automation, data handling, and backend logic.' },
  { name: 'Full-Stack Web Development', icon: 'Globe', description: 'Modern responsive websites, interactive web applications, and live hosting.' },
  { name: 'Graphic & Digital Design', icon: 'Palette', description: 'Visual hierarchy, brand identity, layout composition, and design presentation.' },
  { name: 'Video Editing & Media', icon: 'Monitor', description: 'Video post-production, timeline sequencing, pacing, and multi-platform media.' },
  { name: 'Client & Professional Communication', icon: 'MessageSquare', description: 'Pitching ideas, client proposals, structured technical debates, and leadership poise.' },
  { name: 'Digital Portfolio & Presence', icon: 'Rocket', description: 'Curating, deploying, and presenting verifiable real-world projects to employers or universities.' },
  { name: 'Applied Mathematics & Finance', icon: 'Calculator', description: 'Data modeling, quantitative problem-solving, budgeting, and analytical reasoning.' },
  { name: 'Applied Science & Computing', icon: 'Cpu', description: 'Computing architecture, practical experimentation, and emerging tech.' },
];

export default programmes;
