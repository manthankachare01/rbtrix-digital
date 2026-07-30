import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import ScrollReveal from '../animations/ScrollReveal.jsx';

export default function NotFound() {
  return (
    <div className="section-pad">
      <div className="container-app text-center">
        <ScrollReveal>
          <p className="eyebrow mb-4">404</p>
          <h1 className="text-3xl md:text-5xl font-semibold text-ink dark:text-dark-text">Page not found</h1>
          <p className="mt-4 text-base text-ink-soft dark:text-dark-soft">
            The page you're looking for doesn't exist or may have moved.
          </p>
          <Link to="/" className="btn-primary mt-8 inline-flex">
            <FiArrowLeft /> Back to Home
          </Link>
        </ScrollReveal>
      </div>
    </div>
  );
}
