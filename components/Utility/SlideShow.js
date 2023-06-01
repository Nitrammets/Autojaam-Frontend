import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

function SlideShow({ images }) {
  const buttonStyle = {
    width: "30px",
    background: "none",
    border: "0px",
  };

  const properties = {
    prevArrow: (
      <button style={{ ...buttonStyle }}>
        <BsChevronLeft color="white" size={"25"} />
      </button>
    ),
    nextArrow: (
      <button style={{ ...buttonStyle }}>
        <BsChevronRight color="white" size={"25"} />
      </button>
    ),
  };

  const indicators = (index) => (
    <div
      className={`indicator w-2 h-2 rounded-full bg-gray-300 mx-[2px]`}
    ></div>
  );

  return (
    <Slide {...properties} transitionDuration="300" indicators={indicators}>
      {images.map((image, index) => (
        <div className="each-slide" key={index}>
          <div
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              height: "810px",
            }}
          ></div>
        </div>
      ))}
    </Slide>
  );
}

export default SlideShow;
