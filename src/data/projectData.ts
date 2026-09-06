// ============================================================
// ROYAL EDUCATION SYSTEM — PROJECT SHOWCASE DATA
// ============================================================
// EDIT HERE: Add real project examples when available
// ============================================================

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  problem: string;
  learning: string;
  creation: string;
  outcome: string;
  image: string;
  programme: string;
  tools?: string[];
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Interactive Space Explorer Game',
    category: 'Scratch',
    description: 'A Scratch game where players navigate through the solar system, learning about planets.',
    problem: 'How can we make learning about space fun and interactive?',
    learning: 'Solar system facts, game logic, animation, storytelling',
    creation: 'Built an interactive game with multiple levels using Scratch',
    outcome: 'Students understood planetary facts while developing coding logic',
    image: '/images/projects/scratch-game.jpg',
    programme: 'Royal Gems',
    tools: ['Scratch'],
  },
  {
    id: 'project-2',
    title: 'Smart Traffic Light Circuit',
    category: 'Tinkercad',
    description: 'A virtual circuit that simulates an intelligent traffic light system.',
    problem: 'How do traffic lights work and how can we make them smarter?',
    learning: 'Circuit design, LED components, timing logic, sensors',
    creation: 'Designed and tested a virtual traffic light circuit in Tinkercad',
    outcome: 'Learners connected electronics to real-world problem solving',
    image: '/images/projects/tinkercad-circuit.jpg',
    programme: 'Royal Gems',
    tools: ['Tinkercad'],
  },
  {
    id: 'project-3',
    title: 'Photosynthesis Visualization',
    category: 'Science',
    description: 'An interactive presentation explaining the photosynthesis process.',
    problem: 'How can we explain photosynthesis beyond a textbook definition?',
    learning: 'Biology, scientific process, visual communication, data presentation',
    creation: 'Created an animated presentation showing the complete process',
    outcome: 'Learners could explain photosynthesis in their own words with real-world connections',
    image: '/images/projects/science-viz.jpg',
    programme: 'Royal Juniors',
  },
  {
    id: 'project-4',
    title: 'AI Chatbot Assistant',
    category: 'AI',
    description: 'A simple AI-powered chatbot that answers questions about a chosen topic.',
    problem: 'How can AI be used to help people find information quickly?',
    learning: 'AI concepts, prompting, responsible AI, user experience',
    creation: 'Built a topic-specific chatbot using AI tools',
    outcome: 'Students understood AI capabilities and limitations, and built something useful',
    image: '/images/projects/ai-project.jpg',
    programme: 'Royal Nova',
    tools: ['AI Tools', 'Python'],
  },
  {
    id: 'project-5',
    title: 'Personal Portfolio Website',
    category: 'Web Development',
    description: 'A responsive personal website showcasing skills and projects.',
    problem: 'How can you present your skills and work professionally online?',
    learning: 'HTML, CSS, responsive design, content structure, digital identity',
    creation: 'Designed and coded a multi-page personal portfolio website',
    outcome: 'Learners had a real, published website showcasing their abilities',
    image: '/images/projects/web-project.jpg',
    programme: 'Royal Nova',
    tools: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'project-6',
    title: 'Community Problem-Solving Presentation',
    category: 'Communication',
    description: 'A structured presentation identifying and proposing solutions to a local community challenge.',
    problem: 'How can young learners identify and address real community issues?',
    learning: 'Research, critical thinking, public speaking, persuasive communication',
    creation: 'Prepared and delivered a structured presentation with evidence and solutions',
    outcome: 'Learners developed confidence, research skills and empathy for community needs',
    image: '/images/projects/presentation.jpg',
    programme: 'Royal Gems',
  },
];

export const projectCategories = [
  'All',
  'Scratch',
  'Tinkercad',
  'Science',
  'AI',
  'Web Development',
  'Communication',
  'Coding',
];

export default projects;
