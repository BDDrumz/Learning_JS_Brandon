import { Moon, MoonIcon, Pencil, Sun } from "lucide-react";
import { useTheme } from "./Theme";



const ToggleButton = () => {
    const { theme, toggleTheme } = useTheme();
  
    return (
      <button onClick={toggleTheme}>
        { theme === "light"? <MoonIcon/>: <Sun/>}
      </button>
    );
  };
  
  export default ToggleButton;
  