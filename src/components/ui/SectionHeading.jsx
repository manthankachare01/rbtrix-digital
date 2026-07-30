import ScrollReveal from '../../animations/ScrollReveal.jsx';

export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <ScrollReveal className={`max-w-2xl ${alignClass} mb-12 md:mb-16`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-3xl md:text-4xl font-semibold text-ink dark:text-dark-text">{title}</h2>
      {description && (
        <p className="mt-4 text-base text-ink-soft dark:text-dark-soft leading-relaxed">{description}</p>
      )}
    </ScrollReveal>
  );
}
