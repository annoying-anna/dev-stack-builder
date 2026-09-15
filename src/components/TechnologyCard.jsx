import { StarIcon } from './Icons'

/** Colour treatments for the small badge that sits on top of every card. */
const badgeStyles = {
  Popular: 'border-sky-100 bg-sky-50 text-sky-600',
  Versatile: 'border-emerald-100 bg-emerald-50 text-emerald-600',
  Fast: 'border-orange-100 bg-orange-50 text-orange-600',
  Standard: 'border-emerald-100 bg-emerald-50 text-emerald-600',
  Scalable: 'border-teal-100 bg-teal-50 text-teal-600',
  'Top SQL': 'border-sky-100 bg-sky-50 text-sky-600',
  Cache: 'border-rose-100 bg-rose-50 text-rose-600',
  Flexible: 'border-green-100 bg-green-50 text-green-600',
  Ubiquitous: 'border-amber-100 bg-amber-50 text-amber-600',
  Essential: 'border-indigo-100 bg-indigo-50 text-indigo-600',
  Robust: 'border-indigo-100 bg-indigo-50 text-indigo-600',
  Modern: 'border-cyan-100 bg-cyan-50 text-cyan-600',
  Containers: 'border-sky-100 bg-sky-50 text-sky-600',
  Orchestration: 'border-violet-100 bg-violet-50 text-violet-600',
  Instant: 'border-violet-100 bg-violet-50 text-violet-600',
}

/** Colour of the little dot that sits next to the difficulty label. */
const difficultyDots = {
  'Beginner-Friendly': 'bg-emerald-500',
  Intermediate: 'bg-amber-500',
  Advanced: 'bg-rose-500',
}

/**
 * A single technology card.
 * It receives the technology data plus its own added state from the parent
 * and reports clicks back up through the `onAdd` callback.
 */
const TechnologyCard = ({ technology, isAdded, onAdd }) => {
  const { name, category, description, icon, rating, difficulty, badge } =
    technology

  const badgeClass = badgeStyles[badge] ?? 'border-slate-200 bg-slate-50 text-slate-600'
  const dotClass = difficultyDots[difficulty] ?? 'bg-slate-400'

  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 transition duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/5">
      <div className="flex items-start justify-between gap-3">
        <img
          src={icon}
          alt={`${name} logo`}
          width="32"
          height="32"
          loading="lazy"
          className="h-8 w-8 object-contain"
        />
        <span
          className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${badgeClass}`}
        >
          {badge}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-bold text-slate-900">{name}</h3>

      <p className="mt-2 text-sm leading-relaxed text-slate-500">
        {description}
      </p>

      <div className="mt-auto pt-4">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs">
          <span className="rounded-md bg-slate-100 px-2.5 py-1 font-semibold text-slate-600">
            {category}
          </span>
          <span className="inline-flex items-center gap-1.5 font-medium text-slate-500">
            <span className={`h-1.5 w-1.5 rounded-full ${dotClass}`} />
            {difficulty}
          </span>
          <span className="ml-auto inline-flex items-center gap-1 font-bold text-slate-800">
            <StarIcon className="h-3.5 w-3.5 text-amber-400" />
            {rating}
          </span>
        </div>

        {/*
          Once a technology is in the stack the button switches to its
          "disabled" look (grey, cursor-not-allowed, "✓ Added to Stack") and is
          marked with aria-disabled. It is deliberately kept clickable so that
          a second attempt reaches the duplicate guard in App and shows the
          warning alert instead of being silently ignored.
        */}
        <button
          type="button"
          onClick={() => onAdd(technology)}
          aria-disabled={isAdded}
          title={isAdded ? `${name} is already in your stack` : `Add ${name} to your stack`}
          aria-label={
            isAdded
              ? `${name} is already in your stack`
              : `Add ${name} to your stack`
          }
          className={`mt-4 w-full rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
            isAdded
              ? 'cursor-not-allowed border border-slate-200 bg-slate-100 text-slate-400'
              : 'bg-slate-900 text-white hover:bg-slate-800'
          }`}
        >
          {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
        </button>
      </div>
    </article>
  )
}

export default TechnologyCard