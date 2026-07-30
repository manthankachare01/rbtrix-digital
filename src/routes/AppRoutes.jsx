import { lazy, Suspense } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Route-level code splitting: each page ships as its own chunk and loads on demand.
const Home = lazy(() => import('../pages/Home.jsx'));
const Products = lazy(() => import('../pages/Products.jsx'));
const ProductDetail = lazy(() => import('../pages/ProductDetail.jsx'));
const Categories = lazy(() => import('../pages/Categories.jsx'));
const CategoryDetail = lazy(() => import('../pages/CategoryDetail.jsx'));
const DeliveredProducts = lazy(() => import('../pages/DeliveredProducts.jsx'));
const About = lazy(() => import('../pages/About.jsx'));
const Contact = lazy(() => import('../pages/Contact.jsx'));
const NotFound = lazy(() => import('../pages/NotFound.jsx'));

function RouteLoader() {
  return (
    <div className="flex items-center justify-center py-32">
      <div className="h-6 w-6 rounded-full border-2 border-line dark:border-dark-line border-t-ink dark:border-t-dark-text animate-spin" />
    </div>
  );
}

const variants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

function Page({ children }) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<RouteLoader />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Page><Home /></Page>} />
          <Route path="/products" element={<Page><Products /></Page>} />
          <Route path="/products/:id" element={<Page><ProductDetail /></Page>} />
          <Route path="/categories" element={<Page><Categories /></Page>} />
          <Route path="/categories/:id" element={<Page><CategoryDetail /></Page>} />
          <Route path="/delivered-products" element={<Page><DeliveredProducts /></Page>} />
          <Route path="/about" element={<Page><About /></Page>} />
          <Route path="/contact" element={<Page><Contact /></Page>} />
          <Route path="*" element={<Page><NotFound /></Page>} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}
