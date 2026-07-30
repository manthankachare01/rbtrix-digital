import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiPlus } from 'react-icons/fi';

export default function Accordion({ items, questionKey = 'question', answerKey = 'answer' }) {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="divide-y divide-line dark:divide-dark-line border-t border-b border-line dark:border-dark-line">
      {items.map((item, i) => {
        const isOpen = openId === i;
        return (
          <div key={item.id || i}>
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-sm md:text-base font-medium text-ink dark:text-dark-text">
                {item[questionKey]}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="shrink-0 flex h-7 w-7 items-center justify-center rounded-full border border-line dark:border-dark-line text-ink dark:text-dark-text"
              >
                <FiPlus size={14} />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 text-sm text-ink-soft dark:text-dark-soft leading-relaxed max-w-2xl">
                    {item[answerKey]}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
