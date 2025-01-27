"use client";

import React, { useEffect } from "react";
import { preLoaderAnim } from "./animations";
import { usePreLoader } from "./PreLoaderContext";

const PreLoader = () => {
  const { hasLoaded, setHasLoaded } = usePreLoader();

  useEffect(() => {
    if (!hasLoaded) {
      preLoaderAnim(); // Trigger animation
      const timer = setTimeout(() => {
        setHasLoaded(true); // Mark as loaded
      }, 3000); // Adjust timing as needed

      return () => clearTimeout(timer);
    }
  }, [hasLoaded, setHasLoaded]);

  if (hasLoaded) return null;

  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Welcome to&nbsp;</span>
        <span className="text-cards">Tech</span>
        <span>Haven.</span>
      </div>
    </div>
  );
};

export default PreLoader;
