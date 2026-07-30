import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGrid } from 'react-icons/fi';

const stats = [
  { value: '100+', label: 'Product Designs' },
  { value: '19', label: 'Business Categories' },
  { value: 'Premium', label: 'Materials' },
  { value: '100%', label: 'Custom Branding' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-accent-softer via-surface to-surface dark:from-dark-surface2 dark:via-dark-bg dark:to-dark-bg border-b border-line dark:border-dark-line">
      {/* Soft brand-blue glow accents — subtle, not a full gradient background */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-72 md:h-96 md:w-96 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute top-24 right-[8%] h-40 w-40 rounded-full bg-accent/10 blur-3xl hidden md:block" />
      <div className="pointer-events-none absolute top-40 left-[6%] h-32 w-32 rounded-full bg-accent/10 blur-3xl hidden md:block" />

      <div className="container-app pt-16 pb-20 md:pt-24 md:pb-28 relative">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="flex justify-center mb-6"
        >
          <span className="badge-accent">RBTRIX Digital</span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="text-4xl sm:text-5xl md:text-7xl font-semibold text-center leading-[1.05] tracking-tight max-w-4xl mx-auto text-ink dark:text-dark-text"
        >
          Smart Google Review Solutions
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="mt-6 text-base md:text-lg text-ink-soft dark:text-dark-soft text-center max-w-xl mx-auto"
        >
          Premium NFC &amp; QR products for modern businesses.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link to="/products" className="btn-primary w-full sm:w-auto">
            Explore Products <FiArrowRight />
          </Link>
          <Link to="/categories" className="btn-secondary w-full sm:w-auto">
            View Sample Designs <FiGrid />
          </Link>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={4}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 max-w-3xl mx-auto"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl md:text-3xl font-semibold font-display text-ink dark:text-dark-text">
                {stat.value}
              </p>
              <p className="mt-1 text-xs md:text-sm text-ink-faint dark:text-dark-soft">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
