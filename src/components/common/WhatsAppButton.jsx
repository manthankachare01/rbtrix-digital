import { FaWhatsapp } from 'react-icons/fa';
import { buildWhatsAppLink } from '../../utils/whatsapp.js';

export function WhatsAppNavButton() {
  return (
    <a
      href={buildWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="flex h-9 w-9 items-center justify-center rounded-full bg-whatsapp text-white transition-all hover:bg-whatsapp-dark hover:-translate-y-0.5"
    >
      <FaWhatsapp size={16} />
    </a>
  );
}

export default function WhatsAppFloatingButton() {
  return (
    <a
      href={buildWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with RBTRIX Digital on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lift transition-transform hover:scale-105 hover:bg-whatsapp-dark md:hidden"
    >
      <FaWhatsapp size={24} />
    </a>
  );
}
