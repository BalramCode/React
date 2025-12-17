// Import React so we can use JSX and create a functional component
import React from 'react'

// Import Link and NavLink from React Router
// - Link: for simple navigation
// - NavLink: used when you want to apply styles to the active link
import { Link, NavLink } from 'react-router-dom'

// Import the CSS file for styling the Navbar
import "./Navbar.css"

// Define a functional component called Navbar
const Navbar = () => {
  return (
    // React allows commenting out JSX using `{/* ... */}`
    // Below is a commented-out version using <Link> instead of <NavLink>

    /*
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>        // Navigates to "/"
        </li>
        <li>
          <Link to="/about">About</Link>  // Navigates to "/about"
        </li>
        <li>
          <Link to="/contact">Contact</Link>  // Navigates to "/contact"
        </li>
      </ul>
    </div>
    */

    // The working version below uses <NavLink> instead of <Link>
    // NavLink lets us style the currently active route link
    <div>
      <ul>
        <li>
          {/* NavLink to "/" (Home page) */}
          {/* className is set dynamically based on whether the link is active */}
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? "active-link" : ""}
          >
            Home
          </NavLink>
        </li>
        <li>
          {/* NavLink to "/about" (About page) */}
          <NavLink
            to="/about"
            className={({ isActive }) => isActive ? "active-link" : ""}
          >
            About
          </NavLink>
        </li>
        <li>
          {/* NavLink to "/contact" (Contact page) */}
          <NavLink
            to="/contact"
            className={({ isActive }) => isActive ? "active-link" : ""}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

// Export the Navbar component so it can be used in other parts of the app
export default Navbar
