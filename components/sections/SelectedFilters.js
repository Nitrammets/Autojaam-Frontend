import React, { useState, useEffect, useContext } from "react";
import { FilterContext } from "@/Context/FilterContext";
import { CiCircleRemove } from "react-icons/ci";

function SelectedFilters() {
  const { brandFilter, removeBrandFilter, bodyFilter, removeBodyFilter } =
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
      <h2 className="mr-4">Aktiveeritud filtrid:</h2>
      <div className="flex flex-row gap-2">
        {brandFilter.map((brand) => {
          if (brand !== "kõik") {
            return (
              <div
                key={brand}
                className="border rounded-lg p-2 flex flex-row items-center cursor-pointer"
                onClick={() => removeBrandFilter(brand)}
              >
                {toTitleCase(brand)}
                <CiCircleRemove className="ml-2" />
              </div>
            );
          }
        })}
        {bodyFilter.map((body) => (
          <div key={body}>
            {body}
            <button onClick={() => removeBodyFilter(body)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectedFilters;
