import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { mediaConfig } from '../data/mediaConfig';

export const HeroMediaSequence: React.FC = () => {
  const [videoEnded, setVideoEnded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasImages = mediaConfig.heroImages && mediaConfig.heroImages.length > 0;
  
  const handleVideoEnded = () => {
    setVideoEnded(true);
  };

  const handleVideoError = () => {
    setVideoEnded(true);
  };

  useEffect(() => {
    if (videoEnded && hasImages) {
      if (currentImageIndex < mediaConfig.heroImages.length - 1) {
        const timer = setTimeout(() => {
          setCurrentImageIndex((prev) => prev + 1);
        }, 4500);
        return () => clearTimeout(timer);
      }
    }
  }, [videoEnded, currentImageIndex, hasImages]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-navy-900 z-0">
      {/* Video layer */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ${videoEnded ? 'opacity-0' : 'opacity-100'}`}
      >
        <video
          ref={videoRef}
          src={mediaConfig.heroVideo}
          poster={mediaConfig.heroVideoPoster}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnded}
          onError={handleVideoError}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Image Sequence Layer */}
      {hasImages && (
        <AnimatePresence mode="wait">
          {videoEnded && (
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <img
                src={mediaConfig.heroImages[currentImageIndex].src}
                alt={mediaConfig.heroImages[currentImageIndex].alt}
                className="object-cover w-full h-full"
              />
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/60 to-navy-900/40 z-10" />
      <div className="absolute inset-0 bg-black/30 z-10" />
    </div>
  );
};
