import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

const STEPS = [
  {
    n: '01',
    title: 'Ideate',
    desc: 'We analyze your vision thoroughly to ensure the roadmap is perfectly aligned with your end goals, setting the stage for product success.',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=60',
  },
  {
    n: '02',
    title: 'Design',
    desc: 'Crafting a minimal viable product (MVP) that balances design with core functionality, maximizing value and user satisfaction.',
    img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=60',
  },
  {
    n: '03',
    title: 'Develop',
    desc: 'Developing end-to-end solutions with a focus on feasibility assessment, architecture design, and agile process to ensure rapid, high-quality delivery.',
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=60',
  },
  {
    n: '04',
    title: 'Test',
    desc: 'Ensuring your product meets the highest standards of quality and reliability through extensive QA and software testing across all user touch points.',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=60',
  },
  {
    n: '05',
    title: 'Launch',
    desc: 'Executing a successful product launch by developing tailored deployment plans, executing a smooth rollout, and offering dedicated post-launch assistance.',
    img: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=800&q=60',
  },
  {
    n: '06',
    title: 'Support',
    desc: 'Providing ongoing support and enhancements to ensure continued product success.',
    img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=60',
  },
]

export default function Process() {
  const [active, setActive] = useState(0)
  const refs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.index)
            setActive(idx)
          }
        })
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    )
    refs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="solutions" className="bg-ink py-24 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display max-w-lg text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Our product <span className="text-accent animate-pulse">development process</span>
          </h2>
          <a href="#solutions" className="flex items-center gap-2 text-base font-semibold text-white hover:text-accent transition-colors">
            View More <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="divide-y divide-white/10 border-l border-white/10">
            {STEPS.map((step, i) => (
              <div
                key={step.n}
                ref={(el) => (refs.current[i] = el)}
                data-index={i}
                className={`border-l-2 py-10 pl-8 transition-colors ${
                  active === i ? 'border-accent' : 'border-transparent'
                }`}
              >
                <p className="text-sm font-semibold text-white/50">{step.n}/06</p>
                <h3
                  className={`font-display mt-2 text-4xl font-extrabold transition-colors ${
                    active === i ? 'text-brand' : 'text-white'
                  }`}
                >
                  {step.title}
                </h3>
                <p className="mt-4 max-w-md text-white/60">{step.desc}</p>
              </div>
            ))}
          </div>

            <div className="sticky top-32 flex items-center justify-center">
              <div
                className="relative overflow-hidden bg-panel border-[6px] border-white/5 shadow-2xl shadow-black/60"
                style={{
                  width: '340px',
                  height: '420px',
                  borderRadius: '50% / 50%',
                }}
              >
                <img
                  src={STEPS[active].img}
                  alt={STEPS[active].title}
                  className="h-full w-full object-cover transition-opacity duration-500"
                />
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}
