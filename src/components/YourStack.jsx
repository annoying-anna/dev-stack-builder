import { CloseIcon } from './Icons'

/**
 * "Your Stack" sidebar.
 * Shows the empty state, the selected technologies and the remove / remove
 * all actions. Removal is reported back to the parent through callbacks.
 */
const YourStack = ({ stack, onRemove, onRemoveAll }) => {
  const hasItems = stack.length > 0

  return (
    <aside className="self-start lg:sticky lg:top-24">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:p-6">
        <h3 className="text-lg font-extrabold tracking-tight text-slate-900">
          Your Stack
        </h3>

        {/* conditional text: count vs. empty message */}
        <p className="mt-1 text-sm text-slate-500">
          {hasItems
            ? `${stack.length} ${stack.length === 1 ? 'Technology' : 'Technologies'} Selected`
            : 'No technologies selected yet.'}
        </p>

        {hasItems ? (
          <ul className="mt-5 space-y-3">
            {stack.map((technology) => (
              <li
                key={technology.id}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 transition hover:border-slate-300"
              >
                <img
                  src={technology.icon}
                  alt={`${technology.name} logo`}
                  width="32"
                  height="32"
                  loading="lazy"
                  className="h-8 w-8 shrink-0 object-contain"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-bold text-slate-800">
                    {technology.name}
                  </p>
                  <p className="truncate text-xs text-slate-500">
                    {technology.category}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onRemove(technology)}
                  aria-label={`Remove ${technology.name} from your stack`}
                  className="grid h-8 w-8 shrink-0 place-items-center rounded-lg text-slate-400 transition hover:bg-rose-50 hover:text-rose-500"
                >
                  <CloseIcon className="h-4 w-4" />
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-5 grid place-items-center rounded-xl border border-dashed border-slate-300 px-4 py-10 text-center">
            <p className="text-sm text-slate-400">Your stack is empty.</p>
          </div>
        )}

        <button
          type="button"
          onClick={onRemoveAll}
          disabled={!hasItems}
          className={`mt-5 w-full rounded-xl border px-4 py-2.5 text-sm font-semibold transition ${
            hasItems
              ? 'border-rose-200 bg-rose-50/40 text-rose-500 hover:bg-rose-50'
              : 'cursor-not-allowed border-slate-200 text-slate-300'
          }`}
        >
          Remove All
        </button>
      </div>
    </aside>
  )
}

export default YourStack