import { useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import useScrollLock from '../../hooks/useScrollLock.js';
import { resolveImage } from '../../utils/images.js';

export default function Lightbox({ images, index, onClose, onNavigate }) {
  useScrollLock(index !== null);

  const handleKey = useCallback(
    (e) => {
      if (index === null) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((index + 1) % images.length);
      if (e.key === 'ArrowLeft') onNavigate((index - 1 + images.length) % images.length);
    },
    [index, images.length, onClose, onNavigate]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  return (
    <AnimatePresence>
      {index !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-10"
          onClick={onClose}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <FiX size={20} />
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous image"
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate((index - 1 + images.length) % images.length);
                }}
                className="absolute left-3 md:left-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <FiChevronLeft size={20} />
              </button>
              <button
                type="button"
                aria-label="Next image"
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate((index + 1) % images.length);
                }}
                className="absolute right-3 md:right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <FiChevronRight size={20} />
              </button>
            </>
          )}

          <motion.img
            key={index}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            src={resolveImage(images[index])}
            alt={`Gallery image ${index + 1}`}
            className="max-h-full max-w-full rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
