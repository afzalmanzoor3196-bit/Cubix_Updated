import { ArrowUpRight } from 'lucide-react'

const POSTS = [
  {
    tag: 'Artificial Intelligence',
    date: '26 May, 2026',
    title: 'How to Implement Generative AI in Mobile Apps: A 6-Step Engineering Guide',
    img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=700&q=60',
  },
  {
    tag: 'Software Development',
    date: '22 May, 2026',
    title: 'Top 10 Healthcare Software Development Companies in the USA',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=60',
  },
  {
    tag: 'Artificial Intelligence',
    date: '20 May, 2026',
    title: 'AI Chatbot Development: How to Build a Custom AI Assistant',
    img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=700&q=60',
  },
]

export default function Blogs() {
  return (
    <section id="company" className="bg-ink py-24 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-4xl font-extrabold text-white sm:text-5xl">Our blogs</h2>
          <a href="#company" className="flex items-center gap-2 text-base font-semibold text-white/90 hover:text-accent transition-colors">
            View All <ArrowUpRight size={18} />
          </a>
        </div>

        {/* Using items-start to keep staggered top-alignment clean */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 items-start">
          {POSTS.map((p, index) => {
            // Apply different image sizes/ratios to match Image 1
            let aspectClass = 'aspect-[1.5/1]' // Left card default (Large & Broad)
            if (index === 1) {
              aspectClass = 'aspect-[1.8/1] w-full max-w-[90%]' // Center card (Smaller/Shorter width and height)
            } else if (index === 2) {
              aspectClass = 'aspect-[1.6/1]' // Right card (Medium/Standard)
            }

            return (
              <article key={p.title} className="group cursor-pointer">
                <div className={`${aspectClass} overflow-hidden rounded-3xl bg-panel border border-white/5 shadow-md shadow-black/25`}>
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Tag and date layout mapping Image 1 */}
                {index === 1 ? (
                  // Middle card tag layout split with dots/separate alignment
                  <div className="mt-5 flex justify-between items-start text-sm font-semibold text-accent max-w-[90%]">
                    <span className="w-1/2 leading-snug">{p.tag}</span>
                    <span className="text-white/40 flex items-center gap-1.5">
                      <span className="text-[10px]">&middot;</span> {p.date}
                    </span>
                  </div>
                ) : (
                  // Standard inline layout for left and right cards
                  <p className="mt-5 text-sm font-semibold text-accent">
                    {p.tag} <span className="mx-1.5 text-white/30">&middot;</span> {p.date}
                  </p>
                )}

                <h3 className={`mt-3 text-xl font-bold leading-snug text-white group-hover:text-brand transition-colors ${index === 1 ? 'max-w-[90%]' : ''}`}>
                  {p.title}
                </h3>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
