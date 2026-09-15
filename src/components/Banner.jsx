import { ArrowRightIcon } from './Icons'

/**
 * Hero / banner section: two-tone heading (plain + gradient), description,
 * a gradient primary button and an outlined secondary button, plus the
 * banner illustration.
 */
const Banner = ({ technologyCount, categoryCount }) => {
  const stats = [
    {
      value: technologyCount > 0 ? `${technologyCount}` : '—',
      label: 'Curated technologies',
    },
    {
      value: categoryCount > 0 ? `${categoryCount}` : '—',
      label: 'Stack categories',
    },
    { value: '1-click', label: 'Stack building' },
  ]

  return (
    <section id="home" className="relative overflow-hidden bg-white">
      {/* soft brand glow behind the illustration */}
      <div
        aria-hidden="true"
        className="brand-gradient pointer-events-none absolute -top-24 right-[-10%] h-[420px] w-[420px] rounded-full opacity-10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pt-12 pb-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:pt-20 lg:pb-24">
        {/* ---------- copy ---------- */}
        <div className="max-w-xl">
          <h1 className="text-4xl leading-[1.08] font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Build Your Ideal
            <br />
            <span className="brand-gradient-text">Development Stack</span>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-slate-500 sm:text-lg">
            Explore frontend, backend, database and tooling options, compare
            them side by side, and put together the stack that fits your next
            project &mdash; all in one place.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#technologies"
              className="brand-gradient brand-glow group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition hover:brightness-110"
            >
              Explore Technologies
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
            >
              Learn More
            </a>
          </div>

          <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-slate-100 pt-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="brand-gradient-text text-xl font-extrabold sm:text-2xl">
                  {stat.value}
                </dt>
                <dd className="mt-0.5 text-xs font-medium text-slate-500 sm:text-sm">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* ---------- illustration ---------- */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={`${import.meta.env.BASE_URL}assets/banner-stack.png`}
            alt="Illustration of layered development stack blocks glowing in brand colours"
            width="522"
            height="522"
            className="w-64 max-w-full drop-shadow-[0_25px_45px_rgba(139,92,246,0.25)] sm:w-80 lg:w-[26rem]"
          />
        </div>
      </div>
    </section>
  )
}

export default Banner