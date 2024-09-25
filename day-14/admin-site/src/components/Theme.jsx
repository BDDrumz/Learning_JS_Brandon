import React, { createContext, useContext, useState } from "react";
import { Sun } from "lucide-react";
const ThemeContext = createContext();

function Theme() {
  const [darkMode, setDarkMode] = useState(false);

  function ThemeToggle() {
  const {darkMode, setDarkMode } = useContext(ThemeContext);
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <div>
        <ThemeToggle />
        <button
          onClick={() => setDarkMode(darkMode === "light" ? "dark" : "light")}
        >
          <Sun />
        </button>
      </div>
    </ThemeContext.Provider>
  );
}

export default Theme;
