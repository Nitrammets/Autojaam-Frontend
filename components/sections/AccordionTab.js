import React from "react";
import Image from "next/image";
import Link from "next/link";

function AccordionTab({ img, title, slug }) {
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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-90 pointer-events-none transition-all duration-500"></div>
        <Link href={`/posts/${slug}`}>
          <div className="w-full flex justify-center h-full items-end">
            <h2 className="uppercase transition-all duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0 text-white text-2xl  lg:text-5xl font-roboto font-semibold opacity-0 group-hover:opacity-100 z-10 mb-5">
              {title}
            </h2>
          </div>
        </Link>
      </div>
    </>
  );
}
export default AccordionTab;
