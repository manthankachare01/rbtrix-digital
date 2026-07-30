import Hero from '../components/sections/Hero.jsx';
import ProductsPreview from '../components/sections/ProductsPreview.jsx';
import CategoriesPreview from '../components/sections/CategoriesPreview.jsx';
import BeforeAfter from '../components/sections/BeforeAfter.jsx';
import WhyChooseUs from '../components/sections/WhyChooseUs.jsx';
import HowItWorks from '../components/sections/HowItWorks.jsx';
import TestimonialsPreview from '../components/sections/TestimonialsPreview.jsx';
import ComparisonTable from '../components/sections/ComparisonTable.jsx';
import FaqPreview from '../components/sections/FaqPreview.jsx';
import ContactCta from '../components/sections/ContactCta.jsx';

export default function Home() {
  return (
    <>
      <Hero />
      <ProductsPreview />
      <CategoriesPreview />
      <BeforeAfter />
      <WhyChooseUs />
      <HowItWorks />
      <TestimonialsPreview />
      <ComparisonTable />
      <FaqPreview />
      <ContactCta />
    </>
  );
}
