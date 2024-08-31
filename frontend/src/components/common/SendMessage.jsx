import React from "react";

const SendMessageButton = ({ children, disabled, ...props }) => {
  return (
    <button
      {...props}
      disabled={disabled}
      className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${
        disabled ? "bg-gray-400 cursor-not-allowed" : "bg-[#3aa8c7] hover:bg-[#1a6b82] focus:ring-[#14c2f2] "
      }`}
    >
      {children}
    </button>
  );
};

export default SendMessageButton;
