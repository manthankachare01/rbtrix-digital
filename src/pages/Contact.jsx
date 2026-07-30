import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiInstagram, FiArrowUpRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import ScrollReveal from '../animations/ScrollReveal.jsx';
import { buildWhatsAppLink } from '../utils/whatsapp.js';

const methods = [
  {
    icon: FiInstagram,
    title: 'Instagram',
    action: '@rbtrixdigital',
    href: 'https://instagram.com',
  },
  {
    icon: FiMail,
    title: 'Email',
    action: 'hello@rbtrixdigital.com',
    href: 'mailto:hello@rbtrixdigital.com',
  },
  {
    icon: FiPhone,
    title: 'Call',
    action: '+91 99999 99999',
    href: 'tel:+919999999999',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', business: '', message: '' });

  const update = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const whatsappMessage = `Hi RBTRIX Digital, I'm ${form.name || '[name]'} from ${form.business || '[business name]'}. ${form.message || "I'd like to know more about your products."}`;

  return (
    <div>
      <section className="bg-gradient-to-b from-accent-softer to-surface dark:from-dark-surface2 dark:to-dark-bg border-b border-line dark:border-dark-line">
        <div className="container-app pt-16 pb-14 md:pt-20 md:pb-16">
          <ScrollReveal className="max-w-2xl">
            <p className="eyebrow mb-3">Contact</p>
            <h1 className="text-3xl md:text-5xl font-semibold text-ink dark:text-dark-text">Let's set up your counter</h1>
            <p className="mt-4 text-base text-ink-soft dark:text-dark-soft">
              Reach out through whichever channel works best for you — we're quickest on WhatsApp.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="container-app section-pad">
        <div className="grid lg:grid-cols-5 gap-6 mb-16">
          {/* Quick message card - primary CTA */}
          <ScrollReveal className="lg:col-span-3 card-surface p-7 md:p-9">
            <p className="eyebrow mb-1">Send a Quick Message</p>
            <h2 className="text-xl font-semibold text-ink dark:text-dark-text mb-6">
              We'll reply on WhatsApp in minutes
            </h2>
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="eyebrow mb-2 block text-[11px]">Your Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={update('name')}
                    placeholder="e.g. Rohan Mehta"
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="eyebrow mb-2 block text-[11px]">Business Name</label>
                  <input
                    type="text"
                    value={form.business}
                    onChange={update('business')}
                    placeholder="e.g. Sai Cafe"
                    className="input-field"
                  />
                </div>
              </div>
              <div>
                <label className="eyebrow mb-2 block text-[11px]">Message</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={update('message')}
                  placeholder="Tell us what you're looking for..."
                  className="input-field resize-none"
                />
              </div>
              <a
                href={buildWhatsAppLink(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full sm:w-auto"
              >
                Send on WhatsApp <FaWhatsapp />
              </a>
              <p className="text-xs text-ink-faint dark:text-dark-soft">
                This opens WhatsApp with your message pre-filled — nothing is stored on this site.
              </p>
            </div>
          </ScrollReveal>

          {/* Contact details card */}
          <ScrollReveal delay={0.08} className="lg:col-span-2 card-surface p-7 md:p-9 flex flex-col">
            <p className="eyebrow mb-1">Contact Details</p>
            <h3 className="text-lg font-semibold text-ink dark:text-dark-text mb-6">Reach us directly</h3>

            <div className="flex flex-col divide-y divide-line dark:divide-dark-line">
              {methods.map(({ icon: Icon, title, action, href }) => (
                <a
                  key={title}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-4 py-4 first:pt-0 last:pb-0"
                >
                  <div className="h-11 w-11 rounded-full bg-accent-soft dark:bg-accent/10 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-ink dark:text-dark-text">{title}</p>
                    <p className="text-sm text-ink-soft dark:text-dark-soft truncate">{action}</p>
                  </div>
                  <FiArrowUpRight className="shrink-0 text-ink-faint transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <p className="eyebrow mb-5 flex items-center gap-2"><FiMapPin size={14} /> Find Us</p>
          <div className="card-surface overflow-hidden">
            <iframe
              title="RBTRIX Digital Location"
              src="https://www.google.com/maps?q=Pune,Maharashtra,India&output=embed"
              className="w-full h-80 md:h-96 border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
