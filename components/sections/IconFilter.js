import React, { useState, useEffect } from "react";

function IconFilter({
  imageComponent,
  title,
  isActive,
  toggleBodyFilter,
  value,
}) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="flex flex-col justify-between group cursor-pointer"
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => toggleBodyFilter(value)}
    >
      <div className="h-[50px] flex flex-col justify-end">
        {React.cloneElement(imageComponent, {
          color: isHover || isActive ? "red" : "white",
          with: "100px",
          height: "100px",
        })}
      </div>
      <h3
        className={` text-center transition-all duration-200 uppercase ${
          isActive ? "text-aj-red" : "text-white"
        } group-hover:text-aj-red`}
      >
        {title}
      </h3>
    </div>
  );
}

export default IconFilter;
