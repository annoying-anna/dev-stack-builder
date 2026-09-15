import { ArrowRightIcon, MailIcon } from './Icons'

const CONTACT_EMAIL = 'hello@devstack.dev'

/** Contact call-to-action band. */
const Contact = () => {
  return (
    <section id="contact" className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="brand-gradient relative overflow-hidden rounded-3xl px-6 py-12 text-center sm:px-12 lg:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-16 -right-10 h-56 w-56 rounded-full bg-white/15 blur-2xl"
          />

          <h2 className="relative text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Ready to build your stack?
          </h2>
          <p className="relative mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
            Pick the technologies that match your next project, share the list
            with your team, and tell us which one you would add next.
          </p>

          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#technologies"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 sm:w-auto"
            >
              Explore Technologies
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/70 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
            >
              <MailIcon className="h-4 w-4" />
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact