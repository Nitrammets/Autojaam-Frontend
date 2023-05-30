import React from "react";
import Image from "next/image";

function AccordionTab({ img, title }) {
  return (
    <>
      <div
        className="tab bg-cover bg-center group "
        style={{
          backgroundImage: `url(${img})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Hover Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-90 pointer-events-none transition-all"></div>
        <div className="w-full flex justify-center h-full items-center">
          <h2 className="uppercase transition-all text-white text-5xl font-roboto font-semibold  opacity-0 group-hover:opacity-100 z-10">
            {title}
          </h2>
        </div>
      </div>
    </>
  );
}
export default AccordionTab;
