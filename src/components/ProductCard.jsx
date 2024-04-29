import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled, RxDot } from "react-icons/rx";
import { FaStar } from "react-icons/fa";

function ProductCard({ name, images, ratings }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1400px] h-80 py-6 w-full m-auto relative group border">
      <div
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
        className="w-full h-[75%] bg-center bg-cover duration-500"
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-2 text-2xl  p-2 bg-white/40 text-black cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-2 text-2xl  p-2 bg-white/40 text-black cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div>
        <div className="flex top-4 justify-center py-2">
          {images.map((image, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              {slideIndex === currentIndex ? <RxDotFilled /> : <RxDot />}
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center">
          <div>{name}</div>
          <div className="flex items-center ">
            <FaStar size={12} /> <div className="px-2">{ratings}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
