import { Star } from 'lucide-react'

const QUOTES = [
  {
    quote:
      'ZENVÍXO managed to provide successful support and development in a timely manner. The app is still in preparation for the beta launch, but it has been receiving a lot of positive feedback from the client. The team provided excellent workflow and communication throughout the project.',
    name: 'Jackie Dallas, Director',
    company: 'Hotset',
    initials: 'JD',
  },
  {
    quote:
      'The engagement met the expectations of the internal team. ZENVÍXO successfully worked within the robust scope, often going above and beyond to ensure client satisfaction. The team provides clients with a high level of support while still working quickly and creatively.',
    name: 'Hamed Al Zadjal, Digital Manager',
    company: 'Omanoil',
    initials: 'HA',
  },
  {
    quote:
      'ZENVÍXO produced clean code and the app got positive reviews. While there were staffing and language issues, the overall experience was positive. The assigned resources were attentive and fixed problems within a day.',
    name: 'Geoffrey Anderson, Co-Founder and CEO',
    company: 'Glimmer',
    initials: 'GA',
  },
  {
    quote:
      'ZENVÍXO successfully built the application, and the client is waiting for Appstore and Playstore approval. The project manager communicated primarily on Zoom and Slack, frequently providing updates. Above all, their genuine interest in the project and in-depth knowledge in this field were notable.',
    name: 'Cleitn Kimberly A. Dalius, Founder',
    company: 'Pauseitive',
    initials: 'CK',
  },
]

function Stars() {
  return (
    <div className="mt-2 flex gap-0.5 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="bg-ink py-24 border-t border-white/5">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
        <h2 className="font-display text-4xl font-extrabold text-white sm:text-5xl">
          Our clients simply love <span className="text-accent">what we do</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
          Proud to serve as the innovation partner for industry leaders who have experienced our
          expertise and excellence firsthand.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
          <div className="flex items-center gap-2 text-white">
            <Star size={18} fill="#f97316" strokeWidth={0} />
            <Star size={18} fill="#f97316" strokeWidth={0} />
            <Star size={18} fill="#f97316" strokeWidth={0} />
            <Star size={18} fill="#f97316" strokeWidth={0} />
            <Star size={18} fill="#f97316" strokeWidth={0} />
            <span className="ml-2 text-sm font-semibold text-white/60">52 Reviews</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <Star size={18} fill="#3b82f6" strokeWidth={0} />
            <Star size={18} fill="#3b82f6" strokeWidth={0} />
            <Star size={18} fill="#3b82f6" strokeWidth={0} />
            <Star size={18} fill="#3b82f6" strokeWidth={0} />
            <Star size={18} fill="#3b82f6" strokeWidth={0} />
            <span className="ml-2 text-sm font-semibold text-white/60">32 Reviews</span>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 grid max-w-5xl gap-6 px-6 lg:px-10">
        {QUOTES.map((q) => (
          <div
            key={q.name}
            className="rounded-3xl border border-white/5 bg-panel p-8 sm:p-10 shadow-lg shadow-black/25"
          >
            <p className="text-lg leading-relaxed text-white/85">&ldquo;{q.quote}&rdquo;</p>
            <div className="mt-8 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand font-bold text-white shadow-md shadow-brand/10">
                  {q.initials}
                </div>
                <div>
                  <p className="font-semibold text-white">{q.name}</p>
                  <Stars />
                </div>
              </div>
              <span className="text-sm font-semibold text-white/50">{q.company}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
