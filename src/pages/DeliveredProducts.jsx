import { useMemo, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import delivered from '../data/delivered.json';
import DeliveredCard from '../components/cards/DeliveredCard.jsx';
import ScrollReveal from '../animations/ScrollReveal.jsx';
import { StaggerContainer, StaggerItem } from '../animations/StaggerGrid.jsx';

export default function DeliveredProducts() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(
    () =>
      delivered.filter((d) =>
        `${d.businessName} ${d.category} ${d.location}`.toLowerCase().includes(query.toLowerCase())
      ),
    [query]
  );

  return (
    <div className="section-pad">
      <div className="container-app">
        <ScrollReveal className="max-w-2xl mb-12">
          <p className="eyebrow mb-3">Delivered Products</p>
          <h1 className="text-3xl md:text-5xl font-semibold text-ink dark:text-dark-text">
            Recently delivered to businesses like yours
          </h1>
          <p className="mt-4 text-base text-ink-soft dark:text-dark-soft">
            A running record of the businesses we've set up with review products.
          </p>
        </ScrollReveal>

        <div className="relative max-w-sm w-full mb-8">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-faint" size={16} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by business, category, or location..."
            className="input-field pl-10"
          />
        </div>

        {filtered.length === 0 ? (
          <p className="text-sm text-ink-faint dark:text-dark-soft py-16 text-center">No matching deliveries found.</p>
        ) : (
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((item) => (
              <StaggerItem key={item.id} className="h-full">
                <DeliveredCard item={item} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        )}
      </div>
    </div>
  );
}
