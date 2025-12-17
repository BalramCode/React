// useCallback is a React Hook that returns a memoized version of a callback function. It only re-creates the function if one of the dependencies has changed.

// This is especially useful for preventing unnecessary re-renders of child components that rely on reference equality (like components wrapped in React.memo).

// App.js
import { useState, useCallback } from 'react';
import './App.css';
import Child from './components/Child';

function App() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  // ✅ useCallback with functional update
  const handleIncrement = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setOtherState(prev => prev + 1)}>
        Re-render Parent
      </button>
      <Child buttonName="Click Me" handleIncrement={handleIncrement} />
    </div>
  );
}

export default App;
