// Import React to use JSX and create components
import React from 'react'

// Import useNavigate hook from react-router-dom
// This hook allows us to navigate programmatically between routes
import { useNavigate } from 'react-router-dom'

// Define the Home functional component
const Home = () => {
  // Get the navigate function from useNavigate hook
  // We will use this to change the route programmatically
  const navigate = useNavigate()

  // Function to handle button click event
  // When called, it navigates the user to the "/about" page
  function handleClick() {
    navigate("/about") // Redirect to the About page route
  }

  // JSX returned by this component
  return (
    <div>
      {/* Display the text "Home" */}
      Home

      {/* Button that triggers handleClick on click */}
      <button onClick={handleClick}>Go to About</button>
    </div>
  )
}

// Export the Home component so it can be imported and used in other files
export default Home
