import React from "react";
import AccordionTab from "./AccordionTab";

const featured = [
  {
    title: "Audi A3",
    img: "/Rectangle_5.jpg",
  },
  {
    title: "Audi A3",
    img: "/Rectangle_6.jpg",
  },
  {
    title: "Audi A3",
    img: "/Rectangle_7.jpg",
  },
];

function Accordion() {
  return (
    <div className="mt-2 w-full">
      <hr></hr>
      <div className="my-[4px] w-full h-[350px] flex overflow-hidden margin-y-[50px]">
        {featured.map((post, _) => {
          return <AccordionTab img={post.img} title={post.title} key={_} />;
        })}
      </div>
      <hr></hr>
    </div>
  );
}

export default Accordion;
