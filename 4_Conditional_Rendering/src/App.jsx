// Conditional Rendering : Conditional rendering means displaying different UI elements or components based on certain conditions. It works just like conditions in JavaScript (if, else, or ternary operator). Instead of always showing the same content, React renders only the part of the UI that matches the given condition.


// Importing useState hook from React to manage state in functional component
import { useState } from 'react';
// Importing two child components
import LoggedIn from './components/LoggedIn'
import Logout from './components/Logout'

function App() {
  // Declaring a state variable "isLogin" with default value true
  // "Set" is the function to update the value of "isLogin"
  const [isLogin, Set] = useState(false);

  /*
  // Alternate way (long form) of conditional rendering:
  // If isLogin is true, return Logout component
  // Otherwise, return LoggedIn component
  if (isLogin) {
    return (
      <Logout />
    )
  }
  else {
    return (
      <LoggedIn />
    )
  }
  */

  return (
    <div>
      {/* Short form of conditional rendering using ternary operator (?) */}
      {/* If isLogin is true → show <Logout/> , else → show <LoggedIn/> */}
      {isLogin ? <Logout /> : <LoggedIn />}
    </div>  
  )
}

// Exporting App component so it can be used in main.jsx or index.js
export default App
