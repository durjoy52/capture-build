import { motion } from 'framer-motion';
import React, { useState } from "react";

const Toggle = ({ children ,title}) => {
  const [faqToggle, setFaqToggle] = useState(true);
  return (
    <motion.div layout className='question' onClick={() => setFaqToggle(!faqToggle)}>
        <motion.h4 layout>{title}</motion.h4>
        {faqToggle && children}
    <div className="faq-line"></div>
    </motion.div>
  );
};

export default Toggle;
