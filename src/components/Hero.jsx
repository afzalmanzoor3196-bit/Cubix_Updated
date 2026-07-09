import { ArrowUpRight } from 'lucide-react'

const LOGOS = ['DreamWorks', 'SONY', 'TISSOT', 'CONVERSE', 'Ray-Ban', 'WFMU', 'Michaels', 'Walmart', 'POLITICO']

export default function Hero() {
  // Duplicate array multiple times for a seamless loop inside the marquee
  const doubledLogos = [...LOGOS, ...LOGOS, ...LOGOS]

  return (
    <section id="top" className="relative overflow-hidden bg-ink min-h-screen flex flex-col">
      {/* background image + overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=60"
          alt="Team working in a modern office"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/80 to-ink" />
      </div>

      <div className="relative flex-1 flex flex-col justify-center mx-auto w-full max-w-7xl px-6 lg:px-10" style={{ paddingTop: '80px' }}>
        <h1 className="font-display max-w-4xl text-[42px] font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-[68px]">
          We are a <span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">Software Development</span> Company
        </h1>

        <p className="mt-6 max-w-xl text-lg text-white/70 leading-relaxed">
          We are your trusted development partner with just one goal in focus — to build products
          that generate a lasting, profitable impact.
        </p>

        <div className="mt-12 flex items-center gap-6">
          <a
            href="#contact"
            className="group flex h-36 w-36 flex-col items-center justify-center rounded-full bg-brand text-center text-sm font-semibold leading-tight text-white transition-all hover:scale-105 hover:bg-brand-light hover:shadow-xl hover:shadow-brand/30"
          >
            <ArrowUpRight size={22} className="mb-1 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            Let&apos;s Discuss
            <br />
            Your Idea
          </a>
        </div>
      </div>

      {/* client logo strip - Auto Scrolling Marquee */}
      <div className="relative border-t border-white/10 bg-black/40 py-6 overflow-hidden">
        {/* Soft edge blur overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-black/50 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-black/50 to-transparent" />

        {/* Marquee loop container */}
        <div className="marquee-client-track flex gap-16 w-max">
          {doubledLogos.map((logo, index) => (
            <span
              key={`${logo}-${index}`}
              className="text-lg font-bold tracking-tight text-white/70 sm:text-xl transition-colors hover:text-accent duration-200"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>

      {/* Custom marquee stylesheet */}
      <style>{`
        .marquee-client-track {
          animation: marqueeClient 30s linear infinite;
        }
        .marquee-client-track:hover {
          animation-play-state: paused;
        }
        @keyframes marqueeClient {
          0% {
            transform: translateX(0);
          }
          100% {
            /* Offset matches exactly one iteration of LOGOS array */
            transform: translateX(calc(-33.333% - 18px));
          }
        }
      `}</style>
    </section>
  )
}
