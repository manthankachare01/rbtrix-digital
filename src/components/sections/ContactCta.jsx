import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import ScrollReveal from '../../animations/ScrollReveal.jsx';
import { buildWhatsAppLink } from '../../utils/whatsapp.js';

export default function ContactCta() {
  return (
    <section className="section-pad">
      <div className="container-app">
        <ScrollReveal className="card-surface p-10 md:p-16 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-semibold text-ink dark:text-dark-text">
            Ready to bring this to your counter?
          </h2>
          <p className="mt-4 text-sm md:text-base text-ink-soft dark:text-dark-soft max-w-lg mx-auto">
            Tell us your business type and we'll recommend the right product and design.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full sm:w-auto">
              Chat on WhatsApp <FaWhatsapp />
            </a>
            <Link to="/contact" className="btn-secondary w-full sm:w-auto">
              Contact Us <FiArrowRight />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
