import React, { useState, useEffect, useContext } from "react";
import IconFilter from "./IconFilter";
import { FilterContext } from "@/Context/FilterContext";
import SelectedFilters from "./SelectedFilters";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { BiCalendar, BiEuro } from "react-icons/bi";
import { MdAbc } from "react-icons/md";
import { RiMoneyEuroBoxLine } from "react-icons/ri";

/* Icon types. */
import Variant from "@/public/icons/Variant";
import Suv from "@/public/icons/Suv";
import Sedan from "@/public/icons/Sedan";
import Maastur from "@/public/icons/Maastur";
import Hatch from "@/public/icons/Hatch";
import Coupe from "@/public/icons/Coupe";
import Other from "@/public/icons/Other";

function Filters({ posts, filterPosts, setFilteredPosts }) {
  const {
    brandFilter,
    setBrandFilter,
    bodyFilter,
    toggleBodyFilter,
    toggleBrandFilter,
    setSortingOption,
    setSortingOrder,
    sortingOption,
    sortingOrder,
    toggleSortingOrder,
  } = useContext(FilterContext);

  return (
    <div className="flex flex-col items-center w-11/12 lg:w-5/6 mt-4">
      <div className="flex justify-center flex-wrap w-full lg:w-5/6">
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
        <div className="flex flex-row flex-grow justify-center w-full sm:w-auto">
          <div className="h-18 border border-white mx-4 hidden md:block"></div>
          <div className="flex flex-col items-center pr-4">
            <span
              onClick={() => setSortingOption("price")}
              className={`${
                sortingOption == "price" ? "text-aj-red" : "text-white"
              } hover:text-aj-red  transition-all`}
            >
              <BiEuro size={"24"} />
            </span>
            <span
              onClick={() => setSortingOption("name")}
              className={`${
                sortingOption == "name" ? "text-aj-red" : "text-white"
              } hover:text-aj-red  transition-all`}
            >
              <MdAbc size={"36"} />
            </span>
            <span
              onClick={() => setSortingOption("date")}
              className={`${
                sortingOption == "date" ? "text-aj-red" : "text-white"
              } hover:text-aj-red  transition-all`}
            >
              <BiCalendar size={"24"} />
            </span>
          </div>
          <div
            onClick={() => toggleSortingOrder()}
            className="flex flex-col justify-center items-center cursor-pointer "
          >
            <div className="flex flex-row items-center justify-center">
              <span
                className={`${
                  sortingOrder == "asc" ? "text-aj-red" : "text-white"
                } flex justify-center items-center `}
              >
                <BsArrowUp size={"50"} />
              </span>
              <span
                className={`${
                  sortingOrder == "desc" ? "text-aj-red" : "text-white"
                } flex justify-center items-center -translate-x-4 `}
              >
                <BsArrowDown size={"50"} />
              </span>
            </div>
            <h1 className="text-white -ml-[15px] select-none">
              {sortingOrder == "desc" ? "Kahanevas" : "Kasvavas"}
            </h1>
          </div>
        </div>
      </div>
      <SelectedFilters />
    </div>
  );
}

export default Filters;

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
