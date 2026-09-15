import { useEffect, useState } from 'react'
import Logo from './Logo'
import { CloseIcon, MenuIcon } from './Icons'

/** Links rendered in the navbar and used to track the active section. */
export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Technologies', href: '#technologies' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = ({ onSignIn, onSignUp }) => {
  // state: is the mobile menu open?
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // state: which section is currently in view (drives the active link style)
  const [activeSection, setActiveSection] = useState('home')

  /* Highlight the nav link of the section that is currently on screen. */
  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace('#', ''))

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 140

      sectionIds.forEach((id) => {
        const section = document.getElementById(id)
        if (!section) return

        const { offsetTop, offsetHeight } = section
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(id)
        }
      })
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    return () => window.removeEventListener('scroll', updateActiveSection)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-md">
      <nav className="mx-auto grid h-16 max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-2 px-4 sm:px-6 lg:flex lg:h-20 lg:justify-between lg:gap-6 lg:px-8">
        {/* ---------- left: hamburger (mobile) / logo (desktop) ---------- */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-slate-700 transition hover:bg-slate-50 lg:hidden"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>

          <span className="hidden lg:block">
            <Logo size="md" />
          </span>
        </div>

        {/* ---------- center: nav links (desktop only) ---------- */}
        <ul className="hidden items-center gap-6 xl:gap-9 lg:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '')

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-sm transition-colors hover:text-slate-900 ${
                    isActive
                      ? 'brand-gradient-text font-bold'
                      : 'font-medium text-slate-600'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        {/* ---------- center: compact logo (mobile only) ---------- */}
        <span className="justify-self-center lg:hidden">
          <Logo size="sm" />
        </span>

        {/* ---------- right: sign in / sign up ---------- */}
        <div className="flex shrink-0 items-center gap-1 sm:gap-2.5">
          <button
            type="button"
            onClick={onSignIn}
            className="rounded-full px-2 py-2 text-xs font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 sm:px-3.5 sm:text-sm"
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={onSignUp}
            className="brand-gradient brand-glow rounded-full px-3.5 py-2 text-xs font-semibold text-white transition hover:brightness-110 sm:px-5 sm:text-sm"
          >
            Sign Up
          </button>
        </div>
      </nav>

      {/* ---------- mobile dropdown menu ---------- */}
      {isMenuOpen && (
        <div className="border-t border-slate-200 bg-white shadow-lg shadow-slate-900/5 lg:hidden">
          <ul className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '')

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block rounded-xl px-3 py-2.5 text-sm transition-colors ${
                      isActive
                        ? 'brand-gradient-text bg-slate-50 font-bold'
                        : 'font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar