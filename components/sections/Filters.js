import React from "react";
import IconFilter from "./IconFilter";

const carBrands = [
  "KÕIK",
  "Alfa Romeo",
  "Audi",
  "Bentley",
  "BMW",
  "Citroen",
  "CUPRA",
  "Dacia",
  "Ford",
  "Honda",
  "Hyundai",
  "Jaguar",
  "Jeep",
  "Kia",
  "Land Rover",
  "Mazda",
  "Mercedes-benz",
  "Mini",
  "Nissan",
  "Opel",
  "Peugeot",
  "Polestar",
  "Porsche",
  "Renault",
  "SEAT",
  "Subaru",
  "Suzuki",
  "Škoda",
  "Tesla",
  "Toyota",
  "Volkswagen",
  "Volvo",
];

const IconFilters = [
  {
    name: "Maasturid",
    img: "/icons/Maasturid.svg",
  },
  {
    name: "Kupeed",
    img: "/icons/Kupeed.svg",
  },
  {
    name: "Luukpärad",
    img: "/icons/Luukparad.svg",
  },
  {
    name: "Sedaanid",
    img: "/icons/Sedaanid.svg",
  },
  {
    name: "SUV",
    img: "/icons/SUV.svg",
  },
  {
    name: "Universaalid",
    img: "/icons/Universaalid.svg",
  },
];

function Filters() {
  return (
    <div className="flex flex-col items-center ">
      <div className="flex justify-center flex-wrap w-2/4">
        {carBrands.map((brand, _) => (
          <div key={_}>
            <h3 className="mx-2 uppercase text-white text-lg hover:text-aj-red transition-all cursor-pointer">
              {brand}
            </h3>
          </div>
        ))}
      </div>
      <div className="w-3/4 flex flex-row flex-wrap justify-center items-center gap-3">
        {IconFilters.map((filter, _) => {
          return <IconFilter img={filter.img} title={filter.name} key={_} />;
        })}
      </div>
    </div>
  );
}

export default Filters;
