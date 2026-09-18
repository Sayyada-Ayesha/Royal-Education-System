import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { mediaConfig } from '../data/mediaConfig';

type MediaState = 'VIDEO' | 'SLIDESHOW';

export const HeroMediaSequence: React.FC = () => {
  const [mediaState, setMediaState] = useState<MediaState>('VIDEO');
  const [slideIndex, setSlideIndex] = useState(0);
  const [userInteracted, setUserInteracted] = useState(false);
  const [videoKey, setVideoKey] = useState(0); // To force video reload
  const videoRef = useRef<HTMLVideoElement>(null);
  const slideshowTimerRef = useRef<number | null>(null);

  const images = mediaConfig.heroImages || [];
  const slideDuration = mediaConfig.slideshowDuration || 4000;

  // Preload images to avoid flash
  useEffect(() => {
    images.forEach((img) => {
      const image = new Image();
      image.src = img.src;
    });
  }, [images]);

  const attemptVideoPlay = useCallback(() => {
    if (videoRef.current) {
      // Force reload if we are retrying
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn("Video playback failed, falling back to slideshow.", err);
          switchToSlideshow();
        });
      }
    }
  }, []);

  useEffect(() => {
    if (mediaState === 'VIDEO') {
      attemptVideoPlay();
    }
  }, [mediaState, attemptVideoPlay, videoKey]);

  const switchToSlideshow = useCallback(() => {
    setSlideIndex(0);
    setUserInteracted(false);
    setMediaState('SLIDESHOW');
  }, []);

  const switchToVideo = useCallback(() => {
    setVideoKey((prev) => prev + 1); // remount/reset video
    setMediaState('VIDEO');
  }, []);

  // Slideshow automatic progression
  useEffect(() => {
    if (mediaState === 'SLIDESHOW') {
      // Clear existing timer if any
      if (slideshowTimerRef.current) clearInterval(slideshowTimerRef.current);

      slideshowTimerRef.current = window.setInterval(() => {
        setSlideIndex((prev) => {
          if (prev + 1 >= images.length) {
            // End of slideshow -> back to video
            switchToVideo();
            return 0;
          }
          return prev + 1;
        });
      }, slideDuration);

      return () => {
        if (slideshowTimerRef.current) clearInterval(slideshowTimerRef.current);
      };
    }
  }, [mediaState, slideDuration, images.length, switchToVideo, userInteracted, slideIndex]);

  // Video event handlers
  const handleVideoEnded = () => {
    switchToSlideshow();
  };

  const handleVideoError = () => {
    switchToSlideshow();
  };

  // Manual Controls
  const nextSlide = () => {
    setUserInteracted(true); // Temporarily pause or reset interval by changing state
    if (slideIndex + 1 >= images.length) {
      switchToVideo();
    } else {
      setSlideIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    setUserInteracted(true);
    if (slideIndex === 0) {
      switchToVideo();
    } else {
      setSlideIndex((prev) => prev - 1);
    }
  };

  // Check prefers-reduced-motion
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;

  // Touch swipe support for mobile
  const touchStartXRef = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const diff = touchStartXRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartXRef.current = null;
  };

  return (
    <div 
      className="absolute inset-0 w-full h-full overflow-hidden bg-ink-950 z-0"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      
      {/* 1. Video Layer */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ${
          mediaState === 'VIDEO' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
        }`}
      >
        <video
          key={videoKey} // Ensures fresh start when switching back
          ref={videoRef}
          src={mediaConfig.heroVideo}
          poster={mediaConfig.heroVideoPoster}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnded}
          onError={handleVideoError}
          onAbort={handleVideoError}
          onStalled={handleVideoError}
          className="object-cover w-full h-full brightness-105 contrast-105"
        />
      </div>

      {/* 2. Slideshow Layer */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ${
          mediaState === 'SLIDESHOW' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
        }`}
      >
        <AnimatePresence mode="wait">
          {mediaState === 'SLIDESHOW' && images.length > 0 && (
            <motion.div
              key={slideIndex}
              initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 1.03 }}
              animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="absolute inset-0 w-full h-full"
            >
              <img 
                src={images[slideIndex].src} 
                alt={images[slideIndex].alt} 
                className="object-cover w-full h-full brightness-105 contrast-105"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Slideshow Controls */}
        {mediaState === 'SLIDESHOW' && images.length > 1 && (
          <div className="absolute bottom-8 right-8 z-30 flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-ink-950/60 hover:bg-champagne-500 text-white border border-champagne-400/30 flex items-center justify-center transition-colors backdrop-blur-md"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Slide indicator dots */}
            <div className="flex items-center gap-2 px-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setUserInteracted(true);
                    setSlideIndex(i);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    slideIndex === i ? 'w-8 bg-champagne-400' : 'w-2 bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-ink-950/60 hover:bg-champagne-500 text-white border border-champagne-400/30 flex items-center justify-center transition-colors backdrop-blur-md"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      {/* 3. Intelligent Asymmetric Gradient Overlay */}
      {/* Left side: readable ink gradient for text; Center-to-Right: clear and bright so video and imagery are vividly visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950/80 via-ink-950/25 to-transparent z-20 pointer-events-none md:via-ink-950/15" />
      {/* Subtle vertical vignette strictly protecting navbar at top and bottom edge */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/40 via-transparent to-ink-950/30 z-20 pointer-events-none" />
    </div>
  );
};

export default HeroMediaSequence;
