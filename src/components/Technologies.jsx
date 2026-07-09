import { useState } from 'react'

// Map technologies to their respective Devicon slug name or custom class
const TECH_ICONS = {
  // Mobile Apps
  'Swift': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg',
  'UI Kit': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg',
  'RxSwift': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg',
  'Combine': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg',
  'MVVM': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xcode/xcode-original.svg',
  'Alamofire': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg',
  'Core Data': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xcode/xcode-original.svg',
  
  'Kotlin': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg',
  'RxJava': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
  'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
  'Retrofit': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg',
  'Jetpack': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg',
  
  // Web Platforms
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
  'Vue': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
  'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
  
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
  'Django': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg',
  'Laravel': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
  'GraphQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg',
  
  // Cross Platforms
  'Flutter': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg',
  'React Native': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  'Xamarin': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xamarin/xamarin-original.svg',
  'Ionic': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ionic/ionic-original.svg',
  
  // Games
  'Unity': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg',
  'Unreal Engine': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unrealengine/unrealengine-original.svg',
  'Cocos2d': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg',
  'Photon': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  
  // Database
  'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
  'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
  'MSSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg',
  'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
  'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg',
  'Redis': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg',
  
  // Cloud & DevOps
  'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  'Azure': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg',
  'Google Cloud': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg',
  'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
  'Kubernetes': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg',
  'Jenkins': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-line.svg',
  'Terraform': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg',
}

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
                <h3 className="font-display mb-5 text-2xl font-extrabold text-white">{group}</h3>
                <div className="flex flex-wrap gap-4">
                  {items.map((item) => {
                    const iconUrl = TECH_ICONS[item]
                    return (
                      <span
                        key={item}
                        className="flex items-center gap-3 rounded-full bg-panel border border-white/10 px-5 py-3 text-sm font-medium text-white/90 hover:border-brand/40 transition-colors shadow-sm"
                      >
                        {iconUrl ? (
                          <img 
                            src={iconUrl} 
                            alt={item} 
                            className={`h-5 w-5 object-contain ${
                              // Clean rendering filters for white backgrounds where needed or handling dark logos
                              item === 'Next.js' || item === 'Unreal Engine' ? 'invert brightness-200' : ''
                            }`}
                          />
                        ) : (
                          // Fallback dot if no logo found
                          <span className="h-2 w-2 rounded-full bg-accent" />
                        )}
                        <span>{item}</span>
                      </span>
                    )
                  })}
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
