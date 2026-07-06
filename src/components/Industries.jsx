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
    <section id="industries" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <h2 className="font-display text-4xl font-extrabold text-ink sm:text-5xl">
          Industries we serve
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-neutral-600">
          With a wide range of services and proven experience across major industries, we
          understand your challenges and deliver tailored solutions that overcome them and drive
          meaningful impact.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.title}
              className="rounded-3xl border border-neutral-200 p-8 transition-colors hover:border-brand"
            >
              <h3 className="font-display text-2xl font-extrabold text-ink">{ind.title}</h3>
              <p className="mt-4 text-neutral-600">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
