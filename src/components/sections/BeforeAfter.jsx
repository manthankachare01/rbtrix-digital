import { FiX, FiCheck } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading.jsx';
import ScrollReveal from '../../animations/ScrollReveal.jsx';
import { resolveImage } from '../../utils/images.js';
import beforeImage from "../../assets/images/before.png";
import afterImage from "../../assets/images/after.png";

const before = ['Fewer Google reviews', 'Lower walk-in trust', 'Customers forget to review later', 'Slower word-of-mouth growth'];
const after = ['More Google reviews', 'Stronger walk-in trust', 'Review happens on the spot', 'Faster word-of-mouth growth'];

export default function BeforeAfter() {
  return (
    <section className="section-pad bg-surface-soft dark:bg-dark-surface border-y border-line dark:border-dark-line">
      <div className="container-app">
        <SectionHeading
          eyebrow="The Difference"
          title="Less reviews, less sales — before. More reviews, more sales — after."
          align="center"
        />

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-stretch">
          <ScrollReveal className="card-surface p-8 flex flex-col">
            <div className="aspect-[16/10] rounded-xl overflow-hidden bg-surface-softer dark:bg-dark-surface2 mb-6">
            <img src={beforeImage} alt="Before using RBTRIX Digital" className="h-full w-full object-cover grayscale opacity-80"/>
            </div>
            <p className="eyebrow mb-4 text-ink-faint dark:text-dark-soft">Before</p>
            <ul className="space-y-3">
              {before.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft dark:text-dark-soft">
                  <FiX className="mt-0.5 shrink-0 text-ink-faint" />
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="card-surface p-8 flex flex-col">
            <div className="aspect-[16/10] rounded-xl overflow-hidden bg-accent-softer dark:bg-dark-surface2 mb-6">
              {/* Replace this image via src/data image key in BeforeAfter.jsx to show an "after" photo */}
              <img src={afterImage} alt="After using RBTRIX Digital" className="h-full w-full object-cover" />
            </div>
            <p className="eyebrow mb-4 text-accent">After</p>
            <ul className="space-y-3">
              {after.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-ink dark:text-dark-text font-medium">
                  <FiCheck className="mt-0.5 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
