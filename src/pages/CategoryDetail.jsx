import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard } from 'swiper/modules';
import { FiArrowLeft, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import categories from '../data/categories.json';
import Lightbox from '../components/gallery/Lightbox.jsx';
import ScrollReveal from '../animations/ScrollReveal.jsx';
import { resolveImage } from '../utils/images.js';
import 'swiper/css';
import 'swiper/css/navigation';

function ImageRow({ title, images, onOpen }) {
  if (!images?.length) return null;
  return (
    <ScrollReveal className="mb-14">
      <p className="eyebrow mb-5">{title}</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => onOpen(images, i)}
            className="aspect-square rounded-xl overflow-hidden bg-surface-soft dark:bg-dark-surface2 cursor-zoom-in group"
          >
            <img
              src={resolveImage(img)}
              alt={`${title} ${i + 1}`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 ease-premium group-hover:scale-105"
            />
          </button>
        ))}
      </div>
    </ScrollReveal>
  );
}

export default function CategoryDetail() {
  const { id } = useParams();
  const category = categories.find((c) => c.id === id);
  const [activeSet, setActiveSet] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  if (!category) return <Navigate to="/categories" replace />;

  const openLightbox = (imageSet, i) => {
    setActiveSet(imageSet);
    setLightboxIndex(i);
  };

  return (
    <div>
      <section className="relative bg-surface-soft dark:bg-dark-surface border-b border-line dark:border-dark-line">
        <div className="container-app py-16 md:py-20">
          <Link to="/categories" className="inline-flex items-center gap-1.5 text-sm text-ink-soft dark:text-dark-soft mb-8 hover:text-ink dark:hover:text-dark-text">
            <FiArrowLeft /> Back to Categories
          </Link>
          <ScrollReveal>
            <p className="eyebrow mb-3">Business Category</p>
            <h1 className="text-3xl md:text-5xl font-semibold text-ink dark:text-dark-text">{category.name}</h1>
            <p className="mt-4 text-base text-ink-soft dark:text-dark-soft max-w-xl">{category.description}</p>
          </ScrollReveal>
        </div>
      </section>

      <div className="container-app section-pad">
        <ImageRow title="Product Designs" images={category.productDesigns} onOpen={openLightbox} />
        <ImageRow title="Sticker Designs" images={category.stickerDesigns} onOpen={openLightbox} />
        <ImageRow title="Card Designs" images={category.cardDesigns} onOpen={openLightbox} />
        <ImageRow title="Product Mockups" images={category.mockups} onOpen={openLightbox} />

        <ScrollReveal className="mb-6">
          <p className="eyebrow mb-5">Image Gallery</p>
        </ScrollReveal>
        <div className="relative mb-14">
          <Swiper
            modules={[Navigation, Keyboard]}
            keyboard={{ enabled: true }}
            navigation={{ prevEl: '.cat-prev', nextEl: '.cat-next' }}
            spaceBetween={16}
            slidesPerView={1.2}
            breakpoints={{ 640: { slidesPerView: 2.2 }, 1024: { slidesPerView: 3.2 } }}
            className="!pb-2"
          >
            {category.gallery.map((img, i) => (
              <SwiperSlide key={i}>
                <button
                  onClick={() => openLightbox(category.gallery, i)}
                  className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-surface-soft dark:bg-dark-surface2 cursor-zoom-in block"
                >
                  <img src={resolveImage(img)} alt={`Gallery ${i + 1}`} loading="lazy" className="h-full w-full object-cover" />
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="cat-prev hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 h-9 w-9 items-center justify-center rounded-full bg-surface dark:bg-dark-surface2 border border-line dark:border-dark-line shadow-softer">
            <FiChevronLeft size={16} />
          </button>
          <button className="cat-next hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 h-9 w-9 items-center justify-center rounded-full bg-surface dark:bg-dark-surface2 border border-line dark:border-dark-line shadow-softer">
            <FiChevronRight size={16} />
          </button>
        </div>
      </div>

      <Lightbox
        images={activeSet || []}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </div>
  );
}
