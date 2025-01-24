"use client";

import React, { useEffect } from "react";
import { preLoaderAnim } from "./animations";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
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