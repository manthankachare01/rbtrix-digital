import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { resolveImage } from '../../utils/images.js';

export default function ProductCard({ product }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="card-surface overflow-hidden group flex flex-col h-full"
    >
      <div className="aspect-[4/3] overflow-hidden bg-surface-soft dark:bg-dark-surface2">
        <img
          src={resolveImage(product.image)}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-premium group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-ink dark:text-dark-text">{product.name}</h3>
        <p className="mt-2 text-sm text-ink-soft dark:text-dark-soft leading-relaxed flex-1">
          {product.shortDescription}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {product.bestFor.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-surface-soft dark:bg-dark-surface2 text-ink-soft dark:text-dark-soft"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          to={`/products/${product.id}`}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink dark:text-dark-text group/link"
        >
          View Details
          <FiArrowUpRight className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </Link>
      </div>
    </motion.div>
  );
}
