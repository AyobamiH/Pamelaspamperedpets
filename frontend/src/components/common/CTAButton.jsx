
import React from 'react';
import { motion } from 'framer-motion';

const CTAButton = ({ onApplyNowClick, children }) => {
  return (
    <motion.button
      onClick={onApplyNowClick}
      className="px-6 py-2 text-[#ffffff] bg-[#2ecc71] rounded-md hover:bg-[#27ae60] transition-colors duration-200"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

export default CTAButton;
