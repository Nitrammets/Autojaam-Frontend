import React, { useState, useEffect } from "react";

function IconFilter({ imageComponent, title }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="flex flex-col justify-between group cursor-pointer"
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="h-[50px] flex flex-col justify-end">
        {React.cloneElement(imageComponent, {
          color: isHover ? "red" : "white",
          with: "100px",
          height: "100px",
        })}
      </div>
      <h3 className="text-white group-hover:text-aj-red text-center transition-all duration-200 uppercase">
        {title}
      </h3>
    </div>
  );
}

export default IconFilter;
