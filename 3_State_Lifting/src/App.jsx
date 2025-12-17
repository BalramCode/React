// State Lifting : State lifting means moving the state from a child component to the nearest common parent component so that multiple child components can share the same data. Instead of keeping duplicate states in different components, the parent holds the state and passes it down as props. This ensures data consistency and synchronization between components.


import { useState } from 'react'
import './App.css'
import Card from './components/Cards'
function App() {
  const [name,setName]=useState("");
  return (
    <>
      <Card name={name} setName={setName} />
        <p>Name in parent class : {name}</p>
    </>
  )
}

export default App
