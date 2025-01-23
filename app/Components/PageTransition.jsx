"use client";

// components/PageTransition.js
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const PageTransition = ({ onAnimationComplete }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ x: '0%' });
  }, [controls]);

  return (
    <motion.div
      initial={{ x: '-100%' }}
      animate={controls}
      exit={{ x: '100%' }}
      transition={{ duration: 0.7 }}
      onAnimationComplete={onAnimationComplete}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      
    >
        <img
            src="/logo.png" // Replace with your logo path
            alt="Logo"
            style={{
            width: "800px", // Adjust the size of the logo
            height: "auto",
            }}
        />
  </motion.div>
  );
};

export default PageTransition;


