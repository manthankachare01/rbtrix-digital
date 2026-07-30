import { motion } from 'framer-motion';
import { FiSmartphone, FiStar, FiSmile, FiTrendingUp } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading.jsx';

const steps = [
  { icon: FiSmartphone, title: 'Tap NFC', desc: 'Customer taps their phone on the stand, card, or sticker.' },
  { icon: FiStar, title: 'Open Google Review', desc: 'Their phone opens your Google review page directly — no app, no search.' },
  { icon: FiSmile, title: 'Customer Leaves Review', desc: 'A few taps and the review is posted, right at the counter.' },
  { icon: FiTrendingUp, title: 'Business Grows', desc: 'More reviews build trust, visibility, and walk-in confidence.' },
];

export default function HowItWorks() {
  return (
    <section className="section-pad bg-surface-soft dark:bg-dark-surface border-y border-line dark:border-dark-line">
      <div className="container-app">
        <SectionHeading eyebrow="How It Works" title="From a tap to a five-star review" align="center" />

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
          {/* Connecting line - desktop only */}
          <div className="hidden md:block absolute top-[22px] left-[12.5%] right-[12.5%] h-px bg-line dark:bg-dark-line" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex md:flex-col items-start md:items-center gap-4 md:gap-0 md:text-center"
            >
              <div className="relative z-10 h-11 w-11 rounded-full bg-ink dark:bg-white text-white dark:text-ink flex items-center justify-center shrink-0 md:mb-5 ring-4 ring-surface-soft dark:ring-dark-surface">
                <step.icon size={18} />
              </div>
              <div>
                <p className="text-xs font-medium text-ink-faint dark:text-dark-soft mb-1">Step {i + 1}</p>
                <h3 className="text-lg font-semibold text-ink dark:text-dark-text">{step.title}</h3>
                <p className="mt-1.5 text-sm text-ink-soft dark:text-dark-soft max-w-[220px] md:mx-auto">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
