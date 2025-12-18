// useRef is a hook in React that provides a way to persist values across renders and access DOM elements directly. It’s part of React's Hooks API and is commonly used for managing mutable values that don't trigger re-renders when changed.


// Importing React Hooks: useState (for reactive state) and useRef (for mutable values and DOM references)
import { useState, useRef } from 'react'
import './App.css'

function App() {
  // State variable 'count' initialized to 0 — this value changes will cause re-renders
  const [count, setCount] = useState(0)
  console.log("render")

  // Using useRef to store a mutable value that persists across renders but DOESN'T cause re-renders when changed
  // If we had used `let val = 1`, its value would reset to 1 on every render
  let val = useRef(0)

  // Function to handle button click for increment
  function handleIncrement() {
    // Update the mutable ref value (won't cause re-render)
    val.current = val.current + 1

    // Log the current value of the ref (use .current to access it)
    console.log("Value of val : ", val.current)

    // Update the state to trigger a re-render
    setCount(count + 1)
  }

  // Creating a ref to hold a reference to the button DOM element
  let btnref = useRef();

  // Function to change the color of the button directly via the DOM
  let isblue = false;
  function handleColor() {
    // Access the actual DOM node via btnref.current and set its background color
    btnref.current.style.backgroundColor = isblue ? "green" : "red";
    isblue = !isblue;
  }

  return (
    <div>
      {/* Button to increment count. It also has a ref attached so we can change its style later */}
      <button ref={btnref} onClick={handleIncrement}>increment</button>

      {/* Display the count state (this value updates when setCount is called) */}
      <p>Count : {count}</p>

      {/* Another button to change the color of the first button */}
      <button onClick={handleColor}>Change color</button>
    </div>
  )
}

export default App
