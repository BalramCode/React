// State : It is a built-in object that allows a component to store dynamic data and control how the component behaves. Unlike normal variables, when the state changes, React automatically re-renders the component and updates the user interface.
// Hooks : These are special functions that allow the use of state and other React features in functional components.

import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>The value is {count}</p>
      <button onClick={()=>{setCount(count+1)}}>Click Here to increse count</button>
    </>
  )
}

export default App
