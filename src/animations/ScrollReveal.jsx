import { motion } from 'framer-motion';

// Wrap any block of content to fade + slide it up as it enters the viewport.
export default function ScrollReveal({
  children,
  delay = 0,
  y = 24,
  className = '',
  as = 'div',
  ...rest
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
