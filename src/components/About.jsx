import { CheckIcon, LayersIcon } from './Icons'

const highlights = [
  'Hand-written data — name, category, difficulty, rating and badge stay consistent for every technology.',
  'A single card layout makes comparing frontend, backend, database and DevOps options quick and fair.',
  'One click adds a technology to your stack, and every add, duplicate, remove and clear action gives instant feedback.',
  'The whole interface is themed from one shared gradient variable, so the look can be re-skinned in seconds.',
]

const About = ({ technologyCount, categoryCount }) => {
  return (
    <section id="about" className="bg-slate-50/80 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600">
            <LayersIcon className="h-4 w-4 text-pink-500" />
            About the project
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Why developers use <span className="brand-gradient-text">Dev Stack</span>
          </h2>

          <p className="mt-5 text-sm leading-relaxed text-slate-500 sm:text-base">
            Choosing a stack is usually the slowest part of starting a project.
            Dev Stack keeps a curated list of technologies in one place, shows
            what each one is good at, and lets you assemble a stack that you can
            hand straight to your team. The catalogue is loaded from a JSON file,
            so adding a new technology is just a data change — no UI work needed.
          </p>

          <ul className="mt-8 space-y-4">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="brand-gradient mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-white">
                  <CheckIcon className="h-3 w-3" />
                </span>
                <p className="text-sm leading-relaxed text-slate-600">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              value: technologyCount > 0 ? `${technologyCount}` : '—',
              label: 'Technologies',
              hint: 'Loaded from JSON',
            },
            {
              value: categoryCount > 0 ? `${categoryCount}` : '—',
              label: 'Categories',
              hint: 'Frontend to DevOps',
            },
            { value: '3', label: 'Difficulty levels', hint: 'Beginner to advanced' },
            { value: '100%', label: 'JSON driven', hint: 'No hardcoded cards' },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className="brand-gradient-text text-3xl font-extrabold">
                {item.value}
              </p>
              <p className="mt-2 text-sm font-bold text-slate-800">
                {item.label}
              </p>
              <p className="mt-1 text-xs text-slate-500">{item.hint}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About