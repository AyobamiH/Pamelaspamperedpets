
import React from "react";

import { HashLink as Link } from "react-router-hash-link";
const Hero = () => {
  return (
    <section className="bg-gray-800 text-white text-center py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mt-4 mb-4">
          Caring for Your Pets, Like Family
        </h1>
        <p className="text-xl mb-8">
          Dedicated to providing exceptional care and love for your furry
          friends.
        </p>
        <Link smooth to='#team' className="bg-[#40bfe0] text-white px-6 py-3 rounded-full hover:bg-[#3aa8c7] transition duration-300">
          Discover My Story
        </Link>
      </div>
    </section>
  );
};

export default Hero;
