// ============================================================
// ROYAL EDUCATION SYSTEM — MEDIA CONFIGURATION
// ============================================================
// All paths point to actual verified assets in public/
// ============================================================

export const mediaConfig = {
  // Hero Media
  heroVideo: '/videos/Hero Video.mp4',
  heroVideoPoster: '/images/Slideshow/1.jpeg',

  // Hero Slideshow — ALL 9 numbered images in ascending numerical order
  slideshowDuration: 4000,
  heroImages: [
    { src: '/images/Slideshow/1.jpeg', alt: '1 — Student engaged in interactive conceptual learning' },
    { src: '/images/Slideshow/2.jpeg', alt: '2 — Young learner exploring applied projects' },
    { src: '/images/Slideshow/3.jpeg', alt: '3 — Building future-ready technological capability' },
    { src: '/images/Slideshow/4.jpeg', alt: '4 — Collaborative academic and skills development' },
    { src: '/images/Slideshow/5.jpeg', alt: '5 — Practical skills and creative exploration' },
    { src: '/images/Slideshow/6.jpeg', alt: '6 — Structured problem solving and mathematical inquiry' },
    { src: '/images/Slideshow/7.jpeg', alt: '7 — Advanced digital and professional learning' },
    { src: '/images/Slideshow/8.jpeg', alt: '8 — Technology and artificial intelligence literacy' },
    { src: '/images/Slideshow/9.jpeg', alt: '9 — Holistic character, values and personal growth' },
  ],

  // Verified Programme Images (matching each specific educational stage)
  programmeImages: {
    juniors: '/images/Slideshow/1.jpeg', // Young learner, discovery, early habits
    gems: '/images/Slideshow/4.jpeg',    // Skills, practical math, coding, design
    nova: '/images/Slideshow/7.jpeg',    // Specialization, advanced tech, portfolio
  },

  // Verified Section Images (using verified slideshow assets)
  sectionImages: {
    about: '/images/Slideshow/5.jpeg',
    academics: '/images/Slideshow/6.jpeg',
    technology: '/images/Slideshow/8.jpeg',
    faithValues: '/images/Slideshow/9.jpeg',
    projects: '/images/Slideshow/2.jpeg',
  },

  // YouTube / Social Embed
  youtubeEmbed: '#',
};

export default mediaConfig;
