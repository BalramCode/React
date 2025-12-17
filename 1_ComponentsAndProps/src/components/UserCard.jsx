// Import React library so we can use JSX (JavaScript + HTML syntax)
import React from "react";

// Import the CSS file to style this component
import "./UserCard.css";

// Define a functional component named "UserCard"
// It receives 'props' (short for properties) from its parent component
const UserCard = (props) => {
  return (
    // The outer container with a CSS class applied
    <div className="user-container">
      
      {/* Display the name passed as a prop */}
      <p className="user-name">{props.name}</p>
      
      {/* Display an image using the src provided in props.img */}
      {/* The alt attribute also uses props.name for accessibility */}
      <img className="user-img" src={props.img} alt={props.name} />
      
      {/* Display the description passed as a prop */}
      <p className="user-desc">{props.desc}</p>
    </div>
  );
};

// Export this component so it can be imported and used in other files (like App.js)
export default UserCard;
