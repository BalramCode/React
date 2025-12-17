// useMemo is a React hook used to store the result of an expensive function and avoid re-running it on every render, unless specific values (dependencies) change.

// Importing necessary hooks from React
import { useMemo, useState } from 'react'

// Importing CSS for styling (assumed to be present in App.css)
import './App.css'

// Main functional component
function App() {
  // State variable to store count (used for incrementing)
  const [count, setCount] = useState(0);

  // State variable to store input value from the user (default is 0)
  const [input, setInput] = useState(0);

  // Function to handle count increment when the button is clicked
  function increment() {
    setCount(count+1); // Using functional update to avoid stale state
  }

  // Simulates a heavy/expensive computation
  function expensiveTask(n) {
    console.log("Inside expensive task"); // Logs whenever the function runs
    for (let i = 0; i <= 1000000000; i++) { } // Simulating time-consuming task
    return n + n; // Just returns double the input number
  }

  // useMemo is used to memoize the result of expensiveTask
  // This prevents the expensive function from re-running unless `input` changes
  const double = useMemo(() => {
    return expensiveTask(Number(input)); // Ensuring input is treated as a number
  }, [input]); // Dependency array: only re-run if input value changes

  // JSX returned by the component
  return (
    <div>
      {/* Button to increment the count */}
      <button onClick={increment}>Increment</button>

      {/* Displaying the current count */}
      <p>Count: {count}</p>

      {/* Displaying the result of expensiveTask (double of input) */}
      <p>Double: {double}</p>

      {/* Input field for the user to enter a number */}
      <input
        type="number"
        placeholder="Enter a number"
        value={input}
        onChange={(e) => setInput(e.target.value)} // Update input state on change
      />
    </div>
  );
}

// Exporting the App component as the default export
export default App;
