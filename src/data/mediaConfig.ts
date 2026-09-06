// ============================================================
// ROYAL EDUCATION SYSTEM — MEDIA CONFIGURATION
// ============================================================
// CHANGE HERO VIDEO HERE: Replace with your actual video path
// CHANGE HERO IMAGES HERE: Replace with your actual image paths
// ============================================================

export const mediaConfig = {
  // CHANGE HERO VIDEO HERE
  heroVideo: '/videos/hero-video.mp4',
  heroVideoPoster: '/images/hero/hero-poster.jpg',

  // CHANGE HERO IMAGES HERE: Shown after video ends
  heroImages: [
    {
      src: '/images/hero/hero-student-learning.jpg',
      alt: 'Student engaged in interactive online learning',
    },
    {
      src: '/images/hero/hero-science-technology.jpg',
      alt: 'Young learner exploring science and technology',
    },
    {
      src: '/images/hero/hero-future-skills.jpg',
      alt: 'Students building future-ready skills through projects',
    },
  ],

  // EDIT HERE: Programme images
  programmeImages: {
    juniors: '/images/programmes/royal-juniors.jpg',
    gems: '/images/programmes/royal-gems.jpg',
    nova: '/images/programmes/royal-nova.jpg',
  },

  // EDIT HERE: Section background images
  sectionImages: {
    about: '/images/sections/about.jpg',
    academics: '/images/sections/academics.jpg',
    technology: '/images/sections/technology.jpg',
    faithValues: '/images/sections/faith-values.jpg',
    projects: '/images/sections/projects.jpg',
  },

  // CHANGE YOUTUBE LINK HERE
  youtubeEmbed: '#',
};

export default mediaConfig;
