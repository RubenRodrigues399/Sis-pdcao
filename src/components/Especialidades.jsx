export default function Especialidade({ label, imgSrc, altText }) {
    return (
      <div className="group">
        <label className="ml-4 sm:ml-8 lg:ml-16">{label}</label>
        <img
          alt={altText}
          src={imgSrc}
          width={158}
          height={48}
          className="col-span-2 mt-2 max-h-40 w-full object-contain lg:col-span-1 transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </div>
    );
  }