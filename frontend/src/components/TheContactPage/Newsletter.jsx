import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <div className="bg-[#40bfe0] text-white p-8 rounded-lg my-8">
      <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
      <p className="mb-4">
        Get the latest tips on pet care and exclusive offers!
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="form-field mb-2 sm:mb-0 sm:mr-2"
          required
        />
        <button
          type="submit"
          className="bg-white text-[#40bfe0] font-bold py-2 px-4 rounded hover:bg-gray-100 transition duration-300"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
