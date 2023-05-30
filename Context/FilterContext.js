import React, { createContext, useState, useEffect } from "react";

export const FilterContext = createContext();

export function FilterProvider({ children, posts }) {
  const [brandFilter, setBrandFilter] = useState("kõik");
  const [bodyFilter, setBodyFilter] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const toggleBodyFilter = (value) => {
    setBodyFilter((prevFilter) =>
      prevFilter.includes(value)
        ? prevFilter.filter((filter) => filter !== value)
        : [...prevFilter, value]
    );
  };

  useEffect(() => {
    let filtered = posts;

    if (brandFilter !== "kõik") {
      filtered = filtered.filter(
        (post) => post.manufacturer.toLowerCase() === brandFilter
      );
    }

    if (bodyFilter.length > 0) {
      filtered = filtered.filter((post) =>
        post.body.map(Number).some((body) => bodyFilter.includes(body))
      );
    }

    setFilteredPosts(filtered);
  }, [brandFilter, bodyFilter]);

  return (
    <FilterContext.Provider
      value={{
        filteredPosts,
        brandFilter,
        setBrandFilter,
        bodyFilter,
        toggleBodyFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
