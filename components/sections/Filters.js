import React, { useState, useEffect, useContext } from "react";
import IconFilter from "./IconFilter";
import { FilterContext } from "@/Context/FilterContext";
import SelectedFilters from "./SelectedFilters";

/* Icon types. */
import Variant from "@/public/icons/Variant";
import Suv from "@/public/icons/Suv";
import Sedan from "@/public/icons/Sedan";
import Maastur from "@/public/icons/Maastur";
import Hatch from "@/public/icons/Hatch";
import Coupe from "@/public/icons/Coupe";
import Other from "@/public/icons/Other";

const carBrands = [
  {
    name: "KÕIK",
    value: "kõik",
  },
  {
    name: "Alfa Romeo",
    value: "alfa romeo",
  },
  {
    name: "Audi",
    value: "audi",
  },
  {
    name: "Bentley",
    value: "bentley",
  },
  {
    name: "BMW",
    value: "bmw",
  },
  {
    name: "Citroen",
    value: "citroen",
  },
  {
    name: "CUPRA",
    value: "cupra",
  },
  {
    name: "Dacia",
    value: "dacia",
  },
  {
    name: "Ford",
    value: "ford",
  },
  {
    name: "Honda",
    value: "honda",
  },
  {
    name: "Hyundai",
    value: "hyundai",
  },
  {
    name: "Jaguar",
    value: "jaguar",
  },
  {
    name: "Jeep",
    value: "jeep",
  },
  {
    name: "Kia",
    value: "kia",
  },
  {
    name: "Land Rover",
    value: "land rover",
  },
  {
    name: "Mazda",
    value: "mazda",
  },
  {
    name: "Mercedes-benz",
    value: "mercedes-benz",
  },
  {
    name: "Mini",
    value: "mini",
  },
  {
    name: "Nissan",
    value: "nissan",
  },
  {
    name: "Opel",
    value: "opel",
  },
  {
    name: "Peugeot",
    value: "peugeot",
  },
  {
    name: "Polestar",
    value: "polestar",
  },
  {
    name: "Porsche",
    value: "porsche",
  },
  {
    name: "Renault",
    value: "renault",
  },
  {
    name: "SEAT",
    value: "seat",
  },
  {
    name: "Subaru",
    value: "subaru",
  },
  {
    name: "Suzuki",
    value: "suzuki",
  },
  {
    name: "Škoda",
    value: "škoda",
  },
  {
    name: "Tesla",
    value: "tesla",
  },
  {
    name: "Toyota",
    value: "toyota",
  },
  {
    name: "Volkswagen",
    value: "volkswagen",
  },
  {
    name: "Volvo",
    value: "volvo",
  },
];

const IconFilters = [
  {
    name: "Luukpära",
    imageComponent: <Hatch />,
    value: 0,
  },
  {
    name: "Sedaan",
    imageComponent: <Sedan />,
    value: 1,
  },
  {
    name: "Universaal",
    imageComponent: <Variant />,
    value: 2,
  },
  {
    name: "Kupee",
    imageComponent: <Coupe />,
    value: 3,
  },
  {
    name: "SUV",
    imageComponent: <Suv />,
    value: 4,
  },
  {
    name: "Maastur",
    imageComponent: <Maastur />,
    value: 5,
  },
  {
    name: "Muu",
    imageComponent: <Other />,
    value: 6,
  },
];

function Filters({ posts, filterPosts, setFilteredPosts }) {
  const {
    brandFilter,
    setBrandFilter,
    bodyFilter,
    toggleBodyFilter,
    toggleBrandFilter,
  } = useContext(FilterContext);

  return (
    <div className="flex flex-col items-center w-5/6">
      <div className="flex justify-center flex-wrap w-5/6">
        {carBrands.map((brand, _) => (
          <div key={_} onClick={() => toggleBrandFilter(brand.value)}>
            <h3
              className={`mx-2 uppercase text-lg hover:text-aj-red transition-all cursor-pointer 
      ${brandFilter.includes(brand.value) ? "text-aj-red" : "text-white"}`}
            >
              {brand.name}
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
              isActive={bodyFilter
                .map((filter) => filter.value)
                .includes(filter.value)}
              toggleBodyFilter={toggleBodyFilter}
              filter={filter}
            />
          );
        })}
      </div>
      <SelectedFilters />
    </div>
  );
}

export default Filters;
