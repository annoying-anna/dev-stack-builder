/**
 * Brand logo — a gradient "DS" badge followed by the Dev Stack wordmark.
 * The wordmark uses the same shared brand gradient as the rest of the UI.
 */
const sizes = {
  sm: { badge: 'h-8 w-8 rounded-lg text-[11px]', text: 'text-base' },
  md: { badge: 'h-9 w-9 rounded-xl text-xs', text: 'text-lg' },
  lg: { badge: 'h-11 w-11 rounded-2xl text-sm', text: 'text-2xl' },
}

const Logo = ({ size = 'md' }) => {
  const style = sizes[size] ?? sizes.md

  return (
    <a href="#home" className="inline-flex shrink-0 items-center gap-2.5">
      <span
        className={`brand-gradient brand-glow grid place-items-center font-extrabold tracking-tight text-white ${style.badge}`}
      >
        DS
      </span>
      <span
        className={`font-extrabold tracking-tight whitespace-nowrap max-[359px]:hidden ${style.text}`}
      >
        <span className="text-slate-900">Dev</span>{' '}
        <span className="brand-gradient-text">Stack</span>
      </span>
    </a>
  )
}

export default Logo
