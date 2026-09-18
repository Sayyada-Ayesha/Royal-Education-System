// ============================================================
// ROYAL EDUCATION SYSTEM — STANDALONE LEARNING OFFERINGS
// ============================================================
// Masterclasses, Workshops, Trainings, Digital Portfolio & Opportunities
// ============================================================

// Global Language Policy
export const offeringsLanguagePolicy = {
  headline: "English-led globally, with Urdu language support available for Pakistani learners.",
  international: "English is the primary instructional language across all international cohorts.",
  pakistan: "English is primary, with optional Urdu language support / Urdu voice delivery available where needed.",
};

// ============================================================
// 1. MASTERCLASSES CONFIGURATION & CATALOGUE
// ============================================================
// Focused, practical learning experiences around specific modern skills
// ============================================================

// EDIT HERE: Masterclass Pricing
export const masterclassConfig = {
  defaultPricePkr: 5000,
  currency: "PKR",
  priceDisplay: "PKR 5,000",
  type: "Masterclass",
  format: "Focused Practical Masterclass",
  note: "Base fee per masterclass. Individual masterclasses may specify bespoke scope.",
};

export interface MasterclassItem {
  id: string;
  title: string;
  shortOutcome: string;
  skills: string[];
  duration: string;
  feePkr?: number;
  category: "Technology" | "Business" | "Communication" | "Creative" | "Digital Skills";
  featured?: boolean;
}

export const masterclassesData: MasterclassItem[] = [
  {
    id: "shopify-masterclass",
    title: "E-Commerce / Shopify Masterclass",
    shortOutcome: "Build your fundamental understanding of digital storefronts, e-commerce architectures, and live Shopify store setup.",
    skills: ["Shopify Admin", "Store Architecture", "Payment Gateways", "Product Cataloging"],
    duration: "Intensive 1-Day / Multi-Session",
    category: "Business",
    featured: true,
  },
  {
    id: "ai-masterclass",
    title: "AI Masterclass",
    shortOutcome: "Explore practical AI tools, prompt engineering, generative workflows, and ethical, responsible AI application.",
    skills: ["Generative AI", "Prompt Design", "AI Workflow Automation", "AI Ethics"],
    duration: "Focused Multi-Session",
    category: "Technology",
    featured: true,
  },
  {
    id: "english-comm-masterclass",
    title: "English Communication Masterclass",
    shortOutcome: "Build practical spoken communication, professional articulation, active listening, and international presentation skills.",
    skills: ["Verbal Articulation", "Presentation Skills", "Global Fluency", "Professional Tone"],
    duration: "Interactive Multi-Session",
    category: "Communication",
    featured: true,
  },
  {
    id: "advertising-masterclass",
    title: "Advertising Masterclass",
    shortOutcome: "Understand campaign strategy, creative copywriting, audience targeting, and modern digital advertising principles.",
    skills: ["Campaign Planning", "Ad Copywriting", "Audience Segmentation", "Creative Strategy"],
    duration: "Focused Multi-Session",
    category: "Business",
  },
  {
    id: "ebooks-masterclass",
    title: "E-Books Masterclass",
    shortOutcome: "Master digital publishing workflows, manuscript formatting, cover design direction, and digital distribution channels.",
    skills: ["Digital Publishing", "EPUB/PDF Formatting", "Editorial Structure", "Book Packaging"],
    duration: "Practical Multi-Session",
    category: "Creative",
  },
  {
    id: "freelancing-masterclass",
    title: "Freelancing Masterclass",
    shortOutcome: "Learn global platform navigation, ethical client onboarding, gig positioning, and sustainable freelance operations.",
    skills: ["Platform Mechanics", "Proposal Writing", "Service Positioning", "Professional Etiquette"],
    duration: "Focused Multi-Session",
    category: "Digital Skills",
  },
  {
    id: "product-hunting-masterclass",
    title: "Product Hunting Masterclass",
    shortOutcome: "Discover market research frameworks, demand validation, margin assessment, and competitive product analysis.",
    skills: ["Market Validation", "Trend Analysis", "Margin Calculation", "Product Sourcing"],
    duration: "Practical Multi-Session",
    category: "Business",
  },
  {
    id: "client-hunting-masterclass",
    title: "Client Hunting Masterclass",
    shortOutcome: "Develop outbound outreach frameworks, value-led communication, discovery conversations, and relationship building.",
    skills: ["Outbound Strategy", "Lead Qualification", "Discovery Calls", "Value Messaging"],
    duration: "Focused Multi-Session",
    category: "Communication",
  },
];

// ============================================================
// 2. WORKSHOPS CONFIGURATION & CATALOGUE
// ============================================================
// Focused interactive sessions on creative, life management & wellbeing topics
// Professional, educational language — strictly no medical/therapeutic claims
// ============================================================

// EDIT HERE: Workshop Pricing
export const workshopConfig = {
  priceRangePkr: { min: 5000, max: 10000 },
  priceDisplay: "PKR 5,000–10,000",
  currency: "PKR",
  negotiableNote: "Negotiable depending on topic, format, duration, group size, and scope.",
  disclaimer: "Educational and personal-development frameworks for healthy living, self-awareness, and focus. Does not constitute clinical, medical, or psychiatric advice.",
};

export interface WorkshopItem {
  id: string;
  title: string;
  theme: string;
  outcome: string;
  topics: string[];
  format: string;
  category: "Creative" | "Digital Skills" | "Personal Development";
  featured?: boolean;
}

export const workshopsData: WorkshopItem[] = [
  {
    id: "creative-thinking-workshop",
    title: "Creative Thinking Workshop",
    theme: "Idea Generation & Divergent Problem Solving",
    outcome: "Learn structured frameworks to break cognitive routines, spark original concepts, and solve problems from unconventional angles.",
    topics: ["Divergent Thinking", "Lateral Problem Solving", "Mind Mapping", "Prototype Ideation"],
    format: "Interactive Hands-on Workshop",
    category: "Creative",
    featured: true,
  },
  {
    id: "digital-presence-workshop",
    title: "Digital Presence Workshop",
    theme: "Curating a Professional Digital Footprint",
    outcome: "Understand how to thoughtfully present your intellectual work, projects, and professional trajectory across digital mediums.",
    topics: ["Digital Footprint Audit", "Portfolio Presentation", "Personal Branding Ethics", "Online Professionalism"],
    format: "Interactive Workshop",
    category: "Digital Skills",
    featured: true,
  },
  {
    id: "living-better-life-workshop",
    title: "Living a Better Life Workshop",
    theme: "Purpose, Habit Design & Intentional Daily Routine",
    outcome: "Explore actionable personal frameworks for daily intentionality, healthy routine structure, habit stacking, and life balance.",
    topics: ["Intentional Habits", "Daily Rhythm Design", "Priority Realignment", "Work-Study Balance"],
    format: "Guided Workshop & Journaling",
    category: "Personal Development",
  },
  {
    id: "life-management-workshop",
    title: "Life Management / Life Maintenance Workshop",
    theme: "Personal Logistics, Time Management & Life Organization",
    outcome: "Systematize your everyday responsibilities, personal schedule, task prioritization, and operational life maintenance.",
    topics: ["Time Blocking Systems", "Personal Administration", "Resource Budgeting", "Mental Space Preservation"],
    format: "Interactive Planning Workshop",
    category: "Personal Development",
  },
  {
    id: "stress-relief-workshop",
    title: "Stress Relief Workshop",
    theme: "Mindful Focus, Cognitive Rest & Pressure Management",
    outcome: "Learn practical, research-backed cognitive breathing, focus preservation, and decompression exercises for study pressure.",
    topics: ["Cognitive Reset Techniques", "Focus Calibration", "Managing Study Pressure", "Restorative Routines"],
    format: "Educational Wellbeing Workshop",
    category: "Personal Development",
  },
  {
    id: "restart-your-life-workshop",
    title: "Restart Your Life Workshop",
    theme: "Regaining Momentum, Clarifying Direction & Fresh Starts",
    outcome: "A structured, constructive framework to clear mental clutter, evaluate current standings honestly, and build an actionable plan forward.",
    topics: ["Honest Self-Assessment", "Discarding Momentum Traps", "Goal Reset Architecture", "First 30 Days Action Plan"],
    format: "Guided Strategy Workshop",
    category: "Personal Development",
  },
];

// ============================================================
// 3. TRAININGS CONFIGURATION & CATALOGUE
// ============================================================
// Structured skill-building programmes with defined durations
// ============================================================

// EDIT HERE: Training Pricing
export const trainingConfig = {
  priceRangePkr: { min: 10000, max: 50000 },
  priceDisplay: "PKR 10,000–50,000",
  currency: "PKR",
  note: "Exact training fee depends on training type, duration, complexity, scope, and mentorship support level.",
};

export interface TrainingItem {
  id: string;
  title: string;
  durationLabel: string;
  durationWeeks: string;
  description: string;
  deliverables: string[];
  category: "Technology" | "Business" | "Digital Skills";
  featured?: boolean;
}

export const trainingsData: TrainingItem[] = [
  {
    id: "shopify-7-days",
    title: "Shopify in 7 Days Training",
    durationLabel: "7-Day Focused Training",
    durationWeeks: "7 Days (Intensive)",
    description: "An intensive day-by-day practical sprint taking learners from store concept, navigation architecture, and theme configuration to a fully functioning mock/live e-commerce storefront.",
    deliverables: ["Live Storefront Setup", "Payment & Shipping Setup", "Collection & Product Architecture", "Pre-Launch Checklist"],
    category: "Business",
    featured: true,
  },
  {
    id: "portfolio-building-1-month",
    title: "Portfolio Building in 1 Month",
    durationLabel: "1-Month Structured Training",
    durationWeeks: "4 Weeks (Hands-on)",
    description: "A comprehensive 4-week cohort where learners document, polish, package, and publish their verified academic and technical projects into a clean, modern digital portfolio.",
    deliverables: ["Personal Showcase Website", "Curated Case Studies", "Interactive Media Demos", "Sharable Portfolio URL"],
    category: "Digital Skills",
    featured: true,
  },
  {
    id: "project-building-3-months",
    title: "Project Building in 3 Months",
    durationLabel: "3-Month Intensive Programme",
    durationWeeks: "12 Weeks (In-Depth)",
    description: "A flagship 12-week applied development journey. Learners identify a real-world problem, engineer the solution end-to-end, test it with users, and document the architectural journey.",
    deliverables: ["End-to-End Working System", "Architecture Documentation", "User Feedback Analysis", "Capstone Presentation"],
    category: "Technology",
    featured: true,
  },
];

// ============================================================
// 4. COMPARISON MATRIX: MASTERCLASS vs WORKSHOP vs TRAINING
// ============================================================
export const offeringsComparisonMatrix = [
  {
    dimension: "Core Purpose",
    masterclass: "Focused mastery around a specific modern skill or tool",
    workshop: "Interactive reflection, creative thinking & life frameworks",
    training: "Structured, immersive skill development with milestones",
  },
  {
    dimension: "Session Structure",
    masterclass: "Compact, intensive presentation + practical demonstration",
    workshop: "Interactive exercises, group prompts & guided journaling",
    training: "Step-by-step syllabus, guided exercises & milestone checkpoints",
  },
  {
    dimension: "Duration Model",
    masterclass: "Single-day or short multi-session format",
    workshop: "Single focused session or 2-part experience",
    training: "Defined duration: 7 Days, 1 Month, or 3 Months",
  },
  {
    dimension: "Standard Fee Tier",
    masterclass: "PKR 5,000 (Base fee)",
    workshop: "PKR 5,000–10,000 (Negotiable by scope)",
    training: "PKR 10,000–50,000 (Scope & duration based)",
  },
  {
    dimension: "Primary Outcome",
    masterclass: "Immediate, actionable understanding of a targeted domain",
    workshop: "Fresh perspectives, mental clarity & personal balance",
    training: "Completed deployable project, portfolio, or live store",
  },
];

// ============================================================
// 5. INTERNSHIP & OPPORTUNITY PATHWAYS (SYNX AI HORIZON)
// ============================================================
export const opportunityConfig = {
  partner: "SYNX AI HORIZON",
  policyHeadline: "Pathways to Real-World Experience",
  strictPolicyNotice: "Eligible learners may apply for available opportunities through SYNX AI HORIZON, subject to availability and partner requirements.",
  formats: ["Paid Internships", "Unpaid Internships", "Volunteer Positions", "Practical Project Exposure"],
  eligibility: "Open to appropriate and high-performing learners demonstrating commitment, strong digital portfolio evidence, and foundational technical proficiency.",
  disclaimer: "RES does NOT guarantee employment, hiring, or unconditional placement. All opportunities are competitive, subject to partner vetting and project readiness.",
  areas: [
    "AI Solution Testing & Evaluation",
    "Web Development & Frontend Integration",
    "Content Architecture & Digital Communications",
    "User Research & Data Quality Assurance",
  ],
};

// ============================================================
// 6. DIGITAL PORTFOLIO PHILOSOPHY
// ============================================================
export const digitalPortfolioConfig = {
  title: "Build Tangible Evidence of Capability",
  subtitle: "Every masterclass, workshop, and training is designed to feed into your verifiable digital portfolio.",
  evidenceTypes: [
    { title: "Live Websites & Apps", desc: "Interactive web applications, responsive landing pages, and functional tools." },
    { title: "Graphic Design & Branding", desc: "Visual identities, typography explorations, layouts, and editorial assets." },
    { title: "Video & Media Productions", desc: "Storyboards, edited video sequences, and multimedia walkthroughs." },
    { title: "AI Projects & Agent Workflows", desc: "Custom AI prompts, automated agents, and intelligent solution designs." },
    { title: "Digital Marketing & Campaigns", desc: "Outbound campaign plans, audience audits, and strategic content roadmaps." },
    { title: "Presentations & Publications", desc: "Executive slide decks, research summaries, e-books, and essays." },
    { title: "Verified Capstone Projects", desc: "End-to-end engineered solutions solving identifiable real-world friction." },
    { title: "Completion Credentials", desc: "Official verified records of completed learning programmes and sprints." },
  ],
  disclaimer: "A digital portfolio is an authentic record of learning and capability. RES does not guarantee external job offers or commercial outcomes.",
};
