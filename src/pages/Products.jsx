import products from '../data/products.json';
import ProductCard from '../components/cards/ProductCard.jsx';
import ScrollReveal from '../animations/ScrollReveal.jsx';
import { StaggerContainer, StaggerItem } from '../animations/StaggerGrid.jsx';

export default function Products() {
  return (
    <div className="section-pad">
      <div className="container-app">
        <ScrollReveal className="max-w-2xl mb-14">
          <p className="eyebrow mb-3">Products</p>
          <h1 className="text-3xl md:text-5xl font-semibold text-ink dark:text-dark-text">Every format we build</h1>
          <p className="mt-4 text-base text-ink-soft dark:text-dark-soft">
            Stands, cards, stickers, and menus — each designed to make leaving a review effortless.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {products.map((p) => (
            <StaggerItem key={p.id} className="h-full">
              <ProductCard product={p} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
}
