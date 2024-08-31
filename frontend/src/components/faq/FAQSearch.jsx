
import React, { useState } from "react";

const FAQSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSearch} className="mb-8">
      <div className="relative">
        <input
          type="text"
          placeholder="Search FAQs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="text-gray-800 w-full px-4 py-2 mt-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#40bfe0]"
        />
        <button
          type="submit"
          className="absolute right-2  mt-2 top-1/2 transform -translate-y-1/2 bg-[#40bfe0] text-gray-800 px-4 py-1 rounded-full"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default FAQSearch;
