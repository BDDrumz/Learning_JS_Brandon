import React, { createContext, useContext, useEffect, useState } from "react";
import { Sun } from "lucide-react";
import "../App.css";

// Creating the context
const ThemeContext = createContext();

// To create a custom hook that stores the context created above
export const useTheme = ()=> useContext(ThemeContext);
//  create the provider that will provide the different states in the app
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      setTheme(currentTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
