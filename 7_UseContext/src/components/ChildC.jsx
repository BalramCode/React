// Import React and the useContext hook
import React, { useContext } from "react";
// Import the context from App
import { ThemeContext } from "../App";

const ChildC = () => {
  // ✅ Access the current theme and the function to update it using useContext
  const { theme, setTheme } = useContext(ThemeContext);

  // ✅ Function to toggle the theme between "light" and "dark"
  const handleClick = () => {
    if (theme === "light") {
      setTheme("dark");  // If theme is light, switch to dark
    } else {
      setTheme("light"); // Otherwise, switch back to light
    }
  };

  return (
    <div>
      <h4>Child C</h4>
      {/* ✅ Button that changes the theme on click */}
      <button id="theme" onClick={handleClick}>
        Change Theme
      </button>
    </div>
  );
};

export default ChildC;
