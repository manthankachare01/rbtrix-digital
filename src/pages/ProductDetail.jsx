import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { FiArrowLeft, FiCheck } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import products from '../data/products.json';
import Lightbox from '../components/gallery/Lightbox.jsx';
import Accordion from '../components/ui/Accordion.jsx';
import ScrollReveal from '../animations/ScrollReveal.jsx';
import { resolveImage } from '../utils/images.js';
import { buildWhatsAppLink } from '../utils/whatsapp.js';

const specRows = (product) => [
  { label: 'Material', value: product.material },
  { label: 'Available Sizes', value: product.sizes.join(', ') },
  { label: 'Finish', value: product.finish },
  { label: 'Printing Type', value: product.printingType },
  { label: 'NFC Type', value: product.nfcType },
  { label: 'Dimensions', value: product.dimensions },
  { label: 'Customization', value: product.customization ? 'Available' : 'Not Available' },
];

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  if (!product) return <Navigate to="/products" replace />;

  return (
    <div className="section-pad">
      <div className="container-app">
        <Link to="/products" className="inline-flex items-center gap-1.5 text-sm text-ink-soft dark:text-dark-soft mb-8 hover:text-ink dark:hover:text-dark-text">
          <FiArrowLeft /> Back to Products
        </Link>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <ScrollReveal>
            <div
              className="aspect-square rounded-xl2 overflow-hidden bg-surface-soft dark:bg-dark-surface2 cursor-zoom-in mb-3"
              onClick={() => setLightboxIndex(0)}
            >
              <img src={resolveImage(product.image)} alt={product.name} className="h-full w-full object-cover" />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {product.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setLightboxIndex(i)}
                  className="aspect-square rounded-lg overflow-hidden bg-surface-soft dark:bg-dark-surface2 cursor-zoom-in"
                >
                  <img src={resolveImage(img)} alt={`${product.name} ${i + 1}`} className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="text-3xl md:text-4xl font-semibold text-ink dark:text-dark-text">{product.name}</h1>
            <p className="mt-4 text-base text-ink-soft dark:text-dark-soft leading-relaxed">{product.description}</p>

            <div className="mt-8 flex flex-wrap gap-2">
              {product.bestFor.map((tag) => (
                <span key={tag} className="text-xs font-medium px-3 py-1.5 rounded-full bg-surface-soft dark:bg-dark-surface2 text-ink-soft dark:text-dark-soft">
                  {tag}
                </span>
              ))}
            </div>

            <ul className="mt-8 space-y-2.5">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-ink-soft dark:text-dark-soft">
                  <FiCheck className="mt-0.5 shrink-0 text-ink dark:text-dark-text" />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href={buildWhatsAppLink(`Hi, I'm interested in the ${product.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-8 w-full sm:w-auto"
            >
              Enquire on WhatsApp <FaWhatsapp />
            </a>

            <div className="mt-10 border-t border-line dark:border-dark-line pt-8">
              <p className="eyebrow mb-4">Specifications</p>
              <dl className="space-y-3">
                {specRows(product).map((row) => (
                  <div key={row.label} className="flex justify-between gap-4 text-sm">
                    <dt className="text-ink-faint dark:text-dark-soft">{row.label}</dt>
                    <dd className="text-right text-ink dark:text-dark-text font-medium">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-10 border-t border-line dark:border-dark-line pt-8">
              <p className="eyebrow mb-4">Applications</p>
              <div className="flex flex-wrap gap-2">
                {product.applications.map((a) => (
                  <span key={a} className="text-xs px-3 py-1.5 rounded-full border border-line dark:border-dark-line text-ink-soft dark:text-dark-soft">
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {product.faqs?.length > 0 && (
          <ScrollReveal className="mt-20 max-w-3xl">
            <p className="eyebrow mb-4">FAQ</p>
            <Accordion items={product.faqs.map((f, i) => ({ id: i, question: f.q, answer: f.a }))} />
          </ScrollReveal>
        )}
      </div>

      <Lightbox
        images={[product.image, ...product.gallery]}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </div>
  );
}
