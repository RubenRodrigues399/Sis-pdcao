
const stats = [
    { id: 1, name: 'Medicos', value: '4' },
    { id: 2, name: 'Enfermeiros', value: '5' },
    { id: 3, name: 'Técnicos de Imagiologia', value: '2' },
    { id: 4, name: 'Técnicos de Laboratório', value: '1' },
  ]
  
  export default function Stats() {
    return (
      <div className="bg-white h-10 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="flex gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base/7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  