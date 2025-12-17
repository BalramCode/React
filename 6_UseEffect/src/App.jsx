// In React, Hooks are built-in functions that allow functional components to use features like state, lifecycle methods, and context. The most commonly used Hooks are useState() and useEffect().

// useEffect is a React Hook that allows us to perform side effects in functional components. It runs after the component renders, and is commonly used for tasks like:

// => Fetching data from APIs
// => Setting up subscriptions or timers
// => Manually changing the DOM
// => Cleaning up resources when the component unmounts


// Importing React and necessary hooks from 'react' library
import React, { useState } from "react";
import { useEffect } from "react";

// Functional Component called App
function App() {
  // Declare a state variable 'count' with initial value 0
  const [count, setCount] = useState(0);

  // Declare another state variable 'total' with initial value 1
  const [total, setTotal] = useState(1);

  // General syntax of useEffect:
  // useEffect(() => {
  //   // Side-effect logic here (e.g. fetch, subscriptions, DOM updates)
  //   return () => {
  //     // Cleanup logic here (e.g. clear timers, unsubscribe)
  //   }
  // }, [dependencies]) <-- This determines when the effect runs

  // Explanation of general terms:
  // first  => the main effect function (runs after render or update)
  // second => the cleanup function (runs before re-running the effect or on unmount)
  // third  => dependency array (controls when effect runs)

  // Event handler to increment 'count' when the "count" button is clicked
  function handleClick() {
    setCount(count + 1); // Increases 'count' by 1
  }

  // Event handler to increment 'total' when the "total" button is clicked
  function handleTotal() {
    setTotal(total + 1); // Increases 'total' by 1
  }

  // Below are variations of useEffect and when they run:
  // (These are commented out to avoid conflict)

  // Variation 1: Runs after **every render**
  // useEffect(() => {
  //   alert("I will run on each render");
  // });

  // Variation 2: Runs **only on first render** (componentDidMount)
  /*
  useEffect(() => {
    alert("I will run on only first render");
  }, []);
  */

  // Variation 3: Runs when **'count' changes**
  /*
  useEffect(() => {
    alert("I will run when count is updated");
  }, [count]);
  */

  // Variation 4: Runs when **'count' OR 'total' changes**
  /*
  useEffect(() => {
    alert("I will run when count and total is updated");
  }, [count, total]);
  */

  // Variation 5: Current active effect
  // This useEffect runs when 'count' is updated
  useEffect(() => {
    // This runs **after every change** in 'count'
    alert("count is updated");

    // Cleanup function:
    // This runs **before the next effect** (if count changes again),
    // OR when the component is **unmounted**
    return () => {
      alert("count is unmounted from UI");
    };
  }, [count]); // Dependency array: only runs when 'count' changes

  // JSX returned from the App component
  return (
    <div>
      {/* Button to increase 'count' */}
      <button onClick={handleClick}>count</button>
      {/* Display current value of 'count' */}
      <p>{count}</p>

      {/* Button to increase 'total' */}
      <button onClick={handleTotal}>total</button>
      {/* Display current value of 'total' */}
      <p>{total}</p>
    </div>
  );
}

// Export the App component so it can be used in other parts of the app
export default App;
