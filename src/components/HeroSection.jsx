import React from "react";

const HeroSection = () => {
  return (
    <div className="w-[100%]">
      <div className="flex flex-col items-center px-auto py-[5%] justify-center ">
        <h2 className="text-gray-700 font-['nantes'] font-[400] text-xl sm:text-2xl leading-8">
          All European brands
        </h2>
        <div className="text-center mt-2 text-xs sm:text-lg">
          Shop independent brands from around the world at
        </div>
        <div className="text-center mt-2 text-xs sm:text-lg">
          wholesale prices.
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
