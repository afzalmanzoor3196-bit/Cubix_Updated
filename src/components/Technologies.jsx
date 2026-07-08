import { useState } from 'react'

const TABS = {
  'Mobile Apps': {
    iOS: ['Swift', 'UI Kit', 'RxSwift', 'Combine', 'MVVM', 'Alamofire', 'Core Data'],
    Android: ['Kotlin', 'MVVM', 'RxJava', 'Java', 'Retrofit', 'Jetpack'],
  },
  'Web Platforms': {
    Frontend: ['React', 'Next.js', 'Vue', 'TypeScript', 'Tailwind CSS'],
    Backend: ['Node.js', 'Django', 'Laravel', 'GraphQL'],
  },
  'Cross Platforms': {
    Frameworks: ['Flutter', 'React Native', 'Xamarin', 'Ionic'],
  },
  Games: {
    Engines: ['Unity', 'Unreal Engine', 'Cocos2d', 'Photon'],
  },
  Database: {
    SQL: ['PostgreSQL', 'MySQL', 'MSSQL'],
    NoSQL: ['MongoDB', 'Firebase', 'Redis'],
  },
  'Cloud & DevOps': {
    Cloud: ['AWS', 'Azure', 'Google Cloud'],
    DevOps: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform'],
  },
}

export default function Technologies() {
  const [tab, setTab] = useState('Mobile Apps')

  return (
    <section id="services" className="bg-ink py-24 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <h2 className="font-display text-4xl font-extrabold text-white sm:text-5xl">
          Technologies we use
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-white/60">
          Hire from our pool of 350+ specialized experts in web, mobile, and software
          engineering, specializing in the latest technologies and frameworks, ready to scale
          your development teams effortlessly.
        </p>

        <div className="mt-14 grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-[220px_1fr]">
          <ul className="flex gap-2 overflow-x-auto lg:flex-col lg:gap-1 lg:overflow-visible">
            {Object.keys(TABS).map((t) => (
              <li key={t}>
                <button
                  onClick={() => setTab(t)}
                  className={`w-full whitespace-nowrap rounded-xl px-4 py-3 text-left text-[15px] font-semibold transition-all ${
                    tab === t ? 'bg-brand/20 text-white' : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {t}
                </button>
              </li>
            ))}
          </ul>

          <div className="space-y-10 border-l border-white/10 pl-0 lg:pl-10">
            {Object.entries(TABS[tab]).map(([group, items]) => (
              <div key={group}>
                <h3 className="font-display mb-4 text-2xl font-extrabold text-white">{group}</h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-panel border border-white/5 px-5 py-2.5 text-sm font-medium text-white/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl bg-panel border border-white/5 px-8 py-6 sm:flex-row">
          <p className="font-display text-xl font-bold text-white sm:text-2xl">
            Create a software development <span className="text-accent font-extrabold">Team</span> with us
          </p>
          <a
            href="#contact"
            className="rounded-full bg-brand hover:bg-brand-light px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-105 shadow-lg shadow-brand/20"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  )
}
