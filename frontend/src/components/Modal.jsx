import React from "react";
import { XIcon } from "@heroicons/react/outline";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <button
          className="absolute top-4 right-4 text-[#40bfe0] hover:text-gray-700"
          onClick={onClose}
        >
          <XIcon className="w-6 h-6" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
