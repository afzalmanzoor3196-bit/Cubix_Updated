import { useEffect, useRef, useState } from 'react'

export default function FinalCTA() {
  const containerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      id="contact" 
      ref={containerRef} 
      className="bg-ink py-28 border-t border-white/5 relative overflow-hidden"
    >
      {/* Subtle radial glow background behind text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      {/* Outer wrapper applying smooth slide and fade entry styles */}
      <div 
        className="relative mx-auto max-w-4xl px-6 transition-all duration-[1000ms] cubic-bezier(0.16, 1, 0.3, 1)"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0px)' : 'translateY(50px)',
          filter: isVisible ? 'blur(0px)' : 'blur(4px)',
        }}
      >
        <div className="text-center max-w-2xl mx-auto flex flex-col items-center">
          <p className="font-display text-sm font-bold uppercase tracking-widest text-accent">
            Pull the Trigger!
          </p>
          <h2 className="mt-4 text-5xl font-black tracking-tight leading-tight text-white sm:text-6xl">
            Let&apos;s bring your
            <br />
            <span className="text-accent">vision to life</span>
          </h2>
          <a 
            href="#contact" 
            className="mt-8 rounded-full bg-white px-8 py-3 text-sm font-bold text-black transition-all hover:bg-zinc-100 hover:scale-[1.03] shadow-lg shadow-white/10"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  )
}
