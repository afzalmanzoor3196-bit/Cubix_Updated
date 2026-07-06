const STATS = [
  { value: '1,300+', label: 'Completed Projects' },
  { value: '350+', label: 'Talented Cubixians' },
  { value: '600+', label: 'Satisfied Clients' },
]

export default function Stats() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <h2 className="font-display text-4xl font-extrabold text-ink sm:text-5xl">
          Our journey of building success
        </h2>
        <p className="mt-6 max-w-xl text-lg text-neutral-600">
          We are a full-cycle product development company that combines creative thinking with
          technical expertise to create user-centric products that solve real problems and drive
          business growth.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="font-display text-5xl font-extrabold text-ink">{s.value}</p>
              <p className="mt-2 text-lg text-neutral-500">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
