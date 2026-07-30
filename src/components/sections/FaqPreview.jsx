import faqs from '../../data/faq.json';
import SectionHeading from '../ui/SectionHeading.jsx';
import Accordion from '../ui/Accordion.jsx';

export default function FaqPreview() {
  return (
    <section className="section-pad">
      <div className="container-app max-w-3xl">
        <SectionHeading eyebrow="FAQ" title="Common questions" align="center" />
        <Accordion items={faqs} />
      </div>
    </section>
  );
}
