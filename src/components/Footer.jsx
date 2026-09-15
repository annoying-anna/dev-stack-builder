import Logo from './Logo'

const footerGroups = [
  {
    title: 'Product',
    links: [
      { label: 'Home', href: '#home' },
      { label: 'Technologies', href: '#technologies' },
      { label: 'Projects', href: '#projects' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Contact', href: '#contact' },
      { label: 'Careers', href: 'mailto:careers@devstack.dev' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  },
]

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'Twitter', href: 'https://twitter.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
]

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {/* brand block */}
          <div className="lg:col-span-2">
            <Logo size="md" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-500">
              Curated tools, technologies and resources for developers building
              modern software &mdash; compare what matters and ship your stack
              with confidence.
            </p>

            <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-slate-600 transition-colors hover:text-slate-900"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* link groups */}
          {footerGroups.map((group) => (
            <nav key={group.title} aria-label={`${group.title} links`}>
              <h2 className="text-xs font-bold tracking-[0.18em] text-slate-900 uppercase">
                {group.title}
              </h2>
              <ul className="mt-5 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Dev Stack. All rights reserved.
          </p>
          <ul className="flex items-center gap-6">
            <li>
              <a
                href="#"
                className="text-xs text-slate-500 transition-colors hover:text-slate-900"
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-xs text-slate-500 transition-colors hover:text-slate-900"
              >
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer