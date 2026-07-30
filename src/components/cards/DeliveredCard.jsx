import { resolveImage } from '../../utils/images.js';

export default function DeliveredCard({ item }) {
  const isDone = item.status === 'Completed';
  return (
    <div className="card-surface overflow-hidden flex flex-col h-full">
      <div className="aspect-[4/3] overflow-hidden bg-surface-soft dark:bg-dark-surface2">
        <img src={resolveImage(item.image)} alt={item.businessName} loading="lazy" className="h-full w-full object-cover" />
      </div>
      <div className="p-5 flex flex-col gap-2 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-ink dark:text-dark-text">{item.businessName}</h3>
          <span
            className={`text-[11px] font-medium px-2.5 py-1 rounded-full whitespace-nowrap ${
              isDone
                ? 'bg-surface-soft dark:bg-dark-surface2 text-ink-soft dark:text-dark-soft'
                : 'bg-ink text-white dark:bg-white dark:text-ink'
            }`}
          >
            {item.status}
          </span>
        </div>
        <p className="text-xs text-ink-faint dark:text-dark-soft">{item.category} · {item.location}</p>
        <div className="mt-2 text-sm text-ink-soft dark:text-dark-soft space-y-1">
          <p><span className="text-ink-faint">Customer:</span> {item.customerName}</p>
          <p><span className="text-ink-faint">Product:</span> {item.productUsed}</p>
          <p><span className="text-ink-faint">Delivered:</span> {new Date(item.deliveryDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
        </div>
      </div>
    </div>
  );
}
