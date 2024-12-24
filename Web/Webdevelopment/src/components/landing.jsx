import React from 'react';
import { motion } from 'framer-motion';

const Landing = () => {
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="text-center p-5">
      <motion.h3
        className="text-2xl font-bold"
        initial="hidden"
        animate="visible"
        variants={headingVariants}
        transition={{ duration: 0.5 }}
      >
        Effortless CI/CD Automation for Developers
      </motion.h3>
      <motion.p
        className="mt-4 text-lg"
        initial="hidden"
        animate="visible"
        variants={paragraphVariants}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Transform the way you build and deploy software with our intuitive tool that simplifies CI/CD workflows.
      </motion.p>
    </div>
  );
};

export default Landing;