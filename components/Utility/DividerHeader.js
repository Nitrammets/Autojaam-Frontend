import React from "react";

function DividerHeader({ title, wrap }) {
  return (
    <div className="flex flex-row w-full justify-center items-center my-8">
      <hr className="bg-black w-full h-[2px]"></hr>
      <h1 className="text-4xl mx-2 uppercase text-center whitespace-normal md:whitespace-nowrap">
        {title}
      </h1>

      <hr className="bg-black w-full h-[2px]"></hr>
    </div>
  );
}

export default DividerHeader;
