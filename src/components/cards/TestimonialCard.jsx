import { FiStar } from 'react-icons/fi';
import { resolveImage } from '../../utils/images.js';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="card-surface p-6 h-full flex flex-col">
      <div className="flex gap-0.5 mb-4 text-ink dark:text-dark-text">
        {Array.from({ length: 5 }).map((_, i) => (
          <FiStar key={i} size={14}  className={i < testimonial.rating ? 'fill-current text-yellow-400' : 'opacity-20'} />
        ))}
      </div>
      <p className="text-sm text-ink-soft dark:text-dark-soft leading-relaxed flex-1">"{testimonial.review}"</p>
      <div className="mt-6 flex items-center gap-3">
        <img
          src={resolveImage(testimonial.image)}
          alt={testimonial.name}
          className="h-10 w-10 rounded-full object-cover border border-line dark:border-dark-line"
        />
        <div>
          <p className="text-sm font-medium text-ink dark:text-dark-text">{testimonial.name}</p>
          <p className="text-xs text-ink-faint dark:text-dark-soft">{testimonial.business}</p>
        </div>
      </div>
    </div>
  );
}
