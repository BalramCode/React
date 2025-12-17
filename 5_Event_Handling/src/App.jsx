// Event handling : In React is the process of responding to user actions or interactions, such as clicks, mouse movements, keyboard input, or form submissions, by defining functions (event handlers) and assigning them to JSX elements using camelCase event attributes like onClick, onChange, or onSubmit. React uses a synthetic event system, which is a cross-browser wrapper around the native events, ensuring consistent behavior across all browsers.


// Import the CSS file for styling
import "./App.css"

// Define the main App component
function App() {

  // Function to handle a click event
  function handleClick() {
    // This will show a browser alert when called
    alert("I am clicked");
  }

  // Function to handle mouse over event
  function handleMouseOver() {
    // This will show a browser alert when mouse hovers over an element
    alert("I am MouseOver");
  }

  // Function to handle input change event
  function handleOnchange(e) {
    // 'e' is the event object
    // Logs the current value typed in the input field
    console.log("Value till now : ", e.target.value);
  }

  // Function to handle form submission
  function handleSubmit(e) {
    // Prevents the default behavior of form submission (page reload)
    e.preventDefault();
    // Shows an alert when form is submitted
    alert("submit kar du??")
  }

  return (
    // JSX: what this component will render
    // The commented code below shows handling click and mouseover events
    /* <div className='handle'>
    //   <button onClick={handleClick}>Click Me</button>  // Calls handleClick on button click
    //   <p style={{border:"2px solid"}} onMouseOver={handleMouseOver}>MouseOver</p> // Calls handleMouseOver when mouse hovers over paragraph
     </div>
     */

    // Current code renders a form with input and submit button
    <form onSubmit={handleSubmit}>  {/* Calls handleSubmit when the form is submitted */}
      <input type="text" onChange={handleOnchange} /> {/* Calls handleOnchange on every input change */}
      <button type="submit">Submit</button> {/* Submit button triggers onSubmit */}
    </form>
  )
}

// Export the App component so it can be used in index.js
export default App
