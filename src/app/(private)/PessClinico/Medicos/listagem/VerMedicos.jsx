import NavBar from "../../../Componentes/NavBar";
import ruben from "../../../assets/img/Ruben.png";
import silk from "../../../assets/img/silk.jpg";
import luba from "../../../assets/img/luba.jpg";
import petia from "../../../assets/img/petia.jpg";
import Medicos from "../../../Componentes/Medicos";

const medicos = [
  { label: "Ruben", imgSrc: ruben, altText: "Ruben" },
  { label: "Silk", imgSrc: silk, altText: "Silk" },
  { label: "Lubambi", imgSrc: luba, altText: "Lubambi" },
  { label: "Petia", imgSrc: petia, altText: "Petia" },
];

export default function VerMedicos() {
  return (
    <>
      <NavBar />
      <div className="bg-blue-50 py-24 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center -mt-10 text-lg/8 font-semibold text-black">
            Médicos
          </h2>
          {/* <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <div>
              <label className="ml-16">Ruben Rodrigues</label>
              <img
                alt="Ruben"
                src={ruben}
                width={158}
                height={48}
                className="col-span-2 mt-2 max-h-40 w-full border border-[#21aeb8] rounded-3xl object-contain lg:col-span-1"
              />
            </div>

            <div>
              <label className="ml-16">Silk Silvano</label>
              <img
                alt="Silk"
                src={silk}
                width={158}
                height={48}
                className="col-span-2 mt-2 max-h-40 w-full border border-[#21aeb8] rounded-3xl object-contain lg:col-span-1"
              />
            </div>

            <div>
              <label className="ml-16">André Lubambi</label>
              <img
                alt="Andre"
                src={luba}
                width={158}
                height={48}
                className="col-span-2 mt-2 max-h-40 w-full border border-[#21aeb8] rounded-3xl object-contain lg:col-span-1"
              />
            </div>

            <div>
              <label className="ml-16">Peta Paulo</label>
              <img
                alt="SkinCare"
                src={petia}
                width={158}
                height={48}
                className="col-span-2 mt-2 max-h-40 w-full border border-[#21aeb8] rounded-3xl object-contain lg:col-span-1"
              />
            </div>

            <div>
              <label className="ml-16">Mamografia</label>
              <img
                alt="Mamografia"
                src={ruben}
                width={158}
                height={48}
                className="col-span-2 mt-2 max-h-40 w-full border border-[#21aeb8] rounded-3xl object-contain lg:col-span-1"
              />
            </div>
          </div> */}

          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {medicos.map((especialidade) => (
              <Medicos
                key={especialidade.label}
                label={especialidade.label}
                imgSrc={especialidade.imgSrc}
                altText={especialidade.altText}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
