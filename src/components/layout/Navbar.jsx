import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import logoFull from '../../assets/logo/logo-full.png';
import ThemeToggle from '../common/ThemeToggle.jsx';
import { WhatsAppNavButton } from '../common/WhatsAppButton.jsx';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/products', label: 'Products' },
  { to: '/categories', label: 'Categories' },
  { to: '/delivered-products', label: 'Delivered Products' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-line dark:border-dark-line transition-all duration-300 ease-premium ${
        scrolled
          ? 'bg-surface/90 dark:bg-dark-bg/90 backdrop-blur-md shadow-softer'
          : 'bg-surface dark:bg-dark-bg'
      }`}
    >
      <div className="container-app">
        <div
          className={`flex items-center justify-between transition-all duration-300 ease-premium ${
            scrolled ? 'h-16' : 'h-20'
          }`}
        >
          <NavLink to="/" className="flex items-center gap-2 shrink-0" onClick={() => setMenuOpen(false)}>
            <img
              src={logoFull}
              alt="RBTRIX Digital"
              className={`w-auto transition-all duration-300 ease-premium ${scrolled ? 'h-6' : 'h-7'}`}
            />
          </NavLink>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-accent'
                      : 'text-ink-soft dark:text-dark-soft hover:text-ink dark:hover:text-dark-text'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-3">
              <ThemeToggle />
              <WhatsAppNavButton />
            </div>
            <button
              type="button"
              className="lg:hidden flex h-9 w-9 items-center justify-center rounded-full border border-line dark:border-dark-line"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="lg:hidden border-t border-line dark:border-dark-line bg-surface dark:bg-dark-bg"
        >
          <div className="container-app py-6 flex flex-col gap-5">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `text-base font-medium ${isActive ? 'text-accent' : 'text-ink-soft dark:text-dark-soft'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <ThemeToggle />
              <WhatsAppNavButton />
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
