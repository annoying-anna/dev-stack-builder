import Loader from './Loader'
import TechnologyGrid from './TechnologyGrid'
import YourStack from './YourStack'

/**
 * The "Explore the Technologies" section: the technology grid on the left
 * and the "Your Stack" panel on the right.
 *
 * Data, the loading state and every stack action are owned by App and flow
 * into these child components as props.
 */
const TechnologiesSection = ({
  technologies,
  isLoading,
  error,
  stack,
  selectedIds,
  onAdd,
  onRemove,
  onRemoveAll,
  onRetry,
}) => {
  const renderGrid = () => {
    if (isLoading) return <Loader />

    if (error) {
      return (
        <div className="grid place-items-center rounded-2xl border border-dashed border-rose-200 bg-rose-50/40 px-6 py-16 text-center">
          <p className="text-sm font-semibold text-rose-500">
            We could not load the technology list.
          </p>
          <p className="mt-1 text-xs text-rose-400">{error}</p>
          <button
            type="button"
            onClick={onRetry}
            className="mt-5 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Try again
          </button>
        </div>
      )
    }

    if (technologies.length === 0) {
      return (
        <div className="grid place-items-center rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
          <p className="text-sm text-slate-500">
            No technologies match this view yet.
          </p>
        </div>
      )
    }

    return (
      <TechnologyGrid
        technologies={technologies}
        selectedIds={selectedIds}
        onAdd={onAdd}
      />
    )
  }

  return (
    <section id="technologies" className="bg-slate-50/80 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-8 sm:mb-10">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Explore the <span className="brand-gradient-text">Technologies</span>
          </h2>
          <p className="mt-3 text-sm text-slate-500 sm:text-base">
            Pick one technology per category to build your ideal stack.
          </p>
        </header>

        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,1.1fr)] xl:gap-8">
          <div>{renderGrid()}</div>
          <YourStack
            stack={stack}
            onRemove={onRemove}
            onRemoveAll={onRemoveAll}
          />
        </div>
      </div>
    </section>
  )
}

export default TechnologiesSection