import { ArrowUpRight } from 'lucide-react'

const STORIES = [
  {
    tag: 'goobr',
    title: 'A Social Networking for Pets and Pet Owners',
    desc: 'A trailblazing social networking app dedicated to pets and their owners.',
    img: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=900&q=60',
  },
  {
    tag: 'Tulsa International Airport',
    title: 'Official Website and App for Tulsa Airport',
    desc: 'A prominent name in aviation, Tulsa Airport sought ZENVÍXO’s expertise to enhance its digital presence.',
    img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=60',
  },
  {
    tag: 'PartyShark',
    title: 'A Social Networking and Event Management App',
    desc: 'A lively platform connecting people through shared events and celebrations.',
    img: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=900&q=60',
  },
  {
    tag: 'WAGMI',
    title: 'A Next-Gen Web3 Gaming Universe',
    desc: 'An immersive gaming experience built on blockchain-powered ownership.',
    img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=60',
  },
]

export default function SuccessStories() {
  return (
    <section id="work" className="bg-ink py-24 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-4xl font-extrabold text-white sm:text-5xl">
            Our success stories
          </h2>
          <a
            href="#work"
            className="flex items-center gap-2 text-base font-semibold text-white/90 hover:text-accent transition-colors"
          >
            More case studies <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {STORIES.map((s) => (
            <article key={s.title} className="group">
              <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-panel border border-white/5">
                <img
                  src={s.img}
                  alt={s.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="mt-6 text-xs font-bold uppercase tracking-wider text-accent">
                {s.tag}
              </p>
              <h3 className="mt-2 text-2xl font-bold text-white group-hover:text-brand transition-colors">{s.title}</h3>
              <p className="mt-2 max-w-md text-white/60">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
