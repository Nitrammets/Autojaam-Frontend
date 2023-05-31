import React, { useState, useEffect, useContext } from "react";
import { FilterContext } from "@/Context/FilterContext";
import { CiCircleRemove } from "react-icons/ci";

function SelectedFilters() {
  const { brandFilter, bodyFilter, toggleBodyFilter, toggleBrandFilter } =
    useContext(FilterContext);

  function toTitleCase(str) {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return (
    <div className="text-white flex flex-row items-center w-5/6 h-12 mt-4">
      <div className="flex flex-row gap-2 w-full justify-center">
        {brandFilter.map((brand) => {
          if (brand !== "kõik") {
            return (
              <div
                key={brand}
                className="border rounded-lg p-2 flex flex-row items-center cursor-pointer"
                onClick={() => toggleBrandFilter(brand)}
              >
                {toTitleCase(brand)}
                <CiCircleRemove className="ml-2" />
              </div>
            );
          }
        })}
        {bodyFilter.map((body) => (
          <div
            key={body}
            className="border rounded-lg p-2 flex flex-row items-center cursor-pointer"
            onClick={() => toggleBodyFilter(body)}
          >
            {body.name}
            <CiCircleRemove className="ml-2" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectedFilters;
