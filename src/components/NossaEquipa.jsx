import Image from 'next/image'

const people = [
    {
      name: 'Ruben Rodrigues',
      role: 'Cirurgião',
      imageUrl: "/assets/img/Ruben.png",
    },
    {
        name: 'Silk Silvano',
        role: 'Fisioterapeuta',
        imageUrl: "/assets/img/silk.jpg",
      },
      {
        name: 'André Lubambi',
        role: 'Médico',
        imageUrl: "/assets/img/luba.jpg",
      },
      {
        name: 'Petia Paulo',
        role: 'Enfermeira',
        imageUrl: "/assets/img/petia.jpg",
      },
    // More people...
  ]
  
  export default function NossaEquipa() {
    return (
      <div className="bg-[#21aeb8] py-24">
        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-xl">
            <h2 className="text-pretty text-3xl font-semibold tracking-tight text-black sm:text-4xl">
              Conheça a nossa equipa
            </h2>
            <p className="mt-6 text-lg/8 text-white">
              Somos o corpo do hospital Health First, equipa composta por cirurgiões, fisioterapeutas, enfermeiros, analistas e etc.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <Image alt='Nossa equipa' src={person.imageUrl}
                  width={64}
                  height={64}
                  className='rounded-full'/>
                  
                  <div>
                    <h3 className="text-base/7 font-semibold tracking-tight text-black">{person.name}</h3>
                    <p className="text-sm/6 font-semibold text-white">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  