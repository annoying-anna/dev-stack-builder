import { ArrowRightIcon } from './Icons'

/** Curated example stacks — shows how the picked technologies combine. */
const starterStacks = [
  {
    id: 'mern-commerce',
    tag: 'Frontend + Backend',
    title: 'MERN Commerce Starter',
    description:
      'A storefront starter with product listing, cart, checkout and an admin dashboard for managing orders.',
    stack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
  },
  {
    id: 'realtime-analytics',
    tag: 'Full Stack',
    title: 'Realtime Analytics Board',
    description:
      'Server-rendered dashboards that stream live metrics and cache heavy aggregations for instant reloads.',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis'],
  },
  {
    id: 'cloud-native-api',
    tag: 'Backend + DevOps',
    title: 'Cloud Native API',
    description:
      'A containerised REST API that is deployed to a managed cluster and scales horizontally under load.',
    stack: ['Node.js', 'Docker', 'Kubernetes', 'PostgreSQL'],
  },
]

const Projects = () => {
  return (
    <section id="projects" className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-8 sm:mb-10">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Starter <span className="brand-gradient-text">Projects</span>
          </h2>
          <p className="mt-3 text-sm text-slate-500 sm:text-base">
            Real-world combinations our builders start with most often.
          </p>
        </header>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {starterStacks.map((project) => (
            <article
              key={project.id}
              className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/5"
            >
              <span className="brand-gradient w-fit rounded-full px-3 py-1 text-[11px] font-semibold text-white">
                {project.tag}
              </span>
              <h3 className="mt-4 text-lg font-bold text-slate-900">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {project.description}
              </p>
              <ul className="mt-auto flex flex-wrap gap-2 pt-5">
                {project.stack.map((item) => (
                  <li
                    key={item}
                    className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <a
          href="#technologies"
          className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-slate-900"
        >
          Build your own stack
          <ArrowRightIcon className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}

export default Projects