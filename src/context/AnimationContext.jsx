// src/context/AnimationContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';

const AnimationContext = createContext({ animationsEnabled: false });

export const AnimationProvider = ({ children }) => {
  const [animationsEnabled, setAnimationsEnabled] = useState(false);
  
  useEffect(() => {
    // Short delay to ensure hydration is complete
    const timer = setTimeout(() => {
      setAnimationsEnabled(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <AnimationContext.Provider value={{ animationsEnabled }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimation = () => useContext(AnimationContext);