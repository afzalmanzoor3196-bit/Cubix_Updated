const INDUSTRIES = [
  {
    title: 'Automotive',
    desc: 'Enhance your vehicle management operations and boost customer satisfaction with tailored custom API solutions designed for your business needs.',
  },
  {
    title: 'Finance',
    desc: 'Get scalable custom solutions that enhance operational efficiency, boost data security, and streamline your financial services seamlessly.',
  },
  {
    title: 'Real Estate',
    desc: 'Our custom real estate solutions simplify property management and sales, streamline operations, and enhance customer experience effectively.',
  },
  {
    title: 'Hospitality',
    desc: 'Get user-friendly hospitality solutions that enhance guest experiences, boost bookings, and streamline operations effortlessly.',
  },
  {
    title: 'Education',
    desc: 'Revolutionize ed-tech with innovative solutions that increase student engagement and simplify institutional operations.',
  },
  {
    title: 'Healthcare',
    desc: 'Our healthcare solutions streamline operations, reduce administrative tasks, and improve patient outcomes securely.',
  },
]

export default function Industries() {
  return (
    <section id="industries" className="bg-ink py-24 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <h2 className="font-display text-4xl font-extrabold text-white sm:text-5xl">
          Industries we serve
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-white/60">
          With a wide range of services and proven experience across major industries, we
          understand your challenges and deliver tailored solutions that overcome them and drive
          meaningful impact.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.title}
              className="rounded-3xl bg-panel border border-white/5 p-8 transition-all duration-300 hover:border-accent hover:-translate-y-1 shadow-lg shadow-black/25"
            >
              <h3 className="font-display text-2xl font-extrabold text-white">{ind.title}</h3>
              <p className="mt-4 text-white/60">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
