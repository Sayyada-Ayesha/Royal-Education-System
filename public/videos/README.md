# Royal Education System — Hero Video Directory

Place your official promotional hero video here:
`hero-video.mp4`

Supported formats:
- MP4 (H.264 video codec, AAC audio, or muted)
- WebM

The `HeroMediaSequence` component in `src/components/HeroMediaSequence.tsx` is configured to automatically play `videos/hero-video.mp4` muted on page load. When the video ends (or if it is missing), it smoothly transitions without reloading or navigating to the 3 hero showcase images in `src/data/mediaConfig.ts`.
