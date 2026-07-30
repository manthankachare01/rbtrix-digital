import {
  FiAward, FiTruck, FiTag, FiDroplet, FiLayers, FiWifi, FiEdit3, FiHeadphones,
} from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading.jsx';
import { StaggerContainer, StaggerItem } from '../../animations/StaggerGrid.jsx';

const reasons = [
  { icon: FiAward, title: 'Premium Quality', desc: 'Every product is finished to a standard that matches your storefront.' },
  { icon: FiTruck, title: 'Fast Delivery', desc: 'Standard orders ready within 3–5 business days.' },
  { icon: FiTag, title: 'Affordable Pricing', desc: 'Straightforward pricing with no hidden setup costs.' },
  { icon: FiDroplet, title: 'Waterproof Printing', desc: 'Built to hold up on counters, doors, and packaging.' },
  { icon: FiLayers, title: 'Premium Materials', desc: 'Acrylic, PVC, and metal — chosen for daily handling.' },
  { icon: FiWifi, title: 'Latest NFC Technology', desc: 'Rewritable chips compatible with all modern smartphones.' },
  { icon: FiEdit3, title: 'Custom Branding', desc: 'Your logo, colors, and business name on every piece.' },
  { icon: FiHeadphones, title: 'Excellent Support', desc: 'A team that stays reachable after the sale, not just before.' },
];

export default function WhyChooseUs() {
  return (
    <section className="section-pad">
      <div className="container-app">
        <SectionHeading eyebrow="Why RBTRIX Digital" title="Built for daily use, not just a demo" align="center" />
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <StaggerItem key={title} className="card-surface p-6 h-full">
              <div className="h-10 w-10 rounded-full bg-surface-soft dark:bg-dark-surface2 flex items-center justify-center mb-4">
                <Icon size={18} className="text-ink dark:text-dark-text" />
              </div>
              <h3 className="text-sm font-semibold text-ink dark:text-dark-text">{title}</h3>
              <p className="mt-1.5 text-xs text-ink-soft dark:text-dark-soft leading-relaxed">{desc}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
