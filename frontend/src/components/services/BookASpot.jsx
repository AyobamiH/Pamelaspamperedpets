/**
 * This code was generated by Builder.io.
 */
import React from "react";
import { Link } from "react-router-dom";

const BookASpot = () => {
  return (
    <footer className="relative bg-[#b2dbff] flex justify-center w-full text-center text-gray-800 py-8">
     
      <div className="container  text-center px-4">
        <h2 className="text-2xl font-bold  mb-4">Book A Spot Now!</h2>
        <p className="mb-4">
          Here to help with all your pet care needs!
        </p>
        <div className="space-y-2">
          <p>
            Email:{" "}
            <a
              href="mailto:hellopamela@icloud.com"
              className="underline hover:text-white"
            >
              hellopamela@icloud.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+2063837255" className="hover:text-white">
              (206) 383-7255
            </a>
          </p>
        </div>
        <Link to="/booking-form">
        <button className="mt-4 bg-gray-800 text-gray-200 px-6 py-2 rounded-full hover:bg-[#1e778e] transition duration-300">
          Book Now!
        </button>
        </Link>
      </div>
    </footer>
  );
};

export default BookASpot;
