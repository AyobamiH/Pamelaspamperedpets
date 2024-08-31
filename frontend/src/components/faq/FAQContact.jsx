
import React from "react";

const FAQContact = () => {
  return (
    <div className="mt-12 text-center bg-[#b2dbff]">
      <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
      <p className="mb-4">
        Here to help! Reach out using any of the methods below:
      </p>
      <div className="space-y-2">
        <a
          href="mailto:hellopamela@icloud.com"
          className="text-gray-800 hover:underline block"
        >
          hellopamela@icloud.com
        </a>
        <a
          href="tel:+12063837255"
          className="text-gray-800 hover:underline block"
        >
          (206) 383-7255
        </a>
       
        <button className="bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-[#1e778e] hover:text-gray-100 transition duration-300">Contact Us</button>
      </div>
    </div>
  );
};

export default FAQContact;
