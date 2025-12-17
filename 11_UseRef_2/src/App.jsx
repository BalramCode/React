// Importing React hooks: useState (for reactive state), useRef (for storing a mutable timer ID)
import { useRef, useState } from 'react'
import './App.css'

function App() {
  // State to keep track of elapsed seconds
  const [second, setSecond] = useState(0);

  // useRef to store the interval ID (this value won't reset on re-render and won't cause re-renders when changed)
  let secRef = useRef(null)

  // Starts the timer
  function handleStart() {
    // Store the interval ID in the ref so we can stop it later
    secRef.current = setInterval(() => {
      // Update the seconds count every 100 milliseconds using functional update form
      // This ensures it uses the latest state even if closure is stale
      setSecond(second => second + 1);
    }, 100);
  }

  // Stops the timer
  function handleStop() {
    // Clear the interval using the ID stored in secRef
    clearInterval(secRef.current);

    // Reset the ref to null for safety
    secRef.current = null;
  }

  // Resets the timer to 0 and stops it
  function handleReset() {
    // Stop the timer
    handleStop();

    // Reset the seconds state
    setSecond(0);
  }

  return (
    <div>
      {/* Display the current seconds */}
      <p><h1> Second : {second}</h1></p><br />

      {/* Button to start the timer */}
      <button onClick={handleStart}>Start</button>

      {/* Button to stop the timer */}
      <button onClick={handleStop}>Stop</button>

      {/* Button to reset the timer */}
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default App
