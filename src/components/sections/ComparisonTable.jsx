import { useState } from 'react';
import { FiCheck, FiX } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading.jsx';

const columns = ['Stand', 'Card', 'Sticker'];

const rows = [
  { label: 'Best for counters', values: [true, false, true] },
  { label: 'Best for handheld use', values: [false, true, false] },
  { label: 'Waterproof', values: [false, false, true] },
  { label: 'Reusable across locations', values: [true, true, false] },
  { label: 'Fits inside a wallet', values: [false, true, false] },
  { label: 'Custom shape available', values: [true, false, true] },
];

export default function ComparisonTable() {
  const [active, setActive] = useState(0);

  return (
    <section className="section-pad">
      <div className="container-app">
        <SectionHeading
          eyebrow="Compare"
          title="Which format fits your counter?"
          description="Stand, Card, or Sticker — each is built for a different moment in the customer's visit."
        />

        <div className="flex md:hidden gap-2 mb-6">
          {columns.map((col, i) => (
            <button
              key={col}
              onClick={() => setActive(i)}
              className={`flex-1 rounded-full py-2 text-sm font-medium border transition-colors ${
                active === i
                  ? 'bg-ink text-white dark:bg-white dark:text-ink border-ink dark:border-white'
                  : 'border-line dark:border-dark-line text-ink-soft dark:text-dark-soft'
              }`}
            >
              {col}
            </button>
          ))}
        </div>

        <div className="card-surface overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-line dark:border-dark-line">
                <th className="text-left font-medium text-ink-faint dark:text-dark-soft p-4 md:p-5 w-1/2 md:w-2/5">Feature</th>
                {columns.map((col, i) => (
                  <th
                    key={col}
                    className={`p-4 md:p-5 font-semibold text-ink dark:text-dark-text ${
                      active === i ? '' : 'hidden md:table-cell'
                    }`}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="border-b border-line dark:border-dark-line last:border-0">
                  <td className="p-4 md:p-5 text-ink-soft dark:text-dark-soft">{row.label}</td>
                  {row.values.map((val, i) => (
                    <td key={i} className={`p-4 md:p-5 text-center ${active === i ? '' : 'hidden md:table-cell'}`}>
                      {val ? (
                        <FiCheck className="inline text-ink dark:text-dark-text" />
                      ) : (
                        <FiX className="inline text-ink-faint/50" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
