import React, { useState, useEffect } from "react";

function IconFilter({ imageComponent, title }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="flex flex-col justify-between h-42 group cursor-pointer"
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="h-[50px] flex flex-col justify-end">
        {React.cloneElement(imageComponent, {
          color: isHover ? "red" : "white",
          width: "24",
          height: "24",
        })}
      </div>
      <h3 className="text-white group-hover:text-aj-red text-center">
        {title}
      </h3>
    </div>
  );
}

export default IconFilter;
