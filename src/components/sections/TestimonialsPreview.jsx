import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import testimonials from '../../data/testimonials.json';
import TestimonialCard from '../cards/TestimonialCard.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import 'swiper/css';
import 'swiper/css/navigation';

export default function TestimonialsPreview() {
  return (
    <section className="section-pad bg-surface-soft dark:bg-dark-surface border-y border-line dark:border-dark-line">
      <div className="container-app">
        <SectionHeading eyebrow="Customer Reviews" title="What businesses are saying" align="center" />

        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{ prevEl: '.testimonials-prev', nextEl: '.testimonials-next' }}
            autoplay={{ delay: 1500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            loop
            spaceBetween={20}
            slidesPerView={1.05}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            className="!pb-3"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id} className="h-auto">
                <TestimonialCard testimonial={t} />
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            aria-label="Previous testimonial"
            className="testimonials-prev hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-surface dark:bg-dark-surface2 border border-line dark:border-dark-line shadow-softer hover:border-accent hover:text-accent transition-colors"
          >
            <FiChevronLeft size={18} />
          </button>
          <button
            aria-label="Next testimonial"
            className="testimonials-next hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-surface dark:bg-dark-surface2 border border-line dark:border-dark-line shadow-softer hover:border-accent hover:text-accent transition-colors"
          >
            <FiChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
