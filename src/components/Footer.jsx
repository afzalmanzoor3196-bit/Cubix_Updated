import { Linkedin, Twitter, Facebook, Youtube, Dribbble } from 'lucide-react'

const COLUMNS = [
  { heading: 'Company', links: ['About Us', 'Testimonials', 'Process', 'Contact'] },
  { heading: 'Resources', links: ['Blog', 'Events', 'Press Release', 'Work'] },
  { heading: 'Services', links: ['Mobile App', 'Game Development', 'Blockchain Development', 'AI Development'] },
  { heading: 'Insights', links: ['University', 'Careers', 'Manifesto', 'Culture Book'] },
]

const LOCATIONS = [
  { city: 'West Palm Beach', address: '560 Village Blvd., Suite 120 #3, West Palm Beach, FL-33409, United States' },
  { city: 'Manchester', address: '73 Meadway, Bramhall Stockport, Manchester - SK7 1LX, United Kingdom' },
  { city: 'Dubai', address: 'IFZA Properties, DSO-IFZA, Dubai Silicon Oasis, DXB-75900, United Arab Emirates' },
  { city: 'Karachi', address: '54C, Kashmir Road, Block 2, PECHS, Karachi, Sindh - 75400, Pakistan' },
]

export default function Footer() {
  return (
    <footer className="bg-ink pt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <p className="mb-4 flex items-center gap-2 text-sm font-semibold text-brand">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" /> {col.heading}
              </p>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#top" className="font-display text-lg font-semibold text-white/90 hover:text-brand">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-white/10 pt-10">
          <p className="mb-6 flex items-center gap-2 text-sm font-semibold text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" /> Locations
          </p>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {LOCATIONS.map((loc) => (
              <div key={loc.city}>
                <h4 className="font-display text-xl font-bold text-white">{loc.city}</h4>
                <p className="mt-2 text-sm text-white/50">{loc.address}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-8 border-t border-white/10 py-10 sm:flex-row">
          <div>
            <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-brand">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" /> Contact
            </p>
            <a href="tel:8669782220" className="block text-lg font-semibold text-white">866-978-2220</a>
            <a href="mailto:info@cubix.co" className="block text-lg font-semibold text-white/80">info@cubix.co</a>
          </div>

          <div className="text-center">
            <p className="font-display text-2xl font-extrabold text-white">
              cubix<span className="text-brand">.</span>
            </p>
            <p className="mt-2 text-xs text-white/40">&copy; 2026 Cubix. All Rights Reserved</p>
          </div>

          <div className="flex gap-4">
            {[Linkedin, Twitter, Facebook, Dribbble, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#top"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand hover:text-ink"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-xs text-white/40 sm:flex-row">
          <span>Content protected by DMCA.com</span>
          <div className="flex gap-6">
            <a href="#top" className="hover:text-white">Privacy Policy</a>
            <a href="#top" className="hover:text-white">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
