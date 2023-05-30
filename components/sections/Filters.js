import React from "react";
import IconFilter from "./IconFilter";
import Tesla from "@/public/icons/Tesla";
import Variant from "@/public/icons/Variant";
import Suv from "@/public/icons/Suv";
import Sedan from "@/public/icons/Sedan";
import Maastur from "@/public/icons/Maastur";
import Hatch from "@/public/icons/Hatch";
import Coupe from "@/public/icons/Coupe";
import Other from "@/public/icons/Other";

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

 */

const IconFilters = [
  {
    name: "Luukpära",
    imageComponent: <Hatch />,
  },
  {
    name: "Sedaan",
    imageComponent: <Sedan />,
  },
  {
    name: "Universaal",
    imageComponent: <Variant />,
  },
  {
    name: "Kupee",
    imageComponent: <Coupe />,
  },
  {
    name: "SUV",
    imageComponent: <Suv />,
  },
  {
    name: "Maastur",
    imageComponent: <Maastur />,
  },
  {
    name: "EV",
    imageComponent: <Tesla />,
  },
  {
    name: "Muu",
    imageComponent: <Other />,
  },
];

function Filters() {
  return (
    <div className="flex flex-col items-center ">
      <div className="flex justify-center flex-wrap w-4/6">
        {carBrands.map((brand, _) => (
          <div key={_}>
            <h3 className="mx-2 uppercase text-white text-lg hover:text-aj-red transition-all cursor-pointer">
              {brand}
            </h3>
          </div>
        ))}
      </div>
      <div className="w-6/8 flex flex-row flex-wrap justify-center items-center mt-8">
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
