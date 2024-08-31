
import React from "react";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <section className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Reach Out </h2>
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
        <Link to="/contact">
        <button className="mt-4 bg-[#40bfe0] text-white px-6 py-2 rounded-full hover:bg-[#1e778e] hover:text-gray-100 transition duration-300">
          Contact
        </button>
        </Link>
      </div>
    </section>
  );
};

export default ContactCTA;
