import { Linkedin, Twitter, Facebook, Youtube, Dribbble, Instagram } from 'lucide-react'
import { Link } from 'react-router-dom'
import logoInline from '../assets/Logo 25.png'

const COLUMNS = [
  { heading: 'Company', links: ['About Us', 'Testimonials', 'Process', 'Contact'] },
  { heading: 'Resources', links: ['Blog', 'Events', 'Press Release', 'Work'] },
  { heading: 'Services', links: ['Mobile App', 'Game Development', 'Blockchain Development', 'AI Development'] },
  { heading: 'Insights', links: ['University', 'Careers', 'Manifesto', 'Culture Book'] },
]
const socialLinks = [
  { Icon: Linkedin, href: "https://linkedin.com/in/yourprofile" },
  { Icon: Twitter, href: "https://x.com/Zenvixodigital" },
  { Icon: Facebook, href: "https://facebook.com/yourprofile" },
  { Icon: Instagram, href: "https://www.instagram.com/zenvixo.tech?igsh=amwycnI0dTdqNzA0" },
  { Icon: Dribbble, href: "https://dribbble.com/yourprofile" },
  { Icon: Youtube, href: "https://youtube.com/yourprofile" },
];
const LOCATIONS = [
  { city: 'USA', address: '1001 S MAIN STREET STE 600 Kalispell , MT 59901, USA' },
  { city: 'Karachi', address: 'A-32/B Bilal Town, Jamia Millia Road First Floor)' },
]

const LINK_MAPPINGS = {
  'about us': '#company',
  'testimonials': '#testimonials',
  'process': '#solutions',
  'contact': '#contact',
  'blog': '#company',
  'events': '#company',
  'press release': '#company',
  'work': '#work',
  'mobile app': '#services',
  'game development': '#services',
  'blockchain development': '#services',
  'ai development': '#services',
  'university': '#company',
  'careers': '#company',
  'manifesto': '#company',
  'culture book': '#company'
}

export default function Footer() {
  return (
    <footer className="bg-ink pt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <p className="mb-4 flex items-center gap-2 text-sm font-semibold text-brand">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" /> {col.heading}
              </p>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href={LINK_MAPPINGS[l.toLowerCase()] || '#top'} className="font-display text-lg font-semibold text-white/90 transition-colors hover:text-accent">
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
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" /> Locations
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
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Contact
            </p>
            <a href="tel:+447346 469948" className="block text-lg font-semibold text-white hover:text-accent transition-colors">+447346 4699488</a>
            <a href="https://x.com/Zenvixodigital" target="_blank" rel="noopener noreferrer" className="block text-lg font-semibold text-white/80 hover:text-accent transition-colors">https://x.com/Zenvixodigital</a>
          </div>

          <div className="flex flex-col items-center">
            <img src={logoInline} className="h-14 w-auto" alt="ZENVÍXO Logo" />
            <p className="mt-3 text-xs text-white/40">&copy; 2026 ZENVÍXO. All Rights Reserved</p>
          </div>

          <div className="flex gap-4">
            {socialLinks.map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank" // Naye tab me kholne ke liye
                rel="noopener noreferrer" // Security ke liye
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-brand hover:scale-110 shadow-lg shadow-brand/10"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-xs text-white/40 sm:flex-row">
          <span>Content protected by DMCA.com</span>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-white">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
