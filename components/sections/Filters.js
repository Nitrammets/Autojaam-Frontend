import React from "react";
import IconFilter from "./IconFilter";
import Tesla from "@/public/Tesla";

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

/*   {
    name: "Maasturid",
    img: "/icons/icon-maastur.svg",
  },
  {
    name: "Kupeed",
    img: "/icons/icon-kupee.svg",
  },
  {
    name: "Luukpärad",
    img: "/icons/icon-hatch.svg",
  },
  {
    name: "Sedaanid",
    img: "/icons/icon-sedan.svg",
  },
  {
    name: "SUV",
    img: "/icons/icon-suv.svg",
  },
  {
    name: "Universaalid",
    img: "/icons/icon-variant.svg",
  }, */

const IconFilters = [
  {
    name: "EV",
    imageComponent: <Tesla />,
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
      <div className="w-3/4 flex flex-row flex-wrap justify-center items-center gap-6">
        {IconFilters.map((filter, _) => {
          return (
            <IconFilter
              imageComponent={filter.imageComponent}
              title={filter.name}
              key={_}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Filters;
