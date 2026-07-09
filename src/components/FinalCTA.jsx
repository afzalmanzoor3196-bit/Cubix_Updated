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
        threshold: 0.1, // Trigger as soon as 10% of section enters viewport
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-brand/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-accent/5 blur-[80px] pointer-events-none" />

      {/* Outer wrapper applying smooth slide and fade entry styles */}
      <div 
        className="relative mx-auto max-w-4xl px-6 text-center lg:px-10 transition-all duration-[1000ms] cubic-bezier(0.16, 1, 0.3, 1)"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0px)' : 'translateY(50px)',
          filter: isVisible ? 'blur(0px)' : 'blur(4px)',
        }}
      >
        <p className="font-display text-sm font-bold uppercase tracking-widest text-accent">
          Pull the Trigger!
        </p>
        <h2 className="font-display mt-4 text-4xl font-extrabold leading-tight text-white sm:text-6xl">
          Let&apos;s bring your
          <br />
          <span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">vision to life</span>
        </h2>
        <a
          href="mailto:info@zenvixo.com"
          className="mt-10 inline-block rounded-full bg-brand hover:bg-brand-light px-8 py-4 text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-brand/30 shadow shadow-brand/10 border border-brand/20"
        >
          Get Started
        </a>
      </div>
    </section>
  )
}
