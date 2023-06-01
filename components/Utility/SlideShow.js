import React, { useState, useEffect } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

function SlideShow({ images }) {
  const [slideHeight, setSlideHeight] = useState(null);

  useEffect(() => {
    const calculateSlideHeight = () => {
      const imagePromises = images.map((image) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = image;
          img.onload = () => {
            resolve(img.height);
          };
        });
      });

      Promise.all(imagePromises).then((heights) => {
        const maxHeight = Math.max(...heights);
        setSlideHeight(maxHeight);
      });
    };

    calculateSlideHeight();
  }, [images]);

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
  console.log(slideHeight);
  return (
    <>
      <style></style>
      <Slide {...properties} transitionDuration="300" indicators={indicators}>
        {images.map((image, index) => (
          <div className="each-slide" key={index}>
            <div
              className="slide-content lg:h-[1000px]"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        ))}
      </Slide>
    </>
  );
}

export default SlideShow;
