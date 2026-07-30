import { useMemo, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import categories from '../data/categories.json';
import CategoryCard from '../components/cards/CategoryCard.jsx';
import ScrollReveal from '../animations/ScrollReveal.jsx';
import { StaggerContainer, StaggerItem } from '../animations/StaggerGrid.jsx';

export default function Categories() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(
    () => categories.filter((c) => c.name.toLowerCase().includes(query.toLowerCase())),
    [query]
  );

  return (
    <div className="section-pad">
      <div className="container-app">
        <ScrollReveal className="max-w-2xl mb-12">
          <p className="eyebrow mb-3">Business Categories</p>
          <h1 className="text-3xl md:text-5xl font-semibold text-ink dark:text-dark-text">
            Built around your industry
          </h1>
          <p className="mt-4 text-base text-ink-soft dark:text-dark-soft">
            Every category page includes ready-made stand, sticker, and card designs.
          </p>
        </ScrollReveal>

        <div className="relative max-w-sm w-full mb-8">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-faint" size={16} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search categories..."
            className="input-field pl-10"
          />
        </div>

        {filtered.length === 0 ? (
          <p className="text-sm text-ink-faint dark:text-dark-soft py-16 text-center">
            No categories match "{query}".
          </p>
        ) : (
          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
            {filtered.map((c) => (
              <StaggerItem key={c.id} className="h-full">
                <CategoryCard category={c} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        )}
      </div>
    </div>
  );
}
