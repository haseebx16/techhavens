"use client";

import React, { createContext, useContext, useState } from "react";

const PreLoaderContext = createContext();

export const PreLoaderProvider = ({ children }) => {
  const [hasLoaded, setHasLoaded] = useState(false);

  return (
    <PreLoaderContext.Provider value={{ hasLoaded, setHasLoaded }}>
      {children}
    </PreLoaderContext.Provider>
  );
};

export const usePreLoader = () => {
  const context = useContext(PreLoaderContext);
  if (!context) {
    throw new Error("usePreLoader must be used within a PreLoaderProvider");
  }
  return context;
};
