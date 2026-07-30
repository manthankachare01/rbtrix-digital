import { FiTarget, FiUsers, FiAward } from 'react-icons/fi';
import ScrollReveal from '../animations/ScrollReveal.jsx';
import { StaggerContainer, StaggerItem } from '../animations/StaggerGrid.jsx';
import WhyChooseUs from '../components/sections/WhyChooseUs.jsx';

const values = [
  { icon: FiTarget, title: 'Purposeful Design', desc: 'Every product exists to remove one specific piece of friction between a happy customer and a review.' },
  { icon: FiUsers, title: 'Built With Businesses', desc: 'Designs are shaped by feedback from the counters and reception desks they actually sit on.' },
  { icon: FiAward, title: 'Quality First', desc: 'Materials and print finishes are chosen to hold up to months of daily handling.' },
];

export default function About() {
  return (
    <div>
      <section className="section-pad">
        <div className="container-app">
          <ScrollReveal className="max-w-2xl">
            <p className="eyebrow mb-3">About RBTRIX Digital</p>
            <h1 className="text-3xl md:text-5xl font-semibold text-ink dark:text-dark-text">
              We make it effortless for customers to say something good, out loud.
            </h1>
            <p className="mt-6 text-base text-ink-soft dark:text-dark-soft leading-relaxed">
              RBTRIX Digital designs NFC and QR review products for businesses that rely on word of mouth —
              cafes, clinics, showrooms, and everything in between. Instead of asking customers to search for
              your page, we put the review one tap away, right at the counter or the checkout desk.
            </p>
            <p className="mt-4 text-base text-ink-soft dark:text-dark-soft leading-relaxed">
              Every product is designed to be handed over, placed on a counter, or stuck on a door — and to keep
              working quietly in the background, visit after visit.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-pad bg-surface-soft dark:bg-dark-surface border-y border-line dark:border-dark-line">
        <div className="container-app">
          <StaggerContainer className="grid md:grid-cols-3 gap-5">
            {values.map(({ icon: Icon, title, desc }) => (
              <StaggerItem key={title} className="card-surface p-8 h-full">
                <div className="h-11 w-11 rounded-full bg-surface dark:bg-dark-surface2 border border-line dark:border-dark-line flex items-center justify-center mb-5">
                  <Icon size={18} className="text-ink dark:text-dark-text" />
                </div>
                <h3 className="text-lg font-semibold text-ink dark:text-dark-text">{title}</h3>
                <p className="mt-2 text-sm text-ink-soft dark:text-dark-soft leading-relaxed">{desc}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <WhyChooseUs />
    </div>
  );
}
