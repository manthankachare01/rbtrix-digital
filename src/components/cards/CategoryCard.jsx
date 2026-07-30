import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { resolveImage } from '../../utils/images.js';

export default function CategoryCard({ category }) {
  return (
    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}>
      <Link
        to={`/categories/${category.id}`}
        className="card-surface overflow-hidden group flex flex-col h-full"
      >
        <div className="aspect-square overflow-hidden bg-surface-soft dark:bg-dark-surface2">
          <img
            src={resolveImage(category.image)}
            alt={category.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 ease-premium group-hover:scale-105"
          />
        </div>
        <div className="p-5 flex items-center justify-between gap-2">
          <div>
            <h3 className="font-semibold text-ink dark:text-dark-text">{category.name}</h3>
            <p className="mt-1 text-xs text-ink-soft dark:text-dark-soft line-clamp-1">{category.description}</p>
          </div>
          <FiArrowUpRight className="shrink-0 text-ink-faint transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </Link>
    </motion.div>
  );
}
