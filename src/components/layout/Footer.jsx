import { Link } from 'react-router-dom';
import { FiInstagram, FiMail, FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import logoFull from '../../assets/logo/logo-full.png';
import { buildWhatsAppLink } from '../../utils/whatsapp.js';

const quickLinks = [
  { to: '/products', label: 'Products' },
  { to: '/categories', label: 'Categories' },
  { to: '/delivered-products', label: 'Delivered Products' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line dark:border-dark-line bg-surface-soft dark:bg-dark-surface">
      <div className="container-app py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
          <div>
            <img src={logoFull} alt="RBTRIX Digital" className="h-6 w-auto mb-4" />
            <p className="text-sm text-ink-soft dark:text-dark-soft max-w-xs">
              Premium NFC &amp; QR review products for modern businesses.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4">Quick Links</p>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-ink-soft dark:text-dark-soft hover:text-ink dark:hover:text-dark-text transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Contact</p>
            <ul className="space-y-2.5 text-sm text-ink-soft dark:text-dark-soft">
              <li className="flex items-center gap-2">
                <FaWhatsapp size={14} className="text-whatsapp" />
                <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="hover:text-ink dark:hover:text-dark-text transition-colors">
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FiMail size={14} />
                <a href="mailto:hello@rbtrixdigital.com" className="hover:text-ink dark:hover:text-dark-text transition-colors">
                  hello@rbtrixdigital.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FiPhone size={14} />
                <a href="tel:+919999999999" className="hover:text-ink dark:hover:text-dark-text transition-colors">
                  +91 99999 99999
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FiInstagram size={14} />
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-ink dark:hover:text-dark-text transition-colors">
                  @rbtrixdigital
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-line dark:border-dark-line text-xs text-ink-faint dark:text-dark-soft">
          © {year} RBTRIX Digital. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
