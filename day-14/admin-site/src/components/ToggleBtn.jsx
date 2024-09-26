import { useTheme } from "./Theme";



const ToggleButton = () => {
    const { theme, toggleTheme } = useTheme();
  
    return (
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "dark" : "light"}
      </button>
    );
  };
  
  export default ToggleButton;
  