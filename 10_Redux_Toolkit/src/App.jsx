// React Redux Toolkit : It is a modern way to manage global state in React apps. It simplifies Redux code, makes our app cleaner, and provides tools for easier and faster development.



// TERMINOLOGIES :
// 1. Store : The store is the central container that holds the entire state of a React-Redux application. It is created using configureStore() in Redux Toolkit.

// 2. Slice : A slice is a portion of the Redux store that manages state and logic for a specific feature. It is created with createSlice() and contains the state, reducers, and actions.

// 3. Reducer : A reducer is a pure function that takes the current state and an action, then returns the new state. In Redux Toolkit, reducers are defined inside a slice.

// 4. Action : An action is a plain JavaScript object that describes what change should happen in the store. In Redux Toolkit, actions are automatically generated from slice reducers.

// 5. Dispatch : Dispatch is a method used to send actions to the Redux store. When an action is dispatched, the corresponding reducer updates the state.

// 6. Selector : A selector is a function used to extract or read a specific part of the state from the store. In React, it is commonly used with the useSelector() hook.




// Importing React's useState hook to handle local component state
import { useState } from 'react';

// Importing useDispatch and useSelector from react-redux
// - useDispatch: to dispatch actions (like increment, decrement, etc.)
// - useSelector: to read data (state) from the Redux store
import { useDispatch, useSelector } from 'react-redux';

// Importing CSS styles for the component
import './App.css';

// Importing actions from the counter slice
import { decrement, increment, reset, incrementByAmount } from './features/counter/counterSlice';

function App() {
  // Local state to hold the value entered in the input field
  const [amount, setAmount] = useState(0);

  // useSelector lets us access the value from the Redux store
  // state.counter.value = path to the counter value in the store
  const count = useSelector((state) => state.counter.value);

  // useDispatch gives us a method to send actions to the Redux store
  const dispatch = useDispatch();

  // Function to dispatch the increment action
  function handleIncrement() {
    dispatch(increment());
  }

  // Function to dispatch the decrement action
  function handleDecrement() {
    dispatch(decrement());
  }

  // Function to dispatch the reset action
  function handleReset() {
    dispatch(reset());
  }

  // Function to dispatch the incrementByAmount action
  // Converts input value from string to number before dispatching
  function handleAmount() {
    dispatch(incrementByAmount(Number(amount)));
  }

  return (
    <div>
      {/* Button to increase count */}
      <button onClick={handleIncrement}>+</button>

      {/* Display the current count value from Redux store */}
      <p>Count: {count}</p>

      {/* Button to decrease count */}
      <button onClick={handleDecrement}>-</button><br /><br />

      {/* Button to reset count to 0 */}
      <button onClick={handleReset}>Reset</button><br />

      {/* Input field to enter a number to increment by */}
      <input
        type="Number"
        value={amount}
        placeholder="Enter Amount : "
        onChange={(e) => setAmount(e.target.value)}
      /> <br />

      {/* Button to increase count by entered amount */}
      <button onClick={handleAmount}>Inc by Amount</button><br />
    </div>
  );
}

export default App;
