// useContext : It is a React Hook that allows us to access and use values from a Context in a functional component without having to pass props manually through every level of the component tree (a process known as "prop drilling").



// Import necessary hooks and components
import { createContext, useState } from "react"
import ChildA from "./components/ChildA"; // Import the top-level child component
import "./App.css" // Import your CSS (for styling)

// ✅ Step 1: Create the context object
const ThemeContext = createContext(); // This creates a context for theme values

function App() {
  // ✅ useState hook to manage the current theme (either 'light' or 'dark')
  const [theme, setTheme] = useState("light");

  return (
    <>
      {/* ✅ Step 2 & 3: Wrap the part of the component tree that needs access to the context */}
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {/* ✅ Inline style based on the current theme value */}
        <div id='container' style={{ backgroundColor: theme === "light" ? "red" : "green" }}>
          {/* ✅ ChildA and all its children will now have access to ThemeContext */}
          <ChildA />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

// Export the component and context so it can be used in child components
export default App;
export { ThemeContext };
