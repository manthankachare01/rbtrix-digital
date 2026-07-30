import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import categories from '../../data/categories.json';
import CategoryCard from '../cards/CategoryCard.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import { StaggerContainer, StaggerItem } from '../../animations/StaggerGrid.jsx';

export default function CategoriesPreview() {
  return (
    <section className="section-pad bg-surface-soft dark:bg-dark-surface border-y border-line dark:border-dark-line">
      <div className="container-app">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <SectionHeading
            eyebrow="Business Categories"
            title="Designed around your industry"
            description="From cafes to jewellery showrooms — every category gets its own design direction."
          />
          <Link
            to="/categories"
            className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium text-ink dark:text-dark-text mb-16"
          >
            View All Categories <FiArrowRight />
          </Link>
        </div>

        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
          {categories.slice(0, 8).map((c) => (
            <StaggerItem key={c.id} className="h-full">
              <CategoryCard category={c} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <Link to="/categories" className="md:hidden mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-ink dark:text-dark-text">
          View All Categories <FiArrowRight />
        </Link>
      </div>
    </section>
  );
}
