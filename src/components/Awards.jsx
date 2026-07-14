import { Star } from 'lucide-react'

const AWARDS = [
  { name: 'AppFirmsReview', rating: '4.0', color: 'text-rose-400', desc: 'Ranked among the top gaming app development companies of 2026' },
  { name: 'RightFirms', rating: '4.9', color: 'text-violet-400', desc: 'Ranked among the leading game development companies for 2026' },
  { name: 'GoodFirms', rating: '5.0', color: 'text-blue-400', desc: 'Acknowledged among the top software consulting experts 2026' },
  { name: 'DesignRush', rating: '4.9', color: 'text-cyan-400', desc: 'Recognized among top mobile app development companies 2026' },
  { name: 'Clutch', rating: '4.8', color: 'text-white', desc: 'Acclaimed as a top-rated software development company 2026' },
]

export default function Awards() {
  // Duplicate list to ensure seamless looping without whitespace gaps
  const doubledAwards = [...AWARDS, ...AWARDS, ...AWARDS]

  return (
    <section className="bg-ink py-24 border-t border-white/5 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <h2 className="font-display text-4xl font-extrabold text-white sm:text-5xl">
          Our awards and <span className="text-accent animate-pulse">recognitions</span>
        </h2>
        <p className="mt-6 max-w-xl text-lg text-white/60 mb-14">
          Recognized globally for our industry-leading development expertise and innovative
          solutions. Creating innovative, user-friendly, and life-changing products is what we do!
        </p>
      </div>

      {/* Marquee slider track container */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Shadow overlays for smooth fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />

        {/* Rolling track, stops on hover using Tailwind 'group' / standard custom CSS */}
        <div className="marquee-track flex gap-6 w-max">
          {doubledAwards.map((a, index) => (
            <div
              key={`${a.name}-${index}`}
              className="w-[280px] shrink-0 rounded-2xl bg-panel border border-white/5 p-6 shadow-md shadow-black/20 hover:border-brand/40 transition-colors duration-300"
            >
              <div className="flex items-center justify-between">
                <span className={`font-display text-lg font-extrabold ${a.color}`}>{a.name}</span>
                <span className="flex items-center gap-1 text-sm font-bold text-white">
                  <Star size={14} fill="#00ff3c" strokeWidth={0} />
                  {a.rating}
                </span>
              </div>
              <p className="mt-6 text-sm text-white/60">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Styles for Infinite Marquee & Pause on Hover */}
      <style>{`
        .marquee-track {
          animation: marquee 25s linear infinite;
        }
        /* Pause scroll on hover */
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            /* Scroll exactly 1/3 of total track width to complete one seamless loop */
            transform: translateX(calc(-33.333% - 8px));
          }
        }
      `}</style>
    </section>
  )
}
