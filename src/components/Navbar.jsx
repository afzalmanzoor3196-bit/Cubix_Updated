import { useEffect, useState } from 'react'
import { Phone, Menu, X } from 'lucide-react'
import logoInline from '../assets/logo-inline.svg'

const LINKS = ['Services', 'Industries', 'Solutions', 'Work', 'Company', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-ink/90 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'
        }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#top" className="flex items-center">
          <img src={logoInline} className="h-9 w-auto" alt="ZENVÍXO" />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-[15px] font-medium text-white/80 transition-colors hover:text-accent"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="tel:8669782220"
            className="flex items-center gap-2 text-[15px] font-medium text-white/90 hover:text-white"
          >
            <Phone size={16} strokeWidth={2.2} />
            866-978-2220
          </a>
          <a
            href="#contact"
            className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brand-light hover:scale-[1.03] shadow-lg shadow-brand/20"
          >
            Get in Touch
          </a>
        </div>

        <button
          className="text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-ink px-6 py-6 lg:hidden">
          <ul className="flex flex-col gap-4">
            {LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-white/85 hover:text-accent"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="mt-6 block rounded-full bg-brand px-5 py-3 text-center text-sm font-semibold text-white hover:bg-brand-light"
          >
            Get in Touch
          </a>
        </div>
      )}
    </header>
  )
}
