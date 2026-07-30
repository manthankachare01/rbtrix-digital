import { Link } from 'react-router-dom';
import { FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import products from '../../data/products.json';
import ProductCard from '../cards/ProductCard.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import 'swiper/css';
import 'swiper/css/navigation';

export default function ProductsPreview() {
  return (
    <section className="section-pad">
      <div className="container-app">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <SectionHeading
            eyebrow="Our Products"
            title="A product for every counter"
            description="Six formats, one purpose — make it effortless for customers to leave a review."
          />
          <Link
            to="/products"
            className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium text-ink dark:text-dark-text mb-16"
          >
            View All Products <FiArrowRight />
          </Link>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{ prevEl: '.products-prev', nextEl: '.products-next' }}
            autoplay={{ delay: 1500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            loop
            spaceBetween={20}
            slidesPerView={1.1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            className="!pb-3"
          >
            {products.map((p) => (
              <SwiperSlide key={p.id} className="h-auto">
                <ProductCard product={p} />
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            aria-label="Previous product"
            className="products-prev hidden md:flex absolute -left-5 top-[38%] -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-surface dark:bg-dark-surface2 border border-line dark:border-dark-line shadow-softer hover:border-accent hover:text-accent transition-colors"
          >
            <FiChevronLeft size={18} />
          </button>
          <button
            aria-label="Next product"
            className="products-next hidden md:flex absolute -right-5 top-[38%] -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-surface dark:bg-dark-surface2 border border-line dark:border-dark-line shadow-softer hover:border-accent hover:text-accent transition-colors"
          >
            <FiChevronRight size={18} />
          </button>
        </div>

        <Link to="/products" className="md:hidden mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-ink dark:text-dark-text">
          View All Products <FiArrowRight />
        </Link>
      </div>
    </section>
  );
}
