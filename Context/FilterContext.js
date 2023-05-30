import React, { createContext, useState, useEffect } from "react";

export const FilterContext = createContext();

export function FilterProvider({ children, posts }) {
  const [brandFilter, setBrandFilter] = useState(["kõik"]);
  const [bodyFilter, setBodyFilter] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const toggleBodyFilter = (value) => {
    setBodyFilter((prevFilter) =>
      prevFilter.includes(value)
        ? prevFilter.filter((filter) => filter !== value)
        : [...prevFilter, value]
    );
  };

  const toggleBrandFilter = (brand) => {
    setBrandFilter((prevFilter) => {
      if (brand === "kõik") {
        return ["kõik"];
      }

      if (prevFilter.includes(brand)) {
        const newFilter = prevFilter.filter((filter) => filter !== brand);
        if (newFilter.length === 0 || newFilter.includes("kõik")) {
          return ["kõik"];
        }
        return newFilter;
      }

      const newFilter = [
        ...prevFilter.filter((filter) => filter !== "kõik"),
        brand,
      ];
      return newFilter;
    });
  };

  useEffect(() => {
    let filtered = posts;

    if (brandFilter.length > 0 && !brandFilter.includes("kõik")) {
      filtered = filtered.filter((post) =>
        brandFilter.includes(post.manufacturer.toLowerCase())
      );
    }

    if (bodyFilter.length > 0) {
      filtered = filtered.filter((post) =>
        post.body.map(Number).some((body) => bodyFilter.includes(body))
      );
    }

    setFilteredPosts(filtered);
  }, [brandFilter, bodyFilter]);

  const removeBrandFilter = (brand) => {
    setBrandFilter((prevFilter) => {
      return prevFilter.filter((filter) => filter !== brand);
    });
  };

  const removeBodyFilter = (value) => {
    setBodyFilter((prevFilter) => {
      return prevFilter.filter((filter) => filter !== value);
    });
  };

  return (
    <FilterContext.Provider
      value={{
        filteredPosts,
        brandFilter,
        setBrandFilter,
        bodyFilter,
        toggleBodyFilter,
        toggleBrandFilter,
        removeBrandFilter,
        removeBodyFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
