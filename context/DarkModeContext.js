"use client";
import { createContext, useContext } from "react";
import useDarkMode from "@/hooks/useDarkMode";

// Create Dark Mode Context
const DarkModeContext = createContext();

// Dark Mode Provider
export const DarkModeProvider = ({ children }) => {
  const { isDark, toggleTheme } = useDarkMode(); // Use the custom hook

  return (
    <DarkModeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Custom hook to access Dark Mode context
export const useDarkModeContext = () => useContext(DarkModeContext);
