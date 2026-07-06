import { Star } from 'lucide-react'

const AWARDS = [
  { name: 'AppFirmsReview', rating: '4.0', color: 'text-rose-400', desc: 'Ranked among the top gaming app development companies of 2026' },
  { name: 'RightFirms', rating: '4.9', color: 'text-violet-400', desc: 'Ranked among the leading game development companies for 2026' },
  { name: 'GoodFirms', rating: '5.0', color: 'text-blue-400', desc: 'Acknowledged among the top software consulting experts 2026' },
  { name: 'DesignRush', rating: '4.9', color: 'text-cyan-400', desc: 'Recognized among top mobile app development companies 2026' },
  { name: 'Clutch', rating: '4.8', color: 'text-white', desc: 'Acclaimed as a top-rated software development company 2026' },
]

export default function Awards() {
  return (
    <section className="bg-ink py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <h2 className="font-display text-4xl font-extrabold text-white sm:text-5xl">
          Our awards and <span className="text-brand">recognitions</span>
        </h2>
        <p className="mt-6 max-w-xl text-lg text-white/60">
          Recognized globally for our industry-leading development expertise and innovative
          solutions. Creating innovative, user-friendly, and life-changing products is what we do!
        </p>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {AWARDS.map((a) => (
            <div key={a.name} className="rounded-2xl bg-panel p-6">
              <div className="flex items-center justify-between">
                <span className={`font-display text-lg font-extrabold ${a.color}`}>{a.name}</span>
                <span className="flex items-center gap-1 text-sm font-bold text-white">
                  <Star size={14} fill="#3ee073" strokeWidth={0} />
                  {a.rating}
                </span>
              </div>
              <p className="mt-6 text-sm text-white/60">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
