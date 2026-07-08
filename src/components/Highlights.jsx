import { useState } from 'react'
import { Play } from 'lucide-react'

const TABS = ['Recommendations', 'Meet Up', 'Life at ZENVÍXO']

const VIDEOS = {
  Recommendations: [
    { title: 'John Boccuzzi spoke about the entrepreneurial...', person: 'John Boccuzzi, Jr', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=60', big: true },
    { title: 'ZENVÍXO Reviews & Testimonials Greg...', person: 'Greg Momeault', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=60' },
    { title: 'ZENVÍXO Reviews & Testimonials - Karen...', person: 'Karen Agresti', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=500&q=60' },
  ],
  'Meet Up': [
    { title: 'ZENVÍXO team at the annual tech meet up', person: 'ZENVÍXO Team', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=700&q=60', big: true },
    { title: 'Panel discussion on product strategy', person: 'ZENVÍXO Leadership', img: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&w=500&q=60' },
    { title: 'Networking night highlights', person: 'ZENVÍXO Team', img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=500&q=60' },
  ],
  'Life at ZENVÍXO': [
    { title: 'A day in the life of a ZENVÍXO Expert', person: 'ZENVÍXO Team', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=60', big: true },
    { title: 'Behind the scenes at our studio', person: 'ZENVÍXO Team', img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=500&q=60' },
    { title: 'Celebrating our 2026 milestones', person: 'ZENVÍXO Team', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=500&q=60' },
  ],
}

export default function Highlights() {
  const [tab, setTab] = useState('Recommendations')
  const videos = VIDEOS[tab]
  const [big, ...rest] = videos

  return (
    <section className="bg-ink py-24 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <h2 className="font-display mb-14 text-4xl font-extrabold text-white sm:text-5xl">
          Our <span className="text-accent animate-pulse">highlights</span>
        </h2>

        <div className="grid gap-10 lg:grid-cols-[220px_1fr_1fr]">
          <ul className="flex gap-2 overflow-x-auto lg:flex-col lg:gap-2 lg:overflow-visible">
            {TABS.map((t) => (
              <li key={t}>
                <button
                  onClick={() => setTab(t)}
                  className={`w-full whitespace-nowrap rounded-full px-5 py-3 text-left text-sm font-semibold transition-all ${
                    tab === t ? 'bg-brand/20 text-white' : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {t}
                </button>
              </li>
            ))}
          </ul>

          <div>
            <div className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-3xl bg-panel border border-white/5 shadow-lg shadow-black/25">
              <img src={big.img} alt={big.title} className="h-full w-full object-cover opacity-90" />
              <span className="absolute bottom-4 left-4 rounded bg-black/60 px-2 py-1 text-xs text-white">
                {big.person}
              </span>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 transition-transform group-hover:scale-110 shadow-lg shadow-black/30">
                  <Play size={22} className="text-brand" fill="currentColor" />
                </div>
              </div>
            </div>
            <p className="mt-4 text-lg font-medium text-white">{big.title}</p>
          </div>

          <div className="grid gap-6">
            {rest.map((v) => (
              <div key={v.title} className="flex flex-col">
                <div className="group relative aspect-video cursor-pointer overflow-hidden rounded-2xl bg-panel border border-white/5 shadow-md shadow-black/20">
                  <img src={v.img} alt={v.title} className="h-full w-full object-cover opacity-90" />
                  <span className="absolute bottom-3 left-3 text-xs text-white/80">{v.person}</span>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 transition-transform group-hover:scale-110 shadow-md shadow-black/30">
                      <Play size={16} className="text-brand" fill="currentColor" />
                    </div>
                  </div>
                </div>
                <p className="mt-3 font-medium text-white">{v.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
