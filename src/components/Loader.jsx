/**
 * Loading state that is shown while the technology JSON file is being
 * fetched. The local file resolves in a few milliseconds, but the state
 * exists and works exactly like it would for a remote API.
 */
const Loader = ({ message = 'Loading technologies…' }) => {
  return (
    <div
      role="status"
      aria-live="polite"
      className="grid place-items-center rounded-2xl border border-dashed border-slate-200 bg-white px-6 py-20 text-center"
    >
      <span className="loading loading-spinner loading-lg text-pink-500" />
      <p className="mt-4 text-sm font-medium text-slate-500">{message}</p>
    </div>
  )
}

export default Loader