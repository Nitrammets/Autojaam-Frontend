import React, { createContext, useState, useEffect } from "react";

export const FilterContext = createContext();

export function FilterProvider({ children, posts }) {
  const [brandFilter, setBrandFilter] = useState(["kõik"]);
  const [bodyFilter, setBodyFilter] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const [sortingOption, setSortingOption] = useState("name");
  const [sortingOrder, setSortingOrder] = useState("asc");

  const [visiblePosts, setVisiblePosts] = useState(6);
  const postsPerPage = 6;

  const loadMorePosts = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + postsPerPage);
  };

  const sortPosts = (posts) => {
    let sortedPosts;
    switch (sortingOption) {
      case "date":
        sortedPosts = [...posts].sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        );

        break;
      case "name":
        sortedPosts = [...posts].sort((a, b) => a.model.localeCompare(b.model));
        break;
      case "price":
        sortedPosts = [...posts].sort((a, b) => a.price - b.price);
        break;
      default:
        return posts;
    }

    if (sortingOrder === "desc") {
      sortedPosts.reverse();
    }

    return sortedPosts;
  };

  const toggleSortingOrder = () => {
    setSortingOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
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
        post.body
          .map(Number)
          .some((body) =>
            bodyFilter.map((filter) => filter.value).includes(body)
          )
      );
    }

    let sorted = sortPosts(filtered);
    setFilteredPosts(sorted);
    setVisiblePosts(() => 6);
  }, [brandFilter, bodyFilter, sortingOption, sortingOrder]);

  const toggleBodyFilter = (filterObj) => {
    setBodyFilter((prevFilter) => {
      const isFilterPresent = prevFilter.some(
        (filter) => filter.value === filterObj.value
      );

      if (isFilterPresent) {
        return prevFilter.filter((filter) => filter.value !== filterObj.value);
      } else {
        return [...prevFilter, filterObj];
      }
    });
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

  return (
    <FilterContext.Provider
      value={{
        filteredPosts,
        brandFilter,
        setBrandFilter,
        bodyFilter,
        toggleBodyFilter,
        toggleBrandFilter,
        sortingOption,
        setSortingOption,
        sortingOrder,
        toggleSortingOrder,
        sortPosts,
        setSortingOrder,
        visiblePosts,
        loadMorePosts,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
