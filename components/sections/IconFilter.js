import React from "react";

function IconFilter({ img, title }) {
  return (
    <div className="flex flex-col justify-between h-42 group cursor-pointer">
      <img src={img} alt={title} className="w-32 h-32 " />
      <h3 className="text-white group-hover:text-aj-red">{title}</h3>
      <style jsx>{``}</style>
    </div>
  );
}

export default IconFilter;
