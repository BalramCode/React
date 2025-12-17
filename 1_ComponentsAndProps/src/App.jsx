// Import the UserCard component from the "components" folder
// This allows us to use <UserCard /> inside this file
import UserCard from "./components/UserCard";

// Define the main App component (this is the root component of our React app)
function App() {
  return (
    <>
      {/* React Fragment (<></>) is used here to group multiple elements
          without adding an extra <div> in the DOM */}

      {/* First UserCard with Balram's details */}
      <UserCard
        name="Balram"                // Prop "name" → passed to UserCard
        img="/dosa.webp"             // Prop "img" → path of image
        desc="Description of Balram" // Prop "desc" → text description
      />

      {/* Second UserCard with Mithun's details */}
      <UserCard
        name="Mithun"
        img="/fastfood.webp"
        desc="Description of Mithun"
      />

      {/* Third UserCard with Rahul's details */}
      <UserCard
        name="Rahul"
        img="/Golgappe.webp"
        desc="Description of Rahul"
      />
    </>
  );
}

// Export the App component so it can be rendered in main.jsx (entry point)
export default App;
