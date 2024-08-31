
import React from "react";

const HeroBanner = () => {
  return (
    <div className="relative h-96">
      <img
        src="/images/picturetwo.png"
        alt="Pet Care Hero"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#f0f8ff] bg-opacity-70 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get in Touch  Today!
          </h1>
          <p className="text-xl md:text-2xl">
            Here to help you and your pet
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
